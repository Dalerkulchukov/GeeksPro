import React from 'react';

const Card = ({ pokemon }) => {
    return (
        <>
        {
            pokemon.map((item) => {
                return (
                    <>
                        <div className="card" key={item.id}>
                            <img src={item.sprites.front_default} alt="" />
                            <h2>{item.name}</h2>
                        </div>
                    </>
                )
            })
        }
        </>
    );
};

export default Card;