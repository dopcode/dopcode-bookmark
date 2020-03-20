var TAB_ID_MAIL = 0;
var TAB_ID_REDMINE = 0;
var TAB_ID_TASKIT = 0;

var MENU_ID_MAIL = "MAIL";
var MENU_ID_REDMINE = "REDMINE";
var MENU_ID_TASKIT = "TASKIT";

var URL_MAIL = "http://mail.google.com/";
var URL_REDMINE = "http://snow.cyberdigm.co.kr/redmine/projects/59_12--cloudium-----/issues?query_id=387";
var URL_TASKIT = "http://taskit.cyberdigm.co.kr/";

chrome.contextMenus.create({
    "id": MENU_ID_REDMINE,
    "title": "Redmine"
});
chrome.contextMenus.create({
    "id": MENU_ID_TASKIT,
    "title": "Taskt"
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
    case MENU_ID_REDMINE:
        chrome.tabs.create({
            url: URL_REDMINE
        });        
        break;
    case MENU_ID_TASKIT:
        chrome.tabs.create({
            url: URL_TASKIT
        });                
        break;
    default:
        break;
    }
});
