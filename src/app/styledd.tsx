import styled from "styled-components";
// import slanty from '../../public/slanty.png';

let slanty = "../../public/seeHow.png";
export const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
  width: 60%;
  margin: 5px 0;
`;

export const HeroWrapper = styled.div`
  background: url(hero-background.png),
    linear-gradient(90deg, #060a23 0%, #07041e 25%, #07041e 75%, #060a23 100%);
`;

export const UlFlexCenter = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimatedText = styled.h1`
  background: linear-gradient(95deg, #9ee8fa 0%, rgba(255, 255, 255, 0) 16%),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(135deg, #a088ff 0%, #a088ff 14%, #37d7ff 81%, #37d7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 95px;
  margin: 10px 0;
`;

export const DivWithBackground = styled.div`
  background: url(${slanty});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 13rem;
`;
