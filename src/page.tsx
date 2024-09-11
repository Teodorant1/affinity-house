import { Metadata } from "next";
import { Header } from "~/components/header";
import { Hero } from "~/components/Hero";

export const metadata: Metadata = {
  title: "Affinity House - Beautiful Communities in Los Angeles",
  description:
    "Affinity House designs communities for students and urban coliving in amazing locations.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
