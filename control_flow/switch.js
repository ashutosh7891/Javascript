// switch => when you want to compare one value with diffrent situation

//syntax => 
// switch (key) {
    // case value:
        
        // break;

    // default:
        // break;
// }

const month = "march"

// switch (month) {
//     case 1:
//         console.log("january");
        
//         break;
//     case 2:
//         console.log("february");
        
//         break;
//     case 3:
//         console.log("march");
        
//         break;
//     case 4:
//         console.log("April");
        
//         break;

//     default:
//         console.log("default case match");
//         break;
// }
switch (month) {
    case "jan":
        console.log("january");
        
        break;
    case "feb":
        console.log("february");
        
        break;
    case "march":
        console.log("march");
        
        break;
    case "april":
        console.log("April");
        
        break;

    default:
        console.log("default case match");
        break;
}