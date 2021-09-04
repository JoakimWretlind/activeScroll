import { useState } from 'react';
import { Link } from 'react-scroll';
import {
    NavContainer,
    NavUL,
    NavLI
} from './Navbar.styling';
import { navbarData } from './navbarData';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        setIsActive(isActive)
        e.target.classList.add("active");
    }

    return (
        <NavContainer isActive={isActive}>
            <NavUL>
                {navbarData.map((item, index) => {
                    return (
                        <NavLI key={index}>
                            <Link to={item.path} smooth={true} duration={1000} onClick={(e) => handleClick(e)} style={{
                                color: isActive ? "red" : "white"
                            }}>{item.title}</Link>
                        </NavLI>
                    )
                })}
            </NavUL>
        </NavContainer>
    )
}

export default Navbar
