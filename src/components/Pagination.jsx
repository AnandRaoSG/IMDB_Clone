import React from 'react'

function Pagination({handlePrev , handleNext, pageNo}) {
    return (
        <div className='bg-gray-400 p-5 m-5 flex justify-center rounded-xl font-bold '>
            <div onClick={handlePrev} className='px-5 cursor-pointer hover:scale-150 duration-150'><i class="fa-solid fa-arrow-left"></i></div>
            <div>{pageNo}</div>
            <div onClick={handleNext} className='px-5 cursor-pointer hover:scale-150 duration-150'><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination