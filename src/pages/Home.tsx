
import Hero from '@/components/home/Hero';
import Intro from '@/components/home/Intro';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
