'use client';
import { usePathname } from "next/navigation";
import {useEffect } from 'react'

import './globals.css'

export default function Home() {
  const pathname = usePathname();
  useEffect(()=>{
    if (pathname == "/") {
      window.location.href = "/feed";
    }

  },[])



  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>   
    </div>
      );
}
