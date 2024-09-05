import dynamic from 'next/dynamic';

const CustomScrollStyles = dynamic(() => import('@/features/CustomScrollStyles'));
const PreloaderNumbers = dynamic(() => import('@/features/PreloaderNumbers/PreloaderNumbers'));
const Preloader = dynamic(() => import('@/features/Preloader/Page'));
const Different = dynamic(() => import('@/pages/home/Different'));
const Head = dynamic(() => import('@/pages/home/Head'));
const Letstalk = dynamic(() => import('@/pages/home/Letstalk/Letstalk'));
const Portfolio = dynamic(() => import('@/pages/home/Portfolio/Portfolio'));
const Pricing = dynamic(() => import('@/pages/home/Pricing'));
const Services = dynamic(() => import('@/pages/home/Services'));
const Steps = dynamic(() => import('@/pages/home/Steps'));
const TopButton = dynamic(() => import('@/widgets/buttons/TopButton'));
const Footer = dynamic(() => import('@/widgets/footer/Footer'));
const Header = dynamic(() => import('@/widgets/header/Header'));

export default function Home() {
   const page = 'creedz-html'
  return (
       <div className="wrapper home">
         <CustomScrollStyles className={page}/>
         {/*<PreloaderNumbers />*/}
         <Preloader />
         <TopButton />
         <Header />
          <main>
            <Head />
            <Steps />
            <Services />
            <Portfolio />
            <Different />
            <Pricing />
            <Letstalk />
          </main>
          <Footer />
       </div>
  );
}
