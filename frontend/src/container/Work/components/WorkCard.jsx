import React from "react";
import images from '../../../constants/images';


const Card = (props) => {
    return (
        <div className='app__work-card'>
            <div className="app__work-card-content"
                style={
                    {backgroundImage: `url(${props.background}) ,linear-gradient(1deg, rgba(0, 0, 0, 0.33) 30%, rgba(255, 255, 255, 0.25) 100%)`}}>
                <div className="app__work-card-skills">
                    <div>
                        {props.img.map((icons) => (<img src={icons} alt="Símbologia das tecnologias utilizada" />))}
                    </div>
                    <div>
                        <a href={props.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        ><img src={images.github} alt="Símbolo github" /></a>
                    </div>
                </div>
            </div>
            <div className="app__work-card-description">
                <h1>{props.title}</h1>
                <p><a href={props.link}
                target='_blank'
                rel='noopener noreferrer'
                >{props.link}</a></p>
            </div>
        </div>
    )
}

export default Card;