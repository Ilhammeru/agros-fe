<template>
    <div class="main_footer">
        <div class="main_footer_item a_container">
            <div class="main_footer_item_logo">
                <div class="logo">
                    <img src="@/assets/icon/agros-logo-white.png" alt="">
                </div>
                <div class="divider-footer"></div>
                <div class="company-name">
                    <p class="name">PT ANTAR GLOBAL PROSPERO © 2021. All rights reserved.</p>
                </div>
            </div>
            <div class="main_footer_item_text">
                <p class="fq">Syarat & Ketentuan</p>
                <p class="privacy">Kebijakan Privasi</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
.main_footer {
    position: relative;
    bottom: 0;
    width: 100%;
    left: 0;
    background-image: url(../assets/icon/footer.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;

    &_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 14px;
        padding-bottom: 14px;

        &_logo {
            display: flex;
            align-items: center;
            width: 60%;

            .logo {
                img {
                    width: 96px;
                    height: auto;
                }
            }

            .divider-footer {
                border: 1px solid #FFF;
                width: 25%;
                margin: 0 15px;
            }

            .company-name {
                .name {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 13px;
                    line-height: 12px;
                    color: #FFFFFF;
                    width: 100%;
                }
            }
        }

        &_text {
            display: flex;
            align-items: center;

            .fq,
            .privacy {
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 12px;
                color: #FFFFFF;
            }

            .fq {
                margin-right: 24px;
            }
        }
    }
}

@media all and (max-width: 575px) {
    .main_footer {
        
        &_item {
            display: block;

            &_logo {
                width: 100%;
                justify-content: center;
                
                .divider-footer {
                    width: 5%;
                    margin: 0 5px;
                }

                .company-name {
                    .name {
                        font-size: 9px;
                    }
                }
            }

             &_text {
                 justify-content: center;
                display: flex;
                align-items: center;
                margin-top: 10px;

                .fq,
                .privacy {
                    font-size: 9px;
                }

                .fq {
                    margin-right: 16px;
                }
            }
        }
    }
}

@media all and(min-width: 576px) and (max-width: 767px) {
    .main_footer {
        &_item {
            &_logo {
                width: 65%;

                .logo {
                    img {
                        width: 55px;
                        height: auto;
                    }
                }
                
                .divider-footer {
                    width: 5%;
                    margin: 0 5px;
                }

                .company-name {
                    .name {
                        font-size: 9px;
                    }
                }
            }

             &_text {
                display: flex;
                align-items: center;

                .fq,
                .privacy {
                    font-size: 9px;
                }

                .fq {
                    margin-right: 16px;
                }
            }
        }
    }
}

@media all and(min-width: 768px) and (max-width: 991px) {
    .main_footer {
        &_item {
            &_logo {
                width: 65%;

                .divider-footer {
                    width: 5%;
                    margin: 0 5px;
                }

                .company-name {
                    .name {
                        font-size: 9px;
                    }
                }
            }

             &_text {
                display: flex;
                align-items: center;

                .fq,
                .privacy {
                    font-size: 9px;
                }

                .fq {
                    margin-right: 16px;
                }
            }
        }
    }
}

@media all and(min-width: 992px) and (max-width: 1199px) {
    .main_footer {
        &_item {
            &_logo {
                .divider-footer {
                    width: 10%;
                    margin: 0 10px;
                }
            }
        }
    }
}

@media all and(min-width: 1200px) and (max-width: 1399px) {
    .main_footer {
        &_item {
            &_logo {
                .divider-footer {
                    width: 30%;
                }

                .logo {
                    img {
                        width: 70px;
                        height: auto;
                    }
                }

                .company-name {
                    .name {
                        font-size: 10px;
                    }
                }
            }

            &_text {
                display: flex;
                align-items: center;

                .fq,
                .privacy {
                    font-size: 10px;
                }

                .fq {
                    margin-right: 16px;
                }
            }

        }
    }
}

@media all and(min-width: 1800px) {
    .main_footer {
        &_item {
            &_logo {
                .divider-footer {
                    width: 20%;
                }

                .company-name {
                    .name {
                        font-size: 18px;
                    }
                }

                .logo {
                    img {
                        width: 130px;
                        height: auto;
                    }
                }
            }

            &_text {
                display: flex;
                align-items: center;

                .fq,
                .privacy {
                    font-size: 18px;
                }

                .fq {
                    margin-right: 18px;
                }
            }
        }
    }
}
</style>
