import React from "react";
import styles from "./SectionItem.module.css";

import { Parallax } from "react-scroll-parallax";
import { Container, Row, Col } from "react-grid-system";

import * as CONSTANTS from "../../utils/constanst";

export default class SectionItem extends React.PureComponent {


  render() {

    const { parallax_direction } = this.props;

    switch(parallax_direction) {

    case CONSTANTS.RIGHT:

      return(
        <Row align="center" className={styles[this.props.sectionItemClassName] || {}}>
          
          <Col sm={4}>
            <div className={styles.sectionTitle}>{this.props.title}</div>
            <Parallax
              className="custom-class"
              offsetXMax={this.props.offsetXMax || 10}
              offsetXMin={this.props.offsetXMin || -150}
              tag="figure"
            >
              <img src={this.props.img} alt="profile" className={styles.picture}/>       
            </Parallax>    
          </Col>
          <Col sm={8} className={styles.contentTxt}>
            
            {this.props.text || ""}
          </Col>
        </Row> 
      ); 

    case CONSTANTS.LEFT:
      return(
        <Row align="center" className={styles[this.props.sectionItemClassName] || {}}>
          <Col md={8} className={styles.contentTxt} debug>
            {this.props.text || ""}
          </Col>
          <Col md={4} debug>
            <div className={styles.sectionTitle}>{this.props.title}</div>
            <Parallax
              className="custom-class"
              offsetXMax={this.props.offsetXMax || -150}
              offsetXMin={this.props.offsetXMin || 10}
              tag="figure"
            >
              <img src={this.props.img} alt="profile" className={styles.picture}/>       
            </Parallax>    
          </Col>
        </Row>
      );

    case CONSTANTS.UP:

      return(
        <Col sm={12} md={6} className={styles[this.props.sectionItemClassName] || {}}>
          <div className={styles.sectionTitle}>{this.props.title}</div>
          <Parallax
            className="custom-class"
            offsetYMax={this.props.offsetXMax || 10}
            offsetYMin={this.props.offsetXMin || -75}
            slowerScrollRate
            tag="figure"
          >
            <img src={this.props.img} alt="profile" className={styles.picture}/>       
          </Parallax>
          <div className={styles.contentTxt}>
            {this.props.text || ""} 
          </div>                
        </Col>          
      );


      break;
    case CONSTANTS.DOWN:
      // code block
      break;            
    default:
        // code block
    
    }


  }

}