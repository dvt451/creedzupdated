'use client'
import Lottie from "lottie-react";
import step1 from '../json/step1.json'
import step2 from '../json/step2.json'
import step3 from '../json/step3.json'
import onlyptichka from '../json/onlyptichka.json'

export function Step1() {
  return (
   <Lottie animationData={step1} />
  )
}
export function Step2() {
   return (
      <Lottie animationData={step2} />
   )
 }
 
export function Step3() {
   return (
      <Lottie animationData={step3} />
   )
 }
 export function Onlyptichka() {
   return (
    <Lottie animationData={onlyptichka} />
   )
 }