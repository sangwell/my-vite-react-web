import Counter from "../../components/Counter/Counter.tsx";
import {useSelector, useDispatch} from 'react-redux';
import TextDisplay from "../../components/TextDisplay/TextDisplay.tsx";
import {useState} from "react";

export default function Widgets() {
    const count = useSelector((state) => state.count);
    const [textContent, setTextContent] = useState('');

    const handleChange = (event) => {
        // 更新state中的值
        setTextContent(event.target.value);
    };

    const handleData = (data) => {
        console.log("Data from child:", data);
    };

    return (
        <>
            <h1>Widgets</h1>
            （使用React Redux实现）父组件：{count}
            <Counter></Counter>
            <hr/>

            <h2>组件传值：</h2>
            <div>
                要发送的内容：<input type="text" value={textContent} onChange={handleChange}/>
                <button>发送</button>
            </div>
            <TextDisplay msg={textContent} onData={handleData}></TextDisplay>
        </>
    )
}