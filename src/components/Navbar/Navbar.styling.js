import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: fixed;
    height: 8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;  
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 116rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLI = styled.li`
    color: #fff;
    font-size: 1.4rem;
    letter-spacing: .3rem;
    cursor: pointer;
    transition: .25s ease-out;  
     border-bottom: .1rem solid ${({ isActive }) => (isActive ? "red" : "green")};
    &:hover {
        color: red;           
    }
`;
