import React from 'react';
import image from "../Image/header1.png";


export default function Home(){
  return(
    <main>
      <img src={image} alt="header1" className="absolute object-cover w-full h-full "/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-12">
        <h1 className="text-6xl text-green-800 font-bold cursive leading-none lg:leading-snug home-name">Hello.I'm Fahadul Islam</h1>
      </section>
    </main>
  )
};