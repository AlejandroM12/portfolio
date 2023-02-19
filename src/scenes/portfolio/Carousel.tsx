import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import portfolioImage1 from "@/assets/portfolio/portfolio-image-1.jpg"
import portfolioImage2 from "@/assets/portfolio/portfolio-image-2.jpg"
import portfolioImage3 from "@/assets/portfolio/portfolio-image-3.jpg"
import portfolioImage4 from "@/assets/portfolio/portfolio-image-4.jpg"
import portfolioImage5 from "@/assets/portfolio/portfolio-image-5.jpg"
import { useState } from "react";
import { ModalCarousel } from "./Modals";

type Props = {
    isOpen?: boolean;
}



const Carousel = ({isOpen}: Props) => {
    const [activeModal, setActiveModal] = useState(null);

const handleOpenModal = (modalId: any) => {
  setActiveModal(modalId);
};

const handleCloseModal = () => {
  setActiveModal(null);
};
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      
  return (
    <>
      <Slider {...settings}>
        <li>
            <div onClick={() => handleOpenModal('portfolio1')} id="portfolio1" className="py-0 px-[15px] w-full h-auto relative cursor-pointer">
                <div className="image-container h-auto relative rounded-[10px] overflow-hidden">
                    <div className="w-full overflow-hidden">
                    <img
                            src={portfolioImage1}
                            alt="Portfolio Item 1"
                            className="h-[420px] block relative w-full transition-all duration-400 animate-ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </li>
        <li>
        <div onClick={() => handleOpenModal('portfolio2')} id="portfolio2" className="py-0 px-[15px] w-full h-auto relative cursor-pointer">
                <div className="image-container h-auto relative rounded-[10px] overflow-hidden">
                    <div className="w-full overflow-hidden">
                    <img
                            src={portfolioImage2}
                            alt="Portfolio Item 1"
                            className="h-[420px] block relative w-full transition-all duration-400 animate-ease-in-out"
                    />
                    </div>
                </div>
            </div>
        </li>
        <li>
        <div onClick={() => handleOpenModal('portfolio3')} id="portfolio3" className="py-0 px-[15px] w-full h-auto relative cursor-pointer">
                <div className="image-container h-auto relative rounded-[10px] overflow-hidden">
                    <div className="w-full overflow-hidden">
                    <img
                            src={portfolioImage3}
                            alt="Portfolio Item 1"
                            className="h-[420px] block relative w-full transition-all duration-400 animate-ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div onClick={() => handleOpenModal('portfolio4')} id="portfolio4" className="py-0 px-[15px] w-full h-auto relative cursor-pointer">
                    <div className="image-container h-auto relative rounded-[10px] overflow-hidden">
                        <div className="w-full overflow-hidden">
                        <img
                                src={portfolioImage4}
                                alt="Portfolio Item 1"
                                className="h-[420px] block relative w-full transition-all duration-400 animate-ease-in-out"
                            />
                        </div>
                    </div>
            </div>
        </li>
        <li>
            <div onClick={() => handleOpenModal('portfolio5')} id="portfolio5" className="py-0 px-[15px] w-full h-auto relative cursor-pointer">
                    <div className="image-container h-auto relative rounded-[10px] overflow-hidden">
                        <div className="w-full overflow-hidden">
                        <img
                                src={portfolioImage5}
                                alt="Portfolio Item 1"
                                className="h-[420px] relative w-full transition-all duration-400 animate-ease-in-out"
                            />
                        </div>
                    </div>
            </div>
        </li>
      </Slider>
      { activeModal === 'portfolio1' && (
        <ModalCarousel 
            number={"1"}
            title="Behance Profile" 
            descriptionFirst="We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification."
            descriptionSecond="Mockups are useful both for the creative phase of the project - for instance when you‘re trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate."
            client="Juan Roman Riquelme"
            category="Behance Shoot"
            data="October 22, 2022"
            link="https://www.behance.net/"
            onClose={handleCloseModal}
            isOpen={true}
        />
      )}
      { activeModal === 'portfolio2' && (
        <ModalCarousel 
            number="2"
            title="Dribbble Shot" 
            descriptionFirst="We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification."
            descriptionSecond="Mockups are useful both for the creative phase of the project - for instance when you‘re trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate."
            client="Lionel Messi"
            category="Dribbble Shoot"
            data="October 22, 2022"
            link="https://dribbble.com/"
            onClose={handleCloseModal}
            isOpen={true}
        />
      )}
      { activeModal === 'portfolio3' && (
        <ModalCarousel 
            number="3"
            title="Facebook Shoot" 
            descriptionFirst="We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification."
            descriptionSecond="Mockups are useful both for the creative phase of the project - for instance when you‘re trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate."
            client="Martin Palermo"
            category="Dribbble Shoot"
            data="October 22, 2022"
            link="https://www.facebook.com/"
            onClose={handleCloseModal}
            isOpen={true}
        />
      )}
      { activeModal === 'portfolio4' && (
        <ModalCarousel 
            number={"4"}
            title="Facebook Shoot" 
            descriptionFirst="We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification."
            descriptionSecond="Mockups are useful both for the creative phase of the project - for instance when you‘re trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate."
            client="Roberto Carlos"
            category="Dribbble Shoot"
            data="October 22, 2022"
            link="https://www.facebook.com/"
            onClose={handleCloseModal}
            isOpen={true}
        />
      )}
      { activeModal === 'portfolio5' && (
        <ModalCarousel 
            number={"5"}
            title="Instagram Shoot" 
            descriptionFirst="We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification."
            descriptionSecond="Mockups are useful both for the creative phase of the project - for instance when you‘re trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate."
            client="Carlos Tevez"
            category="Web Shoot"
            data="October 22, 2022"
            link="https://themeforest.net/"
            onClose={handleCloseModal}
            isOpen={true}
        />
      )}
      </>
  );
}

export default Carousel