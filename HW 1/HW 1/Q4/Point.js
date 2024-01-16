class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    Show() {
        console.log(`(${this.x},${this.y})`);

    }

    Equals(p) {
        if ((p.x == this.x) && (p.y == this.y))
            return true;

        else
            return false;

    }

    CheckPoints1(arr, x, y) { //משימה 2
        for (const pnt of arr) {
            if (pnt.x == x && pnt.y == y)
                return true;
            else
                return false;
        }
    }


    CheckPoints2(arr, obj) { //משימה 3
        for (const point of arr) {
            if (point.Equals(obj))
                return true;
            else
                return false;
        }
    }



    Calc(arr1) {
        let totalDistance = 0;
        if (arr1 && arr1.length > 1) {
            for (var i = 0; i < arr1.length - 1; i++) { //לנקודה האחרונה אין בן זוג
                const point1 = arr1[i];
                const point2 = arr1[i + 1];
                const dis = Math.sqrt((Math.pow(point1.x - point2.x), 2) + (Math.pow(point1.y - point2.y), 2));
                totalDistance += dis
            }
        }
        return totalDistance;
    }

}