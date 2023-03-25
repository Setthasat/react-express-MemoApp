import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GetDate } from '../../utils/index';
import { AiFillCheckCircle } from 'react-icons/ai';
import axios from 'axios';


function forms({ setError }) {


    const [form, setForm] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        date: "",
        isComplete: false
    });

    //moment().format("YYYY-MM-DD")

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        console.log("hello");
        let { title, description, date } = form;

        if (!date) {
            date = GetDate();
        }

        if (!title, !description) {
            setError(true);
        }

        console.log(form);

        const data = {
            id: form.id,
            title: form.title,
            description: form.description,
            date: form.date || GetDate(),
            isComplete: form.isComplete
        };

        setForm(() => ({
            id: uuidv4(),
            title: "",
            description: "",
            date: "",
            isComplete: false
        }));

        try {
            const api = await axios.post("http://localhost:8888/api/create/form", data);
            if (!api.data.data) {
                console.log("cannot get api");
                return;
            }
            console.log(api.data.data);
        } catch (err) {
            console.log(err);
        }


    };

    const handleComplete = (event) => {
        event.preventDefault();
        setForm(prev => ({
            ...prev,
            isComplete: !prev.isComplete
        }));
        console.log(!form.isComplete);
    };

    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 font-sans'>
            <div className='mt-[25%] sm:mt-[20%]'>
                <form onSubmit={handleOnSubmit} >
                    <label className='flex gap-3'>
                        <button onClick={handleComplete} className={form.isComplete === false ? 'cursor-pointer p-2 px-5 backdrop-blur-3xl text-red-700 text-[1.25rem] hidden sm:flex rounded-xl bg-transparent shadow-2xl bg-opacity-50 drop-shadow-lg' : 'p-2 px-5 cursor-pointer hidden sm:flex backdrop-blur-3xl text-green-700 text-[1.25rem] rounded-xl bg-transparent shadow-2xl bg-opacity-50 drop-shadow-lg'}><AiFillCheckCircle size={25} className='border rounded-full' /></button>

                        {/* <p className='text-[1.5rem] flex justify-center items-center h-auto text-white'>Title</p> */}
                        <input
                            type='text'
                            name='title'
                            value={form.title}
                            onChange={onChangeInput}
                            placeholder='title . . .'
                            className='px-2 h-[3rem] w-[22.775rem]  mx-[10rem] sm:mx-0 sm:w-[33rem] focus:outline-none bg-transparent placeholder:opacity-70 text-white placeholder:text-gray-50 shadow-2xl backdrop-blur-3xl rounded-xl '
                        />
                    </label>
                    <textarea
                        className="block w-[22.775rem] sm:w-full  mx-[10rem] sm:mx-0 px-5 py-2 text-white placeholder:text-gray-50 placeholder:opacity-70 bg-transparent shadow-2xl backdrop-blur-3xl focus:outline-none mt-3 appearance-none overflow-auto rounded-xl"
                        type="text"
                        name='description'
                        placeholder="description ..."
                        value={form.description}
                        onChange={onChangeInput}
                        rows="6"
                        maxLength="999"
                    />
                    <label className="relative flex justify-center items-center">
                        <button onClick={handleComplete} className={form.isComplete === false ? 'p-2 px-5 backdrop-blur-3xl text-green-700 text-[1.25rem] flex sm:hidden rounded-xl bg-transparent shadow-2xl bg-opacity-50 cursor-pointer drop-shadow-lg' : 'p-2 px-5 cursor-pointer backdrop-blur-3xl text-red-700 text-[1.25rem] flex sm:hidden rounded-xl bg-transparent shadow-2xl bg-opacity-50 drop-shadow-lg'}><AiFillCheckCircle size={25} className='border rounded-full' /></button>
                        <input
                            type='date'
                            name='date'
                            value={form.date}
                            onChange={onChangeInput}
                            className='pl-2 h-[3rem] text-white focus:outline-none p-2 mt-2 px-[2rem] sm:px-[8rem] bg-transparent shadow-2xl backdrop-blur-3xl rounded-xl placeholder:text-white'
                        />
                        <button type='submit' className='text-white bg-transparent shadow-2xl ml-[0.5rem] backdrop-blur-3xl mt-2 p-3 px-[2rem] sm:px-[5rem] rounded-xl'>Submit</button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default forms;