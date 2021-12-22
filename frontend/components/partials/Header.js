import Link from "next/link";

const Header = () => {

  return <header className="py-6 lg:pb-4 bg-blue-500 text-white">
    <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            Conexa Challenge
          </Link>
        </div>
      </div>
    </div>
  </header>
};

export default Header;