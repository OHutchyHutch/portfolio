import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Typewriter from "../components/typewriter";


export default function About() {
    return (
        <div className='flex justify-center flex-grow items-center'>
            <span className='basis-1/2 text-center text-3xl md:text-6xl text-light uppercase font-bold'>
                I AM <Typewriter srcStringArr={['Owen', 'A developer', 'outgoing', 'always learning', 'a friend']} timeoutValue={200} />
                <br />
                <span className='text-2xl md:text-3xl leading-tight tracking-tight normal-case font-normal'>
                    Ever since I started my coding adventure in August 2018 I have been in love with the field. Graduating with a Bachelor's
                    in Computer Science from Georgia State University in December 2021, I have no intentions of slowing down.
                </span>
            </span>
            <div className='md:basis-1/2 invisible md:visible self-stretch text-center'>
                <MouseParallaxContainer className='h-full w-full'>
                    <MouseParallaxChild className='absolute inset-0 top-[20%] z-10' factorX={0.03} factorY={0.05} >
                        {/* <img src={MePhoto} className='scale-50' alt="" /> */}
                        <span>I'm going to put something here and it will be really cool, I promise.</span>
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
        </div>
    )
}