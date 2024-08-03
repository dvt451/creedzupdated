import Header from '@/widgets/header/Header'
import Index from './Index'
import PreloaderScaling from '@/features/PreloaderScaling'
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