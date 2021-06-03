import React from 'react';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';


const Home = () =>(
        <Fragment> 
         <Helmet><title>BUBBLEWAVE</title></Helmet>
         
        <div id="home">
        
            <section>
                

           
             
          

                <div style={{textAlign:'center'}}>
                    <span className="mdi mdi-cube-outline cube">BubbleWave</span>
                </div>
             
             <h5>Nummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.</h5>
                
                <div class="swiggleBox">

<svg width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">

  <path d="M0.6,0.5c0,5.4,0,61.5,0,61.5s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0
  s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0
  c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c0,0,0-56.1,0-61.5H0.6z"/>
</svg>
<Link className="play-button" to="/play/instructions">Cours</Link>
</div>
                  

               
 

           

            <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div"><span className="dot"></span></div>
                <div className="div" ><span className="dot"></span></div>
      
 

     
 
 
            </section>
            </div>

          
        </Fragment>
      
    );


export default Home;