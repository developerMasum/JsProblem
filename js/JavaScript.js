let serial = 0;

// *******-card 01 *-//////////////////////////////************/ */
document
  .getElementById("btn-triangle-calculate")
  .addEventListener("click", function () {
    serial += 1;
    const figName = document.getElementById("first-name").innerText;
    const baseValue = getInputFieldById("base-value");

    const heightValue = getInputFieldById("height-value");

    if (baseValue <= 0 || heightValue <= 0 ||  (isNaN(baseValue)) ||  (isNaN(heightValue)) ) {
      
      return  alert('please enter Valid Input Value') ;
    }
   
      const totalArea = 0.5 * baseValue * heightValue;
      setElementById("base", baseValue);
      setElementById("height", heightValue);
      displayDataChart(figName, totalArea.toFixed(2));
      
   
   

   
    // push data in chart :
  });


// *--*-* functions alll***
// **----**--/

// common function call
function setElementById(id, value) {
  const base = document.getElementById(id);
  base.innerText = value;
}

// display data in table chart by common function
function displayDataChart(figName, totalArea) {
  const container = document.getElementById("table-container");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td> ${serial} </td>
    <td> ${figName} </td>
    <td> ${totalArea} cm&sup2 </td>
    <td> <button class="btn btn-xs normal-case rounded bg-cyan-500 text-white border-none" > Convert to m&sup2 </button> </td>
    
    
  
    
    
    `;

  container.appendChild(tr);
}

//  *-******** get all input field id
function getInputFieldById(elementId) {
  const inputField = document.getElementById(elementId).value;
  // const inputString = inputField.value;
  const previousTotalInput = parseFloat(inputField);
  return previousTotalInput;
}

// card 2****--*-*-*-*-*-*-*-*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Q

document
  .getElementById("btn-rectangle-calculate")
  .addEventListener("click", function () {
    serial += 1;

    const figName = document.getElementById("second-name").innerText;

    const widthValue = getInputFieldById("rectangle-width-value");

    const lengthValue = getInputFieldById("rectangle-length-value");

    setElementById("width-rec", widthValue);
    setElementById("length-rec", lengthValue);

    const totalArea = widthValue * lengthValue;

    displayDataChart(figName, totalArea.toFixed(2));
  });

// -*--*-*-*-*-*-*- card 3

document
  .getElementById("parallelogram-calculate")
  .addEventListener("click", function () {
    serial += 1;
    const figName = document.getElementById("third-name").innerText;

    const baseValue = getInputFieldById("parallelogram-base-value");
    const heightValue = getInputFieldById("parallelogram-height-value");
    setElementById("para-b", baseValue);
    setElementById("para-h", heightValue);

    const totalArea = baseValue * heightValue;
    displayDataChart(figName, totalArea.toFixed(2));
  });

//   card 4 */////////////////////////////////////////

document
  .getElementById("rhombus-calculate")
  .addEventListener("click", function () {
    serial += 1;
    const figName = document.getElementById("fourth-name").innerText;

    const diagonal1Value = getInputFieldById("rhombus-d1-value");
    const diagonal2Value = getInputFieldById("rhombus-d2-value");

    setElementById("rhom-d1", diagonal1Value);
    setElementById("rhom-d2", diagonal2Value);

    const totalArea = 0.5 * diagonal1Value * diagonal2Value;

    // push data in chart :
    displayDataChart(figName, totalArea.toFixed(2));
  });

//   card 55 /////////////////////////////

document
  .getElementById("pentagon-calculate")
  .addEventListener("click", function () {
    serial += 1;
    const figName = document.getElementById("fifth-name").innerText;

    const pentagonPValue = getInputFieldById("pentagon-p-value");
    const pentagonBValue = getInputFieldById("pentagon-b-value");

    setElementById("penta-p", pentagonPValue);
    setElementById("penta-b", pentagonBValue);

    const totalArea = 0.5 * pentagonBValue * pentagonPValue;

    // push data in chart :
    displayDataChart(figName, totalArea.toFixed(2));
  });

//   6th one  ///////////////////////***************** */

document
  .getElementById("ellipse-calculate")
  .addEventListener("click", function () {
    serial += 1;
    const figName = document.getElementById("sixth-name").innerText;

    const ellipseAValue = getInputFieldById("ellipse-a-value");
    const ellipseBValue = getInputFieldById("ellipse-b-value");

    setElementById("elli-a", ellipseAValue);
    setElementById("elli-b", ellipseBValue);

    const totalArea = 3.14 * ellipseAValue * ellipseBValue;

    // push data in chart :
    displayDataChart(figName, totalArea.toFixed(2));
  });

  // hover styles is Here 
  

const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.getElementById('color').style.backgroundColor = randomCode;
  
};
// color for 1st card
document.querySelector('.card-color').addEventListener("mouseover", function () {
  getColor();
}); 



// carrd 2

const getColor2 = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.getElementById('color2').style.backgroundColor = randomCode;
  
};
// color for 1st card
document.getElementById('color2').addEventListener("mouseover", function () {
  getColor2();
}); 


// card3 

const getColor3 = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.getElementById('color3').style.backgroundColor = randomCode;
  
};
// color for 1st card
document.getElementById('color3').addEventListener("mouseover", function () {
  getColor3();
}); 

// card4

const getColor4 = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.getElementById('color4').style.backgroundColor = randomCode;
  
};
// color for 1st card
document.getElementById('color4').addEventListener("mouseover", function () {
  getColor4();
}); 

// card5 color 
const getColor5 = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.getElementById('color5').style.backgroundColor = randomCode;
  
};
// color for 1st card
document.getElementById('color5').addEventListener("mouseover", function () {
  getColor5();
}); 
// color 6 color
const getColor6 = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.getElementById('color6').style.backgroundColor = randomCode;
  
};
// color for 1st card
document.getElementById('color6').addEventListener("mouseover", function () {
  getColor6();
});  
