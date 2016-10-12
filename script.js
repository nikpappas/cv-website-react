var edu      = document.getElementsByClassName('edu-entries');
var skills   = document.getElementsByClassName('skilList');
var work     = document.getElementsByClassName('worklist');
var language = document.getElementsByClassName('languagelist');
var software = document.getElementsByClassName('softList');
var proj     = document.getElementsByClassName('projectlist');
// ------- skills
var javaProg = document.getElementsByClassName('textJava');
var cProg    = document.getElementsByClassName('textC');
var htmlProg = document.getElementsByClassName('textHtml');
var sqlite   = document.getElementsByClassName('textSQL');
var nodeJS   = document.getElementsByClassName('textJS');
var python   = document.getElementsByClassName('textPy');
var cpp      = document.getElementsByClassName('textCpp');
var progLang = [javaProg, cProg, htmlProg, sqlite, nodeJS, python, cpp];
// ------- spoken languages
var english  = document.getElementsByClassName('eng');
var greek    = document.getElementsByClassName('gre');
var spanish  = document.getElementsByClassName('spa');
var german    = document.getElementsByClassName('ger');
var spokLang = [english, greek, spanish, german];
// ------- misc
var hobbies = document.getElementsByClassName('hobbyList');
var perInfo  = document.getElementsByClassName('personalInfo');
var uobList = document.getElementsByClassName("uob-unitList");
var duthList = document.getElementsByClassName("duth-unitList");
var anatoliaList = document.getElementsByClassName('anatolia-extraList');
var header = document.getElementsByTagName('header');
function showClick(className){
  var style = window.getComputedStyle(className[0]);
  if(style.getPropertyValue("display")=="none"){
    className[0].style.display = "inline-block";
  } else{
    className[0].style.display = "none";
  }
}
function showSkill(className,list){
  closeSkill(list);
  className[0].style.display = "inline-block";
}
function closeSkill(list){
  for(var i=0; i<list.length;i++){
    console.log(list[i]);
    list[i][0].style.display = "none";
  }
}
function closeClickSkill(className,list){
  closeSkill(list);
  showClick(className);
}
function whenScrolling(){
  var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
  if(top>5){
    header[0].className = "header-scrolled";
  }else{
    header[0].className ="";
  }
}
window.addEventListener("scroll", whenScrolling);
