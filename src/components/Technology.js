import technology from './data.json';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

const Technology = () => {
    const techData = technology.technology;

    const [techId,setTechId] = useState({
        name:"LAUNCH VEHICLE",
        image:require("../assets/technology/image-spaceport-portrait.jpg"),
        description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    })

    const handleTechClick = (tech) => {
        setTechId({
            name:tech.name,
            image:tech.images,
            description:tech.description
        })
    }

    return (
        <div className="Technology">
            <div>
            </div>

            <div className="technology-container">
                <div className="space-launch">
                    <span>03</span>
                    <p>SPACE LAUNCH 101</p>
                </div>

                <div className="technology-cover">
                    <nav>
                        {techData.map(tech => {
                            return(
                                <span key={uuidv4()} onClick= {() => handleTechClick(tech)} className = {tech.name === techId.name ? "activeTech" : ""}>{tech.id}</span>
                            )
                        })}
                    </nav>

                    <div className="cover">
                        <span>THE TERMINOLOGY...</span>

                        <h3>{techId.name}</h3>

                        <p>
                            {techId.description}
                        </p>
                    </div>

                    <div className="space-craft">
                        <img src={techId.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Technology;