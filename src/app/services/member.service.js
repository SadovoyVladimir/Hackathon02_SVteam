import httpService from './http.service'

const memberEndpoint = 'member/'

const memberService = {
  get: async () => {
    const { data } = await httpService.get(memberEndpoint)
    return data
  },
  create: async (payload) => {
    const { data } = await httpService.put(memberEndpoint + payload.id, payload)
    return data
  }
}

export default memberService
