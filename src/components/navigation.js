// import { React, useState } from "react";
import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <HeaderContainer>
        <div>
          <Header>{props.title}</Header>
        </div>
        {showNav ? (
          <Hamburger onClick={() => toggleNav()}>&#120299;</Hamburger>
        ) : (
          <Hamburger onClick={() => toggleNav()}>&#9776;</Hamburger>
        )}
      </HeaderContainer>
      {showNav ? (
        <NavContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="Twister">Twister</NavLink>
          <NavLink to="Bingo">Bingo</NavLink>
        </NavContainer>
      ) : null}
    </>
  );
}

Navigation.propTypes = {};

// const Header = styled.h1``;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid blue; */
`;

const Header = styled.h1`
  text-align: center;
  margin-left: 10px;
`;

const Hamburger = styled.div`
  /* border: 1px solid red; */
  display: flex;
  /* justify-content: flex-end; */
  font-size: 50px;
  margin-right: 10px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
  font-size: 20px;
  z-index: 100;
`;

export default Navigation;
