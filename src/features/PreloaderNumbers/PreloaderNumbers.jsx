import PreloaderScaling from '../PreloadScaling/PreloaderScaling'
import {Varta} from 'next/font/google'
import PreloadWrapper from './PreloadWrapper'
const varta = Varta({subsets: ["latin"], weight: ["400"]})


export default function PreloaderNumbers() {
  return (
   <>
   <PreloadWrapper>
     <div className="home-loader__top">
        <div className="home-loader__column">
           <p className="home-loader__text">Is your big idea ready to work its magic?  <br /> Let&apos;s Create magic together</p>
        </div>
        <div className="home-loader__column">
           <p className="home-loader__text">All-in-one solution <br />unlimited design & development</p>
           <p className="home-loader__text">Founded in 2099 <br />From the Heart of the Earth</p>
        </div>
     </div>
     <div className="home-loader__bottom">
        <div className={`home-loader__numbers ${varta.className}`}>
           <div className="home-loader__number home-loader__number_one">
              <div className={`home-loader__nums ${varta.className}`}>
                 <span  className='home-loader__num'>0</span>
                 <span  className='home-loader__num'>2</span>
                 <span  className='home-loader__num'>5</span>
                 <span  className='home-loader__num'>7</span>
                 <span  className='home-loader__num'>9</span>
              </div>
           </div>
           <div className="home-loader__number home-loader__number_two">
              <div className='home-loader__nums'>
                 <span  className='home-loader__num'>0</span>
                 <span  className='home-loader__num'>2</span>
                 <span  className='home-loader__num'>5</span>
                 <span  className='home-loader__num'>7</span>
                 <span  className='home-loader__num'>9</span>
              </div>
           </div>
        </div>
     </div>
     </PreloadWrapper>
   {/*<PreloaderScaling delay={6} />*/}
</>
  )
}
