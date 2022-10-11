import React from 'react';
import banner from '../../images/quiz.webp'

const HeaderHome = () => {
    return (
        <div className='h-56 md:h-96 w-full py-10' style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
        </div>
    );
};

export default HeaderHome;