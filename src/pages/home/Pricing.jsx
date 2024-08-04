'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useAppContext } from '@/shared/hooks/ThemeContext'
import { Fly } from '@/shared/icons/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Parallax } from 'swiper/modules'

export default function Pricing() {
   const [priceList, setPriceList] = useState(0)
   const [swiperInstance, setSwiperInstance] = useState(null)
   const _ = useAppContext()
   const pricingList = [
      'Design & Animation',
      'Design & Development',
      'Design & Marketing',
      'Super Package',
   ]
   const pricingBody = [
      {
         monthlyPrice: '$4500',
         text: 'For this price, you receive a comprehensive, full-service package that includes expert design, as well as 3D and animation services, ensuring your project achieves exceptional results and maximum impact.',
         serviceList: [
            [
               'Graphic Design',
               'UI/UX',
               'Application',
               '3D design',
               'Branding',
            ],
            [
               'Logo design',
               'Banners',
               'Presentations',
               'Printing Files',
               'Social Media Design',
            ],
            [
               '2D Animation',
               '3D Animation',
               'Video Editing',
               'Motion Graphics',
               'Logo Animation',
            ],
         ]
      },
      {
         monthlyPrice: '$6000',
         text: 'For this price, you receive a comprehensive, full-service package that includes expert design, seamless development, as well as 3D and animation services, ensuring your project achieves exceptional results and maximum impact.',
         serviceList: [
            [
               'Graphic Design',
               'UI/UX',
               'Application',
               '3D design',
               'Branding',
            ],
            [
               'Logo design',
               'Banners',
               'Presentations',
               'Printing Files',
               'Social Media Design',
            ],
            [
               '2D Animation',
               '3D Animation',
               'Video Editing',
               'Motion Graphics',
               'Logo Animation',
            ],
            [
               'Webflow & Tilda',
               'Vue Js',
               'Angular Js',
               'Laravel, Yii2 etc',
               'React JS',
            ],

         ]
      },
      {
         monthlyPrice: '$4000',
         text: 'For this price, you receive a comprehensive, full-service package that includes expert design, strategic marketing, as well as 3D and animation services, ensuring your project achieves exceptional results and maximum impact.',
         serviceList: [
            [
               'Graphic Design',
               'UI/UX',
               'Application',
               '3D design',
               'Branding',
            ],
            [
               'Logo design',
               'Banners',
               'Presentations',
               'Printing Files',
               'Social Media Design',
            ],
            [
               '2D Animation',
               '3D Animation',
               'Video Editing',
               'Motion Graphics',
               'Logo Animation',
            ],
            [
               'Strategies',
               'Content Marketing',
               'SM Marketing',
               'Webflow & Tilda',
               'Development',
            ]
         ]
      },
      {
         monthlyPrice: '$6800',
         text: 'For this price, you receive a comprehensive, full-service package that includes expert design, seamless development, strategic marketing, as well as 3D and animation services, ensuring your project achieves exceptional results and maximum impact.',
         serviceList: [
            [
               'Graphic Design',
               'UI/UX',
               'Application',
               '3D design',
               'Branding',
            ],
            [
               'Logo design',
               'Banners',
               'Presentations',
               'Printing Files',
               'Social Media Design',
            ],
            [
               '2D Animation',
               '3D Animation',
               'Video Editing',
               'Motion Graphics',
               'Logo Animation',
            ],
            [
               'Webflow & Tilda',
               'Vue Js',
               'Angular Js',
               'Laravel, Yii2 etc',
               'React JS',
            ],
            [
               'Strategies',
               'Content Marketing',
               'SM Marketing',
               'Webflow & Tilda',
               'Development',
            ]
         ]
      },
   ]

   const priceListHandler = (index) => {
      setPriceList(index)
      if (swiperInstance) {
         swiperInstance.slideTo(index)
      }
   }

   const handleSlideChange = (swiper) => {
      setPriceList(swiper.activeIndex)
   }

   return (
      <section className='pricing'>
         <div id='pricing-container' className='pricing__container'>
            <h2 className="pricing__title">Pricing</h2>
            <div className='pricing__content'>
               <div className='pricing__row'>
                  <div className="pricing__column pricing__column_left">
                     <ul className="pricing__list">
                        {pricingList.map((item, i) => (
                           <li key={i} className={`pricing__item`}>
                              <button
                                 onMouseEnter={() => { _.setHoverAnyLink(true) }}
                                 onMouseLeave={() => { _.setHoverAnyLink(false) }}
                                 className={priceList === i ? '_active' : ''}
                                 onClick={() => { priceListHandler(i) }}
                              >
                                 {item}
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className='pricing__column_block'>
                     <Swiper
                        modules={[Navigation, Parallax]}
                        spaceBetween={160}
                        speed={1200}
                        allowTouchMove={false}
                        direction='vertical'
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        onSlideChange={handleSlideChange}
                     >
                        {pricingBody.map((item, i) => (
                           <SwiperSlide key={i}>
                              <div className={`pricing__column pricing__column_right`}>
                                 <h3 data-swiper-parallax="-400" className="pricing__price">Monthly price - {item.monthlyPrice}</h3>
                                 <p data-swiper-parallax="-300" className="pricing__text">
                                    {item.text}
                                    <br /><br />
                                    An indispensable resource for everyone, empowering success by providing everything needed, one task at a time.
                                 </p>
                                 <ul data-swiper-parallax="-200" className="pricing-services__list">
                                    {item.serviceList.map((columns, i) => (
                                       <li key={i} data-swiper-parallax={i * -50} className="pricing-services__column">
                                          {columns.map((serviceItem, j) => (
                                             <div key={j} data-swiper-parallax={j * -50} className='pricing-services__item'>
                                                {Fly}<span>{serviceItem}</span>
                                             </div>
                                          ))}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
               <div className="pricing__row">
                  <div className='pricing__column pricing__column_left'>
                     <p className="pricing__text">Your brand deserves the best.<br />Work with us and see the difference.</p>
                  </div>
                  <div className='pricing__column pricing__column_right'>
                     <div className='pricing__buttons'>
                        <Link
                           onMouseEnter={() => { _.setHoverAnyLink(true) }}
                           onMouseLeave={() => { _.setHoverAnyLink(false) }}
                           href="/bookacall"
                           className="pricing__reach pricing__button"
                        >
                           <span>Reach Out</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
