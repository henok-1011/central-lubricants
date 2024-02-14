import React from 'react'

function ProductCards({Name,pic,desc,dataSheet}) {
  return (
    <div className='max-w-[400px] flex items-center justify-between gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl px-3 py-3'>
          <img className='max-w-[130px] h-auto' src={pic} alt="" />
          <div className='flex justify-center items-center flex-col'>
          <h3 className='font-medium text-xl text-center mb-1'>{Name}</h3>
          <p className='leading-5 text-[13px] mb-3'>{desc}</p>
        {dataSheet ? <a href={dataSheet} target='_blank' download className='border border-black-100 px-2 py-1 text-center  rounded-md w-fit  text-[15px] '>Data Sheet</a> : ""       }
      </div>
    </div>
  )
}

export default ProductCards