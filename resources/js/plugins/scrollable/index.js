import {requestWrapper} from "@/js/helpers/requests";

const Load = {
    none: 0,
    prev: 1,
    next: 2
}

export default class Scrollable {

    async initialize(tableScroll, elementHeight, apiURL) {
        this.mutex = false;
        this.apiURL = apiURL;
        this.tableScroll = tableScroll;
        this.n = Math.ceil(tableScroll.clientHeight / elementHeight);
        this.scrollHeight = tableScroll.scrollHeight;
        this.elementHeight = elementHeight;
        this.scrollTop = tableScroll.scrollTop;
        this.db = {start_idx: 0, data: null};
        this.db.data = await this.fetchData(0, 3 * this.n);
        this.event = new Event("dataLoaded");
    }

    async fetchData(startIndex, endIndex) {
        if (startIndex < 0 || endIndex < startIndex)
            return;

        return requestWrapper.get(this.apiURL + "?start_idx=" + startIndex +"&number=" + (endIndex - startIndex + 1), null);
    }

    whichDataLoad(scrollTop, topAtElementIdx) {
        if (this.db.start_idx > 0 && topAtElementIdx <= this.n / 2) {
            return Load.prev;
        }

        if (topAtElementIdx >= 3 * this.n / 2) {
            return Load.next;
        }

        return Load.none;
    }

    updateData(loadedData, loadDirection) {
        if (loadedData.length)
        {
            let newData;
            if (loadDirection === Load.prev) {
                newData = this.db.data.slice(0, this.db.data.length - loadedData.length);
                this.db.start_idx -= loadedData.length;
                newData = loadedData.concat(newData);
            }

            if (loadDirection === Load.next) {
                newData = this.db.data.slice(loadedData.length, this.db.data.length);
                this.db.start_idx += loadedData.length;
                newData = newData.concat(loadedData);
            }

            this.db.data = newData;
            this.tableScroll.dispatchEvent(this.event);
        }
    }

    setScrollTop(loadDirection) {
        if (loadDirection === Load.prev) {
            this.scrollTop += this.elementHeight * this.n / 2;
        }
        else if (loadDirection === Load.next) {
            this.scrollTop -= this.elementHeight * this.n / 2;
        }
    }

    getItems() {
        return this.db.data;
    }

    async scroll() {
        if (!this.mutex) {
            let topAtElementIdx = this.tableScroll.scrollTop / this.elementHeight;
            let dataToLoadDirection = this.whichDataLoad(this.tableScroll.scrollTop, topAtElementIdx);
            let startIdx;
            let endIdx;

            switch (dataToLoadDirection) {
                case Load.prev:
                    startIdx = this.db.start_idx - 1 > this.n / 2 ?
                        this.db.start_idx  - this.n / 2 : 0;
                    endIdx = this.db.start_idx;
                    break;
                case Load.next:
                    startIdx = this.db.start_idx + this.db.data.length;
                    endIdx = startIdx - 1 + this.n / 2;
                    break;
                default:
                    return;
            }

            this.mutex = true;
            let loadedData = await this.fetchData(startIdx, endIdx);
            this.updateData(loadedData, dataToLoadDirection);
            this.setScrollTop(dataToLoadDirection);
            this.mutex = false;
        }
    }
}
