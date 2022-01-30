<template>
    <div class="main_mitra">
        <p class="main_mitra_title">Mitra AGROS</p>
        <p class="main_mitra_desc">
            Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan keamanan kepada para pelanggan setia AGROS Indonesia.
            <br>
            Untuk melihat daftar pelanggan kami, silakan melakukan pendaftaran.
        </p>

        <div class="main_card a_row">
            <div class="a_col_4 a_col_xs_12 a_col_sm_6 a_col_md_6 a_col_lg_6" v-for="(item, i) in data" :key="item.id" :id="'card-delete-mitra-' + item.id">
                <div
                    class="parent_card_mitra"
                    :class="
                        (i + 1)%4 == 0 ? 'end-row' : i%4 == 0 ? 'first-row' : i%2 == 0 ? 'custom_md_card_mitra' : 'custom_md_card_mitra_end'
                    "
                >
                    <div class="main_card_mitra">
                        <div class="card-body">
                            <p class="title">{{ item.name }}</p>
                            <button class="address">{{ item.mitra.city }}</button>
                        </div>
                    </div>
                    <img
                        src="@/assets/icon/delete.png" 
                        class="delete-mitra"
                        :class="{'custom-delete': (i + 1)%4 == 0,'custom-delete-end': i % 2 != 0}"
                        alt=""
                        @click.prevent="deleteMitra(item.id)"
                        v-show="item.isDelete"
                    >
                </div>
            </div>
        </div>

        <button class="a_btn main_mitra_btn" @click.prevent="register" v-show="!isLogin">Gabung Sekarang</button>
    </div>
</template>

<script>
import CryptoJS from 'crypto-js';
export default {
    name: "Mitra",
    props: {
        data: {
            type: Array,
            require: true
        },
        isLogin: {
            type: String,
            require: true
        }
    },
    data() {
        return {
            mitra: [
                {id: 1, title: 'PT. Jaya Bakti', address: 'Jakarta Barat'},
                {id: 2, title: 'PT. Jaya Bakti', address: 'Jakarta Barat'},
                {id: 3, title: 'PT. Jaya Bakti', address: 'Jakarta Barat'},
                {id: 4, title: 'PT. Jaya Bakti', address: 'Jakarta Barat'},
                {id: 5, title: 'PT. Jaya Bakti', address: 'Jakarta Barat'},
                {id: 6, title: 'PT. Jaya Bakti', address: 'Jakarta Barat'}
            ]
        }
    },
    methods: {
        register() {
            this.$router.push('/register')
        },
        deleteMitra(id) {
            let text, title, isSelf
            let mitra = localStorage.getItem('user')
            let decrypt = CryptoJS.AES.decrypt(mitra, process.env.VUE_APP_CRYPTO_KEY).toString(CryptoJS.enc.Utf8)
            let json = JSON.parse(decrypt)
            if (json.id == id) {
                text = 'Anda akan menghapus data diri anda, apakah anda yakin?'
                title = 'Apakah anda yakin menghapus data anda?'
                isSelf = true
            } else {
                text = 'Mitra akan terhapus secara permanen dari sistem'
                title = 'Apakah anda yakin?'
                isSelf = false
            }
            this.$swal({
                title: title,
                text: text,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ya, Hapus data",
                cancelButtonText: "Tidak",
                closeOnConfirm: true,
                closeOnCancel: true 
            })
            .then(async (confirmed) => {
                if (confirmed.isConfirmed) {
                    await this.$store.dispatch("global/delete", {id: id, isSelf: isSelf})
                } else {
                    console.log('batal')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.parent_card_mitra {
    position: relative;
    padding: 0 12px;

    .delete-mitra {
        position: absolute;
        top: -10px;
        right: -0;
        cursor: pointer;
    }

    .custom-delete {
        right: 0;
    }
}

.parent_card_mitra.first-row {
    padding: 0 12px 0 0;
}

.parent_card_mitra.end-row {
    padding: 0 0 0 12px;

    .custom-delete {
        right: -10px;
    }
}

.main_card {
    .a_col_4 {
        margin-bottom: 24px;
    }
}

.main_card_mitra {
    background: #FFFFFF;
    border-radius: 10px;

    .card-body {
        padding: 16px;
        text-align: left;


        .title {
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            color: #000000;
            margin-bottom: 18px;
            text-transform: capitalize;
        }

        .address {
            text-transform: capitalize;
            background: #63BA73;
            border-radius: 5px;
            border: none;
            padding: 2px 6px;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: #FFFFFF;
        }
    }
}

.main_mitra {
    margin-top: 36px;
    
    &_title {
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 50px;
        color: #000000;
        text-align: left;
        margin-bottom: 24px;
    }

    &_desc {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        color: #000000;
        text-align: left;
        width: 90%;
        margin-bottom: 44px;
    }

    &_btn {
        background: #459467;
        border-radius: 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        padding: 9px 17px;
    }
}

@media all and (max-width: 577px) {
    .main_mitra {
        &_title {
            font-size: 24px;
            margin-bottom: 12px;
        }

        &_desc {
            font-size: 14px;
        }

        &_btn {
            font-size: 14px;
        }
    }

    .parent_card_mitra {
        padding: 0 0px 0 0 !important;

        .delete-mitra {
            right: -10px;
        }
    }
}

@media all and (min-width: 576px) and (max-width: 767px) {
    .main_mitra {

        &_desc {
            font-size: 14px;
        }

        &_btn {
            font-size: 14px;
        }
    }

    .custom_md_card_mitra {
        padding: 0 12px 0 0;
    }

    .custom_md_card_mitra_end {
        padding: 0 0 0 12px;
    }

    .custom-delete-end {
        right: -10px !important;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .main_mitra {
        &_desc {
            font-size: 14px;
        }

        &_btn {
            font-size: 14px;
        }
    }

    .custom_md_card_mitra {
        padding: 0 12px 0 0;
    }

    .custom_md_card_mitra_end {
        padding: 0 0 0 12px;
    }

    .parent_card_mitra.end-row {
        padding: 0 0 0 12px;
    }

    .parent_card_mitra.first-row {
        padding: 0 12px 0 0;
    }

    .custom-delete-end {
        right: -10px !important;
    }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
    .main_mitra {
        &_desc {
            font-size: 14px;
        }

        &_btn {
            font-size: 14px;
        }
    }

    .custom_md_card_mitra {
        padding: 0 12px 0 0;
    }

    .custom_md_card_mitra_end {
        padding: 0 0 0 12px;
    }

    .custom-delete-end {
        right: -10px !important;
    }
}

@media all and (min-width: 1800px) {
    .main_mitra {
        &_title {
            font-size: 32px;
        }

        &_desc {
            font-size: 24px;
        }

        &_btn {
            font-size: 24px;
            padding: 12px 22px;
        }
    }
}
</style>
