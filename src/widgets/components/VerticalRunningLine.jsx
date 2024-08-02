'use client'

export default function VerticalRunningLine({direction}) {

   const projects = [
      {
        Picture: "/portfolio/img0.webp",
      },
      {
       Picture: "/portfolio/img1.webp",
     },
     {
       Picture: "/portfolio/img2.webp",
     },
     {
       Picture: "/portfolio/img3.webp",
     },
     {
       Picture: "/portfolio/img4.webp",
     },
     {
       Picture: "/portfolio/img5.webp",
     },
     {
       Picture: "/portfolio/img6.webp",
     },
     {
       Picture: "/portfolio/img7.webp",
     },
     {
       Picture: "/portfolio/img8.webp",
     },
     {
       Picture: "/portfolio/img9.webp",
     },
     {
       Picture: "/portfolio/img11.webp",
     },
     {
       Picture: "/portfolio/img12.webp",
     },
     {
       Picture: "/portfolio/img13.webp",
     },
     {
       Picture: "/portfolio/img14.webp",
     },
    //   {
    //     Video: "/video/Project.mp4",
    //   },
    ];
   const getRotation = (index) => {
      const rotations = [15, 30, 15, -15,-30,-15];
      return rotations[index % rotations.length];
   };
   const getPadding = (index) => {
      const padding = [0,100,200,100];
      return padding[index % padding.length];
   };
  return (
   <div className={`running-line${direction ? direction : ''}`}>
      <div className="running-line__wrapper">
      {
         projects.map((item,i)=>{
            return <div className='running-line__items -ibg' key={i} style={{ transform: `rotate(${getRotation(i)}deg) translateX(${direction ? -getPadding(i) : getPadding(i)}px)`}}>
               <img src={item.Picture} alt="Poster" />
            </div>
         })
      }
      </div>
      <div className="running-line__wrapper">
      {
         projects.map((item,i)=>{
            return <div className='running-line__items -ibg' key={i}
style={{ transform: `rotate(${getRotation(i)}deg) translateX(${direction ? -getPadding(i) : getPadding(i)}px)`}}
>
               <img src={item.Picture} alt="Poster" />
            </div>
         })
      }
      </div>
   </div>
  )
}