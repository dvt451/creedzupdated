'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Parallax } from 'swiper/modules'
import { ArrowRight, ArrowLeft } from '@/shared/icons/icons'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import 'swiper/css/parallax'
import { useAppContext } from '@/shared/hooks/ThemeContext'

export default function Portfolio() {

  const swiperRef = useRef(null)
  const _ = useAppContext()
  
  const posterHovered = ()=>{
   _.setProjectHover(true)
   }
   const posterDisHovered = ()=>{
      _.setProjectHover(false)
   }
  const projects = [
   {
      title: 'Skrex',
      text: "The Skrex branding journey began with an in-depth exploration of the company's ethos, values, and aspirations. Extensive market research and competitor analysis provided valuable insights into the ever-evolving world of blockchain technology and decentralized solutions.",
      labelList: ['Branding', 'Illustration', 'Crypto'],
      posterLabels: ['New Project'],
      video: '/usecases/skrex/video2.webm',
      link: '/usecases/skrex',
      images: [
        '/projects/skrex/img2.webp',
        '/projects/skrex/img3.webp',
        '/projects/skrex/img4.webp',
        '/projects/skrex/img5.webp',
      ],
    },
   //  {
   //    title: 'Creedz',
   //    text: "Creedz, a design and development agency, transforms ideas into stunning digital experiences. The talented team creates sleek websites and powerful apps with meticulous attention to detail. Known for capturing the essence of brands, has earned a reputation for quality and creativity. Today, they continue to innovate and push the boundaries of design and development.",
   //    labelList: ['Website', 'Development', 'Branding', 'Social Media'],
   //    posterLabels: ['New Project'],
   //    poster: '/projects/creedz/img1.webp',
   //    link: '/usecases/creedz',
   //    images: [
   //      '/projects/creedz/img2.webp',
   //      '/projects/creedz/img3.webp',
   //      '/projects/creedz/img4.webp',
   //      '/projects/creedz/img5.webp',
   //    ],
   //  },
    {
      title: 'Cadence',
      text: "In a bustling city known for innovation, Cadence Marketing was born in a cozy loft overlooking the skyline. Here, a team of creative minds huddled together, brainstorming strategies that resonated with precision. They crafted campaigns like composers, each note resonating with a client's unique voice.",
      labelList: ['Branding', 'Social media posts'],
      posterLabels: ['New Project'],
      poster: '/projects/cadence/img1.webp',
      link: '/usecases/cadence',
      images: [
        '/projects/cadence/img2.webp',
        '/projects/cadence/img3.webp',
        '/projects/cadence/img4.webp',
        '/projects/cadence/img5.webp',
      ],
    },
    {
      title: 'Codelab',
      text: "The CodeLab branding journey began with an in-depth exploration of the company's ethos, values, and aspirations. Extensive market research and competitor analysis provided valuable insights into the ever-evolving world of software development and technology solutions.",
      labelList: ['Website', 'Branding', 'Social media'],
      posterLabels: ['New Project'],
      poster: '/projects/codelab/img1.webp',
      link: '/usecases/codelab',
      images: [
        '/projects/codelab/img2.webp',
        '/projects/codelab/img3.webp',
        '/projects/codelab/img4.webp',
        '/projects/codelab/img5.webp',
      ],
    },
  ]

  return (
    <section id='portfolio' className='portfolio'>
      <div className="portfolio__container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Parallax]}
          allowTouchMove={true}
          spaceBetween={50}
          parallax={true}
          speed={1200}
          navigation={{
            nextEl: '.portfolio__next',
            prevEl: '.portfolio__prev'
          }}
        >
          {
            projects.map((item, i) => (
              <SwiperSlide key={i}>
                <div className='portfolio__content'>
                  <div className='portfolio__top'>
                    <div className="portfolio__column portfolio-info">
                      <div className='portfolio-info__content'>
                        <h2 data-swiper-parallax="-200" className="portfolio__title">{item.title}</h2>
                        <p data-swiper-parallax="-300" className="portfolio__text">{item.text}</p>
                        <ul className="portfolio__labels">
                          {
                            item.labelList.map((label, i) => (
                              <li data-swiper-parallax="-400" key={i} className="portfolio__label">{label}</li>
                            ))
                          }
                        </ul>
                        <div data-swiper-parallax="-500" className="portfolio__bottom">
                          <Link onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} href={item.link} onClick={()=>_.setHoverAnyLink(false)} className="portfolio__view button">View Project</Link>
                          <div className='portfolio__buttons'>
                            <button onMouseEnter={()=>{i !== 0 ? _.setHoverAnyLink(true) : _.setHoverAnyLink(false)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} className={`${i !== 0 ? 'portfolio__prev' : 'disabled'} portfolio__button`}><span>Previous Project</span><i>{ArrowLeft}</i></button>
                            <button onMouseEnter={()=>{i !== projects.length - 1 ? _.setHoverAnyLink(true) : _.setHoverAnyLink(false)}} onMouseLeave={()=>{i !== projects.length - 1 ? _.setHoverAnyLink(false) : _.setHoverAnyLink(true)}} className={`${i !== projects.length - 1 ? 'portfolio__next' : 'disabled'} portfolio__button`}><span>Next Project</span><i>{ArrowRight}</i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-swiper-parallax="-200" className="portfolio__row portfolio-images md2">
                    {
                      item.images.map((img, i) => (
                        <img width="500" height="300" key={i} src={img} alt="image" />
                      ))
                    }
                  </div>
                  <Link href={item.link} className="portfolio__column portfolio-poster" onMouseEnter={posterHovered} onClick={()=>{
      posterDisHovered()
      setTimeout(() => {
          const element = document.querySelector('.usecase');
          element?.scrollIntoView()
         }, 300);
  }} onMouseLeave={posterDisHovered}>
                      <div data-swiper-parallax="-400" className="portfolio__image -ibg">
                        <ul className="portfolio__labels">
                          <li className="portfolio__label">New Project</li>
                        </ul>
                        {item.video? <video loop muted autoPlay playsInline src={item.video}></video> : <img src={item.poster} alt="poster" />}
                      </div>
                      </Link>
                  </div>
                  <div data-swiper-parallax="-200" className="portfolio__row portfolio-images md1">
                    {
                      item.images.map((img, i) => (
                        <img width="500" height="300" key={i} src={img} alt="image" />
                      ))
                    }
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}
