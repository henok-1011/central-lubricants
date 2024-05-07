import React, { useState } from 'react'
import InsightCard from '../components/InsightCard'
// import RecentInsightCard from '../components/RecentInsightCard'
import { QUERY_INSIGHTS, graphcms } from '../Graphql/Queries';
// import { useParams } from 'react-router';
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import RecentInsightCard from '../components/RecentInsightCard';

function Insight() {
    const [insights, setinsights] = useState();
    const [loading, setLoading] = useState(true);
    // const { type } = useParams();

    useEffect(() => {
        graphcms.request(QUERY_INSIGHTS)
            .then(data => {
                setinsights(data.insights.reverse())
                console.log(data.insights)
                setLoading(false);
            }).catch(err => console.log(err));
    }, [])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen text-secondary-100'>
                <ReactLoading type="spin" color='#1F6A7B' height={'50px'} width={'50px'} />
            </div>)
    }

    const insight = [
        {
            title: "Neque porro quisquam est qui dolorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec tellus interdum volutpat. Vestibulum nec nisl ut ligula fermentum lobortis a vel leo. Nulla tempus, libero non accumsan congue.",
            author: "Temnit Benyam",
            date: "Mar 8,2022",
            img: "./asset/blog1.png"
        },
        {
            title: "Neque porro quisquam est qui dolorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec tellus interdum volutpat. Vestibulum nec nisl ut ligula fermentum lobortis a vel leo. Nulla tempus, libero non accumsan congue.",
            author: "Temnit Benyam",
            date: "Mar 8,2022",
            img: "./asset/blog2.png"
        },
        {
            title: "Neque porro quisquam est qui dolorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec tellus interdum volutpat. Vestibulum nec nisl ut ligula fermentum lobortis a vel leo. Nulla tempus, libero non accumsan congue.",
            author: "Temnit Benyam",
            date: "Mar 8,2022",
            img: "./asset/blog3.png"
        }
    ]

    return (
        <>

            <div className='flex flex-wrap justify-between items-start max-w-[1200px] mx-auto my-0 px-5'>

                <div className='w-[50%]' >
                    {insights.map(i => (
                        <InsightCard slug={i.slug} title={i.insightTitle} coverPicture={i.coverPicture.url} desciption={i.description} date={i.postDate} />
                    ))}
                </div>
                <RecentInsightCard insight={insights} />
            </div>
        </>
    )
}

export default Insight