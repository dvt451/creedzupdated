import Header from '@/widgets/header/Header'
import Index from './index'
import PreloaderScaling from '@/features/PreloadScaling/PreloaderScaling'
import Footer from '@/widgets/footer/Footer'
export default function bookacall() {
  return (
    <div className='wrapper bookacall-wrapper'>
      <PreloaderScaling />
      <Header />
       <main className="bookacall">
         <Index />
       </main>
       <Footer />
    </div>
  )
}
