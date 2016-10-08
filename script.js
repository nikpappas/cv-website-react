var edu      = document.getElementsByClassName('edu-entries');
var skills   = document.getElementsByClassName('skilList');
var work     = document.getElementsByClassName('worklist');
var language = document.getElementsByClassName('languagelist');
var software = document.getElementsByClassName('softList');
var proj     = document.getElementsByClassName('projectlist');
var javaProg = document.getElementsByClassName('textJava');
var cProg    = document.getElementsByClassName('textC');
var progLang = [javaProg, cProg];
function showClick(className){
  var style = window.getComputedStyle(className[0]);
  if(style.getPropertyValue("display")=="none"){
    className[0].style.display = "inline-block";
  } else{
    className[0].style.display = "none";
  }
}
function showSkill(className){
  for(var i=0; i<progLang.length;i++){
    console.log(progLang[i]);
    progLang[i][0].style.display = "none";
  }
  className[0].style.display = "inline-block";
}
