import crews from './data.json';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


const Crew = () => {

    const [crewsId, setCrewsId] = useState({
        job:'FLIGHT ENGINEER',
        cname:'Anousheh Ansari',
        about:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        face:require("../assets/crew/image-anousheh-ansari.png")
    })

    const crewsData = crews.crew;


    const handleClick = (crew) => {
        setCrewsId(() => {
            return({
                job:crew.role,
                cname:crew.name,
                about:crew.bio,
                face:require("../assets/crew/" + crew.images.png)
            })
        })
    }
    return (
        <div className="Crew">
            <div>
            </div>

            <div className="crew-container">
                <div className="meet-crew">
                    <span>02</span>
                    <p>MEET YOUR CREW</p>
                </div>

                <div className="crew-cover">
                    <div className="crew-info">
                        <h3>{crewsId.job}</h3>

                        <h2>{crewsId.cname}</h2>

                        <p> {crewsId.about}</p>

                        <nav>
                            {crewsData.map(crew => {
                                return(
                                    <span key={uuidv4()}  onClick={() => handleClick(crew)} className = {crewsId.cname === crew.name ? "activeCrew" : ""} ></span>
                                )
                            })}
                        </nav>
                    </div>

                    <div className="crew-personnel">
                        <img key={uuidv4()} src={crewsId.face} />
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Crew;