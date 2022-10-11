import { Button, Card } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCard = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    const navigate = useNavigate();
    const loadQuiz = (id) => {
        navigate(`/topic/${id}`);
    };
    return (
        <div className="max-w-sm">
            <Card>
                <img className='bg-zinc-300 w-full rounded-2xl' src={logo} alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Total Quiz Questions: {total}
                </p>
                <div className='flex justify-end'>
                    <Button onClick={() => loadQuiz(id)}>Take Quiz</Button>
                </div>
            </Card >
        </div >
    );
};

export default QuizCard;