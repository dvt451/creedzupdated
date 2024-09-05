'use client'
import { useAppContext } from "@/shared/hooks/ThemeContext";
export default function Contacts() {
   const _ = useAppContext()
  return (
    <div className='media'>
      <a onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}}    href='https://t.me/CreedzStudio' target='_blank' className="media__frame stroke">
         <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
            <path d="M19.2122 1C19.7998 1 20.2432 1.51552 20.0061 2.47439L17.1294 16.0326C16.9284 16.9966 16.3459 17.2286 15.5416 16.7801L8.68005 11.7125C8.65345 11.6934 8.63177 11.6683 8.61681 11.6392C8.60186 11.61 8.59406 11.5777 8.59406 11.545C8.59406 11.5122 8.60186 11.48 8.61681 11.4508C8.63177 11.4217 8.65345 11.3965 8.68005 11.3774L16.6036 4.22201C16.9645 3.90239 16.5263 3.74773 16.052 4.03642L6.1076 10.3103C6.07744 10.33 6.0432 10.3425 6.00747 10.347C5.97174 10.3515 5.93547 10.3477 5.9014 10.3361L1.67928 9.00089C0.741027 8.72767 0.741027 8.08326 1.89064 7.62445L18.7843 1.10826C18.9184 1.0445 19.0638 1.00772 19.2122 1Z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
      </a>
      <a onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}}    href='https://wa.me/17473439973' target='_blank' className="media__frame stroke">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.99801 1C5.0233 1.00544 0.994564 5.04255 1.00001 10.0173C1.00128 11.5269 1.38229 13.0119 2.10796 14.3356L1.41732 18.5799L5.66162 17.8893C10.0189 20.2793 15.4896 18.685 17.8797 14.3273C20.2697 9.96954 18.6758 4.49966 14.3181 2.10921C12.9941 1.3829 11.5081 1.00145 9.99801 1ZM5.49838 5.08943H7.9512C8.06221 5.08943 8.16867 5.13353 8.24717 5.21203C8.32567 5.29052 8.36977 5.39699 8.36977 5.508C8.35604 6.0662 8.44983 6.62184 8.64602 7.14461C8.73052 7.31961 8.74909 7.5192 8.69835 7.70678C8.64761 7.89437 8.53095 8.05738 8.36977 8.16592L7.5117 9.00306C7.89216 9.74604 8.38964 10.423 8.98507 11.008C9.56534 11.6131 10.2396 12.1206 10.9816 12.5107L11.8188 11.6526C12.2374 11.234 12.4299 11.234 12.8401 11.3764C13.3629 11.5725 13.9185 11.6663 14.4767 11.6526C14.5861 11.6577 14.6896 11.7034 14.767 11.7809C14.8444 11.8583 14.8902 11.9618 14.8953 12.0712V14.524C14.8902 14.6334 14.8444 14.7369 14.767 14.8143C14.6896 14.8917 14.5861 14.9375 14.4767 14.9426C12.0145 14.8353 9.68058 13.8146 7.93027 12.0795C6.19252 10.3311 5.17132 7.99605 5.06725 5.53311C5.06825 5.4179 5.11361 5.3075 5.1939 5.22487C5.27419 5.14224 5.38324 5.09373 5.49838 5.08943Z" stroke="#FDFDFB" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
      </a>
      <a onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}}    href="tel:+19295429400" className="media__frame stroke phone">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M10.6375 0.973768C10.6611 0.883121 10.7196 0.805493 10.8002 0.75787C10.8809 0.710246 10.9771 0.696504 11.0678 0.71965C12.3217 1.04623 13.4658 1.70148 14.3819 2.61777C15.298 3.53406 15.9531 4.67821 16.2795 5.93216C16.3035 6.02279 16.2907 6.11928 16.2437 6.20045C16.1967 6.28161 16.1195 6.34084 16.0289 6.36513C16.0001 6.37329 15.9703 6.37746 15.9403 6.37752C15.862 6.37727 15.786 6.35106 15.7242 6.303C15.6623 6.25494 15.6181 6.18773 15.5986 6.1119C15.3031 4.97957 14.7112 3.94646 13.8837 3.11898C13.0562 2.29149 12.0231 1.69954 10.8908 1.40408C10.8003 1.38034 10.7229 1.32176 10.6754 1.24114C10.628 1.16052 10.6143 1.0644 10.6375 0.973768ZM10.1824 4.23745C11.5106 4.59428 12.4057 5.48944 12.7625 6.81758C12.7821 6.89342 12.8263 6.96062 12.8881 7.00868C12.95 7.05675 13.026 7.08295 13.1043 7.08321C13.1343 7.08314 13.1641 7.07897 13.1929 7.07081C13.2834 7.04652 13.3607 6.9873 13.4077 6.90613C13.4546 6.82496 13.4675 6.72848 13.4434 6.63784C13.0184 5.04407 11.9515 3.98156 10.3595 3.55301C10.271 3.53591 10.1793 3.55317 10.1031 3.60129C10.0269 3.64942 9.97196 3.72478 9.94938 3.81203C9.92681 3.89928 9.93834 3.99185 9.98164 4.07089C10.0249 4.14993 10.0967 4.2095 10.1824 4.23745ZM16.9949 12.9784C16.8479 14.0931 16.3 15.1161 15.4537 15.8562C14.6073 16.5964 13.5203 17.003 12.396 17C5.56049 17 9.94972e-06 11.4395 9.94972e-06 4.60402C-0.00231977 3.48013 0.404551 2.39382 1.14463 1.548C1.8847 0.702175 2.90737 0.154677 4.02162 0.00776748C4.24989 -0.0199845 4.481 0.0270688 4.68025 0.141862C4.8795 0.256654 5.03614 0.43299 5.12663 0.644389L6.99488 4.81829C7.06471 4.98013 7.09318 5.15681 7.07773 5.3324C7.06227 5.50799 7.00337 5.67698 6.90634 5.82413C6.89837 5.83564 6.8904 5.84715 6.88154 5.85778L5.00444 8.08994C4.97498 8.13884 4.95811 8.19428 4.95533 8.25129C4.95255 8.30831 4.96395 8.36513 4.9885 8.41666C5.68268 9.83777 7.17108 11.3147 8.60901 12.0088C8.66094 12.0329 8.718 12.0438 8.77514 12.0406C8.83229 12.0373 8.88775 12.02 8.93662 11.9902L11.1387 10.1202L11.1723 10.0945C11.3197 9.99721 11.489 9.93814 11.6649 9.92268C11.8408 9.90722 12.0179 9.93585 12.1799 10.006L16.3609 11.8796C16.5702 11.9706 16.7446 12.1266 16.8583 12.3246C16.972 12.5225 17.019 12.7517 16.9922 12.9784H16.9949ZM16.0785 12.525L11.8957 10.6515C11.8449 10.6301 11.7897 10.6212 11.7348 10.6253C11.6798 10.6295 11.6266 10.6467 11.5796 10.6754L9.38553 12.5454L9.35277 12.5702C9.20022 12.6721 9.02389 12.7327 8.84095 12.7462C8.65802 12.7597 8.4747 12.7256 8.30885 12.6472C6.71508 11.8778 5.12928 10.3026 4.35985 8.72745C4.28071 8.56287 4.24533 8.38067 4.25712 8.19844C4.26891 8.0162 4.32747 7.84008 4.42714 7.68707C4.43511 7.67467 4.44396 7.66405 4.45282 7.65254L6.32904 5.42126C6.35716 5.37344 6.37366 5.31968 6.37719 5.26431C6.38073 5.20895 6.37121 5.15352 6.3494 5.10251L4.47761 0.928611C4.45124 0.863905 4.40631 0.808447 4.34849 0.769216C4.29067 0.729986 4.22253 0.708735 4.15266 0.70814C4.13851 0.707289 4.12431 0.707289 4.11016 0.70814C3.16652 0.833173 2.30072 1.29761 1.67464 2.01463C1.04856 2.73164 0.705054 3.65214 0.708351 4.60402C0.708351 11.0481 5.95185 16.2916 12.396 16.2916C13.3479 16.2949 14.2684 15.9514 14.9854 15.3254C15.7024 14.6993 16.1668 13.8335 16.2919 12.8898C16.3 12.8139 16.2834 12.7373 16.2444 12.6715C16.2055 12.6058 16.1464 12.5544 16.0758 12.525H16.0785Z" fill="black"/>
