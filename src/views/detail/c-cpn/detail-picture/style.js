import styled from "styled-components";

export const PictureWrapper = styled.div`
  position: relative;
  &:hover {
    .cover-bg {
      opacity: 1;
    }
  }

  .cover {
    display: flex;
    height: 500px;

    .left-pic {
      flex: 1;
      border: 1px solid #000;
      overflow: hidden;
      &:hover {
        img {
          transform: scale(1.1);
        }
        .cover-bg {
          opacity: 0;
        }
      }
    }

    .right-pic {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .item {
        position: relative;
        flex-shrink: 0;
        width: 50%;
        height: 50%;
        border: 1px solid #000;
        overflow: hidden;

        &:hover {
          img {
            transform: scale(1.1);
          }
          .cover-bg {
            opacity: 0;
          }
        }
      }
    }

    img {
      transform: scale(1.01);
      width: 100%;
      object-fit: cover;
      transition: transform 500ms ease;
    }
  }

  .cover-bg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity 300ms ease;
  }

  /* 控制按钮 */
  .share-collect {
    position: absolute;
    top: 20px;
    right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    .share {
      margin-right: 20px;
    }
  }

  .all {
    position: absolute;

    bottom: 20px;
    right: 20px;
  }

  .btn {
    line-height: 18px;
    font-weight: 700;
    padding: 6px 15px;
    border: 1px solid #000;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`