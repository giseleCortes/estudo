import React, { useState } from "react";

function App(props) {
  const [usuario, setUsuario] = useState ('');
  
  return (
    <>
      <input className="usuarioInput" placeholder="Usuário" onChange={ e => setUsuario (e.target.value)}/>
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;

// userState retorna um array com duas posições > [ usuario, setUsuario]
// (setUsuário é uma função)