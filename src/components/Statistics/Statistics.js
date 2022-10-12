import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';


const Statistics = () => {
    const quizzes = useLoaderData().data;
    // console.log(quizzes);
    return (
        <div>
            <h3 className='pb-10 pt-4 text-2xl font-semibold text-rose-600'>Bar Chart of Total Number of Questions in Each Quiz</h3>
            <div className='w-96 h-80 mx-auto' >
                <Chart quizzes={quizzes}></Chart>
            </div>
        </div >
    );
};

export default Statistics;