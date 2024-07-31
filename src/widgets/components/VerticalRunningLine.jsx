'use client'

export default function VerticalRunningLine({direction}) {

   const projects = [
      {
        Picture: "/portfolio/img0.jpg",
      },
      {
       Picture: "/portfolio/img1.png",
     },
     {
       Picture: "/portfolio/img2.jpeg",
     },
     {
       Picture: "/portfolio/img3.jpeg",
     },
     {
       Picture: "/portfolio/img4.png",
     },
     {
       Picture: "/portfolio/img5.jpeg",
     },
     {
       Picture: "/portfolio/img6.webp",
     },
     {
       Picture: "/portfolio/img7.jpeg",
     },
     {
       Picture: "/portfolio/img8.jpeg",
     },
     {
       Picture: "/portfolio/img9.png",
     },
     {
       Picture: "/portfolio/img11.jpeg",
     },
     {
       Picture: "/portfolio/img12.jpeg",
     },
     {
       Picture: "/portfolio/img13.png",
     },
     {
       Picture: "/portfolio/img14.png",
     },
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