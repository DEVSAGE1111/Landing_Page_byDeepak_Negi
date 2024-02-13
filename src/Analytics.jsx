import React from 'react'
import AnalyticsCard from './AnalyticsCard'

function Analytics() {
  return (
    <div  className='flex  flex-col md:flex-row items-center justify-center p-12 md:p-32 gap-2 md:gap-20 md:ml-12 font2'>
      <img className='mb-12' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/55cdb4b5-o-saas-product-shot.svg"/>
        <div className='flex flex-col gap-2 md:gap-8  pr-24'>
            <h1 className='text-3xl  text-blue-800'>Product analytics answers your<br className='hidden md:block'/> questions</h1>
            <p className='text-gray-600 text-sm'>Maecenas varius nunc a odio ultrices, non consectetur nunc scelerisque.<br/> Mauris nec condimentum est, id eleifend orci.</p>
     <div className='flex flex-col gap-8 md:gap-16 mt-8 md:pr-16'>
        <AnalyticsCard heading="Better understand you customers" para="Explain the features and what it acompolishes. What does your company offer that will improve or solve a problem?" src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/b2d9af40-o-saas-features-icon-01.svg"/>
        <AnalyticsCard heading="Improve acquisition" para="Lacinia condimentum lectus dolor viverra nunc. Mauris quis condimentum orci. Curabitur hendrerit, felis vitae." src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/61c32775-o-saas-features-icon-02.svg"/>
        <AnalyticsCard heading="Drive customer retention" para="Curabitur quis purus congue ante interdum mattis sit amet at ante. Nulla volutpat, magna quis convallis tristique." src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/d9a9587a-o-saas-features-icon-03.svg"/>
        </div>
        </div>
        

    </div>
  )
}

export default Analytics