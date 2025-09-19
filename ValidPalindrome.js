var isPalindrome = function(s) {
    let filtered = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversed = filtered.split("").reverse().join("");
    return filtered === reversed;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
