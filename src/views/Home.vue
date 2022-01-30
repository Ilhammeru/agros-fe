<template>
  <div class="bg_grey a_container main_container" @scroll="handleScroll">
    <div class="jumbotron">
      <div class="jumbotron_item">
        <p class="jumbotron_item_title">Selamat datang, Kerabat!</p>
        <p class="jumbotron_item_desc">
          Kami hadir dengan membawakan solusi terbaik untuk kebutuhan logistik Anda. <br>
          Melayani dengan sepenuh hati untuk kenyaman Anda dan keamanan barang sampai pada tujuan.
          Silakan melakukan pendaftaran untuk dapat menikmati layanan kami.
        </p>
        <div class="jumbotron_item_button">
          <button class="a_btn" @click.prevent="logout" v-show="isLogin">keluar</button>
          <button class="a_btn" @click.prevent="login" v-show="!isLogin">masuk</button>
          <button class="a_btn btn-register" @click.prevent="register" v-show="!isLogin">daftar</button>
        </div>
      </div>
    </div>

    <div class="about_container">
      <p class="about_container_title">Mengenal AGROS Indonesia Lebih Dekat</p>
      <p class="about_container_desc">
        Agros adalah sistem terpadu satu pintu—one stop service yang berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra terlatih, efisiensi dan transparansi sistem transportasi, kemudahan akses untuk layanan pemeliharaan hingga fitur transaksi.
      </p>
      
      <ServicePage :data="services" marginBottom="24" />
    </div>

    <Story />
    <Mitra :data="mitra" :isLogin="isLogin" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Story from '@/components/Story.vue'
import ServicePage from '../components/ServicePage.vue'
import Mitra from '@/components/Mitra.vue'
export default {
  name: "Home",
  data() {
    return {
      services: [
        {id: 1, icon: 'service1.png', title: 'AGROS Shipper', desc: 'Agros adalah sistem terpadu satu pintu—one stop service yang berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra terlatih, efisiensi dan '},
        {id: 2, icon: 'service2.png', title: 'AGROS Transporter', desc: 'Tidak ada yang tidak mungkin. Kini, Perusahaan bisa dengan cepat mendapatkan keuntungan tanpa harus melakukan hal berat.'},
        {id: 3, icon: 'service3.png', title: 'AGROS Driver', desc: 'AGROS menawarkan keleluasaan untuk memilih proyek sehingga peningkatan pendapatan bukan lagi jadi impian.'}
      ]
    }
  },
  components: {
    Card,
    Story,
    Mitra,
    ServicePage
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    this.getMitra()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
      handleScroll() {
        // var st = window.pageYOffset || document.documentElement.scrollTop;
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("main_navbar").style.paddingTop = "30px"
            document.getElementById("main_navbar").style.paddingBottom = "30px"
            document.getElementById("main_navbar").classList.add('bg_white')
            document.getElementById("main_navbar").classList.remove('bg_grey')
        } else {
            document.getElementById("main_navbar").style.paddingTop = "33px"
            document.getElementById("main_navbar").style.paddingBottom = "33px"
            document.getElementById("main_navbar").classList.remove('bg_white')
            document.getElementById("main_navbar").classList.add('bg_grey')
        }
      },
      async getMitra() {
        await this.$store.dispatch("global/getMitra")
      },
      login() {
        this.$router.push('/login')
      },
      register() {
        this.$router.push('/register')
      },
      async logout() {
        await this.$store.dispatch("auth/logout")
      }
  },
  computed: {
    isLogin() {
      return this.$store.getters["global/isLogin"] || localStorage.getItem('isLogin')
    },
    mitra() {
      return this.$store.getters["global/mitra"]
    }
  }
}
</script>

<style lang="scss" scoped>
.main_container {
  padding-top: 60px;
}

.about_container {
  text-align: left;

  &_title,
  &_title_2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 50px;
    color: #000000;
    margin-bottom: 24px;
  }

  &_title_2 {
    font-size: 24px;
  }

  &_desc {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #000000;
    margin-bottom: 24px;
  }
}

.jumbotron {
  margin-bottom: 60px;
  
  &_item {
    background-image: url(../assets/icon/jumbotron.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 30px 28px 33px 28px;
    text-align: left;
    border-radius: 10px;
  
    &_button {
      .a_btn {
        border: 1px solid #F8F8F8;
        box-sizing: border-box;
        border-radius: 7px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #F8F8F8;
        padding: 7px 16px;
        text-transform: uppercase;
        margin-right: 11px;
      }
  
      .btn-register {
        background: #FFFFFF;
        color: #79C375;
      }
    }
    
    &_title {
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 39px;
      color: #F8F8F8;
      margin-bottom: 16px;
    }

    &_desc {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      color: #FFFFFF;
      width: 730px;
      margin-bottom: 25px;
    }
  }

}

@media all and (max-width: 575px) {
  .main_container {
    padding-top: 50px;
  }

  .jumbotron {
    &_item {

      &_title {
        font-size: 24px;
      }

      &_desc {
        width: 100%;
        font-size: 14px;
      }
    }
  }

  .about_container {
    &_title {
      font-size: 24px;
    }

    &_title_2 {
      font-size: 22px;
    }
  }
}

@media all and(min-width: 576px) and (max-width: 767px) {
  .main_container {
    padding-top: 50px;
  }
  
  .jumbotron {
    &_item {

      &_title {
        font-size: 24px;
      }

      &_desc {
        width: 100%;
        font-size: 14px;
      }
    }
  }
}

@media all and(min-width: 768px) and (max-width: 991px) {
  .main_container {
    padding-top: 50px;
  }

  .jumbotron {
    &_item {

      &_title {
        font-size: 24px;
      }

      &_desc {
        width: 100%;
        font-size: 14px;
      }
    }
  }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
  .main_container {
    padding-top: 50px;
  }
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
  .main_container {
    padding-top: 70px;
  }
}

@media all and(min-width: 1800px){
  .about_container {
    margin-top: 30px;

    &_title,
    &_title_2 {
      font-size: 40px;
    }

    &_title_2 {
      font-size: 36px;
      margin-top: 50px;
    }

    &_desc {
      font-size: 24px;
      line-height: 140%;
    }
  }

  .jumbotron {
    &_item {

      &_button {
        .a_btn {
          font-size: 18px;
        }
      }

      &_title {
        font-size: 32px;
      }

      &_desc {
        width: 100%;
        font-size: 24px;
        line-height: 140%;
      }
    }
  }

  .card_service_title {
    font-size: 24px;
  }

  .card_service_desc {
    font-size: 18px;
  }
}
</style>