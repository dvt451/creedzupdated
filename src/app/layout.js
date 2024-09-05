import dynamic from 'next/dynamic';

const Smoothscroll = dynamic(() => import('@/features/Smoothscroll'));
const Customcursor = dynamic(() => import('@/features/Cursor/Customcursir'));
const Crystalmouse = dynamic(() => import('@/features/Cursor/Crystalmouse'));
const Progressbar = dynamic(() => import('@/features/Progressbar'));

import { AppWrapper } from '@/shared/hooks/ThemeContext';
import '../shared/scss/style.scss';
import Script from 'next/script';

export const metadata = {
  title: "Creedz© - unlimited design & development",
  openGraph: {
   type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <Smoothscroll>
            <Customcursor />
            {/* <Crystalmouse /> */}
            <Progressbar />
            {children}
          </Smoothscroll>
          <spline-viewer url="https://prod.spline.design/YOk1c8ytYLg1WQ-W/scene.splinecode"></spline-viewer>
        </AppWrapper>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98006302, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98006302"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {/* End Yandex.Metrika counter */}
      </body>
    </html>
  );
}
