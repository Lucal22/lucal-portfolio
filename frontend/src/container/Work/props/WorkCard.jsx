import React from "react";
import images from '../../../constants/images';

const Card = () => {
    return (
        <div className='app__work-card'>
            <div className="app__work-card-content">
                <div className="app__work-card-skills">
                    <h1>Content</h1>
                </div>
            </div>
            <div className="app__work-card-title">
            <h1>Keeper App</h1>
            <img src={images.arrow} alt="Ver detalhes"></img>
            </div>
        </div>
    )
}

export default Card;