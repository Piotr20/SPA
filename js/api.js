 mapboxgl.accessToken =
      'pk.eyJ1IjoiZ2VvMjM5NiIsImEiOiJjazdkMTdlbTgwcWw5M2xtczVtMjMwanZnIn0.uQkYdlcY9PRmbuT_ocGcuQ';
 var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/geo2396/ckf74ig33439n19qlk83udscf',
      center: [10.150088, 56.117216],
      zoom: 14.0
 });

 var marker = new mapboxgl.Marker()
      .setLngLat([10.1997, 56.153876])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.154715, 56.1169118])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.206206, 56.1522238])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.158464, 56.131849])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.2058314, 56.1589012])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.2039354, 56.149292])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.1545136, 56.1162944])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.1515312, 56.1158134])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.153506, 56.117881])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.151844, 56.116578])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.1535593, 56.1161758])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.1533807, 56.1162376])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.223459, 56.088694])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.1917731, 56.1589859])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.20594, 56.1065844])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.2093286, 56.1586684])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.2050017, 56.1490821])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.2059281, 56.1513159])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.20594, 56.1528602])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.191969, 56.157934])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.2071004, 56.1554225])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.2063694, 56.1560452])
      .addTo(map);

 var marker = new mapboxgl.Marker()
      .setLngLat([10.2031852, 56.1538878])
      .addTo(map);




 //display of details after clicking on location in the map


 let pin = document.getElementsByClassName('mapboxgl-marker');
 let pinLength = pin.length;
 let popup = document.getElementById("details-going-up");










 let popupFunction = function () {
      popup.style.top = 'calc(100vh - 100px - 40vh)';
 };
 let popupGone = function () {
      popup.style.top = '100vh';
 };
 for (var i = 0; i < pinLength; i++) {
      pin[i].addEventListener('click', popupFunction, false);
 }
 /*
  for (var i = 0; i < pinLength; i++) {
       pin[i].addEventListener('blur', popupGone, false); 
  }
 */

 //source of live forecast api
 var settings = {
      "url": "https://besttime.app/api/v1/forecasts/live?api_key_private=pri_0bc6ad2618fe4bb0b9092c84f41b3010&venue_name=ARoS Aarhus Art Museum&venue_address=Aros Allé 2 8000 Aarhus Denmark ",

      "data": {
           'api_key_private': 'pri_0bc6ad2618fe4bb0b9092c84f41b3010',
           'venue_name': 'ARoS Aarhus Art Museum',
           'venue_address': 'Aros Allé 2 8000 Aarhus Denmark'
      },
      "method": "POST"
 };

 $.ajax(settings).done(function (response) {
      console.log(response);



      let itsUndefined = response.analysis;
      let detailsBG = document.getElementById("on-map-details");
      let iconBG = document.getElementById("icon-bg");
      let locationIcon = document.getElementById("location-icon");


      if (itsUndefined == undefined) {
           detailsBG.style.background = "#555555";
           iconBG.style.background = "#555555";
           locationIcon.style.opacity = '0';
           console.log('i work here');
      } else {
           let live_forecast = response.analysis.venue_live_busyness;
           console.log(live_forecast);



           //change of colors in container displaying details of place

           if (live_forecast > 0 && live_forecast < 20) {
                detailsBG.style.background = "#27d07d";
                iconBG.style.background = "#27d07d";
           }
           if (live_forecast >= 20 && live_forecast < 40) {
                detailsBG.style.background = "#95db76";
                iconBG.style.background = "#95db76";
           }
           if (live_forecast >= 40 && live_forecast < 60) {
                detailsBG.style.background = "#fbe570";
                iconBG.style.background = "#fbe570";
           }
           if (live_forecast >= 60 && live_forecast < 80) {
                detailsBG.style.background = "#fd9964";
                iconBG.style.background = "#fd9964";
           }
           if (live_forecast >= 80 && live_forecast <= 100) {
                detailsBG.style.background = "#ff5959";
                iconBG.style.background = "#ff5959";
           } else {
                detailsBG.style.background = "#555555";
                iconBG.style.background = "#555555";
                locationIcon.style.opacity = '0';


           };
           //change of position of location icon in gradient bar
           locationIcon.style.marginLeft = "calc(" + live_forecast + "vw / 2)";



      }
 })
 //Peter's code

 var settings = {
      "url": "https://besttime.app/api/v1/forecasts?api_key_private=pri_0bc6ad2618fe4bb0b9092c84f41b3010&venue_name=ARoS Aarhus Art Museum&venue_address=Aros Allé 2 8000 Aarhus Denmark ",
      "data": {
           'api_key_private': 'pri_0bc6ad2618fe4bb0b9092c84f41b3010',
           'venue_name': 'ARoS Aarhus Art Museum',
           'venue_address': 'Aros Allé 2 8000 Aarhus Denmark'
      },
      "method": "POST"
 };
 //getting data from above venue
 $.ajax(settings).done(function (response) {
      console.log(response);
      let data = response;
      let week = data.analysis;

      //  for (let i = 0; i <= 6; i++) {
      //       for (let j = 2; j <= 14; j = j + 2) {
      //            //getting crowdedness of this place from 8 to 20 every 2 hours j = 2 is truly 8am and j = 14 is 8pm
      //            busyness.push(week[i].hour_analysis[j].intensity_nr);
      //            //  week[i].hour_analysis[j].intensity_nr;
      //            console.log(busyness)
      //          
      //            for (let k = 0; k <= 6; k++) {
      //                 charts[k].style.height = busyness[k] + "px"
      //                 //trying to set a height of each chart using busyness
      //            }
      //       }
      //  }
      var date = new Date();
      var Day = date.getDay();
      if (Day == 0) {
           Day = 6;
      } else {
           Day = Day - 1;
      }
      console.log(Day);
      var busyness = [];
      busyness.push(week[Day].hour_analysis[2].intensity_nr + 3);
      busyness.push(week[Day].hour_analysis[4].intensity_nr + 3);
      busyness.push(week[Day].hour_analysis[6].intensity_nr + 3);
      busyness.push(week[Day].hour_analysis[8].intensity_nr + 3);
      busyness.push(week[Day].hour_analysis[10].intensity_nr + 3);
      busyness.push(week[Day].hour_analysis[12].intensity_nr + 3);
      busyness.push(week[Day].hour_analysis[14].intensity_nr + 3);

      console.log(busyness);
      const charts = document.querySelectorAll("#home .graph-wrapper .graph-column");
      for (let j = 0; j <= 6; j++) {
           if (busyness[j] === "9993" || busyness[j] === "N/A3") {
                busyness[j] = 0;
                charts[j].style.height = busyness[j];
           } else {
                charts[j].style.height = busyness[j] * 20 + "px";
                if (busyness[j] == 5) {
                     charts[j].style.backgroundColor = '#ff5959';
                }
                if (busyness[j] == 4) {
                     charts[j].style.backgroundColor = '#fd9964';
                }
                if (busyness[j] == 3) {
                     charts[j].style.backgroundColor = ' #fbe570';

                }
                if (busyness[j] < 3) {
                     charts[j].style.backgroundColor = '#27d07d';
                }
           }
      }

 });

 async function fetchVenues() {
      let url = `JSON/placelist.json`;
      let response = await fetch(url); // fetch and wait the response
      let data = await response.json(); // read response body and wait for parsing the JSON
      let places = data.places;
      appendPlaces(places);
 }
 fetchVenues();

 function appendPlaces(places) {
      let htmlTemplate = "";
      for (let place of places) {
           let name = place.venue_name;
           let adress = place.venue_address;

           htmlTemplate += /*html*/
                `
         <li> 
          <h3>${name}</h3>
           <p> ${adress}</p>
         </li>
       `;
      }
      document.querySelector(".venue_container").innerHTML = htmlTemplate;
 }

 //  function goToPins(places, pinList, map, searchContainer) {
 //       for (let i = 0; i < 23; i++) {
 //            places[i].addEventListener("click", () => {
 //                 map.flyTo({
 //                      center: [10.20594, 56.1065844],
 //                      speed: 0.2
 //                 });
 //                 searchContainer.style.display = 'none';
 //            })
 //       }
 //  }

 function search(value) {
      console.log(value);
      let filteredPlaces = [];
      for (let place of places) {
           let name = place.venue_name.toLowerCase();
           if (name.includes(value.toLowerCase())) {
                filteredPlaces.push(place);
           }
      }

      console.log(filteredPlaces);
      appendPlaces(filteredPlaces);
 }




 const searchContainer = document.querySelector('.search_container');
 const searchBar = document.querySelector('#home>input');
 const xIcon = document.querySelector('.search_container > i');

 searchBar.addEventListener('click', () => {
      searchContainer.style.display = 'block';
 })
 xIcon.addEventListener('click', () => {
      searchContainer.style.display = 'none';
 })
 document.querySelector(".mapboxgl-ctrl-logo").style.display = 'none';


 var pinList = document.querySelectorAll('.mapboxgl-marker');