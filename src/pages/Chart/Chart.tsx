import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function Chart() {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<echarts.ECharts>();
    
    useEffect(() => {
        // 初始化图表
        if (chartRef.current) {
            chartInstance.current = echarts.init(chartRef.current);
        }

        // 初始数据
        const data: number[] = [];
        const now = new Date();
        const oneDay = 24 * 3600 * 1000;
        let value = Math.random() * 1000;

        for (let i = 0; i < 1000; i++) {
            data.push(value);
            value = value + Math.random() * 20 - 10;
        }

        const option = {
            title: {
                text: '实时数据流',
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params: any) {
                    params = params[0];
                    const date = new Date(params.name);
                    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' - ' + params.value?.toFixed(2);
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '实时数据',
                type: 'line',
                showSymbol: false,
                data: data.map((value, index) => [new Date(now.getTime() - (1000 - index) * 1000), value])
            }]
        };

        // 设置图表配置
        chartInstance.current?.setOption(option);

        // 实时更新数据
        // const timer = setInterval(() => {
        //     if (chartInstance.current) {
        //         const axisData = new Date();
        //         const newValue = Math.random() * 100;

        //         chartInstance.current.setOption({
        //             series: [{
        //                 data: [...data.slice(1), [axisData, newValue]]
        //             }]
        //         });
        //     }
        // }, 1000);

        // 清理函数
        return () => {
            clearInterval(timer);
            chartInstance.current?.dispose();
        };
    }, []);


    return (
        <div>
            <h1>Chart</h1>
            <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
        </div>
    )
}