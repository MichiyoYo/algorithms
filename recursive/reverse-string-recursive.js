function reverse(str) {
  if (str.length <= 1) return str;
  if (str.length === 2) return ([str[0], str[1]] = [str[1], str[0]].join(""));
  let charArr = str.split("");
  let mid = Math.floor(charArr.length / 2);
  let left = reverse(charArr.slice(0, mid).join(""));
  let right = reverse(charArr.slice(mid).join(""));
  return right.concat(left);
}

//Reverse short
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1) + str[0]);
}

reverse("pizza");
//output "azzip"
