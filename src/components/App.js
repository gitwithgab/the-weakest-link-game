import React,{useState} from 'react';
import avatarContext from "../context/AvatarContext";
import selAvatarContext from "../context/SelAvatarContext";
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



  return (
    <>
            <Router>

                  <Switch>
                     
                        <Route exact path="/">
                          
                            <StartPage />
                      
                        </Route>


                        <avatarContext.Provider  value={{avatars,setAvatars}}>
                        
                        <selAvatarContext.Provider  value={{selAvatars,setSelAvatar}}>
                        
                            <Route path="/select">
                              
                                <SelectPage />
                            
                            </Route>

                            <Route path="/play">
                                
                                <PlayPage />
                            
                            </Route>

                      </ selAvatarContext.Provider>
                     
                      </ avatarContext.Provider>
                      
                
                  </Switch>

                </Router>
    </>
  )
}

export default App
