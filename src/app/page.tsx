// pages/index.tsx
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer/>
     
    </div>
  );
};

export default Home;