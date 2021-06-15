import './index.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {Todos} from "./pages/Todos";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
                <Switch>
                    <Route exact path={'/'}><Home/></Route>
                    <Route exact path={'/todos'}><Todos /></Route>
                    <Route exact path={'/about'}><About /></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
