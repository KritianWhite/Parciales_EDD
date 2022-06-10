var res = r1(1,0)
console.log(res)
console.log("Hola bb")
function r1(a, b){
    if (a==0) return 0
    return b+r1(a-1,b-1)
    }
function r2(a, b){
    if (a==0) {
        return 0
    }
    return b+r2(a-1,b)+r2(a-1,b)
    }