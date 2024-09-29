'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Universe_2024() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">

          {/* change svg to ur logo */}
          <svg viewBox="0 0 16 16" className="w-8 h-8" fill="currentColor">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>

          <span className="font-bold text-xl">Stem For Tomorrow</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-600">About</a>
          <a href="#" className="hover:text-gray-600">Vision & Mission</a>
          <a href="#" className="hover:text-gray-600">Events</a>
          <a href="#" className="hover:text-gray-600">Contact Us</a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Vision & Mission</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Events</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact Us</a>
        </div>
      )}

      <main className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-gray-200 rounded-full text-sm font-semibold">
          10 YEARS
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
        Stem For Tomorrow
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          October 29-30 • San Francisco, CA • The world's fair of software
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Get tickets →
          </button>
          <button className="bg-green-100 text-black px-6 py-3 rounded-md hover:bg-green-200 transition-colors">
            View all sessions →
          </button>
        </div>
      </main>

    </div>
  )
}