var maxOuterNum = 2222,
    maxInnerNum = 2222;

for (var i = 0; i <= maxOuterNum; i++) {
    // console.log("i = " + i);
    console.log("The " + i + "'s Table");
    for (var j = 0; j <= maxInnerNum; j++) {
        // console.log("i = " + i + " | j = " + j);
        console.log(i + " X " + j + " = " + (i * j));
    }

    if (i != maxOuterNum) {
        console.log("_________________________");
    }
}