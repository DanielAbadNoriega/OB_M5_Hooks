//import logo from "./logo.svg";
import "./App.css";
//import Ejemplo4 from "./hooks/Ejemplo4";
//import MiComponenteConContexto from "./hooks/Ejemplo3";
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
//import GreetingStyled from "./components/pure/greetingStyled";
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Conpnente propio greeting.jsx */}
      {/*  <Greeting name={"Daniel"}></Greeting> */}
      {/* <GreetingF name={"Daniel"}></GreetingF> */}
      {/* EJEMPLOS DE HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/*  <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <Ejemplo4 nombre="Daniel">
          //"todo" lo que hay dentro, es tratado como props.children
          <h3> Contenido del props.children</h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name="Daniel"></GreetingStyled> */}
      {/* </header> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
