<template>
    <div>
        <button @click="myAction">bấm</button>
    </div>
</template>

<script>
export default {
    methods: {
        myAction() {
            this.$emit("openEmit", 2)
        }
    }
}
</script>

<style lang="scss" scoped></style>