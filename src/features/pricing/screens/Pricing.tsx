"use client";
import React, { Dispatch, useState } from 'react'
import Hero from '../components/Hero'
import WebPackages from '../components/WebPackages'
import MobilePackages from '../components/MobilePackages'
import AddOns from '../components/AddOns'
import FAQ from '../components/FAQ'
import GetInTouch from '@/components/something-new';

type PricingProps = {
  setSelectedPackage:Dispatch<React.SetStateAction<string>>
  setEnquiryFormShown:Dispatch<React.SetStateAction<boolean>>
}
const Pricing:React.FC<PricingProps> = ({setSelectedPackage,setEnquiryFormShown}) => {
  const [currency,setCurrency]=useState<'INR'|'USD'>('INR')
  return (
    <main>
    <Hero currency={currency} setCurrency={setCurrency}/>
    <WebPackages setEnquiryFormShown={setEnquiryFormShown} currency={currency} setSelectedPackage={setSelectedPackage}/>
    <MobilePackages setEnquiryFormShown={setEnquiryFormShown} currency={currency} setSelectedPackage={setSelectedPackage}/>
    <AddOns currency={currency}/>
    <FAQ/>
    <GetInTouch/>
    </main>
  )
}

export default Pricing