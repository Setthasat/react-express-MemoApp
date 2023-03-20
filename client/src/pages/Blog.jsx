import React, { useState } from 'react';
import Card from '../components/Blog/Card';

function Blog() {

    const [mockForms, setMockForms] = useState([
        {
            id: 1,
            title: "safe",
            description: "hello world 1234`12312`31`321`321`312`312`233124234123414324362141234973412841235453124867567813245137265421384524587231546735214587128",
            date: "22-02-2007"
        },
        {
            id: 2,
            title: "safe",
            description: "hello world 1234",
            date: "22-02-2007"
        },
        {
            id: 3,
            title: "safe",
            description: "hello world 1234",
            date: "22-02-2007"
        },
        {
            id: 4,
            title: "safe",
            description: "hello world 1234",
            date: "22-02-2007"
        },
    ]);
    return (
        <div>
            <Card mockForms={mockForms} />
        </div>
    );
}

export default Blog;