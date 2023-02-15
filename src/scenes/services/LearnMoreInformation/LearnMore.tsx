import closeIcon from "@/assets/icons/close-icon.svg"

type Props = {
    children: React.ReactNode
    onClose: React.MouseEventHandler<HTMLElement>
}

const LearnMore = ({children, onClose}: Props) => {

    const hanldeModalContainer = (e:any) => e.stopPropagation()
  return (
    <div onClick={onClose}>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.85)] z-[99]">
            <div onClick={hanldeModalContainer} className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] border-none bg-gray-20 overflow-initial rounded outline-none z-999">
                <div>
                    <button onClick={onClose} className="bg-transparent border-none flex w-[45px] h-[45px] absolute z-[4] right-[-50px] top-[-32px]">
                            <img src={closeIcon} alt="close icon" className="w-[45px] h-[45px] cursor-pointer absolute invert transition-all duration-[0.3s] delay-[0s]"/>
                    </button>
                    <div className="h-[75vh] overflow-y-auto w-[1070px]">
                        <div className="p-[50px] relative w-full h-full overflow-hidden float-left overflow-y-scroll">
                            <div className="w-full h-auto">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LearnMore