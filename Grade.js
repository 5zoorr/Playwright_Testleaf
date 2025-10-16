let score = "82"
switch(true) {
    case (score >= 90):
        console.log("You have scored Grade A")
        break;
    case (score < 90 && score > 80):
        console.log("You have scored Grade B")
        break;
    case (score < 80 && score > 70):
        console.log("You have scored Grade C")
        break;
    case (score < 70 && score > 60):
        console.log("You have scored Grade D")
        break;
    default:
        console.log("You have scored Grade F")
        break;
}

