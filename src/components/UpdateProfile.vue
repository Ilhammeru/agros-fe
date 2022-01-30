<template>
    <div>
        <div class="main_update">
            <p class="main_update_title">Perbarui Profil</p>
            <error-request :err="this.$store.getters['global/errorReq']" />
            <div class="form-group a_row">
                <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                    <div class="form-input">
                        <label for="">Nama Lengkap Kerabat</label>
                        <input type="text" class="a_form" placeholder="Contoh: bambang" v-model="profile.name">
                    </div>
                </div>
                <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                    <div class="form-input">
                        <label for="">Asal Kota</label>
                        <input type="text" class="a_form" placeholder="Contoh: Pekalongan" v-model="profile.mitra.city">
                    </div>
                </div>
            </div>
            <div class="form-group a_row">
                <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                    <div class="form-input">
                        <label for="">Email</label>
                        <input type="text" class="a_form" placeholder="Contoh: bambang@gmail.com" v-model="profile.email">
                    </div>
                </div>
                <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                    <div class="form-input">
                        <label for="">Password</label>
                        <input type="password" class="a_form" placeholder="Kosongkan jika tidak dirubah" v-model="password">
                    </div>
                </div>
            </div>
            <div class="form-group a_row">
                <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                    <div class="form-input">
                        <label for="">Role</label>
                        <input type="text" class="a_form" placeholder="Radio Select: Super Admin / Customer" v-model="profile.user_roles[0].name">
                    </div>
                </div>
            </div>

            <div class="a_row">
                <div class="a_col_6 a_col_sm_12 a_col_xs_12">
                    <div class="parent-btn-login">
                        <button class="a_btn btn-login" @click.prevent="update">Perbarui Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateProfile",
    created() {
        this.getProfile()
    },
    data() {
        return {
            password: ""
        }
    },
    methods: {
        async getProfile(){
            await this.$store.dispatch("global/getProfile")
        },
        update() {
            let data = this.profile
            let update = {
                name: data.name,
                email: data.email,
                city: data.mitra.city,
                password: this.password,
                role: data.user_roles[0].name
            }
            this.$store.dispatch("global/update", update)
        }
    },
    computed: {
        profile() {
            let profileGetters = this.$store.getters["global/profile"]
            return profileGetters
        }
    },
    mounted() {
        this.$store.dispatch("global/resetError")
    }
}
</script>

<style lang="scss" scoped>
.main_update {
    background: #FFF;
    padding: 28px 30px;
    border-radius: 10px;

    &_title {
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        color: #000000;
        text-align: left;
        margin-bottom: 18px
    }
}

.parent-btn-login {
    padding-right: 8px;

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
            border: 1px solid #E8E8E8;

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