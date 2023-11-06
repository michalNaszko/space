<template>
    <div class="tableContainer">
        <div class="tableCard" data="card-black-background">
            <ScrollableComponent ref="scrollTable" class="tableDiv">
                <b-table-extension />
            </ScrollableComponent>
        </div>
    </div>
</template>

<script>
import Scrollable from "@/js/plugins/scrollable";
import "@/js/plugins/scrollable/index"
import ScrollableComponent from "@/js/components/Scrollable/ScrollableComponent.vue";
import BTableExtension from "@/js/components/Table/BTableExtension.vue";
export default {
    name: "table-component",
    components: {BTableExtension, ScrollableComponent},
    data() {
        return {
            scrollTable: null,
            items: [{ age: 1, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { age: 1, first_name: 'Dickerson', last_name: 'Macdonald' }]
        }
    },
    methods: {
        onScroll() {
            this.scrollTable.scroll();
        }
    },
    mounted() {
        this.$refs["scrollTable"].initialize(
           40,
            "api/users"
        );
        this.items = this.$refs["scrollTable"].items;
    }
}
</script>

<style lang="scss" scoped>
    .tableContainer {
        display: flex;
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .tableCard {
        flex: 1 1 auto;
        color: white;
        margin: 30px;
        border-radius: 10px;
        height: calc(100% - 60px);
    }

    .tableDiv {
        margin: 30px;
        height: calc(100% - 60px);
        overflow-y: auto;
    }

    :deep(thead) {
        background-color: $vue;
    }

    @media screen and (max-device-width: $max-width) {
        .tableCard {
            margin: 0;
            height: 100%;
        }
    }
</style>
