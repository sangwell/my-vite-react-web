export default function TextDisplay({msg, onData }) {
    const btnClick = ()=>{
        console.log('清除')
        onData && onData(true)
    }

    return (
        <>
            得到的内容是：
            <div>{msg}<button type='button' onClick={btnClick}>清除</button></div>
        </>
    )
}