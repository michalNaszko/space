<template>
    <div ref="scrollable-div" @scroll.passive="onScroll" @scrollend="onScroll">
        <slot :items="this.items"></slot>
    </div>
</template>

<script>
import Scrollable from "@/js/plugins/scrollable";
import {computed} from "vue";

export default {
    name: "ScrollableComponent",
    data() {
        return {
            scroll: null,
            items: []
        }
    },
    provide() {
        return {
            items: computed(() => this.items)
        }
    },
    methods: {
        onScroll() {
            this.scroll.scroll();
        },
        initialize(elementHeight) {
            const scrollable = this.$refs["scrollable-div"];
            this.scroll.initialize(
                scrollable,
                elementHeight
            );
            this.items = this.scroll.getItems();
        }
    },
    mounted() {
        console.log("Mounted ScrollableComponent");
        const scrollable = this.$refs["scrollable-div"];
        this.scroll = new Scrollable();

        scrollable.addEventListener(
            "dataLoaded",
            (e) => {
                this.items = this.scroll.getItems();
            },
            false,
        );
    }
}
</script>

<style scoped lang="scss">

</style>
