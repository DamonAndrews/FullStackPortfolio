import React from 'react';

import BallHog from '../images/Project Screenshots/BallHog.jpg';
import BallRunner from '../images/Project Screenshots/BallRunner.jpg';
import ECommerce from '../images/Project Screenshots/ecommerce.jpg';
import Scheduler from '../images/Project Screenshots/Scheduler.jpg';
import PasswordGen from '../images/Project Screenshots/passGenPic.jpg';

const styles = {
  background: {
    backgroundColor: 'grey',
    paddingTop: 15,
    paddingBottom: 600,
    marginTop: 0,   
  },
  bannerBorder:{
    backgroundColor: 'grey',
    padding: 'none',
    fontFamily: 'Brush Script'
  },
  projectBackgrounds: {
      maxHeight: 540, 
      backgroundColor: 'white',
  },
  cardBody: {
    marginTop: '5%',
    marginLeft: '8%',
    marginBottom: 20,
    color: 'black',
    fontFamily: 'Times New Roman'
},
  cardP: {
  marginBottom: -2,
},
  cardA: {
  marginTop: 10,
},
  BallHog: {
  marginTop: '5%',
  height: '80%',
  marginLeft: '30%',
  width: "60rem",
},
  ballRunnerImage: {
  height: '90%',
  marginTop: '5%',
  marginLeft: '8%',
},
  PasswordGenImage: {
  height: '80%',
  marginTop: '5%',
  marginLeft: '-2%',
},
  eCommImage: {
  height: '90%',
  marginTop: '2.5%',
  marginLeft: '5%',
},
  containerElement: {
    backgroundColor: "black",
  
    color:'white',
    fontFamily: 'Times New Roman', 
    textDecoration: 'none',
},
  portfolioBanner: {
    backgroundColor: "black",
    marginTop: '0%',
    fontSize: 25,
    color:'white',
    fontFamily: 'Times New Roman', 
    textDecoration: 'none',
    
},
  appButtons: {
    backgroundColor: "black",
    fontFamily: 'Times New Roman',
    color: 'maroon',
    fontWeight: 'bold'
},
};

export default function Portfolio() {
  return (

<main className="flex-row justify-center"  style={styles.background}>

    <section className="container" style={styles.portfolioBanner}>
      <h4 className="card-header text-center" style={styles.portfolioBanner}><b>PORTFOLIO</b></h4>
      
        <div className="card mb-3" style={styles.projectBackgrounds}>
          
            <div className="row g-0">
              
              <div className="col-md-5">
                  <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title"><b>BallHog: An NBA Stat App</b></h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>Interactive Front-End Project:</p>
                            <ul>
                            <li>MySQL / Sequelize ORM for database</li>
                                <li>Node.js and Express.js for RESTful API</li>
                                <li>GET and POST routes</li>
                                <li>Responsive, Interactive, Authentication</li>
                            </ul>
                            <p className="card-text"><small className="text-30">JavaScript / Handlebars / CSS</small></p>
                            <a href="https://damonandrews.github.io/7-8-InteractiveFrontEnd-BALLHog/" target="_blank" rel="noreferrer" className="btn btn" style={styles.appButtons}>Go To Deployed Application</a>
                            <br/>
                            <br/>
                            <a href="https://github.com/DamonAndrews/7-8-InteractiveFrontEnd-BALLHog" target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.appButtons}>Go To GitHub Repo</a>
                            </div>
                        </div>
                        


                        <div className="col-md-5">
                            <img src={BallHog} className="img-fluid rounded-start" style={styles.BallHog} alt="homepage of application"/>
                        </div>


                    </div>
                  </div>
      <br/>
      <div className="card mb-3" style={styles.projectBackgrounds}>
        <div className="row g-0">

          <div className="col-md-5">
            <img src={BallRunner} className="img-fluid rounded-start" style={styles.ballRunnerImage} alt="homepage of game app"/>
          </div>

          <div className="col-md-5">
            <div className="card-body" style={styles.cardBody}>
              <h3 className="card-title" id="two"><b>BallRunner</b></h3>
                <p className="card-text text-decoration-underline" style={styles.cardP}>Interactive MERN Stack Single-Page Video Game Application:</p>
                <ul>
                    <li>GraphQL with a Node.js and Express.js server</li>
                    <li>MongoDB and Mongoose ODM for database</li>
                    <li>Queries and mutations for retrieving, adding, updating, and deleting data</li>
                    <li>React for front end</li>
                </ul>
                <p className="card-text"><small className="text-white-30">MongoDB / Express / React.JS / Node.JS / BCrypt Authentication</small></p>
                <a href="https://ballrunner.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.appButtons}>Go To Deployed Application</a>
                <br/>
                <br/>
                <a href="https://github.com/DamonAndrews/InsertGameName"  target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.appButtons}>Go To GitHub Repo</a>
              </div>
            </div>
          </div>
      </div>

