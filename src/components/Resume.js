import React, { Component } from 'react';
import './Resume.css';
export default  class Resume extends Component {
  render() {
     let resumeData = this.props.resumeData;
    return (
      <section id="resume">
          <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               

   				<div className="skills">

   				   <ul>
                <li className="html">HTML</li>
                <li className="css">CSS</li>
                <li className="bootstrap">Bootstrap</li>
                <li className="js">JavaScript</li>
                <li className="react">React</li>
                <li className="redux">Redux</li>
                <li className="node">Node.js</li>
                <li className="express">Express</li>
                <li className="mongo">MongoDB</li>
                <li className="mysql">MySQL</li>
                <li className="git">Git</li>
   					</ul>

   				</div>

   			</div>

         </div> 

      </section>
    );
  }
}