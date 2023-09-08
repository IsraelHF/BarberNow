import React from "react";
import arrow from "../../assets/Arrow Black.png";
import logoimg from "../../assets/Logo/LogoBranca.png";
import userIcon from "../../assets/User Icon.png"
import { Link } from "react-router-dom";

function CadastroHTML(props) {
  return (
    <div className="container-cadastro">
      {/*----HEDAER----*/}
      <header className="header-cadastro">
        <div className="headerL-cadastro">
          <img
            src={logoimg}
            className="imglogo-header-cadastro"
            alt="logoimg-header-cadastro"
          ></img>
          <h1 className="logotxt-header-cadastro">BarberNow</h1>
        </div>
        <div className="headerR-cadastro">
          <button className='botao-header-cadastro'>
            <Link to="/" className="botao-link-cadastro">LOGIN</Link>
          </button>
        </div>
      </header>

      {/*----DIV INFERIOR----*/}
      <div className="div-inf-cadastro">
        <form className="card-cadastro-cadastro">

          {/*----ARROW----*/}
          <div className="card-cadastro-arrow">
            <button className="botao-arrow-cadastro">
              <Link to="/"></Link>
              <img src={arrow} className="arrow-cadastro" alt="arrow-cadastro"></img>
            </button>
          </div>

          {/*----CADASTRO LADO ESQUERDO----*/}
          <div className="cadastroL-cadastro">
            <img src={userIcon} className="imglogo" alt="userIcon"></img>
            <h1
              className="txt-logotipo-cadastro"
              onChange={(e) => props.setFoto(e.target.value)}
            >
              LOGOTIPO DA BARBEARIA
            </h1>

            <div className="div-input-cadastro">
              <input
                type="text"
                name="nome"
                id="nome"
                className="input-cadastro"
                onChange={(e) => props.setName(e.target.value)}
              />
              <label>Nome da barbearia *</label>
            </div>

            <div className="div-input-cadastro">
              <input
                type="text"
                name="telefone"
                id="telefone"
                className="input-cadastro"
                onChange={(e) => props.setTelefone(e.target.value)}
              />
              <label>Telefone para contato * </label>
            </div>
          </div>

          {/*----CADASTRO LADO DIREITO----*/}
          <div className="cadastroR-cadastro">
            <div className="div-input-cadastro">
              <input 
                type="text" 
                name="email" 
                id="email" 
                className="input-cadastro"
                onChange={(e) => props.setEmail(e.target.value)}
                />
              <label>e-mail *</label>
            </div>
            <div className="div-password-cadastro">
              <div className="input-password-cadastro">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-cadastro"
                  onChange={(e) => props.setPassword(e.target.value)}
                />
                <label>Senha *</label>
              </div>
              <div className="input-password-cadastro">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-cadastro"
                  onChange={(e) => props.setPassword(e.target.value)}
                />
                <label>Repetir senha *</label>
              </div>
            </div>
            <div className="div-input-cadastro">
              <input
                type="text"
                name="endereço"
                id="endereço"
                className="input-cadastro"
                onChange={(e) => props.setEndereco(e.target.value)}
              />
              <label>Endereço da sua barbearia *</label>
            </div>
            <div className="div-input-cadastro">
              <input 
                type="text" 
                name="cnpj" 
                id="cnpj" 
                className="input-cadastro"
                onChange={(e) => props.setCNPJ(e.target.value)} 
                />
              <label>CNPJ *</label>
            </div>
            <div className="div-input-cadastro">
              <input
                type="text"
                name="horarioat"
                id="horarioat"
                className="input-cadastro"
                onChange={(e) => props.setHorario(e.target.value)}
              />
              <label>Horário de atendimento *</label>
            </div>
            <button onClick={props.handleSignOut} className="botao-cadastrar-cadastro">
              <h1>CONCLUIR CADASTRO</h1>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CadastroHTML;
