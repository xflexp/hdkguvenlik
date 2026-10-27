import type { NextConfig } from "next";

const isMaintenance = true;

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    const baseRedirects = [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/anasayfa",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ana-sayfa",
        destination: "/",
        permanent: true,
      },
      {
        source: "/admin/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dosyalar/stad.rar",
        destination: "https://drive.google.com/uc?export=download&id=1DvW-2EdAmxbsGhOe3372QEl8pkxJrxzu", // Gerçek indirme linkiniz
        permanent: false,
      },
    ];

    if (isMaintenance) {
      return [
        ...baseRedirects,
        { source: "/teknik-servis", destination: "/", permanent: false },
        { source: "/garanti-kosullari", destination: "/", permanent: false },
        { source: "/montaj-sozlesmesi", destination: "/", permanent: false },
        { source: "/kvkk", destination: "/", permanent: false },
        { source: "/gizlilik-politikasi", destination: "/", permanent: false },
      ];
    }

    return baseRedirects;
  },
};

export default nextConfig;
