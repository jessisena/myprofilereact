import React from "react";
import { NavHashLink as NavLink, HashLink as Link } from "react-router-hash-link";
import { Parallax } from "react-scroll-parallax";
import { Container, Row, Col } from "react-grid-system";

import SectionItem from "../SectionItem/SectionItem";
import * as CONSTANTS from "../../utils/constanst";
import BackgroundPattern from "../BackgroundPattern/BackgroundPattern";

import foto from "../../resources/me.jpg";
import styles from "./Content.module.css";

export default class Content extends React.PureComponent {


  renderMyBackground() {

    return(

      <Container className={styles.section} fluid>
        <p className={styles.sectionTitle}>MY BACKGROUND</p>
        <Row align="center">
          <Col sm={4}>
            <img src={foto} alt="profile" className={styles.pictureProfile}/>       
          </Col>
          <Col sm={8} className={styles.contentTxt}>
            <p>Since 2013 I have been part of Geostart, the innovation group of the Institut Cartogràfic i Geològic de Catalunya.</p>
            <p>My work there includes the development of <b>prototypes and the research of new technologies</b>, as well as the design and <b>development of web applications</b> (front-end and back-end).<br/> *Some exemples of our work at <a href="http://betaportal.icgc.cat/" target="_blank">BETAPORTAL</a>. </p>
            <p>More recently I have been mainly focused on the <b>mobile development</b>, being in charge of several application development projects.</p>
            <p>In addition, as part of Geostart I have acquired a wide knowledge of geotechnologies, working as a <b>GIS developer</b></p>
            <p>Last year I finished a postgraduate course in <b>UX Design</b>, aiming to expand my overall vision of the whole development process of a technological product, and complementing my knowledge as a developer, giving it an extra value to the work I do in the projects in which I participate</p>
            <p>This background gives me a very versatile profile and the ability to deal with many different technologies.</p>    
          </Col>
        </Row>
      </Container>      
       
    );

  }

  renderMyWork() {

    return(
    
      <Container className={styles.section} fluid>
        <p className={styles.sectionTitle}>EXAMPLES OF MY WORK</p>

        <SectionItem 
          sectionItemClassName="section1"
          parallax_direction={CONSTANTS.RIGHT} 
          title={CONSTANTS.TEXT.instamaps.title} 
          text={CONSTANTS.TEXT.instamaps.text} 
          img={CONSTANTS.TEXT.instamaps.img}>
        </SectionItem>

        <SectionItem
          sectionItemClassName="section2"
          parallax_direction={CONSTANTS.LEFT} 
          title={CONSTANTS.TEXT.catoff.title} 
          text={CONSTANTS.TEXT.catoff.text} 
          img={CONSTANTS.TEXT.catoff.img}>
        </SectionItem>      

        <SectionItem
          sectionItemClassName="section3"
          parallax_direction={CONSTANTS.RIGHT} 
          title={CONSTANTS.TEXT.canhemon.title} 
          text={CONSTANTS.TEXT.canhemon.text} 
          img={CONSTANTS.TEXT.canhemon.img}>
        </SectionItem>

        <SectionItem
          sectionItemClassName="section4"
          parallax_direction={CONSTANTS.LEFT} 
          title={CONSTANTS.TEXT.mapicc.title} 
          text={CONSTANTS.TEXT.mapicc.text} 
          img={CONSTANTS.TEXT.mapicc.img}>
        </SectionItem>

        <SectionItem
          sectionItemClassName="section1"
          parallax_direction={CONSTANTS.RIGHT} 
          title={CONSTANTS.TEXT.ulldeltemps.title} 
          text={CONSTANTS.TEXT.ulldeltemps.text} 
          img={CONSTANTS.TEXT.ulldeltemps.img}>
        </SectionItem> 

        <SectionItem
          sectionItemClassName="section2"
          parallax_direction={CONSTANTS.LEFT} 
          title={CONSTANTS.TEXT.onsoc.title} 
          text={CONSTANTS.TEXT.onsoc.text} 
          img={CONSTANTS.TEXT.onsoc.img}>
        </SectionItem>             

      </Container>

    );

  }
  renderProjects() {

    return(
      <Container className={styles.section} fluid>
        <p className={styles.sectionTitle}>PERSONAL PROJECTS</p>
        
      </Container>    
    );
    
  }
  renderSkills() {

    return(
      <Container className={styles.section} fluid>
        <Link to="#myskills"><p className={styles.sectionTitle}>MY SKILLS</p></Link>
        <Row align="center">
          <Col className={styles.contentTxt}>
            {CONSTANTS.TEXT.skills.text}
          </Col>
        </Row>
        <Row align="justify">
          <Col sm={6} className={styles.contentTxt}>
            <h4>{CONSTANTS.TEXT.courses.title}</h4>
            {CONSTANTS.TEXT.courses.text}
          </Col>
          <Col sm={6} className={styles.contentTxt}>
            <h4>{CONSTANTS.TEXT.roadmap.title}</h4>
            {CONSTANTS.TEXT.roadmap.text}
          </Col>
        </Row>                
      </Container>
    );
    
  }    

  render() {

    return (
      <div >
        <BackgroundPattern pttrn={"jigsaw"}>
          {this.renderMyBackground()}
        </BackgroundPattern>
        
        {this.renderMyWork()}
        {this.renderProjects()}
        {this.renderSkills()}
      </div>
    );
  
  }

}