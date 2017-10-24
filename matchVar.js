var matchNum = 10;

for (var electricBoogaloo = 1; electricBoogaloo <= 100; electricBoogaloo++) {
    if (electricBoogaloo % matchNum  == 0) {
        console.log("MATCHED " + matchNum + "!");
    } else {
        console.log(electricBoogaloo);
    }
}