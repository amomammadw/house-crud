import type { EHouseCategory, IHouseInfo } from './../interfaces/IComponents';
import { defineStore } from 'pinia'

export const useHouseInfo = defineStore('useHouseInfo', {
  state: () => {
    return {
      houseInfo: [] as IHouseInfo[],
    }
  },


  actions: {
    saveHouseInfo(data: IHouseInfo) {
      this.houseInfo.push(data)
    },

    filterHouse(category: EHouseCategory) {
      const findedHouses = this.houseInfo.filter(x => { return x.category === category })
      return findedHouses
    },

    deleteHouse(house: IHouseInfo) {
      const findedHouseIndex = this.houseInfo.findIndex(x => x.name === house.name)
      this.houseInfo.splice(findedHouseIndex, 1)
    }
  },
})
