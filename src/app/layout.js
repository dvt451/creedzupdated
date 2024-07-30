// import { Inter, Montserrat } from "next/font/google";
import { AppWrapper } from '@/shared/hooks/ThemeContext';
import '../shared/scss/style.scss'
import Smoothscroll from '@/features/Smoothscroll';
import Customcursor from '@/features/Cursor/Customcursir';
import Crystalmouse from '@/features/Cursor/Crystalmouse';

export const metadata = {
  title: "Creedz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <AppWrapper>
            <Smoothscroll>
               <Customcursor />
               <Crystalmouse />
               {children}
            </Smoothscroll>
            <spline-viewer url="https://prod.spline.design/YOk1c8ytYLg1WQ-W/scene.splinecode"></spline-viewer>
         </AppWrapper>
      </body>
    </html>
  );
}
