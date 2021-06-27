
import '../assets/css/App.css';
import React from 'react';

const ButtonList=(props)=> {
  return (
    <div className="App" id="numberList">
        <table>
            <tr>
                <td><input type="button" value="1" onClick={props.Ifnum} className={props.num.includes("1") ? "active" : "album"}/></td>
                <td><input type="button" value="2" onClick={props.Ifnum} className={props.num.includes("2") ? "active" : "album"}/></td>
                <td><input type="button" value="3" onClick={props.Ifnum} className={props.num.includes("3") ? "active" : "album"}/></td>
                <td><input type="button" value="4" onClick={props.Ifnum} className={props.num.includes("4") ? "active" : "album"}/></td>
                <td><input type="button" value="5" onClick={props.Ifnum} className={props.num.includes("5") ? "active" : "album"}/></td>
            </tr>
            <tr>
                <td><input type="button" value="7" onClick={props.Ifnum} className={props.num.includes("7") ? "active" : "album"}/></td>
                <td><input type="button" value="8" onClick={props.Ifnum} className={props.num.includes("8") ? "active" : "album"}/></td>
                <td><input type="button" value="9" onClick={props.Ifnum} className={props.num.includes("9") ? "active" : "album"}/></td>
                <td><input type="button" value="10" onClick={props.Ifnum} className={props.num.includes("10") ? "active" : "album"}/></td>
                <td><input type="button" value="11" onClick={props.Ifnum} className={props.num.includes("11") ? "active" : "album"}/></td>
            </tr>
            <tr>
                <td><input type="button" value="13" onClick={props.Ifnum} className={props.num.includes("13") ? "active" : "album"}/></td>
                <td><input type="button" value="14" onClick={props.Ifnum} className={props.num.includes("14") ? "active" : "album"}/></td>
                <td><input type="button" value="15" onClick={props.Ifnum} className={props.num.includes("15") ? "active" : "album"}/></td>
                <td><input type="button" value="16" onClick={props.Ifnum} className={props.num.includes("16") ? "active" : "album"}/></td>
                <td><input type="button" value="17" onClick={props.Ifnum} className={props.num.includes("17") ? "active" : "album"}/></td>
            </tr>
            <tr>
                <td><input type="button" value="19" onClick={props.Ifnum} className={props.num.includes("19") ? "active" : "album"}/></td>
                <td><input type="button" value="20" onClick={props.Ifnum} className={props.num.includes("20") ? "active" : "album"}/></td>
                <td><input type="button" value="18" onClick={props.Ifnum} className={props.num.includes("18") ? "active" : "album"}/></td>
                <td><input type="button" value="12" onClick={props.Ifnum} className={props.num.includes("12") ? "active" : "album"}/></td>
                <td><input type="button" value="6" onClick={props.Ifnum} className={props.num.includes("6") ? "active" : "album"}/></td>
            </tr>
        </table>


        <hr></hr>
        <table>
            <tr>
                <td><input  type="button" className="clear" value="Clear" onClick={props.Clear}/></td>
                <td><input type="button" className="clear" value="Cash" onClick={props.cash}/></td>
                <td><input type="button" className="clear" value="Random" onClick={props.random}/></td>
                </tr>
        </table>

    
    </div>
  );
}

export default ButtonList;
