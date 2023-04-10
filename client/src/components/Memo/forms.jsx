import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
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

    const [dateInput, setDateInput] = useState({
        day: "",
        month: '',
        year: ""
    });

    const [allDate, setAllDate] = useState();

    useEffect(() => {
        console.log(dateInput);
    }, [dateInput]);
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

        let { title, description, date } = form;
        let { day, month, year } = dateInput;

        let finalDate = year.concat('-').concat(month).concat('-').concat(day)
        
        setForm((prev) => ({
            ...prev,
            date: finalDate || GetDate()
        }))

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

    const handleValidateInput = (event) => {
        const { name, value } = event.target;
        let { day, month, year } = dateInput;
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
        // if (name === "year") {
        //     let newYear = parseInt(year);
        //     let nowYear = moment().format("YYYY");
        //     if (newYear > nowYear) {
        //         setDateInput(prev => ({
        //             ...prev,
        //             year: parseInt(nowYear) 
        //         }));
        //     }
        // }

        // if (name === "month") {
        //     let newMonth = parseInt(month);
        //     if (month > 12) {
        //         setDateInput(prev => ({
        //             ...prev,
        //             month: 12
        //         }));
        //     }
        // }

        // if (name === "day") {
        //     let newDay = parseInt(day);
        //     if (newDay > 30 && (month === 4 || month === 6 || month === 9 || month === 11)) {
        //         setDateInput(prev => ({
        //             ...prev,
        //             day: 30
        //         }));
        //     } if (newDay > 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)) {
        //         setDateInput(prev => ({
        //             ...prev,
        //             day: 31
        //         }));
        //     } if (newDay > 29 && month === 2 && year % 4 === 0) {
        //         setDateInput(prev => ({
        //             ...prev,
        //             day: 29
        //         }));
        //     } if (newDay > 28 && month === 2 && year % 4 !== 0) {
        //         setDateInput(prev => ({
        //             ...prev,
        //             day: 28
        //         }));
        //     }
        // }
    };

    const onChangeDateInput = (event) => {
        const { name, value } = event.target;

        setDateInput(prev => ({
            ...prev,
            [name]: value
        }));

    };



    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 font-sans'>
            <div className='mt-[25%] sm:mt-[20%]'>
                <form onSubmit={handleOnSubmit} >
                    <label className='flex gap-3'>
                        <div className=''>
                            <button onClick={handleComplete} className={form.isComplete === false ? 'border-[2px] border-white/20 cursor-pointer p-2 px-5 backdrop-blur-3xl text-red-700 text-[1.25rem] hidden sm:flex rounded-xl bg-transparent shadow-2xl bg-opacity-50 drop-shadow-lg' : 'p-2 px-5 cursor-pointer hidden sm:flex backdrop-blur-3xl text-green-700 text-[1.25rem] rounded-xl bg-transparent shadow-2xl bg-opacity-50 border-[2px] border-white/20 drop-shadow-lg'}><AiFillCheckCircle size={25} className='border rounded-full' /></button>
                        </div>
                        {/* <p className='text-[1.5rem] flex justify-center items-center h-auto text-white'>Title</p> */}
                        <input
                            type='text'
                            name='title'
                            value={form.title}
                            onChange={onChangeInput}
                            placeholder='title . . .'
                            className='px-2 h-[3rem] border-[2px] border-white/20 w-[22.775rem]  mx-[10rem] sm:mx-0 sm:w-full focus:outline-none bg-transparent placeholder:opacity-70 text-white placeholder:text-gray-50 shadow-2xl backdrop-blur-3xl rounded-xl '
                        />
                    </label>
                    <textarea
                        className="block w-[22.775rem] border-[2px] border-white/20  sm:w-full  mx-[10rem] sm:mx-0 px-5 py-2 text-white placeholder:text-gray-50 placeholder:opacity-70 bg-transparent shadow-2xl backdrop-blur-3xl focus:outline-none mt-3 appearance-none overflow-auto rounded-xl"
                        type="text"
                        name='description'
                        placeholder="description ..."
                        value={form.description}
                        onChange={onChangeInput}
                        rows="6"
                        maxLength="999"
                    />
                    <label className="relative flex justify-between items-center">
                        <button onClick={handleComplete} className={form.isComplete === false ? 'p-2 px-5 backdrop-blur-3xl text-green-700 text-[1.25rem] flex sm:hidden rounded-xl bg-transparent shadow-2xl bg-opacity-50 cursor-pointer drop-shadow-lg' : 'p-2 px-5 cursor-pointer backdrop-blur-3xl text-red-700 text-[1.25rem] flex sm:hidden rounded-xl bg-transparent shadow-2xl bg-opacity-50 drop-shadow-lg'}><AiFillCheckCircle size={25} className='border rounded-full' /></button>
                        <div className='flex justify-center items-center '>
                            <input maxLength={4} name="year" value={dateInput.year} type='text' onKeyPress={handleValidateInput} onChange={onChangeDateInput} placeholder='year' className='mx-1 w-[8rem] text-white backdrop-blur-3xl mt-2 focus:outline-none border py-3 px-[24px] border-white/40 placeholder:text-white/70 rounded-xl bg-transparent' /><p className='text-white mx-1 text-[2rem] font-thin'>/</p>
                            <input maxLength={2} name="month" value={dateInput.month} type='text' onKeyPress={handleValidateInput} onChange={onChangeDateInput} placeholder='month' className='mx-1 w-[8rem] text-white backdrop-blur-3xl mt-2 focus:outline-none border py-3 px-[24px] border-white/40 placeholder:text-white/70 rounded-xl bg-transparent' /><p className='text-white mx-1 text-[2rem] font-thin'>/</p>
                            <input maxLength={2} name="day" value={dateInput.day} type='text' onKeyPress={handleValidateInput} onChange={onChangeDateInput} placeholder='date' className='mx-1 w-[6rem] text-white backdrop-blur-3xl mt-2 focus:outline-none border py-3 px-[24px] border-white/40 placeholder:text-white/70 rounded-xl bg-transparent' />
                        </div>
                        {/* <input
                            type='date'
                            name='date'
                            placeholder='date/month/year'
                            value={form.date}
                            onChange={onChangeInput}
                            className='pl-2 h-[3rem] border-[2px] border-white/20 text-opacity-70 appearance-none  text-white focus:outline-none p-2 mt-2 px-[2rem] sm:px-[8rem] bg-transparent shadow-2xl backdrop-blur-3xl rounded-xl placeholder:text-white'
                            style={{
                                WebkitAppearance: 'none',
                                MozAppearance: 'none',
                                appearance: 'none',
                            }}
                        /> */}
                        <button type='submit' className='text-white border-[2px] border-white/20 bg-transparent shadow-2xl ml-[0.5rem] backdrop-blur-3xl mt-2 p-3 px-[2rem] sm:px-[5.25rem] rounded-xl'>Submit</button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default forms; 