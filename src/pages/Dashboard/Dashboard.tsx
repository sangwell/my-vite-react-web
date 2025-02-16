import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {Button} from 'antd';

export default function Dashboard() {
    const [data, setData] = useState(0);

    const addOne = () => {
        setData(data + 1);
    }

    useEffect(() => {
        console.log("挂载");

        return () => {
            console.log("卸载");
        };
    }, []);

    //data改变时才执行
    useEffect(() => {
        console.log("count改变才会执行");
    }, [data]);

    const CountNumContext = createContext(-1);

    const Child = () => {
        const count = useContext(CountNumContext);

        return (
            <div style={{marginTop: 10}}>
                子组件获取到的count: {count}
                <Son/>
            </div>
        );
    };

    const Son = () => {
        const count = useContext(CountNumContext);

        return <div style={{marginTop: 10}}>孙组件获取到的count: {count}</div>;
    };

    const [sum, dispatch] = useReducer((state: number, action: any) => {
        switch (action?.type) {
            case "add":
                return state + action?.payload;
            case "sub":
                return state - action?.payload;
            default:
                return state;
        }
    }, 0);

    return (
        <>
            <h1>Dashboard Page</h1>
            <hr/>
            <h2>useState，useEffect，useContext</h2>
            <p>{data}</p>
            <Button onClick={() => setData(data + 1)}>Add(1)</Button>
            <Button onClick={() => setData((v) => v + 1)}>Add(2)</Button>
            <Button onClick={addOne}>Add(3)</Button>
            <Button type="primary" onClick={() => setData(0)}>重置</Button>
            <CountNumContext.Provider value={data}>
                <Child/>
            </CountNumContext.Provider>

            <hr/>

            <h2>useReducer</h2>
            <div>count：{sum}</div>
            <Button
                type="primary"
                onClick={() => dispatch({type: "add", payload: 1})}
            >
                加1
            </Button>
            <Button
                type="primary"
                style={{marginLeft: 10}}
                onClick={() => dispatch({type: "sub", payload: 1})}
            >
                减1
            </Button>
            <hr/>
            <h2>useMemo</h2>
        </>
    );
}