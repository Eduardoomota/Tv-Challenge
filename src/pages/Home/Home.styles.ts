import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0 0;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 50px auto 0;
  }
`;

export const Details = styled.div`
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    margin: 50px 0 0;
  }

  p {
    color: ${({ theme }) => theme.colors.white.primary};
    line-height: 1.4rem;

    @media (max-width: 370px) {
      font-size: 0.9rem;
    }
  }
`;

export const ShowImageBox = styled.div`
  position: relative;
  overflow: hidden;
  border: 6px solid #fff;

  @media (max-width: 600px) {
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 460px) {
    width: 70%;
  }

  @media (max-width: 370px) {
    width: 80%;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const ShowImage = styled.img`
  display: block;
  height: 100%;
  transition: all 0.3s;

  @media (max-width: 600px) {
    width: 100%;
    object-fit: cover;
  }
`;

export const DetailsTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white.primary};
  margin-bottom: 20px;
`;
