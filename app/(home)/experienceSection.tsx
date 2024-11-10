import { Link } from "@nextui-org/link";

import { title } from "@/components/primitives";

const ExperienceSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 mt-14">
      <h1 className={title({ size: "xs" })}>Experience</h1>
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-medium">Designer, Framer</h1>
        <p className="text-muted-foreground font-thin">2017 - Present</p>
        <p className="text-muted-foreground">
          From which we spring invent the universe corpus callosum the only home
          we&apos;ve ever known decipherment dispassionate extraterrestrial
          observer. Venture vanquish the impossible vastness is bearable only
          through love not a sunrise but a galaxyrise the carbon in our apple
          pies extraordinary claims require extraordinary evidence.
        </p>
        <Link className="text-primary" href="#">
          View more
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-medium">Designer, Framer</h1>
        <p className="text-muted-foreground font-thin">2017 - Present</p>
        <p className="text-muted-foreground">
          From which we spring invent the universe corpus callosum the only home
          we&apos;ve ever known decipherment dispassionate extraterrestrial
          observer. Venture vanquish the impossible vastness is bearable only
          through love not a sunrise but a galaxyrise the carbon in our apple
          pies extraordinary claims require extraordinary evidence.
        </p>
        <Link className="text-primary" href="#">
          View more
        </Link>
      </div>
    </div>
  );
};

export default ExperienceSection;
