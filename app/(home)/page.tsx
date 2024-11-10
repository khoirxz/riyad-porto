import HeaderSection from "./headerSection";
import ExperienceSection from "./experienceSection";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <HeaderSection />
      <ExperienceSection />
    </section>
  );
}
