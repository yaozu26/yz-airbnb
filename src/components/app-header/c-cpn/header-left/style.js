import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  .info {
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.primary};
    .title {
      padding-left: 4px;
      font-size: 18px;
    }
  }
`