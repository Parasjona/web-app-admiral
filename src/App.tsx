import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

import { T } from "@admiral-ds/react-ui";

function App() {
return (
    <div>
      <T font="Header/HL1" as="p">
        Admiral DS
      </T>
      <div className="card">
        <T font="Subtitle/Subtitle 1" as="p">
          Пример компонента
        </T>
        {/* Пример компонента */}
      </div>
    </div>
  );
}

export default App;
