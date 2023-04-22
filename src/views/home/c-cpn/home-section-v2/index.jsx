import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)

  const tabs = infoData.dest_address.map(item => item.name)
  
  const tabClickHandle = useCallback((index, name) => {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}/>
      <SectionTabs tabs={tabs} tabClick={tabClickHandle}/>
      <SectionRooms roomList={ infoData.dest_list[name] }  itemWidth="33.3333%"/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2