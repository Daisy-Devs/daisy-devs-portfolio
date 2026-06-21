"use client";
import React, { useState } from 'react'
import Hero from '../components/Hero'
import WebPackages from '../components/WebPackages'
import MobilePackages from '../components/MobilePackages'
import AddOns from '../components/AddOns'
import FAQ from '../components/FAQ'

const Pricing = () => {
  const [currency,setCurrency]=useState<'INR'|'USD'>('INR')
  return (
    <main>
    <Hero currency={currency} setCurrency={setCurrency}/>
    <WebPackages currency={currency}/>
    <MobilePackages currency={currency}/>
    <AddOns currency={currency}/>
    <FAQ/>
    </main>
  )
}

export default Pricing