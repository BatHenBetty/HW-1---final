class Counter {

    constructor(num) {
        this.num = num;
    }

    Initialize(initialValue) {
        this.num = initialValue;
    }

    Increment() {
        this.num += 1;
    }

    Go(res) {        
        for (let i = 0; i <= this.num; i++) {
 
            res.innerHTML += i + ",";
            console.log(i);
        }
    }

}