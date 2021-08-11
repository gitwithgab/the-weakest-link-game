import React, { useContext } from 'react';
import AvatarContext from "../context/AvatarContext";
import selAvatarContext from "../context/SelAvatarContext";

const AvatarsCard = (props) => {

    const avatarImage = require(`../assets/img/${props.img}`).default;
    const {avatars} = useContext(AvatarContext);
    const { setSelAvatar} = useContext(selAvatarContext);
    
    const selectedAvatar = () =>

    {
       
        const seldAvatar = avatars.find((avatar) => avatar.isSelected === true);

        setSelAvatar(seldAvatar);
 
    }

 


    return (
        <>
                    <div className="avatar-sect" onClick={selectedAvatar} >
  
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
