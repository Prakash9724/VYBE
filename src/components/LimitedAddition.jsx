import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Card from './Card'

const LimitedAddition = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 13,
    minutes: 22
  })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  // Limited Edition products
  const limitedProducts = [
    {
      id: 1,
      name: "Chroma Surge Jacket",
      rating: 4.5,
      price: 110,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Vivid Blueprint Shirt",
      rating: 4.2,
      price: 52,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Heritage Wave Hat",
      rating: 4.8,
      price: 38,
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Graffiti Canvas Cargo Pants",
      rating: 3.9,
      price: 95,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&crop=face"
    },
    {
        id: 1,
        name: "Chroma Surge Jacket",
        rating: 4.5,
        price: 110,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=face"
      },
      {
        id: 2,
        name: "Vivid Blueprint Shirt",
        rating: 4.2,
        price: 52,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
      },
      {
        id: 3,
        name: "Heritage Wave Hat",
        rating: 4.8,
        price: 38,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop&crop=face"
      },
      {
        id: 4,
        name: "Graffiti Canvas Cargo Pants",
        rating: 3.9,
        price: 95,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&crop=face"
      },
      
  ]

  const itemsPerPage = 4
  const totalPages = Math.ceil(limitedProducts.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getCurrentProducts = () => {
    const startIndex = currentIndex * itemsPerPage
    return limitedProducts.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 lg:mb-12 gap-6 lg:gap-0">
        {/* Timer Section */}
        <div className="bg-pink-100 rounded-2xl p-4 md:p-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
            <span className="text-black font-medium text-sm md:text-base">New drop in</span>
          </div>
          <div className="flex gap-2">
            <div className="bg-pink-200 rounded-lg px-3 py-2">
              <span className="text-black font-bold text-sm md:text-base">{timeLeft.days.toString().padStart(2, '0')}d</span>
            </div>
            <div className="bg-pink-200 rounded-lg px-3 py-2">
              <span className="text-black font-bold text-sm md:text-base">{timeLeft.hours.toString().padStart(2, '0')}h</span>
            </div>
            <div className="bg-pink-200 rounded-lg px-3 py-2">
              <span className="text-black font-bold text-sm md:text-base">{timeLeft.minutes.toString().padStart(2, '0')}m</span>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center lg:text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 relative">
            Limited Edition
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-pink-300 rounded-full"></div>
          </h2>
          <p className="text-black font-[av] text-sm md:text-base lg:text-lg">Once it's gone, it's gone.</p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Products Section - 4 Cards */}
      <div className="relative overflow-visible overflow-x-hidden py-8">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0">
              <div className="flex gap-4 md:gap-6 justify-center px-4">
                {limitedProducts.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((product) => (
                  <Card 
                    key={product.id}
                    name={product.name}
                    rating={product.rating}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-red-500' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default LimitedAddition
