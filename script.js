class Polygon{
    constructor(n){
        if(n >= 3 && Math.round(n) === n){
            this.sides = n
            this.angles = n
        } else {
            this.error = "This is not a polygon, There are not enough sides"
        }
    }

    getCircumfrence(sides){
        return sides.reduce(acc, cur, index =>{
            return acc + cur;
        })
    }
}

class Triangle extends Polygon{
    constructor(...sides){
        super(3)
        if(sides.length === 3){
            this.sides = sides
            this.angles = this.findAngles(this.sides)
        } else {
            this.error = "You have to many sides in this triangle. Please correct to initiate triangle"
        }
    }

    findAngles(sides){
        const angles = sides.map(function(side){
            let test = [].concat(sides)
            const index = test.indexOf(side)
            const a = side
            test.splice(index, 1)
            const b = test[0]
            test.splice(0,1)
            const c = test[0]
            test.splice(0,1)
            if(test.length === 0){
                const cosine = ((Math.pow(b,2) + Math.pow(c,2) - Math.pow(a,2))/(2*b*c))
                return (Math.acos(cosine) * 180 / Math.PI).toFixed(1)
            } else {
                this.error += "\n You ran into a problem constructing the angles"
            }
        })
        return angles
    }
}


let tri1 = new Triangle(180,120,70)