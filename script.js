var item1=("apples");
var item2=("bread");
var item3=("milk");
var item4=("cheese");
var item5=("eggs");

var price1=(0.39);
var price2=(1.50);
var price3=(2.34);
var price4=(4.00);
var price5=(1.11);

console.log(item1 + ": $" + price1);
console.log(item2 + ": $" + price2);
console.log(item3 + ": $" + price3);
console.log(item4 + ": $" + price4);
console.log(item5 + ": $" + price5);

function total() {
	return price1 + price2 + price3 + price4 + price5;
};

var sum = total();

console.log(sum);