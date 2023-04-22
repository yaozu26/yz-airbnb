import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .info {
    /* Pagination组件 */
    .ant-pagination-item {
      &:hover {
        border-radius: 50%;
      }
    }

    .ant-pagination-item-active {
      background-color: #000;
      border: none;
      border-radius: 50%;
      a{
        font-weight: 400;
        color: #fff;
      }
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    .bottom {
      margin-top: 16px;
    }
  }
`