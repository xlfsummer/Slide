function Slide(element, option){
	function examinType(){
		if(this instanceof Slide){
			return this;
		}
		throw new Error("Slide 函数只能用作构造函数!");
	}
	
	Object.defineProperties(this,{
		slideElement:{
			value: element,
		},
		currentIndex:{
			value: 1,
			writable: true,
		},
		pageCount:{
			get: function(){
				return this.slideElement.childElementCount;
			}
		},
		nextIndex:{
			get: function(){
				return this.currentIndex + 1 > this.pageCount ? 1 : this.currentIndex + 1;
			}
		},
		prevIndex:{
			get: function(){
				return this.currentIndex - 1 < 1 ? this.pageCount : this.currentIndex -1;
			}
		}
		
	});

	// Object.defineProperty(this,"nextIndex",{
	// 	get : function(){
	// 		return this.currentIndex + 1;
	// 	}
	// });
}

//Slide 的方法

//SlideTo 切换到第 index 张轮播 
Slide.prototype.slideTo = function(index){
	//逻辑切换
	//执行动画
}

Slide.prototype.slideNext = function(){
}
