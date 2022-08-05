// ==UserScript==
// @name         個人用網頁清爽腳本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @match        https://www.zhihu.com/*
// @match        https://www.bilibili.com/video/*
// @match        https://space.bilibili.com/*
// @match        https://t.bilibili.com/*
// @match        https://twitter.com/*
// @match        https://tieba.baidu.com/index.html
// @match        http://123.baidu.com/*
// @match        https://www.baidu.com/*
// @match        https://www.artstation.com/*
// @match        https://docs.unrealengine.com/*
// @author       DaiZiLing
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @grant        GM_addStyle
// @grant        unsafeWindow
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js

// ==/UserScript==
// 本腳本僅供個人學習，朋友間交流使用。僅包含美化網頁佈局的功能
// 本腳本不包含任何 抓取、收集用戶、監聽、獲取 cookie 、攔截、商業、傳輸、破解、購物、惡意外部依賴 等行為

/* globals jQuery, $, waitForKeyElements */

let weburl = unsafeWindow.location.href

if (weburl.indexOf('bilibili.com/video') != -1) // 嗶哩嗶哩播放視頻界面
{
    GM_addStyle(`.bpx-player-top-left-follow {display:none !important;}`); // 視頻左上角的關注引導
    GM_addStyle(`.ad-report {display:none !important;}`); // 彈幕列表下拉菜單中的 “建模接單廣告”
    GM_addStyle(`#activity_vote {display:none !important;}`); // 評論區上方的遊戲創作邊界活動
    GM_addStyle(`#live_recommand_report {display:none !important;}`); // “大家圍觀的直播”

    GM_addStyle(`.bilibili-player-video-popup {display:none !important;}`);
    GM_addStyle(`.bpx-player-popup {display:none !important;}`); // 視頻界面三連彈窗

    GM_addStyle(`.bpx-player-link {display:none !important;}`);
    GM_addStyle(`.bilibili-player-link-wrap {display:none !important;}`); // 視頻界面推薦播放彈窗

    GM_addStyle(`.bpx-player-score {display:none !important;}`);
    GM_addStyle(`.bilibili-player-score-wrap {display:none !important;}`); // 視頻界面評分彈窗

    GM_addStyle(`.bpx-player-reserve {display:none !important;}`);
    GM_addStyle(`.bilibili-player-reserve-wrap {display:none !important;}`); // 視頻預約彈窗

    /* GM_addStyle (`.v-popover-wrap {display:none !important;}`); // 會員購分區的進入按鈕 */
    /* visibility: hidden; */
}

if (weburl.indexOf('space.bilibili.com') != -1) //嗶哩嗶哩個人界面
{
    $("li:contains('游戏中心')").remove();
    $("li:contains('会员购')").remove();
    $("li:contains('漫画')").remove();
    $("li:contains('赛事')").remove();
    $("li:contains('下载客户端')").remove();
}

if (weburl.indexOf('t.bilibili.com') != -1) //嗶哩嗶哩動態界面,TODO
{
    // document.body.innerHTML = document.body.innerHTML.replace('>游戏中心',' style="display:none !important;">游戏中心');
    $("li:contains('会员购')").remove();
    $("li:contains('漫画')").remove();
    $("li:contains('赛事')").remove();
    $("li:contains('下载客户端')").remove();

    GM_addStyle(`.bili-dyn-banner {display:none !important;}`);
}

