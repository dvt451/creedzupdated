'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useAppContext } from '@/shared/hooks/ThemeContext'
import { Fly } from '@/shared/icons/icons'

export default function Pricing() {
   const [priceList, setPriceList] = useState(0)
   const _ = useAppContext()
   const pricingList =[
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

   const priceListHandler = (index)=>{
      setPriceList(index)
   }
  return (
    <section className='pricing'>
      <div id='pricing-container' className='pricing__container'>
         <h2 className="pricing__title">Pricing</h2>
         <div className='pricing__content'>
            <div className='pricing__row'>
               <div className="pricing__column pricing__column_left">
                  <ul className="pricing__list">
                     {
                        pricingList.map((item,i)=>{
                           return <li key={i} className={`pricing__item`}><button onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} className={priceList === i ? '_active' : ''} onClick={()=>{
                              priceListHandler(i)
                           }}>{item}</button></li>
                        })
                     }
                  </ul>
               </div>
               <div className="pricing__column pricing__column_right">
                  <h3 className="pricing__price">Monthly price - {pricingBody[priceList].monthlyPrice}</h3>
                  <p className="pricing__text">{pricingBody[priceList].text}
                  <br /><br />
                  An indispensable resource for everyone, empowering success by providing everything needed, one task at a time.
                  </p>
                  <ul className="pricing-services__list">
                     {
                        pricingBody[priceList].serviceList.map((columns,i)=>{
                           return <li key={i} className="pricing-services__column">
                              {
                                 columns.map((item,i)=>{
                                    return <div key={i} className='pricing-services__item'>{Fly}<span>{item}</span></div>
                                 })
                              }
                           </li>
                        })
                     }
                  </ul>
               </div>
            </div>
            <div className="pricing__row">
               <div className='pricing__column pricing__column_left'>
                  <p className="pricing__text">Your brand deserves the best.<br />Work with us and see the difference.</p>
               </div>
               <div className='pricing__column pricing__column_right'>
                  <div className='pricing__buttons'>
                     <Link onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} href="/bookacall" className="pricing__reach pricing__button"><span>Reach Out</span></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}
