import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Form from "./pages/Form/Form.tsx";
import Table from "./pages/Table/Table.tsx";
import AppMenu from "./components/AppMenu/AppMenu.tsx";
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Widgets from "./pages/Widgets/Widgets.tsx";
import User from "./pages/User/User.tsx";
import UserPosts from "./pages/User/UserPosts.tsx";
import UserProfile from "./pages/User/UserProfile.tsx";

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
                            <Route path="/user" element={<User/>}>
                                <Route path="profile/:userId" element={<UserProfile />} />
                                <Route path="posts/:userId" element={<UserPosts />} />
                            </Route>
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
