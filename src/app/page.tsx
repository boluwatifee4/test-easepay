"use client";
import Image from "next/image";
import headerbanner from "../../public/headbanner.png";
import logo from "../../public/svg.png";
import slanty from "../../public/slanty.png";
import dashboard from "../../public/dashboard.png";
import phone1 from "../../public/phone1.png";
import phone2 from "../../public/phone2.png";
import phone3 from "../../public/phone3.png";
import { HeroWrapper, NavWrapper, UlFlexCenter, FlexCenter, AnimatedText, DivWithBackground } from "./styledd";
import React from "react";
export default function Home() {
  const [TextChangeAnimation, setTextChangeAnimation] = React.useState<string>(
    "No Credit Check"
  );




  // function for animation text

  const textChange = () => {
    const text = [
      "No Credit Check",
      "Free Wires",
      "Unlimited Rewards",
      "Zero Fees",
    ];
    let count:number = 0;
    setInterval(() => {
      setTextChangeAnimation(text[count]);
      count++;
      if (count === text.length) {
        count = 0;
      }
    }, 3000);
  };
  
  React.useEffect(() => {
    textChange();

  }, []);
  return (
    <section>
      <div className="banner">
        <Image src={headerbanner} alt="headerbanner" />

        <HeroWrapper>
          <FlexCenter>
            <NavWrapper>
              <div className="logo">
                <div className="flex items-center">
                  <Image src={logo} alt="logo" />
                  <h1 className="text-white">Winden</h1>
                </div>
              </div>
              <div className="navLinks">
                <UlFlexCenter>
                  <li className="text-white px-5">Use Cases</li>
                  <li className="text-white px-5">Products</li>
                  <li className="text-white px-5">Company</li>
                  <li className="text-white px-5 ">support</li>
                </UlFlexCenter>
              </div>
              <div className="callToAction">
                <FlexCenter>
                  <button className="  px-5 py-2 rounded-full">Login</button>
                  <button className="  px-5 py-2 rounded-full">Sign up</button>
                </FlexCenter>
              </div>
            </NavWrapper>
          </FlexCenter>

          <FlexCenter>
            <section className="hero my-20 w-3/5">
              <div className="heroText">
                <h1 className="text-white text-5xl font-bold">
                  Business banking with
                  <br />
                  <AnimatedText>{TextChangeAnimation}</AnimatedText>
                </h1>
                <p className="text-white text-xl my-4">
                  Thousands of entrepreneurs bank on Winden to start or grow
                  their business. Open an account in under 3 minutes.
                </p>
                <div className="heroButtons my-4">
                  <button className="bg-[#6936F5] px-5 py-2 rounded-SM">
                    Get started
                  </button>
                </div>
              </div>

              <section>
                <div className="heroImage flex items-end justify-end">
                    <Image src={slanty} alt="slanty" className="w-[30%]" />
                </div>
              </section>
            </section>
          </FlexCenter>
        </HeroWrapper>

        <div className="white-bg-section">
            <FlexCenter>
              <Image src={dashboard} className="w-[70%] mt-[-10rem]" alt="dashboard" />

            </FlexCenter>
            <DivWithBackground>
                <FlexCenter>
                  <Image className="w-[20%] mx-[-5rem] mt-[-10rem]" src={phone1} alt="phone1"/>
                  <Image  className="w-[20%] mx-[-5rem] mt-[-10rem]" src={phone2} alt="phone2"/>
                  <Image className="w-[20%] mx-[-5rem] mt-[-10rem]" src={phone3} alt="phone3"/>
                  
                </FlexCenter>
              </DivWithBackground>
        </div>
      </div>
    </section>
  );
}
