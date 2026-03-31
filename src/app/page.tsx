import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/home/HeroSlider';
import ProjectsForSale from '@/components/home/ProjectsForSale';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      {/* Header is absolute so we need top padding for hero */}
      <div className="pt-[100px]">
        <HeroSlider />
      </div>
      <ProjectsForSale />
      <Footer />
    </main>
  );
}
