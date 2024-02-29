import React, { useEffect, useState } from 'react'

import genreids from '../utility/genre'

function WatchList({ watchlist, setwatchList, handleRemoveFromwatchList }) {

    const [search, setSearch] = useState('')

    const [genreList, setGenreList] = useState(['All Genre']);

    const [curGenre, setCurGenre] = useState('All Genre')


    let handleSearch = (e) => {
        setSearch(e.target.value);
    }

    let handleFilter = (genre) => {
        setCurGenre(genre)
    }


    let sortIncreasing = () => {
        let sortedIncreasing = watchlist.sort((movieA, movieB) => {
            return movieA.vote_average - movieB.vote_average
        })

        setwatchList([...sortedIncreasing])
    }

    let sortDecreasing = () => {
        let sortedDecreasing = watchlist.sort((movieA, movieB) => {
            return movieB.vote_average - movieA.vote_average
        })

        setwatchList([...sortedDecreasing])
    }


    useEffect(() => {
        let temp = watchlist.map((movieObj) => {
            return genreids[movieObj.genre_ids[0]]
        })
        temp = new Set(temp)
        setGenreList(['All Genre', ...temp])
        console.log(temp)
    }, [watchlist])


    return (
        <>
            <div className='flex justify-center gap-3 flex-wrap'>
                {genreList.map((genre) => {
                    return <div onClick={() => handleFilter(genre)} className={curGenre == genre ? 'w-[90px] h-[30px] bg-blue-500 text-center rounded-xl cursor-pointer hover:scale-110 duration-150 text-white' : 'w-[80px] h-[30px] bg-gray-500 text-center rounded-xl cursor-pointer hover:scale-110 duration-150 text-white mx-3'}>
                        {genre}
                    </div>
                })}




            </div>

            <div className='flex justify-center p-2 m-5  hover:scale-110 duration-150'>
                <input onChange={handleSearch} value={search} type="text" placeholder='Search for Movies' className='h-[50px] w-[300px] bg-gray-300 font-normal-black- text-center rounded-lg border-none' />
            </div> 
                
                

            <div className='overflow-hidden border-b-2 shadow-xl bg-gray-300 rounded-xl font-black m-5 '>
                <table className='w-full text-center rounded-lg  '>
                    <thead className='border-b-2 shadow-lg'>
                        <tr>
                            <th>Name</th>

                            <div className=' flex items-center p-2 gap-3 justify-center '>

                                <div onClick={sortIncreasing} className='fa-solid fa-arrow-up cursor-pointer hover:scale-150 duration-150 '></div>

                                <th>Ratings</th>

                                <div onClick={sortDecreasing} className='fa-solid fa-arrow-down cursor-pointer hover:scale-150 duration-150'></div>
                            </div>

                            <th>Popularity</th>
                            <th>Genre</th>
                            <th>Task</th>
                        </tr>
                    </thead>

                    <tbody className='font-normal '>

                        {watchlist.filter((movieObj) => {
                            if (curGenre == 'All Genre') {
                                return true
                            } else {
                                return genreids[movieObj.genre_ids[0]] == curGenre
                            }
                        }).filter((movieObj) => {
                            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase());
                        })
                        .map((movieObj) => {
                            return <tr className='border-b-2 rounded-xl'>
                                <td className=' p-3 flex items-center '>
                                    <img className='h-[150px] w-[100px] rounded-xl' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
                                    <div className='mx-5'>{movieObj.title}</div>
                                </td>

                                <td>{movieObj.vote_average}</td>
                                <td>{movieObj.vote_count}</td>
                                <td>{genreids[movieObj.genre_ids[0]]}</td>
                                <td onClick={() => handleRemoveFromwatchList(movieObj)} className='text-red-500 font-bold cursor-pointer hover:scale-110 duration-150'>Delete</td>

                            </tr>

                        })}





                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WatchList
