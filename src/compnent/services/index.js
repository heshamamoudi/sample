import React from 'react'
import icon1 from '../../images/icon1.jpg'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import { ServiceP,ServicesCard,ServicesContainer,ServicesH1,ServicesH2,ServicesIcon,ServicesWrapper } from './serviceElements'
const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Example h1</ServicesH1>
        <ServicesWrapper>
            {/* card 1 */}
            <ServicesCard>
            <ServicesIcon src={icon1}/>
            <ServicesH2>
                example h2
            </ServicesH2>
            <ServiceP>card 1</ServiceP>
            </ServicesCard>
            {/* card 2 */}
            <ServicesCard>
            <ServicesIcon src={icon1}/>
            <ServicesH2>
                example h2
            </ServicesH2>
            <ServiceP>card 2</ServiceP>
            </ServicesCard>
            {/* card 3 */}
            <ServicesCard>
            <ServicesIcon src={icon1}/>
            <ServicesH2>
                example h2
            </ServicesH2>
            <ServiceP>card 3</ServiceP>
            </ServicesCard>
        </ServicesWrapper>
        
        </ServicesContainer>
  )
}

export default Services