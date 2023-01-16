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
    var Utils_1 = require("../Utils/Utils");
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
        this.node.getComponent(cc.Button) && Utils_1.default.addClickEvent(this.node, this.node, cc.js.getClassName(this), "onBtnClicked", this.node.getComponent(cc.Button).target);
        this._addClickEvent(this.node);
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
        cc.find("Canvas/loading").active = true;
      };
      BaseUI.prototype.HideLoading = function() {
        cc.find("Canvas/loading").active = false;
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
      BaseUI.prototype._addClickEvent = function(node) {
        if (this._isSkipNode(node)) return;
        for (var i = 0; i < node.childrenCount; ++i) {
          var tmp = node.children[i];
          if (this._isSkipNode(tmp)) continue;
          tmp.getComponent(cc.Button) && Utils_1.default.addClickEvent(tmp, this.node, cc.js.getClassName(this), "onBtnClicked", tmp.getComponent(cc.Button).target);
          this._addClickEvent(tmp);
        }
      };
      BaseUI.prototype.getChildByName = function(path, node) {
        return cc.find(path, node || this.node);
      };
      BaseUI.prototype.startAnim = function() {
        if (this.node) {
          this.node.stopAllActions();
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
        var _this = this;
        if (this.node) {
          this.node.stopAllActions();
          this.node.setScale(1, 1);
          var actionOut = cc.fadeOut(.1);
          var scaleTo = cc.scaleTo(.05, 1);
          this.node.runAction(cc.sequence(cc.spawn(scaleTo, actionOut), cc.callFunc(function() {
            _this.node.active = false;
          })));
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
      var BaseUI_1;
      BaseUI = BaseUI_1 = __decorate([ ccclass ], BaseUI);
      return BaseUI;
    }(cc.Component);
    exports.default = BaseUI;
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils",
    "../event/GameEvent": "GameEvent"
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
        _this.callback = null;
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
  HTTP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67bbbOsI39IGox3ery2aUUG", "HTTP");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MsgHints_1 = require("../framwork/MsgHints");
    var Utils_1 = require("./Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Http = function() {
      function Http() {
        this.isInit = false;
        this.socket = null;
        this.host = null;
        this.closedByClient = false;
        this.inConnecting = false;
        this.index = 1;
      }
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
        console.log(requestURL);
        xhr.open("GET", requestURL, true);
        xhr.timeout = 1e4;
        Utils_1.default.ShowLoading();
        xhr.onload = function() {
          var ret = JSON.parse(xhr.responseText);
          Utils_1.default.HideLoading();
          if (xhr.status >= 200 && xhr.status < 300 || 304 == xhr.status) handler && handler(ret); else {
            console.log("========>", ret);
            if (2 == ret["errcode"] || 1 == ret["errcode"]) {
              cc.sys.localStorage.removeItem("jwt");
              cc.director.loadScene("LoadingScene", function() {
                MsgHints_1.default.show("\u8d26\u6237\u4fe1\u606f\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u9646");
              });
              return;
            }
            xhr.abort();
          }
        };
        xhr.ontimeout = function(e) {
          cc.log(e);
          failhandler && failhandler();
        };
        xhr.onabort = function(e) {
          cc.log(e);
          failhandler && failhandler();
        };
        xhr.onerror = function(e) {
          cc.log(e);
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
      Http.prototype.connect = function(url) {
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
          if (evt.target["xxxxx"] != self.socket["xxxxx"]) return;
          console.log("Network onopen...", evt);
          self.isInit = true;
          cc.director.emit("socketOpen");
        };
        self.socket.onmessage = function(evt) {
          if (evt.target["xxxxx"] != self.socket["xxxxx"]) return;
          if (cc.sys.isNative) {
            var a = new Uint8Array(evt.data);
            var packet = JSON.parse(self.Utf8ArrayToStr(a));
            self.appandeMsg(packet);
          } else {
            var fileReader = new FileReader();
            fileReader.onload = function(progressEvent) {
              var arrayBuffer = this.result;
              var a = new Uint8Array(arrayBuffer);
              var packet = JSON.parse(self.Utf8ArrayToStr(a));
              self.appandeMsg(packet);
            };
            fileReader.readAsArrayBuffer(evt.data);
          }
        };
        self.socket.onerror = function(evt) {
          console.log("onerror", JSON.stringify(evt));
          if (!evt.target) return;
          if (!self.socket) return;
          console.error("onerror ->", "xxxxx:", evt.target["xxxxx"], ", self.index:", self.index);
          if (evt.target["xxxxx"] != self.socket["xxxxx"]) {
            console.error("xxxxxxxxxxxxxxxxxxxx");
            return;
          }
          console.log("Network onerror...");
          _this.isInit = false;
          self.inConnecting = false;
          self.socket.close();
          self.netErrorDummy(evt);
        };
        self.socket.onclose = function(evt) {
          if (!evt.target) return;
          if (!self.socket) return;
          console.error("onclose ->", "xxxxx:", evt.target["xxxxx"], ", self.index:", self.index);
          console.error("onclose ->", evt);
          if (evt.target["xxxxx"] != self.socket["xxxxx"]) return;
          self.inConnecting = false;
          _this.isInit = false;
          self.socket && self.socket.close();
          _this.netCloseDummy(evt);
        };
      };
      Http.prototype.str2UTF8 = function(str) {
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
      Http.prototype.send = function(c, m, data) {
        var cmd = {
          c: c,
          m: m,
          data: data
        };
        if (this.isInit) {
          if (this.socket.readyState == WebSocket.OPEN) {
            var str = JSON.stringify(cmd);
            "pong" != cmd.m ? cc.sys.isNative ? console.log("\u53d1\u9001---------------------", JSON.stringify(cmd)) : console.log("\u53d1\u9001---------------------", cmd) : console.log("pong---------------------", JSON.stringify(cmd), new Date());
            this.socket.send(str);
          }
        } else cc.warn("Network is not inited...");
      };
      Http.prototype.close = function() {
        console.log("\u4e3b\u52a8\u5173\u95ed socket");
        if (this.socket) {
          this.socket.close();
          this.socket = null;
          this.isInit = false;
          this.closedByClient = true;
          this.inConnecting = false;
        }
      };
      Http.prototype.appandeMsg = function(data) {
        "ping" != data.m && (cc.sys.isNative ? console.log("---------------------\u63a5\u6536", JSON.stringify(data)) : console.log("---------------------\u63a5\u6536", data));
        data["src"] = "tcp";
        this.netDataDummy(data);
      };
      Http.prototype.netDataDummy = function(event) {
        var self = this;
        if ("ping" == event.m) {
          console.log("pingiiiiiiiii", event, new Date());
          self.send("game", "pong", {});
        } else {
          if (event.data.errcode) {
            console.log("socket--\x3e", JSON.stringify(event));
            MsgHints_1.default.show(event.data.errmsg);
            return;
          }
          cc.director.emit(event.c + "_" + event.m, event.data);
        }
      };
      Http.prototype.netErrorDummy = function(event) {};
      Http.prototype.netCloseDummy = function(event) {
        var self = this;
        this.inConnecting || setTimeout(function() {
          self.connect();
        }, 1);
      };
      Http.prototype.Utf8ArrayToStr = function(array) {
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
      Http.url = "https://app.yanglegetu.com/";
      Http._url = "http://app.zdkjlm.com:9080/";
      Http.instance = null;
      return Http;
    }();
    exports.default = Http;
    cc._RF.pop();
  }, {
    "../framwork/MsgHints": "MsgHints",
    "./Utils": "Utils"
  } ],
  LongTouchComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e00b9OAUdVJhbS0BUI7M5px", "LongTouchComponent");
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
    var LongTouchComponent = function(_super) {
      __extends(LongTouchComponent, _super);
      function LongTouchComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.touchInterval = .02;
        _this.enableMultiTouching = false;
        _this.longTouchEvents = [];
        _this._touchCounter = 0;
        _this._isTouching = false;
        return _this;
      }
      LongTouchComponent.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
      };
      LongTouchComponent.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
        this.unschedule(this._touchCounterCallback);
      };
      LongTouchComponent.prototype.clear = function() {
        this._isTouching = false;
        this.unschedule(this._touchCounterCallback);
      };
      LongTouchComponent.prototype._onTouchStart = function(event) {
        var _this = this;
        if (!this.enableMultiTouching) {
          if (this._isTouching) return;
          this.node.getBoundingBoxToWorld().contains(event.getLocation()) ? this._isTouching = true : this._isTouching = false;
          if (this._isTouching) {
            this.publishOneTouch();
            this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
              if (_this._isTouching) {
                _this.unschedule(_this._touchCounterCallback);
                _this.schedule(_this._touchCounterCallback, _this.touchInterval);
              }
            })));
          }
        }
      };
      LongTouchComponent.prototype._onTouchEnd = function(event) {
        this._isTouching = false;
        this._touchCounter = 0;
        this.unschedule(this._touchCounterCallback);
      };
      LongTouchComponent.prototype._onTouchCancel = function(event) {
        this._isTouching = false;
        this._touchCounter = 0;
        this.unschedule(this._touchCounterCallback);
      };
      LongTouchComponent.prototype._touchCounterCallback = function() {
        this._isTouching ? this.publishOneTouch() : this.unschedule(this._touchCounterCallback);
      };
      LongTouchComponent.prototype.publishOneTouch = function() {
        var _this = this;
        if (!this._isTouching) return;
        this.node.runAction(cc.sequence(cc.scaleTo(this.touchInterval / 2, 1.2), cc.scaleTo(this.touchInterval / 2, 1)));
        this._touchCounter++;
        this.longTouchEvents.forEach(function(eventHandler) {
          eventHandler.emit([ _this.node ]);
        });
      };
      __decorate([ property({
        tooltip: "\u89e6\u6478\u56de\u8c03\u95f4\u9694\uff08\u79d2\uff09\u3002\u5047\u5982\u4e3a0.1\uff0c\u90a3\u4e481\u79d2\u5185\u4f1a\u56de\u8c0310\u6b21 ${longTouchEvents} \u4e8b\u4ef6\u6570\u7ec4"
      }) ], LongTouchComponent.prototype, "touchInterval", void 0);
      __decorate([ property({
        readonly: true,
        tooltip: "\u662f\u5426\u652f\u6301\u591a\u70b9\u89e6\u63a7\uff08\u5f53\u524d\u8fd8\u4e0d\u652f\u6301\uff09"
      }) ], LongTouchComponent.prototype, "enableMultiTouching", void 0);
      __decorate([ property({
        type: [ cc.Component.EventHandler ],
        tooltip: "\u56de\u8c03\u4e8b\u4ef6\u6570\u7ec4\uff0c\u6bcf\u95f4\u9694 ${toucheInterval}s \u56de\u8c03\u4e00\u6b21"
      }) ], LongTouchComponent.prototype, "longTouchEvents", void 0);
      LongTouchComponent = __decorate([ ccclass ], LongTouchComponent);
      return LongTouchComponent;
    }(cc.Component);
    exports.default = LongTouchComponent;
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
  Pop_fail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4dbe5ZHU+BCFrMwaIcFSIzS", "Pop_fail");
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
    var Pop_fail = function(_super) {
      __extends(Pop_fail, _super);
      function Pop_fail() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Pop_fail.prototype.show = function(event) {
        this.GetText("lab_xing").string = "\u661f\u7ea7\uff1a" + event.gameGrade;
        this.GetText("lab_score").string = "\u5206\u6570\uff1a" + event.gameScore;
      };
      Pop_fail.prototype.onRepeat = function() {
        cc.director.loadScene("gameScene");
      };
      Pop_fail = __decorate([ ccclass ], Pop_fail);
      return Pop_fail;
    }(BaseUI_1.default);
    exports.default = Pop_fail;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI"
  } ],
  Pop_level: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c4e0ozPx9OCI8LEQPmc1Jd", "Pop_level");
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
    var Utils_1 = require("../Utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Pop_level = function(_super) {
      __extends(Pop_level, _super);
      function Pop_level() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pathNode = [];
        _this.lujing = [];
        return _this;
      }
      Pop_level.prototype.onLoad = function() {
        this.setNodeSprite();
        this.getPathNode();
        this.getLuXian();
      };
      Pop_level.prototype.setBlood = function(num) {
        this.GetText("lab_homeblood").string = num;
      };
      Pop_level.prototype.setNodeSprite = function() {
        for (var i = 0; i < this.node.children.length; i++) "ground" == this.node.children[i].name && Utils_1.default.setSpriteAssets(this.node.children[i].getComponent(cc.Sprite), "ground");
        Utils_1.default.setSpriteAssets(this.GetSprite("start"), "monsterstart");
        Utils_1.default.setSpriteAssets(this.GetSprite("over"), "mushroom");
        Utils_1.default.setSpriteAssets(this.GetSprite("baohuzhao"), "baohuzhao");
        Utils_1.default.setSpriteAssets(this.GetSprite("ic_xin1"), "xin");
        Utils_1.default.setSpriteAssets(this.GetSprite("ic_xin2"), "xin");
        Utils_1.default.setSpriteAssets(this.GetSprite("ic_xin3"), "xin");
        Utils_1.default.setSpriteAssets(this.GetSprite("mushroomhealth"), "mushroomhealth");
      };
      Pop_level.prototype.getPathNode = function() {
        for (var i = 0; i < this.node.children.length; i++) "ground" == this.node.children[i].name && this.pathNode.push(this.node.children[i]);
      };
      Pop_level.prototype.getLuXian = function() {
        for (var i = 0; i < this.node.children.length; i++) -1 != this.node.children[i].name.indexOf("path") && this.lujing.push(this.node.children[i].position);
      };
      Pop_level.prototype.getOrientation = function(level) {
        if (1 == level) return [ "right", "right", "right", "right", "right", "right", "right" ];
        if (2 == level) return [ "right", "right", "right", "right", "right", "right", "right", "right" ];
        if (3 == level) return [ "right", "left", "left", "right", "right", "right" ];
        if (4 == level) return [ "left", "left", "right", "right", "left", "left", "right", "right", "left", "left", "right", "right", "left", "left", "left", "left" ];
        if (5 == level || 6 == level) return [ "right", "left", "left", "left", "left", "right", "right", "right", "right", "right", "right", "left", "left", "right", "right", "right" ];
        if (7 == level) return [ "right", "right", "left", "left", "right", "right", "left", "left", "right", "right", "left", "left", "left", "left" ];
        if (8 == level) return [ "right", "right", "left", "left", "right", "right", "left", "left", "left", "left", "left", "left", "right", "right", "left", "left", "right", "right", "right", "right" ];
        if (9 == level) return [ "right", "right", "left", "left", "right", "right", "left", "left", "right", "right", "right" ];
      };
      Pop_level = __decorate([ ccclass ], Pop_level);
      return Pop_level;
    }(BaseUI_1.default);
    exports.default = Pop_level;
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI"
  } ],
  Pop_null: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16bd8xspXRLYZPLptUmjZzd", "Pop_null");
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
    var Pop_null = function(_super) {
      __extends(Pop_null, _super);
      function Pop_null() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Pop_null.prototype.show = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.node.active = false;
        }, .5);
      };
      Pop_null = __decorate([ ccclass ], Pop_null);
      return Pop_null;
    }(BaseUI_1.default);
    exports.default = Pop_null;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI"
  } ],
  Pop_select: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "299a7h/r6FINYwjSi2ERsla", "Pop_select");
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
    var MsgHints_1 = require("../framwork/MsgHints");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Pop_select = function(_super) {
      __extends(Pop_select, _super);
      function Pop_select() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Pop_select.prototype.click = function() {
        var num = this.GetInputField("EditBox").string;
        if (num && this.isNumber(num)) {
          cc.director.emit("loadLevel", num);
          this.node.active = false;
        } else MsgHints_1.default.show("\u8bf7\u8f93\u5165\u6b63\u786e\u6570\u5b57");
      };
      Pop_select.prototype.isNumber = function(val) {
        var regPos = /^[0-9]+.?[0-9]*/;
        return !!regPos.test(val);
      };
      Pop_select = __decorate([ ccclass ], Pop_select);
      return Pop_select;
    }(BaseUI_1.default);
    exports.default = Pop_select;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "../framwork/MsgHints": "MsgHints"
  } ],
  Pop_shop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66bceToXSZCv45Ap6JeNw77", "Pop_shop");
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
    var Utils_1 = require("../Utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Pop_shop = function(_super) {
      __extends(Pop_shop, _super);
      function Pop_shop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pos = null;
        return _this;
      }
      Pop_shop.prototype.onLoad = function() {
        this.setImg();
        this.turret_price();
      };
      Pop_shop.prototype.init = function(pos) {
        this.pos = pos;
        this.node.position = pos;
        var w = this.GetGameObject("shopbg").width / 2;
        if (pos.x + w >= cc.winSize.width / 2) {
          this.GetGameObject("shopbg").x = cc.winSize.width / 2 - (pos.x + w);
          return;
        }
        if (pos.x + -w <= -cc.winSize.width / 2) {
          this.GetGameObject("shopbg").x = -cc.winSize.width / 2 - (pos.x + -w);
          return;
        }
        this.GetGameObject("shopbg").x = 0;
      };
      Pop_shop.prototype.setImg = function() {
        Utils_1.default.setSpriteAssets(this.GetSprite("img1"), "turret/turret-sun");
        Utils_1.default.setSpriteAssets(this.GetSprite("img2"), "turret/turret-bottle");
        Utils_1.default.setSpriteAssets(this.GetSprite("img3"), "turret/turret-ice");
        Utils_1.default.setSpriteAssets(this.GetSprite("img4"), "turret/turret-magicball");
        Utils_1.default.setSpriteAssets(this.GetSprite("img5"), "turret/turret-leaf");
        Utils_1.default.setSpriteAssets(this.GetSprite("shopbg"), "turret/shopbg");
        Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "+");
        for (var i = 1; i <= 5; i++) Utils_1.default.setSpriteAssets(this.GetSprite("price" + i), "turret/price");
      };
      Pop_shop.prototype.show = function() {
        this.node.stopAllActions();
        this.node.opacity = 0;
        this.node.active = true;
        this.node.setScale(.8, .8);
        var delay = cc.delayTime(.1);
        var actionIn = cc.fadeIn(.1);
        var scaleTo = cc.scaleTo(.1, 1);
        this.node.runAction(cc.spawn(delay.clone(), actionIn, delay.clone(), scaleTo));
      };
      Pop_shop.prototype.close = function() {
        var _this = this;
        this.node.stopAllActions();
        this.node.setScale(1, 1);
        var actionOut = cc.fadeOut(.1);
        var scaleTo = cc.scaleTo(.05, 1);
        this.node.runAction(cc.sequence(cc.spawn(scaleTo, actionOut), cc.callFunc(function() {
          _this.node.active = false;
        })));
      };
      Pop_shop.prototype.click = function(event, msg) {
        switch (Number(msg)) {
         case 1:
          var data = {
            src: "turret/turret-sun",
            pos: this.pos,
            price: 180,
            id: 1
          };
          cc.director.emit("putTurret", data);
          break;

         case 2:
          var data = {
            src: "turret/turret-bottle",
            pos: this.pos,
            price: 100,
            id: 2
          };
          cc.director.emit("putTurret", data);
          break;

         case 3:
          var data = {
            src: "turret/turret-ice",
            pos: this.pos,
            price: 160,
            id: 3
          };
          cc.director.emit("putTurret", data);
          break;

         case 4:
          var data = {
            src: "turret/turret-magicball",
            pos: this.pos,
            price: 180,
            id: 4
          };
          cc.director.emit("putTurret", data);
          break;

         case 5:
          var data = {
            src: "turret/turret-leaf",
            pos: this.pos,
            price: 260,
            id: 5
          };
          cc.director.emit("putTurret", data);
        }
      };
      Pop_shop.prototype.turret_price = function() {
        this.GetText("coin1").string = "180";
        this.GetText("coin2").string = "100";
        this.GetText("coin3").string = "160";
        this.GetText("coin4").string = "180";
        this.GetText("coin5").string = "260";
      };
      Pop_shop = __decorate([ ccclass ], Pop_shop);
      return Pop_shop;
    }(BaseUI_1.default);
    exports.default = Pop_shop;
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI"
  } ],
  Pop_success: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00edbFTbMtNdJ7TAAfGAMsm", "Pop_success");
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
    var Pop_success = function(_super) {
      __extends(Pop_success, _super);
      function Pop_success() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Pop_success.prototype.show = function(event) {
        this.GetText("lab_xing").string = "\u661f\u7ea7\uff1a" + event.gameGrade;
        this.GetText("lab_score").string = "\u5206\u6570\uff1a" + event.gameScore;
      };
      Pop_success.prototype.onRepeat = function() {
        cc.director.loadScene("gameScene");
      };
      Pop_success = __decorate([ ccclass ], Pop_success);
      return Pop_success;
    }(BaseUI_1.default);
    exports.default = Pop_success;
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
        this.id = 0;
      }
      User.prototype.initData = function(user) {
        this.id = user["id"];
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
    var AudioMgr_1 = require("./AudioMgr");
    var EFLY_TYPE;
    (function(EFLY_TYPE) {
      EFLY_TYPE[EFLY_TYPE["\u91d1\u5e01"] = 0] = "\u91d1\u5e01";
      EFLY_TYPE[EFLY_TYPE["\u4f53\u529b"] = 1] = "\u4f53\u529b";
      EFLY_TYPE[EFLY_TYPE["\u94bb\u77f3"] = 2] = "\u94bb\u77f3";
    })(EFLY_TYPE = exports.EFLY_TYPE || (exports.EFLY_TYPE = {}));
    var Utils = function() {
      function Utils() {}
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
      Utils.ShowLoading = function() {
        cc.find("loadingLayer").active = true;
      };
      Utils.HideLoading = function() {
        cc.find("loadingLayer").active = false;
      };
      Utils.closeAllUI = function() {
        var ui = cc.find("Canvas");
        for (var i = 0; i < ui.childrenCount; ++i) {
          var baseui = ui.children[i].getComponent(BaseUI_1.default);
          baseui && baseui.closeUI();
        }
      };
      Utils.getRndInteger = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
      Utils.worldConvertLocalPointAR = function(node, worldPoint) {
        if (node) return node.convertToNodeSpaceAR(worldPoint);
        return null;
      };
      Utils.worldConvertLocalPoint = function(node, worldPoint) {
        if (node) return node.convertToNodeSpace(worldPoint);
        return null;
      };
      Utils.localConvertWorldPointAR = function(node) {
        if (node) return node.convertToWorldSpaceAR(cc.v2(0, 0));
        return null;
      };
      Utils.localConvertWorldPoint = function(node) {
        if (node) return node.convertToWorldSpace(cc.v2(0, 0));
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
          if (sprite.node && sprite.node.isValid) {
            sprite.spriteFrame = new cc.SpriteFrame(texture);
            sprite.node.getComponent(cc.Widget) && sprite.node.getComponent(cc.Widget).updateAlignment();
          }
        });
      };
      Utils.getSpriteFrame = function(name, callfunc) {
        window["platform"].getRes(name).then(function(texture) {
          var sprite = new cc.SpriteFrame(texture);
          callfunc && callfunc(sprite);
        });
      };
      Utils.showSuccess = function(data) {
        cc.loader.loadRes("prefab/pop/Pop_success", cc.Prefab, function(err, msg) {
          if (err) return cc.log("success\u52a0\u8f7d\u5931\u8d25");
          var node = cc.instantiate(msg);
          node.getComponent("Pop_success").show(data);
          node.parent = cc.find("Canvas");
          node.zIndex = 19999;
        });
      };
      Utils.showFail = function(data) {
        cc.loader.loadRes("prefab/pop/Pop_fail", cc.Prefab, function(err, msg) {
          if (err) return cc.log("fail\u52a0\u8f7d\u5931\u8d25");
          var node = cc.instantiate(msg);
          node.getComponent("Pop_fail").show(data);
          node.parent = cc.find("Canvas");
          node.zIndex = 19999;
        });
      };
      Utils.SetButtonSound = function() {
        if (cc.Button.prototype["touchBeganClone"]) return;
        cc.Button.prototype["touchBeganClone"] = cc.Button.prototype["_onTouchEnded"];
        cc.Button.prototype["_onTouchEnded"] = function(event) {
          this.interactable && this.enabledInHierarchy && cc.audioEngine.playEffect(AudioMgr_1.default.Instance().btnClickSound, false);
          this.touchBeganClone(event);
        };
      };
      Utils.AddFont = function() {
        if (cc.Label.prototype["onLoadClone"]) return;
        cc.Label.prototype["onLoadClone"] = cc.Label.prototype["onLoad"];
        cc.Label.prototype["onLoad"] = function() {
          var _this = this;
          this.font || cc.assetManager.resources.load("Fonts/font", cc.Font, function(err, res) {
            if (_this.node) {
              _this.font = res;
              _this._forceUpdateRenderData(true);
            }
          });
          this.onLoadClone();
        };
      };
      Utils.timeOffset = 0;
      return Utils;
    }();
    exports.default = Utils;
    cc._RF.pop();
  }, {
    "../framwork/BaseUI": "BaseUI",
    "./AudioMgr": "AudioMgr",
    "./BigNumber": "BigNumber",
    "./Shake": "Shake"
  } ],
  bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "05fa0VT3XVAz7UDDE1e5TA+", "bullet");
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
    var Utils_1 = require("../Utils/Utils");
    var item_monster_1 = require("./item_monster");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var bullet = function(_super) {
      __extends(bullet, _super);
      function bullet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.sped = 700;
        _this.plantlv = 0;
        _this.paoInfo = null;
        _this.power = 0;
        _this.parentId = 0;
        return _this;
      }
      bullet.prototype.start = function() {};
      bullet.prototype.update = function(dt) {
        if (this.target && this.target.isValid) {
          var d = this.target.position.add(cc.v3(0, 2, 0)).sub(this.node.position);
          if (d.mag() < this.sped * dt * 2) {
            this.target.getComponent(item_monster_1.default).hit({
              power: this.power,
              id: this.parentId
            });
            this.node.destroy();
            this.node.removeFromParent(true);
            return;
          }
          var v = d.normalize().mul(this.sped * dt);
          this.node.position = this.node.position.add(v);
        } else this.node.removeFromParent(true);
      };
      bullet.prototype.setInfo = function(target, power, parentId) {
        this.power = power;
        this.target = target;
        this.parentId = parentId;
        this.setImg(parentId);
      };
      bullet.prototype.setImg = function(parentId) {
        switch (parentId) {
         case 1:
          Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "turret/turret-sun-bullet");
          break;

         case 2:
          Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "turret/turret-bottle-bullet");
          break;

         case 3:
          Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "turret/turret-ice-bullet");
          break;

         case 4:
          Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "turret/turret-magicball-bullet");
          break;

         case 5:
          Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "turret/turret-leaf-bullet");
        }
      };
      bullet = __decorate([ ccclass ], bullet);
      return bullet;
    }(BaseUI_1.default);
    exports.default = bullet;
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI",
    "./item_monster": "item_monster"
  } ],
  coin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4e80TxJM5DSLxodc2QcLDc", "coin");
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
    var AudioMgr_1 = require("../Utils/AudioMgr");
    var Utils_1 = require("../Utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var coin = function(_super) {
      __extends(coin, _super);
      function coin() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      coin.prototype.init = function(pos) {
        Utils_1.default.setSpriteAssets(this.GetSprite("img"), "coin");
        this.anim(pos);
      };
      coin.prototype.anim = function(pos) {
        var _this = this;
        cc.tween(this.node).delay(1).to(.4, {
          position: pos
        }, {
          easing: "quadInOut"
        }).to(.2, {
          opacity: 0
        }, {
          easing: "sineIn"
        }).call(function() {
          window["platform"].getRes("GetProps", "audio").then(function(msg) {
            AudioMgr_1.default.Instance().playSFX(msg);
          });
          _this.node.removeFromParent(true);
          _this.node.destroy();
        }).start();
      };
      coin = __decorate([ ccclass ], coin);
      return coin;
    }(BaseUI_1.default);
    exports.default = coin;
    cc._RF.pop();
  }, {
    "../Utils/AudioMgr": "AudioMgr",
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI"
  } ],
  gameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1444f0ljMdF8Yx8zNoevZgm", "gameScene");
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
    var MsgHints_1 = require("../framwork/MsgHints");
    var coin_1 = require("../item/coin");
    var item_monster_1 = require("../item/item_monster");
    var item_turret_1 = require("../item/item_turret");
    var obstacle_1 = require("../item/obstacle");
    var prop_1 = require("../item/prop");
    var Pop_level_1 = require("../pop/Pop_level");
    var Pop_null_1 = require("../pop/Pop_null");
    var Pop_shop_1 = require("../pop/Pop_shop");
    var AudioMgr_1 = require("../Utils/AudioMgr");
    var Utils_1 = require("../Utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameScene = function(_super) {
      __extends(gameScene, _super);
      function gameScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.levelScript = null;
        _this.mapWidth = 77;
        _this.mapHeight = 77;
        _this.monsterPool = null;
        _this.monsterPrefab = null;
        _this.turretPrefab = null;
        _this.bulletPrefab = null;
        _this.obstaclePrefab = null;
        _this.propPrefab = null;
        _this.coinPrefab = null;
        _this.level1Prefab = null;
        _this.level2Prefab = null;
        _this.level3Prefab = null;
        _this.level4Prefab = null;
        _this.level5Prefab = null;
        _this.level6Prefab = null;
        _this.level7Prefab = null;
        _this.level8Prefab = null;
        _this.level9Prefab = null;
        _this.turretList = [];
        _this.enemylist = [];
        _this.obstacle = 2;
        _this.obstaclelist = [];
        _this.homeBlood = 10;
        _this.coin = 100;
        _this.level = 1;
        _this.rank = 0;
        _this.max_wave = 6;
        _this.current_wave = 1;
        _this.enemyCount = 0;
        _this.skill_frozen = 0;
        _this.skill_shield = 0;
        _this.skill_addblood = 0;
        _this.isFrozen = false;
        _this.isShield = false;
        _this.dropPropOdds = 100;
        _this.levelCoinfig = null;
        _this.mapId = 0;
        _this.clearanceRate = 0;
        _this.bossCount = 0;
        _this.wave_monster_count = 0;
        _this.monster_data_list = [];
        _this.mapIndex = 0;
        _this.mustDie = false;
        return _this;
      }
      gameScene.prototype.onLoad = function() {
        this.eventOn();
        true;
        this.GetGameObject("Pop_select").active = true;
      };
      gameScene.prototype.initScene = function() {
        var _this = this;
        this.initGameData();
        this.initLevelData();
        cc.loader.loadRes("prefab/item/item_monster", cc.Prefab, function(err, res) {
          if (err) return;
          _this.monsterPrefab = res;
          cc.loader.loadRes("prefab/item/item_turret", cc.Prefab, function(err, res) {
            if (err) return;
            _this.turretPrefab = res;
            cc.loader.loadRes("prefab/item/bullet", cc.Prefab, function(err, res) {
              if (err) return;
              _this.bulletPrefab = res;
              cc.loader.loadRes("prefab/item/obstacle", cc.Prefab, function(err, res) {
                if (err) return;
                _this.obstaclePrefab = res;
                cc.loader.loadRes("prefab/item/prop", cc.Prefab, function(err, res) {
                  if (err) return;
                  _this.propPrefab = res;
                  cc.loader.loadRes("prefab/item/coin", cc.Prefab, function(err, res) {
                    if (err) return;
                    _this.coinPrefab = res;
                    var index = 9;
                    var _loop_1 = function(i) {
                      cc.loader.loadRes("prefab/pop/pop_level" + i, cc.Prefab, function(err, res) {
                        if (err) return;
                        index--;
                        _this["level" + i + "Prefab"] = res;
                        if (index < 1) {
                          _this.setMap();
                          _this.createwave();
                          _this.setObstacle();
                          _this.setGiveTurret();
                          cc.director.emit("selectUp", _this.coin);
                        }
                      });
                    };
                    for (var i = 1; i <= 9; i++) _loop_1(i);
                  });
                });
              });
            });
          });
        });
        this.initSceneData();
      };
      gameScene.prototype.setMap = function() {
        var data = this.levelData();
        var randNum = Utils_1.default.getRndInteger(data.mapMinId, data.mapMaxId);
        this.mapIndex = randNum;
        var node = cc.instantiate(this["level" + randNum + "Prefab"]);
        node.getComponent(Pop_level_1.default).setBlood(this.homeBlood);
        node.parent = this.GetGameObject("levelNode");
        this.levelScript = node.getComponent(Pop_level_1.default);
      };
      gameScene.prototype.initGameData = function() {
        false;
      };
      gameScene.prototype.initLevelData = function() {
        var data = this.levelData();
        this.max_wave = data.waveCount;
        this.wave_monster_count = data.monsterCount;
        this.mapId = Utils_1.default.getRndInteger(data.mapMinId, data.mapMaxId);
        this.clearanceRate = data.clearanceRate;
        this.bossCount = data.bossCount;
        console.log("\u602a\u7269\u6570\u91cf===>", this.bossCount);
        var per_wave_num = Math.floor(this.wave_monster_count / this.max_wave);
        var odd_num = this.wave_monster_count % (this.max_wave * per_wave_num);
        var monster_list = [];
        for (var i = 0; i < this.max_wave; i++) {
          var list = [];
          for (var p = 0; p < per_wave_num; p++) list.push({
            id: Utils_1.default.getRndInteger(1, 6),
            isBoss: false,
            bisi: false
          });
          monster_list.push(list);
        }
        var insertIndex = Utils_1.default.getRndInteger(0, monster_list.length - 1);
        for (var p = 0; p < odd_num; p++) monster_list[insertIndex].push({
          id: Utils_1.default.getRndInteger(1, 6),
          isBoss: false,
          bisi: false
        });
        var bossList = this.getRandomNum(0, monster_list.length - 1, this.bossCount);
        for (var b = 0; b < bossList.length; b++) {
          var monsterIndex = Utils_1.default.getRndInteger(0, monster_list[bossList[b]].length - 1);
          monster_list[bossList[b]][monsterIndex].isBoss = true;
        }
        if (100 - data.clearanceRate > 0) {
          var count = 100 - data.clearanceRate;
          var rand = Utils_1.default.getRndInteger(1, 100);
          if (rand <= count) {
            var num = 10;
            for (var i = 0; i < monster_list.length; i++) for (var c = 0; c < monster_list[i].length; c++) if (num > 1) {
              monster_list[i][c].bisi = true;
              num--;
            }
          }
        }
        this.monster_data_list = monster_list;
        console.log("\u602a\u517d\u53c2\u6570===>", monster_list);
      };
      gameScene.prototype.initSceneData = function() {
        this.GetGameObject("tools-ice").getComponent(cc.Widget).updateAlignment();
        this.GetGameObject("tools-shield").getComponent(cc.Widget).updateAlignment();
        this.GetGameObject("tools-medicine").getComponent(cc.Widget).updateAlignment();
        this.GetGameObject("tools-ice").active = false;
        this.GetGameObject("tools-shield").active = false;
        this.GetGameObject("tools-medicine").active = false;
        this.GetText("lab_level").string = "\u7b2c" + this.level + "\u5173";
        this.GetText("lab_rank").string = this.rank + "";
        this.GetText("lab_num").string = this.current_wave + ":" + this.max_wave;
        this.initCoin();
      };
      gameScene.prototype.createwave = function() {
        var _this = this;
        var list = [];
        var num = 0;
        list = this.monster_data_list[this.current_wave - 1];
        num = list.length;
        this.enemyCount = num;
        console.log("guaiwulist===>", list);
        var _loop_2 = function(i) {
          var id = list[i].id;
          var isBoss = list[i].isBoss;
          this_1.node.runAction(cc.sequence(cc.delayTime(1 * i), cc.callFunc(function() {
            var e = cc.instantiate(_this.monsterPrefab);
            e.parent = _this.GetGameObject("monsterNode");
            var data = {
              path: _this.levelScript.lujing,
              id: id,
              isBoss: isBoss,
              bisi: list[i].bisi
            };
            var rot = _this.levelScript.getOrientation(_this.mapIndex);
            e.getComponent(item_monster_1.default).init(data, rot);
            _this.enemylist.push(e);
          })));
        };
        var this_1 = this;
        for (var i = 0; i < list.length; ++i) _loop_2(i);
      };
      gameScene.prototype.setSceneNodeImg = function() {
        Utils_1.default.setSpriteAssets(this.GetSprite("tools-ice"), "tools-ice");
        Utils_1.default.setSpriteAssets(this.GetSprite("tools-shield"), "tools-shield");
        Utils_1.default.setSpriteAssets(this.GetSprite("tools-medicine"), "tools-medicine");
        Utils_1.default.setSpriteAssets(this.GetSprite("spr_level"), "top/level");
        Utils_1.default.setSpriteAssets(this.GetSprite("wave-bg"), "top/wave-bg");
        Utils_1.default.setSpriteAssets(this.GetSprite("coin_bg"), "top/coin_bg");
        Utils_1.default.setSpriteAssets(this.GetSprite("score_bg"), "top/score_bg");
        Utils_1.default.setSpriteAssets(this.GetSprite("background"), "bg");
        Utils_1.default.setSpriteAssets(this.GetSprite("start"), "monsterstart");
        Utils_1.default.setSpriteAssets(this.GetSprite("over"), "mushroom");
        Utils_1.default.setSpriteAssets(this.GetSprite("mushroomhealth"), "mushroomhealth");
      };
      gameScene.prototype.eventOn = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
        cc.director.on("putTurret", this.put_turret, this);
        cc.director.on("uplevel", this.uplevel, this);
        cc.director.on("reduce_blood", this.reduce_blood, this);
        cc.director.on("guaiDie", this.guaiDie, this);
        cc.director.on("getProp", this.getProp, this);
        cc.director.on("loadLevel", this.loadLevel, this);
      };
      gameScene.prototype.loadLevel = function(num) {
        this.level = num;
        this.initScene();
      };
      gameScene.prototype.getProp = function(obj) {
        var id = obj.id;
        var pos;
        if (1 == id) {
          this.skill_frozen++;
          pos = this.GetGameObject("tools-ice").position;
          this.GetGameObject("tools-ice").active = true;
        } else if (2 == id) {
          this.skill_shield++;
          pos = this.GetGameObject("tools-shield").position;
          this.GetGameObject("tools-shield").active = true;
        } else if (3 == id) {
          this.skill_addblood++;
          pos = this.GetGameObject("tools-medicine").position;
          this.GetGameObject("tools-medicine").active = true;
        }
        obj.node.getComponent(prop_1.default).move(pos);
      };
      gameScene.prototype.call_sched_ice = function() {
        this.GetGameObject("tools-ice").active = false;
        this.skill_frozen = 0;
      };
      gameScene.prototype.call_sched_shield = function() {
        this.GetGameObject("tools-shield").active = false;
        this.skill_shield = 0;
      };
      gameScene.prototype.call_sched_medicine = function() {
        this.GetGameObject("tools-medicine").active = false;
        this.skill_addblood = 0;
      };
      gameScene.prototype.reduce_blood = function(blood) {
        var _this = this;
        if (this.isShield) {
          this.isShield = false;
          this.GetGameObject("baohuzhao").active = false;
          console.log("\u62a4\u76fe\u62b5\u6d88\u653b\u51fb");
          return;
        }
        for (var i = 0; i < this.enemylist.length; i++) if (this.enemylist[i] == blood.node) {
          this.enemylist.splice(i, 1);
          break;
        }
        if (this.homeBlood - blood.reduce_blood <= 0) {
          this.homeBlood = 0;
          this.GetText("lab_homeblood").string = "0";
          console.log("\u8840\u91cf\u4e0d\u8db3\uff0c\u6e38\u620f\u5931\u8d25");
          this.node.stopAllActions();
          this.showFail();
          return;
        }
        this.homeBlood -= blood.reduce_blood;
        this.GetText("lab_homeblood").string = this.homeBlood + "";
        window["platform"].getRes("lose", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
        this.homeAnim();
        if (this.enemylist.length < 1) {
          var callfunc = function() {
            if (_this.current_wave < _this.max_wave) {
              _this.current_wave++;
              _this.GetText("lab_num").string = _this.current_wave + ":" + _this.max_wave;
              _this.createwave();
            } else {
              MsgHints_1.default.show("\u901a\u5173\u6210\u529f");
              _this.showSuccess();
            }
          };
          this.scheduleOnce(callfunc, 1);
        }
      };
      gameScene.prototype.homeAnim = function() {
        var node = this.GetGameObject("over");
        node.stopAllActions();
        cc.tween(node).to(.1, {
          scaleY: .8,
          scaleX: 1.2
        }).to(.1, {
          scaleY: 1,
          scaleX: 1
        }).start();
      };
      gameScene.prototype.uplevel = function(price) {
        this.coin -= price;
        this.setCoinLabel();
        window["platform"].getRes("upgrade", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
        cc.director.emit("selectUp", this.coin);
      };
      gameScene.prototype.put_turret = function(res) {
        if (this.coin < res.price) return MsgHints_1.default.show("\u91d1\u5e01\u4e0d\u8db3");
        this.coin -= res.price;
        this.setCoinLabel();
        this.GetGameObject("Pop_shop").getComponent(Pop_shop_1.default).close();
        var node = cc.instantiate(this.turretPrefab);
        node.getComponent(item_turret_1.default).init(res.src, this.enemylist, this.bulletPrefab, res.id);
        node.position = res.pos;
        node.parent = this.GetGameObject("turretNode");
        this.turretList.push(node);
        cc.director.emit("selectUp", this.coin);
      };
      gameScene.prototype.setCoinLabel = function() {
        this.GetText("lab_coin").string = this.coin + "";
      };
      gameScene.prototype.setScoreLabel = function() {
        this.GetText("lab_rank").string = this.rank + "";
      };
      gameScene.prototype.touch_start = function(event) {
        var locat = event.getLocation();
        var pos = this.node.convertToNodeSpaceAR(locat);
        var data = this.select_pos_in_path(pos);
        if (data.active) {
          this.GetGameObject("Pop_shop").getComponent(Pop_shop_1.default).init(data.position);
          this.GetGameObject("Pop_shop").getComponent(Pop_shop_1.default).show();
        } else {
          this.GetGameObject("Pop_shop").getComponent(Pop_shop_1.default).close();
          1 == data.type && this.showNull(data.pos);
        }
        console.log("\u8fd4\u56de\u53c2\u6570==>", data);
      };
      gameScene.prototype.select_pos_in_path = function(pos) {
        if (pos.x > cc.winSize.width / 2 - this.mapWidth || pos.x < -cc.winSize.width / 2 + this.mapWidth) {
          console.log("\u5c4f\u5e55\u5de6\u53f3\u8fb9\u754c");
          return {
            active: false,
            type: 3
          };
        }
        for (var a = 0; a < this.turretList.length; a++) {
          var node = this.turretList[a];
          var xradius = this.mapWidth / 2;
          var yradius = this.mapHeight / 2;
          if (pos.x <= node.x + xradius && pos.x >= node.x - xradius && pos.y <= node.y + yradius && pos.y >= node.y - yradius) {
            console.log("\u8be5\u4f4d\u7f6e\u5df2\u6709\u70ae\u5854");
            return {
              active: false,
              type: 4
            };
          }
        }
        for (var i = 0; i < this.levelScript.pathNode.length; i++) {
          var node = this.levelScript.pathNode[i];
          var xradius = this.mapWidth / 2;
          var yradius = this.mapHeight / 2;
          if (pos.x <= node.x + xradius && pos.x >= node.x - xradius && pos.y <= node.y + yradius && pos.y >= node.y - yradius) {
            console.log("\u5728\u8def\u5f84\u4e0a");
            return {
              active: false,
              type: 2
            };
          }
        }
        for (var i = 0; i < this.obstaclelist.length; i++) {
          var node = this.obstaclelist[i];
          var xradius = this.mapWidth / 2;
          var yradius = this.mapHeight / 2;
          if (pos.x <= node.x + xradius && pos.x >= node.x - xradius && pos.y <= node.y + yradius && pos.y >= node.y - yradius) {
            console.log("\u6709\u969c\u788d\u7269");
            return {
              active: false,
              type: 2
            };
          }
        }
        for (var i = 0; i < this.levelScript.pathNode.length; i++) {
          var node = this.levelScript.pathNode[i];
          var xradius = this.mapWidth / 2;
          var yradius = this.mapHeight / 2;
          if (pos.x <= node.x + xradius && pos.x >= node.x - xradius) if (pos.y > node.y) {
            if (pos.y <= node.y + this.mapHeight / 2 * 3 && pos.y >= node.y + this.mapHeight / 2 && i > 0) {
              console.log("\u653e\u7f6e\u70ae\u5854\u533a\u57df\u5185--\u4e0a");
              return {
                active: true,
                position: cc.v3(node.x, node.y + this.mapHeight)
              };
            }
          } else if (pos.y < node.y && pos.y >= node.y - this.mapHeight / 2 * 3 && pos.y <= node.y - this.mapHeight / 2) {
            console.log("\u653e\u7f6e\u70ae\u5854\u533a\u57df\u5185--\u4e0b");
            return {
              active: true,
              position: cc.v3(node.x, node.y - this.mapHeight)
            };
          }
          if (pos.y <= node.y + yradius && pos.y >= node.y - yradius) if (pos.x > node.x) {
            if (pos.x <= node.x + this.mapWidth / 2 * 3 && pos.x >= node.x + this.mapWidth / 2) {
              console.log("\u653e\u7f6e\u70ae\u5854\u533a\u57df\u5185--\u53f3");
              return {
                active: true,
                position: cc.v3(node.x + this.mapWidth, node.y)
              };
            }
          } else if (pos.x < node.x && pos.x >= node.x - this.mapWidth / 2 * 3 && pos.x <= node.x - this.mapWidth / 2) {
            console.log("\u653e\u7f6e\u70ae\u5854\u533a\u57df\u5185--\u5de6");
            return {
              active: true,
              position: cc.v3(node.x - this.mapWidth, node.y)
            };
          }
          if (i == this.levelScript.pathNode.length - 1) {
            console.log("\u7a7a\u5730\uff0c\u4e0d\u53ef\u653e\u7f6e\u70ae\u53f0");
            return {
              active: false,
              type: 1,
              pos: pos
            };
          }
        }
      };
      gameScene.prototype.showNull = function(pos) {
        if (this.GetGameObject("Pop_null").active) return;
        this.GetGameObject("Pop_null").position = pos;
        this.GetGameObject("Pop_null").active = true;
        this.GetGameObject("Pop_null").getComponent(Pop_null_1.default).show();
      };
      gameScene.prototype.guaiDie = function(res) {
        var _this = this;
        this.propOdds(res.node.position);
        cc.director.emit("deleteGuai", res);
        for (var i = this.enemylist.length - 1; i >= 0; --i) if (res.node == this.enemylist[i]) {
          this.enemylist.splice(i, 1);
          break;
        }
        this.coin_prefab_anim(res.node.position);
        this.enemyCount--;
        this.coin += res.money;
        this.rank += res.score;
        this.setCoinLabel();
        this.setScoreLabel();
        if (this.enemyCount < 1) {
          var callfunc = function() {
            if (_this.current_wave < _this.max_wave) {
              _this.current_wave++;
              _this.GetText("lab_num").string = _this.current_wave + ":" + _this.max_wave;
              _this.createwave();
            } else {
              MsgHints_1.default.show("\u901a\u5173\u6210\u529f");
              _this.showSuccess();
            }
          };
          this.scheduleOnce(callfunc, 1);
        }
        cc.director.emit("selectUp", this.coin);
      };
      gameScene.prototype.showSuccess = function() {
        window["platform"].getRes("success", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
        cc.sys.localStorage.setItem("gameData", JSON.stringify({
          level: this.level + 1
        }));
        var data = {
          gameScore: this.rank,
          gameWin: 1,
          gameGrade: this.select_blood()
        };
        true;
        Utils_1.default.showSuccess(data);
        window["platform"].submitGameScore(data);
      };
      gameScene.prototype.showFail = function() {
        window["platform"].getRes("fail", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
        var data = {
          gameScore: this.rank,
          gameWin: 0,
          gameGrade: this.select_blood()
        };
        true;
        Utils_1.default.showFail(data);
        window["platform"].submitGameScore(data);
      };
      gameScene.prototype.select_blood = function() {
        return this.homeBlood >= 9 ? 3 : this.homeBlood >= 6 ? 2 : this.homeBlood >= 3 ? 1 : 0;
      };
      gameScene.prototype.coin_prefab_anim = function(pos) {
        var node = cc.instantiate(this.coinPrefab);
        var position = cc.v2(this.GetGameObject("coin_bg").getPosition().x - 47, this.GetGameObject("coin_bg").getPosition().y);
        node.getComponent(coin_1.default).init(position);
        node.position = pos;
        node.parent = this.GetGameObject("node_prop");
      };
      gameScene.prototype.propOdds = function(pos) {
        var type = Utils_1.default.getRndInteger(1, 3);
        if (1 == type) {
          if (this.skill_frozen > 0) return;
          this.skill_frozen++;
        } else if (2 == type) {
          if (this.skill_shield > 0) return;
          this.skill_shield++;
        } else if (3 == type) {
          if (this.skill_addblood > 0) return;
          this.skill_addblood++;
        }
        var n = Utils_1.default.getRndInteger(0, 100);
        if (n <= this.dropPropOdds) {
          var node = cc.instantiate(this.propPrefab);
          node.getComponent(prop_1.default).init(type, pos.x);
          node.position = pos;
          node.parent = this.GetGameObject("node_prop");
        }
      };
      gameScene.prototype.setObstacle = function() {
        var l = [];
        for (var i = 0; i < this.levelScript.pathNode.length - 1; i++) {
          var pos = this.levelScript.pathNode[i].position;
          var top = new cc.Vec2(pos.x, pos.y + this.mapHeight);
          var footer = new cc.Vec2(pos.x, pos.y - this.mapHeight);
          var left = new cc.Vec2(pos.x - this.mapWidth, pos.y);
          var right = new cc.Vec2(pos.x + this.mapWidth, pos.y);
          var list = [ top, footer, left, right ];
          for (var a = 0; a < list.length; a++) {
            var msg = this.select_pos_in_path(list[a]);
            if (msg.active) {
              if (this.excludeLastPos(msg.position)) continue;
              l.push(msg.position);
            }
          }
        }
        var randlist = this.getRandomNum(0, l.length - 1, this.obstacle);
        for (var i = 0; i < randlist.length; i++) {
          var node = cc.instantiate(this.obstaclePrefab);
          node.getComponent(obstacle_1.default).init();
          node.parent = this.GetGameObject("node_obstacle");
          node.position = l[randlist[i]];
          this.obstaclelist.push(node);
        }
      };
      gameScene.prototype.excludeLastPos = function(pos) {
        if (1 != this.mapIndex) {
          var a = this.levelScript.pathNode[this.levelScript.pathNode.length - 1].position;
          var b = cc.v3(a.x, a.y + this.mapHeight, 0);
          return pos.equals(b);
        }
      };
      gameScene.prototype.setGiveTurret = function() {
        var l = [];
        for (var i = 0; i < this.levelScript.pathNode.length; i++) {
          var pos = this.levelScript.pathNode[i].position;
          var top = new cc.Vec2(pos.x, pos.y + this.mapHeight);
          var footer = new cc.Vec2(pos.x, pos.y - this.mapHeight);
          var left = new cc.Vec2(pos.x - this.mapWidth, pos.y);
          var right = new cc.Vec2(pos.x + this.mapWidth, pos.y);
          var list = [ top, footer, left, right ];
          for (var a = 0; a < list.length; a++) {
            var msg = this.select_pos_in_path(list[a]);
            if (msg.active) {
              if (this.excludeLastPos(msg.position)) continue;
              l.push(msg.position);
            }
          }
        }
        var obj = this.initGiveTurret();
        var forNum = Utils_1.default.getRndInteger(obj.min, obj.max);
        console.log("\u8d60\u9001\u70ae\u53f0\u4e2a\u6570:", forNum);
        for (var i = 0; i < forNum; i++) {
          var randNum = Utils_1.default.getRndInteger(1, 5);
          var pos = Utils_1.default.getRndInteger(0, l.length - 1);
          var node = cc.instantiate(this.turretPrefab);
          node.getComponent(item_turret_1.default).init(this.random_turret_name(randNum), this.enemylist, this.bulletPrefab, randNum);
          node.parent = this.GetGameObject("turretNode");
          node.position = l[pos];
          this.turretList.push(node);
        }
      };
      gameScene.prototype.random_turret_name = function(id) {
        switch (id) {
         case 1:
          return "turret/turret-sun";

         case 2:
          return "turret/turret-bottle";

         case 3:
          return "turret/turret-ice";

         case 4:
          return "turret/turret-magicball";

         case 5:
          return "turret/turret-leaf";
        }
      };
      gameScene.prototype.getRandomNum = function(min, max, maxCount) {
        var randoms = [];
        if (0 == maxCount) return [];
        while (true) {
          var isExists = false;
          var random = Utils_1.default.getRndInteger(min, max);
          for (var i = 0; i < randoms.length; i++) if (random === randoms[i]) {
            isExists = true;
            break;
          }
          isExists || randoms.push(random);
          if (randoms.length >= maxCount) return randoms;
        }
      };
      gameScene.prototype.frozen = function() {
        var _this = this;
        if (this.isFrozen) return;
        if (this.skill_frozen < 1) return MsgHints_1.default.show("\u65e0\u6280\u80fd\u6b21\u6570");
        window["platform"].getRes("tools", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
        this.isFrozen = true;
        this.skill_frozen = 0;
        this.node.pauseAllActions();
        this.GetGameObject("tools-ice").active = false;
        this.unschedule(this.call_sched_ice);
        for (var i = 0; i < this.enemylist.length; i++) this.enemylist[i].getComponent(item_monster_1.default).skill_frozen();
        this.scheduleOnce(function() {
          _this.node.resumeAllActions();
          _this.isFrozen = false;
        }, 3);
      };
      gameScene.prototype.shield = function() {
        if (this.skill_shield < 1) return MsgHints_1.default.show("\u65e0\u6280\u80fd\u6b21\u6570");
        window["platform"].getRes("tools", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
        this.GetGameObject("baohuzhao").active = true;
        this.unschedule(this.call_sched_shield);
        this.GetGameObject("tools-shield").active = false;
        this.skill_shield = 0;
        this.isShield = true;
      };
      gameScene.prototype.addblood = function() {
        if (this.skill_addblood < 1) return MsgHints_1.default.show("\u65e0\u6280\u80fd\u6b21\u6570");
        window["platform"].getRes("tools", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
        this.GetGameObject("addblood").active = true;
        this.GetGameObject("addblood").getComponent(cc.Animation).play();
        this.unschedule(this.call_sched_medicine);
        this.GetGameObject("tools-medicine").active = false;
        this.skill_addblood = 0;
        this.homeBlood++;
        this.GetText("lab_homeblood").string = this.homeBlood + "";
      };
      gameScene.prototype.initCoin = function() {
        this.level >= 1 && this.level <= 5 ? this.coin = 1e3 : this.level >= 6 && this.level <= 40 ? this.coin = 800 : this.level >= 41 && this.level <= 99 && (this.coin = 500);
        this.setCoinLabel();
      };
      gameScene.prototype.initGiveTurret = function() {
        if (this.level >= 1 && this.level <= 5) return {
          max: 0,
          min: 0
        };
        if (this.level >= 6 && this.level <= 20) return {
          max: 2,
          min: 1
        };
        if (this.level >= 21 && this.level <= 50) return {
          max: 2,
          min: 0
        };
        if (this.level >= 51 && this.level <= 80) return {
          max: 3,
          min: 1
        };
        if (this.level >= 81 && this.level <= 99) return {
          max: 3,
          min: 2
        };
      };
      gameScene.prototype.levelData = function() {
        if (1 == this.level) return {
          monsterCount: 10,
          waveCount: 3,
          bossCount: 0,
          mapMaxId: 1,
          mapMinId: 1,
          clearanceRate: 100
        };
        if (2 == this.level) return {
          monsterCount: 10,
          waveCount: 3,
          bossCount: 0,
          mapMaxId: 2,
          mapMinId: 2,
          clearanceRate: 100
        };
        if (this.level >= 3 && this.level <= 5) return {
          monsterCount: 20,
          waveCount: 4,
          bossCount: 1,
          mapMaxId: 3,
          mapMinId: 1,
          clearanceRate: 100
        };
        if (this.level >= 6 && this.level <= 10) return {
          monsterCount: 30,
          waveCount: 5,
          bossCount: 1,
          mapMaxId: 5,
          mapMinId: 1,
          clearanceRate: 90
        };
        if (this.level >= 11 && this.level <= 20) return {
          monsterCount: 40,
          waveCount: 6,
          bossCount: 2,
          mapMaxId: 6,
          mapMinId: 3,
          clearanceRate: 80
        };
        if (this.level >= 21 && this.level <= 30) return {
          monsterCount: 50,
          waveCount: 6,
          bossCount: 2,
          mapMaxId: 7,
          mapMinId: 3,
          clearanceRate: 70
        };
        if (this.level >= 31 && this.level <= 40) return {
          monsterCount: 50,
          waveCount: 7,
          bossCount: 3,
          mapMaxId: 8,
          mapMinId: 4,
          clearanceRate: 60
        };
        if (this.level >= 41 && this.level <= 50) return {
          monsterCount: 60,
          waveCount: 7,
          bossCount: 3,
          mapMaxId: 9,
          mapMinId: 1,
          clearanceRate: 50
        };
        if (this.level >= 51 && this.level <= 60) return {
          monsterCount: 60,
          waveCount: 8,
          bossCount: 4,
          mapMaxId: 9,
          mapMinId: 1,
          clearanceRate: 40
        };
        if (this.level >= 61 && this.level <= 70) return {
          monsterCount: 70,
          waveCount: 8,
          bossCount: 4,
          mapMaxId: 9,
          mapMinId: 1,
          clearanceRate: 30
        };
        if (this.level >= 71 && this.level <= 80) return {
          monsterCount: 70,
          waveCount: 9,
          bossCount: 5,
          mapMaxId: 9,
          mapMinId: 1,
          clearanceRate: 20
        };
        if (this.level >= 81 && this.level <= 90) return {
          monsterCount: 80,
          waveCount: 9,
          bossCount: 5,
          mapMaxId: 9,
          mapMinId: 1,
          clearanceRate: 10
        };
        if (this.level >= 91 && this.level <= 99) return {
          monsterCount: 80,
          waveCount: 9,
          bossCount: 6,
          mapMaxId: 9,
          mapMinId: 1,
          clearanceRate: 5
        };
      };
      gameScene = __decorate([ ccclass ], gameScene);
      return gameScene;
    }(BaseUI_1.default);
    exports.default = gameScene;
    cc._RF.pop();
  }, {
    "../Utils/AudioMgr": "AudioMgr",
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI",
    "../framwork/MsgHints": "MsgHints",
    "../item/coin": "coin",
    "../item/item_monster": "item_monster",
    "../item/item_turret": "item_turret",
    "../item/obstacle": "obstacle",
    "../item/prop": "prop",
    "../pop/Pop_level": "Pop_level",
    "../pop/Pop_null": "Pop_null",
    "../pop/Pop_shop": "Pop_shop"
  } ],
  item_monster: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "269ffJzIz1HG4gFwP17uA7B", "item_monster");
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
    var Utils_1 = require("../Utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var item_monster = function(_super) {
      __extends(item_monster, _super);
      function item_monster() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pathindex = 1;
        _this.path = [];
        _this.ismove = true;
        _this.isBoss = false;
        _this.sped = 0;
        _this.maxhp = 0;
        _this.hp = 0;
        _this.money = 0;
        _this.id = 0;
        _this.power = 0;
        _this.rank = 0;
        _this.maxsped = 0;
        _this.tweenTime = [];
        _this.score = 0;
        _this.rotList = [];
        return _this;
      }
      item_monster.prototype.init = function(data, rot) {
        this.rotList = rot;
        this.path = data.path;
        this.node.position = this.path[0];
        this.id = data.id;
        this.isBoss = data.isBoss;
        this.setImg(data.id);
        this.setHp(data.id);
        this.setMoney(data.id);
        this.setRank(data.id);
        this.setPower();
        this.GetGameObject("bing").active = false;
        if (data.bisi) {
          this.hp = 1e9;
          this.maxhp = 1e9;
        }
        this.GetGameObject("monsterhealth").getComponent(cc.Sprite).fillRange = Number(this.hp / this.maxhp);
        this.isBoss ? this.GetGameObject("img").scale = 1.2 : this.GetGameObject("img").scale = 1;
        1 == data.id || 2 == data.id ? this.onGuaiAnim_type1() : this.onGuaiAnim_type2();
        this.node.scaleX = "left" == this.rotList[this.pathindex - 1] ? -1 : 1;
      };
      item_monster.prototype.setHp = function(type) {
        if (1 === type || 2 === type) if (this.isBoss) {
          this.hp = 40;
          this.maxhp = 40;
          this.sped = 110;
          this.maxsped = 110;
        } else {
          this.hp = 5;
          this.maxhp = 5;
          this.sped = 160;
          this.maxsped = 160;
        } else if (3 === type || 4 === type) if (this.isBoss) {
          this.hp = 50;
          this.maxhp = 50;
          this.sped = 180;
          this.maxsped = 180;
        } else {
          this.hp = 5;
          this.maxhp = 5;
          this.sped = 200;
          this.maxsped = 200;
        } else if (5 === type || 6 === type) if (this.isBoss) {
          this.hp = 30;
          this.maxhp = 30;
          this.sped = 240;
          this.maxsped = 240;
        } else {
          this.hp = 3;
          this.maxhp = 3;
          this.sped = 280;
          this.maxsped = 280;
        }
      };
      item_monster.prototype.setPower = function() {
        this.isBoss ? this.power = 2 : this.power = 1;
      };
      item_monster.prototype.setMoney = function(type) {
        if (1 === type || 2 === type) if (this.isBoss) {
          this.money = 200;
          this.score = 40;
        } else {
          this.money = 80;
          this.score = 15;
        } else if (3 === type || 4 === type) if (this.isBoss) {
          this.money = 300;
          this.score = 50;
        } else {
          this.money = 100;
          this.score = 20;
        } else if (5 === type || 6 === type) if (this.isBoss) {
          this.money = 150;
          this.score = 30;
        } else {
          this.money = 50;
          this.score = 10;
        }
      };
      item_monster.prototype.setRank = function(type) {
        1 === type || 2 === type ? this.isBoss ? this.rank = 40 : this.rank = 5 : 3 === type || 4 === type ? this.isBoss ? this.rank = 50 : this.rank = 5 : 5 !== type && 6 !== type || (this.isBoss ? this.rank = 30 : this.rank = 3);
      };
      item_monster.prototype.onGuaiAnim_type1 = function() {
        this.tweenTime = [ .6, .6, .3 ];
        cc.tween(this.GetGameObject("img")).repeatForever(cc.tween().by(this.tweenTime[0], {
          scaleX: .1,
          scaleY: -.1
        }).by(this.tweenTime[1], {
          scaleX: -.2,
          scaleY: .2
        }).by(this.tweenTime[2], {
          scaleX: .1,
          scaleY: -.1
        })).start();
      };
      item_monster.prototype.onGuaiAnim_type2 = function() {
        var self = this;
        this.tweenTime = [ .3, .2, .2, .3, .1, .2 ];
        cc.tween(this.GetGameObject("img")).repeatForever(cc.tween().delay(.5).by(this.tweenTime[0], {
          scaleY: -.1,
          scaleX: .1
        }).by(this.tweenTime[1], {
          position: cc.v2(this.GetGameObject("img").x, 20),
          scaleY: .2,
          scaleX: -.2
        }).by(this.tweenTime[2], {
          position: cc.v2(this.GetGameObject("img").x, 20),
          scaleY: -.1,
          scaleX: .1
        }).by(this.tweenTime[3], {
          position: cc.v2(this.GetGameObject("img").x, -40),
          scaleY: .1,
          scaleX: -.1
        }).by(this.tweenTime[4], {
          scaleY: -.2,
          scaleX: .2
        }).by(this.tweenTime[5], {
          scaleY: .1,
          scaleX: -.1
        })).start();
      };
      item_monster.prototype.update = function(dt) {
        if (!this.ismove) return;
        if (!this.path[this.pathindex]) return;
        var d = this.path[this.pathindex].sub(this.node.position);
        if (d.mag() < this.sped * dt) {
          this.node.position = this.path[this.pathindex];
          this.pathindex++;
          this.node.scaleX = "left" == this.rotList[this.pathindex - 1] ? -1 : 1;
          if (this.pathindex >= this.path.length) {
            console.log("\u9003\u8fc7");
            cc.director.emit("reduce_blood", {
              reduce_blood: this.power,
              node: this.node
            });
            this.node.removeFromParent(true);
            this.node.destroy();
          }
        } else {
          var v = d.normalize().mul(this.sped / 3 * dt);
          this.node.position = this.node.position.add(v);
        }
      };
      item_monster.prototype.setImg = function(type) {
        Utils_1.default.setSpriteAssets(this.GetSprite("monsterhealth_bg"), "monster/monsterhealth_bg");
        Utils_1.default.setSpriteAssets(this.GetSprite("monsterhealth"), "monster/monsterhealth");
        Utils_1.default.setSpriteAssets(this.GetSprite("bing"), "turret/turret-ice-attackeffect");
        switch (type) {
         case 1:
          Utils_1.default.setSpriteAssets(this.GetSprite("img"), "monster/monster1");
          break;

         case 2:
          Utils_1.default.setSpriteAssets(this.GetSprite("img"), "monster/monster2");
          break;

         case 3:
          Utils_1.default.setSpriteAssets(this.GetSprite("img"), "monster/monster3");
          break;

         case 4:
          Utils_1.default.setSpriteAssets(this.GetSprite("img"), "monster/monster4");
          break;

         case 5:
          Utils_1.default.setSpriteAssets(this.GetSprite("img"), "monster/monster5");
          break;

         case 6:
          Utils_1.default.setSpriteAssets(this.GetSprite("img"), "monster/monster6");
        }
      };
      item_monster.prototype.hit = function(info) {
        if (this.hp <= 0) return;
        this.hp -= info["power"];
        this.hp = Math.max(this.hp, 0);
        3 == info.id && this.skill_jiansu();
        this.GetGameObject("monsterhealth").getComponent(cc.Sprite).fillRange = Number(this.hp / this.maxhp);
        if (this.hp <= 0) {
          cc.director.emit("guaiDie", {
            node: this.node,
            money: this.money,
            score: this.score
          });
          this.node.removeFromParent(true);
        }
      };
      item_monster.prototype.skill_frozen = function() {
        this.ismove = false;
        this.unschedule(this.skill_frozen_scha_Call);
        this.GetGameObject("img").pauseAllActions();
        this.GetGameObject("img").color = cc.color(84, 128, 255, 255);
        this.GetGameObject("bing").active = true;
        this.scheduleOnce(this.skill_frozen_scha_Call, 3);
      };
      item_monster.prototype.skill_frozen_scha_Call = function() {
        this.GetGameObject("img").resumeAllActions();
        this.GetGameObject("img").color = cc.color(255, 255, 255, 255);
        this.GetGameObject("bing").active = false;
        this.ismove = true;
      };
      item_monster.prototype.skill_jiansu = function() {
        this.unschedule(this.skill_jiansu_scha_Call);
        this.sped = this.maxsped / 2;
        this.GetGameObject("img").color = cc.color(84, 128, 255, 255);
        this.GetGameObject("bing").active = true;
        this.scheduleOnce(this.skill_jiansu_scha_Call, 3);
      };
      item_monster.prototype.skill_jiansu_scha_Call = function() {
        this.sped = this.maxsped;
        this.GetGameObject("img").color = cc.color(255, 255, 255, 255);
        this.GetGameObject("bing").active = false;
      };
      item_monster = __decorate([ ccclass ], item_monster);
      return item_monster;
    }(BaseUI_1.default);
    exports.default = item_monster;
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI"
  } ],
  item_turret: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bcb81Dq1pC6KwKXFaE3oyZ", "item_turret");
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
    var AudioMgr_1 = require("../Utils/AudioMgr");
    var Utils_1 = require("../Utils/Utils");
    var bullet_1 = require("./bullet");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var item_turret = function(_super) {
      __extends(item_turret, _super);
      function item_turret() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.level = 1;
        _this.id = 0;
        _this.power = 0;
        _this.cd = 1;
        _this.lastfire = 0;
        _this.guaiwuNode = null;
        return _this;
      }
      item_turret.prototype.init = function(src, list, pre, id) {
        this.id = id;
        this.enemylist = list;
        this.bullet_pre = pre;
        this.cd = 2 == id ? 1 : 2;
        Utils_1.default.setSpriteAssets(this.GetGameObject("icon").getComponent(cc.Sprite), src);
        Utils_1.default.setSpriteAssets(this.GetGameObject("upgrade").getComponent(cc.Sprite), "upgrade");
        this.level_node_size();
        this.set_level_power();
      };
      item_turret.prototype.level_node_size = function() {
        switch (this.level) {
         case 1:
          this.GetGameObject("icon").scale = .8;
          break;

         case 2:
          this.GetGameObject("icon").scale = 1;
          break;

         case 3:
          this.GetGameObject("icon").scale = 1.2;
        }
      };
      item_turret.prototype.set_level_power = function() {
        switch (this.id) {
         case 1:
          switch (this.level) {
           case 1:
            this.power = 3;
            break;

           case 2:
            this.power = 5;
            break;

           case 3:
            this.power = 7;
          }
          break;

         case 2:
          switch (this.level) {
           case 1:
            this.power = 1;
            break;

           case 2:
            this.power = 3;
            break;

           case 3:
            this.power = 4;
          }
          break;

         case 3:
          switch (this.level) {
           case 1:
            this.power = 2;
            break;

           case 2:
            this.power = 4;
            break;

           case 3:
            this.power = 5;
          }
          break;

         case 4:
          switch (this.level) {
           case 1:
            this.power = 3;
            break;

           case 2:
            this.power = 5;
            break;

           case 3:
            this.power = 7;
          }
          break;

         case 5:
          switch (this.level) {
           case 1:
            this.power = 3;
            break;

           case 2:
            this.power = 6;
            break;

           case 3:
            this.power = 9;
          }
        }
      };
      item_turret.prototype.getTarget = function() {
        var enemylist = this.enemylist;
        var target = null;
        var mindis = 231;
        var list = [];
        if (enemylist.length > 0) {
          if (this.guaiwuNode) {
            var dis = this.guaiwuNode.position.sub(this.node.position).mag();
            if (dis < mindis) return {
              node: this.guaiwuNode,
              list: list
            };
            for (var i = 0; i < enemylist.length; ++i) {
              if (enemylist[i].x < -cc.winSize.width / 2) continue;
              var dis_1 = enemylist[i].position.sub(this.node.position).mag();
              if (dis_1 < mindis) {
                target = enemylist[i];
                mindis = dis_1;
                this.guaiwuNode = enemylist[i];
                list.push(enemylist[i]);
                if (i == enemylist.length - 1 && !this.guaiwuNode) {
                  target = enemylist[enemylist.length - 1];
                  this.guaiwuNode = enemylist[enemylist.length - 1];
                }
              }
            }
            return {
              node: target,
              list: list
            };
          }
          for (var i = 0; i < enemylist.length; ++i) {
            if (enemylist[i].x < -cc.winSize.width / 2) continue;
            var dis = enemylist[i].position.sub(this.node.position).mag();
            if (dis < mindis) {
              target = enemylist[i];
              mindis = dis;
              this.guaiwuNode = enemylist[i];
              list.push(enemylist[i]);
              if (i == enemylist.length - 1 && !this.guaiwuNode) {
                target = enemylist[enemylist.length - 1];
                this.guaiwuNode = enemylist[enemylist.length - 1];
              }
            }
          }
          return {
            node: target,
            list: list
          };
        }
        return {
          node: null,
          list: list
        };
      };
      item_turret.prototype.update = function(dt) {
        var _this = this;
        this.lastfire += dt;
        var target = this.getTarget();
        var angle = this.getAngle(target.node);
        angle && (this.GetGameObject("icon").angle = angle);
        if (this.lastfire >= this.cd / 1) {
          this.lastfire = 0;
          target.node && this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
            if (4 == _this.id) for (var i = 0; i < _this.level; i++) _this.init_bullet(target.list[i]); else _this.init_bullet(target.node);
          })));
        }
      };
      item_turret.prototype.getAngle = function(event) {
        if (!event) return;
        var hbpos = Utils_1.default.convetOtherNodeSpaceAR(event, this.node);
        var from = hbpos;
        var to = this.GetGameObject("icon");
        var len_y = to.y - from.y;
        var len_x = to.x - from.x;
        if (0 == len_x && from.y < to.y) return -90;
        if (0 == len_x && from.y > to.y) return 0;
        if (0 == len_y && from.x > to.x) return 180;
        if (0 == len_y && from.x < to.x) return 0;
        var tan_yx = Math.abs(len_y) / Math.abs(len_x);
        var angle = 0;
        len_y > 0 && len_x < 0 ? angle = 180 * -Math.atan(tan_yx) / Math.PI - 90 : len_y > 0 && len_x > 0 ? angle = 180 * Math.atan(tan_yx) / Math.PI - 270 : len_y < 0 && len_x < 0 ? angle = 270 + 180 * Math.atan(tan_yx) / Math.PI : len_y < 0 && len_x > 0 && (angle = 90 - 180 * Math.atan(tan_yx) / Math.PI);
        return angle;
      };
      item_turret.prototype.init_bullet = function(node) {
        var b = cc.instantiate(this.bullet_pre);
        b.position = this.node.position;
        b.parent = cc.find("Canvas/node_bullet");
        b && b.isValid && b.getComponent(bullet_1.default).setInfo(node, this.power, this.id);
        window["platform"].getRes("shoot", "audio").then(function(msg) {
          AudioMgr_1.default.Instance().playSFX(msg);
        });
      };
      item_turret.prototype.deleteGuai = function(event) {
        var self = this;
        event["node"] == this.guaiwuNode && (this.guaiwuNode = null);
      };
      item_turret.prototype.price_turret = function() {
        switch (this.level) {
         case 1:
          if (1 == this.id) return 180;
          if (2 == this.id) return 100;
          if (3 == this.id) return 160;
          if (4 == this.id) return 180;
          if (5 == this.id) return 260;
          break;

         case 2:
          if (1 == this.id) return 260;
          if (2 == this.id) return 180;
          if (3 == this.id) return 260;
          if (4 == this.id) return 260;
          if (5 == this.id) return 320;
          break;

         case 3:
          if (1 == this.id) return 320;
          if (2 == this.id) return 260;
          if (3 == this.id) return 320;
          if (4 == this.id) return 320;
          if (5 == this.id) return 380;
        }
      };
      item_turret.prototype.onLoad = function() {
        cc.director.on("selectUp", this.selectUp, this);
        cc.director.on("deleteGuai", this.deleteGuai, this);
      };
      item_turret.prototype.onDestroy = function() {
        cc.director.off("selectUp", this.selectUp, this);
        cc.director.off("deleteGuai", this.deleteGuai, this);
      };
      item_turret.prototype.selectUp = function(coin) {
        if (this.level >= 3) return;
        if (this.GetGameObject("upgrade").active) return;
        this.GetGameObject("upgrade").stopAllActions();
        this.GetGameObject("upgrade").y = 58;
        cc.tween(this.GetGameObject("upgrade")).repeatForever(cc.tween().by(1, {
          y: 15
        }).by(1, {
          y: -15
        })).start();
        if (coin >= this.price_turret()) this.GetGameObject("upgrade").active = true; else {
          this.GetGameObject("upgrade").active = false;
          this.GetGameObject("upgrade").stopAllActions();
        }
      };
      item_turret.prototype.onClickUpLevel = function() {
        this.level++;
        this.level_node_size();
        this.set_level_power();
        this.GetGameObject("upgrade").active = false;
        cc.director.emit("uplevel", this.price_turret());
      };
      item_turret = __decorate([ ccclass ], item_turret);
      return item_turret;
    }(BaseUI_1.default);
    exports.default = item_turret;
    cc._RF.pop();
  }, {
    "../Utils/AudioMgr": "AudioMgr",
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI",
    "./bullet": "bullet"
  } ],
  list_optimize: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c63f5QgCgBF34Akkc7OPVmZ", "list_optimize");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var list_optimize = function(_super) {
      __extends(list_optimize, _super);
      function list_optimize() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.maxoffset = 0;
        return _this;
      }
      list_optimize.prototype.event_load = function() {
        if (!this.node.getComponent(cc.ScrollView)) {
          cc.error("\u4e0d\u5b58\u5728ScrollView\u7ec4\u4ef6\uff01");
          return;
        }
        this.node.on("scrolling", this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
      };
      list_optimize.prototype.offFunc = function() {
        this.node.off("scrolling", this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.off(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
        this.node.getComponent(cc.ScrollView).content.off(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
      };
      list_optimize.prototype.updateMaxOffset = function() {
        this.maxoffset = this.node.getComponent(cc.ScrollView).getMaxScrollOffset().y;
      };
      list_optimize.prototype._get_bounding_box_to_world = function(node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
      };
      list_optimize.prototype._check_collision = function(node_o_) {
        var rect1_o = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent);
        var rect2_o = this._get_bounding_box_to_world(node_o_);
        return rect1_o.intersects(rect2_o);
      };
      list_optimize.prototype._event_update_opacity = function(event) {
        var _this = this;
        this.node.getComponent(cc.ScrollView).content.children[1].children.forEach(function(v1_o) {
          v1_o.opacity = _this._check_collision(v1_o) ? 255 : 0;
        });
      };
      list_optimize = __decorate([ ccclass, menu("tool/list_optimize") ], list_optimize);
      return list_optimize;
    }(cc.Component);
    exports.default = list_optimize;
    cc._RF.pop();
  }, {} ],
  obstacle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90977yvuIpHkIWzxNJTHchF", "obstacle");
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
    var Utils_1 = require("../Utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var obstacle = function(_super) {
      __extends(obstacle, _super);
      function obstacle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      obstacle.prototype.init = function() {
        var num = Utils_1.default.getRndInteger(1, 100);
        num < 50 ? Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "stuff1") : Utils_1.default.setSpriteAssets(this.node.getComponent(cc.Sprite), "stuff2");
      };
      obstacle = __decorate([ ccclass ], obstacle);
      return obstacle;
    }(BaseUI_1.default);
    exports.default = obstacle;
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI"
  } ],
  prop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74de0tPUCdC6qYyfTRmJQ/c", "prop");
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
    var Utils_1 = require("../Utils/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var prop = function(_super) {
      __extends(prop, _super);
      function prop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.id = 0;
        _this.isMove = false;
        return _this;
      }
      prop.prototype.init = function(type, x) {
        var _this = this;
        var i = type;
        this.id = i;
        var name;
        1 == i ? name = "tools-ice" : 2 == i ? name = "tools-shield" : 3 == i && (name = "tools-medicine");
        var callfunc = function(res) {
          _this.isMove = true;
          _this.GetSprite("img").spriteFrame = res;
          var action = null;
          action = x >= cc.winSize.width / 2 - 150 ? cc.tween().by(.5, {
            x: -150
          }, {
            easing: "sineOut"
          }).by(.2, {
            x: 60
          }, {
            easing: "sineOut"
          }).repeatForever(cc.tween().by(.4, {
            x: -120
          }, {
            easing: "sineOut"
          }).by(.4, {
            x: 120
          }, {
            easing: "sineOut"
          })) : x <= -cc.winSize.width / 2 - 150 ? cc.tween().by(.5, {
            x: 150
          }, {
            easing: "sineOut"
          }).by(.2, {
            x: -60
          }, {
            easing: "sineOut"
          }).repeatForever(cc.tween().by(.4, {
            x: 120
          }, {
            easing: "sineOut"
          }).by(.4, {
            x: -120
          }, {
            easing: "sineOut"
          })) : cc.tween().repeatForever(cc.tween().by(.4, {
            x: 120
          }, {
            easing: "sineOut"
          }).by(.4, {
            x: -120
          }, {
            easing: "sineOut"
          }));
          cc.tween(_this.node).then(action).start();
        };
        Utils_1.default.getSpriteFrame(name, callfunc);
      };
      prop.prototype.update = function(dt) {
        var _this = this;
        if (!this.isMove) return;
        if (this.node.y <= -cc.winSize.height / 2 + 50) {
          this.node.stopAllActions();
          cc.tween(this.node).delay(4).to(.25, {
            opacity: 100
          }).to(.25, {
            opacity: 255
          }).to(.25, {
            opacity: 100
          }).to(.25, {
            opacity: 255
          }).call(function() {
            _this.clone();
          }).start();
          this.isMove = false;
          return;
        }
        this.node.y -= 2;
      };
      prop.prototype.click = function() {
        cc.director.emit("getProp", {
          id: this.id,
          node: this.node
        });
      };
      prop.prototype.move = function(pos) {
        this.node.removeComponent(cc.Button);
        this.clone();
      };
      prop.prototype.clone = function() {
        var _this = this;
        this.node.removeComponent(cc.Button);
        cc.tween(this.node).to(.2, {
          opacity: 0
        }, {
          easing: "sineIn"
        }).call(function() {
          _this.node.removeFromParent(true);
          _this.node.destroy();
        }).start();
      };
      prop = __decorate([ ccclass ], prop);
      return prop;
    }(BaseUI_1.default);
    exports.default = prop;
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils",
    "../framwork/BaseUI": "BaseUI"
  } ]
}, {}, [ "AudioMgr", "BigNumber", "HTTP", "LongTouchComponent", "NumberRoll", "Shake", "Utils", "list_optimize", "GameConst", "GameEvent", "BaseUI", "MsgHints", "User", "UserMsg", "bullet", "coin", "item_monster", "item_turret", "obstacle", "prop", "PoolMgr", "Singleton", "Pop_fail", "Pop_level", "Pop_null", "Pop_select", "Pop_shop", "Pop_success", "gameScene" ]);