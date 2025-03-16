import "./App.css";
import Timeline from "./timeline";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Vehicles of the Immigrant Life")
            .pauseFor(3000)
            .deleteAll()
            .start();
        }}
        options={{
          loop: true,
          wrapperClassName: "title",
          cursorClassName: "cursor",
        }}
      />
      <Timeline />
    </div>
  );
}

export default App;
