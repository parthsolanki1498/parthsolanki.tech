import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import styles from './page.module.scss';
import dynamic from "next/dynamic";
import Experience from '@/components/experience';
import SmoothScroll from "@/components/sub/SmoothScroll";


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
        {/* <Encryption /> */}
        {/* <SmoothScroll> */}
        <main className={styles.main}>
        {/* <Experience/> */}
        <Earth />
        <Experience />
        {/* <ExperienceList /> */}
        </main>
        {/* </SmoothScroll> */}
        <Projects />
      </div>
      
    </main>
  )  
}
