import ThemeProvider from "./context/ThemeContext";
import { Landing } from "./screens/Landing";
function App() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
