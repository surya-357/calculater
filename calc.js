// let string="surya";
// let string1=string.replace("s","b");
// let string2=string1.replace("u","e");
// let string3=string2.replace("a","st");
// console.log(string3)



const today=new Date();
const day=today.getDay();
const date=today.getDate();
const daylist=['sunday','Monday','tuesday','wednesday','thursday','friday','saturday']
const month=today.getMonth()+1;
const year=today.getFullYear();
console.log('Today is:'+date+"/"+month+"/"+year+"/"+daylist[day])

let hour=today.getHours();
let miniute=today.getMinutes();
let second=today.getSeconds();
let prepand=(hour>=12)?'pm':'am';
hour=(hour>=12)?hour-12:hour;


console.log('Today Time Is:'+hour+':'+miniute+':'+second+':'+prepand)