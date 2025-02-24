import {useLocation} from "react-router-dom";

export default function UserPosts(){
    const location = useLocation();
    const { userId } = location.state || {};
    return (
        <>
            <h2>UserPosts</h2>
            <h3>用户ID:{userId}</h3>
        </>
    )
}