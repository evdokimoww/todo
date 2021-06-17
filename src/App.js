import './index.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {Todos} from "./pages/Todos";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {AlertProvider} from "./components/Alert/AlertContext";

function App() {
    return (
        <BrowserRouter>
            <AlertProvider>
            <Navbar />
            <div className="container pt-4">
                <Switch>
                    <Route exact path={'/'}><Home/></Route>
                    <Route exact path={'/todos'}><Todos /></Route>
                    <Route exact path={'/about'}><About /></Route>
                </Switch>
            </div>
            </AlertProvider>
        </BrowserRouter>
    );
}

export default App;
