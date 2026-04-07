import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GalleryButton from '@/components/project/GalleryButton';
import { getProjectBySlug, forSaleProjects, projects, contactInfo } from '@/data/projects';

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
    title: `${project.fullName} | Atılım Mühendislik`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const otherProjects = forSaleProjects.filter((p) => p.slug !== project.slug);

  const whatsappMsg = encodeURIComponent(
    `Merhaba, "${project.fullName}" projesi hakkında bilgi almak istiyorum.`,
  );

  const img1 = project.gallery[0] ?? project.coverImage;
  const img2 = project.gallery[1] ?? project.coverImage;
  const img3 = project.gallery[2] ?? project.gallery[0] ?? project.coverImage;
  const img4 = project.gallery[3] ?? project.gallery[2] ?? project.coverImage;

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[70vh] min-h-[440px] bg-black">
        <Image
          src={project.coverImage}
          alt={project.fullName}
          fill
          className="object-cover opacity-90"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />

        <div className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white mb-3">
            {project.fullName}
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-8 py-10">
        <div className="max-w-5xl mx-auto">

          {/* Two-column image layout */}
          <div className="grid md:grid-cols-[55%_45%] gap-4 mb-14">

            {/* Left column: 1 large image + 2 smaller images + buttons */}
            <div className="flex flex-col gap-3">
              {/* Large top image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={img1}
                  alt={`${project.name} - 1`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="55vw"
                />
              </div>

              {/* Two smaller images */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <Image
                    src={img2}
                    alt={`${project.name} - 2`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="27vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <Image
                    src={img3}
                    alt={`${project.name} - 3`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="27vw"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-black text-white text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors"
                >
                  Konumu Gör
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-black text-black text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
                >
                  Bilgi Al
                </a>
              </div>
            </div>

            {/* Right column: large portrait image + gallery section */}
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                <Image
                  src={img4}
                  alt={`${project.name} - 4`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="45vw"
                />
              </div>

              <div>
                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                  Galeri
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.aboutProject}
                </p>
                <GalleryButton images={project.gallery} />
              </div>
            </div>
          </div>

          {/* ── Diğer Projelerimiz ───────────────────────────────────── */}
          {otherProjects.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-8">
                Diğer Projelerimiz
              </h2>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {otherProjects.map((other) => (
                  <Link key={other.slug} href={`/projects/${other.slug}`}>
                    <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer bg-gray-200">
                      <Image
                        src={other.coverImage}
                        alt={other.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Project name — bottom left */}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white text-sm md:text-base font-semibold tracking-wider">
                          {other.name}
                        </span>
                      </div>

                      {/* Arrow button — bottom center */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <div className="w-11 h-11 bg-black flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2 1L10 6L2 11V1Z"
                              fill="white"
                              className="group-hover:fill-black transition-colors duration-300"
                            />
                          </svg>
                        </div>
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
