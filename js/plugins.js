// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Yami_SkipTitle","status":true,"description":"テストプレイ用にタイトルシーンを飛ばすことができます。","parameters":{}},
{"name":"StandPictureSettingP","status":true,"description":"ver1.01/立ち絵表示制御文字用のピクチャ設定用プラグインです。","parameters":{"Start Index":"0","Picture0":"","Picture1":"","Picture2":"","Picture3":"","Picture4":"","Picture5":"","Picture6":"","Picture7":"","Picture8":"","Picture9":"","Picture10":"","Picture11":"","Picture12":"","Picture13":"","Picture14":"","Picture15":"","Picture16":"","Picture17":"","Picture18":"","Picture19":"","Picture20":"","Picture21":"","Picture22":"","Picture23":"","Picture24":"","Picture25":"","Picture26":"","Picture27":"","Picture28":"","Picture29":"","Picture30":"","Picture31":"","Picture32":"","Picture33":"","Picture34":"","Picture35":"","Picture36":"","Picture37":"","Picture38":"","Picture39":"","Picture40":"","Picture41":"","Picture42":"","Picture43":"","Picture44":"","Picture45":"","Picture46":"","Picture47":"","Picture48":"","Picture49":"","Picture50":"","Picture51":"","Picture52":"","Picture53":"","Picture54":"","Picture55":"","Picture56":"","Picture57":"","Picture58":"","Picture59":"","Picture60":"","Picture61":"","Picture62":"","Picture63":"","Picture64":"","Picture65":"","Picture66":"","Picture67":"","Picture68":"","Picture69":"","Picture70":"","Picture71":"","Picture72":"","Picture73":"","Picture74":"","Picture75":"","Picture76":"","Picture77":"","Picture78":"","Picture79":"","Picture80":"","Picture81":"","Picture82":"","Picture83":"","Picture84":"","Picture85":"","Picture86":"","Picture87":"","Picture88":"","Picture89":"","Picture90":"","Picture91":"","Picture92":"","Picture93":"","Picture94":"","Picture95":"","Picture96":"","Picture97":"","Picture98":"","Picture99":""}},
{"name":"StandPictureSettingP1","status":true,"description":"ver1.02/立ち絵表示制御文字用のピクチャ設定のサンプルです。","parameters":{"Start Index":"1","Picture0":"pictures/test0","Picture1":"pictures/test1","Picture2":"pictures/test2:blink,30,8,0,1,2,2,1,0","Picture3":"pictures/test3:blink,30,8,0,1,2,2,1,0","Picture4":"pictures/test4:lip,6,1,1,5,1,2,4,5,3","Picture5":"pictures/test5","Picture6":"pictures/test6","Picture7":"pictures/test7","Picture8":"pictures/test8","Picture9":"pictures/pm","Picture10":"pictures/pms1","Picture11":"pictures/pms2","Picture12":"pictures/pms3","Picture13":"pictures/pms4","Picture14":"pictures/pms5","Picture15":"pictures/World","Picture16":"pictures/tower","Picture17":"pictures/town","Picture18":"pictures/village","Picture19":"pictures/desert","Picture20":"pictures/ruins","Picture21":"pictures/castle","Picture22":"pictures/mountain","Picture23":"","Picture24":"","Picture25":"","Picture26":"","Picture27":"","Picture28":"","Picture29":"","Picture30":"","Picture31":"","Picture32":"","Picture33":"","Picture34":"","Picture35":"","Picture36":"","Picture37":"","Picture38":"","Picture39":"","Picture40":"","Picture41":"","Picture42":"","Picture43":"","Picture44":"","Picture45":"","Picture46":"","Picture47":"","Picture48":"","Picture49":"","Picture50":"","Picture51":"","Picture52":"","Picture53":"","Picture54":"","Picture55":"","Picture56":"","Picture57":"","Picture58":"","Picture59":"","Picture60":"","Picture61":"","Picture62":"","Picture63":"","Picture64":"","Picture65":"","Picture66":"","Picture67":"","Picture68":"","Picture69":"","Picture70":"","Picture71":"","Picture72":"","Picture73":"","Picture74":"","Picture75":"","Picture76":"","Picture77":"","Picture78":"","Picture79":"","Picture80":"","Picture81":"","Picture82":"","Picture83":"","Picture84":"","Picture85":"","Picture86":"","Picture87":"","Picture88":"","Picture89":"","Picture90":"","Picture91":"","Picture92":"","Picture93":"","Picture94":"","Picture95":"","Picture96":"","Picture97":"","Picture98":"","Picture99":""}},
{"name":"StandPictureSettingM","status":true,"description":"ver1.01/立ち絵表示制御文字用のマクロ設定用プラグインです。","parameters":{"Start Index":"0","Macro0":"","Macro1":"","Macro2":"","Macro3":"","Macro4":"","Macro5":"","Macro6":"","Macro7":"","Macro8":"","Macro9":"","Macro10":"","Macro11":"","Macro12":"","Macro13":"","Macro14":"","Macro15":"","Macro16":"","Macro17":"","Macro18":"","Macro19":"","Macro20":"","Macro21":"","Macro22":"","Macro23":"","Macro24":"","Macro25":"","Macro26":"","Macro27":"","Macro28":"","Macro29":"","Macro30":"","Macro31":"","Macro32":"","Macro33":"","Macro34":"","Macro35":"","Macro36":"","Macro37":"","Macro38":"","Macro39":"","Macro40":"","Macro41":"","Macro42":"","Macro43":"","Macro44":"","Macro45":"","Macro46":"","Macro47":"","Macro48":"","Macro49":"","Macro50":"","Macro51":"","Macro52":"","Macro53":"","Macro54":"","Macro55":"","Macro56":"","Macro57":"","Macro58":"","Macro59":"","Macro60":"","Macro61":"","Macro62":"","Macro63":"","Macro64":"","Macro65":"","Macro66":"","Macro67":"","Macro68":"","Macro69":"","Macro70":"","Macro71":"","Macro72":"","Macro73":"","Macro74":"","Macro75":"","Macro76":"","Macro77":"","Macro78":"","Macro79":"","Macro80":"","Macro81":"","Macro82":"","Macro83":"","Macro84":"","Macro85":"","Macro86":"","Macro87":"","Macro88":"","Macro89":"","Macro90.":"","Macro91":"","Macro92":"","Macro93":"","Macro95":"","Macro96":"","Macro97":"","Macro98":"","Macro99":""}},
{"name":"StandPictureSettingM1","status":true,"description":"ver1.01/立ち絵表示制御文字用のサンプルマクロ設定プラグインです。","parameters":{"Start Index":"1","Macro0":"test0~5を登録して左から登場させます。:\\SP[\\V[1],200,624]\\SP[\\VI[1,1],193,453]\\SP[\\VI[1,3],206,212]\\SP[\\VI[1,4],209,254]\\SP[\\VI[1,5],204,226]\\BP[\\V[1],\\VI[1,1],\\VI[1,2],\\VI[1,3],\\VI[1,4],\\VI[1,5],\\VI[1,6]]\\OP[\\V[1],255,30]\\MP[\\V[1],380,624,30]","Macro1":"1番をフェードさせながら右からスライドイン:\\SP[\\V[\\PV],\\CALC[\\BXW+240],\\MWY]\\MP[\\V[\\PV],\\CALC[\\BXW-240],\\MWY,\\V[\\CALC[\\PV+5]]]\\OP[\\V[\\PV],255,\\VI[\\CALC[\\PV+5],5]]","Macro2":"1番をフェードさせながら右にスライドアウト:\\OP[\\V[\\PV],0,\\V[\\CALC[\\PV+5]]]\\MP[\\V[\\PV],\\CALC[\\BXW],\\MWY,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\PV]]","Macro3":"1番をフェードさせながら左からスライドイン:\\SP[\\V[\\PV],-240,\\MWY]\\MP[\\V[\\PV],240,\\MWY,\\V[\\CALC[\\PV+5]]]\\OP[\\V[\\PV],255,\\VI[\\CALC[\\PV+5],5]]","Macro4":"1番をフェードさせながら左にスライドアウト:\\OP[\\V[\\PV],0,\\V[\\CALC[\\PV+5]]]\\MP[\\V[\\PV],0,\\MWY,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\PV]]","Macro5":"1番を右側にフェードイン:\\SP[\\V[\\PV],\\CALC[\\BXW-240],\\MWY]\\OP[\\V[\\PV],255,\\V[\\CALC[\\PV+5]]]","Macro6":"1番を左側にフェードイン:\\SP[\\V[\\PV],240,\\MWY]\\OP[\\V[\\PV],255,\\V[\\CALC[\\PV+5]]]","Macro7":"1番を2番にフェードチェンジ:\\CFP[\\V[\\PV],\\V[\\CALC[\\PV+1]],\\V[\\CALC[\\PV+5]]]","Macro8":"1番を2番にターンチェンジ:\\CP[\\V[\\PV],\\V[\\CALC[\\PV+1]],\\V[\\CALC[\\PV+5]]]","Macro9":"1番を画面中央にフェードイン:\\SP[\\V[\\PV],\\CALC[\\BXW*0.5],\\MWY]\\OP[\\V[\\PV],255,\\NNUM[\\V[\\CALC[\\PV+5]]]]","Macro10":"1番をフェードアウト:\\OP[\\V[\\PV],0,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\PV]]","Macro11":"2番をフェードさせながら右からスライドイン:\\SP[\\V[\\CALC[\\PV+1]],\\CALC[\\BXW+240],\\MWY]\\MP[\\V[\\CALC[\\PV+1]],\\CALC[\\BXW-240],\\MWY,\\V[\\CALC[\\PV+5]]]\\OP[\\V[\\CALC[\\PV+1]],255,\\VI[\\CALC[\\PV+5],5]]","Macro12":"2番をフェードさせながら右にスライドアウト:\\OP[\\V[\\CALC[\\PV+1]],0,\\V[\\CALC[\\PV+5]]]\\MP[\\V[\\CALC[\\PV+1]],\\CALC[\\BXW+240],\\MWY,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+1]]]","Macro13":"2番をフェードさせながら左からスライドイン:\\SP[\\V[\\CALC[\\PV+1]],-240,\\MWY]\\MP[\\V[\\CALC[\\PV+1]],240,\\MWY,\\V[\\CALC[\\PV+5]]]\\OP[\\V[\\CALC[\\PV+1]],255,\\VI[\\CALC[\\PV+5],5]]","Macro14":"2番をフェードさせながら左にスライドアウト:\\OP[\\V[\\CALC[\\PV+1]],0,\\V[\\CALC[\\PV+5]]]\\MP[\\V[\\CALC[\\PV+1]],-240,\\MWY,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+1]]]","Macro15":"2番を右側にフェードイン:\\SP[\\V[\\CALC[\\PV+1]],\\CALC[\\BXW-240],\\MWY]\\OP[\\V[\\CALC[\\PV+1]],255,\\V[\\CALC[\\PV+5]]]","Macro16":"2番を左側にフェードイン:\\SP[\\V[\\CALC[\\PV+1]],240,\\MWY]\\OP[\\V[\\CALC[\\PV+1]],255,\\V[\\CALC[\\PV+5]]]","Macro17":"2番を3番にフェードチェンジ:\\CFP[\\V[\\CALC[\\PV+1]],\\V[\\CALC[\\PV+2]],\\V[\\CALC[\\PV+5]]]","Macro18":"2番を3番にターンチェンジ:\\CP[\\V[\\CALC[\\PV+1]],\\V[\\CALC[\\PV+2]],\\V[\\CALC[\\PV+5]]]","Macro19":"2番を画面中央にフェードイン:\\SP[\\V[\\CALC[\\PV+1]],\\CALC[\\BXW/2],\\MWY]\\OP[\\V[\\CALC[\\PV+1]],255,\\NNUM[\\V[\\CALC[\\PV+5]]]]","Macro20":"2番をフェードアウト:\\OP[\\V[\\CALC[\\PV+1]],0,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+1]]]","Macro21":"3番をフェードさせながら右からスライドイン:\\SP[\\V[\\CALC[\\PV+2]],\\CALC[\\BXW+240],\\MWY]\\MP[\\V[\\CALC[\\PV+2]],\\CALC[\\BXW-240],\\MWY,\\V[\\CALC[\\PV+5]]]\\OP[\\V[\\CALC[\\PV+2]],255,\\VI[\\CALC[\\PV+5],5]]","Macro22":"3番をフェードさせながら右にスライドアウト:\\OP[\\V[\\CALC[\\PV+2]],0,\\V[\\CALC[\\PV+5]]]\\MP[\\V[\\CALC[\\PV+2]],\\CALC[\\BXW+240],\\MWY,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+2]]]","Macro23":"3番をフェードさせながら左からスライドイン:\\SP[\\V[\\CALC[\\PV+2]],-240,\\MWY]\\MP[\\V[\\CALC[\\PV+2]],240,\\MWY,\\V[\\CALC[\\PV+5]]]\\OP[\\V[\\CALC[\\PV+2]],255,\\VI[\\CALC[\\PV+5],5]]","Macro24":"3番をフェードさせながら左にスライドアウト:\\OP[\\V[\\CALC[\\PV+2]],0,\\V[\\CALC[\\PV+5]]]\\MP[\\V[\\CALC[\\PV+2]],-240,\\MWY,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+2]]]","Macro25":"3番を右側にフェードイン:\\SP[\\V[\\CALC[\\PV+2]],\\CALC[\\BXW-240],\\MWY]\\OP[\\V[\\CALC[\\PV+2]],255,\\V[\\CALC[\\PV+5]]]","Macro26":"3番を左側にフェードイン:\\SP[\\V[\\CALC[\\PV+2]],240,\\MWY]\\OP[\\V[\\CALC[\\PV+2]],255,\\V[\\CALC[\\PV+5]]]","Macro27":"3番を4番にフェードチェンジ:\\CFP[\\V[\\CALC[\\PV+2]],\\V[\\CALC[\\PV+3]],\\V[\\CALC[\\PV+5]]]","Macro28":"3番を4番にターンチェンジ:\\CP[\\V[\\CALC[\\PV+2]],\\V[\\CALC[\\PV+3]],\\V[\\CALC[\\PV+5]]]","Macro29":"3番を画面中央にフェードイン:\\SP[\\V[\\CALC[\\PV+2]],\\CALC[\\BXW/2],\\MWY]\\OP[\\V[\\CALC[\\PV+2]],255,\\NNUM[\\V[\\CALC[\\PV+5]]]]","Macro30":"3番をフェードアウト:\\OP[\\V[\\CALC[\\PV+2]],0,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+2]]]","Macro31":"4番をフェードさせながら右からスライドイン:\\SP[\\V[\\CALC[\\PV+3]],\\CALC[\\BXW+240],\\MWY]\\MP[\\V[\\CALC[\\PV+3]],\\CALC[\\BXW-240],\\MWY,\\V[\\CALC[\\PV+5]]]\\OP[\\V[\\CALC[\\PV+3]],255,\\VI[\\CALC[\\PV+5],5]]","Macro32":"4番をフェードさせながら右にスライドアウト:\\OP[\\V[\\CALC[\\PV+3]],0,\\V[\\CALC[\\PV+5]]]\\MP[\\V[\\CALC[\\PV+3]],\\CALC[\\BXW+240],\\MWY,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+3]]]","Macro33":"4番をフェードさせながら左からスライドイン:\\SP[\\V[\\CALC[\\PV+3]],-240,\\MWY]\\MP[\\V[\\CALC[\\PV+3]],240,\\MWY,\\V[\\CALC[\\PV+5]]]\\OP[\\V[\\CALC[\\PV+3]],255,\\VI[\\CALC[\\PV+5],5]]","Macro34":"4番をフェードさせながら左にスライドアウト:\\OP[\\V[\\CALC[\\PV+3]],0,\\V[\\CALC[\\PV+5]]]\\MP[\\V[\\CALC[\\PV+3]],-240,\\MWY,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+3]]]","Macro35":"4番を右側にフェードイン:\\SP[\\V[\\CALC[\\PV+3]],\\CALC[\\BXW-240],\\MWY]\\OP[\\V[\\CALC[\\PV+3]],255,\\V[\\CALC[\\PV+5]]]","Macro36":"4番を左側にフェードイン:\\SP[\\V[\\CALC[\\PV+3]],240,\\MWY]\\OP[\\V[\\CALC[\\PV+3]],255,\\V[\\CALC[\\PV+5]]]","Macro37":"4番を5番にフェードチェンジ:\\CFP[\\V[\\CALC[\\PV+3]],\\V[\\CALC[\\PV+4]],\\V[\\CALC[\\PV+5]]]","Macro38":"4番を5番にターンチェンジ:\\CP[\\V[\\CALC[\\PV+3]],\\V[\\CALC[\\PV+4]],\\V[\\CALC[\\PV+5]]]","Macro39":"4番を画面中央にフェードイン:\\SP[\\V[\\CALC[\\PV+3]],\\CALC[\\BXW/2],\\MWY]\\OP[\\V[\\CALC[\\PV+3]],255,\\NNUM[\\V[\\CALC[\\PV+5]]]]","Macro40":"4番をフェードアウト:\\OP[\\V[\\CALC[\\PV+3]],0,\\NNUM[\\V[\\CALC[\\PV+5]]]]\\HP[\\V[\\CALC[\\PV+3]]]","Macro41":"","Macro42":"","Macro43":"","Macro44":"","Macro45":"","Macro46":"","Macro47":"","Macro48":"","Macro49":"","Macro50":"","Macro51":"","Macro52":"","Macro53":"","Macro54":"","Macro55":"","Macro56":"","Macro57":"","Macro58":"","Macro59":"","Macro60":"","Macro61":"","Macro62":"","Macro63":"","Macro64":"","Macro65":"","Macro66":"","Macro67":"","Macro68":"","Macro69":"","Macro70":"","Macro71":"","Macro72":"","Macro73":"","Macro74":"","Macro75":"","Macro76":"","Macro77":"","Macro78":"","Macro79":"","Macro80":"","Macro81":"","Macro82":"","Macro83":"","Macro84":"","Macro85":"","Macro86":"","Macro87":"","Macro88":"","Macro89":"","Macro90.":"","Macro91":"","Macro92":"","Macro93":"","Macro95":"","Macro96":"","Macro97":"","Macro98":"","Macro99":""}},
{"name":"StandPictureEC","status":true,"description":"ver1.03/立ち絵を表示したり動かしたりする制御文字を追加します。","parameters":{"Show Front":"false","Use Preloading":"true","Use Delete Cache":"true","Default Anchor X":"0.5","Default Anchor Y":"1.0","Default Opacity":"0","Proxy Variable ID":"1","Cursor Name":"cursor"}},
{"name":"ExcludeAvoidance","status":true,"description":"ver1.01/素材削除機能で削除されるのを防ぐため、プラグインで定義のみを行います。","parameters":{"File00":"img/pictures/test2_0","File01":"img/pictures/test2_1","File02":"img/pictures/test2_2","File03":"img/pictures/test3_0","File04":"img/pictures/test3_1","File05":"img/pictures/test3_2","File06":"img/pictures/test4_0","File07":"img/pictures/test4_1","File08":"img/pictures/test4_2","File09":"img/pictures/test4_3","File10":"img/pictures/test4_4","File11":"img/pictures/test4_5","File12":"","File13":"","File14":"","File15":"","File16":"","File17":"","File18":"","File19":"","File20":"","File21":"","File22":"","File23":"","File24":"","File25":"","File26":"","File27":"","File28":"","File29":"","File30":"","File31":"","File32":"","File33":"","File34":"","File35":"","File36":"","File37":"","File38":"","File39":"","File40":"","File41":"","File42":"","File43":"","File44":"","File45":"","File46":"","File47":"","File48":"","File49":"","File50":"","File51":"","File52":"","File53":"","File54":"","File55":"","File56":"","File57":"","File58":"","File59":"","File60":"","File61":"","File62":"","File63":"","File64":"","File65":"","File66":"","File67":"","File68":"","File69":"","File70":"","File71":"","File72":"","File73":"","File74":"","File75":"","File76":"","File77":"","File78":"","File79":"","File80":"","File81":"","File82":"","File83":"","File84":"","File85":"","File86":"","File87":"","File88":"","File89":"","File90":"","File91":"","File92":"","File93":"","File94":"","File95":"","File96":"","File97":"","File98":"","File99":""}},
{"name":"BugFix_FontSmaller","status":true,"description":"ver1.00/テキストの一番最初に\\}を使うと、1行目だけ高さが調整されないバグを修正します。","parameters":{}},
{"name":"ExtendEscapeCharacters","status":true,"description":"ver1.00/制御文字を拡張します。","parameters":{"ToneRate":"4","WindowFrameSkip":"2","SetFace1":"","SetFace2":"","SetFace3":"","SetFace4":"","SetFace5":"","SetFace6":"","SetFace7":"","SetFace8":"","SetFace9":"","SetFace10":"","SetFace11":"","SetFace12":"","SetFace13":"","SetFace14":"","SetFace15":"","SetFace16":"","SetFace17":"","SetFace18":"","SetFace19":"","SetFace20":"","SetFace21":"","SetFace22":"","SetFace23":"","SetFace24":"","SetFace25":"","SetFace26":"","SetFace27":"","SetFace28":"","SetFace29":"","SetFace30":"","SetFace31":"","SetFace32":"","SetFace33":"","SetFace34":"","SetFace35":"","SetFace36":"","SetFace37":"","SetFace38":"","SetFace39":"","SetFace40":"","SetFace41":"","SetFace42":"","SetFace43":"","SetFace44":"","SetFace45":"","SetFace46":"","SetFace47":"","SetFace48":"","SetFace49":"","SetFace50":""}},
{"name":"CommonPopupCore","status":true,"description":"ver1.03/汎用的なポップアップの仕組みを提供するためのベースプラグインです。","parameters":{"Text Back Color":"rgba(0,0,0,0.6)","Text Back FileName":"popup_back%d"}},
{"name":"GetInformation","status":true,"description":"ver1.10/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。","parameters":{"Info Disable Switch Id":"20","Use Battle Info":"true","Use Rewards Info":"true","Info Font Size":"20","Info Count":"120","Info Delay":"20","Info MoveWait":"100","Info MoveFade":"10","Info Position":"","Info Slide Action":"","Info Sup X":"0","Info Sup Y":"0","Gold Icon Index":"314","Battle Show List":"item,gold,exp,skill,params,level,abp,classLevel","Get Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[24]手に入れた！","Lost Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[2]失った・・・","Get Item Text":"「\\I[_icon]_name」 を\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text":"「\\I[_icon]_name」 を\\C[2]失った・・・\\n\\C[6]_desc1","Get Item Text Num":"「\\I[_icon]_name」 を\\C[14]_num個\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text Num":"「\\I[_icon]_name」を\\C[14]_num個\\C[2]失った・・・\\n\\C[6]_desc1","Get Skill Text":"_actorは「\\I[_icon]_name」 を\\C[24]覚えた！\\n\\C[6]_desc1","Lost Skill Text":"_actorは「\\I[_icon]_name」を \\C[2]忘れてしまった・・・\\n\\C[6]_desc1","Exp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Exp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Lv Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Lv Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Param Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Param Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Abp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Abp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Class Lv Up Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Class Lv Down Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・"}},
{"name":"PopupMessage","status":true,"description":"ver1.01/メッセージの表示をポップアップに変更する制御文字_pum[delay,x,y,action]を追加します。","parameters":{"Pop Message FontSize":"20","Pop Message Count":"180"}}
];