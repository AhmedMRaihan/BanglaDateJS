/****** date showing function ****/
Date.prototype.toBuetTime = function() {
    var localTime = this.getTime();
    var localOffset = this.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    this.setTime(utc + 3600000 * 6);

    return this;
};

// Version: 1.0

function buetDateConverter(inputDate)
{
	var d = Object.prototype.toString.call(inputDate) === '[object Date]' ? inputDate : new Date().toBuetTime();
	this.inputDate = d;
	
	var y = this.inputDate.getFullYear();
	this.leapYear = ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0);
	if(this.leapYear)
	{
		this.formatConvertList.multiplierBD[10] = 31;
		this.formatConvertList.multiplierEN[1] = 29;
	}
	
	this.totalDaysInEN = 0;
	for(var i=0;i<this.inputDate.getMonth();++i)
	{
		this.totalDaysInEN += this.formatConvertList.multiplierEN[i];
	}
	this.totalDaysInEN += this.inputDate.getDate();
	this.firstDayInBD = this.formatConvertList.multiplierEN[0]+this.formatConvertList.multiplierEN[1]+this.formatConvertList.multiplierEN[2]+14;
	
	this.prepareDateInstanceFormats();
}

buetDateConverter.prototype.prepareDateInstanceFormats = function(){
	this.dateInstance = {
		l: this.inputDate.getDay(), 
		G: this.inputDate.getHours(), 
		H: this.inputDate.getHours() > 9 ? this.inputDate.getHours() : '0'+this.inputDate.getHours(),
		g: this.inputDate.getHours() > 12 ? this.inputDate.getHours()-12 : this.inputDate.getHours(), 
		i: this.inputDate.getMinutes(), 
		s: this.inputDate.getSeconds()
	};
	this.dateInstance.A = this.A();
	this.dateInstance.Y = this.Y(this.inputDate.getFullYear());
	
	if( this.totalDaysInEN < this.firstDayInBD)
	{
		this.totalDaysInEN = 365+(+this.leapYear)-( this.firstDayInBD-this.totalDaysInEN);
	}
	else
	{
		this.totalDaysInEN-= this.firstDayInBD;
	}	
	var Fj = this.Fj();
	this.dateInstance.F = Fj.m-1;
	this.dateInstance.j = Fj.d;
	
	this.dateInstance.h = this.dateInstance.g;
	this.dateInstance.m = Fj.m;
	this.dateInstance.d = Fj.d;
};

buetDateConverter.prototype.Fj = function(){
	var m=0;
	for(var i=0;i<this.formatConvertList.multiplierBD.length && this.totalDaysInEN>=0;++i)
	{
		m+=1;
		if(this.formatConvertList.multiplierBD[i] - this.totalDaysInEN > 0)
			break;
		this.totalDaysInEN -= this.formatConvertList.multiplierBD[i];
	}		
	return {
		"m": m,
		"d": this.totalDaysInEN +1
	};
};

buetDateConverter.prototype.Y = function(y){
	if( y-2016 > 0)
		y =1423 + Math.floor((y-2016)/4)*4 + (y-2016) % 4;
	else
		y =1423 - Math.floor((2016-y)/4)*4 - (2016-y) % 4;
	
	if( this.firstDayInBD > this.totalDaysInEN)
		y = y-1;
	
	return y;
};

buetDateConverter.prototype.A = function(){
	if( this.dateInstance.G >= 6 && this.dateInstance.G < 12)
		return 0;
	else if( this.dateInstance.G >= 12 && this.dateInstance.G < 16)
		return 1;
	else if( this.dateInstance.G >= 16 && this.dateInstance.G < 18)
		return 2;
	else if( this.dateInstance.G >= 18 && this.dateInstance.G < 20)
		return 3;
	else if( this.dateInstance.G >= 20 && this.dateInstance.G <=23)
		return 4;
	else if( this.dateInstance.G >= 0 && this.dateInstance.G <6)
		return 4;

	return 5;	
};

buetDateConverter.prototype.convert = function(formatString){
	this.formatString = formatString;
	
	var bDate = "";
	for (var i = 0; i < formatString.length; ++i)
	{
		var singleFormatChar = formatString.charAt(i);
		if( singleFormatChar in this.dateInstance === false)
		{
			bDate += singleFormatChar;
			continue;
		}
		switch (singleFormatChar) {
			case 'A':
			case 'F':
			case 'l':
				bDate += this.formatConvertList[singleFormatChar][this.dateInstance[singleFormatChar]];
				break;
			default:
				var intToStr = this.dateInstance[singleFormatChar].toString();
				for( var j=0; j<intToStr.length; ++j)
				{
					bDate += this.formatConvertList._N[intToStr[j]];
				}
				break;
		}
	}
		
	return bDate;
};

buetDateConverter.prototype.formatConvertList = 
{
	"multiplierEN" : [31,28,31,30,31,30,31,31,30,31,30,31],
	"multiplierBD" : [31,31,31,31,31,30,30,30,30,30,30,30],
	
	"A" : ["সকাল", "দুপুর", "বিকাল", "সন্ধ্যা", "রাত"],
	"F" : ["বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"],
	"l" : ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
	"_N" : ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]
};
