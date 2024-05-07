import React from 'react'

function RecentInsightCard({ insight }) {
    console.log("test: ", insight)
    return (
        <div className='bg-[#EDEDED] px-12 py-3 pb-6 rounded-xl mx-auto my-0 w-full md:max-w-[400px]'>
            <p className='text-2xl pb-3 mb-4 border-[#C3C3C3] border-b-4'>Recent Insights</p>

            <div>

                {insight.reverse().slice(0, 3).map(i => (
                    <a key={i.slug} href={`../insight/${i.slug}`}>
                        <div className='mb-3'>
                            <p className='text-[12px]'>{i.postDate}</p>
                            <p className='text-lg font-medium'>{i.insightTitle.length > 60 ? i.insightTitle.substring(0, 60) + "..." : i.insightTitle}</p>
                        </div>
                    </a>
                ))}



            </div>

        </div>
    )
}

export default RecentInsightCard