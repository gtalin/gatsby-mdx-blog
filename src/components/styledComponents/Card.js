import styled from 'styled-components';

const Card = styled.div`
  background: var(--cardColor);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-card);
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--primary-500);
    background: linear-gradient(
      #d367c1 10%,
      #dedf40 25%,
      #62cb5c 50%,
      #00bbcb 75%,
      #ab79d6 90%
    );
    position: absolute;
    z-index: -1;
    top: 0;
    left: -1px;
    border-radius: var(--borderRadius);
    transition: var(--transition);
  }

  &:hover {
    ::before {
      transform: scale(1.03);
      left: 0;
    }
  }
`;

export default Card;
