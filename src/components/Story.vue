<template>
    <div class="main_story">
        <p class="main_story_title">
            Cerita Kerabat AGROS
        </p>
        <div class="main_story_item">
            <div class="main_story_item_logo">
                <img src="@/assets/icon/story.png" alt="" class="icon">
            </div>
            <div class="main_story_item_text">
                <p class="text">Terinspirasi dari arah mata angin yang membawa pada satu destinasi, Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga bisa menjadi penghubung para stakeholders dalam aktivitas muatan berat, mulai dari shipper, transporter, driver, mitra pemeliharan, seller dan buyer intermoda yang menjangkau seluruh penjuru Nusantara.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Story"
}
</script>

<style lang="scss" scoped>
.main_story {
    margin-top: 60px;

    &_title {
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 50px;
        color: #000000;
        text-align: left;
        margin-bottom: 24px;
    }

    &_item {
        display: flex;
        align-items: center;

        &_text {
            margin-left: 32px;

            .text {
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 27px;
                color: #000000;
                text-align: left;
                width: 90%;
            }
        }
    }
}

@media all and (max-width: 575px) {
    .main_story {
        margin-top: 0;

        &_title {
            margin-bottom: 12px;
            font-size: 24px;
        }

        &_item {
            &_logo {
                display: none;
            }

            &_text {
                margin-left: 0;
                
                .text {
                    font-size: 14px;
                    width: 100%;
                }
            }
        }
    }
} 

@media all and (min-width: 576px) and (max-width: 767px) {
    .main_story {
        margin-top: 0;

        &_title {
            margin-bottom: 12px;
        }

        &_item {
            &_logo {
                display: none;
            }

            &_text {
                margin-left: 0;
                
                .text {
                    font-size: 14px;
                    width: 100%;
                }
            }
        }
    }
} 

@media all and (min-width: 768px) and (max-width: 991px) {
    .main_story {
        &_item {
            &_logo {
                display: none;
            }

            &_text {
                margin-left: 0;

                .text {
                    font-size: 14px;
                    width: 100%;
                }
            }
        }
    }
} 

@media all and (min-width: 992px) and (max-width: 1199px) {
    .main_story {
        &_item {
            &_logo {
                img {
                    width: 280px;
                    height: auto;
                }
            }

            &_text {
                .text {
                    font-size: 14px;
                    width: 100%;
                }
            }
        }
    }
} 

@media all and (min-width: 1200px) and (max-width: 1399px) {
    .main_story {
        &_item {
            &_logo {
                img {
                    width: 320px;
                    height: auto;
                }
            }

            &_text {
                .text {
                    font-size: 14px;
                }
            }
        }
    }
} 

@media all and (min-width: 1800px) {
    .main_story {
        &_item {
            &_logo {
                img {
                    width: 400px;
                    height: auto;
                }
            }

            &_text {
                .text {
                    font-size: 24px;
                    line-height: 140%;
                }
            }
        }
    }
} 
</style>