import React, { useState, useEffect } from 'react';
import Memo from '../components/Memo/forms';
import ErrorPopUp from '../components/ErrorPopUp';


function MemoForms() {

    const [error, setError] = useState(false);


    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
            <Memo setError={setError} />
            {error === true ? (
                <ErrorPopUp setError={setError} />
            ) : (
                <></>
            )
            }
        </div>
    );
}

export default MemoForms;