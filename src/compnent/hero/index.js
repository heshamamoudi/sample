import React,{useState} from 'react'
import {HeroContainer,HeroBg,VideoBg,ArrowForward,ArrowRight,HeroBtnWrapper,HeroContent,HeroH1,HeroP} from './heroElements'
import Video from '../../videos/horse.mp4'
import {Button} from '../button'

const HeroSection = () => {
    const [hover,setHover]=useState(false)
    const onHover= ()=>{
        setHover(!hover)
    }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                
            </VideoBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                sample horse website
            </HeroH1>
            <HeroP>
                Sample for desining website
            </HeroP>
            <HeroBtnWrapper>
                <Button smooth={true} duration={500}spy={true} exact='true'offset={-80} primary='true' dark='true'to='services' onMouseEnter={onHover} onMouseLeave={onHover}>click me {hover? <ArrowForward/>:<ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection