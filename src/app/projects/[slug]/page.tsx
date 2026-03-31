import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectGallery from '@/components/project/ProjectGallery';
import { getProjectBySlug, projects, contactInfo } from '@/data/projects';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Proje Bulunamadı' };
  return {
    title: `${project.name} | Atılım Mühendislik`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const whatsappMsg = encodeURIComponent(
    `Merhaba, "${project.name}" projesi hakkında bilgi almak istiyorum.`,
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <div className="pt-[100px] px-4 md:px-6 mb-12">
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>

      {/* White content section */}
      <section className="bg-white text-black px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Title + actions */}
          <div className="mb-8">
            <p className="text-gray-400 text-sm mb-1">{project.subtitle}</p>
            <h1 className="text-3xl md:text-4xl font-light mb-2">{project.name}</h1>
            <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-black text-white text-sm hover:bg-gray-800 transition rounded-sm"
              >
                Konum
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-black text-black text-sm hover:bg-gray-100 transition rounded-sm"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`}
                className="px-6 py-2.5 border border-black text-black text-sm hover:bg-gray-100 transition rounded-sm"
              >
                Ara
              </a>
            </div>
          </div>

          {/* About */}
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4">Proje Hakkında</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">{project.aboutProject}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Konum</p>
                <p className="font-medium text-sm">{project.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Alan</p>
                <p className="font-medium text-sm">{project.area}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Yıl</p>
                <p className="font-medium text-sm">{project.year}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Durum</p>
                <p className="font-medium text-sm">{project.statusLabel}</p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-6">Görseller</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.gallery.map((img, i) => (
                <ProjectGallery key={i} images={project.gallery} startIndex={i} thumb={img} />
              ))}
            </div>
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-light mb-6">Diğer Projeler</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((other) => (
                  <Link key={other.slug} href={`/projects/${other.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                        <Image
                          src={other.coverImage}
                          alt={other.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <h3 className="text-xl font-light mb-1">{other.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span>{other.location}</span>
                        <span>•</span>
                        <span>{other.statusLabel}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
