<template>
    <div class="main_login bg_grey a_container" id="main_login">
        <div class="main_login_item">
            <p class="main_login_item_title">{{ title }}</p>
            <p class="main_login_item_helper">{{ helper }}</p>

            <router-view />

            <story />
        </div>
    </div>
</template>

<script>
import Story from '@/components/Story.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
    name: "Login",
    components: {
        Story,
        LoginForm
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    computed: {
        isLogin() {
            let path = this.$route.path;
            if (path == '/login') {
                return true;
            } else {
                return false;
            }
        },
        title() {
            let path = this.$route.path;
            if (path == '/login') {
                return "Masuk Sekarang";
            } else if (path == '/register') {
                return "Daftar Sekarang";
            }
        },
        helper() {
            let path = this.$route.path;
            if (path == '/login') {
                return "Masuk dan nikmati fitur kami"
            } else if (path == '/register') {
                return "Mari bergabung bersama Kerabat AGROS Indonesia lainnya."
            }
        },
        isRegister() {
            let path = this.$route.path;
            if (path == '/register') {
                return true;
            } else {
                return false;
            }
        },
        isUpdate() {
            let path = this.$route.path;
            if (path == '/update') {
                return true;
            } else {
                return false;
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("main_navbar").style.paddingTop = "30px";
                document.getElementById("main_navbar").style.paddingBottom = "30px";
                document.getElementById("main_navbar").classList.add('bg_white');
                document.getElementById("main_navbar").classList.remove('bg_grey');
            } else {
                document.getElementById("main_navbar").style.paddingTop = "33px";
                document.getElementById("main_navbar").style.paddingBottom = "33px";
                document.getElementById("main_navbar").classList.remove('bg_white');
                document.getElementById("main_navbar").classList.add('bg_grey');
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.main_login {
    padding-top: 40px;
    scroll-behavior: smooth;
    transition: all .5s;

    &_item {
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
        
        &_title {
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 50px;
            color: #000000;
            text-align: left;
            margin-bottom: 24px;
        }

        &_helper {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 27px;
            color: #000000;
            text-align: left;
            margin-bottom: 24px;
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

    .parent-btn-login {

        .btn-login {
            width: 100%;
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
    .main_login {
        &_item {
            &_helper {
                font-size: 20px;
            }

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
    }
}
</style>