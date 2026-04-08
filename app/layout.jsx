import "./globals.css";

export const metadata = {
  title: "Wole Ekanola",
  description:
    "Founder & CEO of Schoolwave. Founder of Techill Academy. Author. Mentor. Shaping Africa's Future through technology, education, and youth empowerment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
