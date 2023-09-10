import "../App.css";
import NavBar from "./NavBar";
import background from '../assets/backgroundimg.jpg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
      <NavBar />
    </div>
  );
}

export default App;
