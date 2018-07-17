import React from "react";

import skiImg from "images/hobbies/ski.jpg";
import capoeiraImg from "images/hobbies/capoeira.jpg";
import chessImg from "images/hobbies/chess.jpeg";
import climbingImg from "images/hobbies/climbing.jpg";
import photogImg from "images/hobbies/photog.jpg";
import musicProdImg from "images/hobbies/musicprodCrop.jpg";

const hobbies = [
  {name: "Skiing", imgSrc: skiImg},
  {name: "Capoeira", imgSrc: capoeiraImg},
  {name: "Chess", imgSrc: chessImg},
  {name: "Climbing", imgSrc: climbingImg},
  {name: "Photography", imgSrc: photogImg},
  {name: "Digital Music Production", imgSrc: musicProdImg}
];


export default (props) => (
  <section className="hobbies">
  <h1 onClick={props.onClick}>Hobbies +</h1>
  <ul className={"hobbylist "+(props.showHide?"displayed":"not-displayed")}>
    {
      hobbies.map(x => (
        <li jey={x.name}>
          <div className="tooltip">
            <span className="tooltiptext">{x.name}</span>
            <img src={x.imgSrc} alt={x.name} />
          </div>
        </li>
      ))
    }
  </ul>
  </section>
);
