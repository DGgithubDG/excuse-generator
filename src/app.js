/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["a", "the"];
  let subject = ["jogger", "racoon", "driver", "dog", "comedian", "pinecone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possesion = ["HOMEWORK", "toe", "car", "shoe"];
  let where = ["on the street", "in the driveway", "next to my house"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possesion.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possesion[posIndex] +
    " " +
    where[wheIndex]
  );
};
