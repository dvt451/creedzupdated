import dynamic from 'next/dynamic';
import Links from './Links'
import Header from '@/widgets/header/Header'
import PreloaderScaling from '@/features/PreloadScaling/PreloaderScaling'
import Footer from '@/widgets/footer/Footer'
import CustomScrollStyles from '@/features/CustomScrollStyles'
import Butttohead from '@/widgets/buttons/TopButton'
import Image from 'next/image'
const Letstalk = dynamic(() => import('@/pages/home/Letstalk/Letstalk'));

export default function page() {
   const page = 'skrex-html'
  return (
    <>
    <CustomScrollStyles className={page}/>
       <div className='wrapper skrex'>
            <PreloaderScaling />
         <Header />
          <main className='usecase'>
            <Butttohead />
            <div className="usecase__container">
               <div className='usecase__top'>
                  <div className="usecase__hero">
                     <video loop muted autoPlay playsInline src={'/usecases/skrex/video1.webm'}></video>
                  </div>
                  <h1 className='usecase__main-title'>skrex is a game-changer in the design industry.</h1>
                  <h2 className="usecase__title">Project Description</h2>
                  <p className="usecase__text">
                  The Skrex branding journey began with an in-depth exploration of the company&apos;s ethos, values, and aspirations. Extensive market research and competitor analysis provided valuable insights into the ever-evolving world of blockchain technology and decentralized solutions.
<br /><br />
Understanding Skrex&apos;s unique selling propositions, such as its focus on security, scalability, and innovation, along with its target audience of tech-savvy developers and forward-thinking businesses, paved the way for a strategic branding approach.
                  </p>
                  <div className="usecase__row">
                     <div className="usecase__col">
                        <h3>Year</h3>
                        <p>2024</p>
                     </div>
                     <div className="usecase__col">
                        <h3>Industry</h3>
                        <p>Blockchain</p>
                     </div>
                     <div className="usecase__col">
                        <h3>Project direction:</h3>
                        <ul>
                           <li>Logo</li>
                           <li>Brand Identity</li>
                           <li>3D</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="usecase__posters">
                  <video loop muted autoPlay playsInline src={'/usecases/skrex/video2.webm'}></video>
                  <Image width={1756} height={1011} src="/usecases/skrex/img2.webp" alt="poster" />
                  <Image width={1756} height={1011} style={{objectPosition: 'center right'}} src="/usecases/skrex/img3.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/skrex/img4.webp" className='position-right' alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/skrex/img5.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/skrex/img6.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/skrex/img7.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/skrex/img8.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/skrex/img9.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/skrex/img10.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/skrex/img11.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/skrex/img12.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/skrex/img13.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/skrex/img14.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/skrex/img15.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/skrex/img16.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/skrex/img17.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/skrex/img18.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/skrex/img19.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/skrex/img20.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/skrex/img21.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/skrex/img22.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/skrex/img23.webp" alt="poster" />
               </div>
               <Links />
            </div>
          </main>
          <Letstalk />
          <Footer />
       </div>
    </>
  )
}
