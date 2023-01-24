import React from "react";
import { StyledHeader } from "./Header.Styled";
import { images } from "../../constants/images";

const Header = () => {
  return (
    <StyledHeader>
      {/* <img src={images.barberPole} alt="" /> */}

      <div className="container">
        <p className="brand">Kathy's Barber Shop</p>
        <a href="https://www.google.com/maps/dir/40.8849599,-80.3324507/kathy's+barber+shop/@40.8751017,-80.3475992,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x883477f1cca6f2f7:0xf161d5f57cad8494!2m2!1d-80.2871677!2d40.8603907">
          201 5th St, Ellwood City, PA 16117
        </a>
        <a href="tel:7247582289"> (724) 758-2289</a>
      </div>

      {/* <img src={images.barberPole} alt="" /> */}
    </StyledHeader>
  );
};

export default Header;
