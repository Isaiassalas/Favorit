/* eslint-disable jsx-a11y/alt-text */
import React from "react";


import "../../styles/Links.css";



const Links = ({ links }) => (

  
  <div className="social-links">
    {links.map((link, i) => {
      return (
        <a
          className="social-link"
          key={i}
          target="_blank"
          rel="noopener noreferrer"
          href={link.url}
          
        >
          <img className="social-logo" src={link.logo}/>
          
          <span className="social-text">{link.text}</span>
        </a>
      );
    })}
  </div>
);

// Links.propTypes = {
//   links: PropTypes.arrayOf(
//     PropTypes.shape({
//       url: PropTypes.string.isRequired,
//       logo: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

export default Links;
