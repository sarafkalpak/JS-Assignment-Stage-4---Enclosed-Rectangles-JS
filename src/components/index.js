//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	//write your code
	if(contains(rec1, rec2)){
		const relativeDim = relative(rec1, rec2);
	return{...rec1, children: [relativeDim]};
	}else if(contains(rec2, rec1)){
		const relativeDim = relative(rec2, rec1);
		return{...rec2, children:[relativeDim]};
	}else{
		return{...rec1};
	}
}

function relative(rec1, rec2){
	const recAn = normalize(rec1);
	const recBn = normalize(rec2);

	const res = {
		children: rec2.children
	}
	if(rec1.top){
		res.top = `${recBn.x1 - recAn.x1}px`;
	}
	if(rec1.left){
		res.left = `${recBn.y1 - recAn.y1}px`;
	}
	if(rec1.height){
		res.height = rec1.height;
	}
	if(rec1.width){
		res.width = rec1.width;
	}
	if(rec1.bottom){
		res.bottom = `${recAn.x2 - recBn.x2}px`;
	}
	if(rec1.right){
		res.right = `${recAn.y2 - recBn.y2}px`;
	}
	return res;
}

function contains(rec1, rec2){
	const recAn = normalize(rec1);
	const recBn = normalize(rec2);

	if(
		recAn.x1 <= recBn.x1
		&& recAn.y1 <= recBn.y1
		&& recAn.x2 >= recBn.x2
		&& recAn.y2 >= recBn.y2
	){
		return true;
	}
	return false;
}
const T = 0;
const W = 0;
function normalize(rec){
	return{
		x1: rec.top ? parseInt(rec.top): (T-(parseInt(rec.bottom) + parseInt(rec.height))),
		y1: rec.left ? parseInt(rec.left): (W-(parseInt(rec.right) + parseInt(rec.width))),
		x2: rec.bottom ? (T-parseInt(rec.bottom)): (parseInt(rec.top)+ parseInt(rec.height)),
		y2: rec.right ? (W-parseInt(rec.right)): (parseInt(rec.left)+ parseInt(rec.width))
	}
}

module.exports = updateStructure;
