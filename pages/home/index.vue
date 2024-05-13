<template>
    <HomeComponent :product1="product1" />
</template>

<script>
import HomeComponent from "@/components/HomeComponent";
export default {
    components: {
        HomeComponent
    },
    data() {
        return {
            product1: []
        }
    },
    created() {
        this.ProductApi()
    },
    methods: {
        async ProductApi() {
            this.$store.dispatch("ListProduct").then((res) => {
                this.product1 = res.data
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>