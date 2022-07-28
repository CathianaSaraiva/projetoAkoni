import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Logado from './components/Logado';
import Saldo from './components/Saldo';
import Saida from './components/Saida';
import Cadastro from './components/Cadastro';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="*" element={ <Home> </Home> } ></Route>
      <Route path="/home" element={<Home> </Home>} ></Route>
      <Route path="/logado" element={<Logado> </Logado>} ></Route>
      <Route path="/saldo" element={ <Saldo> </Saldo>} ></Route>
      <Route path="/saida" element={ <Saida></Saida>} ></Route>
      <Route path="/cadastro" element={ <Cadastro> </Cadastro> } ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;