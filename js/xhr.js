async function XHRsend(val){
	let ret = new Object();
	const promise = new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		if(!val.method.match(/^(POST)|(GET)$/)){
			reject("mthod name is faild");
		}
		xhr.open(val.method, val.url);
		xhr.onreadystatechange = function() {
			if(xhr.readyState !== 4){
				return;
			}
			if(xhr.status == 200){
				resolve(xhr.responseText);
			}else{
				reject(xhr.status + " : " + xhr.responseText);
			}
		};
		xhr.send(val.data);
	})
	.then(e => {
		ret.response = e;
		return ret;
	})
	.catch(e => {
		ret.response = null;
		ret.states = e;
		return ret;
	});
	return promise;
}

/*function example
{
  url:
  method:"GET" || "POST"
  data:なんでも
}
async function init() {
	let ss = await XHRsend({url : "http://alumina.starfree.jp/FFT/data/", method:"GET"});
	console.log(ss.response);
}*/
