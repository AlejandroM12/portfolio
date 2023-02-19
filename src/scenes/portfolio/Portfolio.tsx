import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import Carousel from "./Carousel";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Portfolio = ({setSelectedPage}: Props) => {
  return (
    <section id="portfolio" className="w-full h-auto float-left px-0 pt-[120px] pb-[120px]">
    <motion.div
    className="w-full max-w-[1170px] mx-auto h-auto py-0 px-5 relative"
        onViewportEnter={() => setSelectedPage(SelectedPage.Portfolio)}
    >
        <div className="w-full h-auto float-left">
            <HText>Portfolio</HText>
            <p className="max-w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
        </div>
        
        <div className="my-carousel w-full h-auto float-left pt-[60px] lg:">
            <ul className="my-0 mx-[-15px]">
                <Carousel />
            </ul>
        </div>
        </motion.div>
    </section>
  )
}

export default Portfolio