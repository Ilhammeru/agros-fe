<template>
    <div>
        <div class="errors" id="errors-register" v-show="err.length > 0">
            <div class="erorrs_list" v-for="(error, a) in err" :key="a">
                <ul>
                    <li class="errors_list_text">
                        {{ error }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Errors",
    props: {
        err: {
            type: Array,
            default: []
        }
    }
}
</script>