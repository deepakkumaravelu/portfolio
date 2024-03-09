import React from 'react';
import { ScrollContainer, ScrollElement } from 'react-scroll';
import Slider from 'react-slick';

// import 'react-scroll/modules/components/Animated.scss';
// import 'react-scroll/modules/components/Elements.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LeftSkills = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      {/* Add your skills as list items */}
      <div>
        <h3>Skill 1</h3>
      </div>
      <div>
        <h3>Skill 2</h3>
      </div>
      {/* Add more as needed */}
    </Slider>
  );
};

const RightProjects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      {/* Add your projects as list items */}
      <div>
        <h3>Project 1</h3>
      </div>
      <div>
        <h3>Project 2</h3>
      </div>
      {/* Add more as needed */}
    </Slider>
  );
};

const Center = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
      <h1 style={{ fontSize: '3rem' }}>Deepak</h1>
      <a href="https://www.fiverr.com/your_fiverr_profile_link" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Fiverr Profile</a>
      <a href="your_other_link" style={{ color: 'white', textDecoration: 'none' }}>Other Link</a>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#1a1a1a', color: 'white', padding: '0 2rem' }}>
      <ScrollContainer>
        <ScrollElement name="skills">
          <LeftSkills />
        </ScrollElement>
      </ScrollContainer>
      <Center />
      <ScrollContainer>
        <ScrollElement name="projects">
          <RightProjects />
        </ScrollElement>
      </ScrollContainer>
    </div>
  );
};

export default App;