import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeaderHome from '../HeaderHome/HeaderHome';
import QuizCard from '../QuizCard/QuizCard';

const Home = () => {
    const quizzes = useLoaderData().data;
    // console.log(quizzes);
    return (
        <div className='bg-zinc-400'>
            <HeaderHome></HeaderHome>
            <h3 className='my-4 text-2xl font-bold text-rose-600'>Choose A Quiz Topic</h3>
            <div className='w-11/12 mx-auto mt-6 p-6 grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                    quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
            </div>
        </div >
    );
};

export default Home;