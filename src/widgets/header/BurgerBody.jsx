import Menublock from "@/shared/menu/MenuBlock"
import BurgerBodyBlock from "./BurgerBodyBlock"
import Footerbottom from "../footer/Footerbottom"
import Businesslink from "../footer/Businesslink"
import AvailableNowButton from "../buttons/AvailableNowButton"
import Linktoportfolio from "../buttons/LinkToPortfolio"

export default function Burgerbody() {
  return (
   <BurgerBodyBlock>
      <div className="burger-body__top">
         <AvailableNowButton />
         <Linktoportfolio />
      </div>
      <nav className="burger-body__menu menu">
         <ul className="menu__list">
            <Menublock />
         </ul>
      </nav>
      <Businesslink />
      <Footerbottom />
   </BurgerBodyBlock>
  )
}
