//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	//write your code
	if(contains(recA, recB)){
		const relativeDim = relative(recA, recB);
	return{...recA, children: [relativeDim]};
	}else if(contains(recB, recA)){
		const relativeDim = relative(recB, recA);
		return{...recB, children:[relativeDim]};
	}else{
		return{...recA};
	}
}

module.exports = updateStructure;
