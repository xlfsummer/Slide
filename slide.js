function Slide(element,option){
	function examinType(){
		if(this instanceof Slide){
			return this;
		}
		throw new Error("Slide 函数只能用作构造函数!");
	}
	this.currentIndex = 1;
	
	Object.defineProperty(this,"length");
}

//Slide 的方法

//SlideTo 切换到第 index 张轮播 
Slide.prototype.slideTo(index){
	
}
