"use client"

import { ChevronsRight } from 'lucide-react'
import React from 'react'
import TradingWidget from './TradingWidget'

const MainContent = () => {
  return (
    <div className="bg-[#eff2f5] h-screen px-8 py-6">
        <div className="flex flex-row gap-x-2 mb-7">
          <p className="font-light text-slate-700">Cryptocurrencies</p>
          <ChevronsRight className="font-light text-slate-700"/>
          <p className="font-semibold">Bitcoin</p>
        </div>
        <TradingWidget />
      </div>
  )
}

export default MainContent