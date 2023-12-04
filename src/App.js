import logo from "./logo.svg";
import "./App.css";
import "./appstyles.scss";
import Firstleftsection from "./components/Firstleftsection";
import Secondleftsection from "./components/Secondleftsection";
import Testimonials from "./components/Testimonials";
import Rightsection from "./components/Rightsection";

function App() {
  return (
    <div
      className="App row"
      // style={{
      //   height: "100vh",
      // }}
    >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="col-md-9 mainapp">
        <Firstleftsection />
        <Secondleftsection />
        <Testimonials />
      </div>
      <div className="col-md-3 shadow p-3 bg-white">
        <Rightsection />
      </div>
    </div>
  );
}

export default App;
