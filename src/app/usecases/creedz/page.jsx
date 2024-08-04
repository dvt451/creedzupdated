'use client'
import Links from './Links'
import Header from '@/widgets/header/Header'
import PreloaderScaling from '@/features/PreloaderScaling'
import Footer from '@/widgets/footer/Footer'
import CustomScrollStyles from '@/features/CustomScrollStyles'
import Letstalk from '@/pages/home/Letstalk'
import Butttohead from '@/widgets/buttons/Butttohead'


export default function page() {
   const page = 'creedz-html'
  return (
    <>
    <CustomScrollStyles className={page}/>
       <div className='wrapper creedz'>
            <PreloaderScaling />
         <Header />
          <main className='usecase'>
            <Butttohead />
            <div className="usecase__container">
               <div className='usecase__top'>
                  <div className="usecase__hero">
                     <img src="/usecases/creedz/hero.png" alt="poster" />
                  </div>
                  <h1 className='usecase__main-title'>creedz is a game-changer in the design industry.</h1>
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
                  <img src="/usecases/creedz/img1.jpeg" alt="poster" />
                  <div className="usecase__font creedz-font">
                     <div className="creedz-font__column creedz-font-colors">
                        <div style={{color: '#fff',backgroundColor: 'rgba(230, 20, 40, 1)'}} className="creedz-font-colors__column">
                           <h4>Red</h4>
                           <ul className="creedz-font-colors__list">
                              <li className="creedz-font-colors__item">HEX : #E61428</li>
                              <li className="creedz-font-colors__item">RGB: 230 20 40</li>
                              <li className="creedz-font-colors__item">CSS : rgba(230, 20, 40, 1)</li>
                           </ul>
                        </div>
                        <div style={{color: '#000',backgroundColor: 'rgba(253, 253, 251, 1)'}} className="creedz-font-colors__column">
                           <h4>White</h4>
                           <ul className="creedz-font-colors__list">
                              <li className="creedz-font-colors__item">HEX : #FDFDFB</li>
                              <li className="creedz-font-colors__item">RGB: 16 16 16</li>
                              <li className="creedz-font-colors__item">CSS : rgba(253, 253, 251, 1)</li>
                           </ul>
                           </div>
                        <div style={{color: '#fff',backgroundColor: 'rgba(16, 16, 16, 1)'}} className="creedz-font-colors__column">
                           <h4>Black</h4>
                           <ul className="creedz-font-colors__list">
                              <li className="creedz-font-colors__item">HEX : #101010</li>
                              <li className="creedz-font-colors__item">RGB: 253 253 251</li>
                              <li className="creedz-font-colors__item">CSS : rgba(16, 16, 16, 1)</li>
                           </ul>
                        </div>
                        <div style={{color: '#000',backgroundColor: 'rgba(203, 203, 203, 1)'}} className="creedz-font-colors__column">
                           <h4>Light Grey</h4>
                           <ul className="creedz-font-colors__list">
                              <li className="creedz-font-colors__item">HEX : #CBCBCB</li>
                              <li className="creedz-font-colors__item">RGB: 203 203 203</li>
                              <li className="creedz-font-colors__item">CSS : rgba(203, 203, 203, 1)</li>
                           </ul>
                        </div>
                     </div>
                     <div className="creedz-font__column creedz-font__letters">
                        <img src="/usecases/creedz/aab.png" alt="" />
                     </div>
                     <div className="creedz-font__column creedz-font-typography">
                        <h4>Typography</h4>
                        <h5>SF Pro Display</h5>
                        <span>0123</span>
                        <p>SF Pro. This neutral, flexible, sans-serif typeface is the system font for iOS, iPadOS, macOS and tvOS. SF Pro features nine weights, variable optical sizes for optimal legibility, four widths, and includes a rounded variant. SF Pro supports over 150 languages across Latin, Greek, and Cyrillic scripts.</p>
                     </div>
                     <div className="creedz-font__column creedz-font-symbols">
                        <h3>Uppercase</h3>
                        <p>ABCDEFGHIJKLMNOPQ<br />RSTUVWXYZ</p>
                        <h3>Lowercase</h3>
                        <p>ABCDEFGHIJKLMNOPQRST<br />UVWXYZ</p>
                        <h3>Numbers</h3>
                        <p>0123456789</p>
                     </div>
                  </div>
                  <img src="/usecases/creedz/img2.png" alt="poster" />
                  <div className='usecase__image-block'>
                     <img style={{objectPosition: 'center right'}} src="/usecases/creedz/img3.jpeg" alt="poster" />
                     <img src="/usecases/creedz/img4.jpeg" alt="poster" />
                  </div>
                  <img src="/usecases/creedz/img5.png" alt="poster" />
                  <img src="/usecases/creedz/img6.png" alt="poster" />
                  <div className='usecase__image-block'>
                     <img src="/usecases/creedz/img7.jpeg" alt="poster" />
                     <img src="/usecases/creedz/img8.jpeg" alt="poster" />
                  </div>
                  <img src="/usecases/creedz/img9.jpeg" alt="poster" />
                  <img src="/usecases/creedz/img10.jpeg" alt="poster" />
                  <div className='usecase__image-block'>
                     <img src="/usecases/creedz/img11.jpeg" alt="poster" />
                     <img src="/usecases/creedz/img12.jpeg" alt="poster" />
                  </div>
                  <img src="/usecases/creedz/img13.jpeg" alt="poster" />
                  <img src="/usecases/creedz/img14.jpeg" alt="poster" />
                  <div className='usecase__image-block'>
                     <img src="/usecases/creedz/img15.jpeg" alt="poster" />
                     <img src="/usecases/creedz/img16.jpeg" alt="poster" />
                  </div>
                  <img src="/usecases/creedz/img17.jpeg" alt="poster" />
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
