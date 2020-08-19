const projectName = "random-quote-machine";
localStorage.setItem('example_project', 'Randowm Quote Machine');
let quotesData;

function inIframe () { 
    try { return window.self !== window.top; }
    catch (e) { return true; } }


var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '', currentAuthor = '';
function openURL(url){
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }