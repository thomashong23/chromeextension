
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
    //function: setFontSize,
  });
});
resetColor.addEventListener("click", async () => {
  let [tab2] = await chrome.tabs.query({ active: true, currentWindow: true })
  chrome.scripting.executeScript({
    target: { tabID: tab2.id },
    function: resetPageColor,
  });
});
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.color = color;
  });
}
function resetPageColor() {

  document.body.style.color = '';
  console.log("hellllllo")


}

// The body of this function will be executed as a content script inside the
// current page


// function setFontSize() {
//   document.body.style.color = "#e8453c";
//)