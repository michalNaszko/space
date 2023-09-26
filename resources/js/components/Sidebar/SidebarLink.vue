<template>
    <router-link
        :to="to"
        custom
        v-slot="{ href, route, navigate }"
    >
        <li>
            <a :href="href" @click="navigate" :title="name">
                <font-awesome-icon :icon="icon" class="icon fa-3x" />
            </a>
        </li>
    </router-link>
</template>

<script>
export default {
    name: "sidebar-link",
    props: {
        to: String,
        name: String,
        icon: String
    }
}
</script>

<style scoped>

</style>
