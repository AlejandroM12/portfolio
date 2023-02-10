import closeIcon from "@/assets/icons/close-icon.svg"
import { BriefcaseIcon, BookOpenIcon } from "@heroicons/react/24/outline";

type Props = {
    onClose: React.MouseEventHandler<HTMLElement>
}

const MoreInformationModal = ({onClose}: Props) => {

    const afterStyle = `absolute after:content-["+"] after:right-[-24px] after:text-2xl after:top-[2px] after:font-light after:text-2xl`
    const beforeAchievements = `absolute before:content-[""] before:left-0 before:top-[13px] before:w-[30px] before:h-[1px] before:bg-[#777]`
    const beforeExpEdu = `absolute before:content-[""] before:w-[10px] before:h-[2px] before:bg-[#444] before:left-[7px] before:top-[9px] efore:opacity-[.8]`
    const listAfter = `absolute after:content-[""] after:top-[0] after:left-[20px] after:bottom-0 after:border-[1px] after:border-solid after:border-[#ddd]`
    const hanldeModalContainer = (e:any) => e.stopPropagation()
  return (
    
    <div onClick={onClose}>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.85)] z-[99]" >
            <div onClick={hanldeModalContainer} className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] border-none bg-gray-20 overflow-initial rounded outline-none z-999">
                <div>
                    <button onClick={onClose} className="bg-transparent border-none flex w-[45px] h-[45px] absolute z-[4] right-[-50px] top-[-32px]">
                        <img src={closeIcon} alt="close icon" className="w-[45px] h-[45px] cursor-pointer absolute invert transition-all duration-[0.3s] delay-[0s]"/>
                    </button>
                    <div className="h-[75vh] overflow-y-auto w-[1070px]">
                        <div className="px-[50px] relative w-full h-full overflow-hidden float-left overflow-y-scroll">
                            <div className="flex flex-wrap ml-[-15px] mr-[-15px]">
                                <div className="relative px-[15px] mt-[50px] flex-2 w-[50%]">
                                    <h3 className="text-3xl mb-[35px] border-b-2 border-dashed border-[#ddd] pb-[10px] inline-block font-semibold text-gray-500">Personal Info</h3>
                                        <ul className="flex flex-wrap p-0 list-none">
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">first name: </span>
                                                <span className="font-medium text-secondary-400 text-x">Edina</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">last name: </span>
                                                <span className="font-medium text-secondary-400 text-base">Nelson</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">age: </span>
                                                <span className="font-medium text-secondary-400 text-x">25 Years</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">Nationality: </span>
                                                <span className="font-medium text-secondary-400 text-x">USA</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">Freelance: </span>
                                                <span className="font-medium text-secondary-400 text-x">Available</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">Address: </span>
                                                <span className="font-medium text-secondary-400 text-x">New York</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">phone: </span>
                                                <span className="font-medium text-secondary-400 text-x">+3456374647</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">Email: </span>
                                                <span className="font-medium text-secondary-400 text-x">edina@mail.com</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">Skype: </span>
                                                <span className="font-medium text-secondary-400 text-x"> edina.nelson</span>
                                            </li>
                                            <li className="pb-[20px] flex-3 max-w-[50%] text-x m-0">
                                                <span className="opacity-[.8] capitalize text-x">languages: </span>
                                                <span className="font-medium text-secondary-400 text-x"> Spanish, English</span>
                                            </li>
                                        </ul>
                                        <div className="mt-[15px] w-full float-left">
                                            <a href="#" className="rounded-[30px] text-x text-gray-500 font-medium inline-block border-2 border-solid border-gray-200 transition-all duration-[.3s] delay-[0s] pt-2 pb-[7px] px-[35px] hover:text-gray-20 hover:bg-gray-500 hover:border-gray-500">Download CV</a>
                                        </div>
                                    </div>
                                    <div className="relative px-[15px] mt-[50px] flex-2 w-[50%]">
                                        <h3 className="text-3xl mb-[35px] border-b-2 border-dashed border-[#ddd] inline-block pb-[10px] text-gray-500 font-semibold ">Achievements</h3>
                                        <div className="flex flex-wrap mx-[-15px]">
                                            <div className="mt-0 mb-[30px] relative px-[15px] flex-2 w-[50%]">
                                                <div className="pt-[20px] pb-[25px] px-[30px] rounded-[5px] border-[1px] border-solid border-[#ddd]">
                                                    <h3 className={`relative inline-block m-0 text-7xl p-0 font-semibold text-secondary-400 leading-6  after:${afterStyle}`}>06</h3>
                                                    <p className={`relative pl-[45px] text-xll before:${beforeAchievements}`}>years of <span className="text-xll">Experience</span></p>
                                                </div>
                                            </div>
                                            <div className="mt-0 mb-[30px] relative px-[15px] flex-2 w-[50%]">
                                                <div className="pt-[20px] pb-[25px] px-[30px] rounded-[5px] border-[1px] border-solid border-[#ddd]">
                                                    <h3 className={`relative inline-block m-0 text-7xl font-semibold p-0 text-secondary-400 leading-6  after:${afterStyle}`}>97</h3>
                                                    <p className={`relative pl-[45px] text-xll before:${beforeAchievements}`}>Completed <span className="text-xll">Projects</span></p>
                                                </div>
                                            </div>
                                            <div className="mt-0 mb-[30px] relative px-[15px] flex-2 w-[50%]">
                                                <div className="pt-[20px] pb-[25px] px-[30px] rounded-[5px] border-[1px] border-solid border-[#ddd]">
                                                    <h3 className={`relative inline-block m-0 text-7xl font-semibold p-0 text-secondary-400 leading-6 after:${afterStyle}`}>81</h3>
                                                    <p className={`relative pl-[45px] text-xll before:${beforeAchievements}`}>Happy <span className="text-xll">Customers</span></p>
                                                </div>
                                            </div>
                                            <div className="mt-0 mb-[30px] relative px-[15px] flex-2 w-[50%]"> 
                                                <div className="pt-[20px] pb-[25px] px-[30px] rounded-[5px] border-[1px] border-solid border-[#ddd]">
                                                    <h3 className={`relative inline-block m-0 text-7xl font-semibold p-0 text-secondary-400 leading-6  after:${afterStyle}`}>53</h3>
                                                    <p className={`break-all relative pl-[45px] text-xll before:${beforeAchievements}`}>Most awards <span className="text-xll">Winner</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mx-[-15px]">
                                    <div className="relative px-[15px] mt-[50px] flex-2 w-[50%]">
                                        <h3 className="text-gray-500 font-semibold text-3xl mb-[35px] border-b-2 border-dashed border-[#ddd] pb-[10px] inline-block">Experience</h3>
                                        <ul className="m-0 p-0">
                                            <li className={`relative py-0 pr-[20px] pl-[60px] mt-0 mx-0 mb-[50px] after:${listAfter}`}>
                                                <div className="flex items-center justify-center w-[40px] h-[40px] absolute left-0 right-0 leading-10 text-center z-[1] rounded-[50%] text-gray-20 bg-secondary-400">
                                                    <BriefcaseIcon className="h-[20px] w-[20px]"/>
                                                </div>
                                                    <span className="text-secondary-300 text-xs py-[1px] px-[15px] inline-block mb-[12px] rounded-[20px] font-semibold bg-[#eee]">2018 - Present</span>
                                                    <h5 className="text-lg font-semibold mx-0 mt-[7px] mb-[10px] text-secondary-400">
                                                        Web Developer
                                                            <span className={`opacity-[.8] font-semibold text-xs relative pl-[26px] before:${beforeExpEdu}`}>Envato</span>
                                                    </h5>
                                                    <p className="m-0 text-xs leading-7">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                                    adipisicing elit</p>
                                                    
                                                
                                            </li>
                                            <li className={`relative py-0 pr-[20px] pl-[60px] mt-0 mx-0 mb-[50px] after:${listAfter}`}>
                                                <div className="flex items-center justify-center w-[40px] h-[40px] absolute left-0 right-0 leading-10 text-center z-[1] rounded-[50%] text-gray-20 bg-secondary-400">
                                                    <BriefcaseIcon className="h-[20px] w-[20px]"/>
                                                </div>
                                                    <span className="text-secondary-300 text-xs py-[1px] px-[15px] inline-block mb-[12px] rounded-[20px] font-semibold bg-[#eee]">2013 - 2018</span>
                                                    <h5 className="text-lg mx-0 mt-[7px] mb-[10px] font-semibold text-secondary-400">
                                                        UI/UX Designer
                                                        
                                                            <span className={`opacity-[.8] font-semibold text-xs relative pl-[26px] before:${beforeExpEdu}`}>Themeforest</span>
                                                    </h5>
                                                            <p className="m-0 text-xs leading-7">Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
                                                            elit, tempor incididunt</p>
                                                    
                                                
                                            </li>
                                            <li className={`relative py-0 pr-[20px] pl-[60px] mt-0 mx-0 mb-[50px] after:${listAfter}`}>
                                                <div className="flex items-center justify-center w-[40px] h-[40px] absolute left-0 right-0 leading-10 text-center z-[1] rounded-[50%] text-gray-20 bg-secondary-400">
                                                    <BriefcaseIcon className="h-[20px] w-[20px]"/>
                                                </div>
                                                    <span className="text-secondary-300 text-xs py-[1px] px-[15px] inline-block mb-[12px] rounded-[20px] font-semibold bg-[#eee]">2005 - 2013</span>
                                                    <h5 className="text-lg mx-0 mt-[7px] mb-[10px] font-semibold text-secondary-400">
                                                        Consultant
                                                            <span className={`opacity-[.8] font-semibold text-xs relative pl-[26px] before:${beforeExpEdu}`}>Videohive</span>
                                                    </h5>
                                                            <p className="m-0 text-xs leading-7">Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
                                                            elit, sed do eiusmod tempor duntt</p>
                                                    
                                                
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative px-[15px] mt-[50px] flex-2 w-[50%]">
                                        <h3 className="text-gray-500 font-semibold text-3xl mb-[35px] border-b-2 border-dashed border-[#ddd] 
                                        pb-[10px] inline-block">Education</h3>
                                        <ul className="m-0 p-0 list-none">
                                            <li className={`relative py-0 pr-[20px] pl-[60px] mx-0 mt-0 mb-[50px] after:${listAfter}`}>
                                                <div className="flex items-center justify-center w-[40px] h-[40px] absolute left-0 right-0 leading-10 text-center z-[1] rounded-[50%] text-gray-20 bg-secondary-400">
                                                    <BookOpenIcon className="h-[20px] w-[20px]"/>
                                                </div>
                                                    <span className="text-secondary-300 text-xs py-[1px] px-[15px] inline-block mb-[12px] rounded-[20px] font-semibold bg-[#eee]">2015</span>
                                                    <h5 className="text-lg mx-0 mt-[7px] mb-[10px] font-semibold text-secondary-400">
                                                        ENGINEERING DEGREE
                                                        <span className={`opacity-[.8] font-semibold text-xs relative pl-[26px] before:${beforeExpEdu}`}>OXFORD UNIVERSITY</span>
                                                    </h5>
                                                    <p className="m-0 text-xs leading-7">  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                                    adipisicing elit</p>
                                                
                                            </li>
                                            <li className={`relative py-0 pr-[20px] pl-[60px] mx-0 mt-0 mb-[50px] after:${listAfter}`}>
                                                <div className="flex items-center justify-center w-[40px] h-[40px] absolute left-0 right-0 leading-10 text-center z-[1] rounded-[50%] text-gray-20 bg-secondary-400">
                                                    <BookOpenIcon className="h-[20px] w-[20px]"/>
                                                </div>
                                                    <span className="text-secondary-300 text-xs py-[1px] px-[15px] inline-block mb-[12px] rounded-[20px] font-semibold bg-[#eee]">2012</span>
                                                    <h5 className="text-lg mx-0 mt-[7px] mb-[10px] font-semibold text-secondary-400">
                                                        MASTER DEGREE
                                                        <span className={`opacity-[.8] font-semibold text-xs relative pl-[26px] before:${beforeExpEdu}`}>KIEV UNIVERSITY</span>
                                                    </h5>
                                                    <p className="m-0 text-xs leading-7">Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
                                                    elit, tempor incididunt</p>
                                                
                                            </li>
                                            <li className={`relative py-0 pr-[20px] pl-[60px] mx-0 mt-0 mb-[50px] after:${listAfter}`}>
                                                <div className="flex items-center justify-center w-[40px] h-[40px] absolute left-0 right-0 leading-10 text-center z-[1] rounded-[50%] text-gray-20 bg-secondary-400">
                                                    <BookOpenIcon className="h-[20px] w-[20px]"/>
                                                </div>
                                                    <span className="text-secondary-300 text-xs py-[1px] px-[15px] inline-block mb-[12px] rounded-[20px] font-semibold bg-[#eee]">2009</span>
                                                    <h5 className="text-lg mx-0 mt-[7px] mb-[10px] font-semibold text-secondary-400">
                                                        BACHELOR DEGREE 
                                                        <span className={`opacity-[.8] font-semibold text-xs relative pl-[26px] before:${beforeExpEdu}`}>TUNIS HIGH SCHOOL</span>
                                                    </h5>
                                                    <p className="m-0 text-xs leading-7">Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
                                                    elit, sed do eiusmod tempor duntt</p>
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default MoreInformationModal