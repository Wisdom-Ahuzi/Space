import data from './data.json';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


const Destinations = () => {

    const [planets,setPlanets] = useState({
        image:require("../assets/destination/image-moon.png"),
        planet:'MOON',
        planetText:"See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        averageDistance:'384,400 km',
        timeTravel:'3 days', 
    });

    const destinationsData = data.destinations;
    
    const handleClick = (destination) => {
        setPlanets({
            image: require("../assets/destination/" + destination.images.png),
            planet:destination.name,
            planetText:destination.description,
            averageDistance:destination.distance,
            timeTravel:destination.travel,
        })   
    }

    return(
    <div className="Destinations">
        <div>
        </div>
        <div className="destinations-container">
            <div className="pick-destination">
                <span>01</span>
                <p>PICK YOUR DESTINATION</p>
            </div>

            <div className="destination-cover">
                <div className="image-container">
                    <img src={planets.image} alt="" />
                </div>

                <div className="planet-details">
                    <div className="planet-nav">
                        {destinationsData.map(destination => {
                            return(
                                <span key={uuidv4()}  onClick = {() => handleClick(destination)} className={planets.planet === destination.name ? "activePlanet" : ""}>{destination.name}</span>
                            )
                        })}
                    </div>
                    <h3>{planets.planet}</h3>
                    <p>
                        {planets.planetText}
                    </p>

                    <svg width="409" height="2" viewBox="0 0 409 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5" filter="url(#filter0_i_1_2)"><line x1="0.990531" y1="1.13556" x2="409.001" y2="1.13556" stroke="#C2C1C1"/></g><defs><filter id="filter0_i_1_2" x="0.990531" y="0.635559" width="408.01" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2"/></filter></defs></svg>

                    <div className="distance-time">
                        <div className="distance">
                            <span>AVG. DISTANCE</span>
                            <span>{planets.averageDistance}</span>
                        </div>

                        <div className="time">
                            <span>EST. TIME TRAVEL</span>
                            <span>{planets.timeTravel}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )


}

export default Destinations;