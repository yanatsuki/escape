//
//  拡張制御文字 ver1.00
//
// author yana
//

var Imported = Imported || {};
Imported['yExtendEscapeCharacters'] = 1.00;

/*:
 * @plugindesc ver1.00/制御文字を拡張します。
 * @author Yana
 *
 * @param ToneRate
 * @desc トーンの変更時、何フレームに一度行うかの設定です。
 * @default 4
 *
 * @param WindowFrameSkip
 * @desc ウィンドウサイズ変更時、何フレームに一度変更を行うかの設定です。
 * @default 2
 *
 * @param SetFace1
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace2
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace3
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace4
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace5
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace6
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace7
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace8
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace9
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace10
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace11
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace12
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace13
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace14
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace15
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace16
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace17
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace18
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace19
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace20
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace21
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace22
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace23
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace24
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace25
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace26
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace27
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace28
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace29
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace30
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace31
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace32
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace33
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace34
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace35
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace36
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace37
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace38
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace39
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace40
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace41
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace42
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace43
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace44
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace45
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace46
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace47
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace48
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace49
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @param SetFace50
 * @desc 呼び出すフェイスのファイル名です。
 * @default
 * @require 1
 * @dir img/faces/
 * @type file
 *
 * @help------------------------------------------------------
 *  プラグインコマンド
 * ------------------------------------------------------
 * ------------------------------------------------------
 * 設定方法
 * ------------------------------------------------------
 * イベントコマンド「文章の表示」で使用可能な制御文字を追加します。
 * 以下の制御文字が追加されます。
 *
 * ---初期設定系---
 * ウィンドウの初期設定を変更します。
 * 呼び出されたときの表示位置や、サイズ、フェイス等を設定できます。
 * _で始まるものが初期設定系の制御文字です。
 *
 * -ウィンドウ設定-
 * _MMW[x,y]        ウィンドウの初期表示位置をx,yに変更します。アンカーは左上(x=0,y=0)です。
 * _RMW[w,h]        ウィンドウの初期サイズをw,hに設定します。
 * _OMW[o]          ウィンドウの初期透明度をoに設定します。
 * _WC[r,g,b]       ウィンドウのカラーをr,g,bに設定します。
 * _DWC             ウィンドウのカラーを$gameSystemで設定されているものに戻します。
 * ※MMW,RMWは選択肢の表示でも1番目の選択肢に記述することで使用することが可能です。
 *
 * -フェイス設定-
 * _FCR             フェイスの表示を右側に変更します。
 * _AF[n+i]         フェイスをアクターn番のものからインデックスをi番ずらしたものに設定します。
 * _SF[n+i]         フェイスをプラグインパラメータで設定したn番のもののインデックスi番に設定します。
 * _FRT[r]          フェイスの角度をr°に設定します。
 * _FFH             フェイスを左右反転した状態に設定します。
 * _FFV             フェイスを上下反転した状態に設定します。
 * _FO[o]           フェイスの透明度をoに設定します。
 *
 * --置き換え系--
 * Window_Baseで変換され、特定のテキストに置き換わります。
 * \M[n]            EECSetting_Macroで設定した、n番のテキストに置き換えます。
 *
 * --動作系--
 * Window_Messageで処理され、何らかの動作を行う制御文字です。
 *-
 * -ウエイト-
 * \WT[n]           nフレームウエイトをかけます。
 *
 * -ウィンドウ操作-
 * 基本的にdはすべて省略可能です。省略した場合、0として扱われます。
 * また、dにマイナスの値を設定すると、直前の動作の終了を待ってから、指定の動作に移ります。
 * \MMW[x,y[,d]]    ウィンドウの位置をdフレーム掛けてx,yに移動します。
 * \RMW[w,h[,d]]    ウィンドウのサイズをdフレーム掛けてx,yに変更します。(重いです)
 * \OMW[o[,d]]      ウィンドウの透明度をdフレーム掛けてoに変更します。
 * \WC[r,g,b[,d]]   ウィンドウのカラーをdフレーム掛けてr,g,bに変更します。
 * \DWC[d]          ウィンドウのカラーをdフレーム掛けて$gameSystemの設定値に戻します。
 *
 * -フェイス操作-
 * 基本的にdはすべて省略可能です。省略した場合、0として扱われます。
 * また、dにマイナスの値を設定すると、直前の動作の終了を待ってから、指定の動作に移ります。
 * \FRT[r[,d]]      フェイスの角度をdフレーム掛けてr°に回転します。
 * \FFV[d]          フェイスをdフレーム掛けて左右反転します。
 * \FFH[d]          フェイスをdフレーム掛けて上下反転します。
 * \FO[o[,d]]       フェイスの透明度をdフレーム掛けてoに変更します。
 * \FCI[n[,d]]      フェイスのインデックスをdフレーム掛けてn番に変更します。
 * \AF[n[+i,d]]     フェイスをdフレーム掛けてアクターn番のものからインデックスi番ずらしたものに変更します。
 * \SF[n[+i,d]]     フェイスをdフレーム掛けてプラグインパラメータで指定したn番のもののインデックスi番に変更します。
 * ※注意※　以下2つのいずれかを使用した状態で、\FCI,\AF,\SFのいずれかを呼び出すと、正常に変更が行われません。
 * \FCT[r,g,b,gr[,d]]   フェイスのColorToneをdフレーム掛けてr,g,b,grに変更します。
 * \FBC[r,g,b,a[,d]]    フェイスのBlendColorをdフレーム掛けてr,g,b,aに変更します。
 *
 * -イベント系-
 * nは-1がプレイヤー、0が起動イベント、1以上は対応するIDのイベントです。
 * \ANIは-2を指定することで、フェイスを対象にすることができます。
 * \BLN[n,i]        n番のキャラクターにi番の吹き出しを表示します。
 * \ANI[n,i]        n番のキャラクターにi番のアニメーションを表示します。
 *
 * -音楽系-
 * ボリューム：v,ピッチ：p,パン：pnを省略することができます。省略した場合、基本設定が使用されます。
 * また、nに0を指定することで、再生を停止することが可能です。
 * \BGM[n[,v,p,pn]]     EEC_SettingAudioで設定した、n番のBGMを演奏します。
 * \BGS[n[,v,p,pn]]     EEC_SettingAudioで設定した、n番のBGSを演奏します。
 * \SE[n[,v,p,pn]]      EEC_SettingAudioで設定した、n番のSEを演奏します。
 * \ME[n[,v,p,pn]]      EEC_SettingAudioで設定した、n番のMEを演奏します。
 *
 * \BGMFI[n,s[,v,p,pn]] EEC_SettingAudioで設定した、n番目のBGMをs秒かけてフェードインします。
 * \BGMFO[s]            BGMをs秒かけてフェードアウトします。
 * \BGSFI[n,s[,v,p,pn]] EEC_SettingAudioで設定した、n番目のBGSをs秒かけてフェードインします。
 * \BGSFO[s]            BGSをs秒かけてフェードアウトします。
 *
 * ------------------------------------------------------
 * 利用規約
 * ------------------------------------------------------
 * 使用に制限はありません。商用、アダルト、いずれにも使用できます。
 * 二次配布も制限はしませんが、サポートは行いません。
 * 著作表示は任意です。行わなくても利用できます。
 * 要するに、特に規約はありません。
 * バグ報告や使用方法等のお問合せはネ実ツクールスレ、または、Twitterにお願いします。
 * https://twitter.com/yanatsuki_
 * 素材利用は自己責任でお願いします。
 * ------------------------------------------------------
 * 更新履歴:
 * ver1.00:
 * 公開
 */

