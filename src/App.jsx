import  { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const [customColor, setCustomColor] = useState(""); // State for custom color input

  const handleCustomColorChange = (event) => {
    setCustomColor(event.target.value);
  };

  const applyCustomColor = () => {
    setColor(customColor);
    setCustomColor(""); // Clear the custom color input field
  };

  return (
    <div className="w-full h-screen"  style={{ backgroundColor: color }}>
      <div className="fixed flex flex-col  justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          {/* Custom Color Input */}
          <input
            type="text"
            placeholder="Enter custom color or hex code"
            value={customColor}
            onChange={handleCustomColorChange}
          />
          <button
            onClick={applyCustomColor}
            className="ml-4 outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "gray" }}
          >
            Apply Custom Color
          </button>

        </div>
        
      </div>
    </div>
  );
}

export default App;
