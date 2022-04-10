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
                We Aim to Educate People On Horses.
            </HeroH1>
            <HeroP>
                As we know not many of us have the rich knowledge of how important our horses are, we came in terms with the most important points you should know about your horse.
            </HeroP>
            <HeroBtnWrapper>
                <Button smooth={true} duration={500}spy={true} exact='true'offset={-80} primary={true} dark={false} to='services' onMouseEnter={onHover} onMouseLeave={onHover}>Join Our Community {hover? <ArrowForward/>:<ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection