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

function relative(recA, recB){
	const recAn = normalize(recA);
	const recBn = normalize(recB);

	const res = {
		children: recB.children
	}
	if(recB.top){
		res.top = `${recBn.x1 - recAn.x1}px`;
	}
	if(recB.left){
		res.left = `${recBn.y1 - recAn.y1}px`;
	}
	if(recB.height){
		res.height = recB.height;
	}
	if(recB.width){
		res.width = recB.width;
	}
	if(recB.bottom){
		res.bottom = `${recAn.x2 - recBn.x2}px`;
	}
	if(recB.right){
		res.right = `${recAn.y2 - recBn.y2}px`;
	}
	return res;
}

module.exports = updateStructure;
