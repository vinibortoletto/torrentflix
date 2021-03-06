import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.footer`
  color: ${vars.color.lightGrey};
  padding: 4rem ${vars.sidePadding.small} 2rem ${vars.sidePadding.small};

  h1 {
    font-weight: normal;
  }

  ${media('laptop-l')} {
    padding: 4rem 25vw 2rem 25vw;
  }

  ${media('4k')} {
    padding: 4rem 35vw 2rem 35vw;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

export const Navigation = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${media('tablet')} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  li {
    margin-bottom: 0.7rem;
  }

  a {
    font-size: ${vars.fontSize.small};
  }
`;

export const Select = styled.div`
  margin-top: 2rem;
  position: relative;

  &::before {
    content: '🌐';
    position: absolute;
    top: 1rem;
    left: 1rem;
    filter: grayscale(1) contrast(2);
    pointer-events: none;
  }

  &::after {
    content: '▼';
    position: absolute;
    top: 1rem;
    left: 8.7rem;
    transform: scaleX(1.5) scale(0.6);
    pointer-events: none;
  }

  select {
    padding: 1rem 2rem 1rem 3rem;
    border: 1px solid rgba(117, 117, 117, 0.3);
    border-radius: ${vars.borderRadius.small};
    color: ${vars.color.lightGrey};
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;

  .strong {
    color: ${vars.color.red};
    font-weight: bold;
  }

  p {
    margin-top: 1rem;
    font-size: ${vars.fontSize.small};
  }
`;
