import React, { Component } from 'react';
import logo from './logo.svg';

import {connect} from 'redux-zero/react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="caja">
      <h3> NEW COMMENT </h3>
        <form >
            <input type = "text" name = "name" placeholder = "add name" 
               /><br/>
            <input type = "text" name = "comment"  placeholder = "add comments" 
               /><br/>
            <button type="submit" name="submit" value="submit">POST COMMENT</button>
        </form>
      </div>
       <div>
        <h4>COMMENTS</h4>
          <p className="contador">1 Comments:</p>
          <ul>Comentarios</ul>
      
      </div>
    </div>
    );
  }
}

export default App;
