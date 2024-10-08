arr=[2 , 2, 3 ,4 ,5 ,6, 7, 8, 9, 10,11,12,13,14,15,16,17,18];
sum = 0;
rez = 0;
for(i=0;i<=17;i++){
    document.write(arr[i]+ ' ');
    }
for(i=1;i<=17;i++){
sum += arr[i];
}
document.write('<br>'+ sum);
rez = arr[0] * sum;
document.write('<br>'+ rez);

document.write('<br>');

arr1 = [1 , 2, 3, 4, 50 , 6, 7, 8, 9, 10];
sum1 = 0;
col =0;
for(i =0; i <=9; i ++){
    document.write(arr1[i]+ ' ');
}
for(i =0; i <=9; i ++){
    if(arr1[i]>=0 && arr1[i]<= 10){
        sum1+=arr1[i];
        col++;
    }
}
document.write('<br>'+ sum1);
document.write('<br>'+ col);

let f = new Object();
f.Nazvanie = 'Октяборьска';
f.nomer = 11;
f.Strana = [
    "Россия",
     "Челябинская"
];
f.h = new Object();
f.h.gorog = "Магнитогорск";
f.h.poch_index = "566543"

let wod =`
Страна : ${f.Strana[0]} <br>
Область : ${f.Strana[1]} <br>
Город : ${f.h.gorog} <br>
Улица : ${f.Nazvanie} , ${f.nomer} <br>
Почтовый индекс : ${f.h.poch_index}
`;

document.write('<br><br>'+wod);