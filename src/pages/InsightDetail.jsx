import React from 'react'
// import RecentInsightCard from '../components/RecentInsightCard'
import { QUERY_INSIGHTS, graphcms } from '../Graphql/Queries';
// import { useQuery, gql, useMutation } from "@apollo/client";
import { useParams } from 'react-router';
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { RichText } from '@graphcms/rich-text-react-renderer';
import RecentInsightCard from '../components/RecentInsightCard';



function InsightDetail() {

    const [insights, setinsights] = useState();
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    // const { loading, error, data } = useQuery(QUERY_INSIGHTS, {
    //   variables: { slug },
    // });

    useEffect(() => {
        graphcms.request(QUERY_INSIGHTS)
            .then(data => {
                setinsights(data.insights)
                console.log(data.insights)
                console.log(id)
                setLoading(false);
            }).catch(err => console.log(err));
    }, [])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen text-secondary-100'>
                <ReactLoading type="spin" color='#1F6A7B' height={'50px'} width={'50px'} />
            </div>)
    }

    return (

        <div className='flex flex-wrap justify-between items-start max-w-[1200px] mx-auto my-0 px-5 mt-20'>
            <div className='max-w-[650px] bg-[#EDEDED] py-6 rounded-xl px-5 mb-16'>
                {insights.filter(p => p?.slug == id).map(i => (
                    <>
                        <div className='flex flex-wrap justify-between items-start max-w-[1200px] mx-auto my-0 px-5'>
                            <div className='max-w-[650px] bg-[#EDEDED]  rounded-xl  mb-16'>
                                <img className='w-full h-auto' src={i.coverPicture.url} alt="" />

                                <div className='flex flex-wrap justify-center items-center gap-16 font-medium my-4 mt-5'>

                                    <div className='flex items-center justify-center gap-3'>
                                        <img src="../asset/author.png" className='h-auto w-5' alt="" />
                                    </div>

                                    <div className='flex items-center justify-center gap-3'>
                                        <img src="../asset/date.png" className='h-auto w-5' alt="" />
                                        <p>{i.postDate}</p>
                                    </div>

                                </div>

                                <h1 className='text-center font-medium text-xl my-10'>{i.insightTitle}</h1>
                                {/* <p>{}</p> */}
                                <RichText content={i.content.raw} />

                            </div>


                        </div>
                    </>
                ))}

            </div>
            <RecentInsightCard insight={insights} />

        </div>
    )
}

export default InsightDetail