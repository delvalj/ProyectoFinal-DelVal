<template>
  <section class="vh-320 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 15px;">
            <div class="card-body p-5 text-center">

              <div class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">Please enter your login and password!</p>

                <b-form @submit.prevent="handleSubmit">

                  <div class="col-md-12 mb-4 mt-4 pb-2">
                    <div class="form-group">
                      <input type="email"
                             placeholder="Email"
                             v-model="user.email"
                             id="logInEmail" name="logInEmail"
                             class="form-control form-control-lg"
                             :class="{ 'is-invalid': submitted && $v.user.email.$error }"/>
                      <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                        <span v-if="!$v.user.email.required">Email Incompleto</span>
                        <span v-if="!$v.user.email.email">Email is invalid</span>
                      </div>
                    </div>
                  </div>

                  <div class="form-group col-md-12 mb-4 mt-4 pb-2">
                    <input type="password"
                           v-model="user.password"
                           placeholder="Contraseña"
                           id="logInpassword" name="logInpassword"
                           class="form-control form-control-lg"
                           :class="{ 'is-invalid': submitted && $v.user.password.$error }"/>
                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                      <span v-if="!$v.user.password.required">Completar Contraseña</span>
                      <span v-if="!$v.user.password.minLength">La contraseña debe tener al menos 6 caracteres.</span>
                    </div>
                  </div>

                  <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                  <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                </b-form>



<!--                <div class="d-flex justify-content-center text-center mt-4 pt-1">-->
<!--                  <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>-->
<!--                  <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>-->
<!--                  <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>-->
<!--                </div>-->

              </div>

              <div>
                <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
import {validationMixin} from "vuelidate";
import {required, minLength, email, sameAs} from "vuelidate/lib/validators";

export default {
  name: "Login",
  mixins: [validationMixin],
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthday: ""
      },
      submitted: false
    };
  },
  validations: {
    user: {
      firstName: {required},
      lastName: {required},
      email: {required, email},
      password: {required, minLength: minLength(6)},
      confirmPassword: {required, sameAsPassword: sameAs('password')},
      birthday: {required}
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    }
  }
};
</script>


<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>