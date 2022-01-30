<template>
    <div class="main_navbar a_container bg_grey" id="main_navbar">
        <div class="main_navbar_item">
            <div class="main_navbar_item_logo">
                <img src="@/assets/icon/agros-logo.png" alt="" @click.prevent="home">
            </div>
            <div class="main_navbar_item_text">
                <p class="main_navbar_item_text_about" :class="{ 'active': isAbout }" id="nav-about" @click.prevent="about">Tentang</p>
                <p class="main_navbar_item_text_profile" :class="{ 'active': isProfile }" id="nav-profile" @click.prevent="profile">Profile</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        home() {
            this.$router.push('/');
        },
        about() {
            this.$router.push('/about');
        },
        profile() {
            this.$router.push('/update');
        }
    },
    computed: {
        isAbout() {
            let path = this.$route.path
            if (path == '/about') {
                return true
            } else {
                return false
            }
        },
        isProfile() {
            let path = this.$route.path
            if (path == '/update') {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.main_navbar {
    position: sticky;
    top: 0;
    padding-top: 53px;
    padding-bottom: 53px;
    transition: padding-top .5s, padding-bottom .5s, background-color 2s;
    z-index: 1000;

    &_item {
        justify-content: space-between;
        align-items: center;
        display: flex;
        width: 100%;

        &_text {
            display: flex;
            align-items: center;
    
            &_about {
                margin-right: 25px;
                cursor: pointer;
            }
    
            &_profile {
                cursor: pointer;
            }

            &_about.active,
            &_profile.active {
                color: #459467;   
            }
        }
    }

}

@media all and (max-width: 575px) {
    .main_navbar {
        padding-top: 15px;
        padding-bottom: 15px;

        &_logo {
            img {
                width: 120px;
                height: auto;
            }
        }

        &_text {
            &_about,
            &_profile {
                font-size: 14px;
            }
        }
    }
}

@media all and(min-width: 576px) and (max-width: 767px) {
    .main_navbar {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}

@media all and(min-width: 1800px) {
    .main_navbar {
        padding-top: 20px;
        padding-bottom: 20px;

        &_text {

            &_about {
                margin-right: 25px;
                cursor: pointer;
                font-size: 22px;
            }

            &_profile {
                cursor: pointer;
                font-size: 22px;
            }
        }
    }
}
</style>