// import { getUser, getAddressList } from '../service/getDataClient'
// import { GET_USERINFO, SAVE_ADDRESS } from './mutation-types.js'

// export default {
//   async getUserInfo ({ commit, state }) {
//     let res = await getUser()
//     commit(GET_USERINFO, res)
//   },
//   async saveAddress ({ commit, state }) {
//     if (state.removeAddress.length > 0) return

//     let addres = await getAddressList(state.userInfo.user_id)
//     commit(SAVE_ADDRESS, addres)
//   }
// }
import { getUserInfo } from '../apiService/clientApi'

import { SAVE_ADMIN_INFO } from './mutation-types.js'
export default {
  async getUserData({ commit }) {
    try {
      const res = await getUserInfo()

      commit(SAVE_ADMIN_INFO, res.data)
    } catch (err) {
      // console.log(err.message)
    }
    // try {
    //   getUserInfo()
    //     // .then(res => {
    //     //   if (res.status === 1) {
    //     //     commit(SAVE_ADMIN_INFO, res.data)
    //     //   } else {
    //     //     throw new Error(res.type)
    //     //   }
    //     // })
    //     // .catch(error => {
    //     //   // console.log('error', error)
    //     // })
    // } catch (err) {
    //   // console.log(err.message)
    // }
  }
}
