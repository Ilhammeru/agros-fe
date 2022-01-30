<template>
  <div class="main_about a_container bg_grey" id="main_about">
    <p class="main_about_title">Tentang AGROS Indonesia</p>
    <div class="main_about_icon">
      <img src="@/assets/icon/story.png" alt="" class="icon">
    </div>
    <div class="main_about_detail">
      <p class="text">
        Terinspirasi dari arah mata angin yang membawa pada satu destinasi, Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga bisa menjadi penghubung para stakeholders dalam aktivitas muatan berat, mulai dari shipper, transporter, driver, mitra pemeliharan, seller dan buyer intermoda yang menjangkau seluruh penjuru Nusantara.
      </p>
    </div>

    <ServicePage :data="services" />
  </div>
</template>

<script>
import ServicePage from '@/components/ServicePage.vue'
export default {
  name: "About",
  components: {
    ServicePage
  },
  data() {
    return {
      services: [
        {id: 1, icon: 'service1.png', title: 'AGROS Shipper', desc: 'Agros adalah sistem terpadu satu pintu—one stop service yang berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra terlatih, efisiensi dan '},
        {id: 2, icon: 'service2.png', title: 'AGROS Transporter', desc: 'Tidak ada yang tidak mungkin. Kini, Perusahaan bisa dengan cepat mendapatkan keuntungan tanpa harus melakukan hal berat.'},
        {id: 3, icon: 'service3.png', title: 'AGROS Driver', desc: 'AGROS menawarkan keleluasaan untuk memilih proyek sehingga peningkatan pendapatan bukan lagi jadi impian.'}
      ]
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
        // var st = window.pageYOffset || document.documentElement.scrollTop;
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
  }
}
</script>

<style lang="scss" scoped>
.main_about {
  padding-top: 60px;

  &_title {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 50px;
    color: #000000;
    text-align: left;
    margin-bottom: 32px;
  }

  &_detail {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 60px;

    .text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 27px;
      text-align: center;
      color: #000000;
    }
  }

  &_icon {
    .icon {
      width: 384px;
      height: 369px;
    }
  }
}
</style>
