(function(){

	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering the service`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	window['addSyncClient'] = addSyncClient;

	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			callback(result);
		}, 5000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering the service`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);	
		});
	}

	window['addAsyncClient'] = addAsyncClient;

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var p = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				resolveFn(result);
			}, 5000);
		});
		return p;
	}

	window['addAsyncPromise'] = addAsyncPromise;


	async function addAsyncPromiseClient(x,y){
		/*
		//Sync
		console.log(`[@Client] triggering the service`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
		*/


		/*console.log(`[@Client] triggering the service`);
		var p = addAsyncPromise(10,20);
		p.then(function(result){
			console.log(`[@Client] result = ${result}`);
		});*/

		console.log(`[@Client] triggering the service`);
		var result = await addAsyncPromise(10,20);
		console.log(`[@Client] result = ${result}`);
		
	}

	window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();