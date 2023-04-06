import React, { useEffect, useState } from 'react';
import Body from '../components/SinglePage/Body';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SinglePage() {

    let { formId } = useParams();

    const [data, setData] = useState([]);

    const fetch = async () => {
        try {
            const api = await axios.get(`http://localhost:8888/api/Forms/${formId}`);
            console.log(api.data.data);
            setData(api.data.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <Body data={data} />
    );
}

export default SinglePage;