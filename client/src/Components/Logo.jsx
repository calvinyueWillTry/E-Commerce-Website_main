import React from "react";
import logoImage from "../public/images/banner-image.png";

function Logo() {
    return (
        <div>
            <img className="img_responsive" src={logoImage} alt="Logo" />
        </div>
    );
}

export default Logo;
//exported to the Header