interface Photo {
    color: string,
    filter: string,
    brust: number
}

interface Story {
    setStroy(): void
}

class Instagram implements Photo {
    constructor(
        public color: string,
        public filter: string,
        public brust: number
    ) {

    }
}

class Youtube implements Photo, Story {
    constructor(
        public color: string,
        public filter: string,
        public brust: number
    ) {

    }
    setStroy(): void {
        console.log("story")
    }
}