import './Logado.css';
import './Saida';
import './Entrada'
import Saldo from'./Saldo';


import Saida from './Saida';


function Logado( ){



    return(
     <>
  
     <div>
        <Saldo set/>
     </div>
     <Saldo></Saldo>

     <br/> <br/> <br/>

     <div>
        <Saida set/>
     </div>
     <Saida></Saida>
  

     
     </>
    )
}

export default Logado;