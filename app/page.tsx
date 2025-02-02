import Content from '@/components/Content';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import MoreContent from '@/components/MoreContent';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="">
   
      <Hero />
      <Content/>
      <Marquee/>
      <MoreContent/>
    </div>
  );
}
