import Content from '@/components/Content';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import MoreContent from '@/components/MoreContent';
  
export default function Home() {
  return (
    <div className="mb-20">
      <Hero />
      <Content />
      <Marquee />
      <MoreContent />
    </div>
  );
}
