import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 75%;
  margin: 100px auto;

  @media (max-width: 992px) {
    max-width: 100%;
  }

  @media (max-width: 370px) {
    margin: 50px auto;
  }

  td,
  th {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    text-align: left;
    padding: 8px;
    background: #202024;

    @media (max-width: 370px) {
      font-size: 0.9rem;
    }
  }

  a,
  td {
    color: #b3b3b3;
  }
`;

export const TableTitle = styled.th`
  color: ${({ theme }) => theme.colors.white.primary};
`;

export const TableRow = styled.tr`
  th:last-child,
  td:last-child {
    text-align: center;

    @media (max-width: 460px) {
      width: 40%;
    }
  }
`;

export const Episode = styled.td`
  color: ${({ theme }) => theme.colors.black.secondary};
`;
