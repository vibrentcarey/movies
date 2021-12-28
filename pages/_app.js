import { Provider } from 'react-redux'
import Header from '../components/header/Header'
import store from '../store/store'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <> <Provider store={store}><Header /> <Component {...pageProps} /></Provider></>
}

export default MyApp
