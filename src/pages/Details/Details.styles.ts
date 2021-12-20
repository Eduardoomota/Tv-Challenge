import styled from 'styled-components';

export const Details = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 50px 0;
  }

  p {
    max-width: 75%;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.colors.white.primary};
    line-height: 1.4rem;

    @media (max-width: 768px) {
      max-width: 100%;
      font-size: 0.95rem;
    }

    @media (max-width: 400px) {
      font-size: 0.9rem;
    }
  }

  a {
    margin-top: 50px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.white.primary};
    color: ${({ theme }) => theme.colors.black.primary};
    border-radius: 8px;
    transition: all 0.3s;

    @media (max-width: 400px) {
      margin-top: 30px;
      font-size: 0.9rem;
    }

    &:hover {
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.white.secondary};
    }
  }
`;

export const DetailsImageBox = styled.div`
  position: relative;
  overflow: hidden;
  border: 6px solid #fff;
  max-width: 75%;
  height: 400px;

  @media (max-width: 992px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    height: auto;
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

  @media (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;

export const DetailsTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white.primary};
  margin: 40px 0;

  @media (max-width: 500px) {
    margin: 40px 0 20px;
    font-size: 1.9rem;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
