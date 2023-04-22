import styled from "styled-components";

export const RoomWrapper = styled.div`
  /* 修改Rate样式 */
  .ant-rate-star:not(:last-child) {
    margin: 0;
  }

  flex-shrink: 0;
  width: ${props => props.itemWidth};
  box-sizing: border-box;
  cursor: pointer;
  .item-inner {
    padding: 8px;

    /* swiper轮播样式 */
    .swiper {
      position: relative;
      &:hover .control{
        opacity: 1;
        transition: all 2000 ease;
      }
      .control {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 2000 ease;
        border-radius: 3px;
        overflow: hidden;
        
        .btn {
          position: absolute;
          z-index: 9;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 50px;
          top: 0;
          color: #fff;
          background-image: linear-gradient(90deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0));
        }
        .left {
          left: 0;
        }
        .right {
          right: 0;
          transform: rotateY(180deg);
        }
      }

      .indicator {
        .item {
          flex-shrink: 0;
          margin: 0 2px;
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
        }
        .active {
          background-color: #555;
          width: 8px;
          height: 8px;
        }
      }
    }

    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 0 0;
      border-radius: 4px;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .info {
      .title {
        margin: 10px 0;
        font-size: 12px;
        color: ${props => props.verifyColor};
        font-weight: 700;
      }
      
      .desc {
        font-weight: 700;
        font-size: 16px;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .price {
        margin: 8px 0;
      }

      .bottom {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        font-size: 10px;
        .count {
          padding-left: 2px;
        }
        .landlord {
          color: ${props => props.bottomStyle?.content_color};
          font-weight: 700;
        }
      }
    }
  }
`