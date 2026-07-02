/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  images: {
    // PLATZHALTER: Projektfotos werden vorerst direkt von der Bestandsseite geladen.
    // Vor Go-Live durch eigene, optimierte Kundenfotos in /public ersetzen.
    remotePatterns: [
      { protocol: "https", hostname: "htb24.com" },
      { protocol: "http", hostname: "htb24.com" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
