import React from 'react';
import { t } from '@/i18n';
import styled from 'styled-components/native';
import { colors, layout, images } from '@/constants';

const TitleContainer = styled.ImageBackground`
  height: ${layout.statusBarHeight + (layout.screenHeight / (layout.scale() * 3.3))};
  background-color: ${colors.yellow()};
  width: ${layout.screenWidth};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  letter-spacing: ${layout.scale() * 2};
  margin-top: ${layout.statusBarHeight};
  font-size: ${layout.scale() * 36};
  color: ${colors.black()};
  align-self: center;
  font-weight: 700;
`;

export default React.memo(() => (
  <TitleContainer source={images.boxTitle}>
    <Title>{t('barbecueCalendar')}</Title>
  </TitleContainer>
));
