import SocialTag from "./shared/SocialTag";
import { socials } from "../data";

const Socials = () => {
  return (
    <section className="custom-container">
      <div
        className={[
          "mx-auto w-[851.33px] overflow-hidden flex gap-8 relative",
        ].join(" ")}
      >
        {Array.from({ length: 2 }).map(() => (
          <div className="flex gap-8 animate-infinite-slide">
            {socials.map((social) => (
              <SocialTag key={social.name} social={social} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Socials;
