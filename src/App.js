import "./App.css";
import LeftNavBar from "./components/LeftBar";
import RightContent from "./components/RightContent";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">NavBar</header> */}
      <div className="App-body" >
        <LeftNavBar />
        <RightContent />
      </div>
    </div>
  );
}

export default App;
