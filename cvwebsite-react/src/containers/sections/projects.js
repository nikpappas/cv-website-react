import React from "react";
import mamoProcessed from "images/projects/processed.png";
import rbsRealExperiment from "images/projects/experiment-real.png";
import diagnosedImage from "images/projects/experiment.jpg";
import imageProcCross from "images/projects/ImageProcCross.png";
import elvarceCom from "images/projects/elva.jpg";
import tomorrowsCom from "images/projects/tomorrows.png";
import guiPresentation from "videos/Video1.mp4";
import mamoFlowChart from "downloads/FlowChart.pdf";

export default (props) => (
  <section className="projects">
    <div id="projAnchor"></div>
    <h1 onClick={props.onClick}>Projects +</h1>
    <ul id="projectlist" className={"projectlist "+(props.showHide?"displayed":"not-displayed")}>
    <li>
      <h3>Mammography Interpretation Tool <br />
      using Computer Vision (University of Bristol Dissertation)</h3>
      <p>
        <strong>Convolutional Neural Networks</strong> (CNNs) are <strong>machine
        learning</strong> structures able to implement aspects of
        biological vision systems. They can be used
        in <strong>Computer Vision</strong> applications to recognise and classify
        objects in given imagery.
        <br /><br />
        This project aims at producing
        a <strong>mammary gland screening tool</strong> using CNNs.
        A tool that is, at least, able to segment volumes with
        densities that differ from the expected in a provided mammography
        sample. The project aims at highlighting suspected regions of
        malignant tumour in these segments. The system would
        ideally be able to assist doctors in the assessment of
        mammography samples.
      </p><br />
      <figure>
        <img className="projectImage" src={mamoProcessed} alt="Diagnosed Image" height="350" />
        <figcaption>Sample of an analysed X-ray mammography.</figcaption>
      </figure>
      <figure>
        <img className="projectImage" src={imageProcCross} alt="Processed Images" height="350" />
        <figcaption>Selection of image filters applied to a mammography.</figcaption>
      </figure>
      <p>
        The <strong>framework</strong> used for the CNNs is <a href="http://caffe.berkeleyvision.org/">Caffe</a>,
        a framework developed by <em>Berkeley Vision and Learning Center</em>.
      </p>
      <figure>
        <video className="projectImage" src={guiPresentation} alt="GUI Presentation" height="350" autoPlay loop />
        <figcaption>An actual clip from the project's Graphical User Interphase.</figcaption>
      </figure>
    </li>
    <li>
      <h3>Experimental Corroboration of<br /> Reduced Beam Section moment connections (DUTh Dissertation)</h3>
      <p>
        The aim of this project is to protect connections and columns in steel frames,
        from brittle failure, by the controlled weakening of the beam.

        This project included a full scale Eurocode compliant epxeriment and its
        corroboration from a <strong>Finite Element Analysis</strong> model run in
        <a target="blank" href="http://www.3ds.com/products-services/simulia/products/abaqus/">Abaqus/CAE</a>.
      </p><br />
      <figure>
        <img className="projectImage" src={diagnosedImage} alt="Diagnosed Image" height="350" />
        <figcaption>Overview of the experiment assembly.</figcaption>
      </figure>
      <figure>
        <img id="projExp" className="projectImage" src={rbsRealExperiment} alt="Processed Images" height="350" />
        <figcaption>Comparison of the resulting deformations between the real experimental component and the result of the simulation.</figcaption>
      </figure>
    </li>
    <li>
      <h3>University forum website database (University of Bristol)</h3>
      <p>
        This was a group project (4 people) for the <em>databases</em> unit.
        Each member of the group was responsible for the implementation of
        separate method, each one of which included an SQL query and the
        equivalent Java server method. Key part of the project's success were
        the productivity platforms and the <strong>test driven development</strong>.
        This project recieved <strong>best of className mark</strong> (100%).
      </p>
    </li>
    <li>
      <h3>Website of Artist (University of Bristol)</h3>
      <p>
        This project began with the <em>Web Technologies</em> unit and was later developed
        into a collaboration with a real artist. This project received best of className mark. <a target="blank" href="http://elvarce.com">Sample</a>
      </p>
        <figure>
          <a className="photoLink" target="blank" href="http://elvarce.com">
        <img className="projectImage" src={elvarceCom} alt="Sample of the website" height="350px" />
        </a>
          <figcaption>Final design of the home page.</figcaption>
        </figure>
    </li>
    <li>
       <h3>Web based real estate speculation game <strong>participate</strong></h3>
       <p>
         Candidate for the <a href="http://www.sgt.gr/eng/SPG1/?"><em>Tomorrows</em></a> exhibition.
      </p>
        <figure>
          <a className="photoLink" target="blank" href="http://tomorrows.com.s3-website-eu-west-1.amazonaws.com/">
            <img className="projectImage" src={tomorrowsCom} alt="Sample of the website" height="350px" />
          </a>
          <figcaption>The START screen, where the logo of the game can be seen.</figcaption>
        </figure>
      </li>
    </ul>
  </section>
);
// <embed src={mamoFlowChart} height="350px" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html" />
// <img className="projectImage" src={mamoFlowChart} height={"350px"} />
