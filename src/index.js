import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Carousel from "react-elastic-carousel";
import Item from "./item";
import posicaoCadeira1 from "./assets/posicaoCadeira1.jpg";
import posicaoCadeira2 from "./assets/posicaoCadeira2.jpg";
import posicaoCadeira3 from "./assets/posicaoCadeira3.jpg";
import posicaoCadeira4 from "./assets/posicaoCadeira4.jpg";
import posicaoCadeira5 from "./assets/posicaoCadeira5.jpg";
import posicaoCadeira6 from "./assets/posicaoCadeira6.jpg";
import posicaoCadeira7 from "./assets/posicaoCadeira7.jpg";
import posicaoCadeira8 from "./assets/posicaoCadeira8.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
];

function Banner() {
  return (
      <div className="Banner"><img className='imagem'/>
        <Carousel breakPoints={breakPoints}>
          <Item><img width='400px'src={posicaoCadeira1}/></Item>
          <Item><img width='400px'src={posicaoCadeira2}/></Item>
          <Item><img width='400px'src={posicaoCadeira3}/></Item>
          <Item><img width='400px'src={posicaoCadeira4}/></Item>
          <Item><img width='400px'src={posicaoCadeira5}/></Item>
          <Item><img width='400px'src={posicaoCadeira6}/></Item>
          <Item><img width='400px'src={posicaoCadeira7}/></Item>
          <Item><img width='400px'src={posicaoCadeira8}/></Item>
        </Carousel>
      </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App /><Banner />
  </React.StrictMode>,
  document.getElementById('root')
);




