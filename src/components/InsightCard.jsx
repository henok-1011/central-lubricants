import React from 'react'

function InsightCard({ coverPicture, date, title, desciption, slug }) {
    return (
        <div className='max-w-[650px] bg-[#EDEDED] py-6 rounded-xl px-5 pb-12 mb-10'>
            <img src={coverPicture} className='w-full max-h-[300px]' alt="" />

            <div className='flex flex-wrap justify-center items-center gap-16 font-medium my-4'>

                <div className='flex items-center justify-center gap-3'>
                    <img src="../asset/author.png" className='h-auto w-5' alt="" />
                </div>

                <div className='flex items-center justify-center gap-3'>
                    <img src="../asset/date.png" className='h-auto w-5' alt="" />
                    <p>{date}</p>
                </div>

            </div>

            <h1 className='text-center font-medium text-xl my-5'>{title}</h1>
            <p className='text-center'>{desciption}</p>
            <div className='w-full flex justify-center items-center mt-7'><a href={`/knowledge-base/${slug}`} className='text-white bg-primary-100 text-lg px-7 py-1 rounded-3xl cursor-pointer'>Continue Reading</a></div>

        </div>
    )
}

export default InsightCard