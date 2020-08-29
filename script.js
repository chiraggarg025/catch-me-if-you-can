document.getElementById('box').addEventListener('mouseover',function(e){
	let random1 = (Math.random() - 0.5) * 2*100; 
	let random2 = (Math.random() - 0.5) * 2*100; 
	let random3 = (Math.random() - 0.5) * 2*100; 
	let random4 = (Math.random() - 0.5) * 2*100; 
		let marginTop=document.getElementById('box').style.marginTop;
		marginTop=Number(marginTop.substring(0,marginTop.length-2));
		marginTop+=random1;
		
		
		let marginLeft=document.getElementById('box').style.marginLeft;
		marginLeft=Number(marginLeft.substring(0,marginLeft.length-2));
		marginLeft+=random2;

		let marginRight=document.getElementById('box').style.marginRight;
		marginRight=Number(marginRight.substring(0,marginRight.length-2));
		marginRight+=random3;

		let marginBottom=document.getElementById('box').style.marginBottom;
		marginBottom=Number(marginBottom.substring(0,marginBottom.length-2));
		marginBottom+=random4;

		if(marginTop>10 && marginTop<90){
			document.getElementById('box').style.marginTop=marginTop+'vh';
		}
		if(marginLeft>10 && marginLeft<90){
			document.getElementById('box').style.marginLeft=marginLeft+'vw';
		}
		if(marginBottom>10 && marginBottom<90){
			document.getElementById('box').style.marginBottom=marginBottom+'vh';
		}
		if(marginRight>10 && marginRight<90){
			document.getElementById('box').style.marginRight=marginRight+'vw';
		}
})