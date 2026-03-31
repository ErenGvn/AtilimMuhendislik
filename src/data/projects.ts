// ─────────────────────────────────────────────────────────────────────────────
// DATA SCHEMA — Edit this file to add/update/remove projects.
// The UI reads purely from this file; no component logic needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = 'for-sale' | 'completed' | 'in-progress' | 'planning';

export interface ProjectFeature {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  aboutProject: string;
  status: ProjectStatus;
  statusLabel: string;
  location: string;
  area: string;
  year: string;
  mapsUrl: string;
  coverImage: string;
  gallery: string[];
  features: ProjectFeature[];
  priceLabel: string;
  completedYear?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// ALL PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: 'virga-garten',
    name: 'Virga Garten',
    subtitle: 'Digital Twin',
    description:
      'Virga Garten, İstanbul\'un modern yaşam standartlarını yeniden tanımlayan çağdaş bir konut projesidir. Sürdürülebilir mimari yaklaşımı ve yenilikçi tasarımıyla öne çıkar.',
    aboutProject:
      'Virga Garten projesi, modern şehir yaşamının tüm konforunu sunarken, doğayla iç içe bir yaşam alanı oluşturmayı amaçlamaktadır. Proje kapsamında 150 daire, sosyal alanlar ve yeşil bahçeler yer almaktadır. Enerji verimliliği odaklı tasarımı ile LEED sertifikası hedeflemektedir.',
    status: 'in-progress',
    statusLabel: 'Devam Ediyor',
    location: 'İstanbul',
    area: '25.000 m²',
    year: '2024–2026',
    mapsUrl: 'https://maps.google.com/?q=İstanbul,Türkiye',
    coverImage:
      'https://images.unsplash.com/photo-1664813954641-1ffcb7b55fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjgxMzE0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0ODg0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODU2MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1724644327127-25f1a3fae691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMGRldGFpbHxlbnwxfHx8fDE3Njg1NjIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730826933-54287f79e1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2JieSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODU2MjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { label: 'Daire Sayısı', value: '150 Daire' },
      { label: 'Alan', value: '25.000 m²' },
      { label: 'Yıl', value: '2024–2026' },
      { label: 'Sertifika', value: 'LEED Hedefi' },
    ],
    priceLabel: 'Fiyat için iletişime geçin',
  },
  {
    slug: 'hatton-visalia',
    name: '@hatton Visalia',
    subtitle: 'Digital Twin',
    description:
      '@hatton Visalia, Ankara\'nın prestijli bölgelerinden birinde konumlanan, lüks konut kompleksidir. Modern mimarisi ve geniş yaşam alanlarıyla dikkat çeker.',
    aboutProject:
      '@hatton Visalia projesi, toplam 200 konut biriminden oluşmaktadır. Kompleks içerisinde fitness merkezi, yüzme havuzu, çocuk oyun alanları ve kapalı otopark bulunmaktadır. Akıllı ev sistemleri ile donatılmış daireleri sayesinde konforu en üst seviyeye çıkarmaktadır.',
    status: 'completed',
    statusLabel: 'Tamamlandı',
    location: 'Ankara',
    area: '35.000 m²',
    year: '2022–2024',
    mapsUrl: 'https://maps.google.com/?q=Ankara,Türkiye',
    coverImage:
      'https://images.unsplash.com/photo-1762944082416-bd1b98ccfcb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2ODIyMjQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0ODg0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODU2MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1724644327127-25f1a3fae691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMGRldGFpbHxlbnwxfHx8fDE3Njg1NjIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730826933-54287f79e1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2JieSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODU2MjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { label: 'Daire Sayısı', value: '200 Konut' },
      { label: 'Alan', value: '35.000 m²' },
      { label: 'Yıl', value: '2022–2024' },
      { label: 'Otopark', value: 'Kapalı Otopark' },
    ],
    priceLabel: 'Tamamlanmış Proje',
    completedYear: 2024,
  },
  {
    slug: 'onyx-pectra',
    name: 'ONYX Pectra',
    subtitle: 'Digital Twin',
    description:
      'ONYX Pectra, İzmir\'in yeni simgesi olmaya aday, gökyüzüne uzanan modern bir kule projesidir. Lüks rezidans ve ofis alanlarını bir araya getirmektedir.',
    aboutProject:
      'ONYX Pectra projesi, 30 katlı yapısı ile İzmir siluetine yeni bir soluk getirmektedir. Karma kullanımlı tasarımı sayesinde hem rezidans hem de ofis alanları barındırmaktadır. Panoramik manzara sunan daireleri, yüksek tavanları ve premium malzeme kullanımı ile öne çıkmaktadır.',
    status: 'in-progress',
    statusLabel: 'Devam Ediyor',
    location: 'İzmir',
    area: '45.000 m²',
    year: '2024–2027',
    mapsUrl: 'https://maps.google.com/?q=İzmir,Türkiye',
    coverImage:
      'https://images.unsplash.com/photo-1596458162361-c3177aaa48b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0b3dlciUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODIwMzg5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0ODg0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODU2MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1724644327127-25f1a3fae691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMGRldGFpbHxlbnwxfHx8fDE3Njg1NjIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730826933-54287f79e1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2JieSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODU2MjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { label: 'Kat Sayısı', value: '30 Kat' },
      { label: 'Alan', value: '45.000 m²' },
      { label: 'Yıl', value: '2024–2027' },
      { label: 'Kullanım', value: 'Karma (Rezidans + Ofis)' },
    ],
    priceLabel: 'Fiyat için iletişime geçin',
  },
  {
    slug: 'ruby-smalt',
    name: 'Ruby Smalt',
    subtitle: 'Digital Twin',
    description:
      'Ruby Smalt, Antalya\'da turizm ve konut konseptini birleştiren yenilikçi bir proje. Eşsiz mimari tasarımı ile bölgenin cazibe merkezi olmayı hedefliyor.',
    aboutProject:
      'Ruby Smalt projesi, Antalya\'nın eşsiz doğal güzelliklerinden ilham alan bir tasarıma sahiptir. Otel konseptli rezidans daireleri, plaj kulüpleri ve sosyal alanları ile tatil ve yaşam deneyimini bir araya getirmektedir. Sürdürülebilir turizm anlayışı ile çevreye saygılı bir yaklaşım benimsenmiştir.',
    status: 'planning',
    statusLabel: 'Planlama',
    location: 'Antalya',
    area: '50.000 m²',
    year: '2025–2028',
    mapsUrl: 'https://maps.google.com/?q=Antalya,Türkiye',
    coverImage:
      'https://images.unsplash.com/photo-1636739067155-643a5c678831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwYnVpbGRpbmclMjB3aGl0ZXxlbnwxfHx8fDE3NjgyMjI0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0ODg0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODU2MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1724644327127-25f1a3fae691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMGRldGFpbHxlbnwxfHx8fDE3Njg1NjIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730826933-54287f79e1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2JieSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODU2MjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { label: 'Alan', value: '50.000 m²' },
      { label: 'Yıl', value: '2025–2028' },
      { label: 'Konsept', value: 'Turizm + Konut' },
      { label: 'Çevre', value: 'Sürdürülebilir Tasarım' },
    ],
    priceLabel: 'Fiyat için iletişime geçin',
  },
  {
    slug: 'peryurt-baglica',
    name: 'Peryurt Bağlıca',
    subtitle: 'Digital Twin',
    description:
      'Peryurt Bağlıca, Ankara Bağlıca bölgesinde tamamlanmış prestijli bir konut projesidir. Aile yaşamına uygun geniş daireler ve sosyal alanlar sunmaktadır.',
    aboutProject:
      'Peryurt Bağlıca projesi, aile odaklı yaşam konsepti ile tasarlanmıştır. Geniş yeşil alanlar, çocuk oyun parkları, spor alanları ve sosyal tesisleri ile tam bir yaşam merkezi oluşturmaktadır. 24/7 güvenlik, yer altı otoparkı ve akıllı ev sistemleri projede standart olarak sunulmaktadır.',
    status: 'completed',
    statusLabel: 'Tamamlandı',
    location: 'Ankara',
    area: '30.000 m²',
    year: '2021–2023',
    mapsUrl: 'https://maps.google.com/?q=Bağlıca,Ankara',
    coverImage:
      'https://images.unsplash.com/photo-1760247184915-ee8314f2faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2ODIyMjQ5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0ODg0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODU2MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1724644327127-25f1a3fae691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMGRldGFpbHxlbnwxfHx8fDE3Njg1NjIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730826933-54287f79e1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2JieSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODU2MjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { label: 'Alan', value: '30.000 m²' },
      { label: 'Yıl', value: '2021–2023' },
      { label: 'Güvenlik', value: '24/7 Güvenlik' },
      { label: 'Otopark', value: 'Yer Altı Otoparkı' },
    ],
    priceLabel: 'Tamamlanmış Proje',
    completedYear: 2023,
  },
  {
    slug: 'lagoon',
    name: 'Lagoon',
    subtitle: 'Digital Twin',
    description:
      'Lagoon, İstanbul\'da su temalı mimari konsepti ile öne çıkan modern bir konut projesidir. Doğa ve şehir yaşamını harmanlayan benzersiz bir tasarıma sahiptir.',
    aboutProject:
      'Lagoon projesi, su öğesini merkeze alan peyzaj tasarımı ve mimari anlayışı ile dikkat çekmektedir. Yapay gölet etrafında şekillenen yaşam alanları, sakinlerine huzurlu bir ortam sunmaktadır. Yürüyüş yolları, su sporları alanları ve modern sosyal tesisleri ile eksiksiz bir yaşam deneyimi vaat etmektedir.',
    status: 'in-progress',
    statusLabel: 'Devam Ediyor',
    location: 'İstanbul',
    area: '40.000 m²',
    year: '2023–2026',
    mapsUrl: 'https://maps.google.com/?q=İstanbul,Türkiye',
    coverImage:
      'https://images.unsplash.com/photo-1762944082416-bd1b98ccfcb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2ODIyMjQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg0ODg0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODU2MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1724644327127-25f1a3fae691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMGRldGFpbHxlbnwxfHx8fDE3Njg1NjIxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730826933-54287f79e1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2JieSUyMGludGVyaW9yfGVufDF8fHx8MTc2ODU2MjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { label: 'Alan', value: '40.000 m²' },
      { label: 'Yıl', value: '2023–2026' },
      { label: 'Konsept', value: 'Su Temalı Peyzaj' },
      { label: 'Sosyal', value: 'Gölet & Spor Alanları' },
    ],
    priceLabel: 'Fiyat için iletişime geçin',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HERO SLIDER
