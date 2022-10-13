import React from 'react'
// import { data } from '../constants'

function Table(data) {
    const  sampleData = data.data[0]
    console.log(sampleData)
    const RowData = data.data.length > 0  ? data.data.map((item, index) => () => {
        return (
            <tr key={item.rank}>
                <td className='border px-4 py-2'>{item.rank}</td>
                <td className='border px-4 py-2'>{item.name}</td>
                <td className='border px-4 py-2'>{item.symbol}</td>
                <td className='border px-4 py-2'>{item.supply}</td>
                <td className='border px-4 py-2'>{item.priceUsd}</td>
            </tr>
        )
    } )  : <tr>
    <td className='border px-4 py-2'>Null</td>
    <td className='border px-4 py-2'>Null</td>
    <td className='border px-4 py-2'>Null</td>
    <td className='border px-4 py-2'>Null</td>
    <td className='border px-4 py-2'>Null</td>
</tr>
    return (
        <div>
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th className='border px-4 py-2'>Rank</th>
                        <th className='border px-4 py-2'>Name</th>
                        <th className='border px-4 py-2'>Symbol</th>
                        <th className='border px-4 py-2'>Supply</th>
                        <th className='border px-4 py-2'>Price</th>
                    </tr>

                </thead>
                <tbody>{ data.length > 0 && RowData()}</tbody>
            </table>
        </div>
    )
}

export default Table
