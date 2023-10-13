<template>
    <div class="tableContainer">
        <div class="tableCard" data="card-black-background">
            <div class="tableDiv" ref="table-div" @scroll.passive="onScroll">
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
            items: [
                { age: 40, first_name: '__Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
            ]
        }
    },
    methods: {
        onScroll() {
            const tableScroll = this.$refs["table-div"];
            this.scrollTable.scroll(tableScroll.scrollTop);
            console.log("Scroll!");
            console.log(document.getElementsByTagName("td")[0].offsetHeight);
        }
    },
    mounted() {
        try {
            const tableScroll = this.$refs["table-div"];
            console.log("clientHeight: " + tableScroll.clientHeight);
            console.log("scrollHeight: " + tableScroll.scrollHeight);
            console.log("offsetHeight: " + document.getElementsByTagName("td")[0].offsetHeight);
            console.log("scrollTop: " + tableScroll.scrollTop);
            this.scrollTable = new Scrollable(tableScroll.clientHeight,
                tableScroll.scrollHeight,
                document.getElementsByTagName("td")[0].offsetHeight,
                tableScroll.scrollTop);
            console.log("items:");
            this.items = this.scrollTable.getItems()
            console.log(itemsTmp);
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
