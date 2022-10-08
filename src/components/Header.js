import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = ({idSet}) => {

    const [dropDown,setDropDown] = useState('');

    const handleDropDown = () => {
        if (dropDown === '') {
            setDropDown('dropDown')
        }else{
            setDropDown('')
        }

    }

    const handleHomeBackground = () => {
        idSet('home-image');        
    }

    const handleDestinationBackground = () => {
        idSet('destination-image');        
    }

    const handleCrewBackground = () => {
        idSet('crew-image');        
    }

    const handleTechBackground = () => {
        idSet('tech-image');        
    }


    return (
        <header className="header">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <svg width="409" height="2" viewBox="0 0 409 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5" filter="url(#filter0_i_1_2)"><line x1="0.990531" y1="1.13556" x2="409.001" y2="1.13556" stroke="#C2C1C1"/></g><defs><filter id="filter0_i_1_2" x="0.990531" y="0.635559" width="408.01" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2"/></filter></defs></svg>
            <svg xmlns="http://www.w3.org/2000/svg"  onClick = {handleDropDown} width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
            <nav className={dropDown}>
                <ul>
                    <li onClick={handleHomeBackground}>
                        <NavLink to='/Home'  className={({isActive}) => isActive ? "active" : ""}>00</NavLink> 
                        <NavLink to='/Home'  className={({isActive}) => isActive ? "active" : ""}>HOME</NavLink>
                    </li>
                    <li onClick={handleDestinationBackground} >
                        <NavLink to="/Destinations"className={({isActive}) => isActive ? "active" : ""} >01</NavLink> 
                        <NavLink to="/Destinations"className={({isActive}) => isActive ? "active" : ""} >DESTINATION</NavLink>
                    </li>
                    <li onClick={handleCrewBackground} >
                        <NavLink to="/Crew" className={({isActive}) => isActive ? "active" : ""}>02</NavLink>
                        <NavLink to="/Crew"className={({isActive}) => isActive ? "active" : ""} >CREW</NavLink>
                    </li>
                    <li onClick={handleTechBackground} >
                        <NavLink to="/Technology"className={({isActive}) => isActive ? "active" : ""} >03</NavLink>
                        <NavLink to="/Technology"className={({isActive}) => isActive ? "active" : ""}>TECHNOLOGY </NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

 
export default Header;









