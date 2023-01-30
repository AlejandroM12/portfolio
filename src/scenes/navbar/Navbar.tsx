import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/example.webp";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import homeIcon from '@/assets/icons/home.svg'
import humanIcon from '@/assets/icons/human.svg'
import serviceIcon from '@/assets/icons/service.svg'
import portfolioIcon from '@/assets/icons/portfolio.svg'
import contactIcon from '@/assets/icons/contact.svg'
import { before } from "node:test";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

  const nav ="w-full h-auto fixed left-0 top-0 bg-gray-20 z-30 transition-all ease-in-out duration-500"
  const flexBetween = "flex items-center justify-between ";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gray-20 shadow-md";


  return (
    <nav className={nav}>
      <div
        className={`${navbarBackground} ${flexBetween} h-[80px] px-10 `}
      >
        <div className="w-full h-auto p-0">
            <img src={Logo} alt="logo" />
        </div>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} `}>
                <div className={`${flexBetween} gap-4`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    icon={homeIcon}
                    alt="home icon"
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    icon={humanIcon}
                    alt="about icon"
                  />
                  <Link
                    page="Services"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    icon={serviceIcon}
                    alt="services icon"
                  />
                  <Link
                    page="Portfolio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    icon={portfolioIcon}
                    alt="portfolio icon"
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    icon={contactIcon}
                    alt="contact icon"
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12 ">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              icon={homeIcon}
              alt="home icon"
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              icon={humanIcon}
              alt="about icon"
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              icon={serviceIcon}
              alt="services icon"
            />
            <Link
              page="Portfolio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              icon={portfolioIcon}
              alt="portfolio icon"
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              icon={contactIcon}
              alt="contact icon"
            />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
