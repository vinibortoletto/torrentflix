import React from 'react';
import { DividingLine } from '../../../components/DividingLine/DividingLine.styles';
import Subtitle from '../../../components/Subtitle/Subtitle.styles';
import Title from '../../../components/Title/Title.styles';
import { useData } from '../../../contexts/Data';
import { Container, Image } from './OurStory.styles';

export default function OurStory() {
  const { language, data } = useData();
  const { ourStory } = data;

  return (
    <>
      {ourStory.map((section, index) => (
        <Container key={index}>
          <section className={section.class}>
            <div className="text">
              <Title>{section.title}</Title>
              <Subtitle>{section.subtitle}</Subtitle>
            </div>

            <div>
              <Image src={section.img} alt={section.alt} />
            </div>
          </section>
          <DividingLine />
        </Container>
      ))}
    </>
  );
}
