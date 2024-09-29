import { Hero, NavBar, About, Reviews, Footer, Contact, ContactDetails, Work } from "../components";

export default function Home() {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <About />
      <Reviews />
      <Work />
      <ContactDetails />
      <Contact />
      <Footer />
    </div>
  )
}


