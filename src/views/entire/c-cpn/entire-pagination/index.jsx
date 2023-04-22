import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoomlistAction } from '@/store/modules/entire'

const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }))

  const dispatch = useDispatch()
  function currentPageChangeHandle(page) {
    window.scrollTo(0, 0)
    dispatch(fetchRoomlistAction(page - 1))
  }

  return (
    <PaginationWrapper>
      <div className="info">
        <Pagination defaultCurrent={1} total={15} defaultPageSize={1} onChange={currentPageChangeHandle}/>
        <div className="bottom">{`第${currentPage * 20 + 1}-${currentPage * 20 + 20}个房源，共超过${totalCount}个`}</div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination