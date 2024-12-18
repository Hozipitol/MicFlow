import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const EmptyState = ({title, search, buttonLink, buttonText}) => {
  return (
    <section className='flex-center size-full flex-col gap-3'>
        <Image src='/icons/emptyState.svg' width={250} height={250} alt='empty state' />
        <div className='flex-center flex-col gap-3 w-full max-w-[254px] text-white-1'>
            <h1 className='text-16 text-center font-medium text-white-1'>{title}</h1>
            {search && (
                <p className='text-16 text-center font-medium text-white-2'>Try Adjusting your search to what you are looking for</p>
            )}
            {buttonLink && (
                <Button className='bg-orange-1'>
                    <Link href={buttonLink} className='gap-1 flex'>
                        <Image 
                            alt="discover"
                            src="/icons/discover.svg"
                            width={20}
                            height={20}

                        />
                        <h1 className='text-16 font-extrabold text-white-1'>{buttonText}</h1>
                    </Link>
                </Button>
            )}
        </div>
    </section>
  )
}

export default EmptyState