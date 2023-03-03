import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import phoneIcon from "@/assets/contact/phone.png"
import emailIcon from "@/assets/contact/email.png"
import locationIcon from "@/assets/contact/location.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({setSelectedPage}: Props) => {
  return (
    <section id="contact" className="w-full h-auto float-left py-[120px] px-0 bg-gray-50">
        <motion.div className="w-full max-w-[1170px] mx-auto h-auto py-0 px-5 relative"
            onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
            <div className="w-full h-auto float-left">
                <HText>Contact</HText>
                <p className="max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam, doloribus aliquam error minus odio!</p>
            </div>
            <div className="w-fulll h-auto float-left pt-[60px] mb-[30px]">
                <ul className="pl-30 grid grid-cols-3 gap-4">
                    <li className="mx-0 mt-0 mb-[30px] col-span-3 md:col-span-1">
                        <div className="flex items-start bg-gray-20 pt-[33px] pb-[41px] px-[35px] rounded-md">
                            <div className="w-[55px] h-[55px] bg-secondary-400 rounded-full flex items-center justify-center">
                                <img src={phoneIcon} alt="phone icon" className="w-[25px] h-[25px] filter invert-1"/>
                            </div>
                            <div className="flex-6 pl-[15px]">
                                <h3 className="text-xl font-medium mb-[5px]">Phone</h3>
                                <ul className="m-0 p-0">
                                    <li className="text-base">
                                        <a href="Tel: +452 666 386" className="text-gray-200">+452 666 386</a>
                                    </li>
                                    <li className="text-base">
                                        <a href="Tel: +465 562 226" className="text-gray-200">+452 666 386</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mx-0 mt-0 mb-[30px] col-span-3 md:col-span-1">
                        <div className="flex items-start bg-gray-20 pt-[33px] pb-[41px] px-[35px] rounded-md">
                            <div className="w-[55px] h-[55px] bg-secondary-400 rounded-full flex items-center justify-center">
                                <img src={emailIcon} alt="phone icon" className="w-[25px] h-[25px] filter invert-1"/>
                            </div>
                            <div className="flex-6 pl-[15px]">
                                <h3 className="text-xl font-medium mb-[5px]">Email</h3>
                                <ul className="m-0 p-0">
                                    <li className="text-base">
                                        <a href="mailto:support@gmail.com" className="text-gray-200">support@gmail.com</a>
                                    </li>
                                    <li className="text-base">
                                        <a href="mailto:example@gmail.com" className="text-gray-200">example@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mx-0 mt-0 mb-[30px] col-span-3 md:col-span-1">
                        <div className="flex items-start bg-gray-20 pt-[33px] pb-[41px] px-[35px] rounded-md">
                            <div className="w-[55px] h-[55px] bg-secondary-400 rounded-full flex items-center justify-center">
                                <img src={locationIcon} alt="phone icon" className="w-[25px] h-[25px] filter invert-1"/>
                            </div>
                            <div className="flex-6 pl-[15px]">
                                <h3 className="text-xl font-medium mb-[5px]">Address</h3>
                                <ul className="m-0 p-0">
                                    <li className="text-base">
                                        <p>Envato 121 King St, </p>
                                        <p className="whitespace-nowrap">Argentina, Buenos Aires</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            <div className="w-full h-auto flex">
                <div className="w-[50%] bg-gray-20 pt-[50px] pb-[55px] px-[45px] mr-[30px] roundend-md">
                    <div className="w-full float-left mb-[14px]">
                        <p className="text-xl mb-[20px]">I am always open to discussing product<br/><span className="font-semibold text-gray-500"> design work or partnerships.</span></p>
                    </div>
                    <div className="w-full h-auto float-left">
                        <form action="">
                            <div className="w-full mb-[60px]">
                                <input required type="text" placeholder="Name *" className="text-gray-200 w-full h-[50px] border-b border-solid outline-none border-[#cbd3d9] bg-transparent leading-[1.6] text-base font-medium p-2.5 transition-all duration-300 ease-in-out focus:border-b focus:border-solid focus:border-[#0f172a]"/>
                            </div>
                            <div className="w-full mb-[60px]">
                                <input required type="email" placeholder="Email *" name="user_email" className="text-gray-200 w-full h-[50px] outline-none border-b border-solid border-[#cbd3d9] bg-transparent leading-[1.6] text-base font-medium p-2.5 transition-all duration-300 ease-in-out focus:border-b focus:border-solid focus:border-[#0f172a]"/>
                            </div>
                            <div className="w-full mb-[30px]">
                                <textarea required name="message" placeholder="Message *" className="text-gray-200 w-full outline-none border-b border-solid border-[#cbd3d9] b-transparent text-base font-medium h-[50px] resize-none p-2.5 leaeading-[1.4] transition-all duration-300 ease-in-out focus:border-b focus:border-solid focus:border-[#0f172a]"></textarea>
                            </div>
                            <div className="w-full float-left">
                            <button type="submit" className="rounded-md border-2 border-solid bg-gray-20 border-gray-200 px-[33px] py-[11px] text-lg font-medium text-gray-500 inline-block tracking-[.4px] transition-all duration-300 ease-in-out hover:text-gray-20 hover:bg-gray-500 hover:border-gray-500">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-[50%] ml-[30px]">
                    <div className="border-[5px] border-solid border-[#fff] rounded-md h-full w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.39707176518!2d-58.573384502715754!3d-34.61546111778339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1677856403628!5m2!1ses!2sar"></iframe>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact