import React from 'react'
import Hero from '../component/element/Hero'
import Glob from '../component/element/Glob'
import Protocol from '../component/element/Protocol'
import Automatic from '../component/element/Automatic'
import Exchange from '../component/element/Exchange'
import Barline from '../component/element/barline'

export default function Home() {
  return (
    <div>
      <Hero /> 
      <Glob />
      <Protocol/>
      <Automatic />
    <Exchange/>
    <Barline/>
    
    </div>
  )
}
