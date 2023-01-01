import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Kenneth Chidozie Agbo is a self-thought full Stack engineer with experience in web
        development. He is proficient in modern development technologies,
        including but not limited to HTML, CSS, JavaScript, React JS, Node JS,
        SQL, Mongo DB,GraphQl API, Restful API and version control (Git, GitHub). He is
        innovative, and has also demonstrated exceptional leadership qualities
        as a teacher and training instructor. He is Keen on taking on new
        opportunities and challenges in the ICT sector.
      </SectionText>
      <Button target="_blank" onClick={() => (window.location = 'https://github.com/doziem')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
