import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from '../img/design.svg';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"HTML"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"CSS"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"React JS"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Node JS"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Express"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"PostgreSQL"} progress={"60%"} width={"60%"} />



      </div>
    <div className='services-container'>
      <ServicesSection image={design} title={'Web Design'} text={'Lorem ipsum dolor sit amet, consectetur adiposcing elit. Aenean nec maxiomus arcu.'}/>

      <ServicesSection image={design} title={'Web Design'} text={'Lorem ipsum dolor sit amet, consectetur adiposcing elit. Aenean nec maxiomus arcu.'}/>   
      <ServicesSection image={design} title={'Web Design'} text={'Lorem ipsum dolor sit amet, consectetur adiposcing elit. Aenean nec maxiomus arcu.'}/>
      

    </div>
    </div>
  );
}

export default AboutPage;




