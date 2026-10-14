/** @type {import('next').NextConfig} */
const staticPages = [
  "ai_class_prep",
  "day2",
  "day2chart",
  "day2tools",
  "poultry_proposal",
  "tbf",
  "tutorzone",
];

const nextConfig = {
  async rewrites() {
    const rules = [];
    for (const page of staticPages) {
      rules.push(
        { source: `/${page}`, destination: `/${page}/index.html` },
        { source: `/${page}/`, destination: `/${page}/index.html` },
      );
    }
    // Nested page: /tutorzone/tech-plan
    rules.push(
      { source: "/tutorzone/tech-plan", destination: "/tutorzone/tech-plan/index.html" },
      { source: "/tutorzone/tech-plan/", destination: "/tutorzone/tech-plan/index.html" },
    );
    return rules;
  },
};

export default nextConfig;
