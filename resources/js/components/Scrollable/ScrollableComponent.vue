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
        async initialize(elementHeight, apiURL) {
            const scrollable = this.$refs["scrollable-div"];
            await this.scroll.initialize(
                scrollable,
                elementHeight,
                apiURL
            );
            this.items = this.scroll.getItems();
        }
    },
    mounted() {
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
