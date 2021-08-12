import React,{useContext} from 'react';
import AvatarsCard from "../components/AvatarsCard";
import avatarContext from "../context/AvatarContext";


function createCard (AvatarsData) {
    return (
            <AvatarsCard 

                id = {AvatarsData.id}
                key = {AvatarsData.id}
                img = {AvatarsData.img}
                name = {AvatarsData.name}
                occupation = {AvatarsData.occupation}
                age = {AvatarsData.age}
                isSelected = {AvatarsData.isSelected}

            />
    );
}


const Avatars = () => {

    const {avatars} = useContext(avatarContext)
    
    return (
        <>
                <div className="avatars-container" >

                    {avatars.map(createCard)}

                </div>
        </>
    )
}

export default Avatars
