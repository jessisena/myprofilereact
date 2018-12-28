import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload  } from "@fortawesome/free-solid-svg-icons";



//import logo from "../logo.svg";
import styles from "./App.module.css";

import { Sticky, StickyContainer } from "react-sticky";
import { ParallaxProvider } from "react-scroll-parallax";
import Content from "./Content/Content";
import NavBar from "./NavBar/NavBar";

class App extends Component {

  super() {


  }


  renderHeader() {

    return(
      <div className={styles.myHeader}>
        <h1 className={styles.title}>Hi, I'm Jessica Sena</h1>
        <p className={styles.subtitle}>
        Computer Engineer + Postgraduate in UX Design.<br/> 
        Web developer.<br/> 
        Mobile developer.<br/> 
        GIS developer.
        </p>          
      </div>      
    ); 
  
  }


  renderFooter(){

    library.add(faEnvelope);
    /* library.add(faLinkedin);
    library.add(faGithub); */
    library.add(faDownload);
    
    return(

      <footer className={styles.footer}>

        <h2 className={styles.title}>Contact</h2>

        <p class="lead text-center mylink">
          
          <p><FontAwesomeIcon icon="envelope" /><a href="mailto:jessisena@gmail.com">jessisena@gmail.com</a></p>

          <p><FontAwesomeIcon icon="envelope" /><a href="https://www.linkedin.com/in/jessicasenag/" target="_blank">www.linkedin.com/jessicasenag</a></p>

          <p><FontAwesomeIcon icon="envelope" /><a href="https://github.com/jessisena" target="_blank">github.com/jessisena</a></p>

          <p><FontAwesomeIcon icon="download" />&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1Ph00vA0UGl5_bHelxhSFBf8fK1fBfsQ0/view?usp=sharing" target="_blank">Curriculum in PDF</a></p>
        </p>


      </footer>
                 
    );
  
  }
  
  renderContent() {

    return(
      <ParallaxProvider>
        <Content className={styles.content}/>
      </ParallaxProvider>
    );

  }

  renderStickyContainer() {

    return(
      <StickyContainer className="container">
        <Sticky>
          {({ style }) => (
            <NavBar style={style}/>
          )}
        </Sticky>
        {this.renderContent()}
      </StickyContainer>
    );

  }


  render() {

    return (
      <div className={styles.App}>
          
        {this.renderHeader()}

        {this.renderStickyContainer()}
          
        {this.renderFooter()}

      </div>
    );
	
  }

}

export default App;
