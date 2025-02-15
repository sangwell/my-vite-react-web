import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <div className="left">
                <h1>Vite + React</h1>
                <ul className="menu">
                    <li>首页</li>
                    <li>Dashboard</li>
                    <li>Form</li>
                    <li>Table</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="right">

            </div>
            {/*<h1>Vite + React</h1>*/}
            {/*<div className="card">*/}
            {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*    count is {count}*/}
            {/*  </button>*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
            {/*  </p>*/}
            {/*</div>*/}
        </div>
    )
}

export default App
