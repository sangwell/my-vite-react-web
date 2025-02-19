import {useSelector, useDispatch} from 'react-redux';
import './Counter.css';

export default function Counter() {
    // 使用 useSelector 获取状态
    const count = useSelector((state) => state.count);
    // 使用 useDispatch 获取 dispatch 函数
    const dispatch = useDispatch();

    return (
        <div className="counter-layout">
            <p>子组件：Count: {count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
        </div>
    )
}