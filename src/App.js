import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as math from 'mathjs';
// function App() {
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state_ = {isToggleOn: true};

      this.handleClick = this.handleClick.bind(this);
    }
    state = {
      num1:'',
      num2:'',
      answer:0,
      operation:null,
      operation_status:null,
      numbertoappearonscreen:0,
      value:'',
      isToggleOn: false
     // operation_button_clicked:''
  };

  
  // btnoperation(){
  //   // if(document.getElementById('calculation').click){
  //   //   alert("button was clicked");
  //   // } else {
  //   //   alert("button was not clicked");
  //   // }
  //  }​
  
  //check

   AddNumber(e) {
    console.log(this.state);
     console.log(e.target.value);
     e.preventDefault();
    //let operation_button_clicked = this.check_operation_click();
    this.check_operation_click();
    console.log(this.state.operation_status);
    //check if the operation btns have been clicked
    if (this.state.operation_status == false) {
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
  
   console.log(this.state.numbertoappearonscreen);
   console.log(this.state.numbertoappearonscreen);

  }
  
  check_operation_click(){
    if (document.getElementById('calculation').click == true) {
       this.setState({
        operation_status:true
      });
     // return true;     
    } else{
       this.setState({
        operation_status:false
      });
      // return false;
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
      this.setState({
        operation_status:true
      });
     
      // console.log(this.state.operation);
      e.preventDefault();

 }

 handleClick(e) {
  e.preventDefault();
  let num  = `${e.target.value}`;
  this.setState({
    value: this.state.value += num
  });
  let numbersAsString =+ `${e.target.value}`;
  //console.log(numbersAsString );
console.log(this.state.numbertoappearonscreen);
}

//  handleClick(e) {
//   e.preventDefault();
//   let numbersAsString =+ this.state.num1+`${e.target.value}`;
//   console.log(numbersAsString);
//   this.setState({
//     num1:  numbersAsString
//       });
//       this.setState({
//      numbertoappearonscreen: this.state.num1
//        });
//     this.setState({value: this.state.numbertoappearonscreen})
//   //event.preventDefault();
// // let result =+ 0+ event.target.value;
// // this.setState({value: result});
// console.log(this.state.num1);
// }

clear(e){
  this.setState({
    value: ''
  });
}


calculate(e){
  this.setState({
    value: math.evaluate(this.state.value)     
  });
//   console.log(e);
//   console.log(this.state.num1);
//   console.log(this.state.num2);
//  switch (this.state.operation) {
//    case "+":
//     let result = math.add(this.state.num1,this.state.num2);
//     console.log(result);
//     this.setState({
//       numbertoappearonscreen: result
//     });
//     this.setState({value: this.state.numbertoappearonscreen});
//      break;
//   case "-":
//     let subtract = math.subtract(this.state.num1,this.state.num2);
//     this.setState({value: subtract});
//      break;
//   case "*":
//     let multiply = math.multiply(this.state.num1,this.state.num2);
//     this.setState({value: multiply});
//       break;
//   case "/":
//     let divide = math.divide(this.state.num1,this.state.num2);
//     this.setState({value: divide});

//         break;
 
//    default:
//      break;
//  }
 e.preventDefault();
}
/*
operation_status(e){
  this.setState({
    operation: e.target.value
      });

}*/
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
    {/* <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='1333'>33</button> */}
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='1'>1</button>
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='2'>2</button>
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='3'>3</button>
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='4'>4</button>
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='5'>5</button>
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='6'>6</button>
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='7'>7</button>
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='8'>8</button>
    <button class="col-md-4" onClick={(e) => this.handleClick(e)} value='9'>9</button>
    <button class="col-md-6" onClick={(e) => this.handleClick(e)} value='0'>0</button>
    <button class="col-md-6" onClick={(e) => this.clear(e)} >CE</button>
    
    
    </div>
    <div class="col-3">
    <button class="col-6" id='calculation'  onClick={(e) => this.handleClick(e)} value="+">+</button>
    <button class="col-6" id='calculation'  onClick={(e) => this.handleClick(e)} value="-">-</button>
    <button class="col-md-6" id='calculation'  onClick={(e) => this.handleClick(e)} value="*">*</button>
    <button class="col-md-6" id='calculation'   onClick={(e) => this.handleClick(e)} value="/">/</button>
    <button class="col-md-6" id='calculate' onClick={(e) => this.calculate(e)}>=</button>
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
