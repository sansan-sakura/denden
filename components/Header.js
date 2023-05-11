function Header(props) {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="mt-24 font-sans text-blue-700 text-7xl">DenDen Blog</h1>
      <nav className="">
        <ul className="flex justify-around gap-8 text-xl text-blue-700 cursor-pointer ">
          <li className="hover:text-blue-500 transition-colors">About</li>
          <li className="hover:text-blue-500 transition-colors">Blog</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
