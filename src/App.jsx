import {Component} from "./components/Component"

function App() {

  const firstObj = {
    name: "Matheus",
    module: "M3",
    age: 29
  }

  return (
    <>
      <div className="App">
        <Component/>
        <li>Olá, meu nome é {firstObj.name}, estudante do módulo {firstObj.module} e atualmente possuo {firstObj.age} anos de idade.</li>
      </div>
      <button onClick={() => alert(`Olá, ${firstObj.name}`) }>Clique aqui</button>
    </>
  )
}

export default App
