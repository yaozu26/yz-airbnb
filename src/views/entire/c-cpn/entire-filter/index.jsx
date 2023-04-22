import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { FilterWrapper } from './style'
import fillterData from '@/assets/data/filter_data.json'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if(newItems.includes(item)) {
      const itemIndex = newItems.findIndex(el => el === item)
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item)
    }

    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      {
        fillterData.map((item, index) => {
          return (
            <div className={classNames("item", {'active': selectItems.includes(item)})} key={index} onClick={e => itemClickHandle(item)}>
              {item}
            </div>
          )
        })
      }
    </FilterWrapper>
  )
})

export default EntireFilter