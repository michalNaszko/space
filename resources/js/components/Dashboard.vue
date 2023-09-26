<template>
    <div class="dashboardWrapper">
        <sidebar>
        </sidebar>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Sidebar from "@/js/components/Sidebar/Sidebar.vue";
import SidebarLink from "@/js/components/Sidebar/SidebarLink.vue";
export default {
    name: "Dashboard",
    components: {
        Sidebar,
        SidebarLink
    }
}
</script>

<style scoped>
    .dashboardWrapper {
        height: 100%;
        width: 100%;
    }
</style>
