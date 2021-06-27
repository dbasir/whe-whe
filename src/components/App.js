
import '../assets/css/utils.css'
import Home from './HomePage'
import Header from './Header'
import React, { useState } from 'react';

function App() {
  const [dollar, insertDollar] = useState(0);
  const [num, setNum] = useState([]);

  const Ifnum = (e) => {
    let number = e.target.defaultValue;
    // alert(number);
    let numArr;
    if (num.includes(number)) {
      numArr = num.filter(function (value) {
        return value != number;
      });
    }
    else {
      if (num.length >= 5) {
        alert("Oops!! You cannot add more than 5 numbers");
        return;
      }
      numArr = [...num, number]
    }
    //  alert(newNumbers);
    setNum(numArr);
  }

  const totalPrice = (e) => {
    if (num.length < 5) {
      alert("Oops!! You cannot select money before selecting all the 5 numbers!");
      return;
    }
    let count = e.target.id.split("_")[1];
    const total = parseInt(dollar) + parseInt(count);
    insertDollar(total);
  }
  const Clear = () => {
    const resetNum = [];
    setNum(resetNum);
    const resetDollar = 0;
    insertDollar(resetDollar);
  }
  const cash = () => {

    if (dollar == 0) {
      alert("Oops!! You cannot click cash until cash amount is empty!!");
    }
    else if (num.length == 0) {
      alert("Please select all 5 numbers first");
    }
    else {
      alert("Congratulations!! You won $" + (parseInt(dollar)));
      Clear();

    }

  }
  const random = () => {
    //alert("random");
    setNum([]);
    let array = [];
    while (array.length < 5) {
      let r = Math.floor(Math.random() * 20) + 1;
      if (array.indexOf(r) === -1) array.push(r);
    }
    for (let i = 0; i < num.length; i++) {
      if (!array.includes(parseInt(num[i]))) {
        break;
      }
    }
    array.includes();
    setNum(array);
  }

  return (
    <div >
      <Header />
      <Home Ifnum={Ifnum} num={num} totalPrice={totalPrice} dollar={dollar} Clear={Clear} cash={cash} random={random}/>
    </div>
  );
}

export default App;
