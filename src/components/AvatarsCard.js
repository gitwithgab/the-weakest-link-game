import React, { useContext } from 'react';
import AvatarContext from "../context/AvatarContext";
import selAvatarContext from "../context/SelAvatarContext";

const AvatarsCard = (props) => {

    
    const avatarImage = require(`../assets/img/${props.img}`).default;
    const { avatars } = useContext(AvatarContext);
    const { setSelAvatar } = useContext(selAvatarContext);

    let selectedAvatar = () =>

    {

        const dupAvatars = [...avatars];

        let activeAvatar = dupAvatars.find((avatar) => avatar.isSelected === true);

        if(activeAvatar)

        {
        
            activeAvatar.isSelected = false;
        
        }

        let seldAvatar = dupAvatars.find((avatar) => avatar.id === props.id);
        
        seldAvatar.isSelected = true;

        setSelAvatar(seldAvatar);
     
    }





    return (
        <>
                    <div 
                        className={props.isSelected ? "avatar-sect selected" : "avatar-sect"} 
                        onClick={selectedAvatar}>
  
                                <div>

                                    <img src={avatarImage} alt="avatar headshot" />

                                </div>


                                <div>

                                    <h2>
                                        {props.name}
                                    </h2>

                                    <h4>{props.occupation}</h4>

                                    <h4>{props.age}</h4>

                                </div>

                    </div>  

                    
        </>
    )
}

export default AvatarsCard
