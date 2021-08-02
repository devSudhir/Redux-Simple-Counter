import "./styles.css";
import { store } from "./store/store.js";
import { addCount, subCount } from "./store/actions.js";
import { useState } from "react";
export default function App() {
  const [, set] = useState(0);
  return (
    <div className="App">
      <h2
        style={{
          border: "1px solid coral",
          display: "inline-block",
          backgroundColor: "coral",
          color: "#fff",
          padding: "10px"
        }}
      >
        Counter:{store.getState().counter}
      </h2>

      <div>
        <button
          style={{
            padding: "5px",
            marginRight: "7px",
            borderRadius: "7px",
            color: "#fff",
            backgroundColor: "#333"
          }}
          onClick={() => {
            store.dispatch(addCount(1));
            set(Math.random());
          }}
        >
          INC
        </button>
        <button
          style={{
            padding: "5px",
            marginRight: "7px",
            borderRadius: "7px",
            color: "#fff",
            backgroundColor: "#333"
          }}
          onClick={() => {
            store.dispatch(subCount(1));
            set(Math.random());
          }}
        >
          DEC
        </button>
      </div>
    </div>
  );
}
