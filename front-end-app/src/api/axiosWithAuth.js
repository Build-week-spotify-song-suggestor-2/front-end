import axios from 'axios'

export const axiosWithAuth = () => {

  const token = localStorage.getItem("token")

  return axios.create({

    headers: {
      authorization: token
    },

    baseURL: `https://salty-atoll-28049.herokuapp.com/api/auth`

  })
}