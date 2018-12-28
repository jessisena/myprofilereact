import React from "react";
import catoffline from "../resources/catoffline.png";
import instamaps from "../resources/instamaps.jpg";
import canhemon from "../resources/canhemon.png";
import onsoc from "../resources/onsoc.png";
import mapicc from "../resources/mapicc.png";
import ulldeltemps from "../resources/ulldeltemps.png";


export const TEXT = {

  background: {
    title: "My background",
    text: <span><p>Since 2013 I have been part of Geostart, the innovation group of the Institut Cartogràfic i Geològic de Catalunya.</p>
      <p>My work there includes the development of <b>prototypes and the research of new technologies</b>, as well as the design and <b>development of web applications</b> (front-end and back-end).<br/> *Some exemples of our work at <a href="http://betaportal.icgc.cat/" target="_blank">BETAPORTAL</a>. </p>
      <p>More recently I have been mainly focused on the <b>mobile development</b>, being in charge of several application development projects.</p>
      <p>In addition, as part of Geostart I have acquired a wide knowledge of geotechnologies, working as a <b>GIS developer</b></p>
      <p>Last year I finished a postgraduate course in <b>UX Design</b>, aiming to expand my overall vision of the whole development process of a technological product, and complementing my knowledge as a developer, giving it an extra value to the work I do in the projects in which I participate</p>
      <p>This background gives me a very versatile profile and the ability to deal with many different technologies.</p></span>
  },

  instamaps: {
    img: instamaps,
    title: "Instamaps",
    text: <span>
      <p>I’ve worked widely as a front-end and back-en developer in the project InstaMaps.cat, an online web platform to create maps with your own data.</p>
      <p>Right now, the platform has about 9,000 users that have created more than 35,000 maps.</p>
      <p>Based in the following technologies:
        <ul>
          <li>FRONT-END: Javascript + JQuery + Bootstrap and Leaflet.js.</li>
          <li>BACK-END: Java +  Struts + Hibernate and a PostGIS Database</li>
        </ul>
      </p>
      <a href="http://www.instamaps.cat" without rel="noopener noreferrer" target="_blank" class="btn my-btn">See Instamaps in action ></a>      
    </span>
  },

  catoff: {
    img: catoffline,
    title: "Catalunya Offline",
    text: <span>
      <p>I’ve fully developed Catalunya Offline, an <b>hybrid mobile app</b> available for Android and IOS, that allows people download the Catalan cartography in their devices and use it in offline mode. Some of the functionalities are: locate you on the map, save waypoints and tracks and add pictures and data to them, load files with external geographical data, and connect all this information with the Instamaps.cat platform.</p>
      <p>Catalunya Offline has been developed with the <a href="https://ionicframework.com/" rel="noopener noreferrer" target="_blank">Ionic Framework</a> (and so, Cordova + Angular).</p>
      <p>Initially it used <a href="http://leafletjs.com/" rel="noopener noreferrer" target="_blank">Leaflet.js</a> + <a href="https://github.com/tombatossals/angular-leaflet-directive" rel="noopener noreferrer" target="_blank">AngularLeaflet</a> for the map functionalities, but now, it’s been refactorized to use <a href="https://www.mapbox.com/mapbox-gl-js/api/" rel="noopener noreferrer" target="_blank">MapboxGL.js</a> + WebGL technology, to take advantage of the <a href="https://www.mapbox.com/vector-tiles/" target="_blank">Vector Tiles</a> system.</p>
      <p>For this purpose, I have developed some interesting new features for the library, in order to make possible to use it in an <b>offline mode</b>: basically, I have added a new VectorTileOffline source and a new RasterOffline source too. Take a look <a href="https://github.com/jessisena/mapbox-gl-js/tree/master/src/source" rel="noopener noreferrer" target="_blank">HERE</a>.</p>
      <a href="http://betaportal.icgc.cat/wordpress/catalunya-offline-en-un-arxiu/" rel="noopener noreferrer" target="_blank" class="btn my-btn">Read more ></a>    
    </span>
  },

  cercafonts: {
    title: "CercaFonts",
    text: <span>
      <p>I’ve fully developed Cercafonts, an <b>hybrid mobile app</b> available for Android and IOS, that allows people download the Catalan cartography in their devices and use it in offline mode. Some of the functionalities are: locate you on the map, save waypoints and tracks and add pictures and data to them, load files with external geographical data, and connect all this information with the Instamaps.cat platform.</p>
      <p>Catalunya Offline has been developed with the <a href="https://ionicframework.com/" rel="noopener noreferrer" target="_blank">Ionic Framework</a> (and so, Cordova + Angular).</p>
      <p>Initially it used <a href="http://leafletjs.com/" rel="noopener noreferrer" target="_blank">Leaflet.js</a> + <a href="https://github.com/tombatossals/angular-leaflet-directive" rel="noopener noreferrer" target="_blank">AngularLeaflet</a> for the map functionalities, but now, it’s been refactorized to use <a href="https://www.mapbox.com/mapbox-gl-js/api/" rel="noopener noreferrer" target="_blank">MapboxGL.js</a> + WebGL technology, to take advantage of the <a href="https://www.mapbox.com/vector-tiles/" target="_blank">Vector Tiles</a> system.</p>
      <p>For this purpose, I have developed some interesting new features for the library, in order to make possible to use it in an <b>offline mode</b>: basically, I have added a new VectorTileOffline source and a new RasterOffline source too. Take a look <a href="https://github.com/jessisena/mapbox-gl-js/tree/master/src/source" rel="noopener noreferrer" target="_blank">HERE</a>.</p>
      <a href="http://betaportal.icgc.cat/wordpress/catalunya-offline-en-un-arxiu/" rel="noopener noreferrer" target="_blank" class="btn my-btn">Read more ></a>    
    </span>
  },  
  
  canhemon: {
    img: canhemon,
    title: "Canhemon",
    text: <span>
      <p>I've worked in the Canhemon Tree Checker project, for the <a href="https://ec.europa.eu/jrc/en" rel="noopener noreferrer" target="_blank">Joint Research Centre (European Comission)</a>.</p>
                
      <p>I fully developed the <b>Canhemon mobile application</b>. The main goal of the app is to allow users to collect information about trees directly on the territory, to be stored in a central database. The application also works completely offline, downloading previously the geographical area where the users will work, and synchronizing the data automatically with the server when it detects internet connection.</p>
                
      <p>Canhemon App has been developed with <a href="https://facebook.github.io/react-native/" rel="noopener noreferrer" target="_blank">React Native</a> + <a href="https://redux.js.org/docs/introduction/" rel="noopener noreferrer" target="_blank">Redux</a>, and it uses <a href="http://leafletjs.com/" target="_blank">Leaflet.js</a> for the map functionalities.</p>
                
      <p>The full source code of the app is <a href="https://github.com/jessisena/TreeCheckerApp/tree/master/app/treeChecker" rel="noopener noreferrer" target="_blank">HERE</a>.</p>
                             
      <a href="https://github.com/jessisena/TreeCheckerApp" rel="noopener noreferrer" target="_blank" class="btn my-btn">Read more ></a>  
    </span>
  },

  mapicc: {
    img: mapicc,
    title: "MapICC",
    text: <span>
      <p>I've fully developed MapICC, an app to visualize and interact with the Catalan cartography in online and offline mode. MapICC has some simple but nice functionalities like locate you on the map, load your own track files, or find places in the map.</p> 
      <p>MapICC it's been developed as a pure <b>Android native</b> application.</p>
            
      <a href="https://play.google.com/store/apps/details?id=com.appiccmobile" rel="noopener noreferrer" target="_blank" class="btn my-btn">Read more ></a>
    </span>
  },

  ulldeltemps: {
    img: ulldeltemps,
    title: "Ull del temps",
    text: <span>
      <p>I've also worked developing Ull del temps, an app based in a previous desktop app, L'Ull del temps, that let the users see how are and how were the places where they are, and others. </p> 
      <p>Is an Hybrid app, available for Android and IOS, based in the Ionic framework + Leaflet.js</p>
      <a href="http://betaportal.icgc.cat/wordpress/aplicacio-lull-del-temps/"  rel="noopener noreferrer" target="_blank" class="btn my-btn">Read more ></a>
    </span>
  },

  onsoc: {
    img: onsoc,
    title: "OnSóc",
    text: <span>
      <p>I've developed OnSóc, a simple app that let the users share their position with other people, in a very easy way, throw social networks and others.</p> 
      <p>Is an Hybrid app, available for Android and IOS, based in the Ionic framework + Leaflet.js</p>

      <a href="http://betaportal.icgc.cat/wordpress/on-soc/" rel="noopener noreferrer" target="_blank" class="btn my-btn">Read more ></a>
    </span>
  },

  skills: {
    title: "MY SKILLS",
    text:
    <span>
      <p>
      Very comfortable developing <b>JavaScript</b> large applications and good knowledge about <b>HTML5</b> and <b>CSS3/SASS</b>. 
      </p>
      <p>
      Wide experience developing hybrid apps. Until now I’ve been working mainly with the <b>Ionic Framework</b>, but recently I've just finished my first app developed completely with <b>React Native</b>. 
      </p> 
      <p>
      Good knowledge about the geo scope: I know <b>OpenLayers</b> and I've worked extensively with <b>Leaflet.js</b>. More recently I’ve started to work with the <b>MapboxGL</b> framework too. In fact, I’ve just developed some interesting new features for this library to make possible using it in an offline mode (as I have explained HERE).
      </p>
      <p>
      Not afraid about learning and discover new frameworks and technologies. Moreover, I really enjoy doing it! That’s why I always try to make my best to improve my skills, assisting as many conferences/meetings related with technology as I can, as well as doing courses and reading books and articles.  
      </p>        
    </span>    
  },    
  courses: {
    title: "Some of my latest courses",
    text: 
      <span>
        <p><a href="https://www.udemy.com/the-complete-react-native-and-redux-course" target="_blank">The Complete React Native and Redux Course</a> by Stephen Grider.</p>
        <p><a href="https://www.udemy.com/top-javascript-interview-questions-and-answers/" target="_blank">Advanced JavaScript</a> by Asim Hussain.</p>
        <p><a href="https://www.udemy.com/es6-bootcamp-next-generation-javascript/" target="_blank">Accelerated ES6 JavaScript Training</a> by Maximilian Schwarzmüller.</p>
        <p><a href="" target="_blank">The Complete React Web App Developer Course</a> by Andrew Mead.</p>
        <p><a href="https://www.udemy.com/learn-gulp/" target="_blank">Automate Web Development With Gulp JS</a> by Andrew Mead.</p>
        <p><a href="https://www.udemy.com/learn-angularjs/" target="_blank">Learn and Understand AngularJS</a> by Anthony Alicea.</p>
      </span>
  },
  roadmap: {
    title: "RoadMap: what's next?",
    text: 
        <span>
          <p> Become a React-Native "master". I'll start by doing this course: <a href="https://www.udemy.com/react-native-advanced/" target="_blank">React Native: Advanced Concepts</a> by Stephen Grider.</p>
          <p>Improve my programming methodology reading the already "classical" book <a href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" target="_blank">Clean Code: A Handbook of Agile Software Craftsmanship (Robert C. Martin)</a></p>
          <p>To Level Up and become a better front-end developer (in all possible ways), following this awesome  <a href="https://hackernoon.com/a-120-days-plan-to-become-a-better-developer-120daysbetterdev-4c3bbbdf31ee" target="_blank">120 days programme</a>, by Léna Faure.</p>
        </span>
  }

}

export const RIGHT = "RIGHT";
export const LEFT = "LEFT";
export const UP = "UP";
export const DOWN = "DOWN";
