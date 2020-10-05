import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* <div className="row">
        <div className="col-12">
        <input type="email" class="form-control" id="exampleFormControlInput1"></input>
        </div>
    <div className="row">
      <div className="col-md-9">
      <div className="col-md-3" >  
        <button>1</button>
        <button>2</button>
        <button>3</button>
        </div>
        <div className="col-md-3" >  
        <button>4</button>
        <button>5</button>
        <button>6</button>
        </div>
        <div className="col-md-3" >  
        <button>7</button>
        <button>8</button>
        <button>9</button>
        </div>
      </div>

      <div className="col-md-3" > 

      </div>
    </div>
      </div> */}

      <div class="container">
  <div class="row">
    <div class="col">
    <input type="text" class="form-control" ></input>
    </div>
    
  </div>
  <div class="row">
    <div class="col-9">
    <button class="col-md-4">1</button>
    <button class="col-md-4">2</button>
    <button class="col-md-4">3</button>
    <button class="col-md-4">4</button>
    <button class="col-md-4">5</button>
    <button class="col-md-4">6</button>
    <button class="col-md-4">7</button>
    <button class="col-md-4">8</button>
    <button class="col-md-4">9</button>
    <button class="col-md-6">0</button>
    <button class="col-md-6">CE</button>
    
    
    </div>
    <div class="col-3">
    <button class="col-6">+</button>
    <button class="col-6">-</button>
    <button class="col-md-6">*</button>
    <button class="col-md-6">/</button>
    </div>
    {/* <div class="col">
      3 of 3
    </div> */}
  </div>
</div>
    </div>
  );
}

export default App;
