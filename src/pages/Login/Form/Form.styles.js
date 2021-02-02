import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';
import { media } from '../../../helpers/styles/mixins';

export const Form = styled.form`
  padding: 0 ${vars.size.small};
  margin-bottom: 2rem;

  .input-wrapper {
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    font-weight: bold;
  }
`;

export const Helper = styled.div`
  display: flex;
  justify-content: space-between;

  label,
  a {
    font-size: ${vars.fontSize.small};
    color: ${vars.color.lightGrey};
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .remember-login {
    cursor: pointer;
    position: relative;

    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      background-color: ${vars.color.lightGrey};
      position: absolute;
      left: 0;
      top: 0.4rem;
      border-radius: 0.2rem;
    }

    &::after {
      content: '✔';
      position: absolute;
      left: 0;
      top: 0.2rem;
      color: ${vars.color.black};
    }

    label {
      padding-left: 1.5rem;
      pointer-events: none;
    }
  }
`;