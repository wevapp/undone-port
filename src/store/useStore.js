import { create } from 'zustand'

import homeImage from "../images/Home/me.png"

const useImageStore = create((set) => ({
  portImages: [
    {
      img: homeImage,
      name: "home",
    },{
      img: "src/images/Logo/mrwhite.png",
      name: "logo",
    }
  ]
}))

export default useImageStore
