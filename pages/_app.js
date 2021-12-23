import Header from '../components/header/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <> <Header /> <Component {...pageProps} /></>
}

export default MyApp
