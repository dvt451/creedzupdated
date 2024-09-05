'use client'
import { useAppContext } from '@/shared/hooks/ThemeContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderLogo() {
   const location = usePathname()
   const _ = useAppContext()
  return (
   <>
      {location === '/' ? (<button onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} onClick={()=>{
               _.setBurgerState(false)
                const element = document.querySelector('#head');
                  element?.scrollIntoView({
                     behavior: 'smooth'
                  })
           }} className="header__logo">
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" fill="none">
            <path d="M28.8774 13.0585L33.2189 10.5519C33.3255 10.8908 33.3987 11.249 33.3859 11.6124L33.3856 26.497C33.3812 27.7233 32.7332 28.8761 31.6645 29.4931L18.7737 36.9357C17.705 37.5526 16.3826 37.5374 15.3184 36.9281L2.42784 29.486C1.36364 28.8768 0.708523 27.7421 0.712986 26.5158L0.713229 11.6312C0.717692 10.4049 1.36568 9.2521 2.43435 8.63511L15.3252 1.19258C16.3938 0.575586 17.7162 0.590824 18.7804 1.20009L31.671 8.64219C31.9921 8.81278 32.2657 9.05529 32.5059 9.31709L28.1645 11.8236C22.1699 15.2846 14.5073 13.2342 11.0487 7.24369L9.81302 7.9571C11.5375 10.944 11.8889 14.3677 11.0721 17.4647C10.2289 20.5546 8.2271 23.3345 5.23817 25.0601L5.95108 26.295C8.94002 24.5693 12.3484 24.2256 15.4459 25.0404C18.5364 25.8815 21.3257 27.8976 23.0502 30.8845L24.2858 30.1711C22.5613 27.1842 22.2099 23.7605 23.0268 20.6636C23.87 17.5737 25.8885 14.7841 28.8774 13.0585Z" fill="#EC273B"/>
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="102" height="27" viewBox="0 0 102 27" fill="none">
            <path d="M10.0844 26.1869C8.36424 26.1869 6.81434 25.8282 5.41773 25.0938C4.02112 24.3594 2.91405 23.3006 2.11356 21.9172C1.29603 20.5338 0.904297 18.8601 0.904297 16.9302V16.452C0.904297 14.505 1.31306 12.8484 2.11356 11.4821C2.93108 10.1158 4.02112 9.05689 5.41773 8.30543C6.81434 7.57104 8.36424 7.19531 10.0844 7.19531C11.8047 7.19531 13.2694 7.51981 14.4787 8.13464C15.6879 8.76656 16.6587 9.60341 17.4081 10.6452C18.1405 11.687 18.6174 12.8484 18.8388 14.1122L15.211 14.8807C15.0918 14.078 14.8363 13.3437 14.4446 12.6947C14.0529 12.0457 13.5078 11.5162 12.8095 11.1234C12.1112 10.7306 11.2256 10.5427 10.1526 10.5427C9.07957 10.5427 8.17689 10.7818 7.34233 11.2601C6.50777 11.7383 5.84353 12.4214 5.36664 13.3095C4.88974 14.1976 4.63427 15.2736 4.63427 16.5374V16.8619C4.63427 18.1257 4.87271 19.2017 5.36664 20.1068C5.86056 21.012 6.50777 21.6781 7.34233 22.1563C8.17689 22.6174 9.11364 22.8565 10.1526 22.8565C11.7195 22.8565 12.9288 22.4466 13.7463 21.6439C14.5638 20.8241 15.0918 19.7994 15.3132 18.5185L18.941 19.3554C18.6515 20.6021 18.1405 21.7293 17.3911 22.7882C16.6587 23.83 15.6709 24.6669 14.4616 25.2817C13.2524 25.8965 11.7876 26.2039 10.0674 26.2039L10.0844 26.1869Z" fill="#E0E0E2"/>
            <path d="M20.3379 11.4688V25.6783H24.0849V11.4688H20.3379Z" fill="#E0E0E2"/>
            <path d="M24.084 11.4683H30.522V7.71094H24.084V11.4683Z" fill="#E0E0E2"/>
            <path d="M39.0208 26.1869C37.1984 26.1869 35.6144 25.8111 34.2519 25.0426C32.8893 24.274 31.8333 23.1981 31.0669 21.7976C30.3005 20.3972 29.9258 18.7747 29.9258 16.9302V16.4861C29.9258 14.6246 30.3005 12.985 31.0499 11.5845C31.7993 10.1841 32.8553 9.10813 34.2008 8.33959C35.5463 7.57104 37.0962 7.19531 38.8675 7.19531C40.6388 7.19531 42.1035 7.57104 43.398 8.33959C44.6924 9.10813 45.7143 10.167 46.4296 11.5333C47.145 12.8996 47.5197 14.4879 47.5197 16.3154V17.7329H33.7409C33.792 19.3212 34.32 20.568 35.3249 21.5073C36.3297 22.4466 37.5901 22.9077 39.0889 22.9077C40.5025 22.9077 41.5585 22.6003 42.2739 21.9684C42.9892 21.3365 43.5342 20.6021 43.9259 19.7823L47.0087 21.3877C46.6681 22.0709 46.1741 22.7882 45.544 23.5397C44.8968 24.2911 44.0622 24.923 43.0233 25.4354C41.9843 25.9478 40.6558 26.2039 39.0208 26.2039V26.1869ZM33.792 14.8466H43.7216C43.6194 13.4803 43.1425 12.4214 42.2739 11.6529C41.4052 10.8843 40.2641 10.5086 38.8505 10.5086C37.4368 10.5086 36.2957 10.8843 35.41 11.6529C34.5244 12.4214 33.9794 13.4803 33.792 14.8466Z" fill="#E0E0E2"/>
            <path d="M57.2962 26.1869C55.4738 26.1869 53.8898 25.8111 52.5273 25.0426C51.1647 24.274 50.1087 23.1981 49.3423 21.7976C48.5759 20.3972 48.2012 18.7747 48.2012 16.9302V16.4861C48.2012 14.6246 48.5759 12.985 49.3253 11.5845C50.0747 10.1841 51.1306 9.10813 52.4762 8.33959C53.8217 7.57104 55.3716 7.19531 57.1429 7.19531C58.9142 7.19531 60.3789 7.57104 61.6733 8.33959C62.9678 9.10813 63.9897 10.167 64.705 11.5333C65.4203 12.8996 65.795 14.4879 65.795 16.3154V17.7329H52.0163C52.0674 19.3212 52.5954 20.568 53.6003 21.5073C54.6051 22.4466 55.8655 22.9077 57.3643 22.9077C58.7779 22.9077 59.8339 22.6003 60.5492 21.9684C61.2646 21.3365 61.8096 20.6021 62.2013 19.7823L65.2841 21.3877C64.9435 22.0709 64.4495 22.7882 63.8194 23.5397C63.1721 24.2911 62.3376 24.923 61.2986 25.4354C60.2597 25.9478 58.9312 26.2039 57.2962 26.2039V26.1869ZM52.0674 14.8466H61.997C61.8948 13.4803 61.4179 12.4214 60.5492 11.6529C59.6806 10.8843 58.5395 10.5086 57.1258 10.5086C55.7122 10.5086 54.5711 10.8843 53.6854 11.6529C52.7998 12.4214 52.2547 13.4803 52.0674 14.8466Z" fill="#E0E0E2"/>
            <path d="M74.7872 26.1881C73.3055 26.1881 71.9429 25.8295 70.6826 25.0951C69.4222 24.3607 68.4173 23.3189 67.6509 21.9355C66.8845 20.5522 66.5098 18.8955 66.5098 16.9656V16.4191C66.5098 14.5063 66.8845 12.8497 67.6339 11.4663C68.3833 10.0829 69.3881 9.02402 70.6485 8.28963C71.9089 7.55525 73.2884 7.19659 74.7872 7.19659C75.9454 7.19659 76.9332 7.3503 77.7167 7.64064C78.5002 7.93098 79.1474 8.30671 79.6583 8.75076C80.1693 9.1948 80.561 9.67301 80.8165 10.1512H81.3956V0.160156H85.1426V25.6758H81.4637V23.131H80.8846C80.4248 23.9167 79.7265 24.6169 78.7897 25.2488C77.853 25.8807 76.5245 26.1881 74.7702 26.1881H74.7872ZM75.8432 22.909C77.4612 22.909 78.8067 22.3796 79.8627 21.3378C80.9187 20.296 81.4467 18.793 81.4467 16.8632V16.5387C81.4467 14.6258 80.9187 13.14 79.8798 12.0982C78.8408 11.0564 77.4953 10.5269 75.8432 10.5269C74.1911 10.5269 72.9137 11.0564 71.8578 12.0982C70.8018 13.14 70.2738 14.6258 70.2738 16.5387V16.8632C70.2738 18.8101 70.8018 20.296 71.8578 21.3378C72.9137 22.3796 74.2422 22.909 75.8432 22.909Z" fill="#E0E0E2"/>
            <path d="M87 25.6792V21.085L97.5768 11.3843V10.872H87.3577V7.69531H101.647V12.3236L91.0365 22.0244V22.5026H101.937V25.6792H87Z" fill="#E0E0E2"/>
         </svg>
      </button>) : (<Link onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} href="/" onClick={()=>{
         _.setBurgerState(false)
         _.setColorState(0)
         _.setHoverAnyLink(false)
         }} className="header__logo">
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" fill="none">
            <path d="M28.8774 13.0585L33.2189 10.5519C33.3255 10.8908 33.3987 11.249 33.3859 11.6124L33.3856 26.497C33.3812 27.7233 32.7332 28.8761 31.6645 29.4931L18.7737 36.9357C17.705 37.5526 16.3826 37.5374 15.3184 36.9281L2.42784 29.486C1.36364 28.8768 0.708523 27.7421 0.712986 26.5158L0.713229 11.6312C0.717692 10.4049 1.36568 9.2521 2.43435 8.63511L15.3252 1.19258C16.3938 0.575586 17.7162 0.590824 18.7804 1.20009L31.671 8.64219C31.9921 8.81278 32.2657 9.05529 32.5059 9.31709L28.1645 11.8236C22.1699 15.2846 14.5073 13.2342 11.0487 7.24369L9.81302 7.9571C11.5375 10.944 11.8889 14.3677 11.0721 17.4647C10.2289 20.5546 8.2271 23.3345 5.23817 25.0601L5.95108 26.295C8.94002 24.5693 12.3484 24.2256 15.4459 25.0404C18.5364 25.8815 21.3257 27.8976 23.0502 30.8845L24.2858 30.1711C22.5613 27.1842 22.2099 23.7605 23.0268 20.6636C23.87 17.5737 25.8885 14.7841 28.8774 13.0585Z" fill="#EC273B"/>
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="102" height="27" viewBox="0 0 102 27" fill="none">
            <path d="M10.0844 26.1869C8.36424 26.1869 6.81434 25.8282 5.41773 25.0938C4.02112 24.3594 2.91405 23.3006 2.11356 21.9172C1.29603 20.5338 0.904297 18.8601 0.904297 16.9302V16.452C0.904297 14.505 1.31306 12.8484 2.11356 11.4821C2.93108 10.1158 4.02112 9.05689 5.41773 8.30543C6.81434 7.57104 8.36424 7.19531 10.0844 7.19531C11.8047 7.19531 13.2694 7.51981 14.4787 8.13464C15.6879 8.76656 16.6587 9.60341 17.4081 10.6452C18.1405 11.687 18.6174 12.8484 18.8388 14.1122L15.211 14.8807C15.0918 14.078 14.8363 13.3437 14.4446 12.6947C14.0529 12.0457 13.5078 11.5162 12.8095 11.1234C12.1112 10.7306 11.2256 10.5427 10.1526 10.5427C9.07957 10.5427 8.17689 10.7818 7.34233 11.2601C6.50777 11.7383 5.84353 12.4214 5.36664 13.3095C4.88974 14.1976 4.63427 15.2736 4.63427 16.5374V16.8619C4.63427 18.1257 4.87271 19.2017 5.36664 20.1068C5.86056 21.012 6.50777 21.6781 7.34233 22.1563C8.17689 22.6174 9.11364 22.8565 10.1526 22.8565C11.7195 22.8565 12.9288 22.4466 13.7463 21.6439C14.5638 20.8241 15.0918 19.7994 15.3132 18.5185L18.941 19.3554C18.6515 20.6021 18.1405 21.7293 17.3911 22.7882C16.6587 23.83 15.6709 24.6669 14.4616 25.2817C13.2524 25.8965 11.7876 26.2039 10.0674 26.2039L10.0844 26.1869Z" fill="#E0E0E2"/>
            <path d="M20.3379 11.4688V25.6783H24.0849V11.4688H20.3379Z" fill="#E0E0E2"/>
            <path d="M24.084 11.4683H30.522V7.71094H24.084V11.4683Z" fill="#E0E0E2"/>
            <path d="M39.0208 26.1869C37.1984 26.1869 35.6144 25.8111 34.2519 25.0426C32.8893 24.274 31.8333 23.1981 31.0669 21.7976C30.3005 20.3972 29.9258 18.7747 29.9258 16.9302V16.4861C29.9258 14.6246 30.3005 12.985 31.0499 11.5845C31.7993 10.1841 32.8553 9.10813 34.2008 8.33959C35.5463 7.57104 37.0962 7.19531 38.8675 7.19531C40.6388 7.19531 42.1035 7.57104 43.398 8.33959C44.6924 9.10813 45.7143 10.167 46.4296 11.5333C47.145 12.8996 47.5197 14.4879 47.5197 16.3154V17.7329H33.7409C33.792 19.3212 34.32 20.568 35.3249 21.5073C36.3297 22.4466 37.5901 22.9077 39.0889 22.9077C40.5025 22.9077 41.5585 22.6003 42.2739 21.9684C42.9892 21.3365 43.5342 20.6021 43.9259 19.7823L47.0087 21.3877C46.6681 22.0709 46.1741 22.7882 45.544 23.5397C44.8968 24.2911 44.0622 24.923 43.0233 25.4354C41.9843 25.9478 40.6558 26.2039 39.0208 26.2039V26.1869ZM33.792 14.8466H43.7216C43.6194 13.4803 43.1425 12.4214 42.2739 11.6529C41.4052 10.8843 40.2641 10.5086 38.8505 10.5086C37.4368 10.5086 36.2957 10.8843 35.41 11.6529C34.5244 12.4214 33.9794 13.4803 33.792 14.8466Z" fill="#E0E0E2"/>
            <path d="M57.2962 26.1869C55.4738 26.1869 53.8898 25.8111 52.5273 25.0426C51.1647 24.274 50.1087 23.1981 49.3423 21.7976C48.5759 20.3972 48.2012 18.7747 48.2012 16.9302V16.4861C48.2012 14.6246 48.5759 12.985 49.3253 11.5845C50.0747 10.1841 51.1306 9.10813 52.4762 8.33959C53.8217 7.57104 55.3716 7.19531 57.1429 7.19531C58.9142 7.19531 60.3789 7.57104 61.6733 8.33959C62.9678 9.10813 63.9897 10.167 64.705 11.5333C65.4203 12.8996 65.795 14.4879 65.795 16.3154V17.7329H52.0163C52.0674 19.3212 52.5954 20.568 53.6003 21.5073C54.6051 22.4466 55.8655 22.9077 57.3643 22.9077C58.7779 22.9077 59.8339 22.6003 60.5492 21.9684C61.2646 21.3365 61.8096 20.6021 62.2013 19.7823L65.2841 21.3877C64.9435 22.0709 64.4495 22.7882 63.8194 23.5397C63.1721 24.2911 62.3376 24.923 61.2986 25.4354C60.2597 25.9478 58.9312 26.2039 57.2962 26.2039V26.1869ZM52.0674 14.8466H61.997C61.8948 13.4803 61.4179 12.4214 60.5492 11.6529C59.6806 10.8843 58.5395 10.5086 57.1258 10.5086C55.7122 10.5086 54.5711 10.8843 53.6854 11.6529C52.7998 12.4214 52.2547 13.4803 52.0674 14.8466Z" fill="#E0E0E2"/>
            <path d="M74.7872 26.1881C73.3055 26.1881 71.9429 25.8295 70.6826 25.0951C69.4222 24.3607 68.4173 23.3189 67.6509 21.9355C66.8845 20.5522 66.5098 18.8955 66.5098 16.9656V16.4191C66.5098 14.5063 66.8845 12.8497 67.6339 11.4663C68.3833 10.0829 69.3881 9.02402 70.6485 8.28963C71.9089 7.55525 73.2884 7.19659 74.7872 7.19659C75.9454 7.19659 76.9332 7.3503 77.7167 7.64064C78.5002 7.93098 79.1474 8.30671 79.6583 8.75076C80.1693 9.1948 80.561 9.67301 80.8165 10.1512H81.3956V0.160156H85.1426V25.6758H81.4637V23.131H80.8846C80.4248 23.9167 79.7265 24.6169 78.7897 25.2488C77.853 25.8807 76.5245 26.1881 74.7702 26.1881H74.7872ZM75.8432 22.909C77.4612 22.909 78.8067 22.3796 79.8627 21.3378C80.9187 20.296 81.4467 18.793 81.4467 16.8632V16.5387C81.4467 14.6258 80.9187 13.14 79.8798 12.0982C78.8408 11.0564 77.4953 10.5269 75.8432 10.5269C74.1911 10.5269 72.9137 11.0564 71.8578 12.0982C70.8018 13.14 70.2738 14.6258 70.2738 16.5387V16.8632C70.2738 18.8101 70.8018 20.296 71.8578 21.3378C72.9137 22.3796 74.2422 22.909 75.8432 22.909Z" fill="#E0E0E2"/>
            <path d="M87 25.6792V21.085L97.5768 11.3843V10.872H87.3577V7.69531H101.647V12.3236L91.0365 22.0244V22.5026H101.937V25.6792H87Z" fill="#E0E0E2"/>
         </svg>
      </Link>
      )}
   </>
  )
}
