var romanToInt = function(s) {
    let ar = [];
    for (let i = 0; i < s.length; i++) {

        if (s[i] == "I" && (s[i+1] !== "V" && s[i+1] !== "X")) {
            ar.push(1);
        } else if (s[i] == "I" && s[i+1] == "V") {
            ar.push(4);
            i++; 
        } else if (s[i] == "I" && s[i+1] == "X") {
            ar.push(9);
            i++;
        }
        else if (s[i] == "V") {
            ar.push(5);
        }
        else if (s[i] == "X" && (s[i+1] !== "L" && s[i+1] !== "C")) {
            ar.push(10);
        } else if (s[i] == "X" && s[i+1] == "L") {
            ar.push(40);
            i++;
        } else if (s[i] == "X" && s[i+1] == "C") {
            ar.push(90);
            i++;
        }
        else if (s[i] == "L") {
            ar.push(50);
        }
        else if (s[i] == "C" && (s[i+1] !== "D" && s[i+1] !== "M")) {
            ar.push(100);
        } else if (s[i] == "C" && s[i+1] == "D") {
            ar.push(400);
            i++;
        } else if (s[i] == "C" && s[i+1] == "M") {
            ar.push(900);
            i++;
        }
        else if (s[i] == "D") {
            ar.push(500);
        }
        else if (s[i] == "M") {
            ar.push(1000);
        }
    }

    return ar.reduce((a, b) => a + b, 0);
};
console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))