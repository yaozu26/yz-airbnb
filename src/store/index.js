import { configureStore } from "@reduxjs/toolkit";

import mainSlicer from './modules/main'
import homeSlicer from "./modules/home";
import entireSlicer from './modules/entire'
import detailSlicer from './modules/detail'

const store = configureStore({
  reducer: {
    main: mainSlicer,
    home: homeSlicer,
    entire: entireSlicer,
    detail: detailSlicer
  }
})

export default store