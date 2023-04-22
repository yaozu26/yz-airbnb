import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid ${props => props.theme.color.borderColor};

  .content {
    width: 1080px;
    margin: 0 auto;
    padding: 48px 24px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;

    .name {
      font-weight: 700;
      margin-bottom: 16px;
    }

    .list {
      color: ${ props => props.theme.text.primaryColor };

      .iten {
        margin-top: 6px;
        height: 22px;
        line-height: 22px;
      }
    }
  }
`