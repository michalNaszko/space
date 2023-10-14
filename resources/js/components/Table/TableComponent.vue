<template>
    <div class="tableContainer">
        <div class="tableCard" data="card-black-background">
            <div class="tableDiv" ref="table-div" @scroll.passive="onScroll" @scrollend="onScroll">
                <b-table hover bordered no-border-collapse show-empty :items="items"></b-table>
            </div>
        </div>
    </div>
</template>

<script>
import Scrollable from "@/js/plugins/scrollable";
import "@/js/plugins/scrollable/index"
export default {
    name: "table-component",
    data() {
        return {
            scrollTable: null,
            items: []
        }
    },
    methods: {
        onScroll() {
            this.scrollTable.scroll();
        }
    },
    mounted() {
        try {
            const tableScroll = this.$refs["table-div"];
            this.scrollTable = new Scrollable(
                tableScroll,
                document.getElementsByTagName("td")[0].offsetHeight,
                this.items
            );
            tableScroll.addEventListener(
                "dataLoaded",
                (e) => {
                    this.items = this.scrollTable.getItems();
                },
                false,
            );
            this.items = this.scrollTable.getItems();
        } catch (e) {
            console.log(e);
        }

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
