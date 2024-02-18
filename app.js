// for loop -> davtalt
console.log("Hello");
// for(var i=ehleh_too; i=tugsguh too; i++/i--){
// end davtah code bichne
//for(var i=1;i<=10;i++){
		//console.log(i+".Hello");
//}
//for(var i=10; i>=1; i--){
	//console.log(i);
//}
//*for(var i=1;i<=20;i++){
		//if(i%2==0){
			//console.log("tegsh:"+i);
		//}
		//else{
			//console.log("sondgoi:"+i);
		//}
//}
for(var i=1;i<=100;i++){
		if(i%3==0 && i%5==0){
			console.log("3 bas 5 huvaagddag too:"+i);
		}
}
var sum=0;
var urjver=1;
for(var i=1;i<=10;i++){
		sum=sum+i;
		urjver=urjver*i;
}
console.log("1-10 hurtleh niilber:"+sum);
console.log("1-10 * too:"+urjver);
var hurd=5
for(var i=1;i<=10;i++){
		console.log(hurd + "x" +i + "=" + hurd*i);
}
var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);
var gal=4
var chance=3;
for(var i=1; i<=chance;i++){
	var myNumber = +prompt("1-10 too taa");
	if(myNumber==randomNumber){
		alert("Ta hojloo."+ i +" dahi udaagaar hojloo");
		break;
	}else if(myNumber=="" || myNumber<0 || myNumber>10){
		alert("Buruu utga bna");
	}else if(myNumber>randomNumber){
		alert("ikh bna");
	}else if(myNumber<randomNumber){
		alert("baga bna");
	}else{
		alert("buruu bna. Dahin oroldono uu")
	}
	if(i==chance){
		alert("Ta hojigdloo");
		break;
	}
}