"use strict";

//Covid API

const casesId = document.getElementById("data");
const recoveredId = document.getElementById("recovered");
const deathsId = document.getElementById("deaths");

//Get Func

$(document).ready(function () {
  init();

  function init() {
    //API url
    const url = "https://corona.lmao.ninja/v2/continents?yesterday=true&sort";

    $.getJSON(url, function (data) {
      // Retrieving object
      let mydata = data[0];

      //Retrieving key values
      let cases = mydata.cases;
      let recovered = mydata.recovered;
      let deaths = mydata.deaths;

      //Adding values to  HTML
      casesId.innerHTML = cases;
      recoveredId.innerHTML = recovered;
      deathsId.innerHTML = deaths;
    });
  }
});

// Hamburger Menu

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

