import React, {Fragment, useContext} from 'react';
import { GlobalContext } from '../App';


export const TransactionList = () => {
        const globalContext = useContext(GlobalContext);
        console.log(globalContext);
    return (
    <Fragment>
            
        <h3>History</h3>
            <ul className="list">
                 <li className="minus">
                    Cash <span>-#400</span>
                    <button className="delete-btn">x</button>
                </li>
            </ul>
    </Fragment>
       
    )
}
