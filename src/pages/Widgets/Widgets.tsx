import Counter from "../../components/Counter/Counter.tsx";
import {useSelector, useDispatch} from 'react-redux';

export default function Widgets() {
    const count = useSelector((state) => state.count);

    return (
        <>
            <h1>Widgets</h1>
            （使用React Redux实现）父组件：{count}
            <Counter></Counter>
            <hr/>
            （自定义实现）父组件：{count}
        </>
    )
}