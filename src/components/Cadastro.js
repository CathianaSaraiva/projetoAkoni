import "./Cadastro.css";


function Cadastro( ){
    return(

  <div className="conteiner-cadastro">
  <form className="form-cadastro">
  <p className="titulo-cadastro"><b> REGISTER </b></p>
  <br/>
  <div class="form__group field">
          <input required="" placeholder="name" class="form__field" type="input" data-ls-module="charCounter" maxlength="200"></input>
          <label class="form__label" for="name">Insert your full name </label>
      </div>
      <div class="form__group field">
          <input required="" placeholder="example@company.com" class="form__field" type="email" data-ls-module="charCounter" maxlength="100"></input>
          <label class="form__label" for="email">Insert your email</label>
      </div>
      <div class="form__group field">
          <input required="" placeholder="********"  class="form__field" type="password" data-ls-module="charCounter" maxlength="20"></input>
          <label class="form__label" for="password"> Insert your password</label>
      </div>
      <div class="form__group field">
          <input required="" placeholder="********"  class="form__field" type="password" data-ls-module="charCounter" maxlength="20"></input>
          <label class="form__label" for="password"> Confirm your password</label>
      </div>
      <br/> <br/> <br/>
      <button className="button-register"> Register
                                
      </button>
    
  </form>
</div>

)
}

export default Cadastro;