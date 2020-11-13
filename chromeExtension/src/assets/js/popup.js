console.log("123");
// 크롬 확장의 기능 중 tabs와 관련된 기능 
// 컨텐츠 페이지를 대상으로 코드 실행
// chrome.tabs.executeScript({
//     code: 'var bodyText = document.querySelector("body").innerText;alert(bodyText);'
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    code: 'var bodyText = document.querySelector("body").innerText;console.log(bodyText);'
    //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
}); 

// $(document).ready(function(){
//     alert("12");
//     console.log("document");

//     $("#h12").click(function(){
//         console.log("1 popup.js");
//     })
//     console.log("2 popup.js");
//     console.log();
// });