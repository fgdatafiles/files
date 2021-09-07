var moreData = null;
var isRequesting = false;
var isMoreCancel = false;
function showMore(status) {
    return;
    if (isMoreCancel) {
        return;
    }
    if (moreData == null) {
        getMore(showMore, status);
        return;
    }
    var data = moreData;
    var width = $($("canvas")[0]).parent().width() - 40;
    var height = $($("canvas")[0]).parent().height() - 40;
    var item_list = [];
    var baseIconSize = 200;
    var iconSize = baseIconSize;

    function create_list() {
        if (item_list.length != 0) {
            return;
        }
        var arr = [];
        for (var i in data) {
            arr.push(data[i]);
        }
        //for (var i = 0; i < data.length - 1; i++) {
        //    for (var j in data[i]) {
        //        arr.push(data[i][j]);
        //    }
        //}
        item_list = arr;
        //for (var i = 0; i < data.length; i++) {
        //    var index = Math.floor(Math.random() * arr.length);
        //    var k = arr[index];
        //    arr.splice(index, 1);
        //    item_list.push(data[k]);
        //}
    }

    var contentStr = "";
    if (data.length != 0) {
        var count = 0;
        var cols = 0;
        var rows = 0;
        var gap = 20;
        create_list();
        var maxCols = Math.round((width + gap) / (baseIconSize + gap));
        var maxRows = Math.floor((height + gap) / (baseIconSize + gap));
        var trows = Math.floor(item_list.length / maxCols);
        if (trows < maxRows) {
            maxRows = trows;
        }
        if (maxCols < 2) {
            maxCols = 2;
        }
        if (maxCols > 3) {
            maxCols = 3;
        }
        if (maxRows < 2) {
            maxRows = 2;
        }
        if (maxRows > 3) {
            maxRows = 3;
        }
        maxCols = 2;
        maxRows = 2;
        count = maxCols * maxRows;
        iconSize = Math.floor(width / maxCols) - gap;
        if (iconSize > 150) {
            iconSize = 150;
        }
        height = maxRows * (iconSize + gap) - gap;
        var domain = document.referrer;
        domain = domain.split("/")[2];
        for (var i = 0; i < count; i++) {
            var item = item_list[i];
            var top = rows * (iconSize + gap);
            var left = cols * (iconSize + gap);
            var link = "javascript:window.top.location.href='//forestrygames.com/" + MGFramework.nameid + "';";
            var s = ('<div style="position:absolute;width:' + iconSize + "px;height:" + iconSize + "px;top:" + top + "px;left:" + left + 'px" class="thumb"><a href="' + link + '"><img style="width:' + iconSize + "px;height:" + iconSize + 'px;" src="' + item.thumb + '" alt="' + item.game_id + '"/></a></div>');
            contentStr += s;
            cols++;
            if (cols == maxCols) {
                cols = 0;
                rows++;
            }
        }
        CreateMoreDiv(width + 5, height + 5, contentStr);
    }
};
function getMore(callback, arg0) {
    return;
    if (isRequesting == true) {
        return;
    }
    isRequesting = true;
    $.ajax({
        type: "get",
        url: "//www.forestrygames.com/get_more/" + MGFramework.nameid,
        success: function (data) {
            moreData = data;
            if (callback) {
                callback(arg0);
            }
        },
        error: function () {
            isRequesting = false;
        }
    });
};
function CreateMoreDiv(width, height, Content) {
    $("#MoreDivInGame").remove();
    $("body").append("<div id='MoreDivInGame' style='display:block;background:rgba(0, 0, 0, 0);width:100%;height:100%;position:absolute;top:0;left:0;z-index: 999;text-align:center;' onclick='$(this).remove();'><div style='background: rgba(0,0,0,0);color:#000000;border-radius: 5px 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;z-index: 1000; margin:auto auto;padding-top:20px; width: " + width + "px;height:" + height + "px;text-align:center;position: relative;top: 50%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);transform: translateY(-50%);font-size:16px;line-height:16px;'>" + Content + "<div style='position:absolute;top:-0px;right:-0px;'><img src='//www.forestrygames.com/image/del.png'></div></div></div>");
};
function ShareToFacebook(NameID, Message) {
    return;
    var openURL = "//forestrygames.com" + NameID;
    var url = "https://www.facebook.com/dialog/feed?app_id=&display=popup&caption=" + Message + "&link=" + openURL + "&redirect_uri=" + openURL + "&picture=//forestrygames.com/" + NameID + ".jpg";
    window.open(url);
};
function ShareToWebsites(platform, name, nameid, msg) {
    switch (platform) {
        case"facebook":
            ShareToFacebook(nameid, msg);
            break;
        case"twitter":
            ShareToTwitter(nameid, msg);
            break;
    }
};
function ShareToTwitter(NameID, Message) {
    var openURL = "//www.forestrygames.com/games/" + NameID;
    var url = "//twitter.com/share?text=" + Message + "&url=//forestrygames.com/" + NameID;
    window.open(url);
};
function CreateLinksInGame(NameID, Screen, Button) {
    GameTag = typeof GameTag !== "undefined" ? GameTag : "home";
    var domain = document.referrer;
    var url = "//forestrygames.com/";
    if (typeof domain === "undefined" || domain == "" || domain == "undefined") {
        domain = "forestrygames.com";
    } else {
        domain = domain.split("/")[2];
    }
    if (Button == "gg" || Button == "ios") {
        return;
        url = url + "app.php?type=" + Button + "&nameid=" + NameID;
    }
    if (url.indexOf("?") > -1) {
        url = url + "&";
    } else {
        url = url + "?";
    }
    url = url + "utm_source=" + domain + "&utm_medium=" + Screen + "-" + Button + "&utm_campaign=game-" + NameID;
    window.open(url);
};
function OnGameStart(NameID, Times) {
    try {
        $("#MoreDivInGame").remove();
    } catch (e) {

    }
    if (isRequesting) {
        isMoreCancel = true;
    }
    console.log("call OnGameStart forestrygames.com, nameid: " + NameID + ", Times: " + Times);
};
function OnGamePause(NameID, Times) {
    console.log("call OnGamePause forestrygames.com, nameid: " + NameID + ", Times: " + Times);
};
function OnGameLevelWin(NameID, Times) {
    var showSite = true;
    var hostname = window.location.hostname;
    var hosts = "forestrygames.com";
    hosts = hosts.toLocaleLowerCase();
    var arr = hosts.split(",");
    for (var i = 0; i < arr.length; i++) {
        var nodeHost = arr[i].trim();
        if (hostname.search(nodeHost + "$") != -1) {
            showSite = false;
        }
    }
    if (showSite == false) {
        return;
    }
    isMoreCancel = false;
    showMore("win");
    console.log("call OnGameLevelWin forestrygames.com, nameid: " + NameID);
};
function OnGameLevelFail(NameID) {
    var showSite = true;
    var hostname = window.location.hostname;
    var hosts = "forestrygames.com";
    hosts = hosts.toLocaleLowerCase();
    var arr = hosts.split(",");
    for (var i = 0; i < arr.length; i++) {
        var nodeHost = arr[i].trim();
        if (hostname.search(nodeHost + "$") != -1) {
            showSite = false;
        }
    }
    if (showSite == false) {
        return;
    }
    isMoreCancel = false;
    showMore("lose");
    console.log("call OnGameLevelFail forestrygames.com, nameid: " + NameID);
};
function GetLanguageInGame(nameid) {
    return GamesLanguage.en[nameid];
};
function CreateToolTipDiv(width, height, Content) {
    $("#ToolTipDivInGame").remove();
    $("body").append("<div id='ToolTipDivInGame' style='display:block;background:rgba(0,0,0,0.3);width:100%;height:100%;position:absolute;top:0;left:0;filter:alpha(opacity=90);-moz-opacity: 0.90;opacity: 0.90;z-index: 999;text-align:center;' onclick='$(this).remove();'><div style='background: #FFFFAA;color:#000; border: 1px solid #FF3334;border-radius: 5px 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1); -webkit-box-shadow: 5px 5px rgba(0, 0, 0, 0.1); -moz-box-shadow: 5px 5px rgba(0, 0, 0, 0.1);font-family: Calibri, Tahoma, Geneva, sans-serif; z-index: 1000; margin:auto auto;padding-top:20px; width: " + width + "px;height:" + height + "px;text-align:center;position: relative;top: 50%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);transform: translateY(-50%);font-size:16px;line-height:16px;'>" + Content + "<div style='position:absolute;top:-0px;right:-0px;'><img src='//www.forestrygames.com/image/del.png'></div></div></div>");
};
function submitToFacebook(CanvasID, Message, NameID, callback_success, callback_failed) {
    Message = "Play The Game: //forestrygames.com/" + NameID;
    $.ajaxSetup({cache: true});
    if (typeof(FB) != "undefined") {
        FBOperation(CanvasID, Message, callback_success, callback_failed);
    } else {
        $.getScript("//connect.facebook.com/en_US/sdk.js", function () {
            FBOperation(CanvasID, Message, callback_success, callback_failed);
        });
    }
    CreateToolTipDiv(200, 60, "Sharing to Facebook... Be Patient Please");
};
function FBOperation(CanvasID, Message, callback_success, callback_failed) {
    FB.init({
        appId: "#",
        version: "v2.0",
        cookie: true,
        xfbml: true,
        frictionlessRequests: true,
        oauth: true
    });
    FB.login(function (response) {
        if (response.authResponse) {
            window.authToken = response.authResponse.accessToken;
            PostImageToFacebook(window.authToken, CanvasID, Message, callback_success, callback_failed);
        } else {
            callback_failed();
            CreateToolTipDiv(220, 40, "Shared Failed, Please Try Again.");
        }
    }, {scope: "publish_actions,publish_stream"});
};
function PostImageToFacebook(authToken, CanvasID, Message, callback_success, callback_failed) {
    if (Message == "" || typeof(Message) == "undefined") {
        Message = "";
    }
    var canvas = document.getElementById(CanvasID);
    var imageData = canvas.toDataURL("image/png");
    try {
        blob = dataURItoBlob(imageData);
    } catch (e) {
    }
    var fd = new FormData();
    fd.append("access_token", authToken);
    fd.append("source", blob);
    fd.append("message", Message);
    try {
        $.ajax({
            url: "https://graph.facebook.com/v2.0/me/photos?access_token=" + authToken,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            cache: false,
            success: function (data) {
                callback_success();
                CreateToolTipDiv(220, 40, "Shared Successfully, thank you!");
            },
            error: function (shr, status, data) {
                callback_failed();
                CreateToolTipDiv(220, 40, "Shared Failed, Please Try Again.");
            },
            complete: function () {
            }
        });
    } catch (e) {
    }
};
function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(",")[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: "image/png"});
};

