import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Main = styled.main`
  .row-wrapper {
    margin-top: ${vars.size.header.mobile};

    ${media('tablet')} {
      margin-top: ${vars.size.header.tablet};
    }
  }
`;
