import { create } from 'zustand'

const useImageStore = create((set) => ({
  portImages: [
    {
      img: "src/images/Home/me.png",
      name: "home",
    },{
      img: "src/images/Logo/mrwhite.png",
      name: "logo",
    }
  ]
}))

export default useImageStore
