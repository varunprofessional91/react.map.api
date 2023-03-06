import './lib/scripts/Style.css?n=1';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./lib/scripts/Layout";
import "leaflet/dist/leaflet.css?d=1";
import PortBlairMap from "./lib/components/PortBlairMap";
import DelhiMap from "./lib/components/DelhiMap";
import MumbaiMap from "./lib/components/MumbaiMap";
import KolkataMap from "./lib/components/KolkataMap";
import BangaloreMap from "./lib/components/BangaloreMap";

export default function App() {
    console.log('AppRendered');
    return (<main className="mainApp">
        <BrowserRouter>
            <Layout/>
            <nav className={"bodyContainer"}>
                <nav className={"boxContainer"}>
                    <Routes>
                        <Route exact path={'/'} element={<PortBlairMap/>}/>
                        <Route exact path={'port_blair'} element={<PortBlairMap/>}/>
                        <Route exact path={'delhi'} element={<DelhiMap/>}/>
                        <Route exact path={'mumbai'} element={<MumbaiMap/>}/>
                        <Route exact path={'bangalore'} element={<BangaloreMap/>}/>
                        <Route exact path={'kolkata'} element={<KolkataMap/>}/>
                        <Route exact path={'*'} element={<h3>No Page Found!</h3>}/>
                    </Routes>
                </nav>
            </nav>
        </BrowserRouter>
    </main>);
}

