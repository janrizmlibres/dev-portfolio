import LinksHolder from "./shared/LinksHolder";
import SocialTag from "./shared/SocialTag";
import TechToolsPanel from "./shared/TechToolsPanel";

const Footer = () => {
  return (
    <section className="custom-container px-12 grid grid-cols-6 items-end gap-x-4 gap-y-12 mb-8">
      <div className="col-span-4">
        <h1 className="large-text mb-12">Janriz</h1>
        <div className="flex items-center gap-4">
          <p>Full-stack Developer</p>
          <h1 className="large-text">Libres</h1>
        </div>
      </div>

      <div className="col-span-2">
        <h2 className="subheading text-2xl pl-2 mb-6">
          &hellip; /Contacts &hellip;
        </h2>

        <LinksHolder
          links={[{ name: "Main" }, { name: "About" }, { name: "Projects" }]}
          className="justify-between mb-6"
        />

        <TechToolsPanel
          title="Site"
          body="Developed by ME / Designed by Taisia / Powered by React"
        />
      </div>

      <SocialTag platform="Github" />
      <SocialTag platform="LinkedIn" />
      <SocialTag platform="Email" />
      <SocialTag platform="Telegram" />
      <SocialTag platform="Facebook" />
      <SocialTag platform="Instagram" />
    </section>
  );
};

export default Footer;