// ─────────────────────────────────────────────────────────────────────────────
export const heroSlides = [
  {
    image: '/images/hero/slide-1.png',
    title: 'RUBY SMALT',
    subtitle: 'Modern yaşamı yeniden tanımlıyoruz',
    projectSlug: 'ruby-smalt',
  },
  {
    image:
      'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODM4MTg5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'VIRGA GARTEN',
    subtitle: '25 yıllık deneyim, sınırsız güven',
    projectSlug: 'virga-garten',
  },
  {
    image:
      'https://images.unsplash.com/photo-1673978483073-f6e8e5b086c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODM4Nzc4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'ONYX PECTRA',
    subtitle: 'İzmir\'in yeni simgesi',
    projectSlug: 'onyx-pectra',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT INFO
// ─────────────────────────────────────────────────────────────────────────────
export const contactInfo = {
  phone1: '+90 312 000 00 00',
  phone2: '+90 530 000 00 00',
  whatsapp: '905300000000',
  email: 'info@atilim.com',
  addressTR: 'Reşitpaşa Süyü Tower, Yazıcıoğlu Cd., 06830 Çankaya/Ankara',
  addressUS: '823 Middlesex Turnpike, Burlington, MA 01803, Amerika Birleşik Devletleri',
  companyName: 'Atılım Mühendislik İnşaat A.Ş.',
  linkedin: '#',
  instagram: '#',
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const forSaleProjects = projects.filter(
  (p) => p.status === 'for-sale' || p.status === 'in-progress' || p.status === 'planning',
);

export const completedProjects = projects.filter((p) => p.status === 'completed');
