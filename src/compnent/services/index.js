import React from 'react'
import icon1 from '../../images/icon1.jpg'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import { ServiceP,ServicesCard,ServicesContainer,ServicesH1,ServicesH2,ServicesIcon,ServicesWrapper } from './serviceElements'
const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
            {/* card 1 */}
            <ServicesCard>
            <ServicesIcon src={icon1}/>
            <ServicesH2>
                Courses
            </ServicesH2>
            <ServiceP>We teach all the basic foundementals for you to starts riding a horse</ServiceP>
            </ServicesCard>
            {/* card 2 */}
            <ServicesCard>
            <ServicesIcon src={icon1}/>
            <ServicesH2>
                Third party horse owners
            </ServicesH2>
            <ServiceP>We are able to find you the most suitable horse to purchase from a variety of owners</ServiceP>
            </ServicesCard>
            {/* card 3 */}
            <ServicesCard>
            <ServicesIcon src={icon1}/>
            <ServicesH2>
                Purchase a horse
            </ServicesH2>
            <ServiceP>We are able to offer you the best offers and the best horses depending on your need.</ServiceP>
            </ServicesCard>
        </ServicesWrapper>
        
        </ServicesContainer>
  )
}

export default Services