if (weburl.indexOf('zhihu.com/question') != -1) // 知乎回答頁面，加寬了 380 pixels
{
    GM_addStyle(`.QuestionHeader-title {width: 1074px margin-top: 30px; !important;}`); // 問題標題
    GM_addStyle(`.css-eew49z {width: 1030px !important;}`); // 問題描述
    GM_addStyle(`.Card.css-l8qto0 {width: 1074px !important;}`); // 最新進展
    GM_addStyle(`.QuestionAnswers-answers {width: 1074px !important;}`); // 問題的回答
    GM_addStyle(`.Question-mainColumn {width: 1074px !important;}`); // 回答底板
    GM_addStyle(`.Card.AnswerAuthor {display:none !important;}`); // 關於作者
    GM_addStyle(`.css-1k7a5k5 {width: 1010px !important;}`); // 問題相關方介紹

    GM_addStyle(`.Question-mainColumn {width: 1074px !important;}`); // 回答底板
    GM_addStyle(`.Card.AnswerAuthor {display:none !important;}`); // 關於作者
    GM_addStyle(`.Card.css-oyqdpg {display:none !important;}`); // 相關問題

    // document.body.innerHTML = document.body.innerHTML.replace
    // ('zh-lightbox-thumb lazy" width="1080"','zh-lightbox-thumb lazy" height="1080"');  

    // document.body.innerHTML = document.body.innerHTML.replace
    // ('zh-lightbox-thumb lazy" width="1079"','zh-lightbox-thumb lazy" height="1079"');  
    // 由于移动端的截图普遍高度在2000px以上，在电脑端看起来，即使是略缩图也无比地大。这里优化了手机截图略缩图在 PC 端的观看效果
    // 故针对于常见手机分辨率的窄边作出优化（比如1080），点开仍然是原图。
    // 这玩意儿对性能影响极大，TODO 了

}

if (weburl.indexOf('zhihu.com/follow') != -1) //知乎follow 
{
    GM_addStyle(`.Pc-feedAd-container {display:none !important;}`); //推送廣告，家具移民大專考消防證之類的
}

if (weburl.indexOf('zhihu.com') != -1) // 知乎主界面
{
    GM_addStyle(`.Pc-card {display:none !important;}`); // PC 端的卡片廣告

    $("li:contains('学习')").remove();
    $("li:contains('会员')").remove();
    $("li:contains('发现')").remove();
    // 最頂上的幾個按鈕

    $("li:contains('Live')").remove();
    $("li:contains('书店')").remove();
    $("li:contains('圆桌')").remove();
    $("li:contains('付费咨询')").remove();
    $("li:contains('百科')").remove();
    // 右邊雜七雜八用不到的圓桌啥的

    GM_addStyle(`.GlobalSideBar-balanceItem {display:none !important;}`); // 我的餘額
    GM_addStyle(`.GlobalSideBar-couponItem {display:none !important;}`); // 我的禮券
    GM_addStyle(`.GlobalSideBar-copyrightItem {display:none !important;}`); // 版權服務中心
    // 下面的禮券之類的玩意兒

    GM_addStyle(`.Footer {display:none !important;}`); // 我的餘額
    // 舉報專區、服務熱線等等，TODO

    GM_addStyle(`.GlobalSideBar-categoryItem {margin-left: 90px !important;}`);
    // 專欄按鈕尺寸優化

    var GlobalWrite = document.getElementsByClassName("GlobalWriteV2-navTop");
    /* for (let i = 1; i < GlobalWrite.length; i++) {} */
    GlobalWrite[1].parentElement.removeChild(GlobalWrite[1]);
    // 刪除發視頻投稿按鈕,TODO

    /* document.body.innerHTML = document.body.innerHTML.replace('>视频',' style="display:none !important;">视频'); */
    // 視頻選項卡刪除

}

if (weburl.indexOf('twitter.com') != -1) // 推特
{
    /* $( "div:contains('推荐'')" ).remove(); // TL的推薦廣告 */
}

