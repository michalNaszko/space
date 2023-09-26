<template>
    <div class="sidebar">

        <div class="nav-menu">
            <div class="logo"
                 :data="backgroundColor">
                <font-awesome-icon :icon="['fas', 'meteor']" :class="'icon ' + (!isMobile ? 'fa-4x' : 'fa-3x')" />
                <font-awesome-icon @click="toggleMenu()" :icon="['fas', 'bars']" :class="'icon mobile ' + (!isMobile ? 'fa-4x' : 'fa-3x')" />
            </div>

            <transition name="menu-fade" mode="out-in">
                <ul class="nav" v-show="!isMobile || showMenu"
                    :data="backgroundColor" >
                    <li>
                        <sidebar-link class="sidebarLink" to="/profile" icon="fa-solid fa-id-card" name="Profile" :mobile="isMobile"/>
                    </li>
                    <li>
                    <sidebar-link class="sidebarLink"  to="/post" icon="fa-solid fa-note-sticky" name="Posts" :mobile="isMobile"/>
                    </li>
                    <li>
                        <sidebar-link class="sidebarLink" to="/users" icon="fa-solid fa-users" name="Users" :mobile="isMobile"/>
                    </li>
                    <li>
                        <sidebar-link class="sidebarLink" to="/statistics" icon="fa-solid fa-chart-line" name="Statistics" :mobile="isMobile"/>
                    </li>
                    <li>
                        <sidebar-link class="sidebarLink" to="/about" icon="fa-solid fa-info" name="About" :mobile="isMobile"/>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
import SidebarLink from "@/js/components/Sidebar/SidebarLink.vue";
export default {
    name: "sidebar",
    data() {
        return {
            showMenu: false
        }
    },
    props: {
        backgroundColor: {
            type: String,
            default: "vue"
        },
    },
    components: {
        SidebarLink
    },
    computed: {
        isMobile() {
            return screen.width <= 768
        }
    },
    methods: {
        toggleMenu() {
            console.log("toggleMenu")
            this.showMenu = !this.showMenu
        }
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
        z-index: 2;
        position: relative;
        border-bottom: 1px solid white;
        padding: 15px 15px;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }

    .icon {
        color: white;
    }

    .nav {
        z-index: 1;
        position: relative;
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

        li {
            border-bottom: 1px solid white;
            margin: 0 25px;
        }

        li:first-of-type {
            margin-top: 0;
        }

        li:last-of-type {
            margin-top: 0;
            padding: 5px 0;
            border: none;
        }

        .menu-fade-enter-active,
        .menu-fade-leave-active  {
            transition: all 0.3s ease-in-out;
        }

        .menu-fade-enter-from,
        .menu-fade-leave-to {
            transform: translateY(-100%);
        }
    }

</style>
