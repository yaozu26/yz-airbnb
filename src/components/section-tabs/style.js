import styled from "styled-components";

export const TabsWrapper = styled.div`
  padding: 8px 0;
  .item {
    flex-shrink: 0;
    /* box-sizing: content-box; */
    flex-basis: 120px;
    margin-right: 16px;
    padding: 14px 16px;
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 3px;
    cursor: pointer;
    ${props => props.theme.mixin}
  }
  .active {
    color: #fff;
    background-color: #00848A;
  }
`