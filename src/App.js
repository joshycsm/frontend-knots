import React from 'react';
import MainContainer from './Components/MainContainer'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Style from './style.css'


function App() {
  return (
    <div className="App">
     <StickyHeader
     header={
       <div className="Header_root">
         <h1 className="Header_title">KNOTS TO SHELTER</h1>
         <h3>Let's learn survivalist skills, everybody!</h3>
         <ul className="Header_links">
          {/*<li className="Header_link">When</li>
          <li className="Header_link">Why</li>
          </div>li className="Header_link">About</li>*/}
         </ul>
       </div>
     }
   >
     <section>
       <p>
       </p>
     </section>
    </StickyHeader>
     <img className="image-title" />
    <MainContainer />
    </div>
  );
}

export default App;
