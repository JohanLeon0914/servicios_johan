import Image from 'next/image'
import Banner from './components/Banner'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className='bg-black'>
      <Banner/>
      <Skills/>
    </div>
  )
}
