
export const updateQuantity = (type,totalQuantitiy,quantitiy,setQuantitiy,setAlertq)=> {
	if(type === 'increase'){
		if(quantitiy === totalQuantitiy){
			setAlertq(true)
		}else{
			setQuantitiy(quantitiy+1)
		}
	}else if(type === 'decrease'){
		if(quantitiy===0){
			setQuantitiy(0)
		}else{
			setQuantitiy(quantitiy-1)
		}
	}
}


export const slideImage = (type,active,count,setCount,pImages)=> {
	if(active === count){
		return true
	}
	if(type == "increase"){		
		if(count === pImages.length-1){
			setCount(0)
		}
		else if(count < pImages.length){
			setCount(count+1)
		}
	}
}

export const inCart = (id)=> {
	if(localStorage.getItem("cart")){
		let cartProducts = JSON.parse(localStorage.getItem("cart"))
		for(let product of cartProducts){
			if(product.id === id){
				return true
			}
		}
	}
	return false
}

export const addToCart = (id,quantitiy,setCartstate,setQuantitiy,setAlertq)=> {
	let isObj = false
	let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
	if(cart.length > 0){
		cart.forEach((item)=> {
			if(item.id === id ){
				isObj = true
			}
		});
		if(!isObj){
			cart.push({id,quantitiy})
			localStorage.setItem("cart",JSON.stringify(cart))
		}
	}else{
		cart.push({id,quantitiy})
		localStorage.setItem("cart",JSON.stringify(cart))
	}
	setCartstate(inCart(id))
	setQuantitiy(1)
	setAlertq(false)
}
