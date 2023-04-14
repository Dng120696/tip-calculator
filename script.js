'use strict';
// input element
const billinput = document.getElementById('bill');
const peopleInput = document.getElementById('num-people');
const customInput = document.getElementById('input-num');
// button element
const btnTip =document.querySelectorAll(`.button input[type='button']`);
const btnReset = document.getElementById('reset');
// text content
const totalTip = document.querySelector('.tip');
const totalVal = document.querySelector('.total-value');


let tipValue = 0.15;//active value of tip
let peopleValue ,billValue;


const errorMessage = (val,element) =>{
  if(val){
    element.parentElement.classList.add('focus');
    element.parentElement.classList.remove('error');
  }else{
    element.parentElement.classList.add('error');
    element.parentElement.classList.remove('focus');

}
};

const removeErrorFocus = (element) =>{
  element.parentElement.classList.remove('error');
  element.parentElement.classList.remove('focus');
};


const calculateTotal = () =>{
  if(!peopleValue){
    peopleInput.parentElement.classList.add('error');
    return 0;
  }else{
    peopleInput.parentElement.classList.remove('error');
    if(peopleValue >= 1){
      if(!billinput.value){
        return 0;
      }else{
        let tipPerPerson = (tipValue * billValue) / peopleValue;
        let tip = tipValue * billValue;
        let totalPerPeson = (tip + billValue) / peopleValue;
        totalTip.textContent = '$' + tipPerPerson.toFixed(2);
        totalVal.textContent = '$' + totalPerPeson.toFixed(2);
      }
    } 
    } 
};


const billVal = () =>{
  billValue = parseFloat(billinput.value);
  errorMessage(billValue,billinput);
  calculateTotal();
};


const peopleVal = () =>{
  peopleValue = parseFloat(peopleInput.value);
    errorMessage(peopleValue,peopleInput);

    calculateTotal();
    
};


const customVal = () =>{
  tipValue = parseFloat(customInput.value / 100);
  errorMessage(tipValue,customInput);


  if(customInput.value >= 100){
    return 0;
  }else{ 
      calculateTotal();
    
  }
};


for(let i = 0; i<btnTip.length; i++){

  btnTip[i].addEventListener('click',() =>{
    tipValue = parseFloat(btnTip[i].value) /100; 
    btnTip[i].classList.remove('active');
      calculateTotal();
  });
  };


  billinput.addEventListener('input',billVal);
  peopleInput.addEventListener('input',peopleVal);
  customInput.addEventListener('input',customVal);




// RESET ALL
btnReset.addEventListener('click',(e) =>{
  e.preventDefault();
  if(billValue && tipValue && peopleValue){
    removeErrorFocus(billinput);
    removeErrorFocus(peopleInput);
    removeErrorFocus(customInput);
    billinput.value = '';
    peopleInput.value = '';
    customInput.value = '';
    totalTip.textContent = "$0.00";
    totalVal.textContent = "$0.00";
  }
});




