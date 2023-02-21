// import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import Background from './Background';

import './styles.css';
import Layout from './Layout';

function getButtonText() {
  let a = 'click';
  let b = ' ';
  let c = 'here';
    return a + b + c;
}

// create a react component

/* ()
const App = function() {
    return <div>Hi there!</div>;
} */

// create a 2015 arrow function

const App = function() {
    return (
      <div>
      <h1> h1 Here is some super important text </h1>
      <Background/>
      
      {/* <Layout /> */}

      </div>
    
      
    );
  };

export default App;

// take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
); 