import CustomScrollStyles from "@/features/CustomScrollStyles";
import PreloaderNumbers from "@/features/PreloaderNumbers";
import Different from "@/pages/home/Different";
import Head from "@/pages/home/Head";
import Letstalk from "@/pages/home/Letstalk";
import Portfolio from "@/pages/home/Portfolio";
import Pricing from "@/pages/home/Pricing";
import Services from "@/pages/home/Services";
import Steps from "@/pages/home/Steps";
import TopButton from "@/widgets/buttons/TopButton";
import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";

export default function Home() {
   const page = 'creedz-html'

  return (
       <div className="wrapper home">
         <CustomScrollStyles className={page}/>
         <PreloaderNumbers />
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