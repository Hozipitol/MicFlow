"use client";

import PodCastCard from '@/components/PodCastCard'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";



const Home = () => {
  const trendindPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  return (
    <div className='mt-9 flex flex-col gap-9 md:overflow-hidden'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Welcome to the Micflow!</h1>
        <h1 className='text-20 font-bold text-white-1'>Here are some Trending Podcasts!</h1>


        <div className='podcast_grid'>
          {trendindPodcasts?.map(({_id, podcastTitle, podcastDescription, imageUrl}) => (
            <PodCastCard
              key={_id}
              imgUrl={imageUrl}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home