import React from 'react'
import LearnMore from './LearnMore'

type Props = {
    isOpen: boolean
    onClose: React.MouseEventHandler<HTMLElement>
}

const BrandingDesign = ({ isOpen, onClose }: Props) => {
  return (
    <LearnMore onClose={onClose}>
        <div className="relative h-[450px] mb-[20px] bg-[#efefef] rounded-md overflow-hidden max-h-[450px]">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-center bg-cover bg-services-3"></div>
        </div>
        <div>
            <h3 className="text-1xl text-[#0f172a] font-bold mb-[15px]">Branding & Design Breakdown In Cinema 4D</h3>
            <p className="mb-[30px] text-base font-normal">Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do, provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
            <p className="mb-[30px] text-base font-normal">Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember them when it is all over.</p>
            <h3 className="text-1xl text-[#0f172a] font-bold mb-[15px]">What Is Branding & Design?</h3>
            <p className="mb-[30px] text-base font-normal">Nullam blandit constituto eam ne, te nam ignota vituper.atoribus. Malis cetero quem saipe, prou thendrerit voluptaria.</p>
                <div className="w-full mb-[30px] pl-[20px]">
                    <ul className="m-0">
                        <li className="mx-0 mt-0 mb-[15px] relative pl-[20px] w-full">
                            <p className="mb-0 text-base before:absolute before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gray-200 before:left-0 backdrop:top-[13px]">Email is a crucial channel in any marketing.</p>
                        </li>
                        <li className="mx-0 mt-0 mb-[15px] relative pl-[20px] w-full">
                            <p className="mb-0 text-base before:absolute before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gray-200 before:left-0 backdrop:top-[13px]">Curious what to say? How to say it?</p>
                        </li>
                        <li className="mx-0 mt-0 mb-[15px] relative pl-[20px] w-full">
                            <p className="mb-0 text-base before:absolute before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-gray-200 before:left-0 backdrop:top-[13px]">Whether you’re kicking off a new campaign.</p>
                        </li>
                    </ul>
                        </div>
                            <p className="mb-[30px] text-base">Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be.</p>
                        </div>
    </LearnMore>
  )
}

export default BrandingDesign