import ComponentA from '../components/DynamicWidget/DynamicOne.tsx';
import ComponentB from '../components/DynamicWidget/DynamicTwo.tsx';
import React from 'react';

// 注册组件
const componentMap = {
    componentA: ComponentA,
    componentB: ComponentB,
};

function DynamicComponentLoader({ componentName }) {
    // 从映射中获取组件
    const ComponentToRender = componentMap[componentName];

    if (!ComponentToRender) {
        return <div>Component not found!</div>;
    }

    // 渲染组件
    return <ComponentToRender />;
}

export default DynamicComponentLoader;