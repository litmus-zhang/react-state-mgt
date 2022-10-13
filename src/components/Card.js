import React from 'react'

export function Card(card_data) {
    const {name, symbol, priceUsd, rank, explorer} = card_data
    return (
        <div className=' group w-48 border p-2 bg-transparent flex flex-col rounded-md hover:shadow-md '>
        <div className='flex justify-between items-center'>
            <p className='text-sm bg-black text-white w-6 flex justify-center items-center'>{rank}</p>
            <p className='text-sm text-bold'>{name}</p>
            <p className='text-sm'>{symbol}</p>
        </div>
        <div className='flex'>
            <p className='text-lg font-bold'>{`${parseFloat(priceUsd).toFixed(2)}`}</p>
        </div>
        <div className='flex'>
            <a className='text-sm' href={explorer}>Explorer &rarr;</a>
            </div>
        </div>
    )
}





function AllCard(data) {
    return (
        <div className='flex flex-wrap gap-2'>
            {data.data.map((item, index) => {
                return <Card key={index} {...item}/>
            })}
        </div>
    )
}

export default AllCard