<br/>

<div className="card mb-3" style={styles.projectBackgrounds}>
        <div className="row g-0">
          <div className="col-md-7">
            <img src={ECommerce} className="img-fluid rounded-start" style={styles.eCommImage} alt="..."/>
          </div>
          <div className="col-md-5">
            <div className="card-body" style={styles.cardBody}>
              <h3 className="card-title" id="two"><b>E-Commerce Back End</b></h3>
                <p className="card-text text-decoration-underline" style={styles.cardP}>Object-Relational Mapping "ORM"</p>
                <ul>
                    <li>configure Express.js API to use Sequelize</li>
                    <li>Sequelize interacts with a MySQL Database</li>
                    <li>RESTful CRUD Operations</li><li>Creat / Read / Update / Delete</li>
                </ul>
                <p className="card-text"><small className="text-white-30">JavaScript / MySQL2 / Sequelize / Express.js</small></p>
                <a href="https://drive.google.com/file/d/1V9axJO9O1N47_CIjBeVNGxfIZygHoLim/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.appButtons}>Go To Deployed Application</a>
                <br/>
                <br/>
                <a href="https://github.com/DamonAndrews/13-ECommerceBackEnd"  target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.appButtons}>Go To GitHub Repo</a>
            </div>
        </div>
    </div>
</div>
                <br/>
      <div className="card mb-3" style={styles.projectBackgrounds}>
        <div className="row g-0">
          <div className="col-md-7">
            <img src={Scheduler} className="img-fluid rounded-start" style={styles.ballRunnerImage} alt="..."/>
          </div>
          <div className="col-md-5">
            <div className="card-body" style={styles.cardBody}>
              <h3 className="card-title" id="two"><b>Work Day Scheduler</b></h3>
                <p className="card-text text-decoration-underline" style={styles.cardP}>Third-Party APIs Challenge</p>
                <ul>
                    <li>App runs in browser</li>
                    <li>Dyanmically updated HTML</li>
                    <li>Uses Moment.js for Date and Time</li>
                </ul>
                <p className="card-text"><small className="text-white-30">MongoDB / Express / React.JS / Node.JS / BCrypt Authentication</small></p>
                <a href="https://damonandrews.github.io/5-WorkDayScheduler/" target="_blank" rel="noreferrer" className="btn btn-primary"style={styles.appButtons}>Go To Deployed Application</a>
                <br/>
                <br/>
                <a href="https://github.com/DamonAndrews/5-WorkDayScheduler"  target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.appButtons}>Go To GitHub Repo</a>
            </div>
        </div>
    </div>
</div>

<br/>


<div className="card mb-3" style={styles.projectBackgrounds}>
                    <div className="row g-0">
                        <div className="col-md-5">
                            <div className="card-body" style={styles.cardBody}>
                            <h3 className="card-title" id="two"><b>Password Generator</b></h3>
                            <p className="card-text text-decoration-underline" style={styles.cardP}>Generates random password from 8-128 characters</p>
                            <ul>
                                <li>User is prompted to select # of characters</li>
                                <li>User indicates Uppercase or Lowercase preferences</li>
                                <li>User indicates special character preference</li>
                                <li>JavaScript returns random password</li>
                            </ul>
                            <p className="card-text"><small className="text-white-30">HTML / CSS / JavaScript </small></p>
                            <a href="https://damonandrews.github.io/3-PasswordGenerator/" target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.appButtons}>Go To Deployed Site</a>
                            <br/>
                            <br/>
                            <a href="https://github.com/DamonAndrews/3-PasswordGenerator" target="_blank" rel="noreferrer" className="btn btn-primary" style={styles.appButtons}>Go To GitHub Repo</a>
                            </div>
                        </div>
                        
                        <div className="col-md-7">
                            <img src={PasswordGen} className="img-fluid rounded-start" style={styles.PasswordGenImage} alt="..."/>
                        </div>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                 
</section>
</main>
//LAST DIV TAG
)};
    
