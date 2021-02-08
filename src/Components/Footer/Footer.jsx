import React, { Component } from "react";
import "./Footer.css";

export default class Body extends Component {
  render() {
    return (
      <section>
        <title>
          Assista e se apaixone um pouco mais com essa belissíma cadeira gamer!!
        </title>
        <div className="video">
          <meta
            http-equiv="Content-Type"
            content="text/html; charset=iso-8859-1"
          ></meta>
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/21XCDslL3HQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="assinatura">Powered by DT3</div>
      </section>
    );
  }
}
