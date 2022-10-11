import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({ quizzes }) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={quizzes}
                margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#595959" />
                <XAxis dataKey="name" stroke="black" />
                <YAxis stroke="black" />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" name='Total Questions' fill="#bb123c" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;