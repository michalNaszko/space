<template>
    <div class="sidebar"
         :data="backgroundColor">

        <div class="nav-menu">
            <div class="logo">
                <font-awesome-icon :icon="['fas', 'meteor']" class="icon fa-4x" />
                <font-awesome-icon :icon="['fas', 'bars']" class="icon fa-4x mobile" />
            </div>

            <ul class="nav">
                <li>
                    <sidebar-link class="sidebarLink" to="/profile" icon="fa-solid fa-id-card" name="Profile"/>
                </li>
                <li>
                <sidebar-link class="sidebarLink"  to="/post" icon="fa-solid fa-note-sticky" name="Posts"/>
                </li>
                <li>
                    <sidebar-link class="sidebarLink" to="/users" icon="fa-solid fa-users" name="Users"/>
                </li>
                <li>
                    <sidebar-link class="sidebarLink" to="/statistics" icon="fa-solid fa-chart-line" name="Statistics"/>
                </li>
                <li>
                    <sidebar-link class="sidebarLink" to="/about" icon="fa-solid fa-info" name="About"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import SidebarLink from "@/js/components/Sidebar/SidebarLink.vue";
export default {
    name: "sidebar",
    props: {
        backgroundColor: {
            type: String,
            default: "vue"
        },
        sidebarLinks: {
            type: Array,
            default: () => []
        },
    },
    components: {
        SidebarLink
    }
}
</script>

<style scoped>
    .sidebar {
        height: 100%;
        width: fit-content;
    }

    .nav-menu {
        height: 100%;
        display: flex;
        flex-flow: column;
    }

    .logo {
        border-bottom: 1px solid white;
        padding: 15px 2px;
        margin: 0 8px;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }

    .icon {
        color: white;
    }

    .nav {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
    }

    li {
        padding: 5px;
    }

    li:first-of-type {
        margin-top: 10px;
    }

    li:last-of-type {
        margin-top: auto;
        padding-bottom: 40px;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 768px){
        .mobile {
            display: block;
            text-align: right;
            margin-left: 10px;
        }

        .sidebar {
            width: inherit;
            height: fit-content;
        }

        .nav {
            display: none;
        }
    }

</style>
