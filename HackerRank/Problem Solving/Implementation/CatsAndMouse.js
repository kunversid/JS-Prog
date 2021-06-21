// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    if (x === y || Math.abs(x - z) === Math.abs(y - z)) {
        return "Mouse C";
    } else if (Math.abs(x - z) < Math.abs(y - z)) {
        return "Cat A";
    } else if (Math.abs(x - z) > Math.abs(y - z)) {
        return "Cat B";
    }
}