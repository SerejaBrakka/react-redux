import "./App.css";
import Comments from "./components/Comments";
import Likes from "./components/Likes";
import Title from "./Title";
import Spin from "./Spin";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          <div className="card-image">
            <img
              src="./boat.jpg"
              alt="surfing"
              style={{ borderRadius: "22px" }}
            />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
