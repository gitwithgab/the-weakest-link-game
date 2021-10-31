import React from 'react';
import MoneyTreeBtns from "./MoneyTreeBtns";
import {useState, useEffect} from 'react';

const MoneyTreeList = ({bank}) => {

    const [roundOne, setRoundOne] = useState([]);

    useEffect(()=>{
        
        const roundOneItems = [
            {
                id: 1,
                valueAmount:500000,
                isActive:false
            },
            {
                id: 2,
                valueAmount:250000,
                isActive:false
            },
            {
                id: 3,
                valueAmount:125000,
                isActive:false
            },
            {
                id: 4,
                valueAmount:75000,
                isActive:false
            },

            {
                id: 5,
                valueAmount:50000,
                isActive:false
            },
            {
                id: 6,
                valueAmount:10000,
                isActive:false
            },
            {
                id: 7,
                valueAmount:5000,
                isActive:false
            },
            {
                id: 8,
                valueAmount:1000,
                isActive:false
            },
            {
                id: 9,
                valueAmount:0,
                isActive:true
            },
        ]

        setRoundOne(roundOneItems)

    },[])

  

    function createTree (value) {
        return (
                <MoneyTreeBtns
    
                    id = {value.id}
                    key = {value.id}
                    valueAmount = {value.valueAmount}

                />
        );
    }

    return (

        <>

            <div className="money-tree">
            
                {roundOne.map(createTree)}

                <div>

                    <div>${bank}</div>
             
                </div>
                
            </div>


       
        </>
                   
    )
    
 }

export default MoneyTreeList