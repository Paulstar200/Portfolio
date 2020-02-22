import React from 'react'
import styled from 'styled-components';
import { montserrat } from '../styles/type';

export interface NavigationProps {

}

const Navigation: React.SFC<NavigationProps> = () => {
  return (
    <Header>
      <HeaderLogo>
        <a className="logo-item" href="#about">VITALIS</a>
      </HeaderLogo>
      <NavigationBody>
        <NavItem >
          <a className="nav-item" href="#about">Home</a>
        </NavItem>
        <NavItem >
          <a className="nav-item" href="#proficiencies">Stacks</a>
        </NavItem>
        <NavItem >
          <a className="nav-item" href="#posts">Posts</a>
        </NavItem>
        <NavItem >
          <a className="nav-item" href="#portfolio">Portfolio</a>
        </NavItem>
        <NavItem >
          <a className="nav-item" href="#contact">Contact</a>
        </NavItem>
      </NavigationBody>
    </Header>
  );
}

const HeaderLogo = styled.p`
    font-size: 20px;
    color: #fff;
    font-family: ${montserrat}, Sans-serif;
    font-weight: 800;
    text-align: center;
    margin: 0;
    padding: 5px;
    .logo-item{
      text-decoration: none;
      color: #fff;
    }
    @media only screen and (min-width: 768px) {
      margin-left: 150px;
      
    }
`;

const Header = styled.div`
  width: 100%;
  background: rgba(0, 0, 0);
  position: fixed;
  z-index: 1000;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
`;

const NavigationBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 5px 20px;
  // margin: 0 auto;
  background: #000;
  width: 90%;
  @media only screen and (min-width: 768px) {
    width: 40%;
    background: #000;
    margin-right: 100px;
  }
`;

const NavItem = styled.li`
  list-style: none;
  .nav-item{
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-family: ${montserrat}, Sans-serif;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  .nav-item:hover{
    color: #748182;
  }
  
`;


export default Navigation;