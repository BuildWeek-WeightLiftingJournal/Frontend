import React from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/workout.png';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #35373B;
    color: white;
    position: sticky;
    top: 0;
    padding: 0.25em 1em 0.25em 1em;
`;

const NavLeft = styled.div`
    display: flex;
    align-items: center;
`;

const NavTitle = styled.h3`
    padding-left: 1em;
    font-weight: bold;
    font-size: 2rem;
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
`;

const NavbarLink = styled.a`
    padding-left: 1em;
    text-decoration: none;
    color: white;
    &:hover {
        color: #ff5b7b;
    }
`;

const Logo = styled.img`
    width: 80%;
    height: 80%;
`;

const Nav = () => {
    return (
        <NavBar>
           <NavLeft>
               <div>
                   <Logo src={LogoImg} />
               </div>
               <NavTitle>Get Swole</NavTitle>
           </NavLeft>
           <NavRight>
               <NavbarLink href="#">Home</NavbarLink>
               <NavbarLink href="about.html">About</NavbarLink>
               <NavbarLink href="#">Features</NavbarLink>
               <NavbarLink href="#">FAQ</NavbarLink>
           </NavRight>
       </NavBar>
    );
}

export default Nav;