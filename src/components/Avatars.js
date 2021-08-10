import React from 'react';
import AvatarsData from "../components/AvatarsData";
import AvatarsCard from "../components/AvatarsCard";

function createCard (AvatarsData) {
    return (
            <AvatarsCard 
                key={AvatarsData.id}
                img={AvatarsData.img}
                name={AvatarsData.name}
                occupation={AvatarsData.occupation}
                age={AvatarsData.age}
            />
    );
}


const Avatars = () => {
    return (
        <>
                <div className="avatars-container" >

                    {AvatarsData.map(createCard)}

                </div>
        </>
    )
}

export default Avatars
