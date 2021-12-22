import '../styles/globals.css'

import Head from 'next/head'
import Header from '../components/partials/Header'

const App = ({ Component, pageProps }) => {
 
  return (
    <>
      <Head>
        <title>Conexa Challenge | Mati Rocha</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <meta content="matur" name="author" />
        <meta content="Matías Rocha" name="copyright" />
      </Head>

      <Header />

      <main className="py-2 overflow-x-hidden">

        <Component {...pageProps} />

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://maturocha.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Mati Rocha 🇦🇷
        </a>
      </footer>
  
      
      
    </>
  );
};

export default App;
