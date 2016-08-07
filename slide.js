function Slide(element, option) {
	// 私有字段

	//当前
	var _currentIndex = 1;

	Object.defineProperties(this,{
		slideBox:{
			value: element,
		},
		currentIndex: {
			set: function (index) {
				if (index >= 1 && index <= this.pageCount) {
					_currentIndex = index;
				} else {
					throw new Error("currentIndex 的值不在正确范围内");
				}
			},
			get: function () {
				return _currentIndex;
			}
		},
		currentItem: {
			get: function () {
				return this.slideBox.children[this.currentIndex - 1];
			}
		},
		pageCount:{
			get: function(){
				return this.slideBox.childElementCount;
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
		},
		effect: {
			value: (function () {
				var effect = option && option.effect || "left";
				effect = effect.toLowerCase();
				return effect;
			})(),
		}
	});

	(function examinType(that) {
		if (that instanceof Slide) {
			return that;
		} else {
			throw new Error("Slide 函数只能用作构造函数!");
		}
	})(this);

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
	this.currentItem.classList.remove("active");
	this.currentIndex = index;
	this.currentItem.classList.add("active");

	//执行动画
	this.animateSlidebox();
}

Slide.prototype.slideNext = function () {
	this.slideTo(this.nextIndex)
}
Slide.prototype.slidePrev = function () {
	this.slideTo(this.prevIndex)
}

Slide.prototype.animateSlidebox = function(){
	if (this.effect == "left") {
		this.slideBox.style.transition = "0.5s";
		this.slideBox.style.transform = "translateX(-" + (this.currentIndex - 1) * this.slideBox.children[0].offsetWidth + "px)";
	}	
}