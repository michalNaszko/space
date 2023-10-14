const dataBase = [
    { age: 1, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 2, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 3, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 4, first_name: 'Jami', last_name: 'Carney' },
    { age: 5, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 6, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 7, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 8, first_name: 'Jami', last_name: 'Carney' },
    { age: 9, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 10, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 11, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 12, first_name: 'Jami', last_name: 'Carney' },
    { age: 13, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 14, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 15, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 16, first_name: 'Jami', last_name: 'Carney' },
    { age: 17, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 18, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 19, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 20, first_name: 'Jami', last_name: 'Carney' },
    { age: 21, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 22, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 23, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 24, first_name: 'Jami', last_name: 'Carney' },
    { age: 25, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 26, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 27, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 28, first_name: 'Jami', last_name: 'Carney' },
    { age: 29, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 30, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 31, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 32, first_name: 'Jami', last_name: 'Carney' },
    { age: 33, first_name: 'Jami', last_name: 'Carney' },
    { age: 34, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 35, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 36, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 37, first_name: 'Jami', last_name: 'Carney' },
    { age: 38, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 39, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 40, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 41, first_name: 'Jami', last_name: 'Carney' },
    { age: 42, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 43, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 44, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 45, first_name: 'Jami', last_name: 'Carney' },
    { age: 46, first_name: 'Jami', last_name: 'Carney' },
    { age: 47, first_name: 'Jami', last_name: 'Carney' },
    { age: 48, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 49, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 50, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 51, first_name: 'Jami', last_name: 'Carney' },
    { age: 52, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 53, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 54, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 55, first_name: 'Jami', last_name: 'Carney' },
    { age: 56, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 57, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 58, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 59, first_name: 'Jami', last_name: 'Carney' },
];

const Load = {
    none: 0,
    prev: 1,
    next: 2
}

export default class Scrollable {
    n;
    scrollHeight;
    elementHeight;
    scrollTop;
    constructor(tableScroll, elementHeight, items) {
        this.tableScroll = tableScroll;
        this.n = Math.ceil(tableScroll.clientHeight / elementHeight);
        this.scrollHeight = tableScroll.scrollHeight;
        this.elementHeight = elementHeight;
        this.scrollTop = tableScroll.scrollTop;
        this.data = this.fetchData(0, 3 * this.n);
        this.event = new Event("dataLoaded");
        items.Target = dataBase.slice();
    }

    fetchData(startIndex, endIndex) {
        if (startIndex < 0 || endIndex < startIndex)
            return;

        return dataBase.slice(startIndex, endIndex).map((d, idx) => {
            return  {idx: startIndex+idx, data: d};
        });
    }

    whichDataLoad(scrollTop, topAtElementIdx) {
        if (this.data[0].idx > 0 && topAtElementIdx <= this.n / 2) {
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
                newData = this.data.slice(0, this.data.length - loadedData.length);
                newData = loadedData.concat(newData);
            }

            if (loadDirection === Load.next) {
                newData = this.data.slice(loadedData.length, this.data.length);
                newData = newData.concat(loadedData);
            }

            this.data = newData;
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
        return this.data.map(d => JSON.parse(JSON.stringify(d.data)));
    }

    scroll(scrollTop) {
        let topAtElementIdx = scrollTop / this.elementHeight;
        let dataToLoadDirection = this.whichDataLoad(scrollTop, topAtElementIdx);
        let startIdx;
        let endIdx;

        switch (dataToLoadDirection) {
            case Load.prev:
                startIdx = this.data[0].idx - 1 > this.n / 2 ?
                    this.data[0].idx - this.n / 2 : 0;
                endIdx = this.data[0].idx;
                break;
            case Load.next:
                startIdx = this.data.at(-1).idx + 1;
                endIdx = startIdx - 1 + this.n / 2;
                break;
            default:
                return;
        }

        let loadedData = this.fetchData(startIdx, endIdx);
        this.updateData(loadedData, dataToLoadDirection);
        this.setScrollTop(dataToLoadDirection);
    }
}

function createScrollable(clientHeight, scrollHeight, elementHeight, scrollTop) {
    return new Scrollable(clientHeight, scrollHeight, elementHeight, scrollTop);
}
