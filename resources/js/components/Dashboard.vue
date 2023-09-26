<template>
    <div class="dashboardWrapper">
        <div class="sideBarContainer">
            <sidebar />
        </div>
        <div class="content">
            <table />
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Sidebar from "@/js/components/Sidebar/Sidebar.vue";
import SidebarLink from "@/js/components/Sidebar/SidebarLink.vue";
import Table from "@/js/components/Table/Table.vue";
export default {
    name: "Dashboard",
    components: {
        Sidebar,
        SidebarLink,
        Table
    }
}
</script>

<style scoped>
    .dashboardWrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .sideBarContainer {
        height: 100%;
        width: fit-content;
    }

    .content {
        flex: 1 1 auto;
    }
</style>
