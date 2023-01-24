import React from "react";
import { StyledCta } from "./Styled.Cta";

const Cta = () => {
  return (
    <StyledCta>
      <p className="title">Walk-ins Welcome!</p>

      <div className="container-schedule">
        <p>
          Mon - Fri <span>9am - 5pm</span>
        </p>
        <p>
          Sat <span>9am - 12pm</span>
        </p>
      </div>
      <button>Book Now!</button>
    </StyledCta>
  );
};

export default Cta;
