import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo((props) => {
  const { itemPics } = props

  const [isShowPic, setIsShowPic ] = useState(false)

  const rightPic = itemPics.slice(1, 5)

  const btnClickHandle = () => {
    setIsShowPic(true)
  }
 
  return (
    <PictureWrapper>
      <div className="cover">
        <div className="left-pic">
          <img src={itemPics[0]} alt="" />
          <div className="cover-bg"></div>
        </div>
        <div className="right-pic">
          {
            rightPic.map(item => {
              return (
                <div className="item" key={item}>
                  <img src={item} alt="" />
                  <div className="cover-bg"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="share-collect">
        <div className="btn share">
          <span className="icon"></span>
          <span className="text">分享</span>
        </div>
        <div className="btn collect">
          <span className="icon"></span>
          <span className="text">收藏</span>
        </div>
      </div>
      <div className="all">
        <div className="btn" onClick={btnClickHandle}>查看照片</div>
      </div>

      { isShowPic && <PictureBrowser itemPics={itemPics} closeClick={e => setIsShowPic(false)}/> }
    </PictureWrapper>
  )
})

export default DetailPicture