</svg>
      </a>
      <a onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}}    href="mailto:info@creedz.net" className="media__frame">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
  <path d="M1.616 14C1.15533 14 0.771 13.846 0.463 13.538C0.155 13.23 0.000666667 12.8453 0 12.384V1.616C0 1.15533 0.154333 0.771 0.463 0.463C0.771667 0.155 1.15567 0.000666667 1.615 0H16.385C16.845 0 17.229 0.154333 17.537 0.463C17.845 0.771667 17.9993 1.156 18 1.616V12.385C18 12.845 17.8457 13.2293 17.537 13.538C17.2283 13.8467 16.8443 14.0007 16.385 14H1.616ZM9 7.116L1 1.885V12.385C1 12.5643 1.05767 12.7117 1.173 12.827C1.28833 12.9423 1.436 13 1.616 13H16.385C16.5643 13 16.7117 12.9423 16.827 12.827C16.9423 12.7117 17 12.564 17 12.384V1.884L9 7.116ZM9 6L16.692 1H1.308L9 6ZM1 1.885V1V12.385C1 12.5643 1.05767 12.7117 1.173 12.827C1.28833 12.9423 1.436 13 1.616 13H1V1.885Z" fill="#FDFDFB"/>
</svg>
      </a>
    </div>
  )
}