import React, { Component } from "react";
import Logo from "./contruc/Logo";
// import Description from "./Description";
import Links from "./contruc/Links";
import Countdown from "./contruc/Countdown";
import Subscribe from "./contruc/Subscribe";
import logo from "../img/gear-with-holes.svg";
// import xmark from "../images/x-mark.svg";
// import check from "../images/check-mark.svg";
import facebook from "../img/FB.png";
import instagram from "../img/IG.png";
import "../styles/ComingSoon.css";
import "../styles/Title.css";


class Construc extends Component {
  state = {
    countdown: {
      countdownDate: "2022-04-30 00:00:00"
    },
    logo: {
      alt: "Spinning Gear",
      src: logo,
      spinSpeed: "slow"
    },
    // title: {
    //   text: "Proximamente"
    // },
    // description: {
    //   text:
    //     "La plataforma de Favorit Blog estará en funcionamiento en breve. Suscríbase a nuestro boletín de noticias a continuación para recibir actualizaciones cuando haya nuevo material disponible."
    // },
    subscribe: {
      placeholder: "Ingrese su correo electronico",
      placeholder2:"Ingrese su nombre",
      buttonText: "Enviar"
    },
    links: [
      {
        url: "https://www.facebook.com/favoritvenezuela/",
        logo: facebook,
        text: "Unirse"
      },
      {
        url: "https://instagram.com/favoritvenezuela?utm_medium=copy_link",
        logo: instagram,
        text: "Seguir"
      }
    ]
    // notification: {
    //   src: "",
    //   alt: "",
    //   message: "",
    //   visible: false,
    //   level: ""
    // }
  };

//   configureNotification = obj => {
//     const notification = { ...this.state.notification };
//     notification.message = obj.body.msg;
//     if (obj.status === 200) {
//       notification.src = check
//       notification.alt = "Check Mark"
//       notification.level = "success"
//     } else {
//       notification.src = xmark
//       notification.alt = "X Mark"
//       notification.level = "error"
//     }
//     this.setState({ notification });
//   };

//   showNotification = () => {
//     const notification = { ...this.state.notification };
//     notification.visible = true;
//     this.setState({ notification }, () => {
//       setTimeout(() => {
//         notification.visible = false;
//         this.setState({ notification });
//       }, 3000);
//     });
//   };

//   changeLogoSpeed = () => {
//     const logo = { ...this.state.logo };
//     logo.spinSpeed = "fast";
//     this.setState({ logo }, () => {
//       setTimeout(() => {
//         logo.spinSpeed = "slow";
//         this.setState({ logo });
//       }, 1000);
//     });
//   };

  render() {
    const {
        //   title,
        //   description,
        logo,
        subscribe,
        links,
        countdown,
        //   notification
    } = this.state;

    return (
        
    <div className="background">
          
        <Countdown countdownDate={countdown.countdownDate} />
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        <h1 className="title">¡Proximamente!</h1>
        <div className="description">
            <p className="description-text">La plataforma Favorit esta en construccion. Suscribete a nuestro sitio para recibir nuestras actualizaciones.</p>
        </div>
        
        {/* <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
          level={notification.level}
        /> */} 
        <Subscribe
          placeholder={subscribe.placeholder}
          placeholder2={subscribe.placeholder2}
          buttonText={subscribe.buttonText}
        />
        <Links links={links} />
    </div>
    );
  }
}

export default Construc;
