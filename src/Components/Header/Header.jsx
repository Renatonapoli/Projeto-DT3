import React, { Component } from "react";
import logodt3 from "../../assets/logodt3.png";
import iconeTwiter from "../../assets/iconeTwiter.png";
import iconeBe from "../../assets/iconeBe.png";
import iconeLinkedin from "../../assets/iconeLinkedin.png";
import iconeFacebook from "../../assets/iconeFacebook.png";
import iconeInstagran from "../../assets/iconeInstagran.png";
import iconeMedium from "../../assets/iconeMedium.png";
import iconeYoutube from "../../assets/iconeYoutube.png";
import iconeEmail from "../../assets/iconeEmail.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div>
          <a href='https://twitter.com/dt3sports' target='_blank'><img className="twiter" src={iconeTwiter} /></a>
        </div>
        <div>
          <a href='https://www.youtube.com/dt3sports' target='_blank'><img className="youtube" src={iconeYoutube} /></a>
        </div>
        <div>
          <a href='mailto:design@dt3.com.br' target='_blank'><img className="email" src={iconeEmail} /></a>
        </div>
        <div>
          <a href='https://dt3sports.medium.com/' target='_blank'><img className="medium" src={iconeMedium} /></a>
        </div>
        <div>
          <a href='https://www.instagram.com/dt3sports/' target='_blank'><img className="instagran" src={iconeInstagran} /></a>
        </div>
        <div>
          <a href='https://www.facebook.com/DT3sports/' target='_blank'><img className="facebook" src={iconeFacebook} /></a>
        </div>
        <div>
          <a href='https://www.linkedin.com/company/dt3sports/' target='_blank'><img className="linkedin" src={iconeLinkedin} /></a>
        </div>
        <div>
          <a href='https://www.behance.net/designDT3' target='_blank'><img className="be" src={iconeBe} /></a>
        </div>

        <div>
          <img className="logo" src={logodt3} />
        </div>
        <div className="contatos">
          <a href='https://dt3.design/contact'>
            Contatos
          </a>
        </div>
      </header>
    );
  }
}
