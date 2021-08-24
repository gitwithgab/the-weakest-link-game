import React from 'react';
import MoneyTreeBtns from "./MoneyTreeBtns"
import {useState, useEffect} from 'react';

const MoneyTreeList = () => {

    const [roundOne, setRoundOne] = useState([]);

    useEffect(()=>{
        
        const roundOneItems = [
            {
                id: 1,
                valueAmount:'$500,000'
            },
            {
                id: 2,
                valueAmount:'$250,000'
            },
            {
                id: 3,
                valueAmount:'$125,000'
            },
            {
                id: 4,
                valueAmount:'$75,000'
            },

            {
                id: 5,
                valueAmount:'$50,000'
            },
            {
                id: 6,
                valueAmount:'$10,000'
            },
            {
                id: 7,
                valueAmount:'$5000'
            },
            {
                id: 8,
                valueAmount:'$1000'
            },
            {
                id: 9,
                valueAmount:'$0'
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
                    <div></div>
             
                </div>
                
            </div>


       
        </>
                   
    )
    
 }

export default MoneyTreeList