import React from 'react';

const OptionCard = ({ option, id, notify }) => {
    // console.log(id);
    // console.log(option)
    return (
        <div className="flex items-center px-4 rounded border border-rose-600 bg-zinc-200 cursor-pointer">
            <input onClick={() => notify(option)} id={id} type="radio" value="" name="bordered-radio" className="w-4 h-4 text-rose-600 bg-white border-rose-400 focus:ring-rose-700 focus:ring-2 cursor-pointer" />
            <label htmlFor={id} className="py-4 ml-2 w-full text-sm font-medium text-black cursor-pointer">{option}</label>
        </div>
    );
};

export default OptionCard;