(function(){
    ////////////////////////////////////////////////////////////////////////////////////

    var parameters = PluginManager.parameters('ExtendEscapeCharacters');
    var toneRate = Number(parameters['ToneRate'] || 6);
    var windowFrameSkip = Number(parameters['WindowFrameSkip'] || 1);

    ////////////////////////////////////////////////////////////////////////////////////

    if (!Imported['FaceEC']) {
        Game_Temp.prototype.setFace = function (index) {
            if (this._setFace) {
                return this._setFace[index]
            }
            this._setFace = [];
            for (var i = 1; i < 51; i++) {
                this._setFace[i] = parameters['SetFace' + i]
            }
            return this._setFace[index];
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////

    var __GMessage_clear = Game_Message.prototype.clear;
    Game_Message.prototype.clear = function() {
        __GMessage_clear.call(this);
        this.clearEECEffect();
    };

    Game_Message.prototype.clearEECEffect = function() {
        this._windowTone = null;
        this._rightFace = null;
        this._defaultX = null;
        this._defaultY = null;
        this._defaultWidth = null;
        this._defaultHeight = null;
        this._faceOpacity = null;
        this._faceRotation = null;
        this._faceHFlip = false;
        this._faceVFlip = false;
        this._spareFaceName = '';
        this._spareFaceIndex = 0;
    };

    Game_Message.prototype.clearChoicePos = function() {
        this._choiceWindowPosX = null;
        this._choiceWindowPosY = null;
        this._choiceWindowWidth = null;
        this._choiceWindowHeight = null;
        this._choiceOpacity = null;
    };
    
    Game_Message.prototype.setChoicePos = function(x,y) {
        this._choiceWindowPosX = x;
        this._choiceWindowPosY = y;
    };

    Game_Message.prototype.setChoiceResize = function(w,h) {
        this._choiceWindowWidth = w;
        this._choiceWindowHeight = h;
    };

    Game_Message.prototype.spareFaceName = function() {
        return this._spareFaceName;
    };

    Game_Message.prototype.spareFaceIndex = function() {
        return this._spareFaceIndex;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __GInterpreter_command138 = Game_Interpreter.prototype.command138;
    Game_Interpreter.prototype.command138 = function() {
        var result = __GInterpreter_command138.call(this);
        SceneManager._scene._messageWindow._windowTone = $gameSystem.windowTone();
        return result;
    };

    var __GInterpreter_command101 = Game_Interpreter.prototype.command101;
    Game_Interpreter.prototype.command101 = function() {
        if (!$gameMessage.isBusy()) {
            $gameMessage.clearEECEffect();
            var index = this._index+1;
            var command = this._list[index].parameters[0];
            var text = this._list[index].parameters[0];
            text = text.replace(/\\V\[(\d+)\]/gi, function() {
                return $gameVariables.value(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\\M\[(\d+)\]/gi, function() {
                return $gameTemp.eecMacro(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/_FCR/gi, function() {
                $gameMessage._rightFace = true;
                return '';
            }.bind(this));
            text = text.replace(/_FO\[(\d+)\]/gi, function() {
                $gameMessage._faceOpacity = Number(arguments[1]);
                return '';
            }.bind(this));
            text = text.replace(/_FRT\[(\d+)\]/gi, function() {
                $gameMessage._faceRotation = Number(arguments[1]) * 3.141592658 / 180;
                return '';
            }.bind(this));
            text = text.replace(/_FFV/gi, function() {
                $gameMessage._faceVFlip = true;
                return '';
            }.bind(this));
            text = text.replace(/_FFH/gi, function() {
                $gameMessage._faceHFlip = true;
                return '';
            }.bind(this));
            text = text.replace(/_AF\[(\d+)[+-]?([+-]\d+)?\]/gi, function() {
                var faceId = Number(arguments[1]);
                var faceIndex = arguments[2] ? Number(arguments[2]) : 0;
                faceIndex = Math.max($dataActors[faceId].faceIndex + faceIndex,0);
                this._params[0] = $dataActors[faceId].faceName;
                this._params[1] = faceIndex;
                return '';
            }.bind(this));
            text = text.replace(/_SF\[(\d+)[+-]?([+-]\d+)?\]/gi, function() {
                var faceId = Number(arguments[1]);
                var faceIndex = arguments[2] ? Number(arugments[2]) : 0;
                faceIndex = Math.max(faceIndex,0);
                this._params[0] = $gameTemp.setFace(faceId);
                this._params[1] = faceIndex;
                return '';
            }.bind(this));
            text = text.replace(/_WC\[(-?\d+),(-?\d+),(-?\d+)\]/gi, function() {
                $gameMessage._windowTone = [Number(arguments[1]),Number(arguments[2]),Number(arguments[3])];
                return '';
            }.bind(this));
            text = text.replace(/_DWC/gi, function() {
                $gameMessage._windowTone = $gameSystem.windowTone();
                return '';
            }.bind(this));
            text = text.replace(/_MMW\[(-?\d+),(-?\d+)\]/gi, function() {
                $gameMessage._defaultX = Number(arguments[1]);
                $gameMessage._defaultY = Number(arguments[2]);
                return '';
            }.bind(this));
            text = text.replace(/_RMW\[(-?\d+),(-?\d+)\]/gi, function() {
                $gameMessage._defaultWidth = Number(arguments[1]);
                $gameMessage._defaultHeight = Number(arguments[2]);
                return '';
            }.bind(this));
            text = text.replace(/_OMW\[(\d+)\]/gi, function() {
                SceneManager._scene._messageWindow.setOpacity(Number(arguments[1]));
                return '';
            }.bind(this));
            this._list[index].parameters[0] = text;
        }
        var result = __GInterpreter_command101.call(this);
        if (command){ this._list[index].parameters[0] = command }
        return result;
    };

    var __GInterpreter_setupChoices = Game_Interpreter.prototype.setupChoices;
    Game_Interpreter.prototype.setupChoices = function(params) {
        var text = params[0][0];
        var sText = text;
        $gameMessage.clearChoicePos();
        text = text.replace(/\\V\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\\M\[(\d+)\]/gi, function() {
            return $gameTemp.eecMacro(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/_MMW\[(-?\d+),(-?\d+)\]/gi, function(){
            $gameMessage.setChoicePos(arguments[1],arguments[2]);
            return '';
        }.bind(this));
        text = text.replace(/_RMW\[(-?\d+),(-?\d+)\]/gi, function() {
            $gameMessage.setChoiceResize(Number(arguments[1]),Number(arguments[2]));
            return '';
        }.bind(this));
        params[0][0] = text;
        __GInterpreter_setupChoices.call(this,params);
        params[0][0] = sText;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var _WC_WBase_initialize = Window_Base.prototype.initialize;
    Window_Base.prototype.initialize = function(x, y, width, height) {
        this._stack = [];
        this._frameSkip = windowFrameSkip;
        _WC_WBase_initialize.call(this, x, y, width, height);
        this.initPosParams();
    };

    Window_Base.prototype.initPosParams = function() {
        this._pWidth = this.width;
        this._pHeight = this.height;
        this._px = null;
        this._py = null;
    };

    Window_Base.prototype.clearPosParams = function() {
        this._px = null;
        this._py = null;
        this.width = this._pWidth;
        this.height = this._pHeight;
    };

    var _WC_WBase_update = Window_Base.prototype.update;
    Window_Base.prototype.update = function() {
        _WC_WBase_update.call(this);
        this.updateAction();
    };

    Window_Base.prototype.updateAction = function() {
        if (this._stack.length === 0){ return }
        var updates = this.updatesArray();
        var max = this._stack.length;
        for(var i=0;i<max;i++){
            var obj = this._stack[i];
            if (obj.dur > 0){ updates[obj.index].call(this,obj)}
            if (obj.dur <= 0){ this._stack[i] = null }
            if (obj.delay > 0){
                obj.delay--;
                break;
            }
        }
        var ary = [];
        for (var i=0;i<max;i++){
            if (this._stack[i] !== null) { ary.push(this._stack[i]) }
        }
        this._stack = ary;
    };

    Window_Base.prototype.updatesArray = function() {
        return [this.updateMove,this.updateResize,this.updateOpacity];
    };

    Window_Base.prototype.updateMove = function(obj){
        if (!obj) { return }
        if (obj.dur === obj.mDur){
            obj.bx = this.x;
            obj.by = this.y;
            if (obj.relative){
                obj.x += obj.bx;
                obj.y += obj.by;
            }
            obj.mSpeedX = (obj.x - obj.bx) / obj.mDur;
            obj.mSpeedY = (obj.y - obj.by) / obj.mDur;
        }
        obj.dur--;
        var count = obj.mDur - obj.dur;
        var xx = obj.bx + obj.mSpeedX * count;
        var yy = obj.by + obj.mSpeedY * count;
        this.x = xx;
        this.y = yy;
        this._px = this.x;
        this._py = this.y;
    };

    Window_Base.prototype.updateResize = function(obj){
        if (!obj) { return }
        if (obj.dur === obj.mDur){
            obj.bw = this.width;
            obj.bh = this.height;
            if (obj.relative){
                obj.width += obj.bw;
                obj.height += obj.bh;
            }
            obj.mSpeedW = (obj.width - obj.bw) / obj.mDur;
            obj.mSpeedH = (obj.height - obj.bh) / obj.mDur;
        }
        if (obj.dur % this._frameSkip !== 0){
            obj.dur--;
            if (obj.dur > 0){ return }
            obj.dur++;
        }
        obj.dur--;
        var count = obj.mDur - obj.dur;
        var w = Math.floor(obj.bw + obj.mSpeedW * count);
        var h = Math.floor(obj.bh + obj.mSpeedH * count);
        this.move(this.x,this.y,w,h);
        //this.width = w;
        //this.height = h;
    };

    Window_Base.prototype.updateOpacity = function(obj){
        if (!obj){ return }
        if (obj.dur === obj.mDur){
            obj.bO = this.opacity;
            if (obj.relative) {
                obj.opacity = obj.bO + obj.opacity;
            }
            obj.oSpeed = (obj.opacity - obj.bO) / obj.mDur;
        }
        obj.dur--;
        var count = obj.mDur - obj.dur;
        var op = obj.bO + obj.oSpeed * count;
        this.opacity = op;
        this.contentsOpacity = op;
        this._windowPauseSignSprite.opacity = op;
    };

    Window_Base.prototype.setParam = function(arg){
        var obj = {};
        obj.index = arg[0];
        obj.delay = 0;
        var duration = arg[1];
        if (!duration){ duration = 0 }
        if (duration < 0){
            duration = Math.abs(duration);
            obj.delay = duration;
        }
        obj.dur = duration;
        obj.mDur = duration;
        return obj;
    };

    Window_Base.prototype.setMove = function(x,y,duration,relative){
        if (duration && duration !== 0){
            var obj = this.setParam([0,duration]);
            obj.x = x;
            obj.y = y;
            obj.relative = relative;
            this._stack.push(obj);
        } else {
            this.x = x;
            this.y = y;
        }
    };

    Window_Base.prototype.setResize = function(width,height,duration,relative){
        if (duration && duration !== 0){
            var obj = this.setParam([1,duration]);
            obj.width = width;
            obj.height = height;
            obj.relative = relative;
            this._stack.push(obj);
        } else {
            this.width = width;
            this.height = height;
        }
    };

    Window_Base.prototype.setOpacity = function(opacity,duration,relative){
        if (duration && duration !== 0){
            var obj = this.setParam([2,duration]);
            obj.opacity = opacity;
            obj.relative = relative;
            this._stack.push(obj);
        } else {
            this.opacity = opacity;
            this.contentsOpacity = opacity;
            this._windowPauseSignSprite.opacity = opacity;
        }
    };

    var __WBase_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function(text) {
        text = text.replace(/\\/g, '\x1b');
        text = text.replace(/\x1b\x1b/g, '\\');
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bM\[(\d+)\]/gi, function(){
            return $gameTemp.eecMacro(parseInt(arguments[1]));
        }.bind(this));
        return __WBase_convertEscapeCharacters.call(this, text);
    };

    Window_Base.prototype.obtainEscapeParams = function(textState){
        var arr = /\[(.+?)\]/.exec(textState.text.slice(textState.index));
        if (arr){
            textState.index += arr[0].length;
            var result = [];
            while(arr[1].match(/-?\d+/)){
                arr[1] = arr[1].replace(/(-?\d+)/,'');
                result.push(parseInt(RegExp.$1));
            }
            return result;
        }else{
            return '';
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __WMessage_initialize = Window_Message.prototype.initialize;
    Window_Message.prototype.initialize = function() {
        __WMessage_initialize.call(this);
        this.createFaceSprite();
    };

    var __WMessage_startMessage = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function() {
        if ($gameMessage._windowTone) { this._windowTone = $gameMessage._windowTone }
        this._rightFace = $gameMessage._rightFace;
        this.width = this.windowWidth();
        this.height = this.windowHeight();
        __WMessage_startMessage.call(this);
        this.clearEffect();
        this.defaultMove();
        this.setPositionFace();
        this.checkTextBltFace();
    };

    Window_Message.prototype.checkTextBltFace = function() {
        var text = this._textState.text;
        text.replace(/\x1bAF\[(.+?)\]/gi,function() {
            if (arguments[1].match(/(\d+).+/)){
                this.checkBlt($gameActors.actor(Number(RegExp.$1)).faceName());
            }
            return '';
        }.bind(this));
        text.replace(/\x1bSF\[(.+?)\]/gi,function() {
            if (arguments[1].match(/(\d+).+/)){
                this.checkBlt($gameTemp.setFace(Number(RegExp.$1)));
            }
            return '';
        }.bind(this));
    };

    Window_Message.prototype.defaultMove = function() {
        var x = $gameMessage._defaultX === null ? this.x : $gameMessage._defaultX;
        var y = $gameMessage._defaultY === null ? this.y : $gameMessage._defaultY;
        var w = $gameMessage._defaultWidth === null ? this.width : $gameMessage._defaultWidth;
        var h = $gameMessage._defaultHeight === null ? this.height : $gameMessage._defaultHeight;
        this.move(x,y,w,h);
    };

    Window_Message.prototype.clearEffect = function() {
        this._faceSprite.rotation = 0;
        this._spareFaceSprite.rotation = 0;
        this._faceSprite.scale.x = 1.0;
        this._faceSprite.scale.y = 1.0;
        this._spareFaceSprite.scale.x = 1.0;
        this._spareFaceSprite.scale.y = 1.0;
        this.opacity = 255;
        this.contentsOpacity = 255;
        this._windowPauseSignSprite.opacity = 255;
        this._stack = [];
    };

    Window_Message.prototype.open = function() {
        Window_Base.prototype.open.call(this);
        this.clearEffect();
        this._faceSprite.opacity = 255;
    };

    Window_Message.prototype.close = function() {
        Window_Base.prototype.close.call(this);
        //this.clearEffect();
    };

    Window_Message.prototype.updateOpen = function() {
        if (this._opening) {
            this._faceSprite.scale.y = ((this.openness + 32) / 256);
        }
        Window_Base.prototype.updateOpen.call(this);
    };

    Window_Message.prototype.updateClose = function() {
        if (this._closing && this.openness === 223) {
            this._faceSprite.opacity = 0;
        }
        Window_Base.prototype.updateClose.call(this);
    };

    var __WMessage_update = Window_Message.prototype.update;
    Window_Message.prototype.update = function() {
        __WMessage_update.call(this);
        if (ImageManager.isReady()) {
            if (this._refreshFace) {
                this.drawMessageFaceSprite($gameMessage.faceName(), $gameMessage.faceIndex(), this._faceSprite);
                this._refreshFace = false;
            }
            if (this._refreshSpareFace){
                this.drawMessageFaceSprite($gameMessage.spareFaceName(), $gameMessage.spareFaceIndex(), this._spareFaceSprite);
                this._refreshSpareFace = false;
            } else {
                if (this._refreshFace){ this.checkBlt($gameMessage.faceName()) }
                if (this._refreshSpareFace){ this.checkBlt($gameMessage.spareFaceName()) }
            }
        }
    };

    Window_Message.prototype.requestFaceRefresh = function() {
        this._refreshFace = true;
        this.checkBlt($gameMessage.faceName());
    };

    Window_Message.prototype.requestSpareFaceRefresh = function() {
        this._refreshSpareFace = true;
        this.checkBlt($gameMessage.spareFaceName());
    };

    Window_Message.prototype.checkBlt = function(faceName){
        var bitmap = new Bitmap(1,1);
        var bitmap2 = ImageManager.loadFace(faceName);
        bitmap.blt(bitmap2,0,0,bitmap2.width,bitmap2.height,0,0);
        bitmap = null;
        bitmap2 = null;
    };

    Window_Message.prototype.updateResize = function(obj){
        Window_Base.prototype.updateResize.call(this,obj);
        this.setPositionFace();
    };

    Window_Message.prototype.updateOpacity = function(obj) {
        Window_Base.prototype.updateOpacity.call(this,obj);
        this._faceSprite.opacity = this.opacity;
        this._spareFaceSprite.opacity = this.opacity;
    };

    Window_Message.prototype.createFaceSprite = function() {
        this._faceSprite = new Sprite_Base();
        this._faceSprite.bitmap = new Bitmap(Window_Base._faceWidth,Window_Base._faceHeight);
        this._faceSprite.x = this.standardPadding() + this._faceSprite.bitmap.width / 2;
        this._faceSprite.y = this.standardPadding() + this._faceSprite.bitmap.height / 2;
        this._faceSprite.anchor = new Point(0.5,0.5);
        this.addChild(this._faceSprite);
        this._spareFaceSprite = new Sprite();
        this._spareFaceSprite.bitmap = new Bitmap(Window_Base._faceWidth,Window_Base._faceHeight);
        this._spareFaceSprite.x = this.standardPadding() + this._spareFaceSprite.bitmap.width / 2;
        this._spareFaceSprite.y = this.standardPadding() + this._spareFaceSprite.bitmap.height / 2;
        this._spareFaceSprite.anchor = new Point(0.5,0.5);
        this.addChild(this._spareFaceSprite);
    };

    Window_Message.prototype.setPositionFace = function() {
        if (this._rightFace){
            this._faceSprite.x = this.width - this._faceSprite.width * 0.5 - this.standardPadding();
            this._spareFaceSprite.x = this.width - this._spareFaceSprite.width * 0.5 - this.standardPadding();
        } else {
            this._faceSprite.x = this.standardPadding() + this._faceSprite.bitmap.width / 2;
            this._spareFaceSprite.x = this.standardPadding() + this._spareFaceSprite.bitmap.width / 2;
        }
        var h = this.height - this.standardPadding() * 2;
        var y = this.height / 2;
        this._faceSprite.height = Math.min(h,Window_Base._faceHeight);
        this._spareFaceSprite.height = Math.min(h,Window_Base._faceHeight);
        this._faceSprite.y = y;
        this._spareFaceSprite.y = y;
        if ($gameMessage._faceOpacity !== null) { this._faceSprite.opacity = $gameMessage._faceOpacity }
        if ($gameMessage._faceRotation !== null) { this._faceSprite.rotation = $gameMessage._faceRotation }
        if ($gameMessage._faceVFlip) { this._faceSprite.y = -1.0 }
        if ($gameMessage._faceHFlip) { this._faceSprite.x = -1.0 }
    };

    var __WMessage_newLineX = Window_Message.prototype.newLineX;
    Window_Message.prototype.newLineX = function() {
        var lineX = __WMessage_newLineX.call(this);
        if (this._rightFace){ lineX = Math.max(lineX - 168,0) }
        return lineX;
    };

    // 再定義
    Window_Message.prototype.drawMessageFace = function() {
        this.drawMessageFaceSprite($gameMessage.faceName(),$gameMessage.faceIndex(), this._faceSprite);
    };

    Window_Message.prototype.drawMessageFaceSprite = function(faceName,faceIndex,sprite) {
        if(sprite.bitmap){ sprite.bitmap.clear() }
        var x = 0;
        var y = 0;
        var width = Window_Base._faceWidth;
        var height = Window_Base._faceHeight;
        var bitmap = ImageManager.loadFace(faceName);
        var pw = width;
        var ph = height;
        var sw = Math.min(width, pw);
        var sh = Math.min(height, ph);
        var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
        var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
        var sx = faceIndex % 4 * pw + (pw - sw) / 2;
        var sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
        //console.log(sx,sy,sw,sh)
        //sprite.setFrame(sx,sy,sw,sh);
        sprite.bitmap.blt(bitmap,sx,sy,sw,sh,dx,dy);
    };

    var __WMessage_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
    Window_Message.prototype.processEscapeCharacter = function(code, textState) {
        switch(code) {
            // フレーム指定ウエイト
            case 'WT':
                this.startWait(this.obtainEscapeParam(textState));
                break;
            // BGMの再生
            case 'BGM':
                this.processPlayBgm(this.obtainEscapeParams(textState));
                break;
            // BGSの再生
            case 'BGS':
                this.processPlayBgs(this.obtainEscapeParams(textState));
                break;
            // BGMのフェードアウト
            case 'BGMFO':
                AudioManager.fadeOutBgm(this.obtainEscapeParam(textState));
                break;
            // BGMのフェードイン
            case 'BGMFI':
                this.processFadeInBgm(this.obtainEscapeParams(textState));
                break;
            // BGSのフェードアウト
            case 'BGSFO':
                AudioManager.fadeOutBgs(this.obtainEscapeParam(textState));
                break;
            // BGSのフェードイン
            case 'BGSFI':
                this.processFadeInBgs(this.obtainEscapeParams(textState));
                break;
            // SEの再生
            case 'SE':
                this.processPlaySe(this.obtainEscapeParams(textState));
                break;
            // MEの再生
            case 'ME':
                this.processPlayMe(this.obtainEscapeParams(textState));
                break;
            // フェイスを回転
            case 'FRT':
                var ary = this.obtainEscapeParams(textState);
                var radian = ary[0] * 3.141592653 / 180;
                if (ary[1]){
                    this.processFaceRotation(radian,ary[1]);
                } else {
                    this._faceSprite.rotation = radian;
                }
                break;
            // フェイスを上下反転
            case 'FFV':
                var ary = this.obtainEscapeParams(textState);
                if (ary[0]){
                    this.processFaceFlipVert(ary[0]);
                } else {
                    this._faceSprite.scale.y *= -1.0;
                }
                break;
            // フェイスを左右反転
            case 'FFH':
                var ary = this.obtainEscapeParams(textState);
                if (ary[0]){
                    this.processFaceFlipHorz(ary[0]);
                } else {
                    this._faceSprite.scale.x *= -1.0;
                }
                break;
            // フェイスの透明度を変更
            case 'FO':
                var ary = this.obtainEscapeParams(textState);
                if (ary[1]){
                    this.processFaceOpacity(ary[0],ary[1]);
                } else {
                    this._faceSprite.opacity = ary[0];
                }
                break;
            // フェイスインデックスの変更
            case 'FCI':
                var ary = this.obtainEscapeParams(textState);
                if (ary[1]){
                    this.processChangeFace($gameMessage.faceName(),ary[0],ary[1]);
                } else {
                    $gameMessage._faceIndex = ary[0];
                    this.drawMessageFace();
                }
                break;
            // フェイスの変更
            case 'AF':
                var ary = /\[(.+?)\]/i.exec(textState.text.slice(textState.index));
                textState.index += ary[0].length;
                ary = ary[1].split(',');
                ary[0].match(/(\d+)[+-]?([+-]\d+)?$/i);
                var id = Number(RegExp.$1);
                var n = Number(RegExp.$2) ? Number(RegExp.$2) : 0;
                var w = Number(ary[1]) ? Number(ary[1]) : 0;
                var name = $gameActors.actor(id)._faceName;
                var index = $gameActors.actor(id)._faceIndex;
                if (w){
                    this.processChangeFace(name,index + n, w);
                } else {
                    $gameMessage._faceName = name;
                    $gameMessage._faceIndex = index + n;
                    this.requestFaceRefresh();
                }
                break;
            // フェイスの変更
            case 'SF':
                var ary = /\[(.+?)\]/i.exec(textState.text.slice(textState.index));
                textState.index += ary[0].length;
                ary = ary[1].split(',');
                ary[0].match(/(\d+)[+-]?([+-]\d+)?$/i);
                var index = Number(RegExp.$1);
                var n = Number(RegExp.$2) ? Number(RegExp.$2) : 0;
                var w = Number(ary[1]) ? Number(ary[1]) : 0;
                var name = $gameTemp.setFace(index);
                if (w){
                    this.processChangeFace(name, n, w);
                } else {
                    $gameMessage._faceName = name;
                    $gameMessage._faceIndex = n;
                    this.requestFaceRefresh();
                }
                break;
            // フェイスのカラートーンを変更
            case 'FCT':
                var ary = this.obtainEscapeParams(textState);
                if (ary[4]){
                    this.processFaceColorTone(ary,ary[4]);
                } else {
                    this._faceSprite.setColorTone(ary);
                }
                break;
            // フェイスのブレンドカラーを変更
            case 'FBC':
                var ary = this.obtainEscapeParams(textState);
                if (ary[4]) {
                    this.processFaceBlendColor(ary,ary[4]);
                } else {
                    this._faceSprite.setBlendColor(ary);
                }
                break;
            // ウィンドウカラーの変更
            case 'WC':
                var ary = this.obtainEscapeParams(textState);
                if (ary[3]){
                    this.processSetWindowToneWait(ary, ary[3]);
                } else {
                    this._windowTone = ary;
                }
                break;
            // ウィンドウカラーをデフォルトに戻す
            case 'DWC':
                var count = this.obtainEscapeParams(textState)[0];
                if (count){
                    this.processSetWindowToneWait($gameSystem.windowTone(),count);
                } else {
                    this._windowTone = $gameSystem.windowTone();
                }
                break;
            // メッセージウィンドウを移動
            case 'MMW':
                this.processMoveWindow(this.obtainEscapeParams(textState));
                break;
            // メッセージウィンドウをリサイズ
            case 'RMW':
                this.processResizeWindow(this.obtainEscapeParams(textState));
                break;
            // メッセージウィンドウの透明度を変更
            case 'OMW':
                this.processOpacityWindow(this.obtainEscapeParams(textState));
                break;
            // フキダシバルーンの表示
            case 'BLN':
                var ary = this.obtainEscapeParams(textState);
                var character = $gameMap._interpreter.character(ary[0]);
                character.requestBalloon(ary[1]);
                break;
            // アニメーションの表示
            case 'ANI':
                var ary = this.obtainEscapeParams(textState);
                if (ary[0] >= -1) {
                    var character = $gameMap._interpreter.character(ary[0]);
                    character.requestAnimation(ary[1])
                } else {
                    var anime = $dataAnimations[ary[1]];
                    this._faceSprite.startAnimation(anime,false,0);
                }
                break;
            default:
                __WMessage_processEscapeCharacter.call(this, code, textState);
                break;
        }
    };

    Window_Message.prototype.updatesArray = function() {
        return [this.updateMove,this.updateResize,this.updateOpacity,
                 this.updateFaceRotation,this.updateFaceFlipHorz,this.updateFaceFlipVert,
                 this.updateFaceOpacity,this.updateChangeFace,this.updateFaceColorTone,
                 this.updateFaceBlendColor,this.updateWaitToneCount];
    };

    Window_Message.prototype.updateTone = function() {
        if (!this._windowTone){ this._windowTone = $gameSystem.windowTone() }
        var tone = this._windowTone;
        this.setTone(tone[0], tone[1], tone[2]);
    };

    Window_Message.prototype.processMoveWindow = function(ary){
        $gameMessage._defaultX = ary[0];
        $gameMessage._defaultY = ary[1];
        this.setMove(ary[0],ary[1],ary[2]);
    };

    Window_Message.prototype.processResizeWindow = function(ary){
        this.setResize(ary[0],ary[1],ary[2]);
    };

    Window_Message.prototype.processOpacityWindow = function(ary){
        $gameMessage._defaultOpacity = ary[0];
        this.setOpacity(ary[0],ary[1]);
    };

    Window_Message.prototype.processFaceRotation = function(radian, duration) {
        var obj = this.setParam([3,duration]);
        obj.radian = radian;
        obj.bRadian = this._faceSprite.rotation;
        this._stack.push(obj);
    };

    Window_Message.prototype.processSetWindowToneWait = function(ary,duration) {
        var obj = this.setParam([10,duration]);
        obj.tone = [ary[0],ary[1],ary[2]];
        this._stack.push(obj);
    };

    Window_Message.prototype.processFaceFlipHorz = function(duration) {
        var obj = this.setParam([4,duration]);
        this._stack.push(obj);
    };

    Window_Message.prototype.processFaceFlipVert = function(duration) {
        var obj = this.setParam([5,duration]);
        this._stack.push(obj);
    };

    Window_Message.prototype.processFaceOpacity = function(opacity,duration) {
        var obj = this.setParam([6,duration]);
        obj.opacity = opacity;
        this._stack.push(obj);
    };

    Window_Message.prototype.processChangeFace = function(faceName,faceIndex,duration) {
        var obj = this.setParam([7,duration]);
        obj.faceName = faceName;
        obj.faceIndex = faceIndex;
        this._stack.push(obj);
    };

    Window_Message.prototype.processFaceColorTone = function(ary,duration) {
        var obj = this.setParam([8,duration]);
        obj.tone  = [ary[0],ary[1],ary[2],ary[3]];
        this._stack.push(obj);

    };

    Window_Message.prototype.processFaceBlendColor = function(ary,duration) {
        var obj = this.setParam([9,duration]);
        obj.blend = [ary[0],ary[1],ary[2],ary[3]];
        this._stack.push(obj);
    };

    Window_Message.prototype.updateWaitToneCount = function(obj) {
        if (obj.dur === obj.mDur) {
            obj.bTone = this._windowTone;
        }
        obj.dur--;
        var rate = 1 - (obj.dur / obj.mDur);
        var red =   obj.tone[0] - obj.bTone[0];
        var green = obj.tone[1] - obj.bTone[1];
        var blue =  obj.tone[2] - obj.bTone[2];
        var ary = [Math.floor(obj.bTone[0] + (red * rate)),
                   Math.floor(obj.bTone[1] + (green * rate)),
                   Math.floor(obj.bTone[2] + (blue * rate)),
                   0];
        if (obj.dur % toneRate === 0){ this._windowTone = ary }
    };

    Window_Message.prototype.updateFaceRotation = function(obj) {
        if (obj.dur === obj.mDur){
            obj.bRadian = this._faceSprite.rotation;
        }
        obj.dur--;
        var rate = 1 - (obj.dur / obj.mDur);
        this._faceSprite.rotation = obj.bRadian + (obj.radian * rate);
        this._spareFaceSprite.rotation = obj.bRadian + (obj.radian * rate);
    };

    Window_Message.prototype.updateFaceFlipHorz = function(obj) {
        if (obj.dur === obj.mDur){
            obj.bScaleX = this._faceSprite.scale.x;
        }
        obj.dur--;
        var rate = (obj.dur / obj.mDur) * 2 - 1;
        this._faceSprite.scale.x = obj.bScaleX * rate;
        this._spareFaceSprite.scale.x = obj.bScaleX * rate;
    };

    Window_Message.prototype.updateFaceFlipVert = function(obj) {
        if (obj.dur === obj.mDur){
            obj.bScaleY = this._faceSprite.scale.y;
        }
        obj.dur--;
        var rate = (obj.dur / obj.mDur) * 2 - 1;
        this._faceSprite.scale.y = obj.bScaleY * rate;
        this._spareFaceSprite.scale.y = obj.bScaleY * rate;
    };

    Window_Message.prototype.updateFaceOpacity = function(obj) {
        if (obj.dur === obj.mDur){
            obj.bOpacity = this._faceSprite.opacity;
        }
        obj.dur--;
        var rate = 1 - (obj.dur / obj.mDur);
        this._faceSprite.opacity = obj.bOpacity - ((obj.bOpacity - obj.opacity) * rate);
        //this._spareFaceSprite.opacity = obj.bOpacity - ((obj.bOpacity - obj.opacity) * rate);
    };

    Window_Message.prototype.updateChangeFace = function(obj) {
        if (obj.dur === obj.mDur){
            $gameMessage._spareFaceName = $gameMessage._faceName;
            $gameMessage._spareFaceIndex = $gameMessage._faceIndex;
            $gameMessage._faceName = obj.faceName;
            $gameMessage._faceIndex = obj.faceIndex;
            obj.bOpacity = this._faceSprite.opacity;
            this._spareFaceSprite.scale = this._faceSprite.scale;
            this.requestFaceRefresh();
            this.requestSpareFaceRefresh();
        }
        obj.dur--;
        var rate = 1 - (obj.dur / obj.mDur);
        this._faceSprite.opacity = obj.bOpacity * rate;
        if (obj.dur > 0){
            this._spareFaceSprite.opacity = obj.bOpacity * (1.0 - rate);
        } else {
            this._spareFaceSprite.bitmap.clear();
        }
    };

    Window_Message.prototype.updateFaceColorTone = function(obj) {
        if (obj.dur === obj.mDur) {
            obj.bTone = this._faceSprite.getColorTone();
        }
        obj.dur--;
        var rate  = 1 - (obj.dur / obj.mDur);
        var red   = obj.tone[0] - obj.bTone[0];
        var green = obj.tone[1] - obj.bTone[1];
        var blue  = obj.tone[2] - obj.bTone[2];
        var gray  = obj.tone[3] - obj.bTone[3];
        var ary = [Math.floor(obj.bTone[0] + (red * rate)),
                   Math.floor(obj.bTone[1] + (green * rate)),
                   Math.floor(obj.bTone[2] + (blue * rate)),
                   Math.floor(obj.bTone[3] + (gray * rate))];
        this._faceSprite.setColorTone(ary);
        //this._spareFaceSprite.setColorTone(ary);
    };

    Window_Message.prototype.updateFaceBlendColor = function(obj) {
        if (obj.dur === obj.mDur) {
            obj.bBlend = this._faceSprite.getBlendColor();
        }
        obj.dur--;
        var rate  = 1 - (obj.dur / obj.mDur);
        var red   = obj.blend[0] - obj.bBlend[0];
        var green = obj.blend[1] - obj.bBlend[1];
        var blue  = obj.blend[2] - obj.bBlend[2];
        var alpha  = obj.blend[3] - obj.bBlend[3];
        var ary = [Math.floor(obj.bBlend[0] + (red * rate)),
                   Math.floor(obj.bBlend[1] + (green * rate)),
                   Math.floor(obj.bBlend[2] + (blue * rate)),
                   Math.floor(obj.bBlend[3] + (alpha * rate))];
        this._faceSprite.setBlendColor(ary);
        //this._spareFaceSprite.setBlendColor(ary);
    };

    Window_Message.prototype.processPlaySe = function(ary) {
        var defaultSe = $gameTemp.seSetting();
        var name = $gameTemp.eecSe(ary[0]);
        if (!name){
            AudioManager.stopSe();
        } else {
            var se = this.setAudioObject(name, ary, defaultSe);
            AudioManager.playSe(se);
        }
    };

    Window_Message.prototype.processPlayMe = function(ary) {
        var defaultMe = $gameTemp.meSetting();
        var name = $gameTemp.eecMe(ary[0]);
        if (!name){
            AudioManager.stopMe();
        } else {
            var me = this.setAudioObject(name, ary, defaultMe);
            AudioManager.playMe(me);
        }
    };

    Window_Message.prototype.processPlayBgm = function(ary) {
        var defaultBgm = $gameTemp.bgmSetting();
        var name = $gameTemp.eecBgm(ary[0]);
        if (!name) {
            AudioManager.stopBgm();
        } else {
            var bgm = this.setAudioObject(name, ary, defaultBgm);
            AudioManager.playBgm(bgm);
        }
    };

    Window_Message.prototype.processPlayBgs = function(ary) {
        var defaultBgs = $gameTemp.bgsSetting();
        var name = $gameTemp.eecBgs(ary[0]);
        if (!name) {
            AudioManager.stopBgs();
        } else {
            var bgs = this.setAudioObject(name, ary, defaultBgs);
            AudioManager.playBgs(bgs);
        }
    };

    Window_Message.prototype.processFadeInBgm = function(ary) {
        var duration = ary[1];
        ary.splice(1,1);
        this.processPlayBgm(ary);
        AudioManager.fadeInBgm(duration);
    };

    Window_Message.prototype.processFadeInBgs = function(ary) {
        var duration = ary[1];
        ary.splice(1,1);
        this.processPlayBgs(ary);
        AudioManager.fadeInBgs(duration);
    };

    Window_Message.prototype.setAudioObject = function (name, ary, defaultSetting) {
        if (!ary[1]){ ary[1] = defaultSetting[0] }
        if (!ary[2]){ ary[2] = defaultSetting[1] }
        if (!ary[3]){ ary[3] = defaultSetting[2] }
        var obj = { name:name, volume:ary[1], pitch:ary[2], pan:ary[3] };
        return obj;
    };
    
    ////////////////////////////////////////////////////////////////////////////////////

    var __WChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
    Window_ChoiceList.prototype.updatePlacement = function() {
        __WChoiceList_updatePlacement.call(this);
        if ($gameMessage._choiceWindowPosX !== null) { this.x = $gameMessage._choiceWindowPosX }
        if ($gameMessage._choiceWindowPosY !== null) { this.y = $gameMessage._choiceWindowPosY }
        if ($gameMessage._choiceWindowWidth !== null) { this.width = $gameMessage._choiceWindowWidth }
        if ($gameMessage._choiceWindowHeight !== null) { this.height = $gameMessage._choiceWindowHeight }
    };

    Window_ChoiceList.prototype.updateTone = function() {
        var tone = this._messageWindow._windowTone;
        this.setTone(tone[0], tone[1], tone[2]);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    Window_EventItem.prototype.updateTone = function() {
        var tone = this._messageWindow._windowTone;
        this.setTone(tone[0], tone[1], tone[2]);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    Window_NumberInput.prototype.updateTone = function() {
        var tone = this._messageWindow._windowTone;
        this.setTone(tone[0], tone[1], tone[2]);
    };

    ////////////////////////////////////////////////////////////////////////////////////
}());

