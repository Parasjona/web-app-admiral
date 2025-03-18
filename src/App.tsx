import "./App.css";

import { T } from "@admiral-ds/react-ui";
import { Template } from "./ToastTemplate";

function App() {
return (
    <div>
      <T font="Header/HL1" as="p" style={{ textAlign: "center" }}>
        Admiral DS
      </T>
      <div className="card">
        <T font="Subtitle/Subtitle 1" as="p" style={{ textAlign: "center" }}>
          Пример компонента
        </T>
        <Template />
      </div>
    </div>
  );
}

export default App;
