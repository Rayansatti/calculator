
let oper ; 
let resultDis = document.getElementById('result');
const inputVals = [];
let calcs = [];


function add(a, b){
     
   let  sum = a + b;
   resultDis.innerText = sum;
    calcs.push(sum);
   console.log(calcs);
}
//add(a, b);


function subtract(a, b){
    let sub = a - b;
    resultDis.innerText = sub;
}
//subtract(a, b);

function multiply(a, b){
    let multi = a * b;
    resultDis.innerText = multi;
}
//multiply(a, b);

function divide(a, b){
    let div = a / b;
    resultDis.innerText = div;
}
//divide(a, b);


/*function dotUsed(){
 
     let found = inputVals.find(ele => ele === '.');
   if(found == '.'){
      let dotIndex = inputVals.indexOf(found);
      let numBefore = dotIndex - 1;

      numBefore = `${inputVals[dotIndex-1]}${inputVals[dotIndex]}${inputVals[dotIndex+1]}`



      console.log(numBefore);}
   }*/





let current = [];
function resultDisplay(num){

     inputVals.push(num);
     let withOUTcommas = inputVals.join('');
     resultDis.innerText = withOUTcommas; 
     
     for(let i = 0; i <= inputVals.length; i++){
      if(typeof inputVals[i] === 'number' 
         && typeof inputVals[i + 1] === 'number'
         && typeof inputVals[i + 2] === 'number'
         && typeof inputVals[i + 3] === 'number'
         && typeof inputVals[i + 4] === 'number'
         && typeof inputVals[i + 5] === 'number'
         && typeof inputVals[i + 6] != 'number'){
            let iIndex = inputVals.indexOf(i);
            iIndex = `${inputVals[i]}${inputVals[i+1]}${inputVals[i+2]}
            ${inputVals[i+3]}${inputVals[i+4]}${inputVals[i+5]}`;
            inputVals[i] = parseInt(iIndex);
            inputVals.pop();
            console.log(typeof(iIndex));
         }
         else if(typeof inputVals[i] === 'number' 
         && typeof inputVals[i + 1] === 'number'
         && typeof inputVals[i + 2] === 'number'
         && typeof inputVals[i + 3] === 'number'
         && typeof inputVals[i + 4] === 'number'
         && typeof inputVals[i + 5] != 'number'
         ){
            let iIndex = inputVals.indexOf(i);
            iIndex = `${inputVals[i]}${inputVals[i+1]}${inputVals[i+2]}
            ${inputVals[i+3]}${inputVals[i+4]}`;
            inputVals[i] = parseInt(iIndex);
            inputVals.pop();
            console.log(typeof(iIndex));
         }else if(typeof inputVals[i] === 'number' 
         && typeof inputVals[i + 1] === 'number'
         && typeof inputVals[i + 2] === 'number'
         && typeof inputVals[i + 3] === 'number'
         && typeof inputVals[i + 4] != 'number'
         
         ){
            let iIndex = inputVals.indexOf(i);
            iIndex = `${inputVals[i]}${inputVals[i+1]}${inputVals[i+2]}
            ${inputVals[i+3]}`;
            inputVals[i] = parseInt(iIndex);
            inputVals.pop();
            console.log(typeof(iIndex));
         }
      else if(typeof inputVals[i] === 'number' 
         && typeof inputVals[i + 1] === 'number'
         && typeof inputVals[i + 2] === 'number'
         && typeof inputVals[i + 3] != 'number'){
            let iIndex = inputVals.indexOf(i);
            iIndex = `${inputVals[i]}${inputVals[i+1]}${inputVals[i+2]}`;
            inputVals[i] = parseInt(iIndex);
            inputVals.pop();
            console.log(typeof(iIndex));
         }
      else if(typeof inputVals[i] === 'number' 
         && typeof inputVals[i + 1] === 'number'
         && typeof inputVals[i + 2] != 'number'){
            let iIndex = inputVals.indexOf(i);
            iIndex = `${inputVals[i]}${inputVals[i+1]}`;
            inputVals[i] = parseInt(iIndex);
            inputVals.pop();
            console.log(typeof(iIndex));
         }
     }
     console.log(inputVals);
     
      }
    
     
      function operations(){

         //equality operator short calculations

         if(inputVals.length == 4 && inputVals[3] == '=' && calcs.length == '0'){
            if(inputVals.includes('+')){
               let plus = inputVals.indexOf('+');
               if(plus != 1){
                  resultDis.textContent = 'error';
               }else{
                  add(inputVals[plus-1], inputVals[plus + 1]);
               }
            }else if(inputVals.includes('-')){
               let plus = inputVals.indexOf('-');
               console.log(plus);
               if(plus != 1){
                  resultDis.textContent = 'error';
               }else{
                  subtract(inputVals[plus-1], inputVals[plus + 1]);
               }
            }else if(inputVals.includes('*')){
               let plus = inputVals.indexOf('*');
               console.log(plus);
               if(plus != 1){
                  resultDis.textContent = 'error';
               }else{
                  multiply(inputVals[plus-1], inputVals[plus + 1]);
               }
            }else if(inputVals.includes('/')){
               let plus = inputVals.indexOf('/');
               console.log(plus);
               if(plus != 1){
                  resultDis.textContent = 'error';
               }else{
                  divide(inputVals[plus-1], inputVals[plus + 1]);
               }
            }
         }else if(inputVals.length > 4 && inputVals[inputVals.length - 1] == '='){
               let chunkSize = 2;
               let chunks = [];
               if(inputVals.length < 5){
                  if(typeof(inputVals[0]) != 'number' && inputVals.length != '0'){
                     resultDis.innerText = 'start with a number';
                  }
               }else if(inputVals >= 4){
                  for(let i = 0; i < inputVals.length; i += chunkSize){
                  chunks.push(inputVals.slice(i, i + chunkSize));

                  for(let j = 0; j < chunks.length; j++){
                  
                     if(chunks[j][1] == '='){
                        if(chunks[j][1] == '+'){
                           console.log(chunks[j][1]);
                           add(chunks[j][0], chunks[j][0]);
                        }else if(chunks[0][1] == '-'){
                           subtract(chunks[0][0], chunks[1][0]);
                        }else if(chunks[0][1] == '*'){
                           multiply(chunks[0][0], chunks[1][0]);
                        }else if(chunks[0][1] == '/'){
                           divide(chunks[0][0], chunks[1][0]);
                        }
                        } 
                     } 
                     console.log(inputVals);
               }
               }
            }

            //operate long calculations


   }

   
     

    
 
 
 

 let reset = document.querySelector('#reset');
 function clear(){
    window.location.reload();
 }
 reset.addEventListener('click', clear);