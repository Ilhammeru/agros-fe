<template>
    <div class="a_card" :style="cardStyling">
        <div class="a_card_item">
            <div class="a_card_item_header">
                <div class="card_image">
                    <slot name="image" />
                </div>
            </div>
            <div class="a_card_item_body">
                <slot name="title"></slot>
                <slot name="desc"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        borderRadius: {
            type: String,
            default: 0
        },
        height: {
            type: String,
            default: 'auto'
        },
        heightMd: {
            type: String,
            default: 'auto'
        },
        heightSm: {
            type: String,
            default: 'auto'
        },
        heightXl: {
            type: String,
            default: '360'
        }
    },
    computed: {
        cardStyling() {
            return {
                '--border-radius': this.borderRadius + 'px',
                '--height': this.height + 'px',
                '--heightMd': this.heightMd != 'auto' ? this.heightMd + 'px' : this.heightMd,
                '--heightSm': this.heightSm != 'auto' ? this.heightSm + 'px' : this.heightSm,
                '--heightXl': this.heightXl != 'auto' ? this.heightXl + 'px' : this.heightXl
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.a_card {
    padding: 0 12px;
    height: var(--height);
    cursor: pointer;

    &_item {
        background: #FFF;
        border-radius: var(--border-radius);
        height: 100%;
        
        &_header {
            .image {
                width: 100%;
            }
        }

        &_body {
            padding: 16px;
        }
    }

}

.a_col_3:first-child {
    .a_card {
        padding-left: 0;
    }
}

.a_col_3:last-child {
    .a_card {
        padding-right: 0;
    }
}

@media all and(min-width: 576px) and (max-width: 767px) {
    .a_card {
        height: var(--heightSm);
    }
}

@media all and(min-width: 768px) and (max-width: 991px) {
    .a_card {
        height: var(--heightSm);
    }
}

@media all and(min-width: 1800px) {
    .a_card {
        height: var(--heightXl);
    }
}
</style>