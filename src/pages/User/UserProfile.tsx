import {useParams} from "react-router-dom";

export default function UserProfile(){
    const { userId } = useParams();
    return (
        <>
            <h2>UserProfile</h2>
            <h3>用户ID：{userId}</h3>
        </>
    )
}