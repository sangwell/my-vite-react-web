import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8066/groups/get')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="plan-list">
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}