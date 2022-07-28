import './Saida.css'

function Saida () {

    <div className='card'>
    <form>

    <label> Expense record </label>
      <div>
      <span ></span>
        <input type="text"  placeholder="food" data-ls-module="charCounter" maxlength="40"></input>
      </div>

    <label> Enter the value</label>
      <div>
      <span ></span>
        <input type="number"  placeholder="20,00" data-ls-module="charCounter" maxlength="30"></input>
      </div>

      <br/> <br/> <br/>
      <button className='button-resgistros' to="/src/components/saldomock.json">register</button>
  </form>
  </div>

}

export default Saida;