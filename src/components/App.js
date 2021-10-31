import React,{useState} from 'react';
import avatarContext from "../context/AvatarContext";
import selAvatarContext from "../context/SelAvatarContext";
import roundOneContext from "../context//RoundOneContext";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';
import StartPage from "../pages/StartPage";
import SelectPage from "../pages/SelectPage";
import PlayPage from "../pages/PlayPage";


const App = () => {


  const [avatars, setAvatars] = useState([
    {
        id : 1,
        img : "avatar1.png",
        imgFull : "akeila.png",
        name : "Akeila",
        occupation : "Lecturer",
        age : "25",
        isSelected : false,
    },

    {
        id : 2,
        img : "avatar2.png",
        imgFull : "michael.png",
        name : "Michael",
        occupation : "Entrepreneur",
        age : "30",
        isSelected : false,
    },

    {
        id : 3,
        img : "avatar3.png",
        imgFull : "maritza.png",
        name : "Maritza",
        occupation : "Librarian",
        age : "68",
        isSelected : false,
    },

    {
        id : 4,
        img : "avatar4.png",
        imgFull : "david.png",
        name : "David",
        occupation : "Manager",
        age : "59",
        isSelected : false,
    },

    {
        id : 5,
        img : "avatar5.png",
        imgFull : "lucas.png",
        name : "Lucas",
        occupation : "Journalist",
        age : "25",
        isSelected : false
    },

    {
        id : 6,
        img : "avatar6.png",
        imgFull : "sienna.png",
        name : "Sienna",
        occupation : "Psychologist",
        age : "23",
        isSelected : false
    }
]);


const [selAvatars, setSelAvatar] = useState({
  
  id:"",
  img:"",
  name:"",
  occupation:"",
  age:"",
  isSelected:false

})

const [roundOneMt, setRoundOneMt] = useState([
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
            isActive:false
        }
]);



  return (
    <>
            <Router>

                  <Switch>
                     
                        <Route exact path="/">
                          
                            <StartPage />
                      
                        </Route>


                          <avatarContext.Provider  value={{avatars,setAvatars}}>
                        
                          <selAvatarContext.Provider  value={{selAvatars,setSelAvatar}}>

                          <roundOneContext.Provider value={{roundOneMt, setRoundOneMt}}>
                          
                                    <Route path="/select">
                                      
                                        <SelectPage />
                                    
                                    </Route>

                                    <Route path="/play">
                                        
                                        <PlayPage />
                                    
                                    </Route>

                          </roundOneContext.Provider>
                      
                          </ selAvatarContext.Provider>
                     
                          </ avatarContext.Provider>


                      
                
                  </Switch>

                </Router>
    </>
  )
}

export default App
