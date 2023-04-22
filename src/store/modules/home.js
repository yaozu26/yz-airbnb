import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
  getHomeGoodPriceData, 
  getHomeHighScoreData, 
  getHomeDiscountData, 
  getHomeHotrecommenddestData, 
  getHomeLongforData, 
  getHomePlusData,
 } from "@/services/modules/home";

// 直接从reducers派发action
export const fetchHomeInfoAction = createAsyncThunk("home/goodprice", ( payload, { dispatch } ) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodpriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighscoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotrecommenddestData().then(res => {
    dispatch(changeHotrecommendInfoAction(res))
  })
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlicer = createSlice({
  name: "home",
  initialState: {
    goodpriceInfo: {},
    highscoreInfo: {},
    discountInfo: {},
    hotrecommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodpriceInfoAction(state, { payload }) {
      state.goodpriceInfo = payload
    },
    changeHighscoreInfoAction(state, { payload }) {
      state.highscoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotrecommendInfoAction( state, { payload } ) {
      state.hotrecommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeGoodPriceInfoAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // }

  // extraReducers: builder => {
  //   builder.addCase(fetchHomeGoodPriceInfoAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
})

export const { 
  changeGoodpriceInfoAction,
  changeHighscoreInfoAction,
  changeDiscountInfoAction,
  changeHotrecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
  changeHomeIsSearchBoxAction
} = homeSlicer.actions
export default homeSlicer.reducer