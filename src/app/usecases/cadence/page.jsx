import dynamic from 'next/dynamic';
import Header from '@/widgets/header/Header'
import Links from './Links'
import PreloaderScaling from '@/features/PreloadScaling/PreloaderScaling'
import Footer from '@/widgets/footer/Footer'
import CustomScrollStyles from '@/features/CustomScrollStyles'
import TopButton from '@/widgets/buttons/TopButton'
import Image from 'next/image'
const Letstalk = dynamic(() => import('@/pages/home/Letstalk/Letstalk'));

export default function page() {
   const page = 'cadence-html'
   return (
       <>
       <CustomScrollStyles className={page}/>
          <div className='wrapper cadence'>
               <PreloaderScaling />
            <Header />
             <main className='usecase'>
               <TopButton />
               <div className="usecase__container">
                  <div className='usecase__top'>
                     <div className="usecase__hero">
                        <video loop muted autoPlay playsInline src="/usecases/cadence/video.webm"></video>
                     </div>
                     <h1 className='usecase__main-title'>Cadence is strategy in motion, powering brands forward.</h1>
                     <h2 className="usecase__title">Project Description</h2>
                     <p className="usecase__text">
                     In a bustling city known for innovation, Cadence Marketing was born in a cozy loft overlooking the skyline. Here, a team of creative minds huddled together, brainstorming strategies that resonated with precision. They crafted campaigns like composers, each note resonating with a client&apos;s unique voice.
      <br /><br />
      Clients walked through their doors seeking more than marketing—they sought a symphony of growth, where every initiative harmonized seamlessly. Cadence Marketing didn&apos;t just promise results; they delivered movements that reverberated long after the campaign ended, leaving a lasting impression on every brand they touched.
                     </p>
                     <div className="usecase__row">
                        <div className="usecase__col">
                           <h3>Year</h3>
                           <p>2024</p>
                        </div>
                        <div className="usecase__col">
                           <h3>Industry</h3>
                           <p>Marketing</p>
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
                     <Image width={1756} height={1011} src="/usecases/cadence/img1.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/cadence/font.webp" alt="font" />
                     <Image width={1756} height={1011} src="/usecases/cadence/img2.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/cadence/img3.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/cadence/img4.webp" alt="poster" />
                     <div className='usecase__image-block'>
                        <Image width={1756} height={1011} src="/usecases/cadence/img5.webp" alt="poster" />
                        <Image width={1756} height={1011} src="/usecases/cadence/img6.webp" alt="poster" />
                     </div>
                     <Image width={1756} height={1011} src="/usecases/cadence/img7.webp" alt="poster" />
                     <div className='usecase__image-block'>
                        <Image width={1756} height={1011} src="/usecases/cadence/img8.webp" alt="poster" />
                        <Image width={1756} height={1011} src="/usecases/cadence/img9.webp" alt="poster" />
                     </div>
                        <Image width={1756} height={1011} src="/usecases/cadence/img10.webp" alt="poster" />
                        <Image width={1756} height={1011} src="/usecases/cadence/img11.webp" alt="poster" />
                     <div className='usecase__image-block'>
                        <Image width={1756} height={1011} src="/usecases/cadence/img12.webp" alt="poster" />
                        <video loop muted autoPlay playsInline src="/usecases/cadence/watch.webm"></video>
                     </div>
                     <Image width={1756} height={1011} src="/usecases/cadence/img13.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/cadence/img14.webp" alt="poster" />
                     <div className='usecase__image-block'>
                        <Image width={1756} height={1011} src="/usecases/cadence/img16.webp" alt="poster" />
                        <Image width={1756} height={1011} src="/usecases/cadence/img15.webp" alt="poster" />
                     </div>
                     <Image width={1756} height={1011} src="/usecases/cadence/img17.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/cadence/img18.webp" alt="poster" />
                     <div className='usecase__image-block'>
                        <Image width={1756} height={1011} src="/usecases/cadence/img19.webp" alt="poster" />
                        <Image width={1756} height={1011} src="/usecases/cadence/img20.webp" alt="poster" />
                     </div>
                  </div>
                  <Links />
               </div>
                  <Letstalk />
             </main>
             <Footer />
          </div>
       </>
  )
}
