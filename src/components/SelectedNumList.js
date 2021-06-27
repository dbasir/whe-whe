
import '../assets/css/App.css';
import React,{ useState } from 'react';
import Selecteditem from './SelectedItem';

const SelectedNumList=(props)=> {
  return (
    <div className="selectedNumbers">
        <h3>Selected Numbers</h3>
        {props.num.map((nums) => (<Selecteditem nums={nums} />))}
    
    </div>
  );
}

export default SelectedNumList;
