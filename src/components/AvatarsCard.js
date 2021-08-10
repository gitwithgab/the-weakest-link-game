import React from 'react';

const AvatarsCard = (props) => {
    return (
        <>
                    <div className="avatar-sect">

                                <div>

                                    <img src={props.img} alt="avatar headshot" />

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
