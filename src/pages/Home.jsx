import { Hero, NavBar, About, Reviews, Footer, Contact, ContactDetails } from "../components";

export default function Home() {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <About />
      <Reviews />
      <ContactDetails />
      <Contact />
      <Footer />
    </div>
  )
}


