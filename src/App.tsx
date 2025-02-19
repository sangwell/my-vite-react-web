import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Form from "./pages/Form/Form.tsx";
import Table from "./pages/Table.tsx";
import AppMenu from "./components/AppMenu/AppMenu.tsx";
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Widgets from "./pages/Widgets/Widgets.tsx";

function App() {

    return (
        <ConfigProvider locale={zhCN}>
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
                            <Route path="/widgets" element={<Widgets/>}/>
                            <Route path="/table" element={<Table/>}/>
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </div>
                </Router>
            </div>
        </ConfigProvider>
    )
}

export default App
