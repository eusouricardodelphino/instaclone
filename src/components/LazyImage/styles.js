import styled from 'styled-components';

export const Small = styled.ImageBackground`
    width: 100%;
    aspect-ratio: ${props => String(props.ratio)};
`;

export const Original = styled.Image`
    width: 100%;
    aspect-ratio: ${props => String(props.ratio)};
`;
