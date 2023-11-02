import "../styles/globals.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import {TrackingProvider} from "../Conetxt/Tracking"
export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
    <NavBar />
  <Component {...pageProps} />;
  <Footer />
  </TrackingProvider>
    
  </>
  )
}
