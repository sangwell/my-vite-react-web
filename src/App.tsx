import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Form from "./pages/Form.tsx";
import Table from "./pages/Table.tsx";
import AppMenu from "./components/AppMenu/AppMenu.tsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <Router>
                <div className="left">
                    <AppMenu></AppMenu>
                </div>
                <div className="right">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/form" element={<Form/>}/>
                        <Route path="/table" element={<Table/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App
