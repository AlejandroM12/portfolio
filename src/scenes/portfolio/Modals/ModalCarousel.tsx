import closeIcon from "@/assets/icons/close-icon.svg"


type Props = {
    number: string
    title: string
    descriptionFirst:string
    descriptionSecond: string
    client: string
    category: string
    data: string
    link: string
    onClose: React.MouseEventHandler<HTMLElement>
    isOpen?: boolean;
    
}
const ModalCarousel = ({isOpen, onClose, number, title, descriptionFirst, descriptionSecond, client, category, data,link}: Props) => {
    const hanldeModalContainer = (e:any) => e.stopPropagation()


  return (
    <div onClick={onClose}>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.85)] z-[99]">
            <div onClick={hanldeModalContainer} className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] border-none bg-gray-20 overflow-initial rounded outline-none z-999">
                <div>
                    <button onClick={onClose} className="bg-transparent border-none flex w-[45px] h-[45px] absolute z-[4] right-[-50px] top-[-32px]">
                            <img src={closeIcon} alt="close icon" className="w-[45px] h-[45px] cursor-pointer absolute invert transition-all duration-[0.3s] delay-[0s]"/>
                    </button>
                    <div className="h-[75vh] overflow-y-auto w-[900px]">
                        <div className="p-[50px] relative w-full h-full overflow-hidden float-left overflow-y-scroll">
                            <div className="relative h-[450px] mb-[20px] bg-[#efefef] rounded-md">
                            <div style={{ backgroundImage: `url(src/assets/portfolio/portfolio-image-${number}.jpg)`}} className={`absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-center bg-cover `}></div>
                            </div>
                            <div className="flex flex-wrap my-0 mx-[-15px]">
                                <div className="flex-4 max-w-[75%] py-0 px-[15px]">
                                    <h2 className="mb-[10px] font-semibold text-1xl text-gray-500">{title}</h2>
                                    <p className="mb-[22px] text-base pr-[10%]">{descriptionFirst}</p>
                                    <p className="mb-[22px] text-base pr-[10%]">{descriptionSecond}</p>
                                </div>
                                <div className="flex-5 max-w-[25%] py-0 px-[15px] mt-[20px]">
                                    <ul className="list-none m-0">
                                        <li className="mb-[10px]">
                                            <h5 className="text-base text-gray-500 font-semibold">Client</h5>
                                            <span className="text-[14px] leading-[1.3] inline-block">{client}</span>
                                        </li>
                                        <li className="mb-[10px]">
                                            <h5 className="text-base text-gray-500 font-semibold">Category</h5>
                                            <span className="text-[14px] leading-[1.3] inline-block">{category}</span>
                                        </li>
                                        <li className="mb-[10px]">
                                            <h5 className="text-base text-gray-500 font-semibold">Data</h5>
                                            <span className="text-[14px] leading-[1.3] inline-block">{data}</span>
                                        </li>
                                        <li className="mb-[10px]">
                                            <h5 className="text-base text-gray-500 font-semibold">Link</h5>
                                            <span className="text-[14px] leading-[1.3] inline-block">{link}</span>
                                        </li>
                                        <li className="mb-[10px]">
                                            <h5 className="text-base text-gray-500 font-semibold">Share</h5>
                                            <ul className="my-0 mx-[-7px] flex items-center list-none">
                                                <li className="m-0">
                                                    <a 
                                                    className="text-gray-200 flex py-0 px-[7px] hover:text-[#555] transition-all duration-300 hover:translate-y-[-3px]"
                                                    href="https://www.facebook.com/" target="_blank">
                                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                                    </a>
                                                </li>
                                                <li className="m-0">
                                                    <a 
                                                    className="text-gray-200 flex py-0 px-[7px] hover:text-[#555] transition-all duration-300 hover:translate-y-[-3px]"
                                                    href="https://twitter.com/" target="_blank">
                                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                                    </a>
                                                </li>
                                                <li className="m-0">
                                                    <a className="text-gray-200 flex py-0 px-[7px] hover:text-[#555] transition-all duration-300 hover:translate-y-[-3px]" href="https://www.instagram.com/" target="_blank">
                                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                                    </a>
                                                </li>
                                                <li className="m-0">
                                                    <a className="text-gray-200 flex py-0 px-[7px] hover:text-[#555] transition-all duration-300 hover:translate-y-[-3px]" href="https://dribbble.com/" target="_blank">
                                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="text-gray-200 flex py-0 px-[7px] hover:text-[#555] transition-all duration-300 hover:translate-y-[-3px]" href="https://www.linkedin.com/feed/" target="_blank">
                                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                                    </a>
                                                </li>
                                            </ul>
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

export default ModalCarousel