import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const headerPage = {
headerLink:{
   fontSize: 120,
   color:'white',
   fontFamily: 'Brush Script', 
   textDecoration: 'none',
   paddingBottom: 0,
   marginBottom: -5,
   marginTop: -5,
},
dotColor:{
    color:'maroon',
    fontSize: 140,
},
letterColor:{
    color:'grey',
    fontSize: 140,
},
menuButton:{
    color:'white',
    fontSize: 17,
    fontFamily: 'Brush Script', 
    textDecoration: 'none',
    backgroundColor: 'maroon',
},
optionButtons:{
    display: 'flex',
    flexDisplay: 'space-around',
},
welcomeText:{
    color: 'white',
    fontFamily: 'Times New Roman',
  
},
}

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


return (

<header class="sticky-top bg-black mb-12 py-8">

  <div className="container">
      
              <div className="flex-row justify-center">
                  <Link to="/" style={headerPage.headerLink}><h3 className="navbar-brand-center" style={headerPage.headerLink}><b><span style={headerPage.letterColor}>D</span>AMON<span style={headerPage.letterColor}>A</span>NDREWS<span style={headerPage.dotColor}>.</span>COM</b></h3></Link>
              </div>

              <div style={headerPage.optionButtons} className="flex-row justify-center">

                  {Auth.loggedIn() ? (
                    <>
                    <div>
                    <span style={headerPage.welcomeText}>Welcome to State Soup, {Auth.getProfile().data.username}.</span>
                    </div>
                 
                
                    </>

                ) : (

                  <div>

                    <Link className="btn btn-xs btn-black m-1" to="/login" style={headerPage.menuButton}>
                    <b>LOGIN</b>
                    </Link>
              
              <Link className="btn btn-xs btn-black m-1" to="/portfolio" style={headerPage.menuButton}>
                <b>PORTFOLIO</b>
              </Link>

              <Link className="btn btn-xs btn-black m-1" to="/signup" style={headerPage.menuButton}>
                <b>SIGN UP</b>
              </Link>
            
            </div>
          )}
        </div>
<br></br>
      </div>
    </header>
  );
};

export default Header;

