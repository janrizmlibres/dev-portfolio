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

        <ul className="flex gap-10 w-fit mx-auto my-4 text-gray-100">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
