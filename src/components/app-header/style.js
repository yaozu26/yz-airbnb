import styled from "styled-components";

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.isAlpha ? "" : "#fff"};
  }

  .content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 80px;
    height: 80px;
    background-color: ${props => props.isAlpha ? "" : "#fff"};
  }

  .cover-bg {
    position: fixed;
    z-index: 999;
    top: 180px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
  }
`

export const SearchArea = styled.div`
  transition: height 300ms ease;
  height: ${props => props.isSearchBox ? '100px' : 0};
`