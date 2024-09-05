import React from 'react'
import HeaderBlock from './HeaderBlock'
import HeaderLogo from '../logos/HeaderLogo'
import Menublock from '@/shared/menu/MenuBlock'
import ThemeModeButton from '../buttons/ThemeModeButton'
import AvailableNowButton from '../buttons/AvailableNowButton'
import Linktoportfolio from '../buttons/LinkToPortfolio'
import Burgerbutton from './BurgerButton'
import Burgerbody from './BurgerBody'

export default function Header() {
  return (
    <HeaderBlock>
               <div className="header__top">
            <div className="header__container">
               <div className="header__content">
                  <HeaderLogo />
                 <nav className="header__menu menu">
                   <ul className="menu__list">
                     <Menublock />
                   </ul>
                 </nav>
                 <div className="header__actions">
                     <ThemeModeButton />
                     <AvailableNowButton/>
                     <Linktoportfolio />
                     <Burgerbutton />
                 </div>
               </div>
            </div>
         </div>
         <Burgerbody />
    </HeaderBlock>
  )
}