/**
 * Created by qixiaowei on 2015/4/23.
 * [2.0.2]
 * 完成：
 *  1.OpenEmail
 *  2.OpenWebsite
 *
 * [2.0.3]
 * 1.增加截屏开关HasScreenshot
 *
 * [2.0.4]
 * 去掉language初始值，解决打包时包错问题
 *
 * [2.0.5]
 * 增加MGEvent.DOWNLOAD_APP
 * 删除MGEvent.CLICK_APPSTORE
 * 删除MGEvent.CLICK_GOOGLEPLAY
 *
 * [2.0.6]
 * 解决微信、UC浏览器中Loading条显示不正常的问题
 *
 * [2.0.7]
 * 统一cocos2d-js egret全用统一的MGFramework
 */

var MGEvent = (function () {
    function MGEvent(type) {
        /**
         * 事件传递的参数
         * @type {null}
         */
        this.data = null;
        this.type = type;
    }

    var __egretProto__ = MGEvent.prototype;
    //----游戏内事件
    MGEvent.LOAD_START = "LOAD_START";
    MGEvent.LOAD_PROGRESS = "LOAD_PROGRESS";
    MGEvent.LOAD_COMPLETE = "LOAD_COMPLETE";
    MGEvent.LOAD_ERROR = "LOAD_ERROR";
    MGEvent.START_GAME = "START_GAME";
    MGEvent.PAUSE_GAME = "PAUSE_GAME";
    MGEvent.WIN_GAME = "WIN_GAME";
    MGEvent.LOSE_GAME = "LOSE_GAME";
    MGEvent.ENTER_GAME = "ENTER_GAME";
    MGEvent.ADDED_TO_STAGE = "ADDED_TO_STAGE";
    MGEvent.FRAMEWORK_INFO_REQUEST = "FRAMEWORK_INFO_REQUEST";
    MGEvent.FRAMEWORK_INFO_RESPONSE = "FRAMEWORK_INFO_RESPONSE";
    MGEvent.CLICK_MORE = "CLICK_MORE";
    MGEvent.CLICK_MINILOGO = "CLICK_MINILOGO";
    MGEvent.OPEN_URL = "OPEN_URL";
    MGEvent.OPEN_EMAIL = "OPEN_EMAIL";
    MGEvent.SHARE = "SHARE";
    MGEvent.CLICK_CREDITS = "CLICK_CREDITS";
    MGEvent.SHOW_WIN = "SHOW_WIN";
    MGEvent.SHOW_LOSE = "SHOW_LOSE";
    MGEvent.SCREENSHOT = "SCREENSHOT";
    MGEvent.DOWNLOAD_APP = "DOWNLOAD_APP";
    MGEvent.LEVEL_FAIL = "LEVEL_FAIL";
    MGEvent.LEVEL_WIN = "LEVEL_WIN";
    MGEvent.CONTINUE_GAME = "CONTINUE_GAME";
    MGEvent.CHANGE_SCENE = "CHANGE_SCENE";
    MGEvent.FULLSCREEN = "FULLSCREEN";
    return MGEvent;
})();
MGEvent.prototype.__class__ = "MGEvent";
/**
 * Created by qixiaowei on 2015/4/23.
 * 代理类，全用全局事件模型处理。
 * 用于App、浏览器间通信，通用于egret\cocos\createjs
 */
