import './App.css';
import { GlobalProvider } from './contextos/ContextoGlobal';
import Rotas from './rotas';

function App() {
  return (
    <GlobalProvider>
      <Rotas />
    </GlobalProvider>
  );
}

export default App;
