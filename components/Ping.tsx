import React from 'react'

const Ping = () => {
  return (
    <div className='relative'>
        <div className='absolute -left-4 -top-0'>
            <span className='flex size-[11px]'>
                <span className='absolute inline-flex w-full h-full animate-ping rounded-full bg-primary-DEFAULT opacity-75'>
                </span>
                <span className='relative inline-flex size-[11px] w-full h-full bg-primary-DEFAULT rounded-full'>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Ping
