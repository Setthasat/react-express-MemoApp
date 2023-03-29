import React, { useState, useEffect } from 'react';
import Card from '../components/Blog/Card';
import axios from 'axios';

function Blog() {

    const [apiData, setApiData] = useState([]);

    const fetch = async () => {
        try {
            const api = await axios.get("http://localhost:8888/api/Forms");
            setApiData(api.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className='h-auto bg-gradient-to-r from-cyan-500 to-blue-500 mt-[3rem]'>
            <Card apiData={apiData} />
        </div>
    );
}

export default Blog;