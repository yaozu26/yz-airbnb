import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  height: 50px;
  padding: 0 80px;
  border-top: 1px solid ${props => props.theme.color.borderColor};

  display: flex;
  align-items: center;

  .item {
    flex-shrink: 0;
    margin-right: 16px;
    padding: 8px 16px;
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