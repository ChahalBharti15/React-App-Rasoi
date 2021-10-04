import React, { useState } from 'react';
import FirebaseUser from './FirebaseUser';
//import React, { Component } from 'react';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  const [ signInOrUp, setSignInOrUp ] = useState( '' );
  return (
    <div className="App">
      <h1>Firebase login</h1>
      {
        signInOrUp ? (
          <FirebaseUser action={ signInOrUp } />
        ) : (
          <>
          
            <button type="button" onClick={ () => setSignInOrUp( 'signin' ) } >Log in with existing user</button>
            <button type="button" onClick={ () => setSignInOrUp( 'signup' ) } >Create a new user</button>
            <Header/>
          <Home/>
          
            
          </>
        )
      }
    </div>
  );
}

export default App;







//import React, { Component } from 'react';
//import Home from './pages/Home';
//import Header from './components/Header';





  
//function App() {
  
  //return (
     
    //<div>
    
     
      //<Home/>
    //<Header/>
     //</div>
     
  //);
//}




//export default App;
 