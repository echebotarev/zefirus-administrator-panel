<template>
  <div class="container-fluid">
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <h4 class="page-title">View Guest Profile</h4>
        </div>
      </div>
    </div>
    <!-- end page title -->

    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Person ({{ profile.pmsId }})</h4>
            <form class="person">
              <div class="form-group">
                <label for="nameTitle">Title</label>
                <select
                  id="nameTitle"
                  class="form-control select2 select2-hidden-accessible"
                  name="nameTitle"
                  data-toogle="select2"
                  data-select2-id="nameTitle"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option
                    v-for="nameTitleOption in nameTitlesOptions"
                    :key="nameTitleOption"
                    :value="nameTitleOption"
                    :data-select2-id="nameTitleOption"
                    :selected="nameTitleOption === profile.person.nameTitle"
                    >{{ nameTitleOption }}</option
                  >
                </select>
              </div>

              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  class="form-control"
                  :value="profile.person.firstName"
                />
              </div>
              <div class="form-group">
                <label for="middleName">Middle Name</label>
                <input
                  id="middleName"
                  type="text"
                  name="middleName"
                  class="form-control"
                  :value="profile.person.middleName"
                />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  class="form-control"
                  :value="profile.person.lastName"
                />
              </div>
              <div class="form-group">
                <label for="dateOfBirth">Date of birth</label>
                <input
                  id="dateOfBirth"
                  type="text"
                  name="dateOfBirth"
                  class="form-control date"
                  :value="profile.person.dateOfBirth"
                />
              </div>
              <div class="form-group">
                <label for="countryOfBirth">Country of birth</label>
                <input
                  id="countryOfBirth"
                  type="text"
                  name="countryOfBirth"
                  class="form-control"
                  :value="profile.person.countryOfBirth"
                />
              </div>
              <div class="form-group">
                <label for="nationality">Nationality</label>
                <input
                  id="nationality"
                  type="text"
                  name="nationality"
                  class="form-control"
                  :value="profile.person.nationality"
                />
              </div>
              <div class="form-group">
                <label for="gender">Gender</label>
                <select
                  id="gender"
                  class="form-control select2 select2-hidden-accessible"
                  name="gender"
                  data-toogle="select2"
                  data-select2-id="gender"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option
                    v-for="option in genderOptions"
                    :key="option.key"
                    :value="option.key"
                    :data-select2-id="option.key"
                    :selected="option.key === profile.person.gender"
                    >{{ option.name }}</option
                  >
                </select>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="form-control"
                  :value="profile.person.email"
                />
              </div>
              <button id="person-save" type="button" class="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Address</h4>
            <form>
              <div class="form-group">
                <label for="countryCode">Country Code</label>
                <input
                  id="countryCode"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.countryCode"
                />
              </div>
              <div class="form-group">
                <label for="region">Region</label>
                <input
                  id="region"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.region"
                />
              </div>
              <div class="form-group">
                <label for="area">Area</label>
                <input
                  id="area"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.area"
                />
              </div>
              <div class="form-group">
                <label for="cityName">City</label>
                <input
                  id="cityName"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.cityName"
                />
              </div>
              <div class="form-group">
                <label for="streetName">Street Name</label>
                <input
                  id="streetName"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.streetName"
                />
              </div>
              <div class="form-group">
                <label for="houseNumber">House Number</label>
                <input
                  id="houseNumber"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.houseNumber"
                />
              </div>
              <div class="form-group">
                <label for="building">Building</label>
                <input
                  id="building"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.building"
                />
              </div>
              <div class="form-group">
                <label for="apartmentNumber">Apartment Number</label>
                <input
                  id="apartmentNumber"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.apartmentNumber"
                />
              </div>
              <div class="form-group">
                <label for="postalCode">Postal Code</label>
                <input
                  id="postalCode"
                  type="text"
                  class="form-control"
                  :value="profile.address.address.postalCode"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <DocumentForm />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DocumentForm from '~/components/DocumentForm'
export default {
  component: [DocumentForm],
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('profiles/fetchProfile', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable API server',
      })
    }
  },
  computed: mapState({
    profile: (state) => state.profiles.profile,
    nameTitlesOptions: () => ['MR', 'MS', 'MRS', 'MISS'],
    genderOptions: () => [
      { key: 'M', name: 'Male' },
      { key: 'F', name: 'Female' },
    ],
  }),
}
</script>

<style scoped></style>
