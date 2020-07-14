// import ApiService from '@/services/ApiService'

const profiles = [
  {
    id: '08b08d0a-3b94-4629-afa7-6376f3f73b31',
    pmsId: 219710,
    person: {
      nameTitle: 'Mr',
      firstName: 'ANNA',
      middleName: 'MARIA',
      lastName: 'KOEHLER',
      dateOfBirth: '1901-07-12',
      countryOfBirth: 'AT',
      gender: 'F',
      nationality: 'DE',
      email: 'anna_maria@koehler.com',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: 'DE',
        region: '',
        area: '',
        cityName: 'Munich',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: '2e9f86c6-f2ef-4103-b468-37c9dd6bcd5e',
    pmsId: 218960,
    person: {
      nameTitle: 'MR',
      firstName: 'FRITZ',
      middleName: '',
      lastName: 'KOEHLER',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: '',
        region: '',
        area: '',
        cityName: '',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: '33d56bc8-537d-4c6a-ab2b-e9b584333078',
    pmsId: 218460,
    person: {
      nameTitle: 'MRS',
      firstName: 'SARA',
      middleName: '',
      lastName: 'SMITH',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: 'AU',
        region: '',
        area: '',
        cityName: 'Saratown',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '99999',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: '6045bcb0-5d05-414f-8298-fcf289930640',
    pmsId: 218210,
    person: {
      nameTitle: 'MRS',
      firstName: 'SARA',
      middleName: '',
      lastName: 'SMITH',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: 'US',
        region: '',
        area: '',
        cityName: 'Anytown',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '99999',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: '6edceae8-4b50-48b6-8e27-d10efb88b9db',
    pmsId: 217710,
    person: {
      nameTitle: '',
      firstName: 'SAM',
      middleName: '',
      lastName: 'SERIOUS',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: '',
        region: '',
        area: '',
        cityName: 'SPb',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: '7751ff35-173c-4ce4-87d3-57ffda560c44',
    pmsId: 217460,
    person: {
      nameTitle: 'MS',
      firstName: 'JOHN',
      middleName: '',
      lastName: 'SMITH',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: 'US',
        region: '',
        area: '',
        cityName: 'Anytown',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '99999',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: 'add4003d-5f31-4dac-b581-c34e691a115f',
    pmsId: 217960,
    person: {
      nameTitle: '',
      firstName: '',
      middleName: '',
      lastName: 'SERIOUS',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: '',
        region: '',
        area: '',
        cityName: 'SPb',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: 'c6002d2d-98a0-4325-aa77-8b6a7807b362',
    pmsId: 219210,
    person: {
      nameTitle: 'MR',
      firstName: 'FRITZ',
      middleName: '',
      lastName: 'KOEHLER',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: '',
        region: '',
        area: '',
        cityName: '',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: 'dcd73308-cbba-4d70-a5a6-d1b6a5a58e4a',
    pmsId: 218710,
    person: {
      nameTitle: 'MR',
      firstName: 'FRITZ',
      middleName: '',
      lastName: 'KOEHLER',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: '',
        region: '',
        area: '',
        cityName: '',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: 'e70f5a6d-401e-474a-a6f0-513b825d78b4',
    pmsId: 219460,
    person: {
      nameTitle: 'MR',
      firstName: 'FRITZ',
      middleName: '',
      lastName: 'KOEHLER',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: '',
        region: '',
        area: '',
        cityName: '',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
  {
    id: 'f828364e-fd9f-423b-a3c0-0cd31e97874e',
    pmsId: 54710,
    person: {
      nameTitle: 'Mr',
      firstName: 'Sam',
      middleName: '',
      lastName: 'Riad',
      dateOfBirth: '',
      countryOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
    },
    address: {
      type: 'AddressRF',
      address: {
        countryCode: 'US',
        region: '',
        area: '',
        cityName: 'Albany',
        streetName: '',
        houseNumber: '',
        building: '',
        apartmentNumber: '',
        postalCode: '12205',
      },
    },
    document: {
      type: 'DocumentNONE',
      document: [],
    },
  },
]

export const state = () => ({
  profile: {},
  profiles: [],
})
export const mutations = {
  SET_PROFILE(state, profile) {
    state.profile = profile
  },
  SET_PROFILES(state, profiles) {
    state.profiles = profiles
  },
}
export const actions = {
  fetchProfiles({ commit }) {
    commit('SET_PROFILES', profiles)
    // return ApiService.getData('/guest-profile/list').then((response) => {
    //   commit('SET_PROFILES', response.data)
    // })
  },

  fetchProfile({ commit, rootState }, id) {
    // TODO запрашивать данные с сервера
    // eslint-disable-next-line promise/param-names
    return new Promise((resolve) => {
      const reservation = rootState.reservations.reservations.find(
        (reservation) => reservation.guestProfile.id === id
      )
      commit('SET_PROFILE', reservation.guestProfile)
      resolve()
    })
  },
}
