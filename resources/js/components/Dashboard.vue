<template>
    <div class="dashboardWrapper">
        <div class="sideBarContainer">
            <sidebar @menuShowed="showContent"/>
        </div>
        <div class="content" v-show="showContentFlag">
            <table-component></table-component>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/js/components/Sidebar/Sidebar.vue";
import SidebarLink from "@/js/components/Sidebar/SidebarLink.vue";
import TableComponent from "@/js/components/Table/TableComponent.vue";
export default {
    name: "Dashboard",
    data() {
        return {
            showContentFlag: true,
        }
    },
    components: {
        Sidebar,
        SidebarLink,
        TableComponent
    },
    methods: {
        showContent(menuShowed) {
            this.showContentFlag = !this.$isMobile() || !menuShowed
        }
    }
}
</script>

<style lang="scss" scoped>
    .dashboardWrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        white-space: nowrap;
    }

    .sideBarContainer {
        height: 100%;
        width: fit-content;
    }

    .content {
        flex: 1 0 auto;
        height: 100%;
        white-space: nowrap;
    }

    @media screen and (max-device-width: $max-width) {
        .sideBarContainer {
            width: inherit;
            height: fit-content;
        }

        .dashboardWrapper {
            flex-direction: column;
        }
    }
</style>
