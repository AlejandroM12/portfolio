import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ListService from "./ListService";
import motionWebIcon from "@/assets/icons/motion-web.svg"
import uiUxIcon from "@/assets/icons/ui-ux.svg"
import brandingDesignIcon from "@/assets/icons/branding-design.svg"
import mobileAppIcon from "@/assets/icons/mobile-app.svg"
import { useState } from "react";
import { BrandingDesign, MobileApp, MotionWeb, UxUi } from "./LearnMoreInformation";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    isOpen?: boolean;
    id?: string; 
    onClick?: () => void;
}

const Services = ({ setSelectedPage, isOpen, id, onClick }: Props) => {

    const [activeModal, setActiveModal] = useState(null);

    const handleOpenModal = (modalId: any) => {
      setActiveModal(modalId);
    };
  
    const handleCloseModal = () => {
      setActiveModal(null);
    };

  return (
    <section id="services" className="w-full h-auto float-left bg-gray-50 px-0 pt-[120px] pb-[90px]">
        <motion.div
        className="w-full max-w-[1170px] mx-auto h-auto py-0 px-5 relative"
            onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        >
            <div className="w-full h-auto float-left">
                <HText>What I Do</HText>
                <p className="max-w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
            </div>
            <div className="w-full h-auto float-left pt-[60px]">
                <ul className="my-0 mr-0 ml-[-30px] list-none flex flex-wrap">
                        <ListService
                        image={motionWebIcon}
                        title1="Motion & Web"
                        title2="Graphy"
                        id="motionWeb"
                        onClick={() => handleOpenModal('motionWebModal')}
                        />
                        <ListService
                        image={uiUxIcon}
                        title1="Ui/Ux"
                        title2="Consultancy"
                        id="uiUx"
                        onClick={() => handleOpenModal('uiUxModal')}
                        />
                        <ListService
                        image={brandingDesignIcon}
                        title1="Branding &"
                        title2="Design"
                        id="brandingDesign"
                        onClick={() => handleOpenModal('brandingDesignModal')}
                        />
                        <ListService
                        image={mobileAppIcon}
                        title1="Mobile App"
                        title2="Design"
                        id="mobileApp"
                        onClick={() => handleOpenModal('mobileAppModal')}
                        />
                </ul>
            </div>
        </motion.div>
        {
            <>
            {activeModal === 'motionWebModal' && (
              <MotionWeb isOpen={true} onClose={handleCloseModal} />
            )}
            {activeModal === 'uiUxModal' && (
              <UxUi isOpen={true} onClose={handleCloseModal} />
            )}
            {activeModal === 'brandingDesignModal' && (
              <BrandingDesign isOpen={true} onClose={handleCloseModal} />
            )}
            {activeModal === 'mobileAppModal' && (
              <MobileApp isOpen={true} onClose={handleCloseModal} />
            )}
          </>
        }
    </section>
  )
}

export default Services