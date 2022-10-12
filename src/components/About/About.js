import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='text-left p-10'>
                <h3 className='text-2xl text-rose-600 font-bold mb-2'>Our Goal</h3>
                <p>- Is to increase Junior-developer's knowledge base by means of quizzes based on various topics of Web Development.</p>
                <h3 className='text-2xl text-rose-600 font-bold mt-4 mb-2'>Topics</h3>
                <p>- There are 4 types of topics available right now for quiz. They are:</p>
                <ul className='list-disc ml-10'>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Git</li>
                </ul>
                <p className='ml-3'>Visit <Link to='/home' className='text-rose-600 text-lg font-medium underline hover:text-rose-800'>Topics</Link> to take a quiz.</p>
                <h3 className='text-2xl text-rose-600 font-bold mt-4 mb-2'>Statistics</h3>
                <p>- There you would find a Bar chart based on number of questions on each topic.</p>
                <p className='ml-3'>Check the <Link to='/statistics' className='text-rose-600 text-lg font-medium underline hover:text-rose-800'>Statistics</Link></p>
                <h3 className='text-2xl text-rose-600 font-bold mt-4 mb-2'>Blog</h3>
                <p>- There are some Frequently Asked Questions among the Junior-developers which are answered in the <Link to='/blog' className='text-rose-600 text-lg font-medium underline hover:text-rose-800'>Blog</Link> page.</p>
            </div>
            <footer>
                <hr className='border-2 border-rose-600' />
                <h4 className='font-semibold my-5'>Copyright © 2022. Saleh Zohur Niloy. All Rights Reserved.</h4>
            </footer>
        </div>
    );
};

export default About;