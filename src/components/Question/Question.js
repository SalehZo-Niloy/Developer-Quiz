import React from 'react';
import OptionCard from '../OptionCard/OptionCard';

const Question = ({ ques }) => {
    const { question, options, id } = ques;
    const formatQuestion = question.split('<p>').join('').split('</p>').join('');
    // console.log(formatQuestion);
    // console.log(ques);
    return (
        <div className=' rounded-lg w-11/12 md:w-1/2 mx-auto my-6 bg-white'>
            <div className='flex justify-between p-4'>
                <h3 className=' text-left text-lg font-medium w-11/12'>
                    Question: {formatQuestion}
                </h3>
                <div>
                    eye
                </div>
            </div>
            <h4 className='font-medium'>Options are:</h4>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-2 p-3'>
                {
                    options.map((option, idx) => <OptionCard key={id + idx} option={option} id={id + idx}></OptionCard>)
                }
            </form>
        </div>
    );
};

export default Question;