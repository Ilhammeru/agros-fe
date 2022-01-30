<template>
    <div>
        <error-request :err="errorReq" />
        <div class="form-group a_row">
            <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                <div class="form-input">
                    <label for="">Nama Lengkap Kerabat</label>
                    <input type="text" class="a_form" placeholder="Contoh: bambang" v-model="form.name">
                </div>
            </div>
            <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                <div class="form-input">
                    <label for="">Asal Kota</label>
                    <input type="text" class="a_form" placeholder="Contoh: Pekalongan" v-model="form.city">
                </div>
            </div>
        </div>
        <div class="form-group a_row">
            <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                <div class="form-input">
                    <label for="">Email</label>
                    <input type="text" class="a_form" placeholder="Contoh: bambang@gmail.com" v-model="form.email">
                </div>
            </div>
            <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                <div class="form-input">
                    <label for="">Password</label>
                    <input type="password" class="a_form" placeholder="*********" v-model="form.password">
                </div>
            </div>
        </div>
        <div class="form-group a_row">
            <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                <div class="form-input">
                    <label for="">Role</label>
                    <input type="text" class="a_form" placeholder="Radio Select: Super Admin / Customer" v-model="form.role">
                </div>
            </div>
        </div>

        <div class="a_row">
            <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                <div class="parent-btn-login">
                    <button class="a_btn btn-login" @click.prevent="register">Gabung Sekarang</button>
                    <p class="register-helper">Sudah memiliki Akun? <span @click.prevent="login">Masuk sekarang</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterForm",
    data() {
        return {
            form: {
                name: "",
                email: "",
                role: "",
                city: "",
                password: ""
            }
        }
    },
    mounted() {
        this.$store.dispatch("global/resetError")
    },
    methods: {
        login() {
            this.$router.push('/login');
        },
        async register() {
            let data = this.form;
            await this.$store.dispatch("auth/register", data);
            if (this.$store.getters["global/errorReq"].length == 0) {
                this.$router.push('/login')
            }
        }
    },
    computed: {
        errorReq() {
            return this.$store.getters["global/errorReq"];
        }
    }
}
</script>

<style lang="scss" scoped>
.parent-btn-login {
    padding-right: 8px;
    margin-bottom: 40px;

    .register-helper {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        color: #000000;
        text-align: left;
        margin-top:24px;

        span {
            color: #459467;
            cursor: pointer;
        }
    }

    .btn-login {
        background: #459467;
        border-radius: 10px;
        padding: 13px 12px;
        text-align: left;
        width: 100%;
        color: #FFF;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
    }
}

.form-group {
    margin-bottom: 24px;

    .form-input {
        text-align: left;

        label {
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            color: #000000;
        }

        .a_form {
            padding: 15px 12px;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            color: #000;
            border-radius: 7px;
            margin-top: 8px;

            &::placeholder {
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 18px;
                color: #E5E5E5;
            }
        }
    }

    .a_col_6:nth-child(odd) {
        .form-input {
            padding-left: 0;
            padding-right: 8px;
        }
    }

    .a_col_6:nth-child(even) {
        .form-input {
            padding-right: 0;
            padding-left: 8px;
        }
    }
}

@media all and (max-width: 575px) {
    .form-group {
        .a_col_sm_12:nth-child(odd) {
            .form-input {
                padding-right: 0 !important;
            }
        }
        .a_col_sm_12:nth-child(even) {
            .form-input {
                padding-left: 0 !important;
            }
        }
    }
}

@media all and(min-width: 576px) and (max-width: 767px) {
    .form-group {
        .a_col_sm_12:nth-child(odd) {
            .form-input {
                padding-right: 0 !important;
            }
        }
        .a_col_sm_12:nth-child(even) {
            .form-input {
                padding-left: 0 !important;
            }
        }
    }
}

@media all and (min-width: 1800px) {
     .form-group {
        .form-input {
            label {
                font-size: 16px;
            }

            .a_form {
                font-size: 16px;
            }
        }
    }
}
</style>