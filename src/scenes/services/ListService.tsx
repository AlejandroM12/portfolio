import Tilt from 'react-parallax-tilt';

type Props = {
    image: string
    title1: string
    title2: string
    onClick: React.MouseEventHandler<HTMLElement>
    id: string; 
}

const ListService = (props: Props) => {

  return (
    <li className='my-0 mt-0 mb-[30px] pl-[30px] cursor-pointer relative w-[25%]'>
        <Tilt
            tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={800} 
            
        >
            <div onClick={props.onClick} className={`tilt-content pr-[40px] w-full h-full relative bg-gray-20 pt-[50px] pb-[45px] pl-[55px] rounded-md`}>
                <div className='tilt-content-child relative z-[5]'>
                    <img src={props.image} alt="icon" className='w-[50px] h-[50px] mb-[25px] transition-all ease-in-out duration-[.3s] delay-[0s] '/>
                    <div>
                        <h3 className='mb-[20px] text-base font-semibold break-all text-gray-500 transition-all'>
                            {props.title1}
                        </h3>
                        <h3 className='mb-[20px] text-base font-semibold text-gray-500 transition-all'>
                            {props.title2}
                        </h3>
                    </div>
                    <div onClick={props.onClick} className='spanBeforeAfter text-gray-200 text-lg leading-[30px] inline-block relative transition-all duration-[.3s] delay-[0s'>
                        Learn More
                        <span className={`inline-block w-[10px] top-[50%] absolute h-[2px] rounded-[50px] ml-[14px] translate-y-[-50%] bg-gray-200`}></span>
                    </div>
                </div>
            </div>
        </Tilt>
    </li>
  )
}

export default ListService