var MGDelegate = (function () {
    function MGDelegate() {
    }

    var __egretProto__ = MGDelegate.prototype;
    MGDelegate.getListenerIndex = function (type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            return -1;
        }
        for (var i = 0; i < MGDelegate._eventMap[type].length; i++) {
            var itm = MGDelegate._eventMap[type][i];
            if (itm[0] == listener && itm[1] == thisObject) {
                return i;
            }
        }
        return -1;
    };
    MGDelegate.addEventListener = function (type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            MGDelegate._eventMap[type] = [];
        }
        if (MGDelegate.getListenerIndex(type, listener, thisObject) == -1) {
            MGDelegate._eventMap[type].push([listener, thisObject]);
        }
    };
    MGDelegate.removeEventListener = function (type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            return;
        }
        var index = MGDelegate.getListenerIndex(type, listener, thisObject);
        if (index != -1) {
            MGDelegate._eventMap[type].splice(index, 1);
        }
        if (MGDelegate._eventMap[type].length == 0) {
            delete MGDelegate._eventMap[type];
        }
    };
    MGDelegate.dispatcherEvent = function (event) {
        var type = event["type"];
        if (!MGDelegate._eventMap[type]) {
            return;
        }
        var jobs = MGDelegate._eventMap[type];
        for (var i = 0; i < jobs.length; i++) {
            var itm = jobs[i];
            var func = itm[0];
            var thisObj = itm[1];
            func.call(thisObj, event);
        }
    };
    //-----------
    MGDelegate._eventMap = {};
    return MGDelegate;
})();
MGDelegate.prototype.__class__ = "MGDelegate";
/**
 * Created by qixiaowei on 2015/4/23.
 * 外部全用类，用于浏览器
 */
