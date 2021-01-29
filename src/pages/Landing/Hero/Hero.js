import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { Button } from "../../../components/Button/Button.styles";
import Input from "../../../components/Input/Input";
import { landingData } from "../../../data";
import heroImg from "../../../images/misc/hero-bg.jpg";
import { Background, Container, Email, Title } from "./Hero.styles";

export default function Hero() {
  return (
    <Container>
      <Background src={heroImg} alt="a display of filmes" />
      <Title>
        <h1>{landingData.hero.title}</h1>
        <h2>{landingData.hero.subtitle}</h2>
      </Title>

      <Email>
        <h3>{landingData.hero.emailText}</h3>
        <form>
          <Input label="Email address" name="email" type="email" required />
          <Button type="submit" big>
            GET STARTED
            <ArrowForwardIosIcon />
          </Button>
        </form>
      </Email>
    </Container>
  );
}
