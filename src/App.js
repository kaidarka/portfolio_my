import './App.scss';
import NavBar from "./Components/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <BrowserRouter>
        <header>
            <NavBar/>
        </header>
        <main>
            <AppRouter/>
        </main>
    </BrowserRouter>
  );
}

export default App;
