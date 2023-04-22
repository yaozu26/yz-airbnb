import styled from "styled-components";

export const RoomsWrapper = styled.div`
  margin-top: 50px;
  position: relative;
  .room-list {
    display: flex;
    flex-wrap: wrap;
  }

  .cover-loading {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .7);
  }
`