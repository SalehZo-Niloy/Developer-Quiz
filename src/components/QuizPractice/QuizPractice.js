import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizPractice = () => {
    const quizTopic = useLoaderData().data;
    const { name, questions } = quizTopic;
    // console.log(quizTopic);

    return (
        <div className='bg-zinc-400'>
            <h2 className='text-2xl font-semibold md:font-bold text-rose-600 py-4'>Take Quiz of {name}</h2>
            <div className='pb-4'>
                {
                    questions.map(ques => <Question key={ques.id} ques={ques}></Question>)
                }
            </div>
        </div>
    );
};

export default QuizPractice;