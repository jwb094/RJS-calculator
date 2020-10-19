import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as math from 'mathjs';
// function App() {
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    state = {
      num1:'',
      num2:'',
      answer:0,
      operation:null,
      numbertoappearonscreen:0,
      value:''
     // operation_button_clicked:''
  };


  // btnoperation(){
  //   // if(document.getElementById('calculation').click){
  //   //   alert("button was clicked");
  //   // } else {
  //   //   alert("button was not clicked");
  //   // }
  //  }​
  

   AddNumber(e) {
     console.log(e.target.value);
    let operation_button_clicked = this.check_operation_click();
    
    
    //check if the operation btns have been clicked
    if (this.state.operation === null) {
      let numbersAsString =+ this.state.num1+`${e.target.value}`;
      this.setState({
        num1:  numbersAsString
          });
          this.setState({
         numbertoappearonscreen: this.state.num1
           });
        this.setState({value: this.state.numbertoappearonscreen})
    } else {
      let numbersAsString =+ this.state.num2+`${e.target.value}`;
      this.setState({
        numbertoappearonscreen: 0
          });
      this.setState({
        num2: numbersAsString
          });
           this.setState({
             numbertoappearonscreen: this.state.num2
           });
           this.setState({value: this.state.numbertoappearonscreen})
    }
    // if (operation_button_clicked === false) {
    //   let numbersAsString =+ this.state.num1+`${e.target.value}`;
    //   this.setState({
    //     num1:  numbersAsString
    //       });
    //       this.setState({
    //      numbertoappearonscreen: this.state.num1
    //        });
    //     this.setState({value: this.state.numbertoappearonscreen})
    // } else {
    //   let numbersAsString =+ this.state.num2+`${e.target.value}`;
    //   this.setState({
    //     numbertoappearonscreen: 0
    //       });
    //   this.setState({
    //     num2: numbersAsString
    //       });
    //        this.setState({
    //          numbertoappearonscreen: this.state.num2
    //        });
    //        this.setState({value: this.state.numbertoappearonscreen})
    // }

    console.log('the operation button were given a '+operation_button_clicked);

   console.log(this.state.numbertoappearonscreen);
  }
  
  check_operation_click(){
    if (document.getElementById('calculation').click == true) {
      return true;     
    } else{
      return false;
    }
  }


  operation(e) {
    //check if button is click
   //if button is number clicked add button to number1 
   //else add number to number2
   e.preventDefault();
   console.log(e.target.value);
   this.setState({
    operation: e.target.value
      });
      console.log(this.state.operation);
 }

 handleClick(event) {
  
  //event.preventDefault();
//const value = event.target.value;
this.setState({value: this.state.numbertoappearonscreen})
//console.log(value);
}
  render(){
  return (
    <div className="App">

      <div class="container">
  <div class="row">
    <div class="col">
    <input type="text" readOnly class="form-control" 
    value={this.state.value} 
    //value={this.state.numbertoappearonscreen}
    ></input>
    </div>
    
  </div>
  <div class="row">
    <div class="col-9">
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='1'>1</button>
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='2'>2</button>
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='3'>3</button>
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='4'>4</button>
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='5'>5</button>
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='6'>6</button>
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='7'>7</button>
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='8'>8</button>
    <button class="col-md-4" onClick={(e) => this.AddNumber(e)} value='9'>9</button>
    <button class="col-md-6" onClick={(e) => this.AddNumber(e)} value='0'>0</button>
    <button class="col-md-6" onClick={(e) => this.AddNumber(e)} >CE</button>
    
    
    </div>
    <div class="col-3">
    <button class="col-6" id='calculation' onClick={(e) => this.operation(e)} value='+'>+</button>
    <button class="col-6" id='calculation' onClick={(e) => this.operation(e)} value='-'>-</button>
    <button class="col-md-6" id='calculation' onClick={(e) => this.operation(e)} value='*'>*</button>
    <button class="col-md-6" id='calculation' onClick={(e) => this.handleClick(e)} value='/'>/</button>
    <button class="col-md-6" id='calculate' onClick={(e) => this.calculate}>=</button>
    </div>
    {/* <div class="col">
      3 of 3
    </div> */}
  </div>
</div>
    </div>
  );
}
  }
export default App;
