import React from 'react';
import Header from './Header';
import AdvantageCard from './AdvantageCard';
import VideoBox from './VideoBox';
import Analytics from './Analytics';
import Clients from './Clients';
import PriceList from './PriceList';
import Contact from './Contact';




function App() {

  return(
    <div className='font2'>
     <Header/>
     <div className='grid grid-cols-3 gap-10 mx-36 relative -top-36 bg-white px-32 py-8'>
      <AdvantageCard src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/ad2e7f73-o-saas-benefit-icon-01.svg" 
      heading="Understand every step of the way" 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum."/>
      <AdvantageCard src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/062ab54e-o-saas-benefit-icon-02.svg" 
      heading="Build faster with instant answers" 
      text="Lacinia condimentum lectus dolor viverra nunc. Mauris quis condimentum orci. Curabitur hendrerit, felis vitae."/>
      <AdvantageCard src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/o-saas/433a1368-o-saas-benefit-icon-03.svg" 
      heading="Unlock insights for everyone" 
      text="Curabitur quis purus congue ante interdum mattis sit amet at ante. Nulla volutpat, magna quis convallis tristique, purus mi sollicitudin sem."/>
     </div>
     <hr className='border border-purple-600 mx-40'/>

     <div className='flex justify-center gap-12 py-20'>
      <h1 className=' text-xl text-purple-800 '>A foundation built for <br/>scale and forsight</h1>
      <p className='text-lg text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est<br/> tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.</p>
     </div>
     <VideoBox/>
     <Analytics/>
     <Clients/>
     <PriceList/>
     <hr/>
     <Contact/>

    </div>
  )
 }

export default App
