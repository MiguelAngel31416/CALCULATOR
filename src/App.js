import React, { useState } from 'react';
import './App.css';
import calculadora from './Calculadora.js'


function App() {
  const [result,setResult]=useState("0")
  const [formula,setFormula]=useState(result);
  
  console.log("formula fuera: "+formula);
  console.log("resultado fuera: "+result);
  
  function getFormula(symbol){
    console.log("symbol "+symbol)
    let advance=formula+symbol;
       
      console.log("formula"+formula);
      console.log("advance "+advance);
    if(/^[*/0.]/.test(formula)){setFormula("")}
          
    if(/[*/+-.][*/.]/.test(formula.slice(-2))){
      setFormula(formula.slice(0,formula.length-1)) 
    }
    if(/\.\d+\./.test(formula)){setFormula(formula.slice(0,formula.length-1))}
  
    if(/=$/.test(advance)){calculate(formula)}

    if(/=$/.test(formula)){
      setFormula(result)
    }
   
    setFormula(prev=>prev+symbol)
  }

  function calculate () {
    
    setResult(calculadora(formula));
    
    
  }
 

  function allClear (){
    setFormula("0");
    setResult("0");
  }

  function clear (){
    setFormula(
      (prev)=> prev.split("").slice(0,prev.length-1).join("")
    );
    //setResult("");
  }



  return (
    <div className="App">
      <p>CALCULADORA JAVA-SCRIPT</p>
      <div className='calculator'>

        <div id='screen'>
          
          <input id='display' value={formula} placeholder="0" disabled></input>
          <div id='output'><span>{result}</span></div>
        </div>

        <div className='remove'>
          <div className='key dobleKey delete' id='delete' onClick={clear}>CL</div>
          <div className='key dobleKey clear' id='clear' onClick={allClear}><p>AC</p></div>
        </div>

        <div className='keyboard'>
          <div className='key' id='seven' onClick={()=>getFormula("7")}><p>7</p></div>
          <div className='key' id='eight' onClick={()=>getFormula("8")}><p>8</p></div>
          <div className='key' id='nine' onClick={()=>getFormula("9")}><p>9</p></div>
          <div className='key operator' id='divide' onClick={()=>getFormula("/")}><p>/</p></div>
          <div className='key' id='four' onClick={()=>getFormula("4")}><p>4</p></div>
          <div className='key' id='five' onClick={()=>getFormula("5")}><p>5</p></div>
          <div className='key' id='six' onClick={()=>getFormula("6")}><p>6</p></div>
          <div className='key operator' id='multiply' onClick={()=>getFormula("*")}><p>*</p></div>
          <div className='key' id='one' onClick={()=>getFormula("1")}><p>1</p></div>
          <div className='key' id='two' onClick={()=>getFormula("2")}><p>2</p></div>
          <div className='key' id='three' onClick={()=>getFormula("3")}><p>3</p></div>
          <div className='key operator' id='add' onClick={()=>getFormula("+")}><p>+</p></div>
          <div className='key dobleKey' id='zero' onClick={()=>getFormula("0")}><p>0</p></div>
          <div className='key' id='decimal' onClick={()=>getFormula(".")}><p>.</p></div>
          <div className='key operator' id='subtract' onClick={()=>getFormula("-")}><p>-</p></div>
        </div>

        <div className='key equal' id='equals' onClick={()=>getFormula("=")}><strong><p>=</p></strong></div>

      </div>
    </div>
  );
}

export default App;
