<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="header-title">Document</h4>

          <form>
            <div class="form-group">
              <label for="documentType">Document Type</label>
              <select
                id="documentType"
                class="form-control select2 col-6 select2-hidden-accessible"
                data-toogle="select2"
                data-select2-id="documentType"
                tabindex="-1"
                aria-hidden="true"
              >
                <option
                  v-for="option in documentTypes"
                  :key="option"
                  :value="option"
                  :data-select2-id="option"
                  >{{ option }}</option
                >
              </select>
            </div>
          </form>
          <div class="tab-content">
            <div id="PassportRFInternal" class="tab-pane show active">
              <form>
                <div class="form-group">
                  <label for="series">Series</label>
                  <input
                    id="series"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="number">Number</label>
                  <input
                    id="number"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="authority">Authority</label>
                  <input
                    id="authority"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="dateOfIssue">Issue date</label>
                  <input
                    id="dateOfIssue"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="departmentCode">Department code</label>
                  <input
                    id="departmentCode"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="placeOfBirth">Place of birth</label>
                  <input
                    id="placeOfBirth"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="countryOfBirth">Country of birth</label>
                  <input
                    id="countryOfBirth"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
              </form>
            </div>
            <div id="PassportRFInternational" class="tab-pane">
              <form>
                <div class="form-group">
                  <label for="series">Series</label>
                  <input
                    id="series"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="number">Number</label>
                  <input
                    id="number"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="authority">Authority</label>
                  <input
                    id="authority"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="dateOfIssue">Issue date</label>
                  <input
                    id="dateOfIssue"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="dateOfExpire">Expire date</label>
                  <input
                    id="dateOfExpire"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="placeOfBirth">Place of birth</label>
                  <input
                    id="placeOfBirth"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="countryOfBirth">Country of birth</label>
                  <input
                    id="countryOfBirth"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
              </form>
            </div>
            <div id="BirthCertificateRF" class="tab-pane">
              <form>
                <div class="form-group">
                  <label for="series">Series</label>
                  <input
                    id="series"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="number">Number</label>
                  <input
                    id="number"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="authority">Authority</label>
                  <input
                    id="authority"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="dateOfIssue">Issue date</label>
                  <input
                    id="dateOfIssue"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="placeOfBirth">Place of birth</label>
                  <input
                    id="placeOfBirth"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="countryOfBirth">Country of birth</label>
                  <input
                    id="countryOfBirth"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DocumentForm',
  computed: mapState({
    documentTypes: () => [
      'PassportRFInternal',
      'PassportRFInternational',
      'BirthCertificateRF',
    ],
  }),
}
</script>

<style scoped></style>
