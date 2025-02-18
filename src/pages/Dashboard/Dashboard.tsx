import {createContext, useContext, useEffect, useMemo, useReducer, useRef, useState} from "react";
import {Button} from 'antd';
import './Dashboard.css';

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

    const usePow = (list: number[]) => {
        return useMemo(() =>
            list.map((item: number) => {
                console.log("我是usePow");
                return Math.pow(item, 2);
            }), []
        )
    };

    let [flag, setFlag] = useState(true);

    const dataPow = usePow([1, 2, 3]);

    const scrollRef = useRef<any>(null);
    const [clientHeight, setClientHeight] = useState<number>(0);
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [scrollHeight, setScrollHeight] = useState<number>(0);

    const onScroll = () => {
        if (scrollRef?.current) {
            console.log('scrollRef', scrollRef)
            let clientHeight = scrollRef?.current.clientHeight; //可视区域高度
            let scrollTop = scrollRef?.current.scrollTop; //滚动条滚动高度
            let scrollHeight = scrollRef?.current.scrollHeight; //滚动内容高度
            setClientHeight(clientHeight);
            setScrollTop(scrollTop);
            setScrollHeight(scrollHeight);
        }
    };

    return (
        <div className="dashboard">
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
            <div>数字集合：{JSON.stringify(dataPow)}</div>
            <Button type="primary" onClick={() => setFlag((v) => !v)}>
                状态切换{JSON.stringify(flag)}
            </Button>

            <h2>useRef</h2>
            <hr/>
            <div>
                <p>可视区域高度：{clientHeight}</p>
                <p>滚动条滚动高度：{scrollTop}</p>
                <p>滚动内容高度：{scrollHeight}</p>
            </div>
            <div
                style={{height: 200, border: "1px solid #000", overflowY: "auto"}}
                ref={scrollRef}
                onScroll={onScroll}
            >
                <div style={{height: 2000}}></div>
            </div>
        </div>
    );
}