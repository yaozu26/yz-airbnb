import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  .item-inner {
    padding: 8px;
    cursor: pointer;

    .item-wrap{
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      .cover {
        img {
          width: 100%;
        }
      }

      .bg-cover {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60%;
        background-image: linear-gradient(0, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
      }

      .info {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;
        color: #fff;

        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          font-weight: 700;
          font-size: 20px;
          padding-bottom: 6px;
        }
      }
    }
  }
`