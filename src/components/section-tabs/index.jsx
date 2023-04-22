import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabs = [], tabClick } = props
  
  const [ currentIndex, setCurrentIndex ] = useState(0)
  function itemClick(index, name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        { tabs.map((item, index) => {
          return (
            <div className={classNames('item', {'active': currentIndex === index})}
              onClick={e => itemClick(index, item)}
              key={index}>
              {item}
            </div>
          )
        }) }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabs: PropTypes.array
}

export default SectionTabs