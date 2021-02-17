import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 0.2rem;
  overflow: hidden;

  li {
    position: relative;
    cursor: pointer;

    &:hover {
      img {
        filter: brightness(0.3);
      }

      span {
        opacity: 1;
      }
    }
  }

  span {
    width: 90%;

    position: absolute;
    bottom: 10%;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);

    text-align: center;
    font-size: ${vars.fontSize.small};
    opacity: 0;
  }

  .overlay {
    width: 15rem;
    height: 8rem;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, transparent);
  }

  img {
    width: 15rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 0.3rem;
  }

  span,
  img {
    transition: 0.2s ease;
  }
`;
