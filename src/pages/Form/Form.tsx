import {useState, useEffect} from "react";
import useLatest from "../../hooks/useLatest";
import useMount from "../../hooks/useMount.ts";
import useUnmount from "../../hooks/useUnmount.ts";
import {Button} from "antd";
import useUnmountRef from "../../hooks/useUnmountRef.ts";

export default function Form() {
    const [count, setCount] = useState(0);
    const ref = useLatest(count);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log('count', count);
    //         setCount(ref.current + 1);
    //     }, 1000)
    //
    //     return () => clearInterval(interval);
    // }, []);

    const [flag, setFlag] = useState<boolean>(false);
    const Child = () => {

        const isUnmount = useUnmountRef();
        useMount(() => {
            console.log("首次渲染", isUnmount);
        });

        useUnmount(() => {
            console.log("组件已卸载", isUnmount);
        });

        return <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>;
    };


    return (
        <>
            <h1>Form Page</h1>
            <h2>useLatest()</h2>
            <h2>{count}</h2>
            <hr/>
            <h2>useMount() & useUnmount()</h2>
            <Button type="primary" onClick={() => setFlag((v) => !v)}>
                {flag ? "卸载" : "加载"}
            </Button>
            {flag && <Child/>}
            <hr/>
            <h2>useUnmountedRef_获取当前组件是否卸载</h2>

        </>
    );
}