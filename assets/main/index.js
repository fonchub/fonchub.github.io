window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AnalyticsUtilities: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8ad26YR+9EN54JGjjiiOQb", "AnalyticsUtilities");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AnalyticsUtilities = function() {
      function AnalyticsUtilities() {}
      AnalyticsUtilities.logEvent = function(event, bundle) {
        void 0 === bundle && (bundle = null);
        return __awaiter(this, void 0, void 0, function() {
          var target;
          return __generator(this, function(_a) {
            target = null;
            if ("undefined" != typeof gmbox && gmbox["logEvent"]) {
              null != bundle ? bundle["event"] = event : bundle = {
                event: event
              };
              gmbox["logEvent"](bundle);
              target = "gmbox";
            }
            if ("undefined" !== typeof FBInstant && FBInstant["logEvent"]) {
              FBInstant["logEvent"](event, 1, bundle);
              target = "FB";
            }
            if ("undefined" !== typeof wx && wx["aldSendEvent"]) {
              wx["aldSendEvent"](event, bundle);
              target = "wx";
            }
            console.info("\u6253\u70b9" + target + ": event = " + event + ", bundle = " + JSON.stringify(bundle));
            return [ 2 ];
          });
        });
      };
      return AnalyticsUtilities;
    }();
    exports.default = AnalyticsUtilities;
    cc._RF.pop();
  }, {} ],
  AudioMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4310qOOsJLaZuNAeTaQNgO", "AudioMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Singleton_1 = require("../manager/Singleton");
    var AudioMgr = function(_super) {
      __extends(AudioMgr, _super);
      function AudioMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgmVolume = 1;
        _this.sfxVolume = 1;
        _this.bgmAudioID = -1;
        _this.audioId = -1;
        _this.bgmAudio = null;
        _this.lastplaysfxtime = {};
        _this.sfxcd = {
          zb1: 1500,
          zb2: 1500,
          hit: 300,
          merge_success: 100,
          skill_freeze: 300,
          skill_slow: 300
        };
        return _this;
      }
      AudioMgr.prototype.loadSounds = function() {
        var t = cc.sys.localStorage.getItem("bgmVolume");
        var t1 = cc.sys.localStorage.getItem("sfxVolume");
        this.bgmVolume = 0 == t ? 1 : Number(t);
        this.sfxVolume = 0 == t1 ? 1 : Number(t1);
      };
      AudioMgr.prototype.getUrl = function(url) {
        return cc.loader.getRes("sounds/" + url);
      };
      AudioMgr.prototype.playBGM = function(audioUrl) {
        if (!audioUrl) return;
        this.bgmAudio = audioUrl;
        this.bgmAudioID >= 0 && cc.audioEngine.stop(this.bgmAudioID);
        this.bgmVolume > 0 && (this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume));
      };
      AudioMgr.prototype.stopSFX = function(audioId) {
        var ok = cc.audioEngine.stop(audioId);
        return ok;
      };
      AudioMgr.prototype.playSFX = function(audioUrl) {
        if (this.sfxVolume > 0) {
          this.audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
          return this.audioId;
        }
      };
      AudioMgr.prototype.playdubbing = function(url) {
        var audioUrl = cc.loader.getRes("dubbing/" + url);
        if (this.sfxVolume > 0) {
          this.audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
          return this.audioId;
        }
      };
      AudioMgr.prototype.pauseBGM = function() {
        this.bgmAudioID >= 0 && cc.audioEngine.pause(this.bgmAudioID);
      };
      AudioMgr.prototype.resumBGM = function() {
        this.bgmAudioID >= 0 && cc.audioEngine.resume(this.bgmAudioID);
      };
      AudioMgr.prototype.setBGMVolume = function(v, force) {
        void 0 === force && (force = false);
        if (this.bgmVolume != v || force) {
          cc.sys.localStorage.setItem("bgmVolume", v);
          this.bgmVolume = v;
          cc.audioEngine.setVolume(this.bgmAudioID, v);
        }
        this.bgmAudioID >= 0 ? v > 0 ? cc.audioEngine.resume(this.bgmAudioID) : cc.audioEngine.pause(this.bgmAudioID) : this.playBGM(this.bgmAudio);
      };
      AudioMgr.prototype.setSFXVolume = function(v, force) {
        void 0 === force && (force = false);
        if (this.sfxVolume != v || force) {
          cc.sys.localStorage.setItem("sfxVolume", v);
          this.sfxVolume = v;
        }
      };
      return AudioMgr;
    }(Singleton_1.default);
    exports.default = AudioMgr;
    cc._RF.pop();
  }, {
    "../manager/Singleton": "Singleton"
  } ],
  BaseUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42f9dvGvrxMt6F8mhGvx9Ao", "BaseUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameEvent_1 = require("../event/GameEvent");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseUI = function(_super) {
      __extends(BaseUI, _super);
      function BaseUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.events = [];
        _this.m_objects = new Map();
        return _this;
      }
      BaseUI_1 = BaseUI;
      BaseUI.prototype.onBtnClicked = function(event, customEventData) {
        var btnName = event.target.name;
        switch (btnName) {
         case "btn_close":
          this.closeUI();
        }
      };
      BaseUI.prototype.onLoad = function() {
        this.events = [];
      };
      BaseUI.prototype._findInChildren = function(node, name) {
        var x = node.getChildByName(name);
        if (x) return x;
        if (0 == node.childrenCount) return null;
        for (var i = 0; i < node.childrenCount; ++i) {
          var tmp = this._findInChildren(node.children[i], name);
          if (tmp) return tmp;
        }
        return null;
      };
      BaseUI.prototype.GetGameObject = function(name, refind) {
        void 0 === refind && (refind = false);
        if (!cc.isValid(this.node)) return null;
        if (!refind) {
          if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name];
          if (name == this.node.name) return this.node;
        }
        if (-1 != name.indexOf("/")) {
          var tmp = cc.find(name, this.node);
          tmp && (this.m_objects[name] = tmp);
          return tmp;
        }
        var tmp = this._findInChildren(this.node, name);
        tmp && (this.m_objects[name] = tmp);
        return tmp;
      };
      BaseUI.prototype.GetSkeleton = function(name) {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(sp.Skeleton);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(sp.Skeleton);
        return null;
      };
      BaseUI.prototype.GetSprite = function(name) {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.Sprite);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.Sprite);
        return null;
      };
      BaseUI.prototype.SetSprite = function(name, filepath) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              var tmp = _this.GetSprite(name);
              tmp && Utils_1.default.loadRes(filepath, cc.SpriteFrame).then(function(ret) {
                if (cc.isValid(_this.node)) {
                  tmp.spriteFrame = ret;
                  resolve(null);
                }
              });
            }) ];
          });
        });
      };
      BaseUI.prototype.SetUrlSprite = function(name, filepath) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              var tmp = _this.GetSprite(name);
              tmp && Utils_1.default.load(filepath).then(function(ret) {
                if (cc.isValid(_this.node)) {
                  tmp.spriteFrame = ret;
                  resolve(null);
                }
              });
            }) ];
          });
        });
      };
      BaseUI.prototype.GetUrlSprite = function(filepath) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              Utils_1.default.load(filepath).then(function(ret) {
                cc.isValid(_this.node) && resolve(ret);
              });
            }) ];
          });
        });
      };
      BaseUI.prototype.GetPrefab = function(filepath) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              Utils_1.default.loadRes(filepath, cc.Prefab).then(function(ret) {
                cc.isValid(_this.node) && resolve(ret);
              });
            }) ];
          });
        });
      };
      BaseUI.prototype.GetJson = function(filepath) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              Utils_1.default.loadRes(filepath, cc.JsonAsset).then(function(ret) {
                cc.isValid(_this.node) && resolve(ret);
              });
            }) ];
          });
        });
      };
      BaseUI.prototype.GetText = function(name) {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.Label);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.Label);
        return null;
      };
      BaseUI.prototype.GetRichText = function(name) {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.RichText);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.RichText);
        return null;
      };
      BaseUI.prototype.GetProgressBar = function(name) {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.ProgressBar);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.ProgressBar);
        return null;
      };
      BaseUI.prototype.GetButton = function(name) {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.Button);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.Button);
        return null;
      };
      BaseUI.prototype.GetInputField = function(name) {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.EditBox);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.EditBox);
        return null;
      };
      BaseUI.prototype.GetSlider = function(name) {
        if (this.m_objects && this.m_objects.has(name)) return this.m_objects[name].getComponent(cc.Slider);
        var tmp = this.GetGameObject(name);
        if (tmp) return tmp.getComponent(cc.Slider);
        return null;
      };
      BaseUI.prototype.ShowLoading = function() {
        cc.find("loadingLayer").active = true;
      };
      BaseUI.prototype.HideLoading = function() {
        cc.find("loadingLayer").active = false;
      };
      BaseUI.prototype.SetText = function(TextID, content) {
        this.GetText(TextID) && (this.GetText(TextID).string = content);
      };
      BaseUI.prototype.SetInputText = function(TextID, content) {
        this.GetInputField(TextID) && (this.GetInputField(TextID).string = content);
      };
      BaseUI.prototype.SetProgressBar = function(TextID, p) {
        this.GetProgressBar(TextID) && (this.GetProgressBar(TextID).progress = p);
      };
      BaseUI.prototype.SliceNickname = function(str, n) {
        return str && str.length > n ? str.slice(0, n) + "..." : str;
      };
      BaseUI.prototype._isSkipNode = function(node) {
        if (this.node == node) return false;
        var b = node.getComponent(BaseUI_1);
        return null != b;
      };
      BaseUI.prototype.getChildByName = function(path, node) {
        return cc.find(path, node || this.node);
      };
      BaseUI.prototype.startAnim = function() {
        if (this.node) {
          this.node.opacity = 0;
          this.node.active = true;
          this.node.setScale(.8, .8);
          var delay = cc.delayTime(.1);
          var actionIn = cc.fadeIn(.1);
          var scaleTo = cc.scaleTo(.1, 1);
          this.node.runAction(cc.spawn(delay.clone(), actionIn, delay.clone(), scaleTo));
        }
      };
      BaseUI.prototype.shutAnim = function() {
        if (this.node) {
          this.node.active = false;
          this.node.parent = null;
          this.node.destroy();
        }
      };
      BaseUI.prototype.closeUI = function() {
        this.shutAnim();
      };
      BaseUI.prototype.onDestroy = function() {
        for (var i = 0; i < this.events.length; ++i) GameEvent_1.default.Instance().unregister(this, this.events[i]);
      };
      BaseUI.prototype.rigester = function(type, callFunc) {
        this.events.push(type);
        GameEvent_1.default.Instance().register(this, type, callFunc);
      };
      BaseUI.prototype.unregister = function(type) {
        GameEvent_1.default.Instance().unregister(this, type);
      };
      BaseUI.prototype.dispatch = function(type) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) data[_i - 1] = arguments[_i];
        (_a = GameEvent_1.default.Instance()).dispatch.apply(_a, __spreadArrays([ type ], data));
      };
      BaseUI.prototype.playSkAni = function(file, name, parent, pos, removetime) {
        void 0 === removetime && (removetime = -1);
        return __awaiter(this, void 0, void 0, function() {
          var node, skd, data;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              node = new cc.Node();
              node.parent = parent;
              node.position = pos;
              skd = node.addComponent(sp.Skeleton);
              return [ 4, Utils_1.default.loadRes(file, sp.SkeletonData) ];

             case 1:
              data = _a.sent();
              skd.skeletonData = data;
              skd.premultipliedAlpha = false;
              skd.setAnimation(0, name, false);
              -1 != removetime && node.runAction(cc.sequence(cc.delayTime(removetime), cc.callFunc(function() {
                node.parent = null;
              })));
              return [ 2, node ];
            }
          });
        });
      };
      BaseUI.prototype.localConvertWorldPointAR = function(node) {
        if (node) return node.convertToWorldSpaceAR(cc.v2(0, 0));
        return null;
      };
      BaseUI.prototype.localConvertWorldPoint = function(node) {
        if (node) return node.convertToWorldSpace(cc.v2(0, 0));
        return null;
      };
      BaseUI.prototype.worldConvertLocalPointAR = function(node, worldPoint) {
        if (node) return node.convertToNodeSpaceAR(worldPoint);
        return null;
      };
      BaseUI.prototype.worldConvertLocalPoint = function(node, worldPoint) {
        if (node) return node.convertToNodeSpace(worldPoint);
        return null;
      };
      BaseUI.prototype.convetOtherNodeSpace = function(node, targetNode) {
        if (!node || !targetNode) return null;
        var worldPoint = this.localConvertWorldPoint(node);
        return this.worldConvertLocalPoint(targetNode, worldPoint);
      };
      BaseUI.prototype.convetOtherNodeSpaceAR = function(node, targetNode) {
        if (!node || !targetNode) return null;
        var worldPoint = this.localConvertWorldPointAR(node);
        return this.worldConvertLocalPointAR(targetNode, worldPoint);
      };
      var BaseUI_1;
      BaseUI = BaseUI_1 = __decorate([ ccclass ], BaseUI);
      return BaseUI;
    }(cc.Component);
    exports.default = BaseUI;
    cc._RF.pop();
  }, {
    "../event/GameEvent": "GameEvent",
    "../utils/Utils": "Utils"
  } ],
  BigNumber: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29779EDnrJPKp0TmDE+JGoq", "BigNumber");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BigNumber = function() {
      function BigNumber() {}
      BigNumber_1 = BigNumber;
      BigNumber.getN = function(param1) {
        var _loc_2 = 0;
        while (_loc_2 < BigNumber_1.aLetters.length) {
          if (BigNumber_1.aLetters[_loc_2] == param1) return Math.pow(10, BigNumber_1.aLetters[_loc_2 + 1]);
          _loc_2 += 2;
        }
        return 0;
      };
      BigNumber.getLargeString = function(param1, param2, param3) {
        void 0 === param2 && (param2 = "K");
        void 0 === param3 && (param3 = true);
        if (0 == param1) return param1 + "";
        var _loc_8 = null;
        var _loc_11 = NaN;
        var _loc_4 = Math.round(param1 / Math.abs(param1));
        param1 = Math.abs(param1);
        var _loc_5 = param1;
        var _loc_6 = 0;
        var _loc_7 = 0;
        var _loc_9 = 0;
        var _loc_10 = 0;
        while (_loc_10 < BigNumber_1.aLetters.length) {
          if (BigNumber_1.aLetters[_loc_10] == param2) {
            _loc_7 = _loc_10;
            break;
          }
          _loc_10 += 2;
        }
        if (param1 < Math.pow(10, BigNumber_1.aLetters[_loc_7 + 1])) _loc_6 = -1; else {
          _loc_11 = Math.pow(10, BigNumber_1.aLetters[_loc_7 + 1]);
          _loc_6 = _loc_7 / 2;
          while (_loc_5 / 1e3 >= _loc_11) {
            _loc_5 /= 1e3;
            _loc_6++;
          }
          while (_loc_5 / 1e3 >= 1e3) _loc_5 /= 1e3;
        }
        if (-1 == _loc_6) return BigNumber_1.addSeparators(Math.round((param1 - .5) * _loc_4).toString());
        _loc_5 / 1e3 < 10 ? _loc_9 = 2 : _loc_5 / 1e3 < 100 && (_loc_9 = 1);
        _loc_5 /= Math.pow(10, 3 - _loc_9);
        _loc_5 = parseInt(_loc_5);
        _loc_5 /= Math.pow(10, _loc_9);
        return param3 ? (_loc_5 * _loc_4).toFixed(2) + "" + BigNumber_1.aLetters[2 * _loc_6] : (_loc_5 * _loc_4).toString() + "" + BigNumber_1.aLetters[2 * _loc_6];
      };
      BigNumber.addSeparators = function(param1, param2) {
        void 0 === param2 && (param2 = ",");
        var _loc_3 = "-" == param1.charAt(0);
        _loc_3 && (param1 = param1.substr(1));
        var _loc_4 = "";
        var _loc_5 = "";
        var _loc_6 = 0;
        var _loc_7 = param1.length - 1;
        while (_loc_7 > 0) {
          _loc_4 = param1.charAt(_loc_7) + _loc_4;
          _loc_6++;
          _loc_6 % 3 == 0 && (_loc_4 = param2 + _loc_4);
          _loc_7 -= 1;
        }
        _loc_4 = param1.charAt(0) + _loc_4;
        _loc_3 && (_loc_4 = "-" + _loc_4);
        return _loc_4;
      };
      BigNumber.convertToLargeString = function(param1) {
        return BigNumber_1.getStringOfNumber(param1);
      };
      BigNumber.getStringOfNumber = function(param1, param2, param3, param4) {
        void 0 === param2 && (param2 = false);
        void 0 === param3 && (param3 = false);
        void 0 === param4 && (param4 = false);
        var _loc_5 = 1;
        param4 && (_loc_5 = 10);
        var _loc_6 = Math.round(param1);
        if (Math.round(param1) >= 1e6 && _loc_6 < 1e9 && param2) return (Math.round(_loc_6 / 1e3 / _loc_5) / (1e3 / _loc_5)).toString() + " M";
        if (_loc_6 >= 1e9 && _loc_6 < 1e12) return (Math.round(_loc_6 / 1e6 / _loc_5) / (1e3 / _loc_5)).toString() + " B";
        if (_loc_6 >= 1e12 && _loc_6 < 1e15) return (Math.round(_loc_6 / 1e9 / _loc_5) / (1e3 / _loc_5)).toString() + " T";
        if (_loc_6 >= 1e15 && _loc_6 < 1e18) return (Math.round(_loc_6 / 1e12 / _loc_5) / (1e3 / _loc_5)).toString() + " q";
        if (_loc_6 >= 1e18 && _loc_6 < 1e21) return (Math.round(_loc_6 / 1e15 / _loc_5) / (1e3 / _loc_5)).toString() + " Qq";
        if (_loc_6 >= 1e21 && _loc_6 < 1e24) return (Math.round(_loc_6 / 1e18 / _loc_5) / (1e3 / _loc_5)).toString() + " s";
        if (_loc_6 >= 1e24 && _loc_6 < 1e27) return (Math.round(_loc_6 / 1e21 / _loc_5) / (1e3 / _loc_5)).toString() + " Ss";
        if (_loc_6 >= 1e27 && _loc_6 < 1e30) return (Math.round(_loc_6 / 1e24 / _loc_5) / (1e3 / _loc_5)).toString() + " O";
        if (_loc_6 >= 1e30 && _loc_6 < 1e33) return (Math.round(_loc_6 / 1e27 / _loc_5) / (1e3 / _loc_5)).toString() + " N";
        if (_loc_6 >= 1e33 && _loc_6 < 1e26) return (Math.round(_loc_6 / 1e30 / _loc_5) / (1e3 / _loc_5)).toString() + " d";
        if (_loc_6 >= 1e26 && _loc_6 < 1e29) return (Math.round(_loc_6 / 1e33 / _loc_5) / (1e3 / _loc_5)).toString() + " U";
        if (_loc_6 >= 1e29 && _loc_6 < 1e32) return (Math.round(_loc_6 / 1e26 / _loc_5) / (1e3 / _loc_5)).toString() + " Dd";
        var _loc_7 = " ";
        param3 && (_loc_7 = ",");
        var _loc_8 = "";
        var _loc_9 = String(Math.round(param1));
        var _loc_10 = String(Math.round(param1)).length - 1;
        while (_loc_10 >= 0) {
          _loc_8 = _loc_9.charAt(_loc_10) + _loc_8;
          3 == _loc_8.length && 0 != _loc_10 && (_loc_8 = _loc_7 + _loc_8);
          7 == _loc_8.length && 0 != _loc_10 && (_loc_8 = _loc_7 + _loc_8);
          _loc_10 -= 1;
        }
        return _loc_8;
      };
      var BigNumber_1;
      BigNumber.aLetters = [ "K", 3, "M", 6, "B", 9, "T", 12, "aa", 15, "bb", 18, "cc", 21, "dd", 24, "ee", 27, "ff", 30, "gg", 33, "hh", 36, "ii", 39, "jj", 42, "kk", 45, "ll", 48, "mm", 51, "nn", 54, "oo", 57, "pp", 60, "qq", 63, "rr", 66, "ss", 69, "tt", 72, "uu", 75, "vv", 78, "ww", 81, "xx", 84, "yy", 87, "zz", 90, "aaa", 93, "bbb", 96, "ccc", 99, "ddd", 102, "eee", 105, "fff", 108, "ggg", 111, "hhh", 114, "iii", 117, "jjj", 120, "kkk", 123, "lll", 126, "mmm", 129, "nnn", 132, "ooo", 135, "ppp", 138, "qqq", 141, "rrr", 144, "sss", 147, "ttt", 150, "uuu", 153, "vvv", 156, "www", 159, "xxx", 162, "yyy", 165, "zzz" ];
      BigNumber = BigNumber_1 = __decorate([ ccclass ], BigNumber);
      return BigNumber;
    }();
    exports.default = BigNumber;
    cc._RF.pop();
  }, {} ],
  Bird: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0563LqWcVKuqhnH3im6+AG", "Bird");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bird = function(_super) {
      __extends(Bird, _super);
      function Bird() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.speed = 0;
        _this.trailing = null;
        _this.birdIcon = null;
        _this.progress = null;
        _this._type = 0;
        _this._isAlive = false;
        _this._invincible = false;
        _this._invincibleTime = 0;
        return _this;
      }
      Bird.prototype.onLoad = function() {
        this.trailing = this.GetGameObject("trailing");
        this.birdIcon = this.GetSprite("icon");
        this.progress = this.GetProgressBar("progress");
        cc.systemEvent.on("UPDATE_SELECT_SKIN", this.changeNormalIcon, this);
        this._type = cc.find("Canvas").getComponent("GameModel")._birdType;
        this._isAlive = true;
        this._invincible = false;
        this._invincibleTime = 0;
        this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(this.speed, 0);
      };
      Bird.prototype.start = function() {};
      Bird.prototype.onEndContact = function(contact, selfCollider, otherCollider) {
        "grass" == otherCollider.node.group && (selfCollider.node.getChildByName("bird_huichen").active = false);
      };
      Bird.prototype.onPreSolve = function(contact, selfCollider, otherCollider) {
        if (this._isAlive && "thorn" == otherCollider.node.group) {
          console.log("ppppppppppp");
          return cc.systemEvent.emit("GAME_OVER");
        }
        if (this._isAlive && "grass" == otherCollider.node.group || "ground" == otherCollider.node.group) {
          var worldManifold = contact.getWorldManifold();
          if (this._isAlive && selfCollider.node.x < otherCollider.node.x && Math.abs(this.node.y - otherCollider.node.y) < this.node.height / 2) if (this._invincible) otherCollider.node.y <= -cc.winSize.height / 2 + 50 * cc.find("Canvas").getComponent("GameModel")._underLineNumber + this.node.width / 2 || otherCollider.node.destroy(); else {
            console.log("invincible");
            cc.systemEvent.emit("GAME_OVER");
          }
        }
      };
      Bird.prototype.update = function(dt) {
        this._isAlive && this.changeNormalIcon();
      };
      Bird.prototype.showDeadAnim = function() {
        var _this = this;
        var deadColor = [ [], [], [] ];
        Utils_1.default.GetPrefab("prefab/item/dead", function(prefab) {
          var props = cc.instantiate(prefab);
          props.active = true;
          _this.node.addChild(props);
        }, this);
      };
      Bird.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (!cc.find("Canvas").getComponent("GameModel").isGameStart) return;
        if (this._isAlive && "thorn" == otherCollider.node.group) {
          console.log("invincible");
          return cc.systemEvent.emit("GAME_OVER");
        }
        "grass" == otherCollider.node.group && this._isAlive;
        if (this._isAlive && "grass" == otherCollider.node.group || "ground" == otherCollider.node.group) {
          var worldManifold = contact.getWorldManifold();
          if (this._isAlive && selfCollider.node.x < otherCollider.node.x && Math.abs(this.node.y - otherCollider.node.y) < this.node.height / 2 && this._invincible) {
            otherCollider.node.y <= -cc.winSize.height / 2 + 50 * cc.find("Canvas").getComponent("GameModel")._underLineNumber + this.node.width / 2 || otherCollider.node.destroy();
            cc.systemEvent.emit("GAME_OVER");
            this.showDeadAnim();
          }
        }
      };
      Bird.prototype.showTrailing = function() {
        var _this = this;
        this.GetGameObject("trailing").active = true;
        this.scheduleOnce(function() {
          _this.GetGameObject("trailing").getComponent(cc.MotionStreak).color = cc.color(0, 0, 0, 57);
        }, .5);
      };
      Bird.prototype.hideTrailing = function() {
        this.GetGameObject("trailing").getComponent(cc.MotionStreak).color = cc.color(0, 0, 0, 0);
        this.GetGameObject("trailing").getComponent(cc.MotionStreak).reset();
        this.GetGameObject("trailing").active = false;
      };
      Bird.prototype.setSpeed = function(speed) {
        this.speed = speed;
        this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(this.speed, 0);
      };
      Bird.prototype.setBang = function() {
        this._isAlive = false;
        this.node.angle = 45;
        this.node.getComponent(cc.RigidBody).gravityScale = 0;
        this.changeBangIcon();
      };
      Bird.prototype.changeNormalIcon = function() {
        this._type = cc.find("Canvas").getComponent("GameModel")._birdType;
        Utils_1.default.setSpriteAssets(this.birdIcon, "bird");
      };
      Bird.prototype.changeBangIcon = function() {
        this._isAlive = false;
        Utils_1.default.setSpriteAssets(this.birdIcon, "bird");
      };
      Bird = __decorate([ ccclass ], Bird);
      return Bird;
    }(BaseUI_1.default);
    exports.default = Bird;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ],
  Bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29cc5sSXy1MDLDYycl+T+s1", "Bullet");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bullet = function(_super) {
      __extends(Bullet, _super);
      function Bullet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._bird = null;
        _this._pool = null;
        return _this;
      }
      Bullet.prototype.onLoad = function() {};
      Bullet.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        "grass" != otherCollider.node.group && "ground" != otherCollider.node.group && "thorn" != otherCollider.node.group || this._pool;
      };
      Bullet.prototype.setPool = function(pool) {
        this._pool = pool;
      };
      Bullet.prototype.setBird = function(bird) {
        this._bird = bird;
      };
      Bullet.prototype.update = function(dt) {
        if (this._bird && Math.abs(this.node.x - this._bird.x) > cc.winSize.width / 2 + 200) {
          this._pool ? this._pool.put(this.node) : this.node.destroy();
          return;
        }
        this.node.x += 35;
      };
      Bullet.prototype.start = function() {
        setTimeout(function() {
          this.node && (this._pool ? this._pool.put(this.node) : this.node.destroy());
        }.bind(this), 3e3);
      };
      Bullet = __decorate([ ccclass ], Bullet);
      return Bullet;
    }(BaseUI_1.default);
    exports.default = Bullet;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI"
  } ],
  CollectAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b99b16EtIlNPIt/oWO3inpG", "CollectAnimation");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CollectAnimation = function() {
      function CollectAnimation() {
        this.mCloneNode = null;
        var newnode = new cc.Node();
        this.mCloneNode = newnode;
        this.mNodePool = new cc.NodePool();
        for (var i = 0; i < 10; i++) {
          var node = cc.instantiate(this.mCloneNode);
          this.mNodePool.put(node);
        }
      }
      CollectAnimation.prototype.getNode = function() {
        return this.mNodePool.size() > 0 ? this.mNodePool.get() : cc.instantiate(this.mCloneNode);
      };
      CollectAnimation.prototype.playAnimation = function(node, targetPoint, circlePoint, callFunc, scatterTime, stayTime, flyTime) {
        void 0 === callFunc && (callFunc = null);
        var actions = [];
        node.scale = 0;
        var circleAction = cc.spawn(cc.scaleTo(scatterTime, 1).easing(cc.easeOut(3)), cc.moveTo(scatterTime, circlePoint).easing(cc.easeOut(3)));
        var targetMoveTime = flyTime * (1 + Math.random()) / 2;
        actions.push(circleAction);
        actions.push(cc.delayTime(stayTime));
        actions.push(cc.moveTo(targetMoveTime, targetPoint).easing(cc.easeIn(3)));
        actions.push(cc.callFunc(function() {
          callFunc && callFunc();
          this.mNodePool.put(node);
        }, this));
        node.stopAllActions();
        node.runAction(cc.sequence(actions));
      };
      CollectAnimation.prototype.play = function(startPoint, targetPoint, count, radius, callFunc, scatterTime, stayTime, flyTime) {
        void 0 === callFunc && (callFunc = null);
        void 0 === scatterTime && (scatterTime = .6);
        void 0 === stayTime && (stayTime = 0);
        void 0 === flyTime && (flyTime = .8);
        for (var i = 0; i < count; i++) {
          var angle = 360 / count * i;
          var x1 = startPoint.x + (radius - .2 * radius * Math.random()) * Math.cos(angle * Math.PI / 180);
          var y1 = startPoint.y + (radius - .2 * radius * Math.random()) * Math.sin(angle * Math.PI / 180);
          var circlePoint = cc.v2(x1, y1);
          var node = this.getNode();
          node.parent = cc.find("Canvas");
          node.position = startPoint;
          node.zIndex = cc.macro.MAX_ZINDEX;
          node.active = true;
          this.playAnimation(node, targetPoint, circlePoint, callFunc, scatterTime, stayTime, flyTime);
        }
      };
      return CollectAnimation;
    }();
    exports.default = CollectAnimation;
    cc._RF.pop();
  }, {} ],
  Config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10236Lr7+FIlrtppKmkFdJy", "Config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.diciConfig = void 0;
    exports.diciConfig = {
      1: [ cc.color(228, 228, 228), cc.color(0, 104, 185, .6) ],
      2: [ cc.color(250, 190, 0), cc.color(241, 171, 25, .6) ],
      3: [ cc.color(255, 174, 174), cc.color(209, 110, 110, .6) ],
      4: [ cc.color(4, 236, 4), cc.color(23, 192, 0, .6) ],
      5: [ cc.color(24, 24, 29), cc.color(0, 0, 0, .6) ],
      6: [ cc.color(7, 146, 255), cc.color(0, 104, 185, .6) ]
    };
    cc._RF.pop();
  }, {} ],
  Egg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f96f1TUwNJK4S1ByV02hdb", "Egg");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config_1 = require("../Config");
    var BaseUI_1 = require("../framwork/BaseUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Egg = function(_super) {
      __extends(Egg, _super);
      function Egg() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.speed = 0;
        _this._type = null;
        _this._enable = true;
        _this._isStop = false;
        _this.dici = null;
        return _this;
      }
      Egg.prototype.onEndContact = function(contact, selfCollider, otherCollider) {
        "grass" == otherCollider.node.group && (selfCollider.node.getChildByName("bird_huichen").active = false);
      };
      Egg.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (!this._enable) return;
        "bird" != otherCollider.node.group || otherCollider.node.getComponent("Bird")._isAlive || (contact.disabled = true);
        if ("thorn" == otherCollider.node.group) {
          this.GetGameObject("icon").active = false;
          this._enable = false;
          if (this.dici) {
            var props = cc.instantiate(this.dici);
            props.active = true;
            this.node.addChild(props);
            var _type = cc.find("Canvas").getComponent("GameModel")._birdType || "1";
            var parti = props.getComponent(cc.ParticleSystem);
            if (parti) {
              parti.startColor = Config_1.diciConfig[_type][0];
              parti.endColor = Config_1.diciConfig[_type][1];
            }
            this.node.removeComponent(cc.RigidBody);
            setTimeout(function() {
              selfCollider.node && selfCollider.node.isValid && selfCollider.node.destroy();
            }, 500);
          }
        }
        if (("grass" == otherCollider.node.group || "ground" == otherCollider.node.group) && Math.abs(selfCollider.node.y - otherCollider.node.y) < 76) {
          selfCollider.node._isStop = true;
          this.setSpeed(-300);
        }
        "grass" == otherCollider.node.group;
      };
      Egg.prototype.setSpriteFrmeFir = function(frme) {
        this.GetSprite("icon").spriteFrame = new cc.SpriteFrame(frme);
      };
      Egg.prototype.setDiCi = function(pfb) {
        this.dici = pfb;
      };
      Egg.prototype.changeNormal = function() {
        this._isStop = false;
        this.node["_isStop"] = false;
        this._type = cc.find("Canvas").getComponent("GameModel")._birdType;
        this.setSpeed(0);
      };
      Egg.prototype.start = function() {
        this._type = cc.find("Canvas").getComponent("GameModel")._birdType;
      };
      Egg.prototype.setSpeed = function(speed) {
        this.speed = speed;
        this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(this.speed, 0);
      };
      Egg.prototype.onLoad = function() {
        cc.systemEvent.on("UPDATE_SELECT_SKIN", this.changeNormal, this);
        this._type = cc.find("Canvas").getComponent("GameModel")._birdType;
        this._enable = true;
        this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(this.speed, 0);
      };
      Egg = __decorate([ ccclass ], Egg);
      return Egg;
    }(BaseUI_1.default);
    exports.default = Egg;
    cc._RF.pop();
  }, {
    "../Config": "Config",
    "../framwork/BaseUI": "BaseUI"
  } ],
  EventEmit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27b55N1typINLkjMrprME6G", "EventEmit");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("./framwork/BaseUI");
    var AnalyticsUtilities_1 = require("./utils/AnalyticsUtilities");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EventEmit = function(_super) {
      __extends(EventEmit, _super);
      function EventEmit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.topNode = null;
        _this.progress = null;
        _this.midLabel = null;
        _this.goldPanel = null;
        _this.level = null;
        _this.scoreboard = null;
        _this.miLabel = null;
        _this._perfectIconArr = [];
        _this._showPerfectCount = 0;
        _this.scorePos = null;
        _this.progressAnalytics = 0;
        return _this;
      }
      EventEmit.prototype.onLoad = function() {
        this.camera = this.GetGameObject("Main Camera");
        this.progress = this.GetSprite("progressbar");
        this.topNode = this.GetGameObject("ui_level");
        this.scoreboard = this.GetGameObject("scoreboard");
        this.level = this.GetText("lab_level");
        this.miLabel = this.GetText("lab_mi");
        cc.systemEvent.on("CLEAR_PERFECT_ICON", this.clearPrefectIcon, this);
        cc.systemEvent.on("CHANGE_CASH", this.changeCash, this);
        cc.systemEvent.on("PLAY_GOLD_ANIMATION", this.playGoldCollectAnimation, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this._perfectIconArr = [];
        this._showPerfectCount = 0;
        this.scorePos = this.GetGameObject("scoreboard").position;
      };
      EventEmit.prototype.onReadyGameState = function() {
        this.clearPrefectIcon();
        this.hideTopNode();
        this.scoreboard.active = false;
        this.resetProgress();
        this.GetGameObject("startBtn").active = true;
        this.GetGameObject("lessBtn").active = true;
      };
      EventEmit.prototype.onStartGameState = function() {
        this.showTopNode();
        this.scoreboard.active = true;
        cc.find("Canvas").getComponent("GameModel").isEndless ? this.scoreboard.x = 0 : this.scoreboard.x = this.scorePos.x;
        this.GetGameObject("startBtn").active = false;
        this.GetGameObject("lessBtn").active = false;
      };
      EventEmit.prototype.getProgress = function() {
        return this.progress.fillRange;
      };
      EventEmit.prototype.changeScoreLabel = function(score) {};
      EventEmit.prototype.resetProgress = function() {
        this.progress.fillRange = 0;
        for (var i = 1; i <= 3; i++) this.GetGameObject("star" + i).active = false;
        this.miLabel.string = "0";
      };
      EventEmit.prototype.changeProgress = function(num, score, propscore) {
        this.progress.fillRange = num;
        score && this.updateScore(score, propscore);
        this.reportProgress();
      };
      EventEmit.prototype.updateXing = function(num) {
        if (num < 1) return;
        if (this.GetGameObject("star" + num).active) return;
        this.GetGameObject("star" + num).scale = 0;
        this.GetGameObject("star" + num).active = true;
        cc.tween(this.GetGameObject("star" + num)).to(.2, {
          scale: 1.2
        }, {
          easing: "sineOut"
        }).to(.15, {
          scale: 1
        }, {
          easing: "sineIn"
        }).start();
      };
      EventEmit.prototype.updateScore = function(score, propscore) {
        this.miLabel.string = score + propscore + "";
      };
      EventEmit.prototype.reportProgress = function() {
        if (1 == cc.find("Canvas").getComponent("GameModel")._level) {
          this.progressAnalytics || (this.progressAnalytics = 10);
          if (100 * this.progress.fillRange >= this.progressAnalytics) {
            AnalyticsUtilities_1.default.logEvent("game_progress", {
              gameLevel: cc.find("Canvas").getComponent("GameModel")._level,
              progress: this.progressAnalytics + "%"
            });
            10 === this.progressAnalytics ? this.progressAnalytics = 30 : 30 === this.progressAnalytics ? this.progressAnalytics = 50 : 50 === this.progressAnalytics ? this.progressAnalytics = 70 : 70 === this.progressAnalytics && (this.progressAnalytics = 200);
          }
        }
      };
      EventEmit.prototype.start = function() {
        this.changeCash();
      };
      EventEmit.prototype.changeCash = function() {};
      EventEmit.prototype.clearPrefectIcon = function() {
        for (var index = 0; index < this._perfectIconArr.length; index++) {
          var element = this._perfectIconArr[index];
          element.destroy();
        }
        this._perfectIconArr = [];
        this._showPerfectCount = 0;
      };
      EventEmit.prototype.playGoldCollectAnimation = function() {
        window["goldCollectAnimation"].play(cc.v2(this.camera.x, 0), cc.v2(this.goldPanel.x + this.camera.x, this.goldPanel.y), 5, 200);
      };
      EventEmit.prototype.onTouchStart = function() {
        cc.systemEvent.emit("TOUCH_START");
      };
      EventEmit.prototype.onTouchMove = function() {
        cc.systemEvent.emit("TOUCH_MOVE");
      };
      EventEmit.prototype.onTouchEnd = function() {
        cc.systemEvent.emit("TOUCH_END");
      };
      EventEmit.prototype.showTopNode = function() {
        if (!cc.find("Canvas").getComponent("GameModel").isEndless) {
          this.topNode.active = true;
          this.changeLv();
        }
        AnalyticsUtilities_1.default.logEvent("game_start", {
          gameLevel: cc.find("Canvas").getComponent("GameModel")._level
        });
      };
      EventEmit.prototype.hideTopNode = function() {
        this.topNode.active = false;
      };
      EventEmit.prototype.changeLv = function() {
        this.level.string = cc.find("Canvas").getComponent("GameModel")._level;
      };
      EventEmit = __decorate([ ccclass ], EventEmit);
      return EventEmit;
    }(BaseUI_1.default);
    exports.default = EventEmit;
    cc._RF.pop();
  }, {
    "./framwork/BaseUI": "BaseUI",
    "./utils/AnalyticsUtilities": "AnalyticsUtilities"
  } ],
  GameConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5724dXIcyZJlaeMpHDcMjP+", "GameConst");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GAME_NAME = void 0;
    var GameConst = function() {
      function GameConst() {}
      GameConst.local_data_key = "PVSZ1001";
      GameConst.OPEN_WEITUOMAIDAN = "OPEN_WEITUOMAIDAN";
      GameConst.NEW_PLANT = "NEW_PLANT";
      GameConst.BUY_PLANT = "BUY_PLANT";
      return GameConst;
    }();
    exports.default = GameConst;
    exports.GAME_NAME = "PVSZ";
    cc._RF.pop();
  }, {} ],
  GameEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7159/ZI8FDoLZmT4PdLaLG", "GameEvent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Singleton_1 = require("../manager/Singleton");
    var GameEvent = function(_super) {
      __extends(GameEvent, _super);
      function GameEvent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.eventHash = {};
        _this.ower = null;
        _this.type = null;
        return _this;
      }
      GameEvent.prototype.register = function(ower, type, cb) {
        var event = {};
        event["ower"] = ower;
        event["type"] = type;
        event["callback"] = cb;
        this.eventHash.hasOwnProperty(type) || (this.eventHash[type] = []);
        this.eventHash[type].push(event);
      };
      GameEvent.prototype.unregister = function(ower, type) {
        var events = this.eventHash[type];
        events && events.length > 0 && events.forEach(function(event, index) {
          event.ower === ower && event.type === type && events.splice(index, 1);
        });
      };
      GameEvent.prototype.dispatch = function(type) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) data[_i - 1] = arguments[_i];
        var events = this.eventHash[type];
        if (events && events.length > 0) for (var i in events) {
          var event = events[i];
          event.callback && event.callback.apply(event, data);
        }
      };
      return GameEvent;
    }(Singleton_1.default);
    exports.default = GameEvent;
    cc._RF.pop();
  }, {
    "../manager/Singleton": "Singleton"
  } ],
  GameInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70a1eHDbtpKbo3Dkie25kO/", "GameInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UserMsg_1 = require("../framwork/UserMsg");
    var GameInfo = function() {
      function GameInfo() {
        UserMsg_1.UserMsg.gameType = window["platform"].getGameMode();
        UserMsg_1.UserMsg.gameLevel = window["platform"].getGameLevel();
        UserMsg_1.UserMsg.gameLevelTotal = window["platform"].getGameLevelTotal();
      }
      return GameInfo;
    }();
    exports.default = new GameInfo();
    cc._RF.pop();
  }, {
    "../framwork/UserMsg": "UserMsg"
  } ],
  GameModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f81bc4/1kpL7Id7zXhsz6yk", "GameModel");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = "undefined" !== typeof Symbol && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
        it && (o = it);
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var ME = require("../Script/event/ModuleEventEnum");
    var Utils = require("../Script/utils/Utils");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onWxShow: function onWxShow() {},
      onWxHide: function onWxHide() {},
      gainEnergy: function gainEnergy() {
        var date = new Date();
        this.energy++;
        this.energyLostTime = this.getLocalTime();
        if (this.energy >= this.maxEnergy) {
          this.energy = this.maxEnergy;
          this.energyLostTime = 0;
        }
        cc.systemEvent.emit("CHANGE_ENERGY");
        this.saveData();
      },
      isRewardEnergyLimited: function isRewardEnergyLimited() {
        return this.rewardEnergyCount >= 6;
      },
      rewardEnergy: function rewardEnergy(value) {
        var date = new Date();
        this.lastRewardEnergyTime = this.getLocalTime();
        this.rewardEnergyCount++;
        this.energy += value;
        this.energy >= this.maxEnergy && (this.energyLostTime = 0);
        this.saveData();
        cc.systemEvent.emit("CHANGE_ENERGY");
      },
      setLastMapConfig: function setLastMapConfig(config) {
        this._lastMapConfig = config;
        this.saveData();
      },
      isHaveBirdById: function isHaveBirdById(id) {
        for (var _iterator = _createForOfIteratorHelperLoose(this._haveBird), _step; !(_step = _iterator()).done; ) {
          var birdId = _step.value;
          if (birdId == Number(id)) return true;
        }
        return false;
      },
      isHaveSceneById: function isHaveSceneById(id) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(this._haveScene), _step2; !(_step2 = _iterator2()).done; ) {
          var sceneId = _step2.value;
          if (sceneId == Number(id)) return true;
        }
        return false;
      },
      addBirdByLv: function addBirdByLv() {
        for (var key in this._birdConfig) {
          var data = this._birdConfig[key];
          5 == Number(data.type) && this._level > Number(data.payMoney) && this.increaseBird(data.id);
        }
        this.saveData(true);
      },
      addScene: function addScene(id) {
        console.log(this._haveScene, "_haveScene");
        for (var _iterator3 = _createForOfIteratorHelperLoose(this._haveScene), _step3; !(_step3 = _iterator3()).done; ) {
          var birdId = _step3.value;
          if (birdId == Number(id)) return;
        }
        this._haveScene.push(Number(id));
        this.saveData(true);
        console.log(this._haveScene, "_haveScene");
      },
      increaseBird: function increaseBird(id) {
        for (var _iterator4 = _createForOfIteratorHelperLoose(this._haveBird), _step4; !(_step4 = _iterator4()).done; ) {
          var birdId = _step4.value;
          if (birdId == Number(id)) return;
        }
        this._haveBird.push(Number(id));
      },
      applySignReward: function applySignReward(isDouble, reward) {
        console.log("SignIn reward: ", reward);
        var localTime = this.getLocalTime();
        this.lastFetchSignInTime = localTime;
        this.fetchDays++;
        if (String(reward.rewardsMoney).indexOf("b") > -1) {
          this.increaseBird(String(reward.rewardsMoney).split("-")[1]);
          this.saveData();
        } else this.addCash(isDouble ? Number(reward.rewardsMoney) + Number(reward.extreRewards) : Number(reward.rewardsMoney));
        this.saveData(true);
        cc.systemEvent.emit("SIGN_IN_STATE");
        popUpMgr.getComponent("Pop").removeTop();
      },
      addCash: function addCash(value) {
        this.cash += Number(value);
        this.saveData();
        cc.systemEvent.emit("CHANGE_CASH");
      },
      updateBestScore: function updateBestScore() {
        if (Number(this._nowScore) < Number(this._bestScore)) return;
        this._bestScore = Number(this._nowScore);
        this.saveData();
        cc.systemEvent.emit("CHANGE_BEST_SCORE");
      },
      getFullTime: function getFullTime() {
        var nextTime = this.getNextEnergyTime();
        var nextE = this.energy + 1;
        var subE = this.maxEnergy - nextE;
        var rv = nextTime;
        rv += subE * this.energyCD;
        return rv;
      },
      getNextEnergyTime: function getNextEnergyTime() {
        return this.energyLostTime + this.energyCD;
      },
      deleteEnercy: function deleteEnercy() {
        this.energy--;
        this.energyLostTime = this.getLocalTime();
        this.saveData();
      },
      isEnergyFull: function isEnergyFull() {
        return this.energy >= this.maxEnergy;
      },
      saveData: function saveData(wx) {
        var obj = {};
        obj.cash = this.cash;
        obj.energy = 1e6;
        obj.energyLostTime = this.energyLostTime;
        obj.lastRewardEnergyTime = this.lastRewardEnergyTime;
        obj.rewardEnergyCount = this.rewardEnergyCount;
        obj.characterVideoCounts = this.characterVideoCounts;
        obj.getGoldTime = this.getGoldTime;
        obj.getGoldCount = this.getGoldCount;
        obj.resultCount = this.resultCount;
        obj.resultTodaySharedTime = this.resultTodaySharedTime;
        obj.fetchDays = this.fetchDays;
        obj.gotNextReward = this.gotNextReward;
        obj.gotAdvanceReward = this.gotAdvanceReward;
        obj.gotNewerReward = this.gotNewerReward;
        obj.lastFetchSignInTime = this.lastFetchSignInTime;
        obj.fetchDays = this.fetchDays;
        obj.gotHoverWinReward = this.gotHoverWinReward;
        obj.gotCollectReward = this.gotCollectReward;
        obj._birdType = this._birdType;
        obj._eggType = this._eggType;
        obj._showGuide = this._showGuide;
        obj._lastMapConfig = this._lastMapConfig;
        obj._lastTopObConfig = this._lastTopObConfig;
        obj._lastBangX = this._lastBangX;
        obj._lastBangY = this._lastBangY;
        obj._level = this._level;
        obj._bestScore = this._bestScore;
        obj._sceneType = this._sceneType;
        obj._haveScene = this._haveScene;
        obj._nowScore = this._nowScore;
        obj._haveBird = this._haveBird;
        cc.sys.localStorage.setItem("Bird", JSON.stringify(obj));
      },
      clearData: function clearData() {
        cc.sys.localStorage.setItem("Bird", JSON.stringify(obj));
      },
      readDataFromLocal: function readDataFromLocal() {
        var localGame = cc.sys.localStorage.getItem("Bird");
        if (localGame) {
          this.localCash = JSON.parse(localGame);
          this.formDatas();
          this._loadInfo = true;
        } else {
          this.cash = 0;
          this.energy = 10;
          this.energyLostTime = 0;
          this.characterVideoCounts = {};
          this._loadInfo = true;
        }
      },
      delayInitData: function delayInitData() {
        this.gotGameRecord || this.formDatas();
      },
      update: function update() {
        if (this.energy < this.maxEnergy) {
          var date = new Date();
          this.getLocalTime() >= this.energyLostTime + this.energyCD && this.gainEnergy();
        }
      },
      checkNewerShowCondtition: function checkNewerShowCondtition() {
        this.passLevelCount++;
        if (this.newerRewardCancelCount >= 2 && this.passLevelCount < 3) return 0;
        if (!this.gotNewerReward) return "Newer";
        if (!this.gotAdvanceReward) return "Advance";
        return 0;
      },
      onLoad: function onLoad() {
        this.isNeedEnergy = false;
        this.newcomerConfig = [];
        this.oldConfig = [];
        this.cash = 0;
        this.energy = 1e3;
        this.gotNextReward = 0;
        this.gotNewerReward = 0;
        this.gotAdvanceReward = 0;
        this.energyLostTime = 0;
        this.lastRewardEnergyTime = 0;
        this.rewardEnergyCount = 0;
        this.getGoldTime = 0;
        this.getGoldCount = 0;
        this.resultCount = 0;
        this.resultTodaySharedTime = 0;
        this.maxEnergy = 1e3;
        this.energyCD = 2e4;
        this.newerRewardCancelCount = 0;
        this.passLevelCount = 0;
        this.characterVideoCounts = {};
        this.gotHoverWinReward = 0;
        this.gotCollectReward = 0;
        this._haveBird = [ 1 ];
        this._birdType = 1;
        this._eggType = 1;
        this._lastMapConfig = [];
        this._lastTopObConfig = {};
        this._lastBangX = null;
        this._lastBangY = null;
        this._level = 1;
        this._bestScore = 0;
        this._nowScore = 0;
        this._sceneType = 1;
        this._haveScene = [ 1 ];
        this._underLineNumber = 5;
        this._showLuckyCount = 1;
        this._passLv = 0;
        this.localCash = {};
        this.readDataFromLocal();
        cc.systemEvent.on(ME.GOT_HTTP_RES, this.httpResDeal.bind(this));
        this.readDataFromLocal();
      },
      checkEnergy: function checkEnergy() {
        return this.energy > 0;
      },
      getRewardConfig: function getRewardConfig() {
        var day = this.fetchDays;
        null == day && (day = 0);
        if (day <= 7) return this.newcomerConfig;
        return this.oldConfig;
      },
      checkInConfig: function checkInConfig(err, asset) {
        if (err) {
          console.error(err);
          return;
        }
        var config = asset.json;
        for (var k in config) 1 == config[k].type ? this.newcomerConfig.push(config[k]) : 2 == config[k].type && this.oldConfig.push(config[k]);
        this.configLoadAdd();
      },
      initConfig: function initConfig() {
        this.configCount = 0;
        cc.systemEvent.on(ME.WX_SHOW, this.onWxShow.bind(this));
        cc.systemEvent.on(ME.WX_HIDE, this.onWxHide.bind(this));
        cc.loader.loadRes("config/GlobalDB", cc.JsonAsset, this.iniGlobalConfig.bind(this));
        cc.loader.loadRes("config/ObstacleDB", cc.JsonAsset, this.initObstacleConfig.bind(this));
        cc.loader.loadRes("config/BirdDB", cc.JsonAsset, this.initBirdConfig.bind(this));
        cc.loader.loadRes("config/SceneDB", cc.JsonAsset, this.initSceneConfig.bind(this));
        cc.loader.loadRes("config/CheckinDB", cc.JsonAsset, this.checkInConfig.bind(this));
      },
      configLoadAdd: function configLoadAdd() {
        this.configCount++;
        this.configCount >= 5 && cc.systemEvent.emit("CONFIG_LOAD_SUCCESS");
      },
      initBirdConfig: function initBirdConfig(error, asset) {
        this._birdConfig = {};
        console.log(asset, "bird");
        for (var k in asset.json) this._birdConfig[k] = asset.json[k];
        this.configLoadAdd();
      },
      initSceneConfig: function initSceneConfig(error, asset) {
        this._sceneConfig = {};
        console.log(asset, "scene");
        for (var k in asset.json) this._sceneConfig[k] = asset.json[k];
        this.configLoadAdd();
      },
      iniGlobalConfig: function iniGlobalConfig(error, asset) {
        this._globalConfig = {};
        console.log(asset, "golbal");
        for (var k in asset.json) this._globalConfig[k] = asset.json[k];
        this.cash || (this.cash = Number(this._globalConfig[10001].value));
        this.configLoadAdd();
      },
      initObstacleConfig: function initObstacleConfig(error, asset) {
        this._obstacleConfig = [];
        for (var k in asset.json) Number(k) >= 0 && this._obstacleConfig.push(asset.json[k]);
        this.configLoadAdd();
      },
      offlineEnergy: function offlineEnergy(value) {
        console.log("offlineEnergy:", value);
        this._offLineEnergy = value;
        this.saveData();
      },
      addEnergy: function addEnergy(count) {
        this.energy += Number(count);
        cc.systemEvent.emit("CHANGE_ENERGY");
        this.saveData();
      },
      getTodayGoldCount: function getTodayGoldCount() {
        if (!this.getGoldCount || !Utils.isTimeInToday(this.getGoldTime)) return 0;
        return this.getGoldCount;
      },
      getTodayGoldResidueCount: function getTodayGoldResidueCount() {
        var count = 5 - this.getTodayGoldCount();
        count < 0 && (count = 0);
        return count;
      },
      addTodayGoldCount: function addTodayGoldCount() {
        var count = this.getTodayGoldCount();
        count++;
        this.getGoldTime = new Date().getTime();
        this.getGoldCount = count;
        this.saveData();
        cc.systemEvent.emit("CHANGE_GET_GOLD");
      },
      getResultCount: function getResultCount() {
        if (!this.resultCount) return 0;
        return this.resultCount;
      },
      addResultCount: function addResultCount() {
        this.resultCount++;
        this.saveData();
      },
      isResultTodayShared: function isResultTodayShared() {
        return this.resultTodaySharedTime && Utils.isTimeInToday(this.resultTodaySharedTime);
      },
      setResultTodayShared: function setResultTodayShared() {
        this.resultTodaySharedTime = new Date().getTime();
        this.saveData();
      },
      formDatas: function formDatas(isDefault) {
        this.isEndless = false;
        this.cash = Number(this.localCash.cash);
        this.energy = Number(this.localCash.energy);
        this.energyLostTime = Number(this.localCash.energyLostTime);
        this.characterVideoCounts = this.localCash.characterVideoCounts;
        this.lastRewardEnergyTime = Number(this.localCash.lastRewardEnergyTime);
        this.rewardEnergyCount = Number(this.localCash.rewardEnergyCount);
        this.getGoldTime = Number(this.localCash.getGoldTime);
        this.getGoldCount = Number(this.localCash.getGoldCount);
        this.resultCount = Number(this.localCash.resultCount);
        this.resultTodaySharedTime = Number(this.localCash.resultTodaySharedTime);
        this.fetchDays = Number(this.localCash.fetchDays);
        this.gotNextReward = Number(this.localCash.gotNextReward);
        this.gotNewerReward = Number(this.localCash.gotNewerReward);
        this.gotAdvanceReward = Number(this.localCash.gotAdvanceReward);
        this.lastFetchSignInTime = Number(this.localCash.lastFetchSignInTime);
        this.fetchDays = Number(this.localCash.fetchDays);
        this.gotHoverWinReward = Number(this.localCash.gotHoverWinReward);
        this.gotCollectReward = Number(this.localCash.gotCollectReward);
        this._showGuide = this.localCash._showGuide;
        this._birdType = Number(this.localCash._birdType);
        this._eggType = Number(this.localCash._eggType);
        this._lastMapConfig = [];
        console.log("this.localCash._lastMapConfig", this.localCash._lastMapConfig);
        this._lastTopObConfig = this.localCash._lastTopObConfig;
        this._lastBangX = this.localCash._lastBangX;
        this._lastBangY = this.localCash._lastBangY;
        true;
        this._level = this.localCash._level;
        this._bestScore = this.localCash._bestScore;
        this._sceneType = this.localCash._sceneType;
        this._haveScene = this.localCash._haveScene;
        this._nowScore = this.localCash._nowScore;
        this._haveBird = this.localCash._haveBird;
        this._showGuide || (this._showGuide = 0);
        this.gotHoverWinReward || (this.gotHoverWinReward = 0);
        this.gotCollectReward || (this.gotCollectReward = 0);
        this._haveBird || (this._haveBird = [ 1 ]);
        this._haveScene || (this._haveScene = [ 1 ]);
        this._nowScore || (this._nowScore = 0);
        this._sceneType || (this._sceneType = 1);
        this._level || (this._level = 1);
        this._bestScore || (this._bestScore = 0);
        this._birdType || (this._birdType = 1);
        this._eggType || (this._eggType = 1);
        this._lastMapConfig || (this._lastMapConfig = []);
        this._lastTopObConfig || (this._lastTopObConfig = []);
        this.cash || (this.cash = 0);
        this.lastFetchSignInTime || (this.lastFetchSignInTime = 0);
        this.fetchDays || (this.fetchDays = 0);
        this.rewardEnergyCount || (this.rewardEnergyCount = 0);
        this.gotNextReward || (this.gotNextReward = 0);
        this.gotAdvanceReward || (this.gotAdvanceReward = 0);
        this.characterVideoCounts || (this.characterVideoCounts = {});
        this._lastMapConfig || (this._lastMapConfig = []);
        if (!this.energyLostTime) {
          this.energyLostTime = 0;
          (!this.energy || this.energy < this.maxEnergy) && (this.energy = this.maxEnergy);
        }
        var today = Math.floor(this.getLocalTime() / 86400 / 1e3);
        if (this.lastRewardEnergyTime) {
          var lastDay = Math.floor(this.lastRewardEnergyTime / 86400 / 1e3);
          var todayDate = new Date(86400 * lastDay * 1e3);
          var lastRewardDate = new Date(86400 * today * 1e3);
          console.log("lastRewardDate:", lastRewardDate.toString());
          console.log("todayDate:", todayDate.toString());
          if (lastDay < today) {
            this.rewardEnergyCount = 0;
            this.lastRewardEnergyTime = this.getLocalTime();
          }
        } else this.lastRewardEnergyTime = 0;
        var date = new Date();
        if (this.energy < this.maxEnergy && this.energyLostTime) {
          var subTime = this.getLocalTime() - this.energyLostTime;
          var addValue = Math.floor(subTime / (2 * this.energyCD));
          addValue + this.energy > this.maxEnergy && (addValue = this.maxEnergy - this.energy);
          this.energy += addValue;
          this.energyLostTime += addValue * this.energyCD * 2;
          this.energy >= this.maxEnergy && (this.energyLostTime = 0);
          this.offlineEnergy(addValue);
        }
        this.fetchDays || (this.fetchDays = 0);
        if (isDefault) return;
        this.saveData();
        cc.systemEvent.emit(ME.INIT_ROLEINFO_COMPLETED);
      },
      httpResDeal: function httpResDeal(event, messageName) {},
      getLocalTime: function getLocalTime() {
        var d = new Date();
        var rv = d.getTime() - 6e4 * d.getTimezoneOffset();
        return rv;
      }
    });
    cc._RF.pop();
  }, {
    "../Script/event/ModuleEventEnum": "ModuleEventEnum",
    "../Script/utils/Utils": "Utils"
  } ],
  GameSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "344faJncW9B5rEk2MB8H+2i", "GameSystem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Grass: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b41412nELhCDpjsRjR5mRVL", "Grass");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Grass = function(_super) {
      __extends(Grass, _super);
      function Grass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this._enable = false;
        _this._isPerfect = false;
        _this._type = -1;
        _this._actType = -1;
        _this._actDis = -1;
        _this._runing = false;
        return _this;
      }
      Grass.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        var _this = this;
        if (!this._enable) return;
        if ("bullet" == otherCollider.node.group) {
          cc.systemEvent.emit("ADD_ATK_NUMBER");
          this.icon.node.active = false;
          Utils_1.default.GetPrefab("prefab/item/bird_qiangbao", function(prefab) {
            var props = cc.instantiate(prefab);
            props.active = true;
            _this.node.addChild(props);
            console.log("\u64ad\u653e\u5c04\u51fb\u649e\u5230\u8349\u5730\u7684\u6548\u679c");
            _this._enable = false;
          });
          this.node.removeComponent(cc.PhysicsBoxCollider);
          setTimeout(function() {
            _this.node && _this.node.isValid && _this.node.destroy();
          }, 1e3);
        }
        "bird" == otherCollider.node.group && otherCollider.node.getComponent("Bird")._isAlive && this._isPerfect && Math.abs(this.node.x - otherCollider.node.x) < this.node.width / 2 + 5 && otherCollider.node.y - this.node.y > otherCollider.node.height / 2 + selfCollider.node.height / 2 - 5;
      };
      Grass.prototype.onLoad = function() {
        this.icon = this.GetSprite("icon");
        cc.systemEvent.on("DOACT", this.doAct, this);
        cc.systemEvent.on("UPDATE_SELECT_SCENE", this.changeNormalIcon, this);
        this._type = -1;
        this._actType = -1;
        this._actDis = -1;
        this._runing = false;
        this._isPerfect = false;
        this._enable = true;
      };
      Grass.prototype.start = function() {
        Utils_1.default.setSpriteAssets(this.icon, "blockgreen");
      };
      Grass.prototype.initType = function(type) {
        this._type = type;
      };
      Grass.prototype.addPerfect = function() {
        this._isPerfect = true;
      };
      Grass.prototype.doAct = function(data) {
        if (this._type != data) return;
        if (this._runing) return;
        this._runing = true;
        switch (this._actType) {
         case 1:
          console.log(this._actDis);
          var act = cc.moveTo(.1, this.node.x, this.node.y + this._actDis);
          this.node.runAction(act);
        }
      };
      Grass.prototype.changeNormalIcon = function() {
        Utils_1.default.setSpriteAssets(this.icon, "blockgreen");
      };
      Grass.prototype.addAct = function(type, actType, dis) {
        this._runing = false;
        this._type = type;
        this._actType = actType;
        this._actDis = dis + 20;
      };
      Grass.prototype.onEndContact = function(contact, selfCollider, otherCollider) {};
      Grass = __decorate([ ccclass ], Grass);
      return Grass;
    }(BaseUI_1.default);
    exports.default = Grass;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ],
  Ground: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50a96laZstHd6me2FBwgnZ/", "Ground");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Ground = function(_super) {
      __extends(Ground, _super);
      function Ground() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this._enable = false;
        _this._isPerfect = false;
        _this._runing = false;
        _this._type = null;
        _this._actType = null;
        _this._actDis = null;
        return _this;
      }
      Ground.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        var _this = this;
        if (!this._enable) return;
        if ("bullet" == otherCollider.node.group) {
          cc.systemEvent.emit("ADD_ATK_NUMBER");
          this.icon.node.active = false;
          Utils_1.default.GetPrefab("prefab/item/bird_qiangbao", function(prefab) {
            var props = cc.instantiate(prefab);
            props.active = true;
            _this.node.addChild(props);
            _this._enable = false;
          });
          this.node.removeComponent(cc.PhysicsBoxCollider);
          setTimeout(function() {
            _this.node && _this.node.isValid && _this.node.destroy();
          }, 2e3);
        }
        "bird" == otherCollider.node.group && otherCollider.node.getComponent("Bird")._isAlive && this._isPerfect && Math.abs(this.node.x - otherCollider.node.x) < this.node.width / 2 && Math.abs(otherCollider.node.y - this.node.y) > otherCollider.node.height - 5;
      };
      Ground.prototype.onLoad = function() {
        this.icon = this.GetSprite("icon");
        cc.systemEvent.on("DOACT", this.doAct, this);
        cc.systemEvent.on("UPDATE_SELECT_SCENE", this.changeNormalIcon, this);
        this._type = -1;
        this._actType = -1;
        this._actDis = -1;
        this._runing = false;
        this._isPerfect = false;
        this._enable = true;
      };
      Ground.prototype.doAct = function(data) {
        if (this._type != data) return;
        if (this._runing) return;
        this._runing = true;
        switch (this._actType) {
         case 1:
          console.log(this._actDis);
          var act = cc.moveTo(.1, this.node.x, this.node.y + this._actDis);
          this.node.runAction(act);
        }
      };
      Ground.prototype.start = function() {
        Utils_1.default.setSpriteAssets(this.icon, "block");
      };
      Ground.prototype.addPerfect = function() {
        this._isPerfect = true;
      };
      Ground.prototype.initType = function(type) {
        this._type = type;
      };
      Ground.prototype.addAct = function(type, actType, dis) {
        this._runing = false;
        this._type = type;
        this._actType = actType;
        this._actDis = dis + 20;
      };
      Ground.prototype.changeNormalIcon = function() {
        Utils_1.default.setSpriteAssets(this.icon, "block");
      };
      Ground.prototype.onEndContact = function(contact, selfCollider, otherCollider) {};
      Ground = __decorate([ ccclass ], Ground);
      return Ground;
    }(BaseUI_1.default);
    exports.default = Ground;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ],
  HTTP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67bbbOsI39IGox3ery2aUUG", "HTTP");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MsgHints_1 = require("../framwork/MsgHints");
    var UserMsg_1 = require("../framwork/UserMsg");
    var Utils_1 = require("./Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Http = function() {
      function Http() {}
      Http.sendRequest = function(path, data, handler, extraUrl, failhandler) {
        void 0 === extraUrl && (extraUrl = null);
        void 0 === failhandler && (failhandler = null);
        var xhr = new XMLHttpRequest();
        var str = "?";
        for (var k in data) {
          "?" != str && (str += "&");
          str += k + "=" + data[k];
        }
        null == extraUrl && (extraUrl = Http.url);
        var requestURL = extraUrl + path;
        data && (requestURL += encodeURI(str));
        Utils_1.default.ShowLoading();
        xhr.open("GET", requestURL, true);
        xhr.timeout = 1e4;
        xhr.onload = function() {
          var ret = JSON.parse(xhr.responseText);
          Utils_1.default.HideLoading();
          if (xhr.status >= 200 && xhr.status < 300 || 304 == xhr.status) handler && handler(ret); else {
            if (2 == ret["errcode"] || 1 == ret["errcode"]) {
              cc.sys.localStorage.removeItem("jwt");
              cc.director.loadScene("loading", function() {
                MsgHints_1.default.show("\u8d26\u6237\u4fe1\u606f\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u9646");
              });
              return;
            }
            xhr.abort();
          }
        };
        xhr.ontimeout = function(e) {
          cc.log(e);
          Utils_1.default.HideLoading();
          failhandler && failhandler();
        };
        xhr.onabort = function(e) {
          cc.log(e);
          Utils_1.default.HideLoading();
          failhandler && failhandler();
        };
        xhr.onerror = function(e) {
          cc.log(e);
          Utils_1.default.HideLoading();
          failhandler && failhandler();
        };
        xhr.send();
        return xhr;
      };
      Http.httpConnect_post_async = function(url, params, onBack) {
        var self = this;
        var requestURL = this.url + url;
        Utils_1.default.ShowLoading();
        Http.post(requestURL, params, function(eventName, xhr) {
          Utils_1.default.HideLoading();
          if ("COMPLETE" == eventName && 4 == xhr.readyState && xhr.status >= 200 && xhr.status < 400) {
            var response = JSON.parse(xhr.responseText);
            if (1 == response["errcode"] || 2 == response["errcode"] || 4 == response["errcode"]) {
              cc.sys.localStorage.removeItem("jwt");
              MsgHints_1.default.show("\u8d26\u6237\u4fe1\u606f\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u9646");
              window.location.href = "http://dstest.wondersun.com.cn/WechatWeb/";
            } else onBack && onBack(response);
          }
        }, this);
      };
      Http.catobj = function(obj) {
        var a = [];
        for (var k in obj) {
          var v = obj[k];
          var s = k + "=" + v;
          a.push(s);
        }
        return a.join("&");
      };
      Http.post = function(url, params, callback, thisObj) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {};
        xhr.onerror = function() {
          callback.call(thisObj, "ERROR", xhr);
        };
        xhr.onprogress = function() {
          callback.call(thisObj, "PROGRESS", xhr);
        };
        xhr.onloadend = function() {
          callback.call(thisObj, "COMPLETE", xhr);
        };
        xhr.ontimeout = function() {
          callback.call(thisObj, "TIMEOUT", xhr);
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var dataStr = "";
        Object.keys(params).forEach(function(key) {
          dataStr += key + "=" + encodeURIComponent(params[key]) + "&";
        });
        "" !== dataStr && (dataStr = dataStr.substr(0, dataStr.lastIndexOf("&")));
        xhr.send(dataStr);
      };
      Http.connect = function(url) {
        void 0 === url && (url = "");
        var self = this;
        cc.sys.platform == cc.sys.WECHAT_GAME ? this.wxCommect(url) : this.webCommect(url);
      };
      Http.webCommect = function(url) {
        var _this = this;
        void 0 === url && (url = "");
        var self = this;
        url = Http._url;
        if (self.inConnecting) return;
        self.inConnecting = true;
        if (self.isInit) {
          console.log("Network is already inited...");
          self.connect();
          return;
        }
        self.closedByClient = false;
        var host = "";
        host = url;
        self.index++;
        self.host = host;
        self.socket = new WebSocket(host);
        self.socket["xxxxx"] = self.index;
        console.log("socket1111111");
        self.socket.onopen = function(evt) {
          clearTimeout(_this._heartBeatTimer);
          _this._heartBeatTimer = setTimeout(function() {
            self.send("room", "ping", {});
          }, 5e3);
          console.log("Network onopen...", evt);
          self.isInit = true;
          _this.send("room", "login", {
            jwt: UserMsg_1.UserMsg.jwt
          });
        };
        self.socket.onmessage = function(evt) {
          var fileReader = new FileReader();
          fileReader.onload = function(progressEvent) {
            var arrayBuffer = this.result;
            var a = new Uint8Array(arrayBuffer);
            var packet = JSON.parse(self.Utf8ArrayToStr(a));
            self.appandeMsg(packet);
          };
          fileReader.readAsArrayBuffer(evt.data);
        };
        self.socket.onerror = function(evt) {
          console.log("onerror", JSON.stringify(evt));
          if (!self.socket) return;
          console.log("Network onerror...");
          _this.isInit = false;
          self.socketLock = false;
          self.sendList = [];
          self.inConnecting = false;
          self.socket.close();
          self.netErrorDummy(evt);
        };
        self.socket.onclose = function(evt) {
          if (!self.socket) return;
          cc.log("Network onclose...1", evt);
          evt["closeByClient"] = self.closedByClient;
          self.inConnecting = false;
          _this.isInit = false;
          self.socketLock = false;
          self.sendList = [];
          self.socket && self.socket.close();
          _this.netCloseDummy(evt);
        };
      };
      Http.wxCommect = function(url) {
        var _this = this;
        void 0 === url && (url = "");
        var self = this;
        if (self.inConnecting) return;
        self.inConnecting = true;
        var ws = this.wxsocket = wx.connectSocket({
          url: self._url,
          success: function() {
            console.log("connect socket success.");
          },
          fail: function() {
            console.log("connect socket fail.");
          }
        });
        ws.onOpen(function(evt) {
          console.log("Network onopen...", evt);
          clearTimeout(_this._heartBeatTimer);
          _this._heartBeatTimer = setTimeout(function() {
            self.send("room", "ping", {});
          }, 5e3);
          self.isInit = true;
          _this.send("room", "login", {
            jwt: UserMsg_1.UserMsg.jwt
          });
        });
        ws.onMessage(function(evt) {
          console.log("evt===>", evt);
          var a = new Uint8Array(evt.data);
          var packet = JSON.parse(self.Utf8ArrayToStr(a));
          self.appandeMsg(packet);
        });
        ws.onError(function(evt) {
          console.log("Network error...");
          console.log("error==>", JSON.stringify(evt));
          MsgHints_1.default.show("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f");
          self.inConnecting = false;
        });
        ws.onClose(function(evt) {
          console.log("Network close...");
          if (!self.wxsocket) return;
          self.inConnecting = false;
          _this.isInit = false;
          self.wxsocket && self.wxsocket.close();
          _this.netCloseDummy(evt);
        });
      };
      Http.send = function(c, m, data) {
        cc.sys.platform == cc.sys.WECHAT_GAME ? this.wxsend(c, m, data) : this.websend(c, m, data);
      };
      Http.websend = function(c, m, data) {
        var cmd = {
          c: c,
          m: m,
          data: data
        };
        if (this.isInit) {
          if (this.socket.readyState == WebSocket.OPEN) {
            var str = JSON.stringify(cmd);
            "ping" != cmd.m && cc.sys.isNative && console.log("\u53d1\u9001---------------------", JSON.stringify(cmd));
            this.socket.send(str);
          }
        } else cc.warn("Network is not inited...");
      };
      Http.wxsend = function(c, m, data) {
        var cmd = {
          c: c,
          m: m,
          data: data
        };
        if (this.isInit) {
          if (this.wxsocket.readyState == WebSocket.OPEN) {
            var str = JSON.stringify(cmd);
            "ping" != cmd.m && cc.sys.isNative && console.log("\u53d1\u9001---------------------", JSON.stringify(cmd));
            this.wxsocket.send({
              data: str
            });
          }
        } else cc.warn("Network is not inited...");
      };
      Http.close = function() {
        console.log("\u4e3b\u52a8\u5173\u95ed socket");
        cc.sys.platform == cc.sys.WECHAT_GAME ? this.wxclose() : this.webclose();
      };
      Http.webclose = function() {
        console.log("\u4e3b\u52a8\u5173\u95ed socket");
        if (this.socket) {
          this.socket.close();
          this.socket = null;
          this.isInit = false;
          this.closedByClient = true;
          this.inConnecting = false;
        }
      };
      Http.wxclose = function() {
        console.log("\u4e3b\u52a8\u5173\u95ed socket");
        if (this.socket) {
          this.wxsocket.close();
          this.wxsocket = null;
          this.isInit = false;
        }
      };
      Http.netDataDummy = function(event) {
        cc.sys.platform == cc.sys.WECHAT_GAME ? this.wxNetDataDummy(event) : this.webNetDataDummy(event);
      };
      Http.webNetDataDummy = function(event) {
        var self = this;
        if ("pong" == event.m) {
          clearTimeout(this._heartBeatTimer);
          this._heartBeatTimer = setTimeout(function() {
            self.send("room", "ping", {});
          }, 5e3);
        } else {
          if (event.data.errcode) {
            console.log("socket--\x3e", JSON.stringify(event));
            MsgHints_1.default.show(event.data.errmsg);
            return;
          }
          cc.director.emit(event.c + "_" + event.m, event.data);
        }
      };
      Http.wxNetDataDummy = function(event) {
        var self = this;
        if ("pong" == event.m) {
          clearTimeout(this._heartBeatTimer);
          this._heartBeatTimer = setTimeout(function() {
            self.send("room", "ping", {});
          }, 5e3);
        } else {
          if (event.data.errcode) {
            console.log("socket--\x3e", JSON.stringify(event));
            MsgHints_1.default.show(event.data.errmsg);
            return;
          }
          cc.director.emit(event.c + "_" + event.m, event.data);
        }
      };
      Http.netCloseDummy = function(event) {
        var self = this;
        if (!this.inConnecting) {
          UserMsg_1.UserMsg.initData();
          cc.director.loadScene("loginScene");
        }
      };
      Http.appandeMsg = function(data) {
        "pong" != data.m && cc.sys.isNative && console.log("---------------------\u63a5\u6536", JSON.stringify(data));
        data["src"] = "tcp";
        this.netDataDummy(data);
      };
      Http.Utf8ArrayToStr = function(array) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = array.length;
        i = 0;
        while (i < len) {
          c = array[i++];
          switch (c >> 4) {
           case 0:
           case 1:
           case 2:
           case 3:
           case 4:
           case 5:
           case 6:
           case 7:
            out += String.fromCharCode(c);
            break;

           case 12:
           case 13:
            char2 = array[i++];
            out += String.fromCharCode((31 & c) << 6 | 63 & char2);
            break;

           case 14:
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode((15 & c) << 12 | (63 & char2) << 6 | (63 & char3) << 0);
          }
        }
        return out;
      };
      Http.str2UTF8 = function(str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
          c = str.charCodeAt(i);
          if (c >= 65536 && c <= 1114111) {
            bytes.push(c >> 18 & 7 | 240);
            bytes.push(c >> 12 & 63 | 128);
            bytes.push(c >> 6 & 63 | 128);
            bytes.push(63 & c | 128);
          } else if (c >= 2048 && c <= 65535) {
            bytes.push(c >> 12 & 15 | 224);
            bytes.push(c >> 6 & 63 | 128);
            bytes.push(63 & c | 128);
          } else if (c >= 128 && c <= 2047) {
            bytes.push(c >> 6 & 31 | 192);
            bytes.push(63 & c | 128);
          } else bytes.push(255 & c);
        }
        return bytes;
      };
      Http.netErrorDummy = function(event) {};
      Http.url = "https://xm.tyhuoshi.cn/";
      Http._url = "wss://wss.tyhuoshi.cn:9501/websocket/";
      Http.isInit = false;
      Http.socket = null;
      Http.host = null;
      Http.instance = null;
      Http.closedByClient = false;
      Http.inConnecting = false;
      Http.index = 1;
      Http.sendList = [];
      Http.socketLock = false;
      return Http;
    }();
    exports.default = Http;
    cc._RF.pop();
  }, {
    "../framwork/MsgHints": "MsgHints",
    "../framwork/UserMsg": "UserMsg",
    "./Utils": "Utils"
  } ],
  MConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e631syKcJPSqPPgV6w0co7", "MConfig");
    var MConfig = {
      Game: {
        key: "Game",
        open: true
      }
    };
    module.exports = MConfig;
    cc._RF.pop();
  }, {} ],
  ModuleEventEnum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ddc5dLtk2pBrax6brh/TG/b", "ModuleEventEnum");
    "use strict";
    var ModuleEventEnum = {
      INIT_ROLEINFO_COMPLETED: "INIT_ROLEINFO_COMPLETED",
      WX_REGISTERED: "WX_REGISTERED",
      POP_REMOVED: "POP_REMOVED",
      POP_ADDED: "POP_ADDED",
      GOT_HTTP_RES: "GOT_HTTP_RES",
      WX_HIDE: "WX_HIDE",
      WX_SHOW: "WX_SHOW",
      GO_GAME: "GO_GAME",
      GO_LOADING: "GO_LOADING"
    };
    module.exports = ModuleEventEnum;
    cc._RF.pop();
  }, {} ],
  MsgHints: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92dbd3SRYhK45DBZfwlXoTf", "MsgHints");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PoolMgr_1 = require("../manager/PoolMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MsgHints = function(_super) {
      __extends(MsgHints, _super);
      function MsgHints() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MsgHints_1 = MsgHints;
      MsgHints.show = function(msg) {
        if ("" == msg) return;
        if (null == MsgHints_1._prefab) {
          cc.loader.loadRes("prefab/common/msg_hints", function(err, prefab) {
            if (err) return;
            MsgHints_1._prefab = prefab;
            PoolMgr_1.default.Instance().initPool("msg_hints", MsgHints_1._prefab, 20);
            MsgHints_1.show(msg);
          });
          return;
        }
        if (0 == PoolMgr_1.default.Instance().pools["msg_hints"].size()) return;
        var node = PoolMgr_1.default.Instance().get("msg_hints");
        node.scaleY = 0;
        node.parent = cc.find("Canvas");
        node.zIndex = 999;
        node.getChildByName("label").getComponent(cc.Label).string = msg;
        node.getComponent(cc.Animation).play("msghints", 0);
        node.getComponent(cc.Animation).on("finished", function() {
          PoolMgr_1.default.Instance().put("msg_hints", node);
        });
      };
      var MsgHints_1;
      MsgHints._prefab = null;
      MsgHints = MsgHints_1 = __decorate([ ccclass ], MsgHints);
      return MsgHints;
    }(cc.Component);
    exports.default = MsgHints;
    cc._RF.pop();
  }, {
    "../manager/PoolMgr": "PoolMgr"
  } ],
  NumberRoll: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7afd2vdphtCjKWi+cfBvmoW", "NumberRoll");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NumberRoll = function(_super) {
      __extends(NumberRoll, _super);
      function NumberRoll() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._cur = 0;
        _this._target = 0;
        _this._offset = 0;
        return _this;
      }
      NumberRoll.prototype.start = function() {
        this.label = this.node.getComponent(cc.Label);
      };
      Object.defineProperty(NumberRoll.prototype, "vaule", {
        set: function(n) {
          this._target = n;
          this._offset = Math.floor((this._target - this._cur) / Math.min(30, Math.abs(this._target - this._cur)));
        },
        enumerable: false,
        configurable: true
      });
      NumberRoll.prototype.update = function(dt) {
        if (1 / dt < cc.game.getFrameRate() / 2) {
          this.label.string = this._target + "";
          return;
        }
        if (this._cur != this._target) {
          this._cur += this._offset;
          this._offset > 0 && this._cur > this._target && (this._cur = this._target);
          this._offset < 0 && this._cur < this._target && (this._cur = this._target);
        }
        this.label.string = this._cur + "";
      };
      NumberRoll = __decorate([ ccclass ], NumberRoll);
      return NumberRoll;
    }(BaseUI_1.default);
    exports.default = NumberRoll;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI"
  } ],
  PlayerModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6cf5CUh5NBNoHlA1MZ7aF5", "PlayerModel");
    "use strict";
    var ME = require("../Script/event/ModuleEventEnum");
    cc.Class({
      extends: cc.Component,
      properties: {},
      initConfig: function initConfig() {},
      isLoginInterOpen: function isLoginInterOpen() {},
      isClickCountLimit: function isClickCountLimit(type) {
        if (!this.funcParams) return false;
        if (!this.funcParams[14]) return false;
        var limiteds = this.funcParams[14].split(",");
        for (var i = 0; i < limiteds.length; i++) if (limiteds[i] == String(type)) return true;
        return false;
      },
      checkItem: function checkItem(list) {
        var i = 0;
        while (i != list.length) list[i].navout_cnt > 0 ? list.splice(i, 1) : i++;
      },
      getResultRecommondRandomCount: function getResultRecommondRandomCount() {
        if (!this.funcParams) return 0;
        if (!this.funcParams[15]) return 0;
        return Number(this.funcParams[15]);
      },
      getInterstiRecommondRandomCount: function getInterstiRecommondRandomCount() {
        if (!this.funcParams) return 0;
        if (!this.funcParams[16]) return 0;
        return Number(this.funcParams[16]);
      },
      getBottomRecommondRandomCount: function getBottomRecommondRandomCount() {
        if (!this.funcParams) return 0;
        if (!this.funcParams[17]) return 0;
        return Number(this.funcParams[17]);
      },
      getBannerRecommondRandomCount: function getBannerRecommondRandomCount(cList) {
        if (!this.funcParams || !this.funcParams[18]) return 0;
        null == this.virBannerList && (this.virBannerList = this.funcParams[18].split(","));
        var list = [];
        list = list.concat(cList);
        var flag = 0;
        while (flag != this.virBannerList.length) {
          var count = parseInt(this.virBannerList[flag]);
          var checkList = list.splice(0, count);
          this.checkItem(checkList);
          console.log("checklist is : ", checkList);
          flag++;
          if (0 != checkList.length) return checkList;
        }
        return parseInt(this.virBannerList[flag - 1]);
      },
      getRecommondCount: function getRecommondCount() {
        if (!this.funcParams) return 9;
        if (!this.funcParams[12]) return 9;
        return Number(this.funcParams[12]);
      },
      getRecommondType: function getRecommondType() {
        if (!this.funcList) return false;
        if (!this.funcList[12] || "1" != this.funcList[12]) return false;
        return true;
      },
      checkVirBannerShow: function checkVirBannerShow(name) {},
      isIconRandomOrder: function isIconRandomOrder(type) {
        var id = 17;
        switch (type) {
         case "result":
          id = 15;
          break;

         case "interstitial":
          id = 16;
          break;

         case "bottom":
          id = 17;
          break;

         case "banner":
          id = 18;
        }
        if (!this.funcList) return false;
        if (!this.funcList[id] || "1" != this.funcList[id]) return false;
        return true;
      },
      addFuncOpenList: function addFuncOpenList(openList) {
        console.log("func opens:", openList);
        this.funcList = {};
        this.funcParams = {};
        for (var k in openList) {
          this.funcList[openList[k].func_id] = openList[k].is_open;
          this.funcParams[openList[k].func_id] = openList[k].func_params;
        }
      },
      checkVersion: function checkVersion(ver) {
        this.verisonValue = Number(ver);
      },
      checkFuncOpen: function checkFuncOpen(funcId, paramId) {
        if (!funcId) return !!this.funcList;
        if (this.funcList && this.funcList[funcId] && "1" == this.funcList[funcId]) {
          if (paramId) {
            var list = this.funcParams[funcId].split(",");
            for (var k in list) if (list[k] == String(paramId)) return true;
            return false;
          }
          return true;
        }
        return false;
      },
      dealAdOrder: function dealAdOrder(data) {
        if (data.ad_push_order) {
          this.adPushOrder = data.ad_push_order;
          this.headOrderIds = void 0 == this.adPushOrder["1"] || "" == this.adPushOrder["1"] ? null : this.adPushOrder["1"];
          this.loopOrderIds = void 0 == this.adPushOrder["2"] || "" == this.adPushOrder["2"] ? null : this.adPushOrder["2"];
        } else this.adPushOrder = null;
      },
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {
    "../Script/event/ModuleEventEnum": "ModuleEventEnum"
  } ],
  PlayerState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b53b7ni5atIEL+JwJlqLaQE", "PlayerState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  PoolMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47121gOvhBACYUKpowrObp+", "PoolMgr");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PoolMgr = function() {
      function PoolMgr() {
        this.pools = {};
        this.prefabs = {};
        this.pre_bullets = [];
      }
      PoolMgr_1 = PoolMgr;
      PoolMgr.Instance = function() {
        null == PoolMgr_1._instance && (PoolMgr_1._instance = new PoolMgr_1());
        return PoolMgr_1._instance;
      };
      PoolMgr.prototype.loadPrefabs = function() {};
      PoolMgr.prototype.initPool = function(key, prefab, count) {
        this.prefabs[key] = prefab;
        this.pools[key] = new cc.NodePool();
        for (var i = 0; i < count; ++i) this.pools[key].put(cc.instantiate(prefab));
      };
      PoolMgr.prototype.get = function(key) {
        if (null == this.pools[key]) {
          cc.error("\u6ca1\u6709" + key);
          return null;
        }
        if (this.pools[key].size() > 0) {
          var node = this.pools[key].get();
          var spine = node.getChildByName("spine");
          spine && (spine.getComponent(sp.Skeleton).paused = false);
          return node;
        }
        return cc.instantiate(this.prefabs[key]);
      };
      PoolMgr.prototype.put = function(key, node) {
        this.pools[key].put(node);
      };
      var PoolMgr_1;
      PoolMgr._instance = null;
      PoolMgr = PoolMgr_1 = __decorate([ ccclass ], PoolMgr);
      return PoolMgr;
    }();
    exports.default = PoolMgr;
    cc._RF.pop();
  }, {} ],
  Prop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b83bbWEuKJFnr8JeRW8aFq1", "Prop");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Prop = function(_super) {
      __extends(Prop, _super);
      function Prop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isOver = false;
        return _this;
      }
      Prop.prototype.initType = function() {
        var num = Utils_1.default.getRndInteger(1, 5);
        Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "fruit" + num);
      };
      Prop.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (!cc.find("Canvas").getComponent("GameModel").isGameStart) return;
        if ("bird" == otherCollider.node.group || "egg" == otherCollider.node.group) {
          if (this.isOver) return;
          this.isOver = true;
          cc.systemEvent.emit("addscore", {
            pos: this.node.position,
            node: this.node
          });
          selfCollider.node.destroy();
        }
      };
      Prop = __decorate([ ccclass ], Prop);
      return Prop;
    }(BaseUI_1.default);
    exports.default = Prop;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ],
  Sensor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bea5bvKxKdC+Y0Hxmzg5qoa", "Sensor");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Sensor = function(_super) {
      __extends(Sensor, _super);
      function Sensor() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.type = -1;
        return _this;
      }
      Sensor.prototype.onLoad = function() {
        this.type = -1;
      };
      Sensor.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {};
      Sensor.prototype.initType = function(type) {
        this.type = type;
      };
      Sensor.prototype.emitEvent = function() {
        cc.systemEvent.emit("DOACT", this.type);
      };
      Sensor.prototype.start = function() {};
      Sensor = __decorate([ ccclass ], Sensor);
      return Sensor;
    }(BaseUI_1.default);
    exports.default = Sensor;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI"
  } ],
  Shake: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "776856yN0hDUJ9tpRE0AmLJ", "Shake");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Shake = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Shake = function(_super) {
      __extends(Shake, _super);
      function Shake() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._initial_x = 0;
        _this._initial_y = 0;
        _this._strength_x = 0;
        _this._strength_y = 0;
        return _this;
      }
      Shake_1 = Shake;
      Shake.create = function(duration, strength_x, strength_y) {
        var act = new Shake_1();
        act.initWithDuration(duration, strength_x, strength_y);
        return act;
      };
      Shake.prototype.initWithDuration = function(duration, strength_x, strength_y) {
        cc.ActionInterval.prototype["initWithDuration"].apply(this, arguments);
        this._strength_x = strength_x;
        this._strength_y = strength_y;
        return true;
      };
      Shake.prototype.fgRangeRand = function(min, max) {
        var rnd = Math.random();
        return rnd * (max - min) + min;
      };
      Shake.prototype.update = function(time) {
        var randx = this.fgRangeRand(-this._strength_x, this._strength_x);
        var randy = this.fgRangeRand(-this._strength_y, this._strength_y);
        this.getTarget().setPosition(randx + this._initial_x, randy + this._initial_y);
      };
      Shake.prototype.startWithTarget = function(target) {
        cc.ActionInterval.prototype["startWithTarget"].apply(this, arguments);
        this._initial_x = target.x;
        this._initial_y = target.y;
      };
      Shake.prototype.stop = function() {
        this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
        cc.ActionInterval.prototype["stop"].apply(this);
      };
      var Shake_1;
      Shake = Shake_1 = __decorate([ ccclass ], Shake);
      return Shake;
    }(cc.ActionInterval);
    exports.Shake = Shake;
    cc._RF.pop();
  }, {} ],
  Singleton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ab77tNm3tNhp5gNq5QAZBD", "Singleton");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Singleton = function() {
      function Singleton() {}
      Singleton.Instance = function() {
        this.instance || (this.instance = new this());
        return this.instance;
      };
      return Singleton;
    }();
    exports.default = Singleton;
    cc._RF.pop();
  }, {} ],
  Thorn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0bb9cezy1CwbT8WRmU8dy5", "Thorn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Thorn = function(_super) {
      __extends(Thorn, _super);
      function Thorn() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Thorn.prototype.setReverse = function(isTrue) {
        this.node.angle = isTrue ? 180 : 0;
      };
      Thorn.prototype.onLoad = function() {
        Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "thorn");
      };
      Thorn.prototype.start = function() {};
      Thorn.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {};
      Thorn = __decorate([ ccclass ], Thorn);
      return Thorn;
    }(BaseUI_1.default);
    exports.default = Thorn;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ],
  TweenPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6885ldzr1Lfo0Z4iK1jdhx", "TweenPool");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TweenPool = void 0;
    var TweenPool = function() {
      function TweenPool() {
        this._tweens = [];
        this._isPlay = false;
      }
      TweenPool.prototype.add = function(tween) {
        this._tweens.push(tween);
      };
      TweenPool.prototype.clear = function() {
        var _a;
        this._isPlay = false;
        null === (_a = this._tweens) || void 0 === _a ? void 0 : _a.forEach(function(v) {
          return v.stop();
        });
        this._tweens = [];
      };
      TweenPool.prototype.start = function() {
        var _this = this;
        if (this._isPlay) return;
        if (this._tweens.length > 0) {
          var action = this._tweens.shift();
          action.then(cc.callFunc(function() {
            _this._isPlay = false;
            _this.start();
          }));
          this._isPlay = true;
          action.start();
        }
      };
      return TweenPool;
    }();
    exports.TweenPool = TweenPool;
    cc._RF.pop();
  }, {} ],
  UserMsg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19d10qVZLZMboDLwRs2Iqrv", "UserMsg");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UserMsg = void 0;
    var User_1 = require("./User");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UserMsg = function() {
      function UserMsg() {}
      UserMsg.setLoadHall = function(event) {
        event["user"] ? this.user.initData(event["user"]) : this.user = null;
      };
      UserMsg.user = new User_1.User();
      UserMsg.jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjYyMTA4MCwidG9rZW4iOiIzNjJkOGU3MTA0ZGEwNThmNzU5NmJmMWQ2ZDJiMjlkYjFmODcyOTQ4In0.hTnus5F_ycqTriBDlhIJB_YIFmCsQcXo1P5ceh5ERdE";
      UserMsg.gameType = 0;
      UserMsg.gameLevel = 0;
      UserMsg.gameLevelTotal = 0;
      UserMsg = __decorate([ ccclass ], UserMsg);
      return UserMsg;
    }();
    exports.UserMsg = UserMsg;
    cc._RF.pop();
  }, {
    "./User": "User"
  } ],
  User: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ab51mxonFC263ftDu+uJDh", "User");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.User = void 0;
    var User = function() {
      function User() {
        this.accountstatus = 0;
        this.car1 = 0;
        this.car2 = 0;
        this.city = "";
        this.coin = 0;
        this.country = "";
        this.createtime = 0;
        this.headimgurl = "";
        this.huaban1 = 0;
        this.huaban2 = 0;
        this.id = 0;
        this.mache = 0;
        this.motuo1 = 0;
        this.motuo2 = 0;
        this.nickname = "";
        this.phone = 0;
        this.province = "";
        this.score = 0;
        this.sex = 1;
        this.shangji = 0;
        this.unionid = "";
        this.updatetime = 0;
        this.usecar = "";
        this.usezhuangban = "";
        this.xcx_openid = "";
        this.zhuangban1 = 0;
        this.zhuangban2 = 0;
        this.zhuangban3 = 0;
      }
      User.prototype.initData = function(user) {
        user["accountstatus"] ? this.accountstatus = user["accountstatus"] : this.accountstatus = this.accountstatus;
        user["car1"] ? this.car1 = user["car1"] : this.car1 = this.car1;
        user["car2"] ? this.car2 = user["car2"] : this.car2 = this.car2;
        user["city"] ? this.city = user["city"] : this.city = this.city;
        user["coin"] ? this.coin = user["coin"] : this.coin = this.coin;
        user["country"] ? this.country = user["country"] : this.country = this.country;
        user["createtime"] ? this.createtime = user["createtime"] : this.createtime = this.createtime;
        user["headimgurl"] ? this.headimgurl = user["headimgurl"] : this.headimgurl = this.headimgurl;
        user["huaban1"] ? this.huaban1 = user["huaban1"] : this.huaban1 = this.huaban1;
        user["huaban2"] ? this.huaban2 = user["huaban2"] : this.huaban2 = this.huaban2;
        user["id"] ? this.id = user["id"] : this.id = this.id;
        user["mache"] ? this.mache = user["mache"] : this.mache = this.mache;
        user["motuo1"] ? this.motuo1 = user["motuo1"] : this.motuo1 = this.motuo1;
        user["motuo2"] ? this.motuo2 = user["motuo2"] : this.motuo2 = this.motuo2;
        user["nickname"] ? this.nickname = user["nickname"] : this.nickname = this.nickname;
        user["phone"] ? this.phone = user["phone"] : this.phone = this.phone;
        user["province"] ? this.province = user["province"] : this.province = this.province;
        user["score"] ? this.score = user["score"] : this.score = this.score;
        user["sex"] ? this.sex = user["sex"] : this.sex = this.sex;
        user["shangji"] ? this.shangji = user["shangji"] : this.shangji = this.shangji;
        user["unionid"] ? this.unionid = user["unionid"] : this.unionid = this.unionid;
        user["updatetime"] ? this.updatetime = user["updatetime"] : this.updatetime = this.updatetime;
        user["usecar"] ? this.usecar = user["usecar"] : this.usecar = this.usecar;
        user["usezhuangban"] ? this.usezhuangban = user["usezhuangban"] : this.usezhuangban = this.usezhuangban;
        user["xcx_openid"] ? this.xcx_openid = user["xcx_openid"] : this.xcx_openid = this.xcx_openid;
        user["zhuangban1"] ? this.zhuangban1 = user["zhuangban1"] : this.zhuangban1 = this.zhuangban1;
        user["zhuangban2"] ? this.zhuangban2 = user["zhuangban2"] : this.zhuangban2 = this.zhuangban2;
        user["zhuangban3"] ? this.zhuangban3 = user["zhuangban3"] : this.zhuangban3 = this.zhuangban3;
      };
      return User;
    }();
    exports.User = User;
    cc._RF.pop();
  }, {} ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff748PS7+hEIIiRCFvCwbSy", "Utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EFLY_TYPE = void 0;
    var Shake_1 = require("./Shake");
    var BaseUI_1 = require("../framwork/BaseUI");
    var BigNumber_1 = require("./BigNumber");
    var EFLY_TYPE;
    (function(EFLY_TYPE) {
      EFLY_TYPE[EFLY_TYPE["\u91d1\u5e01"] = 0] = "\u91d1\u5e01";
      EFLY_TYPE[EFLY_TYPE["\u4f53\u529b"] = 1] = "\u4f53\u529b";
      EFLY_TYPE[EFLY_TYPE["\u94bb\u77f3"] = 2] = "\u94bb\u77f3";
    })(EFLY_TYPE = exports.EFLY_TYPE || (exports.EFLY_TYPE = {}));
    var Utils = function() {
      function Utils() {}
      Utils.GetPrefab = function(path, cb, thisobj) {
        void 0 === cb && (cb = null);
        void 0 === thisobj && (thisobj = null);
        cc.loader.loadRes(path, cc.Prefab, function(err, prefab) {
          cb && cb.apply(thisobj, [ prefab ]);
        });
      };
      Utils.createUI = function(filepath, parent, callback) {
        void 0 === parent && (parent = null);
        void 0 === callback && (callback = null);
        return new Promise(function(resolve, reject) {
          cc.loader.loadRes(filepath, cc.Prefab, function(err, ret) {
            if (err) {
              console.error(err);
              reject();
              return;
            }
            null == parent && (parent = cc.find("Canvas"));
            var index = filepath.lastIndexOf("/");
            var name = filepath.substr(index + 1, filepath.length - index);
            if (parent.getComponentInChildren(name)) {
              console.log("\u91cd\u590dUI\u8df3\u8fc7");
              return;
            }
            var tmp = cc.instantiate(ret);
            tmp.opacity = 0;
            tmp.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
              tmp.opacity = 255;
            })));
            tmp.parent = parent;
            callback && callback(tmp);
            resolve(tmp);
          });
        });
      };
      Utils.createPrefab = function(filepath, parent, callback, pos) {
        void 0 === parent && (parent = null);
        void 0 === callback && (callback = null);
        void 0 === pos && (pos = null);
        return new Promise(function(resolve, reject) {
          cc.loader.loadRes(filepath, cc.Prefab, function(err, ret) {
            if (err) {
              console.error(err);
              reject();
              return;
            }
            null == parent && (parent = cc.find("Canvas"));
            var tmp = cc.instantiate(ret);
            tmp.opacity = 0;
            tmp.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
              tmp.opacity = 255;
            })));
            tmp.parent = parent;
            pos && (tmp.position = pos);
            callback && callback(tmp);
            resolve(tmp);
          });
        });
      };
      Utils.isTimeInToday = function(time) {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        var todayBegin = date.getTime();
        date.setDate(date.getDate() + 1);
        var todayEnd = date.getTime();
        return time >= todayBegin && time < todayEnd;
      };
      Utils.closeAllUI = function() {
        var ui = cc.find("Canvas");
        for (var i = 0; i < ui.childrenCount; ++i) {
          var baseui = ui.children[i].getComponent(BaseUI_1.default);
          baseui && baseui.closeUI();
        }
      };
      Utils.getRandom = function(lower, upper) {
        return Math.random() * (upper - lower) + lower;
      };
      Utils.getRandomInt = function(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
      };
      Utils.getRndInteger = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      Utils.seedRandomInt = function(lower, upper) {
        return Utils.getRandomInt(lower, upper);
      };
      Utils.formatNumber = function(num, afterdot) {
        void 0 === afterdot && (afterdot = 1);
        num = Math.floor(num);
        return BigNumber_1.default.getLargeString(num);
        var res;
        var tempNum;
        var powNum;
        var unit;
        var areaArr;
        var unitArr;
        var i;
        var tmp;
        var i;
      };
      Utils.getPowNum = function(p) {
        return Math.pow(10, p);
      };
      Utils.setServerTime = function(time) {
        Utils.timeOffset = time - new Date().getTime();
        cc.log("timeOffset:", Utils.timeOffset);
      };
      Utils.getServerTime = function() {
        return new Date().getTime() + Utils.timeOffset;
      };
      Utils.getTime = function() {
        return Math.round(parseInt(new Date() + "") / 1e3);
      };
      Utils.limit = function(src, min, max) {
        return Math.min(max, Math.max(min, src));
      };
      Utils.Shake = function(duration, strength_x, strength_y) {
        var camera = cc.find("Canvas/Main Camera");
        camera.x = 0;
        camera.y = 0;
        camera.stopAllActions();
        camera.runAction(Shake_1.Shake.create(duration, strength_x, strength_y));
      };
      Utils.addClickEvent = function(node, target, component, handler, customEventData) {
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        customEventData && (eventHandler.customEventData = customEventData);
        var clickEvents = node.getComponent(cc.Button).clickEvents;
        if (clickEvents.length > 0) {
          true;
          cc.warn("\u6309\u94ae\u5df2\u7ecf\u5b58\u5728\u7ed1\u5b9a\uff0c\u8df3\u8fc7\u81ea\u52a8\u7ed1\u5b9a", node.name);
          return;
        }
        console.log(node.name, target.name, component);
        clickEvents.push(eventHandler);
      };
      Utils.ShowLoading = function() {
        cc.find("loadingLayer").active = true;
      };
      Utils.HideLoading = function() {
        cc.find("loadingLayer").active = false;
      };
      Utils.getQueryString = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (null != r) return unescape(r[2]);
        return null;
      };
      Utils.getTimeStrByS = function(second) {
        second = Math.floor(second);
        second < 0 && (second = 0);
        var d = Math.floor(second / 3600 / 24);
        second -= 3600 * d * 24;
        var h = Math.floor(second / 3600);
        second -= 3600 * h;
        var m = Math.floor(second / 60);
        second -= 60 * m;
        var front = "00";
        front = h > 9 ? "" + h : "0" + h;
        var mid = "00";
        mid = m > 9 ? "" + m : "0" + m;
        var back = "00";
        back = second > 9 ? "" + second : "0" + second;
        if (d > 0) return d + "\u5929" + h + "\u65f6" + m + "\u5206";
        var longTime = h > 0;
        return longTime ? front + ":" + mid : mid + ":" + back;
      };
      Utils.formatCoin = function(num) {
        num = Math.floor(num);
        return BigNumber_1.default.getLargeString(num);
      };
      Utils.loadRes = function(path, type) {
        return new Promise(function(resolve, reject) {
          cc.loader.loadRes(path, type, function(err, ret) {
            if (err) {
              cc.error(path, err);
              reject(null);
            } else resolve(ret);
          });
        });
      };
      Utils.load = function(path) {
        return new Promise(function(resolve, reject) {
          cc.loader.load({
            url: path,
            type: "png"
          }, function(err, ret) {
            if (err) {
              cc.error(path, err);
              reject(null);
            } else {
              var spr = new cc.SpriteFrame(ret);
              resolve(spr);
            }
          });
        });
      };
      Utils.weight = function(v) {
        var mTotalWeight = 0;
        for (var i = 0; i < v.length; ++i) mTotalWeight += v[i];
        if (mTotalWeight <= 0) return -1;
        var randnum = Math.round(Math.random() * Number.MAX_VALUE) % mTotalWeight;
        for (var i = 0; i < v.length; ++i) {
          if (randnum < v[i]) return i;
          randnum -= v[i];
        }
        return -1;
      };
      Utils.fixFloat = function(val, count) {
        void 0 === count && (count = 2);
        var a = 100 * count;
        return Math.floor(val * a) / a;
      };
      Utils.moveN1toN2 = function(node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
      };
      Utils.convertNodeSpaceAR = function(node1, node2) {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
      };
      Utils.localConvertWorldPointAR = function(node) {
        if (node) return node.convertToWorldSpaceAR(cc.v2(0, 0));
        return null;
      };
      Utils.localConvertWorldPoint = function(node) {
        if (node) return node.convertToWorldSpace(cc.v2(0, 0));
        return null;
      };
      Utils.worldConvertLocalPointAR = function(node, worldPoint) {
        if (node) return node.convertToNodeSpaceAR(worldPoint);
        return null;
      };
      Utils.worldConvertLocalPoint = function(node, worldPoint) {
        if (node) return node.convertToNodeSpace(worldPoint);
        return null;
      };
      Utils.convetOtherNodeSpace = function(node, targetNode) {
        if (!node || !targetNode) return null;
        var worldPoint = this.localConvertWorldPoint(node);
        return this.worldConvertLocalPoint(targetNode, worldPoint);
      };
      Utils.convetOtherNodeSpaceAR = function(node, targetNode) {
        if (!node || !targetNode) return null;
        var worldPoint = this.localConvertWorldPointAR(node);
        return this.worldConvertLocalPointAR(targetNode, worldPoint);
      };
      Utils.setSpriteAssets = function(sprite, name) {
        window["platform"].getRes(name).then(function(texture) {
          sprite.spriteFrame = new cc.SpriteFrame(texture);
          sprite.node.getComponent(cc.Widget) && sprite.node.getComponent(cc.Widget).updateAlignment();
        });
      };
      Utils.showSuccess = function(data, touchEventNode) {
        cc.loader.loadRes("prefab/item/success", cc.Prefab, function(err, msg) {
          if (err) return cc.log("success\u52a0\u8f7d\u5931\u8d25");
          var node = cc.instantiate(msg);
          node.getComponent("success").show(data);
          node.parent = cc.find("Canvas");
          node.x = touchEventNode.x;
          node.y = touchEventNode.y;
          node.zIndex = 19999;
        });
      };
      Utils.showFail = function(data, touchEventNode) {
        cc.loader.loadRes("prefab/item/fail", cc.Prefab, function(err, msg) {
          if (err) return cc.log("fail\u52a0\u8f7d\u5931\u8d25");
          var node = cc.instantiate(msg);
          node.getComponent("fail").show(data);
          node.parent = cc.find("Canvas");
          node.x = touchEventNode.x;
          node.y = touchEventNode.y;
          node.zIndex = 19999;
        });
      };
      Utils.timeOffset = 0;
      return Utils;
    }();
    exports.default = Utils;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "./BigNumber": "BigNumber",
    "./Shake": "Shake"
  } ],
  addScore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76119QmsfxKeZhLLJ9NX3mC", "addScore");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var addScore = function(_super) {
      __extends(addScore, _super);
      function addScore() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      addScore.prototype.init = function() {
        Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "+5");
        this.anim();
      };
      addScore.prototype.anim = function() {
        var _this = this;
        cc.tween(this.node).call(function() {
          _this.node.opacity = 80;
        }).by(.5, {
          y: 70,
          opacity: 255
        }, {
          easing: "sineOut"
        }).delay(.5).by(.5, {
          y: 70,
          opacity: 0
        }, {
          easing: "sineIn"
        }).call(function() {
          _this.node.removeFromParent();
          _this.node.destroy();
        }).start();
      };
      addScore = __decorate([ ccclass ], addScore);
      return addScore;
    }(BaseUI_1.default);
    exports.default = addScore;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ],
  fail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd128g/5e5JZJmjAR1HqkIg", "fail");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var fail = function(_super) {
      __extends(fail, _super);
      function fail() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      fail.prototype.show = function(msg) {
        cc.find("Canvas").getComponent("GameModel").isEndless ? this.GetText("lab_title").string = "\u603b\u5206:" + msg.gameScore : this.GetText("lab_title").string = "\u603b\u5206:" + msg.gameScore + "\u661f\u661f:" + msg.gameGrade;
      };
      fail.prototype.onLoad = function() {
        this.startAnim();
      };
      fail.prototype.onRepeat = function() {
        cc.systemEvent.emit("RESET_GAME");
        this.onClose();
      };
      fail.prototype.onClose = function() {
        this.node.destroy();
      };
      fail = __decorate([ ccclass ], fail);
      return fail;
    }(BaseUI_1.default);
    exports.default = fail;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI"
  } ],
  gameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "gameScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventEmit_1 = require("./EventEmit");
    var BaseUI_1 = require("./framwork/BaseUI");
    var addScore_1 = require("./item/addScore");
    var Bird_1 = require("./item/Bird");
    var Egg_1 = require("./item/Egg");
    var homePanel_1 = require("./item/homePanel");
    var top_1 = require("./item/top");
    var AnalyticsUtilities_1 = require("./utils/AnalyticsUtilities");
    var AudioMgr_1 = require("./utils/AudioMgr");
    var CollectAnimation_1 = require("./utils/CollectAnimation");
    var Utils_1 = require("./utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameScene = function(_super) {
      __extends(gameScene, _super);
      function gameScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.moveSpeed = 0;
        _this._eggPool = [];
        _this._obstaclePool = [];
        _this._spObPool = [];
        _this._totalGroundLength = 0;
        _this._allObstacleNumber = 0;
        _this._dis = 0;
        _this._beginPosY = 0;
        _this._speed = 0;
        _this._crateEggTimeDis = 0;
        _this._createBulletTimeDis = 0;
        _this._endStageDeleteEggTimeDis = 0;
        _this._underLineNumber = 0;
        _this._topLineNumber = 0;
        _this._birdPosX = 0;
        _this._birdPosY = 0;
        _this._nowObstacleNumber = 0;
        _this._needCreateObstacle = false;
        _this._mapConfig = [];
        _this._topObConfig = [];
        _this._scoreCoefficient = 0;
        _this._nowLvScore = 0;
        _this.kuaiNum = 0;
        _this.showHeartAnimState = false;
        _this._obstacleConfig = null;
        _this._randomNum = null;
        _this.touchEventNode = null;
        _this.bg = null;
        _this.camera = null;
        _this.speedMax = 10;
        _this.birdPrefab = null;
        _this.eggPrefab = null;
        _this.grassPrefab = null;
        _this.groundPrefab = null;
        _this.propPrefab = null;
        _this.spObstaclePrefab = null;
        _this.thornPrefab = null;
        _this.sensorPrefab = null;
        _this.addScorePrefab = null;
        _this.homePanelPrefab = null;
        _this.bird_diciPrefab = null;
        _this.deadPrefab = null;
        _this.bird_block1 = null;
        _this.bird_block2 = null;
        _this.bird_block3 = null;
        _this.bird_block4 = null;
        _this.bird_block5 = null;
        _this.propScore = 0;
        _this._touchStart = false;
        _this._birdLead = null;
        _this._groundPool = null;
        _this._grassPool = null;
        _this._thornPool = null;
        _this._eggNodePool = null;
        _this._bulletPool = null;
        _this._spObNodePool = null;
        _this._gameOver = false;
        _this._nowGroundLength = 0;
        _this._mapConfigIndex = 0;
        _this._startBullet = false;
        _this._perfectCount = 0;
        _this._perfectCountDisTime = 0;
        _this._lastPerfectTime = 0;
        _this._bangNumber = 0;
        _this._startEndStage = false;
        _this._endStageLastDeleteEggTime = 0;
        _this._backGameCount = 0;
        _this._isWin = false;
        _this._showResult = false;
        _this._atkObstacleNumer = 0;
        _this._showAniCount = 0;
        _this._mapBeginPox = 0;
        _this.spObsIndex = 0;
        _this.grassIndex = 0;
        _this.propNum = 1;
        _this.propList = [];
        _this.topPrefabPool = [];
        _this.startTopPosX = 0;
        _this._mapTopBeginPox = -cc.winSize.width - 100;
        _this._lastCreateBulletTime = 0;
        _this._lastCreateEggTime = 0;
        _this.textIndex = 0;
        _this._homePanel = null;
        _this.heart = null;
        _this.score = 0;
        _this.leftScore = 0;
        _this.fen = 0;
        _this.speedMi = 0;
        return _this;
      }
      gameScene.prototype.onLoad = function() {
        cc.game.setFrameRate(59);
        cc.director.getPhysicsManager().enabled = true;
        cc.view.enableAntiAlias(false);
        window["goldCollectAnimation"] = new CollectAnimation_1.default();
        AnalyticsUtilities_1.default.logEvent("on_game_start");
        this.node.getComponent("PlayerModel").initConfig();
        this.node.getComponent("GameModel").initConfig();
        this.initView();
        this.initPool();
        this.onEvent();
      };
      gameScene.prototype.initView = function() {
        var _this = this;
        Utils_1.default.setSpriteAssets(this.GetSprite("background"), "bg");
        window["platform"].getRes("particle").then(function(texture) {
          _this.GetGameObject("bird_beijing").getComponent(cc.ParticleSystem).spriteFrame = new cc.SpriteFrame(texture);
        });
      };
      gameScene.prototype.initModel = function() {
        this.camera = this.GetGameObject("Main Camera");
        this.bg = this.GetGameObject("background");
        this.touchEventNode = this.GetGameObject("touchEvent");
        Utils_1.default.setSpriteAssets(this.GetSprite("progressbar_bg"), "progressbar_bg");
        Utils_1.default.setSpriteAssets(this.GetSprite("progressbar"), "progressbar");
        Utils_1.default.setSpriteAssets(this.GetSprite("star1"), "star");
        Utils_1.default.setSpriteAssets(this.GetSprite("star2"), "star");
        Utils_1.default.setSpriteAssets(this.GetSprite("star3"), "star");
        Utils_1.default.setSpriteAssets(this.GetSprite("scoreboard"), "scoreboard");
        Utils_1.default.setSpriteAssets(this.GetSprite("levelboard"), "levelboard");
        this._obstacleConfig = this.node.getComponent("GameModel")._obstacleConfig;
        this.moveSpeed = 300;
        this._eggPool = [];
        this._obstaclePool = [];
        this._spObPool = [];
        this._totalGroundLength = 0;
        this._allObstacleNumber = this.score_speed().obsNum;
        this._dis = 80;
        this._beginPosY = -(cc.winSize.height / 2 + 80 - 42);
        this.node.getComponent("GameModel")._level < 20 ? this._speed = 3 : Math.floor(this.node.getComponent("GameModel")._level / 20) > this.speedMax ? this._speed = this.speedMax : this._speed = 3 + Math.floor(this.node.getComponent("GameModel")._level / 20);
        this._crateEggTimeDis = 200;
        this._createBulletTimeDis = 120;
        this._endStageDeleteEggTimeDis = 300;
        this._randomNum = this._obstacleConfig.length;
        this._underLineNumber = 5;
        this._topLineNumber = 3;
        this._birdPosX = -cc.winSize.width / 2 + 150;
        this._birdPosY = -cc.winSize.height / 2 + this._dis * (this._underLineNumber + 1) + 50;
        this._nowObstacleNumber = 0;
        this._needCreateObstacle = true;
        this._mapConfig = [];
        this._topObConfig = [];
        this._scoreCoefficient = 0;
        this._nowLvScore = 0;
        this.kuaiNum = 0;
        this.showHeartAnimState = false;
      };
      gameScene.prototype.onEvent = function() {
        cc.systemEvent.on("LONGRECOMMEND_SHOW_RESULT", this.showResultPanel, this);
        cc.systemEvent.on("START_GAME", this.startGame, this);
        cc.systemEvent.on("GAME_OVER", this.gameOver, this);
        cc.systemEvent.on("BACK_GAME", this.backGame, this);
        cc.systemEvent.on("BACK_GAME_COUNTDOWN_OVER", this.backGameCountDownOver, this);
        cc.systemEvent.on("TOUCH_START", this.onTouchStart, this);
        cc.systemEvent.on("TOUCH_MOVE", this.onTouchMove, this);
        cc.systemEvent.on("TOUCH_END", this.onTouchEnd, this);
        cc.systemEvent.on("CHANGE_GRAVITYSCALE", this.changeGravity, this);
        cc.systemEvent.on("RESET_GAME", this.resetMap, this);
        cc.systemEvent.on("PERFECT", this.showPerfect, this);
        cc.systemEvent.on("DOACT", this.CheckObstacleDoAct, this);
        cc.systemEvent.on("ADD_ATK_NUMBER", this.addAtkNumber, this);
        cc.systemEvent.on("SHOW_DEAD", this.showDead, this);
        cc.systemEvent.on("CONFIG_LOAD_SUCCESS", this.loadConfigCall, this);
        cc.systemEvent.on("addscore", this.addscore, this);
      };
      gameScene.prototype.addscore = function(msg) {
        this.propScore += 5;
        this.touchEventNode.getComponent(EventEmit_1.default).updateXing(this.fen_level());
        for (var i = 0; i < this.propList.length; i++) this.propList[i] == msg.node && this.propList.splice(i, 1);
        var node = cc.instantiate(this.addScorePrefab);
        node.getComponent(addScore_1.default).init();
        node.setPosition(msg.pos);
        node.parent = this.node;
        node.zIndex = 4;
        window["platform"].getRes("GetProps", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
      };
      gameScene.prototype.loadConfigCall = function() {
        var _this = this;
        cc.loader.loadRes("prefab/item/bird", cc.Prefab, function(err, msg) {
          if (err) {
            cc.log("bird\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
            window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
            return;
          }
          _this.birdPrefab = msg;
          cc.loader.loadRes("prefab/item/egg", cc.Prefab, function(err, msg) {
            if (err) {
              cc.log("egg\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
              window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
              return;
            }
            _this.eggPrefab = msg;
            cc.loader.loadRes("prefab/item/grass", cc.Prefab, function(err, msg) {
              if (err) {
                cc.log("grass\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                return;
              }
              _this.grassPrefab = msg;
              cc.loader.loadRes("prefab/item/ground", cc.Prefab, function(err, msg) {
                if (err) {
                  cc.log("ground\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                  window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                  return;
                }
                _this.groundPrefab = msg;
                cc.loader.loadRes("prefab/item/prop", cc.Prefab, function(err, msg) {
                  if (err) {
                    cc.log("prop\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                    window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                    return;
                  }
                  _this.propPrefab = msg;
                  cc.loader.loadRes("prefab/item/spObstacle", cc.Prefab, function(err, msg) {
                    if (err) {
                      cc.log("spObstacle\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                      window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                      return;
                    }
                    _this.spObstaclePrefab = msg;
                    cc.loader.loadRes("prefab/item/thorn", cc.Prefab, function(err, msg) {
                      if (err) {
                        cc.log("thorn\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                        window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                        return;
                      }
                      _this.thornPrefab = msg;
                      cc.loader.loadRes("prefab/item/sensor", cc.Prefab, function(err, msg) {
                        if (err) {
                          cc.log("sensor\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                          window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                          return;
                        }
                        _this.sensorPrefab = msg;
                        cc.loader.loadRes("prefab/item/addScore", cc.Prefab, function(err, msg) {
                          if (err) {
                            cc.log("addScore\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                            window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                            return;
                          }
                          _this.addScorePrefab = msg;
                          cc.loader.loadRes("prefab/item/homePanel", cc.Prefab, function(err, msg) {
                            if (err) {
                              cc.log("addScore\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                              window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                              return;
                            }
                            _this.homePanelPrefab = msg;
                            cc.loader.loadRes("prefab/item/bird_dici", cc.Prefab, function(err, msg) {
                              if (err) {
                                cc.log("bird_dici\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                                window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                                return;
                              }
                              _this.bird_diciPrefab = msg;
                              cc.loader.loadRes("prefab/item/dead", cc.Prefab, function(err, msg) {
                                if (err) {
                                  cc.log("dead\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                                  window["platform"].showMsg("\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
                                  return;
                                }
                                _this.deadPrefab = msg;
                                window["platform"].getRes("bird_block1").then(function(texture) {
                                  _this.bird_block1 = texture;
                                  window["platform"].getRes("bird_block2").then(function(texture) {
                                    _this.bird_block2 = texture;
                                    window["platform"].getRes("bird_block3").then(function(texture) {
                                      _this.bird_block3 = texture;
                                      window["platform"].getRes("bird_block4").then(function(texture) {
                                        _this.bird_block4 = texture;
                                        window["platform"].getRes("bird_block5").then(function(texture) {
                                          _this.bird_block5 = texture;
                                          _this.initModel();
                                          _this.resetMap();
                                          false;
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      };
      gameScene.prototype.onTouchStart = function() {
        this._touchStart = true;
        this.createEgg();
      };
      gameScene.prototype.onTouchMove = function() {};
      gameScene.prototype.onTouchEnd = function() {
        this._touchStart = false;
      };
      gameScene.prototype.showDead = function(pos) {
        var props = cc.instantiate(this.deadPrefab);
        props.active = true;
        this.node.addChild(props);
      };
      gameScene.prototype.CheckObstacleDoAct = function(type) {
        if (!this.node.getComponent("GameModel").isGameStart) return;
        if ("END_STAGE" == type) {
          this.startEndStage();
          return;
        }
      };
      gameScene.prototype.addAtkNumber = function() {
        this._atkObstacleNumer++;
      };
      gameScene.prototype.startEndStage = function() {
        if (this._startEndStage) return;
        this._startEndStage = true;
      };
      gameScene.prototype.showPerfect = function() {
        cc.log("\u5b8c\u7f8e\u901a\u8fc7");
        if (this._startBullet) return;
        var nowTime = this.node.getComponent("GameModel").getLocalTime();
        if (nowTime - this._lastPerfectTime < this._perfectCountDisTime) return;
        cc.systemEvent.emit("SHOW_PERFECT_ICON");
        this._perfectCount++;
        this._lastPerfectTime = nowTime;
        var perfectNodeFrameName = "perfect";
        if (this._perfectCount >= 3) {
          this.startBullet();
          perfectNodeFrameName = "fever";
        }
      };
      gameScene.prototype.offEvent = function() {
        cc.systemEvent.off("LONGRECOMMEND_SHOW_RESULT", this.showResultPanel, this);
        cc.systemEvent.off("START_GAME", this.startGame, this);
        cc.systemEvent.off("GAME_OVER", this.gameOver, this);
        cc.systemEvent.off("BACK_GAME", this.backGame, this);
        cc.systemEvent.off("BACK_GAME_COUNTDOWN_OVER", this.backGameCountDownOver, this);
        cc.systemEvent.off("TOUCH_START", this.onTouchStart, this);
        cc.systemEvent.off("TOUCH_MOVE", this.onTouchMove, this);
        cc.systemEvent.off("TOUCH_END", this.onTouchEnd, this);
        cc.systemEvent.off("CHANGE_GRAVITYSCALE", this.changeGravity, this);
        cc.systemEvent.off("RESET_GAME", this.resetMap, this);
        cc.systemEvent.off("PERFECT", this.showPerfect, this);
        cc.systemEvent.off("DOACT", this.CheckObstacleDoAct, this);
        cc.systemEvent.off("ADD_ATK_NUMBER", this.addAtkNumber, this);
        cc.systemEvent.off("SHOW_DEAD", this.showDead, this);
        cc.systemEvent.off("CONFIG_LOAD_SUCCESS", this.loadConfigCall, this);
        cc.systemEvent.off("addscore", this.addscore, this);
      };
      gameScene.prototype.showResultPanel = function(data, doAnim) {
        void 0 === doAnim && (doAnim = true);
        console.log("\u6e38\u620f\u5931\u8d25");
        var msg = null;
        msg = this.node.getComponent("GameModel").isEndless ? {
          gameScore: this.score + this.propScore,
          gameWin: 0,
          gameGrade: 0
        } : {
          gameScore: this.score + this.propScore,
          gameWin: 0,
          gameGrade: this.fen_level()
        };
        Utils_1.default.showFail(msg, this.touchEventNode.position);
        var call = window["platform"].submitGameScore(msg);
        call && cc.log("\u4eba\u4eba\u79c0\u63a5\u53e3\u8fd4\u56detrue");
        window["platform"].getRes("fail", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
      };
      gameScene.prototype.startGame = function() {
        AudioMgr_1.default.Instance().setBGMVolume(75);
        this.speedUpBgParticle();
        for (var index = 0; index < this._eggPool.length; index++) {
          var egg = this._eggPool[index];
          if (egg && egg._parent) {
            var num = Utils_1.default.getRndInteger(1, 5);
            egg.getComponent(Egg_1.default).setSpriteFrmeFir(this["bird_block" + num]);
            egg.getComponent("Egg").changeNormal();
            this._eggNodePool.put(egg);
          }
        }
        this._eggPool = [];
        for (var _i = 0, _a = this._obstaclePool; _i < _a.length; _i++) {
          var ob = _a[_i];
          ob && ob._parent && (ob.active = true);
        }
        for (var _b = 0, _c = this._spObPool; _b < _c.length; _b++) {
          var ob = _c[_b];
          ob && ob._parent && (ob.active = true);
        }
        this.node.getComponent("GameModel").deleteEnercy();
        this.touchEventNode.getComponent("EventEmit").onStartGameState();
        this.node.getComponent("GameModel").isGameStart = true;
        if (this._birdLead) {
          this._birdLead.y = this._beginPosY + 5 * this._dis + this._birdLead.height / 2 - 40;
          this._birdLead.getComponent(Bird_1.default).showTrailing();
          this._birdLead.getComponent("Bird").changeNormalIcon();
        }
      };
      gameScene.prototype.speedUpBgParticle = function() {
        this.GetGameObject("bird_beijing").getComponent(cc.ParticleSystem).gravity = cc.v2(-1e3, 0);
      };
      gameScene.prototype.initPool = function() {
        return __awaiter(this, void 0, void 0, function() {
          var thornPrefab, index, thorn, eggPrefab, index, egg, bulletPrefab, index, bullet;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this._groundPool = new cc.NodePool();
              this._grassPool = new cc.NodePool();
              this._thornPool = new cc.NodePool();
              this._eggNodePool = new cc.NodePool();
              this._bulletPool = new cc.NodePool();
              this._spObNodePool = new cc.NodePool();
              return [ 4, this.GetPrefab("prefab/item/thorn") ];

             case 1:
              thornPrefab = _a.sent();
              for (index = 0; index < 12; index++) {
                thorn = cc.instantiate(thornPrefab);
                this._thornPool.put(thorn);
              }
              return [ 4, this.GetPrefab("prefab/item/egg") ];

             case 2:
              eggPrefab = _a.sent();
              for (index = 0; index < 12; index++) {
                egg = cc.instantiate(eggPrefab);
                this._eggNodePool.put(egg);
              }
              return [ 4, this.GetPrefab("prefab/item/bullet") ];

             case 3:
              bulletPrefab = _a.sent();
              for (index = 0; index < 12; index++) {
                bullet = cc.instantiate(bulletPrefab);
                this._bulletPool.put(bullet);
              }
              return [ 2 ];
            }
          });
        });
      };
      gameScene.prototype.resetMap = function() {
        AudioMgr_1.default.Instance().setBGMVolume(100);
        this.node.getComponent("GameModel")._trialBirdSkin = null;
        for (var index = 0; index < this._eggPool.length; index++) {
          var egg = this._eggPool[index];
          egg && egg._parent && this._eggNodePool.put(egg);
        }
        this._eggPool = [];
        for (var _i = 0, _a = this._obstaclePool; _i < _a.length; _i++) {
          var ob = _a[_i];
          ob && ob._parent && ("ground" == ob.group ? ob.getComponent("Ground") && ob.getComponent("Ground")._enable ? this._groundPool.put(ob) : ob.destroy() : "grass" == ob.group ? ob.getComponent("Grass") && ob.getComponent("Grass")._enable ? this._grassPool.put(ob) : ob.destroy() : "thorn" == ob.group ? this._thornPool.put(ob) : ob.destroy());
        }
        this._obstaclePool = [];
        for (var _b = 0, _c = this._spObPool; _b < _c.length; _b++) {
          var ob = _c[_b];
          ob && ob._parent && this._spObNodePool.put(ob);
        }
        for (var i = 0; i < this.topPrefabPool.length; i++) if (this.topPrefabPool[i] && this.topPrefabPool[i].parent) {
          this.topPrefabPool[i].destroy;
          this.topPrefabPool.splice(i, 1);
        }
        for (var i = 0; i < this.propList.length; i++) {
          this.propList[i].destroy();
          this.propList.splice(i, 1);
        }
        this._homePanel && this._homePanel.getComponent(homePanel_1.default).closeAnim();
        this.createTopPrefab();
        this._spObPool = [];
        this._needCreateObstacle = true;
        this.touchEventNode.x = 0;
        this.bg.x = this.touchEventNode.x;
        true;
        this.touchEventNode.getComponent("EventEmit").onReadyGameState();
        this.touchEventNode.zIndex = 9;
        this.camera.x = 0;
        this._gameOver = false;
        this._totalGroundLength = 0;
        this._nowGroundLength = 0;
        this._nowObstacleNumber = 0;
        this._mapConfig = [];
        this._topObConfig = [];
        this._mapConfigIndex = 0;
        this.node.getComponent("GameModel")._level < 20 ? this._speed = 3 : Math.floor(this.node.getComponent("GameModel")._level / 20) > this.speedMax ? this._speed = this.speedMax : this._speed = 3 + Math.floor(this.node.getComponent("GameModel")._level / 20);
        console.log(this._speed);
        this._startBullet = false;
        this._perfectCount = 0;
        this._perfectCountDisTime = 150;
        this._lastPerfectTime = 0;
        this._bangNumber = 0;
        this._startEndStage = false;
        this._endStageLastDeleteEggTime = 0;
        this.spObsIndex = 0;
        this.grassIndex = 0;
        this.propNum = 1;
        this.kuaiNum = 0;
        this.score = 0;
        this.leftScore = 0;
        this.fen = 0;
        this.speedMi = 0;
        this.propScore = 0;
        this.topPrefabPool = [];
        this.propList = [];
        this.startTopPosX = 0;
        this._mapTopBeginPox = -cc.winSize.width - 100;
        this._backGameCount = 1;
        this._isWin = false;
        this._showResult = false;
        this.showHeartAnimState = false;
        if (this.node.getComponent("GameModel")._lastMapConfig && this.node.getComponent("GameModel")._lastMapConfig.length && this.node.getComponent("GameModel")._lastMapConfig.length > 0) {
          this._mapConfig = this.node.getComponent("GameModel")._lastMapConfig;
          this._topObConfig = this.node.getComponent("GameModel")._lastTopObConfig;
        } else {
          this.createMapConfig();
          console.log("this._mapConfig", this._mapConfig);
          this.node.getComponent("GameModel")._lastTopObConfig = this._topObConfig;
          this.node.getComponent("GameModel").setLastMapConfig(this._mapConfig);
        }
        this.calculationTotalLength();
        this._nowLvScore = 0;
        this._scoreCoefficient = this.getScroeCoefficient();
        this._atkObstacleNumer = 0;
        this._showAniCount = 0;
        this.createMap();
        this.createBird();
        this.resetBgParticle();
      };
      gameScene.prototype.resetBgParticle = function() {
        this.GetGameObject("bird_beijing").getComponent(cc.ParticleSystem).gravity = cc.v2(-30, 0);
      };
      gameScene.prototype.createBird = function(isLead) {
        void 0 === isLead && (isLead = null);
        return __awaiter(this, void 0, void 0, function() {
          var _bird;
          return __generator(this, function(_a) {
            if (this._birdLead) {
              this._birdLead.getComponent("Bird")._invincible = false;
              this._birdLead.getComponent("Bird")._isAlive = true;
              this._birdLead.getComponent("Bird").hideTrailing();
              this._birdLead.getComponent("Bird").changeNormalIcon();
              this._birdLead.angle = 0;
              this._birdLead.x = -cc.winSize.width / 2 - 150;
              this._birdLead.y = this._beginPosY + 5 * this._dis;
              this._birdLead.zIndex = 3;
              this._birdLead.getComponent(cc.RigidBody).fixedRotation = true;
              this._birdLead.getComponent("Bird").setSpeed(0);
              cc.tween(this._birdLead).to(.5, {
                x: 0
              }).start();
              this.node.getComponent("GameModel").isGameStart || (this._birdLead.x = this.touchEventNode.x);
              return [ 2 ];
            }
            _bird = cc.instantiate(this.birdPrefab);
            _bird.x = -cc.winSize.width / 2 - 150;
            _bird.y = this._beginPosY + 5 * this._dis;
            this.node.addChild(_bird);
            _bird.angle = 0;
            _bird.zIndex = 3;
            _bird.getComponent(cc.RigidBody).fixedRotation = true;
            _bird.getComponent("Bird").setSpeed(0);
            this._birdLead = _bird;
            this._birdLead.getComponent("Bird").hideTrailing();
            this._birdLead.getComponent("Bird")._invincible = false;
            this._birdLead.getComponent("Bird").changeNormalIcon();
            cc.tween(_bird).to(.5, {
              x: 0
            }).start();
            this.node.getComponent("GameModel").isGameStart || (this._birdLead.x = this.touchEventNode.x);
            return [ 2 ];
          });
        });
      };
      gameScene.prototype.getScroeCoefficient = function() {
        var lv = this.node.getComponent("GameModel")._level;
        return Number(lv) <= 10 ? 1.2 : Number(lv) <= 20 ? 1.6 : Number(lv) <= 40 ? 2.2 : Number(lv) <= 50 ? 2.8 : 4;
      };
      gameScene.prototype.createMapConfig = function() {
        if (this._nowObstacleNumber >= this._allObstacleNumber) return;
        var index = Math.floor(Math.random() * this._randomNum);
        if (this._obstacleConfig[index]) {
          this._nowObstacleNumber += 1;
          this._mapConfig.push(index);
          if (index >= -1 && index <= 8) {
            var obConfig = {
              _obId: -1
            };
            var random = Math.floor(100 * Math.random());
            if (random > 50) {
              var obId = Math.floor(8 * Math.random());
              8 == obId && (obId = 7);
              5 == index ? obId > 1 && obId <= 5 && (obId = -1) : 4 == index ? obId > 2 && obId <= 5 && (obId = -1) : 3 == index ? obId > 3 && obId <= 5 && (obId = -1) : 2 == index && obId > 3 && obId <= 5 && (obId = -1);
              obConfig._obId = obId;
            }
            var _dis = Math.floor(4 * Math.random()) * this._dis;
            obConfig["_dis"] = _dis;
            Math.random() < .5 && (obConfig["_dis"] = -_dis);
            this._topObConfig.push(obConfig);
          } else this._topObConfig.push({
            _obId: -1,
            _dis: 0
          });
          return this.createMapConfig();
        }
      };
      gameScene.prototype.calculationTotalLength = function() {
        var count = 0;
        for (var _i = 0, _a = this._mapConfig; _i < _a.length; _i++) {
          var index = _a[_i];
          count += this.calculationObstacleLength(this._obstacleConfig[Number(index)]);
        }
        this._totalGroundLength = count * this._dis;
        console.log("\u5730\u56fe\u957f\u5ea6:===>", this._totalGroundLength);
      };
      gameScene.prototype.calculationObstacleLength = function(config) {
        var count = 0;
        if (config) {
          var panel = String(config.obstacle).split(",");
          for (var index = 0; index < panel.length; index++) {
            var element = panel[index];
            0 == Number(element) || -1 == Number(element) ? count++ : count += 3;
          }
        }
        return count;
      };
      gameScene.prototype.createMap = function(mapConfig) {
        void 0 === mapConfig && (mapConfig = null);
        this._mapBeginPox = -cc.winSize.width / 2 + 0;
        this.createBeginPanel(this._mapBeginPox, this._beginPosY);
        this.createObstacle(this._obstacleConfig[this._mapConfig[this._mapConfigIndex]], this._mapBeginPox, this._beginPosY, true);
        for (var _i = 0, _a = this._obstaclePool; _i < _a.length; _i++) {
          var ob = _a[_i];
          ob && ob._parent && ob.y > this._birdPosY && ob.x < this.touchEventNode.x + cc.winSize.width / 2 && (ob.active = false);
        }
        for (var _b = 0, _c = this._spObPool; _b < _c.length; _b++) {
          var ob = _c[_b];
          ob && ob._parent && ob.y > this._birdPosY && ob.x < this.touchEventNode.x + cc.winSize.width / 2 + 50 && (ob.active = false);
        }
      };
      gameScene.prototype.createBeginPanel = function(posX, posY) {
        var _x = posX;
        for (var index = 0; index < 11; index++) {
          this.createZheDangOb(_x, posY, 1);
          this.createZheDangOb(_x, posY + this._dis, 1);
          this.createZheDangOb(_x, posY + 2 * this._dis, 1);
          this.createZheDangOb(_x, posY + 3 * this._dis, 1);
          _x += this._dis;
        }
        for (var index = 0; index < 11; index++) {
          this.createGrass(posX, posY + 4 * this._dis, null, null);
          posX += this._dis;
        }
        this._mapBeginPox += 11 * this._dis;
      };
      gameScene.prototype.createZheDangOb = function(posX, posY, type, pfb) {
        void 0 === pfb && (pfb = null);
        var ob = null;
        ob = this._spObNodePool.size() > 0 ? this._spObNodePool.get() : cc.instantiate(this.spObstaclePrefab);
        this.spObsIndex++;
        ob.name = "ob" + this.spObsIndex;
        ob.x = posX;
        ob.y = posY;
        cc.director.getScene().getChildByName("Canvas").addChild(ob);
        ob.getComponent("spObstacle").initType(type);
        ob.zIndex = 2;
        this._spObPool.push(ob);
      };
      gameScene.prototype.createGrass = function(posX, posY, perfect, type, actType, dis) {
        void 0 === perfect && (perfect = null);
        void 0 === type && (type = null);
        void 0 === actType && (actType = null);
        void 0 === dis && (dis = null);
        var grass = null;
        this.createProp(posX, posY, type, dis);
        this.grassIndex++;
        grass = this._grassPool.size() > 0 ? this._grassPool.get() : cc.instantiate(this.grassPrefab);
        grass.x = posX;
        grass.y = posY;
        grass.name = "grass" + this.grassIndex;
        grass.zIndex = 2;
        this.node.addChild(grass);
        grass.getComponent("Grass")._isPerfect = false;
        grass.getComponent("Grass")._actType = -1;
        grass.getComponent("Grass").changeNormalIcon();
        perfect && grass.getComponent("Grass").addPerfect();
        type && grass.getComponent("Grass").addAct(type, actType, dis);
        this._obstaclePool.push(grass);
        return grass;
      };
      gameScene.prototype.createProp = function(posX, posY, type, dis) {
        void 0 === dis && (dis = null);
        this.kuaiNum++;
        var PropNum = this.score_speed().porpNum;
        var gameX = Math.floor(this._totalGroundLength / PropNum) * this.propNum;
        var randNum = Utils_1.default.getRndInteger(1, 100);
        var maxY = 0;
        if (type) {
          var numY = Math.floor((cc.winSize.height / 2 - 290 - (dis + this._dis)) / this._dis);
          var num1 = Utils_1.default.getRndInteger(1, numY);
          maxY = posY + dis + num1 * this._dis + 20;
        } else {
          var numY = Math.floor((cc.winSize.height / 2 - 290 - (posY + this._dis)) / this._dis);
          var num1 = Utils_1.default.getRndInteger(1, numY);
          maxY = posY + num1 * this._dis;
        }
        if (this.node.getComponent("GameModel").isEndless) {
          if (this.kuaiNum % 20 == 0 && randNum >= 50) {
            this.propNum++;
            var node = cc.instantiate(this.propPrefab);
            node.getComponent("Prop").initType();
            node.x = posX;
            node.y = maxY;
            node.parent = this.node;
            node.zIndex = 3;
            this.propList.push(node);
          }
        } else if (posX >= gameX - this._dis / 2 && posX <= gameX + this._dis / 2 && this.propNum < PropNum + 1) {
          this.propNum++;
          var node = cc.instantiate(this.propPrefab);
          node.getComponent("Prop").initType();
          node.x = posX;
          node.y = maxY;
          node.parent = this.node;
          node.zIndex = 3;
          this.propList.push(node);
        }
      };
      gameScene.prototype.createObstacle = function(config, beiginPos, beginPosY, isAddProgress) {
        if (!this._needCreateObstacle) return;
        if (config) {
          var panel = String(config.obstacle).split(",");
          var count = this.calculationObstacleLength(config);
          if (count > 0) {
            this.createDownGround(count, beiginPos, beginPosY);
            this.createTopPrefab();
            this.createDetailObstacle(panel, beiginPos, beginPosY + 4 * this._dis);
          }
          isAddProgress && (this._nowGroundLength += count * this._dis);
          this._mapConfigIndex++;
          this._mapBeginPox += count * this._dis;
        }
      };
      gameScene.prototype.createTopPrefab = function() {
        return __awaiter(this, void 0, void 0, function() {
          var i, ob, spObPfb;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < 2)) return [ 3, 4 ];
              ob = null;
              return [ 4, this.GetPrefab("prefab/item/top") ];

             case 2:
              spObPfb = _a.sent();
              ob = cc.instantiate(spObPfb);
              ob.getComponent(top_1.default).init();
              ob.x = this.startTopPosX;
              ob.y = cc.winSize.height / 2 - ob.height / 2;
              cc.director.getScene().getChildByName("Canvas").addChild(ob);
              ob.zIndex = 2;
              this.topPrefabPool.push(ob);
              this.startTopPosX += cc.winSize.width;
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      gameScene.prototype.createDownGround = function(num, posX, posY) {
        for (var index = 0; index < num; index++) {
          this.createZheDangOb(posX, posY, 1);
          this.createZheDangOb(posX, posY + this._dis, 1);
          this.createZheDangOb(posX, posY + 2 * this._dis, 1);
          this.createZheDangOb(posX, posY + 3 * this._dis, 1);
          posX += this._dis;
        }
      };
      gameScene.prototype.createTopObstacle = function(count, posX, posY, config) {
        var _x = posX;
        for (var index = 0; index < count; index++) {
          this.createZheDangOb(_x, posY, 1);
          this.createZheDangOb(_x, posY - this._dis, 1);
          this.createZheDangOb(_x, posY - 2 * this._dis, 1);
          _x += this._dis;
        }
      };
      gameScene.prototype.deleteObByPosX = function(posX, posY) {
        for (var _i = 0, _a = this._spObPool; _i < _a.length; _i++) {
          var ob = _a[_i];
          "ob56" == ob.name && console.log("=====>", null != ob, null != ob._parent, ob.y < posY, ob.x, posX);
          ob && ob._parent && ob.y < posY && Math.abs(ob.x - posX) <= 5 && this._spObNodePool.put(ob);
        }
      };
      gameScene.prototype.genAGround = function(posX, posY, perfect, type, actType, dis) {
        void 0 === perfect && (perfect = null);
        void 0 === type && (type = null);
        void 0 === actType && (actType = null);
        void 0 === dis && (dis = null);
        return __awaiter(this, void 0, void 0, function() {
          var _ground;
          return __generator(this, function(_a) {
            _ground = null;
            _ground = this._groundPool.size() > 0 ? this._groundPool.get() : cc.instantiate(this.groundPrefab);
            _ground.x = posX;
            _ground.y = posY;
            cc.director.getScene().getChildByName("Canvas").addChild(_ground);
            _ground.getComponent("Ground")._isPerfect = false;
            _ground.getComponent("Ground")._actType = -1;
            _ground.getComponent("Ground").changeNormalIcon();
            perfect && _ground.getComponent("Ground").addPerfect();
            type && _ground.getComponent("Ground").addAct(type, actType, dis);
            _ground.zIndex = 2;
            this._obstaclePool.push(_ground);
            return [ 2, _ground ];
          });
        });
      };
      gameScene.prototype.createThron = function(posX, posY, reverse) {
        void 0 === reverse && (reverse = null);
        return __awaiter(this, void 0, void 0, function() {
          var thron;
          return __generator(this, function(_a) {
            thron = null;
            thron = this._thornPool.size() > 0 ? this._thornPool.get() : cc.instantiate(this.thornPrefab);
            thron.x = posX;
            thron.y = posY;
            thron.zIndex = 2;
            this.node.addChild(thron);
            thron.getComponent("Thorn").setReverse(reverse);
            this._obstaclePool.push(thron);
            return [ 2 ];
          });
        });
      };
      gameScene.prototype.createSensor = function(posX, posY, type) {
        return __awaiter(this, void 0, void 0, function() {
          var sensor;
          return __generator(this, function(_a) {
            sensor = cc.instantiate(this.sensorPrefab);
            sensor.x = posX;
            sensor.y = posY;
            sensor.zIndex = 2;
            cc.director.getScene().getChildByName("Canvas").addChild(sensor);
            type && sensor.getComponent("Sensor").initType(type);
            this._obstaclePool.push(sensor);
            return [ 2 ];
          });
        });
      };
      gameScene.prototype.createDetailObstacle = function(config, posX, posY, reverse) {
        void 0 === reverse && (reverse = null);
        var _x = posX;
        var sensorType = this.node.getComponent("GameModel").getLocalTime();
        var dis = this._dis;
        reverse && (dis = -this._dis);
        for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
          var data = config_1[_i];
          switch (Number(data)) {
           case -1:
            this.deleteObByPosX(posX, posY), this.createProp(posX, posY, false);
            posX += this._dis;
            break;

           case 0:
            reverse || this.createGrass(posX, posY);
            posX += this._dis;
            break;

           case 1:
            reverse ? this._topObConfig[this._mapConfigIndex] && (_x = posX + Number(this._topObConfig[this._mapConfigIndex]._dis)) : _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              _x += this._dis;
            }
            if (reverse) posX += 3 * this._dis; else for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + dis, true) : this.createGrass(posX, posY + dis);
              posX += this._dis;
            }
            break;

           case 2:
            reverse ? this._topObConfig[this._mapConfigIndex] && (_x = posX + Number(this._topObConfig[this._mapConfigIndex]._dis)) : _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              _x += this._dis;
            }
            if (reverse) posX += 3 * this._dis; else for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 2 * dis, true) : this.createGrass(posX, posY + 2 * dis);
              posX += this._dis;
            }
            break;

           case 3:
            reverse ? this._topObConfig[this._mapConfigIndex] && (_x = posX + Number(this._topObConfig[this._mapConfigIndex]._dis)) : _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 2 * dis);
              _x += this._dis;
            }
            if (reverse) posX += 3 * this._dis; else for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 3 * dis, true) : this.createGrass(posX, posY + 3 * dis);
              posX += this._dis;
            }
            break;

           case 4:
            reverse ? this._topObConfig[this._mapConfigIndex] && (_x = posX + Number(this._topObConfig[this._mapConfigIndex]._dis)) : _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 2 * dis);
              this.genAGround(_x, posY + 3 * dis);
              _x += this._dis;
            }
            if (reverse) posX += 3 * this._dis; else for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 4 * dis, true) : this.createGrass(posX, posY + 4 * dis);
              posX += this._dis;
            }
            break;

           case 5:
            reverse ? this._topObConfig[this._mapConfigIndex] && (_x = posX + Number(this._topObConfig[this._mapConfigIndex]._dis)) : _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 2 * dis);
              this.genAGround(_x, posY + 3 * dis);
              this.genAGround(_x, posY + 4 * dis);
              _x += this._dis;
            }
            if (!reverse) for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 5 * dis, true) : this.createGrass(posX, posY + 5 * dis);
              posX += this._dis;
            }
            break;

           case 6:
            _x = posX;
            if (!reverse) for (var index = 0; index < 3; index++) {
              this.createGrass(_x, posY);
              _x += this._dis;
            }
            reverse ? this._topObConfig[this._mapConfigIndex] && (_x = posX + Number(this._topObConfig[this._mapConfigIndex]._dis)) : _x = posX;
            for (var index = 0; index < 3; index++) {
              reverse ? this.createThron(_x, posY + dis / 2 + 35, reverse) : this.createThron(_x, posY + dis / 2 + 25);
              _x += 50;
              posX += this._dis;
            }
            break;

           case 7:
            _x = posX;
            if (!reverse) for (var index = 0; index < 3; index++) {
              this.createGrass(_x, posY);
              _x += this._dis;
            }
            reverse ? this._topObConfig[this._mapConfigIndex] && (_x = posX + Number(this._topObConfig[this._mapConfigIndex]._dis)) : _x = posX;
            for (var index = 0; index < 4; index++) {
              reverse ? this.createThron(_x, posY + dis / 2 + 35, true) : this.createThron(_x, posY + dis / 2 + 25);
              _x += 50;
              index < 3 && (posX += this._dis);
            }
            break;

           case 8:
            _x = posX;
            if (!reverse) for (var index = 0; index < 3; index++) {
              this.createGrass(_x, posY);
              _x += this._dis;
            }
            reverse ? this._topObConfig[this._mapConfigIndex] && (_x = posX + Number(this._topObConfig[this._mapConfigIndex]._dis)) : _x = posX;
            for (var index = 0; index < 6; index++) {
              reverse ? this.createThron(_x, posY + dis / 2 + 35, true) : this.createThron(_x, posY + dis / 2 + 25);
              _x += 50;
              index < 3 && (posX += this._dis);
            }
            break;

           case 9:
            _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 5 * dis + 22, true) : this.createGrass(posX, posY + 5 * dis + 22);
              posX += this._dis;
            }
            break;

           case 10:
            _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 4 * dis + 24);
              this.genAGround(_x, posY + 5 * dis + 24);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 6 * dis + 20, true) : this.createGrass(posX, posY + 6 * dis + 20);
              posX += this._dis;
            }
            break;

           case 11:
            _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 2 * dis);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 6 * dis + 22, true) : this.createGrass(posX, posY + 6 * dis + 22);
              posX += this._dis;
            }
            break;

           case 12:
            _x = posX;
            sensorType = this.node.getComponent("GameModel").getLocalTime();
            this.createSensor(_x - 4 * this._dis, posY + dis, sensorType);
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, cc.winSize.height / 2 - 208 - this._dis / 2);
              this.genAGround(_x, cc.winSize.height / 2 - 208 - this._dis / 2 * 3);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              this.createGrass(posX, posY);
              posX += this._dis;
            }
            break;

           case 13:
            _x = posX;
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 2 * dis);
              this.genAGround(_x, posY + 6 * dis + 22);
              this.genAGround(_x, posY + 7 * dis + 22);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 8 * dis + 22, true) : this.createGrass(posX, posY + 8 * dis + 22);
              posX += this._dis;
            }
            break;

           case 14:
            _x = posX;
            sensorType = this.node.getComponent("GameModel").getLocalTime();
            this.createSensor(_x - 4 * this._dis, posY + dis, sensorType);
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 2 * dis);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 3 * dis, true, sensorType, 1, 3 * this._dis + 6) : this.createGrass(posX, posY + 3 * dis, false, sensorType, 1, 3 * this._dis + 6);
              posX += this._dis;
            }
            break;

           case 15:
            _x = posX;
            sensorType = this.node.getComponent("GameModel").getLocalTime();
            this.createSensor(_x - 4 * this._dis, posY + dis, sensorType);
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 2 * dis);
              this.genAGround(_x, posY + 5 * dis, false, sensorType, 1, 1 * this._dis + 2);
              this.genAGround(_x, posY + 3 * dis, false, sensorType, 1, 1 * this._dis + 2);
              this.genAGround(_x, posY + 4 * dis, false, sensorType, 1, 1 * this._dis + 2);
              this.genAGround(_x, posY + 6 * dis, false, sensorType, 1, 2 * this._dis + 4);
              this.genAGround(_x, posY + 7 * dis, false, sensorType, 1, 2 * this._dis + 4);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 8 * dis, true, sensorType, 1, 2 * this._dis + 4) : this.createGrass(posX, posY + 8 * dis, false, sensorType, 1, 2 * this._dis + 4);
              posX += this._dis;
            }
            break;

           case 16:
            _x = posX;
            sensorType = this.node.getComponent("GameModel").getLocalTime();
            this.createSensor(_x - 4 * this._dis, posY + dis, sensorType);
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, posY);
              this.genAGround(_x, posY + dis);
              this.genAGround(_x, posY + 2 * dis, false, sensorType, 1, 2 * this._dis + 4);
              this.genAGround(_x, posY + 3 * dis, false, sensorType, 1, 2 * this._dis + 4);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              index <= 1 ? this.createGrass(posX, posY + 4 * dis, true, sensorType, 1, 2 * this._dis + 4) : this.createGrass(posX, posY + 4 * dis, false, sensorType, 1, 2 * this._dis + 4);
              posX += this._dis;
            }
            break;

           case 17:
            _x = posX;
            sensorType = this.node.getComponent("GameModel").getLocalTime();
            this.createSensor(_x - 4 * this._dis, posY + dis, sensorType);
            for (var index = 0; index < 3; index++) {
              this.genAGround(_x, cc.winSize.height / 2 - 208 - this._dis / 2);
              this.genAGround(_x, cc.winSize.height / 2 - 208 - this._dis / 2 * 3);
              this.genAGround(_x, cc.winSize.height / 2 - 208 - this._dis / 2 * 5);
              _x += this._dis;
            }
            for (var index = 0; index < 3; index++) {
              this.createGrass(posX, posY);
              posX += this._dis;
            }
          }
        }
      };
      gameScene.prototype.gameOver = function() {
        if (this._gameOver) return;
        this._isWin = false;
        this.node.getComponent("GameModel")._nowScore = 0;
        this.node.getComponent("GameModel")._lastBangX = this._birdLead.x;
        this.node.getComponent("GameModel")._lastBangY = this._birdLead.y;
        this.node.getComponent("GameModel").saveData();
        console.log("\u6e38\u620f\u7ed3\u675f");
        this.node.getComponent("GameModel").isGameStart = false;
        this._gameOver = true;
        this._startBullet = false;
        this._birdLead.getComponent("Bird").changeBangIcon();
        this._birdLead.getComponent("Bird").setSpeed(-300);
        this._birdLead.getComponent(cc.RigidBody).fixedRotation = false;
        for (var _i = 0, _a = this._eggPool; _i < _a.length; _i++) {
          var egg = _a[_i];
          egg && egg._parent && egg.getComponent(cc.RigidBody) && (egg.getComponent(cc.RigidBody).linearDamping = 4);
        }
        this.shakeScreen();
        this.showResult(false);
      };
      gameScene.prototype.shakeScreen = function() {
        var Shake = cc.ActionInterval["extend"]({
          _initial_x: 0,
          _initial_y: 0,
          _strength_x: 0,
          _strength_y: 0,
          create: function(duration, strength_x, strength_y) {
            var act = new Shake();
            act.initWithDuration(duration, strength_x, strength_y);
            return act;
          },
          initWithDuration: function(duration, strength_x, strength_y) {
            cc.ActionInterval.prototype["initWithDuration"].apply(this, arguments);
            this._strength_x = strength_x;
            this._strength_y = strength_y;
            return true;
          },
          fgRangeRand: function(min, max) {
            var rnd = Math.random();
            return rnd * (max - min) + min;
          },
          update: function(time) {
            var randx = this.fgRangeRand(-this._strength_x, this._strength_x);
            var randy = this.fgRangeRand(-this._strength_y, this._strength_y);
            this.getTarget().setPosition(randx + this._initial_x, randy + this._initial_y);
          },
          startWithTarget: function(target) {
            cc.ActionInterval.prototype["startWithTarget"].apply(this, arguments);
            this._initial_x = target.x;
            this._initial_y = target.y;
          },
          stop: function() {
            this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
            cc.ActionInterval.prototype["stop"].apply(this);
          }
        });
        var _shake = new Shake();
        var action = _shake.create(.2, 10, 10);
        this.camera.runAction(action);
      };
      gameScene.prototype.showResult = function(windOrLose) {
        if (this._showResult) return;
        this._showResult = true;
        var pro = this.touchEventNode.getComponent("EventEmit").getProgress();
        var _num = Number((100 * pro).toFixed(0)) < 0 ? 0 : (100 * pro).toFixed(0);
        var data = {
          getScore: this._nowLvScore,
          bestScore: this.node.getComponent("GameModel")._bestScore,
          isShowBackGame: this._backGameCount,
          progress: pro,
          num: _num,
          isWin: null,
          level: null
        };
        data.isWin = windOrLose;
        data.level = this.node.getComponent("GameModel")._level;
        if (data.isWin) {
          data.level--;
          this.node.getComponent("GameModel").addBirdByLv();
          var resultCount = this.node.getComponent("GameModel").getResultCount();
          resultCount % 3 === 0 ? this.showGamePage(data) : this.showResultPanel(data);
          this.node.getComponent("GameModel").addResultCount();
        } else this.showResultPanel(data);
      };
      gameScene.prototype.showGamePage = function(data) {
        var _this = this;
        cc.loader.loadRes("pfb/moreGame/GamePage", cc.Prefab, function(err, msg) {
          if (err) return;
          var node = cc.instantiate(msg);
          cc.director.getScene().getChildByName("Canvas").addChild(node);
          node.x = _this.touchEventNode.x;
          node.y = _this.touchEventNode.y;
          node.width = cc.winSize.width;
          node.height = cc.winSize.height;
          console.log();
          node.zIndex = 1999;
          node.getComponent("GamePage").onCloseFun = function() {
            _this.showResultPanel(data, false);
          };
        });
      };
      gameScene.prototype.backGame = function() {
        this._backGameCount = 0;
        for (var index = 0; index < this._eggPool.length; index++) {
          var egg = this._eggPool[index];
          egg && egg._parent && this._eggNodePool.put(egg);
        }
        this._eggPool = [];
        this.createBird();
        this._birdLead.getComponent(cc.RigidBody).gravityScale = 0;
        this._birdLead.x = this.node.getComponent("GameModel")._lastBangX;
        this._birdLead.y = this._birdPosY + 100;
      };
      gameScene.prototype.backGameCountDownOver = function() {
        this._gameOver = false;
        this._perfectCount = 0;
        this._startBullet = false;
        this._showResult = false;
        this._isWin = false;
        this.startBullet();
        this.touchEventNode.getComponent("EventEmit").clearPrefectIcon();
        this.node.getComponent("GameModel").isGameStart = true;
        this._birdLead.getComponent(cc.RigidBody).gravityScale = 4;
      };
      gameScene.prototype.startBullet = function() {
        this._startBullet = true;
        this._birdLead.getComponent("Bird")._invincible = true;
        this._lastCreateBulletTime = 0;
        setTimeout(function() {
          this._birdLead.getComponent("Bird")._invincible = false;
          this._startBullet = false;
          this._perfectCount = 0;
          cc.systemEvent.emit("CLEAR_PERFECT_ICON");
          this.resetBg();
          this.guang.node.active = true;
          var _guangAction = cc.sequence(cc.fadeTo(.1, 170), cc.delayTime(.05), cc.fadeOut(.1));
          this.guang.node.runAction(_guangAction);
        }.bind(this), 5e3);
      };
      gameScene.prototype.createEgg = function() {
        return __awaiter(this, void 0, void 0, function() {
          var egg, num;
          return __generator(this, function(_a) {
            if (!this.node.getComponent("GameModel").isGameStart) return [ 2 ];
            if (this.touchEventNode.x - this._birdLead.x < cc.winSize.width / 2 - Math.abs(this._birdPosX)) return [ 2 ];
            if (this._startEndStage) return [ 2 ];
            if (!this.canCreateEgg()) return [ 2 ];
            if (this._birdLead.y + this._birdLead.height > cc.winSize.height / 2 - (2 * this._dis + this._birdLead.height / 2)) return [ 2 ];
            if (this._birdLead.x < 10) return [ 2 ];
            window["platform"].getRes("hit", "audio").then(function(msg) {
              AudioMgr_1.default.Instance().playSFX(msg);
            });
            egg = null;
            egg = this._eggNodePool.size() > 0 ? this._eggNodePool.get() : cc.instantiate(this.eggPrefab);
            this.textIndex++;
            egg.name = "egg" + this.textIndex;
            num = Utils_1.default.getRndInteger(1, 5);
            egg.getComponent(Egg_1.default).setSpriteFrmeFir(this["bird_block" + num]);
            egg.getComponent(Egg_1.default).setDiCi(this.bird_diciPrefab);
            this.node.addChild(egg);
            egg.zIndex = 2;
            this._birdLead.y += this._dis;
            egg.y = this._birdLead.y - this._dis;
            egg.x = this._birdLead.x;
            egg.scale = .8;
            egg.runAction(cc.sequence(cc.scaleTo(.2, 1.1), cc.scaleTo(.1, 1)));
            egg.getComponent(Egg_1.default).changeNormal();
            egg.getChildByName("bird_huichen").active = false;
            this._birdLead && this._birdLead.getComponent("Bird")._invincible && this.node.getComponent("GameModel").addCash(1);
            this._lastCreateEggTime = this.node.getComponent("GameModel").getLocalTime();
            this._eggPool.push(egg);
            this.changeGravity();
            return [ 2 ];
          });
        });
      };
      gameScene.prototype.canCreateEgg = function() {
        var count = this.checkEffectiveEggCount();
        var obCount = this.getObCountByPosX(this._birdLead.x);
        if (count >= 12) return;
        for (var _i = 0, _a = this._obstaclePool; _i < _a.length; _i++) {
          var ob = _a[_i];
          if (ob && ob._parent && ob.y > this._birdLead.y && Math.abs(ob.y - this._birdLead.y) <= this._birdLead.height + 5 && Math.abs(ob.x - this._birdLead.x) < this._birdLead.width) return false;
        }
        if (82 * count + obCount * this._dis >= cc.winSize.height - 8 * this._dis) return false;
        return true;
      };
      gameScene.prototype.checkEffectiveEggCount = function() {
        var count = 0;
        for (var _i = 0, _a = this._eggPool; _i < _a.length; _i++) {
          var egg = _a[_i];
          egg && egg._parent && Math.abs(egg.x - this._birdLead.x) < this._dis / 2 && count++;
        }
        return count;
      };
      gameScene.prototype.getObCountByPosX = function(posX) {
        var count = 0;
        for (var _i = 0, _a = this._obstaclePool; _i < _a.length; _i++) {
          var ob = _a[_i];
          ob && ob._parent && ob.y > -cc.winSize.height / 2 + 5 * this._dis && ob.y < cc.winSize.height / 2 - 3 * this._dis && Math.abs(ob.x - posX) < this._dis && count++;
        }
        return count;
      };
      gameScene.prototype.changeGravity = function(gravityScale) {
        void 0 === gravityScale && (gravityScale = 0);
        var count = 0;
        for (var _i = 0, _a = this._eggPool; _i < _a.length; _i++) {
          var egg = _a[_i];
          if (egg && egg._parent) {
            var gravityScale_1 = 6 - .5 * count;
            gravityScale_1 <= 4 && (gravityScale_1 = 6);
            count++;
            egg.getComponent(cc.RigidBody) && (egg.getComponent(cc.RigidBody).gravityScale = gravityScale_1);
          }
        }
      };
      gameScene.prototype.onTouchStartGame = function(event, msg) {
        AnalyticsUtilities_1.default.logEvent("click_start_game");
        1 == Number(msg) ? this.node.getComponent("GameModel").isEndless = false : this.node.getComponent("GameModel").isEndless = true;
        cc.systemEvent.emit("START_GAME");
      };
      gameScene.prototype.checkEffectiveEgg = function() {
        for (var _i = 0, _a = this._eggPool; _i < _a.length; _i++) {
          var egg = _a[_i];
          if (egg && egg._parent && Math.abs(egg.x - this._birdLead.x) < this._dis / 2) return true;
        }
        return false;
      };
      gameScene.prototype.endStageFunc = function() {
        var _this = this;
        var _loop_1 = function(egg) {
          if (egg && egg._parent && Math.abs(egg.x - this_1._birdLead.x) < this_1._dis / 2) {
            this_1._endStageLastDeleteEggTime = this_1.node.getComponent("GameModel").getLocalTime();
            egg.runAction(cc.sequence(cc.scaleTo(.2, .7), cc.callFunc(function() {
              _this._eggNodePool.put(egg);
            })));
            return {
              value: void 0
            };
          }
        };
        var this_1 = this;
        for (var _i = 0, _a = this._eggPool; _i < _a.length; _i++) {
          var egg = _a[_i];
          var state_1 = _loop_1(egg);
          if ("object" === typeof state_1) return state_1.value;
        }
      };
      gameScene.prototype.createHomePanel = function() {
        return __awaiter(this, void 0, void 0, function() {
          var home;
          return __generator(this, function(_a) {
            if (!this._needCreateObstacle) return [ 2 ];
            this._needCreateObstacle = false;
            this.createSensor(this._mapBeginPox + 100, this._beginPosY + 2 * this._dis, "END_STAGE");
            this.createEndPanel(this._mapBeginPox, this._beginPosY);
            home = null;
            if (this._homePanel) home = this._homePanel; else {
              home = cc.instantiate(this.homePanelPrefab);
              cc.director.getScene().getChildByName("Canvas").addChild(home);
              this._homePanel = home;
            }
            home.getComponent(homePanel_1.default).init();
            home.getChildByName("heart") && (this.heart = home.getChildByName("heart"));
            home.active = true;
            home.x = this._mapBeginPox;
            home.y = this._beginPosY + 4.5 * this._dis;
            return [ 2 ];
          });
        });
      };
      gameScene.prototype.createEndPanel = function(posX, posY) {
        var _x = posX;
        for (var index = 0; index < 28; index++) {
          this.createZheDangOb(_x, posY, 1);
          this.createZheDangOb(_x, posY + this._dis, 1);
          this.createZheDangOb(_x, posY + 2 * this._dis, 1);
          this.createZheDangOb(_x, posY + 3 * this._dis, 1);
          _x += this._dis;
        }
        for (var index = 0; index < 28; index++) {
          this.createGrass(posX, posY + 4 * this._dis);
          posX += this._dis;
        }
        this._mapBeginPox += 12 * this._dis;
      };
      gameScene.prototype.createBullet = function() {
        return __awaiter(this, void 0, void 0, function() {
          var bullet, bulletPfb;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              bullet = null;
              return [ 4, this.GetPrefab("prefab/item/bullet") ];

             case 1:
              bulletPfb = _a.sent();
              bullet = this._bulletPool.size() > 0 ? this._bulletPool.get() : cc.instantiate(bulletPfb);
              bullet.x = this._birdLead.x + this._birdLead.width;
              bullet.y = this._birdLead.y;
              bullet.zIndex = 2;
              cc.director.getScene().getChildByName("Canvas").addChild(bullet);
              bullet.getComponent("Bullet").setPool(this._bulletPool);
              bullet.getComponent("Bullet").setBird(this._birdLead);
              this._lastCreateBulletTime = this.node.getComponent("GameModel").getLocalTime();
              return [ 2 ];
            }
          });
        });
      };
      gameScene.prototype.createBang = function(posX, posY) {
        return __awaiter(this, void 0, void 0, function() {
          var birdPfb, bang;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.GetPrefab("prefab/item/bird") ];

             case 1:
              birdPfb = _a.sent();
              bang = cc.instantiate(birdPfb);
              cc.director.getScene().getChildByName("Canvas").addChild(bang);
              this._obstaclePool.push(bang);
              bang.zIndex = 2;
              this._bangNumber = 1;
              bang.x = posX - 5, bang.y = posY, bang.opacity = 180, bang.getComponent("Bird").setBang();
              return [ 2 ];
            }
          });
        });
      };
      gameScene.prototype.deleteObstaclePool = function() {
        for (var index = 0; index < this._obstaclePool.length; index++) {
          var element = this._obstaclePool[index];
          if (element && element._parent) if (element.x < this.touchEventNode.x - cc.winSize.width) {
            "ground" == element.group ? element.getComponent("Ground") && element.getComponent("Ground")._enable ? this._groundPool.put(element) : element.destroy() : "grass" == element.group ? element.getComponent("Grass") && element.getComponent("Grass")._enable ? this._grassPool.put(element) : element.destroy() : "thorn" == element.group ? this._thornPool.put(element) : element.destroy();
            this._obstaclePool.splice(index, 1);
          } else "sensor" == element.group && element.x - this._birdLead.x < this._birdLead.width && element.getComponent("Sensor").emitEvent();
        }
      };
      gameScene.prototype.deleteTopAndDownOb = function() {
        for (var index = 0; index < this._spObPool.length; index++) {
          var element = this._spObPool[index];
          if (element && element._parent && element.x < this.touchEventNode.x - cc.winSize.width) {
            this._spObNodePool.put(element);
            this._spObPool.splice(index, 1);
          }
        }
        for (var i = 0; i < this.topPrefabPool.length; i++) {
          var element = this.topPrefabPool[i];
          if (element && element.x < this.touchEventNode.x - cc.winSize.width) {
            this.topPrefabPool[i].removeFromParent();
            this.topPrefabPool.splice(i, 1);
          }
        }
      };
      gameScene.prototype.deleteEgg = function() {
        for (var index = 0; index < this._eggPool.length; index++) {
          var egg = this._eggPool[index];
          if (egg && egg._parent && (this.camera.x - egg.x > cc.winSize.width || egg.y < -cc.winSize.height / 2 - egg.height / 2)) {
            this._eggNodePool.put(egg);
            this._eggPool.splice(index, 1);
            this.changeGravity();
          }
        }
      };
      gameScene.prototype.update = function() {
        var _this = this;
        if (!this.node.getComponent("GameModel").isGameStart) {
          if (this._gameOver) {
            if (this._isWin) if (this.checkEffectiveEgg()) {
              var nowTime = this.node.getComponent("GameModel").getLocalTime();
              nowTime - this._endStageLastDeleteEggTime > this._endStageDeleteEggTimeDis && this.endStageFunc();
            } else if (!this.showHeartAnimState) {
              console.log("\u603b\u957f\u5ea6", this.score_speed().length, "\u5206\u6570", this.score, "\u78b0\u5230\u7684\u9053\u5177\u6570\u91cf", this.propScore / 5, "\u603b\u9053\u5177\u6570\u91cf", this.propNum - 1, "\u751f\u6210\u9053\u5177\u8c03\u7528\u6b21\u6570", this.kuaiNum);
              this.node.getComponent("GameModel").isGameStart = false;
              this.showHeartAnimState = true;
              this.node.runAction(cc.sequence(cc.callFunc(function() {
                _this.node.getChildByName("homePanel").getComponent(homePanel_1.default).playAnim();
              }), cc.delayTime(1.2), cc.callFunc(function() {
                var data = {
                  gameScore: _this.score + _this.propScore,
                  gameWin: 1,
                  gameGrade: _this.fen_level()
                };
                Utils_1.default.showSuccess(data, _this.touchEventNode.position);
                window["platform"].submitGameScore(data);
                window["platform"].getRes("success", "audio").then(function(msg) {
                  AudioMgr_1.default.Instance().playSFX(msg);
                });
              })));
            }
          } else this._birdLead && (this._birdLead.x = this.touchEventNode.x);
          return;
        }
        this._birdLead.y < -cc.winSize.height / 2 && this.gameOver();
        if (this._touchStart) {
          var nowTime = this.node.getComponent("GameModel").getLocalTime();
          nowTime - this._lastCreateEggTime > this._crateEggTimeDis && this.createEgg();
        }
        if (this._startEndStage) {
          this._startBullet = false;
          this._speed = 5;
          this.touchEventNode.getComponent("EventEmit").changeScoreLabel("100%");
          var nowTime = this.node.getComponent("GameModel").getLocalTime();
          nowTime - this._endStageLastDeleteEggTime > this._endStageDeleteEggTimeDis && this.endStageFunc();
        }
        if (this._startBullet) {
          var nowTime = this.node.getComponent("GameModel").getLocalTime();
          nowTime - this._lastCreateBulletTime > this._createBulletTimeDis;
        }
        if (this._nowGroundLength - this._birdLead.x < cc.winSize.width) if (this.node.getComponent("GameModel").isEndless) {
          this._mapConfigIndex == this._mapConfig.length - 3 && this._mapConfig.push(Utils_1.default.getRndInteger(-1, 18));
          this._obstacleConfig[this._mapConfig[this._mapConfigIndex]] || console.log("this._mapConfigIndex", this._obstacleConfig[this._mapConfig[this._mapConfigIndex]], this._mapConfigIndex, this._mapConfig, this._obstacleConfig);
          this.createObstacle(this._obstacleConfig[this._mapConfig[this._mapConfigIndex]], this._mapBeginPox, this._beginPosY, true);
        } else this._mapConfigIndex < this._mapConfig.length ? this.createObstacle(this._obstacleConfig[this._mapConfig[this._mapConfigIndex]], this._mapBeginPox, this._beginPosY, true) : this.createHomePanel();
        this.deleteObstaclePool();
        this.deleteTopAndDownOb();
        this.deleteEgg();
        if (this.node.getComponent("GameModel").isEndless) {
          if (this._speed < this.speedMax) {
            this.speedMi += .1;
            this.speedMi >= 20 && (this._speed += .005);
          }
          this.leftScore += .3;
          if (this.leftScore >= 10) {
            this.score++;
            this.leftScore = 0;
          }
          this.touchEventNode.getComponent(EventEmit_1.default).updateScore(this.score, this.propScore);
        } else if (this._birdLead.x <= this._totalGroundLength) {
          if (this._birdLead.x > 0) {
            var dis = Number(this._birdLead.x);
            if (this._speed < this.speedMax) {
              this.speedMi += .1;
              this.speedMi >= 20 && (this._speed += .005);
            }
            var length = this.score_speed().length;
            var score = Math.floor(Number(Number(dis / this._totalGroundLength).toFixed(2)) / (1 / length));
            var num = Math.floor(score - this.leftScore);
            this.score += num;
            this.leftScore = score;
            this.touchEventNode.getComponent("EventEmit").changeProgress(Number(dis / this._totalGroundLength).toFixed(2), this.score, this.propScore);
            var pro = this.touchEventNode.getComponent("EventEmit").getProgress();
            var progress = Number((100 * pro).toFixed(0)) < 0 ? 0 : (100 * pro).toFixed(0);
            this.touchEventNode.getComponent("EventEmit").changeScoreLabel(progress + "%");
            this.touchEventNode.getComponent(EventEmit_1.default).updateXing(this.fen_level());
          }
        } else {
          this.touchEventNode.getComponent("EventEmit").changeProgress(1);
          this.touchEventNode.getComponent(EventEmit_1.default).updateXing(this.fen_level());
        }
        if (this._homePanel && this._homePanel.x - this.touchEventNode.x <= -365) {
          var gameModel = this.node.getComponent("GameModel");
          gameModel._lastMapConfig = [];
          gameModel._lastTopObConfig = [];
          gameModel._lastBangX = null;
          gameModel._lastBangY = null;
          gameModel._level++;
          gameModel._nowScore += this._nowLvScore;
          gameModel.updateBestScore();
          gameModel.isGameStart = false;
          this._startBullet = false;
          this._gameOver = true;
          this._isWin = true;
          return;
        }
        for (var index = 0; index < this._eggPool.length; index++) {
          var egg = this._eggPool[index];
          egg && egg._parent && !egg._isStop && (egg.x += this._speed);
        }
        this.camera.x += this._speed;
        this.touchEventNode.x += this._speed;
        this.bg.x = this.touchEventNode.x;
        Math.abs(this.touchEventNode.x - this._birdLead.x) >= cc.winSize.width / 2 - Math.abs(this._birdPosX) && (this._birdLead.x = this.touchEventNode.x + Math.abs(this._birdPosX) - cc.winSize.width / 2);
      };
      gameScene.prototype.fen_level = function() {
        var num = this.score + this.propScore;
        var fen = this.score_speed().length;
        return num >= 1.5 * fen ? 3 : num >= 1.25 * fen ? 2 : num >= 1 * fen ? 1 : 0;
      };
      gameScene.prototype.score_speed = function() {
        var level = this.node.getComponent("GameModel")._level;
        if (1 == level) return {
          length: 30,
          obsNum: 5,
          porpNum: 5
        };
        if (2 == level) return {
          length: 50,
          obsNum: 10,
          porpNum: 10
        };
        if (3 == level) return {
          length: 80,
          obsNum: 20,
          porpNum: 10
        };
        if (4 == level) return {
          length: 100,
          obsNum: 30,
          porpNum: 15
        };
        if (5 == level) return {
          length: 120,
          obsNum: 40,
          porpNum: 15
        };
        if (6 == level) return {
          length: 120,
          obsNum: 50,
          porpNum: 20
        };
        if (7 == level) return {
          length: 150,
          obsNum: 60,
          porpNum: 20
        };
        if (8 == level) return {
          length: 150,
          obsNum: 60,
          porpNum: 25
        };
        if (9 == level) return {
          length: 150,
          obsNum: 70,
          porpNum: 25
        };
        if (10 == level) return {
          length: 180,
          obsNum: 70,
          porpNum: 30
        };
        if (11 == level) return {
          length: 180,
          obsNum: 80,
          porpNum: 35
        };
        if (level >= 12) return {
          length: 180,
          obsNum: 8,
          porpNum: 40
        };
      };
      gameScene.prototype.showAni = function() {
        return __awaiter(this, void 0, void 0, function() {
          var egg, eggPfb, num;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (0 == this._backGameCount) return [ 2 ];
              if (!!this.node.getComponent("GameModel").isGameStart) return [ 3, 4 ];
              if (!(this._showAniCount <= 2)) return [ 3, 2 ];
              this._showAniCount++;
              egg = null;
              return [ 4, this.GetPrefab("prefab/item/egg") ];

             case 1:
              eggPfb = _a.sent();
              if (this._eggNodePool.size() > 0) {
                egg = this._eggNodePool.get();
                egg.getChildByName("bird_huichen").active = false;
              } else egg = cc.instantiate(eggPfb);
              num = Utils_1.default.getRndInteger(1, 5);
              egg.getComponent(Egg_1.default).setSpriteFrmeFir(this["bird_block" + num]);
              this.node.addChild(egg);
              egg.zIndex = 2;
              this._birdLead.y += this._dis;
              egg.y = this._birdLead.y - this._dis;
              egg.x = this._birdLead.x;
              egg.getComponent("Egg").changeNormal();
              egg.scale = .8;
              egg.runAction(cc.sequence(cc.scaleTo(.2, 1.1), cc.scaleTo(.1, 1)));
              this._eggPool.push(egg);
              return [ 3, 3 ];

             case 2:
              this.waitAni();
              _a.label = 3;

             case 3:
              setTimeout(function() {
                this.showAni();
              }.bind(this), 1e3);
              _a.label = 4;

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      gameScene.prototype.waitAni = function() {
        var _parent = 0;
        var obj = null;
        for (var _i = 0, _a = this._eggPool; _i < _a.length; _i++) {
          var egg = _a[_i];
          egg && egg._parent ? obj ? egg.y < obj.y && (obj = egg) : obj = egg : _parent++;
        }
        this._eggNodePool.put(obj);
        _parent == this._eggPool.length && (this._showAniCount = 0);
      };
      gameScene = __decorate([ ccclass ], gameScene);
      return gameScene;
    }(BaseUI_1.default);
    exports.default = gameScene;
    cc._RF.pop();
  }, {
    "./EventEmit": "EventEmit",
    "./framwork/BaseUI": "BaseUI",
    "./item/Bird": "Bird",
    "./item/Egg": "Egg",
    "./item/addScore": "addScore",
    "./item/homePanel": "homePanel",
    "./item/top": "top",
    "./utils/AnalyticsUtilities": "AnalyticsUtilities",
    "./utils/AudioMgr": "AudioMgr",
    "./utils/CollectAnimation": "CollectAnimation",
    "./utils/Utils": "Utils"
  } ],
  homePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b933b5zoPFPmbetUn9dHQC/", "homePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var homePanel = function(_super) {
      __extends(homePanel, _super);
      function homePanel() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      homePanel.prototype.init = function() {
        var home_1 = this.GetSprite("home_1-01");
        var xian = this.GetSprite("xian");
        var muniao = this.GetSprite("muniao");
        Utils_1.default.setSpriteAssets(home_1, "house");
        Utils_1.default.setSpriteAssets(xian, "line");
        Utils_1.default.setSpriteAssets(muniao, "bird2");
      };
      homePanel.prototype.playAnim = function() {
        var node1 = this.GetGameObject("love1");
        var node2 = this.GetGameObject("love2");
        var node3 = this.GetGameObject("love3");
        cc.tween(node1).call(function() {
          node1.scale = 0;
          node1.active = true;
        }).to(.2, {
          scale: 1.1
        }, {
          easing: "sineOut"
        }).to(.08, {
          scale: 1
        }, {
          easing: "sineOut"
        }).start();
        cc.tween(node2).delay(.3).call(function() {
          node2.scale = 0;
          node2.active = true;
        }).to(.2, {
          scale: 1.1
        }, {
          easing: "sineOut"
        }).to(.08, {
          scale: 1
        }, {
          easing: "sineOut"
        }).start();
        cc.tween(node3).delay(.6).call(function() {
          node3.scale = 0;
          node3.active = true;
        }).to(.2, {
          scale: 1.1
        }, {
          easing: "sineOut"
        }).to(.08, {
          scale: 1
        }, {
          easing: "sineOut"
        }).start();
      };
      homePanel.prototype.closeAnim = function() {
        this.node.active = false;
        var node1 = this.GetGameObject("love1");
        var node2 = this.GetGameObject("love2");
        var node3 = this.GetGameObject("love3");
        node1.stopAllActions();
        node2.stopAllActions();
        node3.stopAllActions();
        node1.active = false;
        node2.active = false;
        node3.active = false;
      };
      homePanel = __decorate([ ccclass ], homePanel);
      return homePanel;
    }(BaseUI_1.default);
    exports.default = homePanel;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ],
  spObstacle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43ba5kJG6lPdLptA7aZdFKg", "spObstacle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var spObstacle = function(_super) {
      __extends(spObstacle, _super);
      function spObstacle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._type = null;
        return _this;
      }
      spObstacle.prototype.initType = function(type) {
        this._type = type;
        1 == this._type ? Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "block") : 2 == this._type && Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "blockgreen");
      };
      spObstacle.prototype.onLoad = function() {
        cc.systemEvent.on("UPDATE_SELECT_SCENE", this.updateUI, this);
        this._type = -1;
      };
      spObstacle.prototype.updateUI = function() {
        this.initType(this._type);
      };
      spObstacle.prototype.start = function() {};
      spObstacle = __decorate([ ccclass ], spObstacle);
      return spObstacle;
    }(BaseUI_1.default);
    exports.default = spObstacle;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ],
  success: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec0a57nApBKT7gmHUsXwKmJ", "success");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var success = function(_super) {
      __extends(success, _super);
      function success() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      success.prototype.show = function(msg) {
        cc.find("Canvas").getComponent("GameModel").isEndless ? this.GetText("lab_title").string = "\u603b\u5206:" + msg.gameScore : this.GetText("lab_title").string = "\u603b\u5206:" + msg.gameScore + "\u661f\u661f:" + msg.gameGrade;
      };
      success.prototype.onLoad = function() {
        this.startAnim();
      };
      success.prototype.onNext = function() {
        cc.systemEvent.emit("RESET_GAME");
        cc.systemEvent.emit("START_GAME");
        this.onClose();
      };
      success.prototype.onClose = function() {
        this.node.destroy();
      };
      success = __decorate([ ccclass ], success);
      return success;
    }(BaseUI_1.default);
    exports.default = success;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI"
  } ],
  top: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "564a5ai9zNOcr0sovPRrdxS", "top");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("../framwork/BaseUI");
    var Utils_1 = require("../utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var top = function(_super) {
      __extends(top, _super);
      function top() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      top.prototype.init = function() {
        Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "top");
      };
      top = __decorate([ ccclass ], top);
      return top;
    }(BaseUI_1.default);
    exports.default = top;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../utils/Utils": "Utils"
  } ]
}, {}, [ "Config", "EventEmit", "GameModel", "PlayerModel", "GameConst", "GameEvent", "ModuleEventEnum", "BaseUI", "MsgHints", "User", "UserMsg", "gameScene", "Bird", "Bullet", "Egg", "Grass", "Ground", "Prop", "Sensor", "Thorn", "addScore", "fail", "homePanel", "spObstacle", "success", "top", "PlayerState", "PoolMgr", "Singleton", "TweenPool", "GameSystem", "AnalyticsUtilities", "AudioMgr", "BigNumber", "CollectAnimation", "GameInfo", "HTTP", "MConfig", "NumberRoll", "Shake", "Utils" ]);