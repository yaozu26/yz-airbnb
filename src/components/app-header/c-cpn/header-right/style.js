import styled from "styled-components";

export const RightWrapper = styled.div`
position: relative;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  .btns {
    display: flex;
    align-items: center;
    padding-right: 20px;
    color: ${props => props.isAlpha ? "#fff" : props.theme.text.secondaryColor};
    font-weight: ${props => props.theme.text.boldWeight};
    .btn {
      padding: 12px;
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.isAlpha ? "rgba(0, 0, 0, .5)" : "#f7f7f7"};
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border: 1px solid ${props => props.theme.color.borderColor};
    border-radius: 20px;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    background-color: #fff;

    .avatar {
      padding-left: 6px;
      width: 32px;
      height: 32px;
    }
  }

  .panel {
    position: absolute;
    z-index: 999;
    top: 50px;
    right: 30px;
    width: 240px;
    box-shadow: 0 0 6px rgba(0,0,0,.2);
    border-radius: 10px;
    background-color: #fff;

    .top {
      padding: 10px 20px;
      border-bottom: 1px solid #ddd;
      .register {
        color: ${props => props.theme.text.secondaryColor};
        font-weight: ${props => props.theme.text.boldWeight};
      }
    }
    .bottom {
      padding: 10px 20px;
    }

    .text {
      padding: 12px 0;
    }
  }
`