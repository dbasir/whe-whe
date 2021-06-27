
import '../assets/css/App.css';
import React from 'react';
import ButtonList from './ButtonList';
import SelectedNumList from './SelectedNumList';
import PriceList from './PriceList';
import img from '../assets/img/dice.gif'

function HomePage(props) {
    return (
        <div className="styleclass">
            <div>
                <div><ButtonList Ifnum={props.Ifnum} num={props.num} Clear={props.Clear} cash={props.cash} random={props.random}/></div>
                <div><SelectedNumList num={props.num}/></div>
            </div>
            <div><img src={img} className="img"/></div>
            <div>
            <PriceList totalPrice={props.totalPrice} dollar={props.dollar}/>
            </div>
        </div>
    );
}

export default HomePage;
