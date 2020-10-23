import React from "react";
import "./style.css";
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpeg";
import image4 from "../../images/image4.jpeg";
import image5 from "../../images/image5.jpeg";
import image6 from "../../images/image6.jpeg";

import iconewhatsapp from "../../images/whatsapp-logo-variant.svg";
import iconeinstagram from "../../images/brands-and-logotypes.svg";
import iconeemail from "../../images/interface.svg";

export default function Home() {
  return (
    <>
      <header>
        <ul>
          <a href="#apres">
            <li>Sobre</li>
          </a>
          <a href="#proj">
            <li>Projetos</li>
          </a>
          <a href="#conta">
            <li>Contatos</li>
          </a>
        </ul>
      </header>
      {/* // aqui é a sessão de apresentação */}
      <div className="apresentation" id="apres">
        <div></div>
        <div className="text">
          <h3>Gleyce Costa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
            illo amet, dolorum aliquam odit neque earum dolor, suscipit aut
            consequuntur eaque inventore itaque dolore delectus quibusdam in
            incidunt? Eos.
          </p>
        </div>
      </div>
      {/* aqui é a sessão de trabalhos */}
      <div className="projects" id="proj">
        {/* <div className="painelone"> */}
        <div className="image">
          <img src={image1} alt="capa album 1" />
        </div>
        <div className="image">
          <img src={image1} alt="capa album 2" />
        </div>
        <div className="image">
          <img src={image3} alt="capa album 3" />
        </div>
        <div className="image">
          <img src={image5} alt="capa album 5" />
        </div>
        <div className="image">
          <img src={image5} alt="capa album 4" />
        </div>
        <div className="image">
          <img src={image5} alt="capa album 6" />
        </div>
      </div>

      {/* aqui é a sessão de contatos */}
      <div className="contactos" id="conta">
        <div className="email">
          <h3>Email</h3>
          <img src={iconeemail} alt="" />
        </div>

        <div className="instagram">
          <h3>Instagram</h3>
          <a href="https://www.instagram.com/gleyce_costa_/" target="_blank">
            <img src={iconeinstagram} alt="" />
          </a>
        </div>

        <div className="whatsapp">
          <h3>Whatsapp</h3>
          <img src={iconewhatsapp} alt="" />
        </div>
      </div>

      {/* aqui é o footer */}
      <footer>
        <p>Gleyce Costa</p>
      </footer>
    </>
  );
}
