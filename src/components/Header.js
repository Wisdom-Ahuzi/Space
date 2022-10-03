

const Header = () => {
    return (
        <header className="header">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <svg width="409" height="2" viewBox="0 0 409 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5" filter="url(#filter0_i_1_2)"><line x1="0.990531" y1="1.13556" x2="409.001" y2="1.13556" stroke="#C2C1C1"/></g><defs><filter id="filter0_i_1_2" x="0.990531" y="0.635559" width="408.01" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2"/></filter></defs></svg>
            <nav>
                <ul>
                    <li>
                        <a href='/Home'>00</a> 
                        <a href='/Home' className="active">HOME</a>
                    </li>
                    <li>
                        <a href={``}>01</a> 
                        <a href={``}>DESTINATION</a>
                    </li>
                    <li>
                        <a href={``}>02</a>
                        <a href={``}>CREW</a>
                    </li>
                    <li>
                        <a href={``}>03</a>
                        <a href={``}>TECHNOLOGY </a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

 
export default Header;









