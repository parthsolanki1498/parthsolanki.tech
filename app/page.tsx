import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import styles from './page.module.scss';
import dynamic from "next/dynamic";
import Experience from '@/components/experience';
import SmoothScroll from "@/components/sub/SmoothScroll";
import CompetitiveProgramming from "@/components/main/CompetitiveProgramming";


const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img src="/placeholder.png"></img>
})

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <main className={styles.main}>
        <Earth />
        <Experience />
        </main>
        {/* <CompetitiveProgramming /> */}
        <Projects />
      </div>
      
    </main>
  )  
}
