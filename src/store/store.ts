import { createStore } from 'redux';

// 初始状态
const initialState = {
    count: 0,
};

// Reducer 函数
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

// 创建 Store
const store = createStore(rootReducer);

export default store;