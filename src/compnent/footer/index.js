import React from 'react'
import {FaFacebook, FaInstagram,FaTwitter} from 'react-icons/fa'
import {SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights, FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './footerEliments';

const Footer = () => {
  return (
  <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle>
                      General info
                      </FooterLinkTitle>
                      <FooterLink to='/anotherpage'>Riders</FooterLink>
                        <FooterLink to='/anotherpage'>Trainers</FooterLink>
                        <FooterLink to='/anotherpage'>Owners</FooterLink>
                        
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle>
                        Company
                      </FooterLinkTitle>
                      <FooterLink to='/anotherpage'>About us</FooterLink>
                        <FooterLink to='/anotherpage'>Contact us</FooterLink>
                  </FooterLinkItems>
                  
              </FooterLinksWrapper>
             
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>Horse.Culture</SocialLogo>
              <WebsiteRights>Horse Culture {new Date().getFullYear()} Ⓒ Horse Culture</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com' target="_blank" aria-label='Facbook'><FaFacebook/></SocialIconLink>
              <SocialIconLink href='https://www.instagram.com' target="_blank" aria-label='Instagram'><FaInstagram/></SocialIconLink>
              <SocialIconLink href='https://www.twitter.com' target="_blank" aria-label='Twitter'><FaTwitter/></SocialIconLink>

            </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
  </FooterContainer>
  )
}

export default Footer