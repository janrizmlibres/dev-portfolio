import SocialTag from "./shared/SocialTag";

const Socials = () => {
  return (
    <section className="flex justify-center gap-8 custom-container">
      <SocialTag platform="Github" />
      <SocialTag platform="LinkedIn" />
      <SocialTag platform="Telegram" />
      <SocialTag platform="Facebook" />
      <SocialTag platform="Instagram" />
    </section>
  );
};

export default Socials;
