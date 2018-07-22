import React, {Component} from 'react';
import { withSiteData } from 'react-static';
import Header from './header';
import Statement from "containers/sections/statement";
import Education from "containers/sections/education";
import ProgrammingSkills from "containers/sections/programming";
import Work from "containers/sections/work";
import Languages from "containers/sections/languages";
import Projects from "containers/sections/projects";
import SoftwareSkills from "containers/sections/software";
import Hobbies from "containers/sections/hobbies";
import Contact from "containers/sections/contact";
import Footer from "containers/sections/footer";

class Home extends Component {
  constructor(){
    super();
    this.state = {
      showHide: {
        sta: false,
        edu: false,
        prog: false,
        work: false,
        lang: false,
        soft: false,
        hobbies: false,
        contact: false,
      },
    };
    this.showHideSwap = showHideSwap.bind(this);
    this.show = show.bind(this);
    this.handleResize = whenResize.bind(this);
    this.handleResize();
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render(){
      return (
        <div className={("main-wrapper")+(this.state.media == "mobile"?"-m":this.state.media == "desktop"?"":"")}>
          <Header navListener={this.show} forMedia={this.state.media} />
          <main>
            <Statement showHide={this.state.showHide["sta"]} onClick={() => this.showHideSwap("sta")} forMedia={this.state.media} />
            <Education showHide={this.state.showHide["edu"]} onClick={() => this.showHideSwap("edu")} forMedia={this.state.media} />
            <ProgrammingSkills showHide={this.state.showHide["prog"]} onClick={() => this.showHideSwap("prog")} forMedia={this.state.media} />
            <Work showHide={this.state.showHide["work"]} onClick={() => this.showHideSwap("work")} forMedia={this.state.media} />
            <Languages showHide={this.state.showHide["lang"]} onClick={() => this.showHideSwap("lang")} forMedia={this.state.media} />
            <Projects showHide={this.state.showHide["proj"]} onClick={() => this.showHideSwap("proj")} forMedia={this.state.media} />
            <SoftwareSkills showHide={this.state.showHide["soft"]} onClick={() => this.showHideSwap("soft")} forMedia={this.state.media} />
            <Hobbies showHide={this.state.showHide["hobbies"]} onClick={() => this.showHideSwap("hobbies")} forMedia={this.state.media} />
            <Contact forMedia={this.state.media} />
          </main>
          <Footer />
        </div>
    )
  }
}

function showHideSwap(section){
  this.setState((prevState) => {
    console.log(prevState)
    prevState.showHide[section] = !prevState.showHide[section];
    const obj = {...prevState};
    console.log(obj)
    return obj;
  }
  );
}

function show(section){
  this.setState((prevState) => {
    console.log(prevState)
    prevState.showHide[section] = true;
    const obj = {...prevState};
    console.log(obj)
    return obj;
  }
  );
}

function whenResize(){
  let w = 0;
  let h = 0;
  if (typeof document !== 'undefined') {
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
  let media = "mobile";
  if (w<1000) {
    media = "mobile";
  } else {
    media = "desktop";
  }
  this.setState((prevState) => {
    return {...prevState, media}
  });
}
// function whenMobile(){
//    document.getElementById('myAbst').className="myAbst-m";
//    document.getElementsByTagName('body')[0].className="body-m";
//    document.getElementsByTagName('footer')[0].className="footer-m";
//    document.getElementById('edu-entries').className="edu-entries-m";
//    document.getElementById('worklist').className="worklist-m";
//    document.getElementsByTagName('nav')[0].className="nav-m";
//    var h1 = document.getElementsByTagName('h1');
//    for(var i =0;i<h1.length;i++){
//       h1[i].className="h1-m";
//    }
// }
// function whenDesktop(){
//    document.getElementById('myAbst').className="myAbst";
//    document.getElementsByTagName('body')[0].className="";
//    document.getElementsByTagName('footer')[0].className="";
//    document.getElementById('edu-entries').className="edu-entries";
//    document.getElementById('worklist').className="worklist";
//    document.getElementsByTagName('nav')[0].className="";
//    var h1 = document.getElementsByTagName('h1');
//    for(var i =0;i<h1.length;i++){
//       h1[i].className="";
//    }
// }


export default Home;
