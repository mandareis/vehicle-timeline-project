import "./App.css";
import Timeline from "./timeline";
import Title from "./assets/88d88aecd5ea2afb330dd9ffd19cbcdc.png";
function App() {
  return (
    <div>
      <img
        src={Title}
        alt="Vehicles of Immigrant Experience"
        className="title"
      />
      <Timeline />
    </div>
  );
}

export default App;
