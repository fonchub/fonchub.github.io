window.boot = function (basePath = '', callback = null) {
    var settings = window._CCSettings;
    window._CCSettings = undefined;
    var onProgress = null;
    
    var bundlePath = basePath ? basePath + 'assets/' : '';
    var RESOURCES = bundlePath + cc.AssetManager.BuiltinBundleName.RESOURCES;
    var INTERNAL = bundlePath + cc.AssetManager.BuiltinBundleName.INTERNAL;
    var MAIN = bundlePath + cc.AssetManager.BuiltinBundleName.MAIN;
    function setLoadingDisplay () {
        // Loading splash scene
        // var splash = document.getElementById('splash');
        // var progressBar = splash.querySelector('.progress-bar span');
        onProgress = function (finish, total) {
            // var percent = 100 * finish / total;
            // if (progressBar) {
            //     progressBar.style.width = percent.toFixed(2) + '%';
            // }
        };
        // splash.style.display = 'block';
        // progressBar.style.width = '0%';

        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            splash.style.display = 'none';
        });
    }

    var onStart = function () {

        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);

        if (cc.sys.isBrowser) {
            bundlePath || setLoadingDisplay();
        }

        if (cc.sys.isMobile) {
            if (settings.orientation === 'landscape') {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
            }
            else if (settings.orientation === 'portrait') {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            }
            // 自动全屏设置
            // cc.view.enableAutoFullScreen([
            //     cc.sys.BROWSER_TYPE_BAIDU,
            //     cc.sys.BROWSER_TYPE_BAIDU_APP,
            //     cc.sys.BROWSER_TYPE_WECHAT,
            //     cc.sys.BROWSER_TYPE_MOBILE_QQ,
            //     cc.sys.BROWSER_TYPE_MIUI,
            //     cc.sys.BROWSER_TYPE_HUAWEI,
            //     cc.sys.BROWSER_TYPE_UC,
            // ].indexOf(cc.sys.browserType) < 0);
        }

        // Limit downloading max concurrent task to 2,
        // more tasks simultaneously may cause performance draw back on some android system / browsers.
        // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
            cc.assetManager.downloader.maxConcurrency = 2;
            cc.assetManager.downloader.maxRequestsPerFrame = 2;
        }

        var launchScene = settings.launchScene;
        var bundle = cc.assetManager.bundles.find(function (b) {
            return b.getSceneInfo(launchScene);
        });
        
        bundle.loadScene(launchScene, null, onProgress,
            function (err, scene) {
                if (!err) {
                    window.platform.initPluginResource(() => {
                        cc.director.runSceneImmediate(scene);
                        if (cc.sys.isBrowser) {
                            // show canvas
                            var canvas = document.getElementById('GameCanvas');
                            canvas.style.visibility = '';
                            var div = document.getElementById('GameDiv');
                            if (div) {
                                div.style.backgroundImage = '';
                            }
                            console.log('Success to load scene: ' + launchScene);
                        }
                    })
                }
            }
        );
    };

    var option = {
        id: 'GameCanvas',
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: settings.debug,
        frameRate: 60,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
    };

    cc.assetManager.init({ 
        bundleVers: settings.bundleVers,
        remoteBundles: settings.remoteBundles,
        server: settings.server
    });
    
    var bundleRoot = [INTERNAL];
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);
    var count = 0;
    function cb (err) {
        if (err) return console.error(err.message, err.stack);
        count++;
        if (count === bundleRoot.length + 1) {
            cc.assetManager.loadBundle(MAIN, function (err) {
                if (!err) {
                    console.log('main.js 开始执行window.boot 的回调方法');
                    callback && callback();
                    cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
                    cc.game.run(option, onStart);
                }
            });
        }
    }

    cc.assetManager.loadScript(settings.jsList.map(function (x) { 
        return basePath + 'src/' + x;
    }), cb);

    for (var i = 0; i < bundleRoot.length; i++) {
        cc.assetManager.loadBundle(bundleRoot[i], cb);
    }
};

if (window.jsb) {
    var isRuntime = (typeof loadRuntime === 'function');
    if (isRuntime) {
        require(basePath + 'src/settings.js');
        require(basePath + 'src/cocos2d-runtime.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require(basePath + 'src/physics.js');
        }
        require(basePath + 'jsb-adapter/engine/index.js');
    }
    else {
        require(basePath + 'src/settings.js');
        require(basePath + 'src/cocos2d-jsb.js');
        if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
            require(basePath + 'src/physics.js');
        }
        require(basePath + 'jsb-adapter/jsb-engine.js');
    }

    cc.macro.CLEANUP_IMAGE_CACHE = true;
    window.boot(basePath, callback);
}