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
var matlab   = document.getElementsByClassName('textMAT');
var python   = document.getElementsByClassName('textPy');
var cpp      = document.getElementsByClassName('textCpp');
var progLang = [javaProg, cProg, htmlProg, sqlite, nodeJS, python, cpp, matlab];
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
  // new---start
  skills[0].style.width="80%";
  skills[0].style.marginTop="3%";
  // skills[0].style.float="right";
  // new --end
}
function closeSkill(list){
  skills[0].style.width="45%";
  skills[0].style.marginTop="8%";
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
function whenMobile(){
  document.getElementById('myAbst').className="myAbst-m";
  document.getElementsByTagName('body')[0].className="body-m";
  document.getElementsByTagName('footer')[0].className="footer-m";
  document.getElementById('edu-entries').className="edu-entries-m";
  document.getElementById('worklist').className="worklist-m";
  // var eduEnt = document.getElementsByClassName('edu-entries')[0];
  // eduEnt.style.width="70%";
  // var eduLogo = eduEnt.getElementsByClassName('logo');
  // for(var i=0;i<eduLogo.length;i++){
  //   eduLogo[i].style.transform="scale(.7)";
  // }

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
window.addEventListener("scroll", whenScrolling);
window.addEventListener("resize", whenResize);
whenResize();
