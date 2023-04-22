import styled from "styled-components";

export const BrowserWrapper = styled.div`
  .dialog {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #222;

    display: flex;
    flex-direction: column;

    .header {
      flex-shrink: 0;
      position: relative;
      height: 80px;
      .close {
        position: absolute;
        right: 30px;
        top: 15px;
      }
    }

    .content {
      flex: 1;
      min-height: 100px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      .img-wrap {
        height: 100%;
        img {
          height: 100%;
        }
      }

      /* 设置动画样式 */
      .pic-enter {
        opacity: 0;
        transform: translateX(100%);
      }
      .pic-exit {
        opacity: 1;
        transform: translateX(0);
      }
      .pic-enter-active {
        opacity: 1;
        transform: translateX(0);
      }
      .pic-exit-active {
        opacity: 0;
        transform: translateX(-100%);
      }
      .pic-enter-active,
      .pic-exit-active {
        transition: all 500ms;
      }
    }
    .footer {
      flex-shrink: 0;
      height: 100px;
      margin-bottom: 10px;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 480px;
        margin: 10px auto 0;
        color: #fff;
      }

      .pic-list {
        .img-item {
          flex-shrink: 0;
          padding: 0 10px;
          width: 100px;
          opacity: .3;
          img {
            width: 100%;
          }
        }
        .active {
          opacity: 1;
        }
      }
    }
  }
`