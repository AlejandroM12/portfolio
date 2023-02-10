import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import  CheckBadgeIcon  from "@heroicons/react/24/outline/CheckBadgeIcon";
import bgAboutImage from '@/assets/bg-about.jpg'
import { useState } from "react";
import MoreInformationModal from "./MoreInformationModal";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const About = ({ setSelectedPage }: Props) => {
    const [seeMoreOpen, setSeeMoreOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setSeeMoreOpen(true)
    }
    const hanleClose = (e:any) => {
        e.stopPropagation()
        setSeeMoreOpen(false)
    }

  return (
    <section id="about" className="w-full h-auto pb-[170px] pt-[120px]">
        <motion.div
            className="w-full max-w-[1170px] mx-auto h-auto py-0 px-5 relative"
            onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        >
            <div>
                <HText>About Me</HText>
            </div>
            <div className="flex w-full h-auto  pt-[60px]">
                <div className="w-[50%]">
                    <div className="mb-[55px] w-full">
                        <h3 className="text-sm font-normal text-gray-500 mb-4">
                            Hi, Im  
                            <span className="text-sm font-semibold text-gray-500"> Edina</span>
                        </h3>
                        <p className="max-w-[90%]">Im a Freelancer Front-end Developer with over 6 years of experience. Im from San Francisco. I code and create web elements for amazing people around the world. I like work with new people.</p>
                    </div>
                    <div>
                    <h3 className="text-sm font-semibold mb-[15px] text-gray-500">Skills</h3>
                    <p className="max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
                        <div className=" mt-10 mb-2.5 flex items-center gap-12 ">
                                <div>
                                    <div className="bg-gray-20 flex gap-12 border-[1px] border-solid border-[rgba(0,0,0,.1)] rounded-[20px] py-8 px-16">
                                        <div className="gap-10 flex justify-center">
                                            <div className="gap-y-4 items-start grid">
                                                <div className="flex gap-x-2">
                                                    <CheckBadgeIcon className="h-6 w-6 text-secondary-400"/>
                                                    <p className="text-xs text-gray-500 font-semibold">HTML</p>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <CheckBadgeIcon className="h-6 w-6 text-secondary-400"/>
                                                    <p className="text-xs text-gray-500 font-semibold">CSS</p>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <CheckBadgeIcon className="h-6 w-6 text-secondary-400"/>
                                                    <p className="text-xs text-gray-500 font-semibold">Typescript</p>
                                                </div>
                                                <div className="flex gap-x-2">
                                                    <CheckBadgeIcon className="h-6 w-6 text-secondary-400"/>
                                                    <p className="text-xs text-gray-500 font-semibold">Javascript</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gap-10 flex justify-center">
                                            <div className="gap-y-4 items-start grid">
                                                    <div className="flex gap-x-2">
                                                        <CheckBadgeIcon className="h-6 w-6 text-secondary-400"/>
                                                        <p className="text-xs text-gray-500 font-semibold">React JS</p>
                                                    </div>
                                                    <div className="flex gap-x-2">
                                                        <CheckBadgeIcon className="h-6 w-6 text-secondary-400"/>
                                                        <p className="text-xs text-gray-500 font-semibold">Figma</p>
                                                    </div>
                                                    <div className="flex gap-x-2">
                                                        <CheckBadgeIcon className="h-6 w-6 text-secondary-400"/>
                                                        <p className="text-xs text-gray-500 font-semibold"> Illustrator</p>
                                                    </div>
                                                    <div className="flex gap-x-2">
                                                        <CheckBadgeIcon className="h-6 w-6 text-secondary-400"/>
                                                        <p className="text-xs text-gray-500 font-semibold">Photoshop</p>
                                                    </div>
                                            </div>
                                        </div>                  
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <button onClick={handleOpen} className="rounded-md border-2 border-solid bg-gray-20 border-gray-500 px-[30px] py-[13px] mt-3 text-lg leading-normal font-medium text-gray-500 inline-block tracking-[.4px] transition-all duration-[0.5s] delay-[0s] hover:text-gray-20 hover:bg-gray-500 hover:border-gray-500">See More</button>
                        { seeMoreOpen && (
                            <MoreInformationModal onClose={hanleClose}/>
                        )}
                    </div>
                </div>
                
                
                <div className="pl-[120px] w-[50%] z-[-1]">
                    <div className="relative">
                        <img src={bgAboutImage} alt="about image" className="relative min-w-full opacity-0"/>
                        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[10px] bg-no-repeat bg-center bg-cover bg-about-perfil z-[-1]"></div>
                        <div className="w-[250px] h-[250px] absolute bottom-[-50px] left-[-50px] z-10 rounded-full bg-secondary-400">
                            <div className="absolute top-[50%] left-[50%] text-center w-full px-2.5 py-2.5 translate-y-[-50%] translate-x-[-50%]">
                               <h3 className="text-4xl font-bold text-center text-gray-20">6+ Years</h3>
                               <span className="text-base font-medium text-center text-gray-20">Of Experiance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default About