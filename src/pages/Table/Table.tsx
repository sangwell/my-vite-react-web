// 使用 React.lazy 动态导入组件
import React, {Suspense, useState} from "react";
import DynamicComponentLoader from '../../utils/DynamicComponentLoader.tsx';

const LazyComponent = React.lazy(() => import('../../components/DynamicWidget/DynamicWidget.tsx'));

export default function Table() {
    const [componentName, setComponentName] = useState('componentA');

    return (
        <>
            <h1>Table</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent/>
            </Suspense>

            <button onClick={() => setComponentName('componentA')}>Load Component A</button>
            <button onClick={() => setComponentName('componentB')}>Load Component B</button>
            <button onClick={() => setComponentName('componentC')}>Load Component C</button>

            <DynamicComponentLoader componentName={componentName} />
        </>
    )
}