function calculadora(str) {
 
  //creacion de una array en la que cada termino es el operador mas el valor numerico
  let arrNeg=str.match(/[/*+-]*\d+[.]\d+|[/*+-]*\d+/g); //console.log(arrNeg); 
  
  //modificación de la anterior array para que los números negativos tengan un operador suma antes del número.
  for (let i=1;i<arrNeg.length-1;i++){
    if(/^[+-]\d/.test(arrNeg[i])){
      arrNeg[i]=arrNeg[i].replace(arrNeg[i].slice(0,1),"+".concat(arrNeg[i].slice(0,1)))
    }
  }
  //console.log(arrNeg)
  
  //creacion de una array con los valores numericos transformados a número
  let arrNum=[Number(arrNeg[0])]; 
  for(let i=1;i<arrNeg.length;i++){
    arrNum[i]=Number(arrNeg[i].slice(1)); 
  };
  //console.log(arrNum)
  
  //creacion de una array con los operadores
  let arrOper=[];
  for(let i=1;i<arrNeg.length;i++){
    arrOper[i-1]=arrNeg[i].slice(0,1); 
  };
  //console.log(arrOper)
  
  //creacion de una array copia de la de operaciones para usarla en los bucles
  let copyOper=arrOper.slice();
  
  //realizando las operaciones de la formula introducida por orden jerarquico
  //primero los productos, despues las divisiones, restas y por último sumas.
  
 for (let i=0; i<copyOper.length; i++){
   let indexPor=arrOper.indexOf("*");  //console.log("i="+i+" indexPor="+indexPor)
     if(indexPor !== -1){
       arrNum.splice(indexPor,2,Number((arrNum[indexPor]*arrNum[indexPor+1]).toFixed(6)));
       //console.log(arrNum);
       arrOper.splice(indexPor,1);//console.log(arrOper)
     }
  } 
   
  for (let i=0; i<copyOper.length; i++){
    let indexPor=arrOper.indexOf("/");  
    if(indexPor !== -1){
      arrNum.splice(indexPor,2,Number((arrNum[indexPor]/arrNum[indexPor+1]).toFixed(6)))
      arrOper.splice(indexPor,1);
    }
  }  
 //console.log(arrNum); 
 //console.log(arrOper);
  
  for (let i=0; i<copyOper.length; i++){
    let indexPor=arrOper.indexOf("-");  
    if(indexPor !== -1){
       arrNum.splice(indexPor,2,arrNum[indexPor]-arrNum[indexPor+1])
      arrOper.splice(indexPor,1);
    }
  } 
  //console.log(arrNum); 
  //console.log(arrOper);
  
  for (let i=0; i<copyOper.length; i++){
  let indexPor=arrOper.indexOf("+");  
  if(indexPor !== -1){
    arrNum.splice(indexPor,2,arrNum[indexPor]+arrNum[indexPor+1])
    arrOper.splice(indexPor,1);
  }
  } 
  let resultado=arrNum.join();
  console.log("resultado "+resultado)
  return resultado
}


export default calculadora;