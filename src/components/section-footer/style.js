import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    font-size: 17px;
    color: ${props => props.textColor};
    font-weight: 700;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }

    .text {
      padding-right: 4px;
    }
  }
`