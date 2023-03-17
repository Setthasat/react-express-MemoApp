import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useStore from '../../store/store';
import { GetDate } from '../../utils/index';

function forms({ setError, setMemo }) {

    const addMemo = useStore((state => state.addMemo));

    const [form, setForm] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        date: ""
    });



    //moment().format("YYYY-MM-DD")

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        let { id, title, description, date } = form;

        if (!date) {
            date = GetDate();
        }

        if (!title, !description) {
            setError(true);
        }


        console.log(form);

        // addMemo(form);
        setMemo(prev => [...prev, {
            id: uuidv4(),
            title: title,
            description: description,
            date: date || GetDate()``
        }]);

        setForm(() => ({
            id: uuidv4(),
            title: "",
            description: "",
            date: "",
        }));
    };

    return (
        <div className='flex justify-center items-center mt-[20rem] font-sans'>
            <div>
                <form onSubmit={onSubmit}>
                    <label className='flex gap-3'>
                        <input
                            type='date'
                            name='date'
                            value={form.date}
                            onChange={onChangeInput}
                            className='pl-2 h-[3rem] focus:outline-none'
                        />
                        {/* <p className='text-[1.5rem] flex justify-center items-center h-auto text-white'>Title</p> */}
                        <input
                            type='text'
                            name='title'
                            value={form.title}
                            onChange={onChangeInput}
                            placeholder='title . . .'
                            className='px-2 h-[3rem] w-[25rem] focus:outline-none '
                        />
                    </label>
                    <textarea
                        className="block w-full px-2 py-2  bg-white focus:outline-none  border border-gray-400 mt-3 appearance-none overflow-auto"
                        type="text"
                        name='description'
                        placeholder="description ..."
                        value={form.description}
                        onChange={onChangeInput}
                        rows="6"
                        maxLength="999"
                    />
                    <button >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default forms;