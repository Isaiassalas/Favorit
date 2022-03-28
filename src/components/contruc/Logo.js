import React from "react";
// import PropTypes from "prop-types";
import Favorit from "../../img/logo.png";
import "../../styles/Logo.css";

const Logo = ({ alt, src, spinSpeed }) => (
  <div className={`logo-container ${spinSpeed}`}>
    <img className="logo" alt={alt} src={src} />
   <img className="logo-favotit" alt={alt} src={Favorit} />
  </div>
);

// Logo.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   spinSpeed: PropTypes.string.isRequired
// };

export default Logo;