import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '@/assets/data/footer.json'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        { footerData.map(item => {
          return (
            <div className="item" key={ item.name }>
              <div className="name">{ item.name }</div>
              <div className="list">
                { item.list.map(iten => {
                  return (
                    <div className="iten" key={ iten }>{ iten }</div>
                  )
                }) }
              </div>
            </div>
          )
        }) }
      </div>
    </FooterWrapper>
  )
})

export default AppFooter