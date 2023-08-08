
import Nav2 from '../components/Nav2'
import Footer from '../components/Footer'

const Main = ({children}) => {
  return (
        <>
            <Nav2/>
                {children}
            <Footer/> 
        </>
  )
}

export default Main