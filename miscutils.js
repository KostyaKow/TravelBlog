//date stuff stolen from my timesheet
function dayNumToName(day) {
   var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   if (day < 0 || day > 6)
      return 'Bad day of the week';
   else return days[day];
}
function fixYear(n) {
   return 1900 + n; //-2000 so prints 15 instead of 2015
}
function fixMonth(n) {
   return n + 1;
}
function formatJsDate(milli) {
   var d = new Date(milli);
   var dayName = dayNumToName(d.getDay()) + ' ';
   var year = fixYear(d.getYear());
   var month = fixMonth(d.getMonth());
   return dayName + d.getDate() + '/' + month + '/' + year;
}

//re-implementing wheel in HTML5
//todo: use build-in
function filter(lst, test) {
   var ret = [];
   for (x in lst) {
      if (test(lst[x]))
         ret.push(lst[x]);
   }
   return ret;
}
function map(lst, f) {
   var ret = [];
   for (x in lst)
      ret.push(f(lst[x]));
   return ret;
}
//cmpr 0 = equal, 1 = smaller, 2 = bigger
function sort(lst, cmpr) {
   if (lst.length == 0)
      return [];
   var first = lst[0];
   lst.shift();

   var smaller = filter(lst, (elem) => {
      var cmp = cmpr(elem, first);
      return cmp == 0 || cmp == 1;
   });

   var bigger = filter(lst, (elem) => (cmpr(elem, first) == 2));

   var ret = sort(smaller, cmpr);
   ret.push(first);
   ret = ret.concat(sort(bigger, cmpr));
   return ret;
}

function cmpNums(a, b) {
   if (a == b) return 0;
   if (a < b) return 1;
   if (a > b) return 2;
}

//alert(sort([3, 2, 1, 6, 4], cmpNums));

function isStr(x) {
   return x instanceof String || typeof x === 'string';
}

if (typeof notInNode === 'undefined') {
   module.exports.sort = sort;
   module.exports.cmpNums = cmpNums;
}
