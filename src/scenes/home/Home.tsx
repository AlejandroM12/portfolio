import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import perfilImg from "@/assets/perfil-image-example.webp"
import webkitImage from "@/assets/background-image.svg"
import Typewriter  from 'typewriter-effect';
import linkedinIcon from '@/assets/icons/linkedin.svg'
import facebookIcon from '@/assets/icons/facebook.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import dribbbleIcon from '@/assets/icons/dribbble.svg'
import twitterIcon from '@/assets/icons/twitter.svg'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Home = ({setSelectedPage}: Props) => {
  const afterStyle = `absolute after:content-[""] after:w-[1px] after:h-full after:bg-gray-400 after:top-0 after:right-0`
  return (
    <section id="home" className=" w-full min-h-[100vh] relative bg-gray-50">
        <motion.div className="flex items-center justify-center flex-col text-center py-[100px] px-[20px]"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <div className="w-[245px] h-[245px] mx-auto mb-3.5 mt-0 ">
                <img className="h-auto w-full max-w-full" src={perfilImg} alt="perfil" style={{ WebkitMaskImage: `url(${webkitImage})`, WebkitMaskSize: "auto auto", WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat" }}/>
            </div>
            <div className="text-center">
                <h5 className="font-montserrat text-xl font-medium text-gray-100">
                  Hello, I'm Edina
                  </h5>
                  <h1 className="text-5xl font-bold text-gray-500 mt-2.5 mb-3 mx-0">
                    <Typewriter
                      options={{
                        strings: ['Web Developer', 'Graphic Desinger'],
                        autoStart: true,
                        loop: true
                      }}
                    />
                  </h1>
                  <p className="text-base max-w-[500px] font-normal text-gray-200 mt-0 mb-8 mx-auto">
                    I'm a Freelancer Front-end React Developer based In USA, over 6 years of professional experience.
                  </p>
                  <div>
                    <ul className="flex justify-center items-center gap-1 list-none">
                      <li className="m-0 inline-block">
                        <a href="#" className={`relative inline-block text-gray-300 leading-none px-3.5 py-0 after:${afterStyle}`} >
                          <img src={facebookIcon} alt="facebook" className="hover:brightness-50 transition-all duration-300 hover:translate-y-[-3px]"/>
                        </a>
                      </li>
                      <li className="m-0 inline-block">
                        <a href="#" className={`relative inline-block text-gray-300 leading-none px-3.5 py-0 after:${afterStyle}`} >
                          <img src={twitterIcon} alt="twitter" className="hover:brightness-50 transition-all duration-300 hover:translate-y-[-3px]"/>
                        </a>
                      </li>
                      <li className="m-0 inline-block">
                        <a href="#" className={`relative inline-block text-gray-300 leading-none px-3.5 py-0 after:${afterStyle}`} >
                          <img src={instagramIcon} alt="instagram" className="hover:brightness-50 transition-all duration-300 hover:translate-y-[-3px]"/>
                        </a>
                      </li>
                      <li className="m-0 inline-block">
                        <a href="#" className={`relative inline-block text-gray-300 leading-none px-3.5 py-0 after:${afterStyle}`} >
                          <img src={dribbbleIcon} alt="dribbble" className="hover:brightness-50 transition-all duration-300 hover:translate-y-[-3px]"/>
                        </a>
                      </li>
                      <li className="m-0 inline-block">
                        <a href="#" className={`relative inline-block text-gray-300 leading-none px-3.5 py-0 after:${afterStyle}`} >
                          <img src={linkedinIcon} alt="linkedin" className="hover:brightness-50 transition-all duration-300 hover:translate-y-[-3px]"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7">
                    <a href="#" className="text-gray-500 text-lg font-semibold inline-block transition-all duration-300 rounded-[30px] border-2 border-solid border-gray-200 pt-2 pb-2 px-9 hover:translate-y-[-5px] hover:text-gray-20 hover:bg-gray-500 hover:border-gray-500">Download CV</a>
                  </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Home