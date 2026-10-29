const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let sum  = 0;
//Add your code here
	Element.querySelectorAll(td .price).forEach((val) => {
		sum += val;
})
	return sum;
  
};

getSumBtn.addEventListener("click", getSum);

