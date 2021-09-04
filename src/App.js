import { useEffect, useRef } from 'react'
import { GlobalStyle } from './globalStyle';
import { Navbar, Home, About, Work, Contact } from './components/index';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    let observer
    if (
      homeRef.current &&
      aboutRef.current &&
      workRef.current &&
      contactRef.current
    ) {
      const options = { threshold: 0.3 }
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const navElement = entry.target.id;
          if (entry.isIntersecting) {
            console.log(navElement)
          }
        })

      }, options)
      observer.observe(homeRef.current)
      observer.observe(aboutRef.current)
      observer.observe(workRef.current)
      observer.observe(contactRef.current)
    }
    return () => observer.disconnect()
  }, [homeRef, aboutRef, workRef, contactRef])

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home forwardedRef={homeRef} />
      <About forwardedRef={aboutRef} />
      <Work forwardedRef={workRef} />
      <Contact forwardedRef={contactRef} />
    </>
  );
}

export default App;
