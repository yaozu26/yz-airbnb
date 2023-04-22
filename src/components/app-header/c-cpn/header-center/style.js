import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-section {
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 30px;
    color: ${props => props.isAlpha ? "#fff" : props.theme.text.primaryColor};
    cursor: pointer;
    ${props => props.theme.mixin}

    & > div:not(.icon-search) {
      padding: 0 16px;
      height: 48px;
      line-height: 48px;
    }

    .area {
      margin-left: 8px;
      color: ${props => props.isAlpha ? "#fff" : props.theme.text.secondaryColor};
      font-weight: ${props => props.theme.text.boldWeight};
    }
    
    .line {
      width: 1px;
      height: 24px;
      background-color: ${props => props.theme.color.borderColor};
    }

    .icon-search {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 7px;
      padding: 10px;
      width: 12px;
      height: 12px;
      color: #fff;
      background-color: ${props => props.theme.color.primary};
      border-radius: 50%;
    }
  }

  .search-tabs {
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    .titles {
      display: flex;
      align-items: center;
      height: 80px;
      cursor: pointer;
      color: ${props => props.isAlpha ? "#fff" : ""};

      .title {
        margin: 0 16px;
        padding: 10px 0;
        font-size: 16px;
        font-weight: 400;

        &.active {
          border-bottom: 3px solid ${props => props.isAlpha ? "#fff" : "#000"};
        }
      }
    }

    .tabs {
      display: flex;
      align-items: center;
      height: 100px;

      .tab {
        display: none;
        box-sizing: border-box;
        width: 848px;
        height: 66px;
        border: 1px solid ${props => props.theme.color.borderColor};
        border-radius: 100px;
        background-color: #fff;
        
        &.active {
          display: flex;
          align-items: center;
        }

        .wrap {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          .tab-item {
            height: 100%;
            padding-left: 20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
            border-radius: 100px;

            &:hover {
              background-color: #ddd;
            }

            &:last-child {
              position: relative;
              .search-icon {
                position: absolute;
                padding: 16px;
                right: 16px;
                background-color: ${props => props.theme.color.primary};
                color: #fff;
                border-radius: 50%;
              }
            }

            .text {
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 4px;
            }
            .desc {
              color: #999;
            }
          }

          .line {
            width: 1px;
            height: 24px;
            background-color: #ddd;
          }
        }
      }
    }
  }

  /* 动画效果 */
  .bar-enter {
    transform: scale(2.8, 1.3) translateY(76px);
    opacity: 0;
  }
  .bar-enter-active {
    transition: all 300ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .bar-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .bar-exit-active {
    transition: all 300ms ease;
    transform: scale(2.8, 1.3) translateY(76px);
    opacity: 0;
  }

  .detail-enter {
    transform: translateY(-76px) scale(0.35, 0.7);
    opacity: 0;
  }
  .detail-enter-active {
    transition: all 300ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .detail-exit-active {
    transform: translateY(-76px) scale(0.35, 0.7);
    opacity: 0;
    transition: all 300ms ease;
  }
  
`