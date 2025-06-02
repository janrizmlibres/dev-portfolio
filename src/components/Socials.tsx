import SocialTag from "./shared/SocialTag";
import { socials } from "../data";

const Socials = () => {
  return (
    <section className="flex justify-center gap-8 custom-container">
      {socials.map((social) => (
        <SocialTag key={social.name} social={social} />
      ))}
    </section>
  );
};

export default Socials;
