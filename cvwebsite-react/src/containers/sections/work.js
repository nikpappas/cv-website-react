import React from "react";
export default (props) => (
  <section className="work">
    <div id="workAnchor"></div>
    <h1 onClick={props.onClick}>Employment Experience +</h1>
    <div id="worklist" className={"worklist "+(props.showHide?"displayed":"not-displayed")}>
      <h3>Present - Consultant Software Developer (Scott Logic, Bristol)</h3>
      <p>
        Developing bespoke software. <br /> <a>Projects</a><br/>
        ({getCurrentWorkDuration()} months, Full-Time, Paid)
      </p>
      <hr/>
      <h3>2016 - Motion Tracking Annotation (SHPERE, Bristol)</h3>
      <p>Annotating raw data from motion detection cameras <br/>with VICON&#39;s Nexux Motion Capture Software.<br/> (2 months, Part-Time, Paid)</p><hr/>
      <h3>2015 - Electrician Assistant (Bristol Sparks, Bristol)</h3>
      <p> Installing electrical circuits and CCTV systems.<br/> (2 months, Part-Time, Paid)</p><hr/>
      <h3>2015 - Bartender (Hole In The Wall, Bristol)</h3>
      <p> Serving drinks and food and making sure the bar is organised and clean. <br/>(4 months, Full-Time, Paid)</p><hr/>
      <h3>2013 - Research Assistant in (GTE, Madrid) </h3>
      <p> Calculating simple structures for construction.<br/>
       Researching <strong>folding trusses</strong> as a future investment. <br/>(4 months, Full-Time, Internship)</p><hr/>
    </div>
  </section>
);
function getCurrentWorkDuration(){
  const today = new Date();
  const scottLogicStart = new Date(2017,2,6);
  return (today.getYear() - scottLogicStart.getYear()) * 12 + (today.getMonth() - scottLogicStart.getMonth());
}
