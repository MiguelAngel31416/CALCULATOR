import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <p>CALCULADORA JAVA-SCRIPT</p>
      <div className='calculator'>

        <div id='screen'>
          <div id='display'>prueba numeros</div>
          <div id='output'><span>pepe</span></div>
        </div>

        <div className='remove'>
          <div className='key dobleKey delete' id='delete'>CL</div>
          <div className='key dobleKey clear' id='clear'><p>AC</p></div>
        </div>

        <div className='keyboard'>
          <div className='key' id='7'><p>7</p></div>
          <div className='key' id='8'><p>8</p></div>
          <div className='key' id='9'><p>9</p></div>
          <div className='key operator' id='/'><p>/</p></div>
          <div className='key' id='4'><p>4</p></div>
          <div className='key' id='5'><p>5</p></div>
          <div className='key' id='6'><p>6</p></div>
          <div className='key operator' id='*'><p>*</p></div>
          <div className='key' id='1'><p>1</p></div>
          <div className='key' id='2'><p>2</p></div>
          <div className='key' id='3'><p>3</p></div>
          <div className='key operator' id='+'><p>+</p></div>
          <div className='key dobleKey' id='0'><p>0</p></div>
          <div className='key' id='.'><p>,</p></div>
          <div className='key operator' id='-'><p>-</p></div>
        </div>

        <div className='key equal' id='equals'><strong><p>=</p></strong></div>

      </div>

    </div>
  );
}

export default App;