if (weburl.indexOf('tieba.baidu.com/index') != -1) // 貼吧個人主頁
{
    GM_addStyle(`.top-sec {display:none !important;}`); // 頂上的跑馬燈推薦
    GM_addStyle(`.right-sec {display:none !important;}`); // 右邊的一坨，全都不要
    GM_addStyle(`#spage_game_tab_wrapper {display:none !important;}`); // 遊戲
    GM_addStyle(`.aggregate_entrance_wrap {display:none !important;}`); // 貼吧精選

    GM_addStyle(`.u-f-t {display:none !important;}`);
    GM_addStyle(`.f-d-w {display:none !important;}`); // 貼吧分類

    GM_addStyle(`#spage-tbshare-container {display:none !important;}`); // 右側的分享
    GM_addStyle(`.tbui_aside_float_bar {display:none !important;}`); // 輔助模式
    GM_addStyle(`.footer {display:none !important;}`); // 最底下的工商信息

    // GM_addStyle(`#likeforumwraper {width: 800px !important;}`);
    /* GM_addStyle (`.content-sec {width: 800px !important;}`); */
    /* GM_addStyle (`.bottom-bg {padding-bottom: 10px !important;}`); */
    // 美化拓寬個人貼吧列表 

    GM_addStyle(`.u_official {display:none !important;}`); // 官方號服務中心
    GM_addStyle(`.u_member {display:none !important;}`); // 會員
    GM_addStyle(`.pre_icon_wrap.pre_icon_wrap_theme2 {display:none !important;}`); // 皇冠
    GM_addStyle(`.user_score {display:none !important;}`); // 皇冠
    GM_addStyle(`.user_tbmall.clearfix {display:none !important;}`); // 皇冠

    document.body.innerHTML = document.body.innerHTML.replace('>采购', ' style="display:none !important;">采购');
    document.body.innerHTML = document.body.innerHTML.replace('>文库', ' style="display:none !important;">文库');
    document.body.innerHTML = document.body.innerHTML.replace('>知道', ' style="display:none !important;">知道');
    document.body.innerHTML = document.body.innerHTML.replace('>视频', ' style="display:none !important;">视频');
    document.body.innerHTML = document.body.innerHTML.replace('>资讯', ' style="display:none !important;">资讯');
    document.body.innerHTML = document.body.innerHTML.replace('>网页', ' style="display:none !important;">网页');
}

if (weburl.indexOf('baidu.com') != -1) // 百度檢索
{
    // $( "div:contains('采购')" ).remove(); // 採購
    GM_addStyle(`.cr-content.container_2AHLd {display:none !important;}`); // 相關網址
    GM_addStyle(`.FYB_RD {display:none !important;}`); // 百度熱搜
    GM_addStyle(`.ad-block.ad-block-0 {display:none !important;}`); // 商業推廣
    GM_addStyle(`.se_common_hint {display:none !important;}`); // 百度保障

    document.body.innerHTML = document.body.innerHTML.replace('display:block !important;visibility:visible !important;',
        'display:none !important;');

    // $( "div:contains('广告')" ).remove(); // 廣告
    // GM_addStyle (`.result.c-container.new-pmd {display:none !important;}`); // 廣告,TODO
    // 流氓的百度為了阻止它的廣告被 block，於是設置了可見性為最高級

    GM_addStyle(`.c-result-content {display:none !important;}`); // 廣告
    GM_addStyle(`#sidebar_switcher {display:none !important;}`); // 廣告
    // 移除推薦，比如搜紅警，右邊會出現傳奇，這類的推薦

    document.body.innerHTML = document.body.innerHTML.replace('>hao123', ' style="display:none !important;">hao123');
    document.body.innerHTML = document.body.innerHTML.replace('>视频', ' style="display:none !important;">视频');
    GM_addStyle(`.s-bottom-layer.s-isindex-wrap {display:none !important;}`); // 百度主頁的底部工商信息
    document.body.innerHTML = document.body.innerHTML.replace('>视频', ' style="display:none !important;">视频');
}

if (weburl.indexOf('artstation.com/artwork') != -1) // A站作品界面的广告
{
    GM_addStyle(`.small.text-muted.mb5.ng-star-inserted {display:none !important;}`);
    GM_addStyle(`.marketplace-card-thumbnail {display:none !important;}`);
    GM_addStyle(`.marketplace-card-wrapper {display:none !important;}`);
    // From the ArtStation Marketplace

    GM_addStyle(`.marketplace-card-wrapper.marketplace-card-popular.ng-star-inserted {display:none !important;}`);
    // Link of http://schema.org/Product

    GM_addStyle(`.d-none.d-sm-block {display:none !important;}`);
    GM_addStyle(`.d-none.d-sm-block.ng-star-inserted {display:none !important;}`);
    // Artstation Learning

    GM_addStyle(`.col-xs-6 {top: 18px !important;}`);
    // change offset of Like Button
}

if (weburl.indexOf('docs.unrealengine.com') != -1) // 虚幻引擎官网教程
{
    // document.body.innerHTML = document.body.innerHTML.replace
    // ('rgb(208, 208, 208)','rgb(160, 160, 160)');
    // 更改右侧滑动块的颜色， 这玩意儿经常看不见。
}
