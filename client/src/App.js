import Header from "./components/Header";
import Articles from "./components/Articles";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ margin: "50px" }}>&nbsp;</div>
      <Articles />
    </div>
  );
};

export default App;
