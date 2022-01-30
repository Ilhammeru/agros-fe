<template>
    <div class="about_container" :style="styling">
        <p class="about_container_title_2">
            Layanan AGROS Indonesia
        </p>
        <div class="card_group">
            <div class="a_row">
            <div class="a_col_3 a_col_xs_12 a_col_sm_12 a_col_md_12 a_col_lg_6" v-for="list in data" v-bind:key="list.id">
                <card borderRadius="15" height="310">
                <template v-slot:image>
                    <img :src="require(`@/assets/icon/service/${list.icon}`)" class="image" alt="">
                </template>
                <template v-slot:title>
                    <p class="card_service_title">{{ list.title }}</p>
                </template>
                <template v-slot:desc>
                    <p class="card_service_desc">{{ list.desc }}</p>
                </template>
                </card>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    name: 'ServicePage',
    props: {
        data: {
            type: Array
        },
        marginBottom: {
            type: String,
            default: '0'
        }
    },
    components: {
        Card
    },
    computed: {
        styling() {
            return {
                '--marginBottom': this.marginBottom + 'px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.about_container {
  text-align: left;
  margin-bottom: var(--marginBottom);

  &_title_2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 50px;
    color: #000000;
    margin-bottom: 24px;
  }
}

.card_service_title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 12px;
}

.card_service_desc {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 134.52%;
  color: #000000;
}
</style>