var $;
var MGFramework = MGFramework || (function () {
        function MGFramework(hosts) {
            //-----对象变量
            this.restartCount = 0;
            this.creditsUrl = "//forestrygames.com";
            //TODO =================以下内容可替换=================
            this.style = '#_root{position:fixed;left:0;top:0;width:100%;height:100%;z-index:1000}#_bgDiv{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#00000;}#_bgImg{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}#_loadingRoot{position:absolute;left:0;top:0;width:100%;height:100%}#_logoContainer{position:absolute;top:50%;left:50%}#_logoImg{position:relative;opacity:0}#_playContainer{position:absolute;top:75%;left:50%;opacity:0;display:none}#_progressContainer{position:absolute;width:70%;height:20px;max-width:300px;top:75%;left:50%;display:none}#_progressBg{position:relative;border-color:#110219;border-style:solid;background-color:#220c2d;width:100%;height:100%;border-radius:20px;padding:2px;margin-left:-50%;box-shadow:0 5px 15px#110219}#_progressBar{background-color:#871549;background:linear-gradient(#871549,#871549,#f96dd9,#871549,#871549);border-radius:10px;width:10%;height:100%;box-shadow:inset 10px 0 10px#871549,inset 10px 0 10px#871549}.scaleImg1{transform:scale(0.95,0.95);transition-duration:1s;transition-timing-function:linear}.scaleImg2{transform:scale(1,1);transition-duration:1s;transition-timing-function:linear}';
            this.logoUrl = "logo.png";
            this.playUrl = "play.png";
            this.bgUrl = "bg.png";
            this.miniLogoUrl = "mini_logo.png";
            MGFramework.instance = this;
            hosts = "localhost,127.0.0.1,forestrygames.com," + hosts;
            hosts = hosts.toLocaleLowerCase();
            //--域名合法性检测
            var hostname = window.location.hostname;
            var arr = hosts.split(",");
            for (var i = 0; i < arr.length; i++) {
                var nodeHost = arr[i].trim();
                if (hostname.search(nodeHost + "$") != -1) {
                    return;
                }
            }
            window.location.href = this.creditsUrl;
        }

        var __egretProto__ = MGFramework.prototype;
        __egretProto__.onClickMiniLogo = function (event) {
            MGFramework.ClickMiniLogo();
        };
        __egretProto__.onScreenshotHandler = function (event) {
            //调用截屏接口
            console.log("submitToFacebook(" + MGFramework.nameid + "," + this.restartCount + ")");
            try {
                var func = eval("submitToFacebook");
                if (func) {
                    func.call(this, "screenshootCanvas", event.data["msg"], MGFramework.nameid, event.data["success"], event.data["faild"]);
                }
            }
            catch (e) {
                console.log('Can not found function [submitToFacebook].');
            }
        };
        __egretProto__.onShareHandler = function (event) {
            var platform = event.data["platform"];
            var msg = event.data["msg"];
            var gamename = event.data["gamename"];
            var nameid = event.data["nameid"];
            try {
                var func = eval("ShareToWebsites");
                if (func) {
                    func.call(this, platform, gamename, nameid, msg);
                }
                else {
                    console.log('Can not found share-function [' + platform + '].');
                }
            }
            catch (e) {
                console.warn('Call share-function [' + platform + '] Error');
            }
        };
        __egretProto__.onGameStartHandler = function (event) {
            this.restartCount++;
            //开始游戏
            console.log("OnGameStart(" + MGFramework.nameid + "," + this.restartCount + ")");
            try {
                var func = eval("OnGameStart");
                if (func) {
                    func.call(this, MGFramework.nameid, this.restartCount);
                }
            }
            catch (e) {
                console.log('Can not found function [OnGameStart].');
            }
        };
        __egretProto__.onGamePauseHandler = function (event) {
            //暂停游戏
            console.log("OnGamePause(" + MGFramework.nameid + "," + this.restartCount + ")");
            try {
                var func = eval("OnGamePause");
                if (func) {
                    func.call(this, MGFramework.nameid, this.restartCount);
                }
            }
            catch (e) {
                console.log('Can not found function [OnGamePause].');
            }
        };
        __egretProto__.onFrameworkInfoRequest = function (event) {
            var evt = new MGEvent(MGEvent.FRAMEWORK_INFO_RESPONSE);
            evt.data = {
                "debug": MGFramework.debug,
                "gamename": MGFramework.gamename,
                "nameid": MGFramework.nameid,
                "miniLogoUrl": this.miniLogoUrl,
                "showmsgs": MGFramework.showmsgs,
                "sharemsgs": MGFramework.sharemsgs,
                "language": MGFramework.language,
                "HasScreenshot": MGFramework.HasScreenshot,
                "showMoreGamesButton": true,
            };
            MGDelegate.dispatcherEvent(evt);
        };
        __egretProto__.onClickMoreHandler = function (event) {
            MGFramework.ClickMore();
        };
        /**
         * 进入游戏
         */
        __egretProto__.enterGame = function () {
            window.removeEventListener("resize", this.doResize);
            $("#_root")[0].onclick = null;
            $("#_root").remove();
            MGDelegate.dispatcherEvent(new MGEvent(MGEvent.ENTER_GAME));
        };
        /**
         * 显示play按钮
         */
        __egretProto__.showPlay = function () {
            $("#_logoContainer").animate({
                top: "40%"
            }, 1000, function () {
                MGFramework.instance.zoomOut("#_playImg");
            });
            $("#_playContainer")[0].style.display = "inline";
            $("#_playContainer").animate({
                opacity: 1,
                top: "75%"
            }, 1000);
            $("canvas").css("opacity", 1);
        };
        /**
         * 隐藏play按钮
         */
        __egretProto__.hidePlay = function () {
            $("#_playContainer").animate({
                opacity: 0,
                top: "70%"
            }, 1000, function () {
                if ($("#_playContainer")[0]) {
                    $("#_playContainer")[0].style.display = "none";
                }
            });
        };
        /**
         * 点击play
         */
        __egretProto__.clickPlay = function () {
            $("#_playContainer")[0].onclick = null;
            $("#_logoContainer")[0].onclick = null;
            MGFramework.instance.zoomOut("#_logoImg");
            MGFramework.instance.hidePlay();
            $("#_logoContainer")[0].onclick = null;
            setTimeout(function () {
                $("#_root")[0].onclick = function () {
                    MGFramework.ClickLoadingSplash();
                };
            }, 30);
            setTimeout(function () {
                $("#_root")[0].onclick = null;
                MGFramework.instance.enterGame();
            }, MGFramework.debug ? 50 : 5000);
        };
        /**
         * 缩小图片
         * @param id
         */
        __egretProto__.zoomOut = function (id) {
            var thisObj = this;
            if ($(id).hasClass("scaleImg2")) {
                $(id).removeClass("scaleImg2");
            }
            $(id).addClass("scaleImg1");
            setTimeout(function () {
                MGFramework.instance.zoomIn(id);
            }, 1000);
        };
        /**
         * 放大图片
         * @param id
         */
        __egretProto__.zoomIn = function (id) {
            //图片还原100%尺寸
            if ($(id).hasClass("scaleImg1")) {
                $(id).removeClass("scaleImg1");
            }
            $(id).addClass("scaleImg2");
            setTimeout(function () {
                MGFramework.instance.zoomOut(id);
            }, 1000);
        };
        __egretProto__.onLoadProgressHandler = function (evt) {
            MGFramework.instance.setProgress(evt.data["percent"]);
        };
        /**
         * 设置进度
         * @param per
         */
        __egretProto__.setProgress = function (per) {
            per = per < 10 ? 10 : per > 100 ? 100 : per;
            $("#_progressBar")[0].style.width = per + "%";
        };
        /**
         * 加载完成
         */
        __egretProto__.onLoadCompleteHandler = function (event) {
            MGDelegate.removeEventListener(MGEvent.LOAD_START, MGFramework.instance.onLoadStartHandler, MGFramework.instance);
            MGDelegate.removeEventListener(MGEvent.LOAD_PROGRESS, MGFramework.instance.onLoadProgressHandler, MGFramework.instance);
            MGDelegate.removeEventListener(MGEvent.LOAD_COMPLETE, MGFramework.instance.onLoadCompleteHandler, MGFramework.instance);
            MGDelegate.removeEventListener(MGEvent.LOAD_ERROR, MGFramework.instance.onLoadErrorHandler, MGFramework.instance);
            $("#_progressContainer").animate({
                opacity: 0
            }, 1000, MGFramework.instance.showPlay);
        };
        __egretProto__.onLoadErrorHandler = function (event) {
            //TODO 加载出错
        };
        __egretProto__.onAddedToStageHandler = function (event) {
            //TODO 游戏添加到舞台
        };
        __egretProto__.onLoadStartHandler = function (event) {
            //TODO 加载开始
        };
        __egretProto__.onShowWinHandler = function (event) {
            //胜利
            console.log("OnGameLevelWin(" + MGFramework.nameid + ")");
            try {
                var func = eval("OnGameLevelWin");
                if (func) {
                    func.call(this, MGFramework.nameid);
                }
            }
            catch (e) {
                console.log('Can not found function [OnGameLevelWin].');
            }
        };
        __egretProto__.onShowLoseHandler = function (event) {
            //失败
            console.log("OnGameLevelFail(" + MGFramework.nameid + ")");
            try {
                var func = eval("OnGameLevelFail");
                if (func) {
                    func.call(this, MGFramework.nameid);
                }
            }
            catch (e) {
                console.log('Can not found function [OnGameLevelFail].');
            }
        };
        __egretProto__.onOpenUrlHandler = function (event) {
            //打开网址
            MGFramework.OpenWebsite(event.data["url"], event.data["target"]);
        };
        __egretProto__.onOpenEmailHandler = function (event) {
            //打开Email
            MGFramework.OpenWebsite("mailto:" + event.data["email"], "_self");
        };
        __egretProto__.onDownloadAppHandler = function (event) {
            MGFramework.SendAnaly(MGFramework.nameid, MGFramework.state, event.data["platform"]);
        };
        __egretProto__.onClickCreditsHandler = function (event) {
            //TODO 点击credits按钮
        };
        /**
         * TODO 启动
         * @param gamename
         * @param gameid
         */
        __egretProto__.startup = function (gamename, gameid, debug) {
            this.init(gamename, gameid, debug);
            var support = [].map && document.createElement("canvas").getContext;
            if (support) {
                var isCocos = false;
                try {
                    eval("cc");
                    isCocos = true;
                } catch (e) {

                }
                if (isCocos) {
                    eval("cc").game.run();
                } else {
                    if (MGFramework.debug) {
                        //用于Debug模式，release模式会出错
                        eval("egret_h5").preloadScript(eval("egret_file_list"), "libs/");
                        eval("egret_h5").preloadScript(eval("game_file_list"), "bin-debug/src/");
                        eval("egret_h5").startLoading();
                    }
                    else {
                        eval("egret_h5").startGame();
                    }
                }
            }
            else {
                alert("Please change your browser to play the game.");
            }
        };
        __egretProto__.doResize = function (event) {
            var dw = $(window).width();
            var dh = $(window).height();
            var landscape = false;
            var scale = 1;
            if (dh < dw) {
                landscape = true;
            }
            if (landscape) {
                scale = dh / 480;
            }
            else {
                scale = dw / 480;
            }
            if (scale > 1) {
                scale = 1;
            }
            $("#_loadingRoot")[0].style.zoom = scale;
        };
        /**
         * 初始化图片
         * @param logoImg
         * @param playImg
         * @param bgImg
         */
        __egretProto__.init = function (gamename, nameid, debug) {
            MGFramework.gamename = gamename;
            MGFramework.nameid = nameid;
            MGFramework.debug = debug ? true : false;
            var styleElement = document.createElement("style");
            document.body.appendChild(styleElement);
            styleElement.innerHTML = this.style;
            var rootNode = document.createElement("div");
            rootNode.id = "_root";
            rootNode.innerHTML = '<div id="_loadingRoot"><div id="_bgDiv"><img id="_bgImg"/></div><div id="_logoContainer"><img id="_logoImg"/></div><div id="_progressContainer"><div id="_progressBg"><div id="_progressBar"></div></div></div><div id="_playContainer"><img id="_playImg"/></div></div>';
            document.body.appendChild(rootNode);
            //----------------初始化资源
            $("#_logoImg")[0].src = this.logoUrl;
            $("#_playImg")[0].src = this.playUrl;
            //$("#_bgImg")[0].src = this.bgUrl;
            this.miniLogoUrl = this.miniLogoUrl;
            /**
             * 点击Play按钮
             */
            $("#_playContainer")[0].onclick = function () {
                if ($("#_playContainer").opacity < 1) {
                    return;
                }
                MGFramework.instance.clickPlay();
            };
            /**
             * loading时，点击logo
             */
            $("#_logoContainer")[0].onclick = function () {
                MGFramework.ClickLoadingLogo();
            };
            /**
             * 批量给img标签加onload，_bgImg除外
             */
            $("#_root img").each(function (index, element) {
                element["onload"] = function (e) {
                    var img = e.currentTarget;
                    if (img.id != "_bgImg") {
                        img.style['margin-left'] = -img.width / 2 + "px";
                        img.style['margin-top'] = -img.height / 2 + "px";
                    }
                    img.style.display = "inline";
                    if (img.id == "_logoImg") {
                        $(img).animate({opacity: 1}, 300);
                        $("#_progressContainer")[0].style.display = "inline";
                    }
                    if (img.id == "_bgImg") {
                        img.style.opacity = 1;
                        //$(img).animate({opacity: 1}, 500);
                    }
                };
            });
            window.addEventListener("resize", this.doResize);
            this.doResize(null);
            //----事件
            MGDelegate.addEventListener(MGEvent.LOAD_START, this.onLoadStartHandler, this);
            MGDelegate.addEventListener(MGEvent.LOAD_PROGRESS, this.onLoadProgressHandler, this);
            MGDelegate.addEventListener(MGEvent.LOAD_COMPLETE, this.onLoadCompleteHandler, this);
            MGDelegate.addEventListener(MGEvent.LOAD_ERROR, this.onLoadErrorHandler, this);
            MGDelegate.addEventListener(MGEvent.START_GAME, this.onGameStartHandler, this);
            MGDelegate.addEventListener(MGEvent.PAUSE_GAME, this.onGamePauseHandler, this);
            MGDelegate.addEventListener(MGEvent.SHOW_WIN, this.onShowWinHandler, this);
            MGDelegate.addEventListener(MGEvent.SHOW_LOSE, this.onShowLoseHandler, this);
            MGDelegate.addEventListener(MGEvent.ADDED_TO_STAGE, this.onAddedToStageHandler, this);
            MGDelegate.addEventListener(MGEvent.FRAMEWORK_INFO_REQUEST, this.onFrameworkInfoRequest, this);
            MGDelegate.addEventListener(MGEvent.CLICK_MORE, this.onClickMoreHandler, this);
            MGDelegate.addEventListener(MGEvent.CLICK_MINILOGO, this.onClickMiniLogo, this);
            MGDelegate.addEventListener(MGEvent.OPEN_URL, this.onOpenUrlHandler, this);
            MGDelegate.addEventListener(MGEvent.OPEN_EMAIL, this.onOpenEmailHandler, this);
            MGDelegate.addEventListener(MGEvent.SHARE, this.onShareHandler, this);
            MGDelegate.addEventListener(MGEvent.DOWNLOAD_APP, this.onDownloadAppHandler, this);
            MGDelegate.addEventListener(MGEvent.CLICK_CREDITS, this.onClickCreditsHandler, this);
            MGDelegate.addEventListener(MGEvent.SCREENSHOT, this.onScreenshotHandler, this);
        };
        //----------静态方法
        /**
         * 发送统计
         * @param nameid
         * @param p2
         * @param p3
         * @constructor
         */
        MGFramework.SendAnaly = function (nameid, p2, p3) {
            console.log("SendAnaly(" + nameid + "," + p2 + "," + p3 + ")");
            try {
                var func = eval("CreateLinksInGame");
                if (func) {
                    func.call(this, nameid, p2, p3);
                }
            }
            catch (e) {
                console.log('Can not found function [CreateLinksInGame].');
            }
        };
        /**
         * 点击loading状态时的LOGO
         */
        MGFramework.ClickLoadingLogo = function () {
            MGFramework.SendAnaly(MGFramework.nameid, "loading", "logo");
        };
        /**
         * 点击加载完成时所有场景
         * @constructor
         */
        MGFramework.ClickLoadingSplash = function () {
            MGFramework.SendAnaly(MGFramework.nameid, "splash", "logo");
        };
        /**
         * 点击MiniLOGO
         */
        MGFramework.ClickMiniLogo = function () {
            MGFramework.SendAnaly(MGFramework.nameid, MGFramework.state, "logo");
        };
        /**
         * 点击更多
         */
        MGFramework.ClickMore = function () {
            MGFramework.SendAnaly(MGFramework.nameid, MGFramework.state, "moregamesbtn");
        };
        /**
         * 打开网址
         * @param url
         * @param target
         * @constructor
         */
        MGFramework.OpenWebsite = function (url, target) {
            if (!arguments[0])
                url = "//www.forestrygames.com";
            if (!arguments[1])
                target = "_blank";
            window.open(url, "_blank");
        };
        //-----静态变量
        MGFramework.debug = false;
        MGFramework.version = "2.0.5";
        MGFramework.sharemsgs = {};
        MGFramework.showmsgs = {"zh-CN": "", "en-US": ""};
        MGFramework.language = "en-US";
        MGFramework.PREGAME = "pregame";
        MGFramework.INGAME = "ingame";
        MGFramework.state = MGFramework.PREGAME;
        MGFramework.HasScreenshot = true;
        /**
         * 游戏nameid
         * @type {string}
         */
        MGFramework.nameid = "-1";
        /**
         * 游戏名称
         * @type {string}
         */
        MGFramework.gamename = "-1";
        return MGFramework;
    })();
MGFramework.prototype.__class__ = "MGFramework";
MGFramework.instance = new MGFramework();
var MGF = MGFramework;

$(document).ready(function () {
    $(document.body).append("<style>.thumb{margin:5px;text-align:center;width:100em;height:100em;position:relative;border-radius:10px;}.thumb a img{border:5px solid#F2F6F8;width:100%;height:100%;border-radius:10px;}.thumb a{color:#f5f500;text-decoration:none;}</style>");
    getMore();
});