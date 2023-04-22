import styled from "styled-components";

export const IndicatorWrapper = styled.div`

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  .wrap {
    width: ${props => props.wrapWidth}px;
    overflow: hidden;
    .dots-list {
      display: flex;
      align-items: center;
      transition: all 300ms ease;
    }
  }
`