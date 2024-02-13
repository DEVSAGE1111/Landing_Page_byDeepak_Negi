import React from 'react'
import PriceCard from './PriceCard'


function PriceList() {
  return (
    <div className='px-10 md:px-20 bg-white mx-6 md:mx-16 relative -top-56 '>
      <div className='flex flex-col items-center gap-4  py-24  bg-white '>
      <h1 className='text-blue-800 text-4xl md:text-6xl font-sans'>The Pricing Plan</h1>
      <center><span className='text-lg md:text-xl text-gray-600'>The most powerful analytics to understand how people use <br className='hidden md:block'/>
your app or website. Choose from any of our pricing plans that <br className='hidden md:block'/>
work to fit you as you grow.</span></center>
  
</div>
    <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-12 '>
    <PriceCard plan="ESSENTIAL" price="75" src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/c8b562bf-o-saas-essential-icon.svg">
        <span><b>Unlimited</b> projects</span>
        <span><b>Limited</b> core reports</span>
        <span><b>60 day</b> data history</span>
        <span><b>3</b> members / projects</span>
        <span>A/B Testing</span>
    </PriceCard>
    <PriceCard  bg="bg-lovelypurple" plan="PREMIUM" price="159" src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/bee409c7-o-saas-premium-icon.svg">
        <span><b>Everything in Essential</b> +</span>
        <span><b>Limited</b> core reports</span>
        <span><b>12 month</b> data history</span>
        <span><b>10</b> members / projects</span>
        <span><b>Unlimited </b>saved reports</span>
        <span>Predictive analytics</span>
    </PriceCard>
    <PriceCard plan="ENTERPRISE" price="359" src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/32ff632b-o-saas-enterprise-icon.svg">
    <span><b>Everything in Essential</b> +</span>
        <span><b>Limited</b> core reports</span>
        <span><b>12 month</b> data history</span>
        <span><b>10</b> members / projects</span>
        <span><b>Unlimited </b>saved reports</span>
        <span>Predictive analytics</span>
    </PriceCard>
    </div>
    </div>
  )
  }

export default PriceList;