import LinksHolder from "./shared/LinksHolder";

const Header = () => {
  return (
    <header>
      <nav className="py-6 px-12 relative">
        <a href="#" className="absolute top-1/2 -translate-y-1/2 text-xl">
          <h1>
            Janriz
            <br />
            Libres
          </h1>
        </a>

        <LinksHolder
          links={[
            { name: "About" },
            { name: "Projects" },
            { name: "Contacts" },
          ]}
          className="w-fit mx-auto my-4"
        />
      </nav>
    </header>
  );
};

export default Header;
