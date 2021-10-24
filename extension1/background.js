let color = '#3aa757';
let fsize = '30px';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  chrome.storage.sync.set({ fsize });
  console.log('Default size set to %cgreen', `fsize: ${fsize}`);
});
