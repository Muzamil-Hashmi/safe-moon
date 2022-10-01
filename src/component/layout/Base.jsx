import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Base(prop) {
    return (
      
        <>
        <Header/>
        {prop.children}
        
        <Footer />
        </>
      
    )
  }
