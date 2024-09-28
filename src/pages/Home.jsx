import { Hero, NavBar, About, Reviews } from "../components";

export default function Home() {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <About />
      <Reviews />
    </div>
  )
}


