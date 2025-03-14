import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { lightThemeClassName } from "@admiral-ds/web";
import { DatePicker } from "@admiral-ds/date-picker";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { useMaskito } from "@maskito/react";

import { T } from "@admiral-ds/react-ui";

const dateOptions = maskitoDateOptionsGenerator({ mode: "dd/mm/yyyy" });

const defaultInputProps = {
  placeholder: "Введите дату",
  dataPlaceholder: "дд.мм.гггг",
  value: "11.",
} satisfies React.ComponentProps<typeof DatePicker>["inputProps"];

function App() {
  const [inputValue, setInputValue] = useState(defaultInputProps.value);
  const maskedDateInputRef = useMaskito({ options: dateOptions });

  const dateProps = {
    inputProps: {
      ...defaultInputProps,
      value: inputValue,
      onInput: (e) => setInputValue(e.currentTarget.value),
      ref: maskedDateInputRef,
    },
  } satisfies React.ComponentProps<typeof DatePicker>;

  useEffect(() => {
    document.body.classList.add(...lightThemeClassName.split(" "));
  }, []);

  return (
    <div>
      <T font="Header/HL1" as="p">
        Admiral DS
      </T>
      <div className="card">
        <T font="Subtitle/Subtitle 1" as="p">
          Пример компонента
        </T>
        <DatePicker {...dateProps} />
      </div>
    </div>
  );
}

export default App;
