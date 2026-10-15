import {
  ContactSection,
  Footer,
  Hero,
  IdentityAndPillars,
  Navbar,
  Portfolio,
  Services,
} from './components/PortfolioSections.jsx'
import './site.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IdentityAndPillars />
        <Services />
        <Portfolio />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
