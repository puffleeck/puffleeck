var $$ = {
GI: function(id) {return document.getElementById(id)},
GN: function(name) {return document.getElementsByName(name)},
QSA: function(css) {return document.querySelectorAll(css)},
QSF: function(css) {return document.querySelector(css)},
GTN: function(elem, tag) {return elem.getElementsByTagName(tag)},
GCN: function(elem, Nclass) {return elem.getElementsByClassName(Nclass)},
CE: function(tagN) {return document.createElement(tagN)},
CTN: function(text) {return document.createTextNode(text)},
AC: function (elem, newElem) {return elem.appendChild(newElem);},
IB: function (elem, newElem, nextElem) {return elem.insertBefore(newElem, nextElem);},
RC: function (elem, delElem) {elem.removeChild(delElem);},
CN: function (cloneElem, childs) {cloneElem.cloneNode(childs);},

i: 0,
sum: 0,
clear: function(){this.GI('t_Canvas').innerHTML = '';},
del: function(id){this.RC(this.GI('t_Canvas'), this.GI(id));},
CCN: function(target, name){this.GI(target).className=name;},
new_add: function(a, target_canvas = 't_Canvas')
	{
		var print = this.GI(target_canvas);
		var t1 = this.GI('t1').value;
		var t2 = this.GI('t2').value;
		var t3 = this.GI('t3').value;
		var ts = this.GI('ts').value;
		var te = this.GI('te').value;
		var d = this.GI('d').value;
		var num = (a ? a : this.GI('num').value);
		while(this.i != num)
		{
			var nDiv = this.CE('div');
			nDiv.id = this.sum;
			nDiv.className = this.GI('added_style').value;
			this.AC(print, nDiv);
			nDiv.outerHTML ='<div id="' + this.sum + '" class="' + nDiv.className + '"' +
				(a ? ' style="grid-row: 1; grid-column: ' + this.i + '0' + (a && this.i==0? 1:0) + ' / ' + (this.i + 1) + '00"' : '') +
				(d == 'dg' || d == 'diagram' ? 'style="grid-column: ' + (ts ? ts : 50) + (d == 'diagram' ? '; grid-row: ' : ' / ') + te + ';"': '') +
				' onclick="javascript:$$.del(' + this.sum + ')">' +
				'<b class="t1">' + (a ? this.i : t1) + '</b><hr/>' +
				'<i class="t2">' + (a ? '' : t2) + '</i><hr/>' +
				'<i class="t3">' + (a ? '' : t3) + '</i>';
			this.i++;
			this.sum++;
		}
		this.i = 0;
	},
creator: function (x)
	{
		var parent = this.GI(x.parent);
		var p = parent;
		for (let j = 0; j < x.elements.length; j++) {
			let spawn = $$.CE(x.tag);
			spawn.id = x.elements[j] + j;
			spawn[x.name] = x.elements[j];
			if(x.id)spawn.id = x.id;
			if(x.clas)spawn.className = x.clas;
			if(x.style)spawn.style = x.style;
			this.AC(this.GI(x.parent), spawn);
			}
	},
reStyler: function(){
	this.GI("styler").innerHTML +=
		'\n.' + this.GI('rest').value + ' > ' +
		'.' + this.GI('cast_sel').value + '{' +
		'color: ' + this.GI('cast_color').value + ';' +
		'background-color: ' + this.GI('cast_bg_color').value + ';' +
		'}';
	}
};
