import React, { useState } from "react";
import bird from '../public/images/bird.svg'
import cat from '../public/images/cat.svg'
import cow from '../public/images/cow.svg'
import dog from '../public/images/dog.svg'
import gator from '../public/images/gator.svg'
import horse from '../public/images/horse.svg'
import heart from '../public/images/heart.svg'
import './AnimalShow.css'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

function AnimalShow({type, key}){

    const [clicks,setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks+1);
    }
    
    return(
        <div className='animal-show' onClick={handleClick}>
            <img 
                className="animal"
                id="animal"
                alt="animal" 
                src={svgMap[type]} 
                style={{height:'60px'}}
            />
            <img 
                className="heart"
                alt="like" 
                src={heart} 
                style={{width:10+10*clicks+'px'}}
            />
        </div>
    );
}

export default AnimalShow;