import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTheme } from "./Components/UI";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
const [theme,setTheme] = useState(true)
const toggleTheme = () => {
  setTheme((theme) => !theme)
}

  return (
    <>
      <ThemeProvider theme={theme ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTheme onClick={toggleTheme}>
          <SwitchTheme theme={theme}/>
        </BtnTheme>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
