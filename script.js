var edu      = document.getElementById('edu-entries');
var skills   = document.getElementById('skilList');
var work     = document.getElementById('worklist');
var language = document.getElementById('languagelist');
var software = document.getElementById('softList');
var proj     = document.getElementById('projectlist');
// ------- skills
var javaProg = document.getElementsByClassName('textJava')[0];
var cProg    = document.getElementsByClassName('textC')[0];
var htmlProg = document.getElementsByClassName('textHtml')[0];
var sqlite   = document.getElementsByClassName('textSQL')[0];
var nodeJS   = document.getElementsByClassName('textJS')[0];
var matlab   = document.getElementsByClassName('textMAT')[0];
var python   = document.getElementsByClassName('textPy')[0];
var cpp      = document.getElementsByClassName('textCpp')[0];
var progLang = [javaProg, cProg, htmlProg, sqlite, nodeJS, python, cpp, matlab];
// ------- spoken languages
var english  = document.getElementsByClassName('eng')[0];
var greek    = document.getElementsByClassName('gre')[0];
var spanish  = document.getElementsByClassName('spa')[0];
var german    = document.getElementsByClassName('ger')[0];
var spokLang = [english, greek, spanish, german];
// ------- misc
var hobbies = document.getElementsByClassName('hobbyList')[0];
var perInfo  = document.getElementsByClassName('personalInfo')[0];
var uobList = document.getElementsByClassName("uob-unitList")[0];
var duthList = document.getElementsByClassName("duth-unitList")[0];
var anatoliaList = document.getElementsByClassName('anatolia-extraList')[0];
var header = document.getElementsByTagName('header');
function showClick(className){
  var style = window.getComputedStyle(className);
  if(style.getPropertyValue("display")=="none"){
    className.style.display = "inline-block";
  } else{
    className.style.display = "none";
  }
}
function showSkill(className,list){
  closeSkill(list);
  className.style.display = "inline-block";
  // new---start
  skills.style.width="80%";
  skills.style.marginTop="3%";
  // skills[0].style.float="right";
  // new --end
}
function closeSkill(list){
  skills.style.width="45%";
  skills.style.marginTop="8%";
  for(var i=0; i<list.length;i++){
    list[i].style.display = "none";
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
function whenMobile(){
  document.getElementById('myAbst').className="myAbst-m";
  document.getElementsByTagName('body')[0].className="body-m";
  document.getElementsByTagName('footer')[0].className="footer-m";
  document.getElementById('edu-entries').className="edu-entries-m";
  document.getElementById('worklist').className="worklist-m";

}
function whenDesktop(){
  document.getElementById('myAbst').className="myAbst";
  document.getElementsByTagName('body')[0].className="";
  document.getElementsByTagName('footer')[0].className="";
  document.getElementById('edu-entries').className="edu-entries";
  document.getElementById('worklist').className="worklist";
}
function whenResize(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  if(w<1000) whenMobile();
  else whenDesktop();
  // alert("W:"+w+"\n"+"H:"+h);
  console.log("W:"+w+"\n"+"H:"+h);
  // console.log("height:"+window.screen.availHeight);
  // console.log("width:"+window.screen.availWidth);
}
function setUp(){
  var expImg = document.getElementById('projExp');
  expImg.onmouseenter = function(){
    expImg.setAttribute("src", "images/projects/experiment-fem.png");
  };
  expImg.onmouseleave = function(){
    expImg.setAttribute("src", "images/projects/experiment-real.png");
  };
  window.addEventListener("scroll", whenScrolling);
  window.addEventListener("resize", whenResize);
  whenResize();
}
window.onload = setUp();
