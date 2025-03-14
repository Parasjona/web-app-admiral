import { skeletonAnimationMixin, PseudoText } from '@admiral-ds/react-ui';
import styled from 'styled-components';

export const SkeletonComponent = styled(PseudoText)`
  width: 100%;
  ${skeletonAnimationMixin}
`;
