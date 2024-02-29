import React from 'react'
import Logo from '../movie-png.png'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div className='m-5 rounded-xl  shadow-xl flex justify-between items-center border space-x-10  pl-4 py-5 '>

            <div className='flex justify-start items-center gap-x-8 cursor-pointer'>
                <img className='w-[60px] ' src={Logo} alt="" />
                <h1 className='text-2xl font-bold'>IMDB_Clone</h1>
            </div>

            <div className='flex ustify-items-end p-3 gap-x-8 pr-8 '>
                <Link to="/" className='text-blue-500 text-2xl font-bold cursor-pointer hover:scale-110 duration-150' >Movies</Link>

                <Link to="/watchlist" className='text-blue-500 text-2xl font-bold cursor-pointer hover:scale-110 duration-150'>Watch List</Link>
            </div>

        </div>
    )
}

export default navbar