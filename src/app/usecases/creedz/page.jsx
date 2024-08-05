'use client'
import Links from './Links'
import Header from '@/widgets/header/Header'
import PreloaderScaling from '@/features/PreloaderScaling'
import Footer from '@/widgets/footer/Footer'
import CustomScrollStyles from '@/features/CustomScrollStyles'
import Letstalk from '@/pages/home/Letstalk'
import TopButton from '@/widgets/buttons/TopButton'

export default function page() {
   const page = 'creedz-html'
  return (
    <>
    <CustomScrollStyles className={page}/>
       <div className='wrapper creedz'>
            <PreloaderScaling />
         <Header />
          <main className='usecase'>
            <TopButton />
            <div className="usecase__container">
               <div className='usecase__top'>
                  <div className="usecase__hero">
                     <img src="/usecases/creedz/hero.png" alt="poster" />
                  </div>
                  <h1 className='usecase__main-title'>creedz is a game-changer in the design industry.</h1>
                  <h2 className="usecase__title">Project Description</h2>
                  <p className="usecase__text">
                  Their mission is simple yet profound: to transform ideas into tangible experiences that inspire, engage, and empower. With a team fueled by curiosity and driven by excellence, Creedz navigates the intricate landscapes of design and development, weaving together aesthetics and technology seamlessly.
<br /><br />
Crafted the website design, logo, and branding for Creedz, a comprehensive design and development agency. 
The branding emphasizes its innovative spirit with a sleek, modern logo and a cohesive visual identity. The website design provides a seamless user experience, highlighting Creedz&apos;s dedication to excellence and its ability to offer complete solutions for transforming ideas into impactful digital products.</p>
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
                     <div className="usecase__col">
                        <h3>Website:</h3>
                        <p>www.creedz.net</p>
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
