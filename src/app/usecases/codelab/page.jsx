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
   const page = 'codelab-html'

  return (
    <>
    <CustomScrollStyles className={page}/>
       <div className='wrapper codelab'>
            <PreloaderScaling />
       <Header/>
          <main className='usecase'>
            <TopButton />
            <div className="usecase__container">
               <div className='usecase__top'>
                  <div className="usecase__hero">
                     <Image width={1756} height={1011} src="/usecases/codelab/hero.webp" alt="poster" />
                  </div>
                  <h1 className='usecase__main-title'>Codelab is a game-changer in the design industry.</h1>
                  <h2 className="usecase__title">Project Description</h2>
                  <p className="usecase__text">
                     Paytient is a game-changer in the healthcare industry. They offer a Health Payment Account (HPA) that empowers people to pay for care over time with no interest and no fees. Their mission is to turn patients into Paytients—people empowered to care for their families without the burden of financial stress.
                     <br /><br />
                     The logo icon was inspired by a wallet, symbolizing financial empowerment. The colors were carefully chosen to evoke feelings of care and healthcare. It&apos;s a simple yet powerful representation of what Paytient stands for—making healthcare accessible and affordable.
                     <br /><br />
                     This project was more than just a branding exercise; it was about contributing to a cause that has a significant impact on society. Healthcare is a basic need, and Paytient is doing an incredible job making it accessible to all.
                  </p>
                  <div className="usecase__row">
                     <div className="usecase__col">
                        <h3>Year</h3>
                        <p>2024</p>
                     </div>
                     <div className="usecase__col">
                        <h3>Industry</h3>
                        <p>Design</p>
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
                  <Image width={1756} height={1011} src="/usecases/codelab/img1.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img2.webp" alt="font" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img3.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img4.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img5.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img6.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img7.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/codelab/img8.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/codelab/img9.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/codelab/img10.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/codelab/img11.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/codelab/img12.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/codelab/img13.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/codelab/img14.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/codelab/img15.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/codelab/img16.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/codelab/img17.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/codelab/img18.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/codelab/img19.webp" alt="poster" />
                  <div className='usecase__image-block'>
                     <Image width={1756} height={1011} src="/usecases/codelab/img20.webp" alt="poster" />
                     <Image width={1756} height={1011} src="/usecases/codelab/img21.webp" alt="poster" />
                  </div>
                  <Image width={1756} height={1011} src="/usecases/codelab/img22.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img23.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img24.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img25.webp" alt="poster" />
                  <Image width={1756} height={1011} src="/usecases/codelab/img26.webp" alt="poster" />
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
