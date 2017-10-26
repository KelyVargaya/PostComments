import React, { Component } from 'react';
import logo from './logo.svg';
import {addComments, deleteComments} from './action';
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from 'redux-zero/react';
import './App.css';

const CreateLista = ({ name, comment, index }) => {
  return (
    <div className="result">
       <div className="foto"><img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png" alt=""/></div>
          <div className="comentario">
           <li>
              <h4 className="name">{name}</h4>
              <p>{comment}</p>
          </li>
        </div>
        <button onClick={() => deleteComments(index)}><a>DeleteComment</a></button>
          <a href="">Report as abuse</a>
    </div>
  );
}
const App = ({ comments }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if(this.name.value && this.comment.value){
      addComments(this.name.value, this.comment.value);
      this.name.value = '';
      this.comment.value = '';
    }
  }
  return (
    <div>
      <div className='caja'>
        <h3>NEW COMMENT</h3>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <InputGroup className="input">
              <FormControl  id="n" type="text" placeholder = "add name" inputRef={ref => { this.name = ref }} />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "add comments" inputRef={ref => { this.comment = ref }} />
            </InputGroup>
          </FormGroup>
          <button type="submit" name="submit" value="submit">POST COMMENT</button>
        </form>
      </div>
      <div>
        <h4>COMMENTS</h4>
        <p className="contador">{comments.length} comments: </p>
        <ul>{comments.map((item, index) => <CreateLista key={index} name={item.name} comment={item.comment} index={index} />)}
        </ul>
      </div>
    </div>
  );
}

const mapToProps = ({comments}) => ({comments});

export default connect(mapToProps)(App);
