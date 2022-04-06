import React from "react";
import { Button } from "../button";
import {
  InfoWrapper,
  Img,
  ImgWrap,
  BtnWrap,
  Column1,
  Column2,
  Heading,
  InfoContainer,
  InfoRow,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./infoElements";


const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  LightTextDesc,
  dark,
  primary
}) => {

  return (
    
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home" primary={primary? 1:0} dark={dark? 1:0} smooth={true} duration={500}spy={true} exact='true'offset={-80}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    
  );
};

export default Info;
