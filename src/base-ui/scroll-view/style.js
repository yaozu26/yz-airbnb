import styled from "styled-components";

export const ScrollWrapper = styled.div`
  position: relative;
  .left, .right {
    position: absolute;
    z-index: 9;
    top: 50%;
    padding: 6px;
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .14);
    background-color: #fff;
    cursor: pointer;
  }
  .left {
    left: 0;
    transform: translate(-50%, -50%);
  }
  .right {
    right: 0;
    transform: translate(50%, -50%);
  }

  .content {
    width: 100%;
    overflow: hidden;
    .slot {
      display: flex;
      transition: transform 300 ease;
    }
  }
`