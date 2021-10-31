import React from 'react';

const MoneyTreeBtns = (props) => {
    
    return (
        <div className={props.isActive === true ? "dollar-value active" : "dollar-values"}>
            
            <button>${props.valueAmount}</button>
            
        </div>
    )
}

export default MoneyTreeBtns
