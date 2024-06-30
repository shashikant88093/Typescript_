abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {

    }
    abstract getSepia():void
    getTimeShot():number{
        return 8
    }
}

class Facebook extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust:number
    ) {
        super(
            cameraMode, filter
        )
    }
    getSepia(): void {
        console.log("try sepia")
    }

}

const shashi = new Facebook("Test","test",3)