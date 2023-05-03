const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here
async function showMessage() {
  const message = text.value;
  const delayVal = delay.value*1000;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
	// await new Promice((resolve)=>{
	// 	settimeout(()=>{
	// 		resolve(message);
	// 	},delayVal);
	// });
  output.innerText = message;
}

btn.addEventListener("click", showMessage);
