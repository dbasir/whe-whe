
import '../assets/css/App.css';
import React from 'react';

function PriceList(props) {
    return (
        <div >
            <div className="buttons">
                <div>
                    <input className="album" onClick={props.totalPrice} id="bp_1" type="button" value="$ 1" />
                    <input className="album" onClick={props.totalPrice} id="bp_5" type="button" value="$ 5" />
                </div>
                <div><input className="album" onClick={props.totalPrice} id="bp_10" type="button" value="$ 10" />
                    <input className="album" onClick={props.totalPrice} id="bp_20" type="button" value="$ 20" /></div>
                <div id="total">
                    <h3>Total:</h3>  ${props.dollar}
                </div>
            </div>


        </div>
    );
}

export default PriceList;
