import { ThemeContext, ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";

import { Desktop } from "./pages/Desktop";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyles />
      <Desktop />
    </DndProvider>
  );
}

export default App;
