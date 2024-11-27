
import PodCastCard from '@/components/PodCastCard'
import { podcastData } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Welcome to the Micflow!</h1>
        <h1 className='text-20 font-bold text-white-1'>Here are some Trending Podcasts!</h1>
        <div className='podcast_grid'>
          {podcastData.map(({id, title, description, imgURL}) => (
            <PodCastCard
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home