let arr = [
    [1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1]
]



// daigonal checking
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] === 1 && arr[i][arr.length - i - 1] === 0) {
        count++;
    }
}

if (count === arr.length) {
    console.log(true);
} else {
    console.log(false);
}


// array arrangement

if (arr.length < 5) {
    arr.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    })
} else {
    arr.sort((a, b) => {
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    })
}


console.log(arr);