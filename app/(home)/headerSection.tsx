import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

const HeaderSection: React.FC = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <Avatar
          className="w-20 h-20 text-large"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
        <div className="flex flex-col gap-2">
          <h1 className={title({ size: "xs" })}>{siteConfig.name}</h1>
          <p className="text-muted-foreground">{siteConfig.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-14">
        <h1 className={title({ size: "xs" })}>Bio</h1>
        <p className={subtitle()}>
          SEO and Advertising Specialist with experience in leading the digital
          marketing and advertising businesses I am a team of a local clothing
          brand company who has expertise in analysis, marketing, coding and is
          proficient in interpersonal interaction as well as public speaking.
        </p>
      </div>
      <div>
        <Button>Download CV</Button>
      </div>
    </>
  );
};

export default HeaderSection;
