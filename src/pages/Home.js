import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Monitor from '../images/monitor.svg'
import Cloud from '../images/cloud.svg'
export default function Home() {
    return (
        <div className='flex flex-row flex-grow items-center'>
            <span className='basis-1/2 text-center text-6xl text-white uppercase font-bold'>
                Making the <span className='text-cyan-400'>perfect</span> website for the <span className='text-cyan-400'>perfect</span> price.
            </span>
            <div className='md:basis-1/2 invisible md:visible self-stretch'>
                <MouseParallaxContainer className='h-full w-full'>
                    <MouseParallaxChild className='absolute inset-0 top-[20%] z-10' factorX={0.03} factorY={0.05} >
                        <img src={Monitor} className='scale-50' alt="" />
                    </MouseParallaxChild>
                    <MouseParallaxChild className='absolute inset-0 top-[20%] left-1/3 z-0' factorX={0.01} factorY={0.015} >
                        <img src={Cloud} className='scale-100' alt="" />
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
        </div>
    )
}