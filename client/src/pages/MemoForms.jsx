import React, { useState, useEffect } from 'react';
import Memo from '../components/Memo/forms';
import ErrorPopUp from '../components/ErrorPopUp';
import useStore from '../store/store';



function MemoForms({setMemo}) {

    const [error, setError] = useState(false);


    return (
        <div>
            <Memo setError={setError} setMemo={setMemo} />
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