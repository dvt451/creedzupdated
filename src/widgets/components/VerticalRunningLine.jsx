import React from 'react';
import PropTypes from 'prop-types';

const projects = [
  { Picture: "/portfolio/img0.jpg" },
  { Picture: "/portfolio/img1.png" },
  { Picture: "/portfolio/img2.jpeg" },
  { Picture: "/portfolio/img3.jpeg" },
  { Picture: "/portfolio/img4.png" },
  { Picture: "/portfolio/img5.jpeg" },
  { Picture: "/portfolio/img6.webp" },
  { Picture: "/portfolio/img7.jpeg" },
  { Picture: "/portfolio/img8.jpeg" },
  { Picture: "/portfolio/img9.png" },
  { Picture: "/portfolio/img11.jpeg" },
  { Picture: "/portfolio/img12.jpeg" },
  { Picture: "/portfolio/img13.png" },
  { Picture: "/portfolio/img14.png" },
];

const getRotation = (index) => {
  const rotations = [15, 30, 15, -15,-30,-15];
  return rotations[index % rotations.length];
};
const getPadding = (index) => {
   const padding = [0,100,200,100];
   return padding[index % padding.length];
 };

export default function VerticalRunningLine({ direction }) {
   
  return (
    <div className={`running-line ${direction ? direction : ''}`}>
         {[...Array(2)].map((_, index) => (
           <div className="running-line__wrapper" key={index}>
             {projects.map((item, i) => (
               <div 
                 className="running-line__items -ibg" 
                 key={i} 
                 style={{ transform: `rotate(${getRotation(i)}deg) translateX(${direction ? -getPadding(i) : getPadding(i)}px)`}}
               >
                 <img src={item.Picture} alt="Poster" />
               </div>
             ))}
           </div>
         ))}
    </div>
  );
}

VerticalRunningLine.propTypes = {
  direction: PropTypes.string,
};

VerticalRunningLine.defaultProps = {
  direction: '',
};
