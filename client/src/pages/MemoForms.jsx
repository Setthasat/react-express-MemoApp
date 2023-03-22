import React, { useState, useEffect } from 'react';
import Memo from '../components/Memo/forms';
import ErrorPopUp from '../components/ErrorPopUp';
import useStore from '../store/store';



function MemoForms() {

    const [error, setError] = useState(false);


    return (
        <div className=' bg-slate-500'>
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