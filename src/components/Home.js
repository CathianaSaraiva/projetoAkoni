import './Home.css';
import { useState, useEffect } from "react";
import {Link } from "react-router-dom";

function Home() {
  return (
    <div className="conteiner-fundo" id="container">
      <div className='titulo'>
        <h1 className='titulo-a'>
          W
          E
          L
          L
          C
          O
          M
          E
        </h1>
      </div>
      <div>   
        <h4 className="abstract-text"> Hello!
          <br/> 
          This is a website geared towards your financial organization.
          <br/>
          Register and login to start organizing your wallet!
        </h4>
      </div>
      
    <div className="conteiner-login">
        <form className="form-login">
        <p><b> LOGIN </b></p>
            <div class="form__group field">
                <input required="" placeholder="example@company.com" class="form__field" type="email" data-ls-module="charCounter" maxlength="100"></input>
                <label class="form__label" for="email">Insert your email</label>
            </div>
            <div class="form__group field">
                <input required="" placeholder="********"  class="form__field" type="password" data-ls-module="charCounter" maxlength="20"></input>
                <label class="form__label" for="password"> Insert your password</label>
            </div>
            <br/> <br/> <br/>
            <button className="cssbuttons-io-button"> Login
                <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>                         
            </button>
            <br/>
            <p class="link">
            Ainda não tem conta?
            
            
            <a href="/cadastro" to="./Cadastro.js">Register here</a>
          </p>
        </form>
    </div>
 </div>
  );
}

export default Home;
