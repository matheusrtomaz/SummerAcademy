import "./styles/globalStyles.css";
import Rotas from "./routes";
import { VisitasProvider } from "./context/VisitasContext";

function App() {
  return (
    <>
      <VisitasProvider>
        <Rotas />
      </VisitasProvider>
    </>
  );
}

export default App;
