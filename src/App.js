import React from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import logodt3 from "./assets/logodt3.png";
import cadeirarhino from "./assets/cadeira-rhino.png";
import AlmofadaExtra from "./assets/AlmofadaExtra.png";
import pesoSuportado from "./assets/pesoSuportado.png";
import iconeTwiter from "./assets/iconeTwiter.png";
import iconeBe from "./assets/iconeBe.png";
import iconeLinkedin from "./assets/iconeLinkedin.png";
import iconeFacebook from "./assets/iconeFacebook.png";
import iconeInstagran from "./assets/iconeInstagran.png";
import iconeMedium from "./assets/iconeMedium.png";
import iconeYoutube from "./assets/iconeYoutube.png";
import iconeEmail from "./assets/iconeEmail.png";
import Footer from "./Components/Footer/Footer";
import seriesElite from "./assets/seriesElite.jpg";
import seriesEliteKg from "./assets/seriesEliteKg.jpg";
import descontoPreco from "./assets/descontoPreco.jpg";

function App() {
  return (
    <section>
      <Header />
    
      <div>
        <img className="cadeira" src={cadeirarhino} />
      </div>

      <Body />
      <div>
        <img className="almofada" src={AlmofadaExtra} />
      </div>
      <div>
        <img className="pesoSuportado" src={pesoSuportado} />
      </div>

      <Footer />
      <div>
        <a href= 'https://twitter.com/dt3sports' target= '_blank'><img className="icone1" src={iconeTwiter} /></a>
      </div>
      <div>
      <a href= 'https://www.behance.net/designDT3' target= '_blank'><img className="icone2" src={iconeBe} /></a>
      </div>
      <div>
      <a href= 'https://www.linkedin.com/company/dt3sports/' target= '_blank'><img className="icone3" src={iconeLinkedin} /></a>
      </div>
      <div>
      <a href= 'https://www.facebook.com/DT3sports/' target= '_blank'><img className="icone4" src={iconeFacebook} /></a>
      </div>
      <div>
      <a href= 'https://www.instagram.com/dt3sports/' target= '_blank'><img className="icone5" src={iconeInstagran} /></a>
      </div>
      <div>
      <a href= 'https://dt3sports.medium.com/' target= '_blank'><img className="icone6" src={iconeMedium} /></a>
      </div>
      <div>
      <a href= 'https://www.youtube.com/dt3sports' target= '_blank'><img className="icone8" src={iconeYoutube} /></a>
      </div>
      <div>
      <a href= 'mailto:design@dt3.com.br' target= '_blank'><img className="icone7" src={iconeEmail} /></a>
      </div>
       

      <div>
        <img className="elite" src={seriesElite} />
      </div>
      <div>
        <img className="elitekg" src={seriesEliteKg} />
      </div>
      <div>
        <img className="eliteDesconto" src={descontoPreco} />
      </div>
      
    </section>
  );
}

export default App;
