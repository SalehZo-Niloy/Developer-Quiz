import React from 'react';
import Faq from '../Faq/Faq';

const Blog = () => {
    return (
        <div>
            <h2 className='text-2xl text-rose-600 font-semibold py-6'>Some FAQ's are Answered Here</h2>
            <div className='w-11/12 mx-auto pb-6'>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Blog;