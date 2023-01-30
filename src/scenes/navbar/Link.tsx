import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  icon: any
  alt: string
};

const Link = ({ page, selectedPage, setSelectedPage, icon, alt }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const before = `content-[""] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-primary-100 before:rounded-md before:z-[-1] before:transition-all before:ease-in-out before:duration-300`
  const hoverBefore = `content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:before:bg-primary-100 hover:before:rounded-md hover:before:z-[-1] hover:before:scale-x-100 hover:before:transition hover:before:transform hover:before:origin-left   hover:before:duration-100`
  return (
    <AnchorLink
    className={`flex items-center justify-center relative px-[20px] py-[5px] text-xs text-gray-500 font-medium ${selectedPage === lowerCasePage ? `active:before: ${before}` : ""} hover:before:${hoverBefore}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
        <img src={icon} alt={alt} className='w-[18px] h-[18px] mr-[10px] bg-invert-30 transition-all'/>
      {page}
    </AnchorLink>
  );
};

export default Link;
