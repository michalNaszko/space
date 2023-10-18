<template>
    <b-table hover bordered no-border-collapse show-empty :items="items"></b-table>
</template>

<script>
export default {
    name: "b-table-extension",
    inject: ['items']
}
</script>

<style scoped lang="scss">

</style>
