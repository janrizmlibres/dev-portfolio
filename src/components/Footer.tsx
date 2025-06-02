import LinksHolder from "./shared/LinksHolder";
import SocialTag from "./shared/SocialTag";
import TechToolsPanel from "./shared/TechToolsPanel";
import { socialsPlusEmail } from "../data";

const Footer = () => {
  return (
    <section className="custom-container px-12 grid grid-cols-6 items-end gap-x-4 gap-y-12 mb-8">
      <div className="col-span-4">
        <h1 className="large-text mb-12">Janriz</h1>
        <div className="flex items-center gap-4">
          <p className="medium-text flex-1/4">
            Full-stack
            <br />
            developer
          </p>
          <h1 className="large-text flex-3/4">Libres</h1>
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

        <TechToolsPanel title="Site">
          Developed by ME /<br />
          Designed by Taisia /<br />
          Powered by React
        </TechToolsPanel>
      </div>

      {socialsPlusEmail.map((social) => (
        <SocialTag key={social.name} social={social} />
      ))}
    </section>
  );
};

export default Footer;
