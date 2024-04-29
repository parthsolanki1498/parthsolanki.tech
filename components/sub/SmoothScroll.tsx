'use client';
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function smoothScroll({ children }: { children: React.ReactNode }) {

    useEffect( () => {
        window.scrollTo(0,20);
        
        const lenis = new Lenis()
        
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return children
}