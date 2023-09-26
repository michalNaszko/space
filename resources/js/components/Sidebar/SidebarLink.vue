<template>
    <router-link
        :to="to"
        custom
        v-slot="{ href, route, navigate }"
    >
        <a :href="href" @click="navigate" :title="name">
            <font-awesome-icon :icon="icon" :class="'icon ' + (!mobile ? 'fa-4x' : 'fa-3x')" />
            <h3 v-if="mobile">{{name}}</h3>
        </a>
    </router-link>
</template>

<script>
export default {
    name: "sidebar-link",
    props: {
        to: String,
        name: String,
        icon: String,
        mobile: Boolean
    },
}
</script>

<style scoped>
    a {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        &:hover {
            background-color: $vue-states;
        }
    }

    h3 {
        padding: 0;
        margin: 0;
        color: white;
        flex: 1 1 0;
    }

    .icon {
        color: white;
        flex: 1 1 0;
    }
</style>
