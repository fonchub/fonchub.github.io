window._CCSettings = {
    platform: "web-mobile",
    groupList: [
        "default",
        "sensor",
        "grass",
        "bird",
        "egg",
        "ground",
        "thorn",
        "bullet",
        "recommend",
        "prop"
    ],
    collisionMatrix: [
        [
            true
        ],
        [
            false,
            false,
            null,
            true,
            true
        ],
        [
            false,
            false,
            false,
            true,
            true,
            null,
            null,
            true
        ],
        [
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            null,
            null,
            true
        ],
        [
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            null,
            null,
            true
        ],
        [
            false,
            false,
            false,
            true,
            true,
            false,
            null,
            true
        ],
        [
            false,
            false,
            false,
            true,
            true,
            false,
            false
        ],
        [
            false,
            false,
            true,
            false,
            false,
            true,
            false,
            false
        ],
        [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        [
            false,
            false,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            false
        ]
    ],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/Scene/gameScene.fire",
    orientation: "portrait",
    debug: true,
    jsList: [
        "assets/Scripts/Utils/GameUtil.js",
        "assets/Scripts/Utils/Platform.js"
    ]
};
