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
                        links title
                      </FooterLinkTitle>
                      <FooterLink to='/anotherpage'>link1</FooterLink>
                        <FooterLink to='/anotherpage'>link2</FooterLink>
                        <FooterLink to='/anotherpage'>link3</FooterLink>
                        
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle>
                        links2 title2
                      </FooterLinkTitle>
                      <FooterLink to='/anotherpage'>link11</FooterLink>
                        <FooterLink to='/anotherpage'>link22</FooterLink>
                        <FooterLink to='/anotherpage'>link33</FooterLink>
                  </FooterLinkItems>
                  
              </FooterLinksWrapper>
             
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>Sample</SocialLogo>
              <WebsiteRights>Sample {new Date().getFullYear()} all rights reserved to hesham amoudi</WebsiteRights>
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