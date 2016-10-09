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
var progLang = [javaProg, cProg, htmlProg];
// ------- spoken languages
var english  = document.getElementsByClassName('eng');
var greek    = document.getElementsByClassName('gre');
var spanish  = document.getElementsByClassName('spa');
var german    = document.getElementsByClassName('ger');
var perInfo  = document.getElementsByClassName('personalInfo');
var spokLang = [english, greek, spanish, german];
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
