;(function($){
/**
 * jqGrid English Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "View {0} - {1} of {2}",
		emptyrecords: "No records to view",
		loadtext: "Loading...",
		pgtext : "Page {0} of {1}"
	},
	search : {
		caption: "Search...",
		Find: "Find",
		Reset: "Reset",
		odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [{ op: "AND", text: "all" },{ op: "OR",  text: "any" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Add Record",
		editCaption: "Edit Record",
		bSubmit: "Submit",
		bCancel: "Cancel",
		bClose: "Close",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
		msg: {
			required:"Field is required",
			number:"Please, enter valid number",
			minValue:"value must be greater than or equal to ",
			maxValue:"value must be less than or equal to",
			email: "is not a valid e-mail",
			integer: "Please, enter valid integer value",
			date: "Please, enter valid date value",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "View Record",
		bClose: "Close"
	},
	del : {
		caption: "Delete",
		msg: "Delete selected record(s)?",
		bSubmit: "Delete",
		bCancel: "Cancel"
	},
	nav : {
		edittext: "",
		edittitle: "Edit selected row",
		addtext:"",
		addtitle: "Add new row",
		deltext: "",
		deltitle: "Delete selected row",
		searchtext: "",
		searchtitle: "Find records",
		refreshtext: "",
		refreshtitle: "Reload Grid",
		alertcap: "Warning",
		alerttext: "Please, select row",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
		caption: "Select columns",
		bSubmit: "Ok",
		bCancel: "Cancel"
	},
	errors : {
		errcap : "Error",
		nourl : "No url is set",
		norecords: "No records to process",
		model : "Length of colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: ",", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
				"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
			srcformat: 'Y-m-d',
			newformat: 'n/j/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
				// information about date, time, numbers and currency formats used in different countries
				// one should just convert the information in PHP format
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				// short date:
				//    n - Numeric representation of a month, without leading zeros
				//    j - Day of the month without leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				// example: 3/1/2012 which means 1 March 2012
				ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
				// long date:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
				// month day:
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
				// short time (without seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
				// long time (with seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				// month with year
				//    Y - A full numeric representation of a year, 4 digits
				//    F - A full textual representation of a month
				YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
			},
			reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);


// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS

/**
 * @license jqGrid  4.6.0 - jQuery Grid
 * Copyright (c) 2008, Tony Tomov, tony@trirand.com
 * Dual licensed under the MIT and GPL licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 * Date: 2014-02-20
 */
//jsHint options
/*jshint evil:true, eqeqeq:false, eqnull:true, devel:true */
/*global jQuery */

(function ($) {
"use strict";
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	version : "4.6.0",
	htmlDecode : function(value){
		if(value && (value==='&nbsp;' || value==='&#160;' || (value.length===1 && value.charCodeAt(0)===160))) { return "";}
		return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");		
	},
	htmlEncode : function (value){
		return !value ? value : String(value).replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	},
	format : function(format){ //jqgformat
		var args = $.makeArray(arguments).slice(1);
		if(format==null) { format = ""; }
		return format.replace(/\{(\d+)\}/g, function(m, i){
			return args[i];
		});
	},
	msie : navigator.appName === 'Microsoft Internet Explorer',
	msiever : function () {
		var rv = -1;
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) {
			rv = parseFloat( RegExp.$1 );
		}
		return rv;
	},
	getCellIndex : function (cell) {
		var c = $(cell);
		if (c.is('tr')) { return -1; }
		c = (!c.is('td') && !c.is('th') ? c.closest("td,th") : c)[0];
		if ($.jgrid.msie) { return $.inArray(c, c.parentNode.cells); }
		return c.cellIndex;
	},
	stripHtml : function(v) {
		v = String(v);
		var regexp = /<("[^"]*"|'[^']*'|[^'">])*>/gi;
		if (v) {
			v = v.replace(regexp,"");
			return (v && v !== '&nbsp;' && v !== '&#160;') ? v.replace(/\"/g,"'") : "";
		} 
			return v;
	},
	stripPref : function (pref, id) {
		var obj = $.type( pref );
		if( obj === "string" || obj === "number") {
			pref =  String(pref);
			id = pref !== "" ? String(id).replace(String(pref), "") : id;
		}
		return id;
	},
	parse : function(jsonString) {
		var js = jsonString;
		if (js.substr(0,9) === "while(1);") { js = js.substr(9); }
		if (js.substr(0,2) === "/*") { js = js.substr(2,js.length-4); }
		if(!js) { js = "{}"; }
		return ($.jgrid.useJSON===true && typeof JSON === 'object' && typeof JSON.parse === 'function') ?
			JSON.parse(js) :
			eval('(' + js + ')');
	},
	parseDate : function(format, date, newformat, opts) {
		var	token = /\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		msDateRegExp = new RegExp("^\/Date\\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\\)\/$"),
		msMatch = ((typeof date === 'string') ? date.match(msDateRegExp): null),
		pad = function (value, length) {
			value = String(value);
			length = parseInt(length,10) || 2;
			while (value.length < length)  { value = '0' + value; }
			return value;
		},
		ts = {m : 1, d : 1, y : 1970, h : 0, i : 0, s : 0, u:0},
		timestamp=0, dM, k,hl,
		h12to24 = function(ampm, h){
			if (ampm === 0){ if (h === 12) { h = 0;} }
			else { if (h !== 12) { h += 12; } }
			return h;
		};
		if(opts === undefined) {
			opts = $.jgrid.formatter.date;
		}
		// old lang files
		if(opts.parseRe === undefined ) {
			opts.parseRe = /[#%\\\/:_;.,\t\s-]/;
		}
		if( opts.masks.hasOwnProperty(format) ) { format = opts.masks[format]; }
		if(date && date != null) {
			if( !isNaN( date - 0 ) && String(format).toLowerCase() === "u") {
				//Unix timestamp
				timestamp = new Date( parseFloat(date)*1000 );
			} else if(date.constructor === Date) {
				timestamp = date;
				// Microsoft date format support
			} else if( msMatch !== null ) {
				timestamp = new Date(parseInt(msMatch[1], 10));
				if (msMatch[3]) {
					var offset = Number(msMatch[5]) * 60 + Number(msMatch[6]);
					offset *= ((msMatch[4] === '-') ? 1 : -1);
					offset -= timestamp.getTimezoneOffset();
					timestamp.setTime(Number(Number(timestamp) + (offset * 60 * 1000)));
				}
			} else {
				var offset = 0;
				//Support ISO8601Long that have Z at the end to indicate UTC timezone
				if(opts.srcformat === 'ISO8601Long' && date.charAt(date.length - 1) === 'Z') {
					offset -= (new Date()).getTimezoneOffset();
				}
				date = String(date).replace(/\T/g,"#").replace(/\t/,"%").split(opts.parseRe);
				format = format.replace(/\T/g,"#").replace(/\t/,"%").split(opts.parseRe);
				// parsing for month names
				for(k=0,hl=format.length;k<hl;k++){
					if(format[k] === 'M') {
						dM = $.inArray(date[k],opts.monthNames);
						if(dM !== -1 && dM < 12){date[k] = dM+1; ts.m = date[k];}
					}
					if(format[k] === 'F') {
						dM = $.inArray(date[k],opts.monthNames,12);
						if(dM !== -1 && dM > 11){date[k] = dM+1-12; ts.m = date[k];}
					}
					if(format[k] === 'a') {
						dM = $.inArray(date[k],opts.AmPm);
						if(dM !== -1 && dM < 2 && date[k] === opts.AmPm[dM]){
							date[k] = dM;
							ts.h = h12to24(date[k], ts.h);
						}
					}
					if(format[k] === 'A') {
						dM = $.inArray(date[k],opts.AmPm);
						if(dM !== -1 && dM > 1 && date[k] === opts.AmPm[dM]){
							date[k] = dM-2;
							ts.h = h12to24(date[k], ts.h);
						}
					}
					if (format[k] === 'g') {
						ts.h = parseInt(date[k], 10);
					}
					if(date[k] !== undefined) {
						ts[format[k].toLowerCase()] = parseInt(date[k],10);
					}
				}
				if(ts.f) {ts.m = ts.f;}
				if( ts.m === 0 && ts.y === 0 && ts.d === 0) {
					return "&#160;" ;
				}
				ts.m = parseInt(ts.m,10)-1;
				var ty = ts.y;
				if (ty >= 70 && ty <= 99) {ts.y = 1900+ts.y;}
				else if (ty >=0 && ty <=69) {ts.y= 2000+ts.y;}
				timestamp = new Date(ts.y, ts.m, ts.d, ts.h, ts.i, ts.s, ts.u);
				//Apply offset to show date as local time.
				if(offset > 0) {
					timestamp.setTime(Number(Number(timestamp) + (offset * 60 * 1000)));
				}
			}
		} else {
			timestamp = new Date(ts.y, ts.m, ts.d, ts.h, ts.i, ts.s, ts.u);
		}
		if( newformat === undefined ) {
			return timestamp;
		}
		if( opts.masks.hasOwnProperty(newformat) )  {
			newformat = opts.masks[newformat];
		} else if ( !newformat ) {
			newformat = 'Y-m-d';
		}
		var 
			G = timestamp.getHours(),
			i = timestamp.getMinutes(),
			j = timestamp.getDate(),
			n = timestamp.getMonth() + 1,
			o = timestamp.getTimezoneOffset(),
			s = timestamp.getSeconds(),
			u = timestamp.getMilliseconds(),
			w = timestamp.getDay(),
			Y = timestamp.getFullYear(),
			N = (w + 6) % 7 + 1,
			z = (new Date(Y, n - 1, j) - new Date(Y, 0, 1)) / 86400000,
			flags = {
				// Day
				d: pad(j),
				D: opts.dayNames[w],
				j: j,
				l: opts.dayNames[w + 7],
				N: N,
				S: opts.S(j),
				//j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th',
				w: w,
				z: z,
				// Week
				W: N < 5 ? Math.floor((z + N - 1) / 7) + 1 : Math.floor((z + N - 1) / 7) || ((new Date(Y - 1, 0, 1).getDay() + 6) % 7 < 4 ? 53 : 52),
				// Month
				F: opts.monthNames[n - 1 + 12],
				m: pad(n),
				M: opts.monthNames[n - 1],
				n: n,
				t: '?',
				// Year
				L: '?',
				o: '?',
				Y: Y,
				y: String(Y).substring(2),
				// Time
				a: G < 12 ? opts.AmPm[0] : opts.AmPm[1],
				A: G < 12 ? opts.AmPm[2] : opts.AmPm[3],
				B: '?',
				g: G % 12 || 12,
				G: G,
				h: pad(G % 12 || 12),
				H: pad(G),
				i: pad(i),
				s: pad(s),
				u: u,
				// Timezone
				e: '?',
				I: '?',
				O: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				P: '?',
				T: (String(timestamp).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				Z: '?',
				// Full Date/Time
				c: '?',
				r: '?',
				U: Math.floor(timestamp / 1000)
			};
		return newformat.replace(token, function ($0) {
			return flags.hasOwnProperty($0) ? flags[$0] : $0.substring(1);
		});
	},
	jqID : function(sid){
		return String(sid).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g,"\\$&");
	},
	guid : 1,
	uidPref: 'jqg',
	randId : function( prefix )	{
		return (prefix || $.jgrid.uidPref) + ($.jgrid.guid++);
	},
	getAccessor : function(obj, expr) {
		var ret,p,prm = [], i;
		if( typeof expr === 'function') { return expr(obj); }
		ret = obj[expr];
		if(ret===undefined) {
			try {
				if ( typeof expr === 'string' ) {
					prm = expr.split('.');
				}
				i = prm.length;
				if( i ) {
					ret = obj;
					while (ret && i--) {
						p = prm.shift();
						ret = ret[p];
					}
				}
			} catch (e) {}
		}
		return ret;
	},
	getXmlData: function (obj, expr, returnObj) {
		var ret, m = typeof expr === 'string' ? expr.match(/^(.*)\[(\w+)\]$/) : null;
		if (typeof expr === 'function') { return expr(obj); }
		if (m && m[2]) {
			// m[2] is the attribute selector
			// m[1] is an optional element selector
			// examples: "[id]", "rows[page]"
			return m[1] ? $(m[1], obj).attr(m[2]) : $(obj).attr(m[2]);
		}
			ret = $(expr, obj);
			if (returnObj) { return ret; }
			//$(expr, obj).filter(':last'); // we use ':last' to be more compatible with old version of jqGrid
			return ret.length > 0 ? $(ret).text() : undefined;
	},
	cellWidth : function () {
		var $testDiv = $("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable' style='width:5px;'><tr class='jqgrow'><td style='width:5px;display:block;'></td></tr></table></div>"),
		testCell = $testDiv.appendTo("body")
			.find("td")
			.width();
		$testDiv.remove();
		return Math.abs(testCell-5) > 0.1;
	},
	cell_width : true,
	ajaxOptions: {},
	from : function(source){
		// Original Author Hugo Bonacci
		// License MIT http://jlinq.codeplex.com/license
		var QueryObject=function(d,q){
		if(typeof d==="string"){
			d=$.data(d);
		}
		var self=this,
		_data=d,
		_usecase=true,
		_trim=false,
		_query=q,
		_stripNum = /[\$,%]/g,
		_lastCommand=null,
		_lastField=null,
		_orDepth=0,
		_negate=false,
		_queuedOperator="",
		_sorting=[],
		_useProperties=true;
		if(typeof d==="object"&&d.push) {
			if(d.length>0){
				if(typeof d[0]!=="object"){
					_useProperties=false;
				}else{
					_useProperties=true;
				}
			}
		}else{
			throw "data provides is not an array";
		}
		this._hasData=function(){
			return _data===null?false:_data.length===0?false:true;
		};
		this._getStr=function(s){
			var phrase=[];
			if(_trim){
				phrase.push("jQuery.trim(");
			}
			phrase.push("String("+s+")");
			if(_trim){
				phrase.push(")");
			}
			if(!_usecase){
				phrase.push(".toLowerCase()");
			}
			return phrase.join("");
		};
		this._strComp=function(val){
			if(typeof val==="string"){
				return".toString()";
			}
			return"";
		};
		this._group=function(f,u){
			return({field:f.toString(),unique:u,items:[]});
		};
		this._toStr=function(phrase){
			if(_trim){
				phrase=$.trim(phrase);
			}
			phrase=phrase.toString().replace(/\\/g,'\\\\').replace(/\"/g,'\\"');
			return _usecase ? phrase : phrase.toLowerCase();
		};
		this._funcLoop=function(func){
			var results=[];
			$.each(_data,function(i,v){
				results.push(func(v));
			});
			return results;
		};
		this._append=function(s){
			var i;
			if(_query===null){
				_query="";
			} else {
				_query+=_queuedOperator === "" ? " && " :_queuedOperator;
			}
			for (i=0;i<_orDepth;i++){
				_query+="(";
			}
			if(_negate){
				_query+="!";
			}
			_query+="("+s+")";
			_negate=false;
			_queuedOperator="";
			_orDepth=0;
		};
		this._setCommand=function(f,c){
			_lastCommand=f;
			_lastField=c;
		};
		this._resetNegate=function(){
			_negate=false;
		};
		this._repeatCommand=function(f,v){
			if(_lastCommand===null){
				return self;
			}
			if(f!==null&&v!==null){
				return _lastCommand(f,v);
			}
			if(_lastField===null){
				return _lastCommand(f);
			}
			if(!_useProperties){
				return _lastCommand(f);
			}
			return _lastCommand(_lastField,f);
		};
		this._equals=function(a,b){
			return(self._compare(a,b,1)===0);
		};
		this._compare=function(a,b,d){
			var toString = Object.prototype.toString;
			if( d === undefined) { d = 1; }
			if(a===undefined) { a = null; }
			if(b===undefined) { b = null; }
			if(a===null && b===null){
				return 0;
			}
			if(a===null&&b!==null){
				return 1;
			}
			if(a!==null&&b===null){
				return -1;
			}
			if (toString.call(a) === '[object Date]' && toString.call(b) === '[object Date]') {
				if (a < b) { return -d; }
				if (a > b) { return d; }
				return 0;
			}
			if(!_usecase && typeof a !== "number" && typeof b !== "number" ) {
				a=String(a);
				b=String(b);
			}
			if(a<b){return -d;}
			if(a>b){return d;}
			return 0;
		};
		this._performSort=function(){
			if(_sorting.length===0){return;}
			_data=self._doSort(_data,0);
		};
		this._doSort=function(d,q){
			var by=_sorting[q].by,
			dir=_sorting[q].dir,
			type = _sorting[q].type,
			dfmt = _sorting[q].datefmt,
			sfunc = _sorting[q].sfunc;
			if(q===_sorting.length-1){
				return self._getOrder(d, by, dir, type, dfmt, sfunc);
			}
			q++;
			var values=self._getGroup(d,by,dir,type,dfmt), results=[], i, j, sorted;
			for(i=0;i<values.length;i++){
				sorted=self._doSort(values[i].items,q);
				for(j=0;j<sorted.length;j++){
					results.push(sorted[j]);
				}
			}
			return results;
		};
		this._getOrder=function(data,by,dir,type, dfmt, sfunc){
			var sortData=[],_sortData=[], newDir = dir==="a" ? 1 : -1, i,ab,j,
			findSortKey;

			if(type === undefined ) { type = "text"; }
			if (type === 'float' || type=== 'number' || type=== 'currency' || type=== 'numeric') {
				findSortKey = function($cell) {
					var key = parseFloat( String($cell).replace(_stripNum, ''));
					return isNaN(key) ? 0.00 : key;
				};
			} else if (type==='int' || type==='integer') {
				findSortKey = function($cell) {
					return $cell ? parseFloat(String($cell).replace(_stripNum, '')) : 0;
				};
			} else if(type === 'date' || type === 'datetime') {
				findSortKey = function($cell) {
					return $.jgrid.parseDate(dfmt,$cell).getTime();
				};
			} else if($.isFunction(type)) {
				findSortKey = type;
			} else {
				findSortKey = function($cell) {
					$cell = $cell ? $.trim(String($cell)) : "";
					return _usecase ? $cell : $cell.toLowerCase();
				};
			}
			$.each(data,function(i,v){
				ab = by!=="" ? $.jgrid.getAccessor(v,by) : v;
				if(ab === undefined) { ab = ""; }
				ab = findSortKey(ab, v);
				_sortData.push({ 'vSort': ab,'index':i});
			});
			if($.isFunction(sfunc)) {
				_sortData.sort(function(a,b){
					a = a.vSort;
					b = b.vSort;
					return sfunc.call(this,a,b,newDir);
				});
			} else {
				_sortData.sort(function(a,b){
					a = a.vSort;
					b = b.vSort;
					return self._compare(a,b,newDir);
				});
			}
			j=0;
			var nrec= data.length;
			// overhead, but we do not change the original data.
			while(j<nrec) {
				i = _sortData[j].index;
				sortData.push(data[i]);
				j++;
			}
			return sortData;
		};
		this._getGroup=function(data,by,dir,type, dfmt){
			var results=[],
			group=null,
			last=null, val;
			$.each(self._getOrder(data,by,dir,type, dfmt),function(i,v){
				val = $.jgrid.getAccessor(v, by);
				if(val == null) { val = ""; }
				if(!self._equals(last,val)){
					last=val;
					if(group !== null){
						results.push(group);
					}
					group=self._group(by,val);
				}
				group.items.push(v);
			});
			if(group !== null){
				results.push(group);
			}
			return results;
		};
		this.ignoreCase=function(){
			_usecase=false;
			return self;
		};
		this.useCase=function(){
			_usecase=true;
			return self;
		};
		this.trim=function(){
			_trim=true;
			return self;
		};
		this.noTrim=function(){
			_trim=false;
			return self;
		};
		this.execute=function(){
			var match=_query, results=[];
			if(match === null){
				return self;
			}
			$.each(_data,function(){
				if(eval(match)){results.push(this);}
			});
			_data=results;
			return self;
		};
		this.data=function(){
			return _data;
		};
		this.select=function(f){
			self._performSort();
			if(!self._hasData()){ return[]; }
			self.execute();
			if($.isFunction(f)){
				var results=[];
				$.each(_data,function(i,v){
					results.push(f(v));
				});
				return results;
			}
			return _data;
		};
		this.hasMatch=function(){
			if(!self._hasData()) { return false; }
			self.execute();
			return _data.length>0;
		};
		this.andNot=function(f,v,x){
			_negate=!_negate;
			return self.and(f,v,x);
		};
		this.orNot=function(f,v,x){
			_negate=!_negate;
			return self.or(f,v,x);
		};
		this.not=function(f,v,x){
			return self.andNot(f,v,x);
		};
		this.and=function(f,v,x){
			_queuedOperator=" && ";
			if(f===undefined){
				return self;
			}
			return self._repeatCommand(f,v,x);
		};
		this.or=function(f,v,x){
			_queuedOperator=" || ";
			if(f===undefined) { return self; }
			return self._repeatCommand(f,v,x);
		};
		this.orBegin=function(){
			_orDepth++;
			return self;
		};
		this.orEnd=function(){
			if (_query !== null){
				_query+=")";
			}
			return self;
		};
		this.isNot=function(f){
			_negate=!_negate;
			return self.is(f);
		};
		this.is=function(f){
			self._append('this.'+f);
			self._resetNegate();
			return self;
		};
		this._compareValues=function(func,f,v,how,t){
			var fld;
			if(_useProperties){
				fld='jQuery.jgrid.getAccessor(this,\''+f+'\')';
			}else{
				fld='this';
			}
			if(v===undefined) { v = null; }
			//var val=v===null?f:v,
			var val =v,
			swst = t.stype === undefined ? "text" : t.stype;
			if(v !== null) {
			switch(swst) {
				case 'int':
				case 'integer':
					val = (isNaN(Number(val)) || val==="") ? '0' : val; // To be fixed with more inteligent code
					fld = 'parseInt('+fld+',10)';
					val = 'parseInt('+val+',10)';
					break;
				case 'float':
				case 'number':
				case 'numeric':
					val = String(val).replace(_stripNum, '');
					val = (isNaN(Number(val)) || val==="") ? '0' : val; // To be fixed with more inteligent code
					fld = 'parseFloat('+fld+')';
					val = 'parseFloat('+val+')';
					break;
				case 'date':
				case 'datetime':
					val = String($.jgrid.parseDate(t.newfmt || 'Y-m-d',val).getTime());
					fld = 'jQuery.jgrid.parseDate("'+t.srcfmt+'",'+fld+').getTime()';
					break;
				default :
					fld=self._getStr(fld);
					val=self._getStr('"'+self._toStr(val)+'"');
			}
			}
			self._append(fld+' '+how+' '+val);
			self._setCommand(func,f);
			self._resetNegate();
			return self;
		};
		this.equals=function(f,v,t){
			return self._compareValues(self.equals,f,v,"==",t);
		};
		this.notEquals=function(f,v,t){
			return self._compareValues(self.equals,f,v,"!==",t);
		};
		this.isNull = function(f,v,t){
			return self._compareValues(self.equals,f,null,"===",t);
		};
		this.greater=function(f,v,t){
			return self._compareValues(self.greater,f,v,">",t);
		};
		this.less=function(f,v,t){
			return self._compareValues(self.less,f,v,"<",t);
		};
		this.greaterOrEquals=function(f,v,t){
			return self._compareValues(self.greaterOrEquals,f,v,">=",t);
		};
		this.lessOrEquals=function(f,v,t){
			return self._compareValues(self.lessOrEquals,f,v,"<=",t);
		};
		this.startsWith=function(f,v){
			var val = (v==null) ? f: v,
			length=_trim ? $.trim(val.toString()).length : val.toString().length;
			if(_useProperties){
				self._append(self._getStr('jQuery.jgrid.getAccessor(this,\''+f+'\')')+'.substr(0,'+length+') == '+self._getStr('"'+self._toStr(v)+'"'));
			}else{
				if (v!=null) { length=_trim?$.trim(v.toString()).length:v.toString().length; }
				self._append(self._getStr('this')+'.substr(0,'+length+') == '+self._getStr('"'+self._toStr(f)+'"'));
			}
			self._setCommand(self.startsWith,f);
			self._resetNegate();
			return self;
		};
		this.endsWith=function(f,v){
			var val = (v==null) ? f: v,
			length=_trim ? $.trim(val.toString()).length:val.toString().length;
			if(_useProperties){
				self._append(self._getStr('jQuery.jgrid.getAccessor(this,\''+f+'\')')+'.substr('+self._getStr('jQuery.jgrid.getAccessor(this,\''+f+'\')')+'.length-'+length+','+length+') == "'+self._toStr(v)+'"');
			} else {
				self._append(self._getStr('this')+'.substr('+self._getStr('this')+'.length-"'+self._toStr(f)+'".length,"'+self._toStr(f)+'".length) == "'+self._toStr(f)+'"');
			}
			self._setCommand(self.endsWith,f);self._resetNegate();
			return self;
		};
		this.contains=function(f,v){
			if(_useProperties){
				self._append(self._getStr('jQuery.jgrid.getAccessor(this,\''+f+'\')')+'.indexOf("'+self._toStr(v)+'",0) > -1');
			}else{
				self._append(self._getStr('this')+'.indexOf("'+self._toStr(f)+'",0) > -1');
			}
			self._setCommand(self.contains,f);
			self._resetNegate();
			return self;
		};
		this.groupBy=function(by,dir,type, datefmt){
			if(!self._hasData()){
				return null;
			}
			return self._getGroup(_data,by,dir,type, datefmt);
		};
		this.orderBy=function(by,dir,stype, dfmt, sfunc){
			dir = dir == null ? "a" :$.trim(dir.toString().toLowerCase());
			if(stype == null) { stype = "text"; }
			if(dfmt == null) { dfmt = "Y-m-d"; }
			if(sfunc == null) { sfunc = false; }
			if(dir==="desc"||dir==="descending"){dir="d";}
			if(dir==="asc"||dir==="ascending"){dir="a";}
			_sorting.push({by:by,dir:dir,type:stype, datefmt: dfmt, sfunc: sfunc});
			return self;
		};
		return self;
		};
	return new QueryObject(source,null);
	},
	getMethod: function (name) {
        return this.getAccessor($.fn.jqGrid, name);
	},
	extend : function(methods) {
		$.extend($.fn.jqGrid,methods);
		if (!this.no_legacy_api) {
			$.fn.extend(methods);
		}
	}
});

$.fn.jqGrid = function( pin ) {
	if (typeof pin === 'string') {
		var fn = $.jgrid.getMethod(pin);
		if (!fn) {
			throw ("jqGrid - No such method: " + pin);
		}
		var args = $.makeArray(arguments).slice(1);
		return fn.apply(this,args);
	}
	return this.each( function() {
		if(this.grid) {return;}

		var p = $.extend(true,{
			url: "",
			height: 150,
			page: 1,
			rowNum: 20,
			rowTotal : null,
			records: 0,
			pager: "",
			pgbuttons: true,
			pginput: true,
			colModel: [],
			rowList: [],
			colNames: [],
			sortorder: "asc",
			sortname: "",
			datatype: "xml",
			mtype: "GET",
			altRows: false,
			selarrrow: [],
			savedRow: [],
			shrinkToFit: true,
			xmlReader: {},
			jsonReader: {},
			subGrid: false,
			subGridModel :[],
			reccount: 0,
			lastpage: 0,
			lastsort: 0,
			selrow: null,
			beforeSelectRow: null,
			onSelectRow: null,
			onSortCol: null,
			ondblClickRow: null,
			onRightClickRow: null,
			onPaging: null,
			onSelectAll: null,
			onInitGrid : null,
			loadComplete: null,
			gridComplete: null,
			loadError: null,
			loadBeforeSend: null,
			afterInsertRow: null,
			beforeRequest: null,
			beforeProcessing : null,
			onHeaderClick: null,
			viewrecords: false,
			loadonce: false,
			multiselect: false,
			multikey: false,
			editurl: null,
			search: false,
			caption: "",
			hidegrid: true,
			hiddengrid: false,
			postData: {},
			userData: {},
			treeGrid : false,
			treeGridModel : 'nested',
			treeReader : {},
			treeANode : -1,
			ExpandColumn: null,
			tree_root_level : 0,
			prmNames: {page:"page",rows:"rows", sort: "sidx",order: "sord", search:"_search", nd:"nd", id:"id",oper:"oper",editoper:"edit",addoper:"add",deloper:"del", subgridid:"id", npage: null, totalrows:"totalrows"},
			forceFit : false,
			gridstate : "visible",
			cellEdit: false,
			cellsubmit: "remote",
			nv:0,
			loadui: "enable",
			toolbar: [false,""],
			scroll: false,
			multiboxonly : false,
			deselectAfterSort : true,
			scrollrows : false,
			autowidth: false,
			scrollOffset :18,
			cellLayout: 5,
			subGridWidth: 20,
			multiselectWidth: 20,
			gridview: false,
			rownumWidth: 25,
			rownumbers : false,
			pagerpos: 'center',
			recordpos: 'right',
			footerrow : false,
			userDataOnFooter : false,
			hoverrows : true,
			altclass : 'ui-priority-secondary',
			viewsortcols : [false,'vertical',true],
			resizeclass : '',
			autoencode : false,
			remapColumns : [],
			ajaxGridOptions :{},
			direction : "ltr",
			toppager: false,
			headertitles: false,
			scrollTimeout: 40,
			data : [],
			_index : {},
			grouping : false,
			groupingView : {groupField:[],groupOrder:[], groupText:[],groupColumnShow:[],groupSummary:[], showSummaryOnHide: false, sortitems:[], sortnames:[], summary:[],summaryval:[], plusicon: 'ui-icon-circlesmall-plus', minusicon: 'ui-icon-circlesmall-minus', displayField: [], groupSummaryPos:[], formatDisplayField : [], _locgr : false},
			ignoreCase : false,
			cmTemplate : {},
			idPrefix : "",
			multiSort :  false
		}, $.jgrid.defaults, pin || {});
		var ts= this, grid={
			headers:[],
			cols:[],
			footers: [],
			dragStart: function(i,x,y) {
				var gridLeftPos = $(this.bDiv).offset().left;
				this.resizing = { idx: i, startX: x.clientX, sOL : x.clientX - gridLeftPos };
				this.hDiv.style.cursor = "col-resize";
				this.curGbox = $("#rs_m"+$.jgrid.jqID(p.id),"#gbox_"+$.jgrid.jqID(p.id));
				this.curGbox.css({display:"block",left:x.clientX-gridLeftPos,top:y[1],height:y[2]});
				$(ts).triggerHandler("jqGridResizeStart", [x, i]);
				if($.isFunction(p.resizeStart)) { p.resizeStart.call(ts,x,i); }
				document.onselectstart=function(){return false;};
			},
			dragMove: function(x) {
				if(this.resizing) {
					var diff = x.clientX-this.resizing.startX,
					h = this.headers[this.resizing.idx],
					newWidth = p.direction === "ltr" ? h.width + diff : h.width - diff, hn, nWn;
					if(newWidth > 33) {
						this.curGbox.css({left:this.resizing.sOL+diff});
						if(p.forceFit===true ){
							hn = this.headers[this.resizing.idx+p.nv];
							nWn = p.direction === "ltr" ? hn.width - diff : hn.width + diff;
							if(nWn >33) {
								h.newWidth = newWidth;
								hn.newWidth = nWn;
							}
						} else {
							this.newWidth = p.direction === "ltr" ? p.tblwidth+diff : p.tblwidth-diff;
							h.newWidth = newWidth;
						}
					}
				}
			},
			dragEnd: function() {
				this.hDiv.style.cursor = "default";
				if(this.resizing) {
					var idx = this.resizing.idx,
					nw = this.headers[idx].newWidth || this.headers[idx].width;
					nw = parseInt(nw,10);
					this.resizing = false;
					$("#rs_m"+$.jgrid.jqID(p.id)).css("display","none");
					p.colModel[idx].width = nw;
					this.headers[idx].width = nw;
					this.headers[idx].el.style.width = nw + "px";
					this.cols[idx].style.width = nw+"px";
					if(this.footers.length>0) {this.footers[idx].style.width = nw+"px";}
					if(p.forceFit===true){
						nw = this.headers[idx+p.nv].newWidth || this.headers[idx+p.nv].width;
						this.headers[idx+p.nv].width = nw;
						this.headers[idx+p.nv].el.style.width = nw + "px";
						this.cols[idx+p.nv].style.width = nw+"px";
						if(this.footers.length>0) {this.footers[idx+p.nv].style.width = nw+"px";}
						p.colModel[idx+p.nv].width = nw;
					} else {
						p.tblwidth = this.newWidth || p.tblwidth;
						$('table:first',this.bDiv).css("width",p.tblwidth+"px");
						$('table:first',this.hDiv).css("width",p.tblwidth+"px");
						this.hDiv.scrollLeft = this.bDiv.scrollLeft;
						if(p.footerrow) {
							$('table:first',this.sDiv).css("width",p.tblwidth+"px");
							this.sDiv.scrollLeft = this.bDiv.scrollLeft;
						}
					}
					$(ts).triggerHandler("jqGridResizeStop", [nw, idx]);
					if($.isFunction(p.resizeStop)) { p.resizeStop.call(ts,nw,idx); }
				}
				this.curGbox = null;
				document.onselectstart=function(){return true;};
			},
			populateVisible: function() {
				if (grid.timer) { clearTimeout(grid.timer); }
				grid.timer = null;
				var dh = $(grid.bDiv).height();
				if (!dh) { return; }
				var table = $("table:first", grid.bDiv);
				var rows, rh;
				if(table[0].rows.length) {
					try {
						rows = table[0].rows[1];
						rh = rows ? $(rows).outerHeight() || grid.prevRowHeight : grid.prevRowHeight;
					} catch (pv) {
						rh = grid.prevRowHeight;
					}
				}
				if (!rh) { return; }
				grid.prevRowHeight = rh;
				var rn = p.rowNum;
				var scrollTop = grid.scrollTop = grid.bDiv.scrollTop;
				var ttop = Math.round(table.position().top) - scrollTop;
				var tbot = ttop + table.height();
				var div = rh * rn;
				var page, npage, empty;
				if ( tbot < dh && ttop <= 0 &&
					(p.lastpage===undefined||parseInt((tbot + scrollTop + div - 1) / div,10) <= p.lastpage))
				{
					npage = parseInt((dh - tbot + div - 1) / div,10);
					if (tbot >= 0 || npage < 2 || p.scroll === true) {
						page = Math.round((tbot + scrollTop) / div) + 1;
						ttop = -1;
					} else {
						ttop = 1;
					}
				}
				if (ttop > 0) {
					page = parseInt(scrollTop / div,10) + 1;
					npage = parseInt((scrollTop + dh) / div,10) + 2 - page;
					empty = true;
				}
				if (npage) {
					if (p.lastpage && (page > p.lastpage || p.lastpage===1 || (page === p.page && page===p.lastpage)) ) {
						return;
					}
					if (grid.hDiv.loading) {
						grid.timer = setTimeout(grid.populateVisible, p.scrollTimeout);
					} else {
						p.page = page;
						if (empty) {
							grid.selectionPreserver(table[0]);
							grid.emptyRows.call(table[0], false, false);
						}
						grid.populate(npage);
					}
				}
			},
			scrollGrid: function( e ) {
				if(p.scroll) {
					var scrollTop = grid.bDiv.scrollTop;
					if(grid.scrollTop === undefined) { grid.scrollTop = 0; }
					if (scrollTop !== grid.scrollTop) {
						grid.scrollTop = scrollTop;
						if (grid.timer) { clearTimeout(grid.timer); }
						grid.timer = setTimeout(grid.populateVisible, p.scrollTimeout);
					}
				}
				grid.hDiv.scrollLeft = grid.bDiv.scrollLeft;
				if(p.footerrow) {
					grid.sDiv.scrollLeft = grid.bDiv.scrollLeft;
				}
				if( e ) { e.stopPropagation(); }
			},
			selectionPreserver : function(ts) {
				var p = ts.p,
				sr = p.selrow, sra = p.selarrrow ? $.makeArray(p.selarrrow) : null,
				left = ts.grid.bDiv.scrollLeft,
				restoreSelection = function() {
					var i;
					p.selrow = null;
					p.selarrrow = [];
					if(p.multiselect && sra && sra.length>0) {
						for(i=0;i<sra.length;i++){
							if (sra[i] !== sr) {
								$(ts).jqGrid("setSelection",sra[i],false, null);
							}
						}
					}
					if (sr) {
						$(ts).jqGrid("setSelection",sr,false,null);
					}
					ts.grid.bDiv.scrollLeft = left;
					$(ts).unbind('.selectionPreserver', restoreSelection);
				};
				$(ts).bind('jqGridGridComplete.selectionPreserver', restoreSelection);				
			}
		};
		if(this.tagName.toUpperCase() !== 'TABLE') {
			alert("Element is not a table");
			return;
		}
		if(document.documentMode !== undefined ) { // IE only
			if(document.documentMode <= 5) {
				alert("Grid can not be used in this ('quirks') mode!");
				return;
			}
		}
		$(this).empty().attr("tabindex","0");
		this.p = p ;
		this.p.useProp = !!$.fn.prop;
		var i, dir;
		if(this.p.colNames.length === 0) {
			for (i=0;i<this.p.colModel.length;i++){
				this.p.colNames[i] = this.p.colModel[i].label || this.p.colModel[i].name;
			}
		}
		if( this.p.colNames.length !== this.p.colModel.length ) {
			alert($.jgrid.errors.model);
			return;
		}
		var gv = $("<div class='ui-jqgrid-view'></div>"),
		isMSIE = $.jgrid.msie;
		ts.p.direction = $.trim(ts.p.direction.toLowerCase());
		if($.inArray(ts.p.direction,["ltr","rtl"]) === -1) { ts.p.direction = "ltr"; }
		dir = ts.p.direction;

		$(gv).insertBefore(this);
		$(this).removeClass("scroll").appendTo(gv);
		var eg = $("<div class='ui-jqgrid ui-widget ui-widget-content ui-corner-all'></div>");
		$(eg).attr({"id" : "gbox_"+this.id,"dir":dir}).insertBefore(gv);
		$(gv).attr("id","gview_"+this.id).appendTo(eg);
		$("<div class='ui-widget-overlay jqgrid-overlay' id='lui_"+this.id+"'></div>").insertBefore(gv);
		$("<div class='loading ui-state-default ui-state-active' id='load_"+this.id+"'>"+this.p.loadtext+"</div>").insertBefore(gv);
		$(this).attr({cellspacing:"0",cellpadding:"0",border:"0","role":"grid","aria-multiselectable":!!this.p.multiselect,"aria-labelledby":"gbox_"+this.id});
		var sortkeys = ["shiftKey","altKey","ctrlKey"],
		intNum = function(val,defval) {
			val = parseInt(val,10);
			if (isNaN(val)) { return defval || 0;}
			return val;
		},
		formatCol = function (pos, rowInd, tv, rawObject, rowId, rdata){
			var cm = ts.p.colModel[pos],
			ral = cm.align, result="style=\"", clas = cm.classes, nm = cm.name, celp, acp=[];
			if(ral) { result += "text-align:"+ral+";"; }
			if(cm.hidden===true) { result += "display:none;"; }
			if(rowInd===0) {
				result += "width: "+grid.headers[pos].width+"px;";
			} else if (cm.cellattr && $.isFunction(cm.cellattr))
			{
				celp = cm.cellattr.call(ts, rowId, tv, rawObject, cm, rdata);
				if(celp && typeof celp === "string") {
					celp = celp.replace(/style/i,'style').replace(/title/i,'title');
					if(celp.indexOf('title') > -1) { cm.title=false;}
					if(celp.indexOf('class') > -1) { clas = undefined;}
					acp = celp.replace('-style','-sti').split(/style/);
					if(acp.length === 2 ) {
						acp[1] =  $.trim(acp[1].replace('-sti','-style').replace("=",""));
						if(acp[1].indexOf("'") === 0 || acp[1].indexOf('"') === 0) {
							acp[1] = acp[1].substring(1);
						}
						result += acp[1].replace(/'/gi,'"');
					} else {
						result += "\"";
					}
				}
			}
			if(!acp.length) { acp[0] = ""; result += "\"";}
			result += (clas !== undefined ? (" class=\""+clas+"\"") :"") + ((cm.title && tv) ? (" title=\""+$.jgrid.stripHtml(tv)+"\"") :"");
			result += " aria-describedby=\""+ts.p.id+"_"+nm+"\"";
			return result + acp[0];
		},
		cellVal =  function (val) {
			return val == null || val === "" ? "&#160;" : (ts.p.autoencode ? $.jgrid.htmlEncode(val) : String(val));
		},
		formatter = function (rowId, cellval , colpos, rwdat, _act){
			var cm = ts.p.colModel[colpos],v;
			if(cm.formatter !== undefined) {
				rowId = String(ts.p.idPrefix) !== "" ? $.jgrid.stripPref(ts.p.idPrefix, rowId) : rowId;
				var opts= {rowId: rowId, colModel:cm, gid:ts.p.id, pos:colpos };
				if($.isFunction( cm.formatter ) ) {
					v = cm.formatter.call(ts,cellval,opts,rwdat,_act);
				} else if($.fmatter){
					v = $.fn.fmatter.call(ts,cm.formatter,cellval,opts,rwdat,_act);
				} else {
					v = cellVal(cellval);
				}
			} else {
				v = cellVal(cellval);
			}
			return v;
		},
		addCell = function(rowId,cell,pos,irow, srvr, rdata) {
			var v,prp;
			v = formatter(rowId,cell,pos,srvr,'add');
			prp = formatCol( pos,irow, v, srvr, rowId, rdata);
			return "<td role=\"gridcell\" "+prp+">"+v+"</td>";
		},
		addMulti = function(rowid,pos,irow,checked){
			var	v = "<input role=\"checkbox\" type=\"checkbox\""+" id=\"jqg_"+ts.p.id+"_"+rowid+"\" class=\"cbox\" name=\"jqg_"+ts.p.id+"_"+rowid+"\"" + (checked ? "checked=\"checked\"" : "")+"/>",
			prp = formatCol( pos,irow,'',null, rowid, true);
			return "<td role=\"gridcell\" "+prp+">"+v+"</td>";
		},
		addRowNum = function (pos,irow,pG,rN) {
			var v =  (parseInt(pG,10)-1)*parseInt(rN,10)+1+irow,
			prp = formatCol( pos,irow,v, null, irow, true);
			return "<td role=\"gridcell\" class=\"ui-state-default jqgrid-rownum\" "+prp+">"+v+"</td>";
		},
		reader = function (datatype) {
			var field, f=[], j=0, i;
			for(i =0; i<ts.p.colModel.length; i++){
				field = ts.p.colModel[i];
				if (field.name !== 'cb' && field.name !=='subgrid' && field.name !=='rn') {
					f[j]= datatype === "local" ?
					field.name :
					( (datatype==="xml" || datatype === "xmlstring") ? field.xmlmap || field.name : field.jsonmap || field.name );
					if(ts.p.keyIndex !== false && field.key===true ) {
						ts.p.keyName = f[j];
					}
					j++;
				}
			}
			return f;
		},
		orderedCols = function (offset) {
			var order = ts.p.remapColumns;
			if (!order || !order.length) {
				order = $.map(ts.p.colModel, function(v,i) { return i; });
			}
			if (offset) {
				order = $.map(order, function(v) { return v<offset?null:v-offset; });
			}
			return order;
		},
		emptyRows = function (scroll, locdata) {
			var firstrow;
			if (this.p.deepempty) {
				$(this.rows).slice(1).remove();
			} else {
				firstrow = this.rows.length > 0 ? this.rows[0] : null;
				$(this.firstChild).empty().append(firstrow);
			}
			if (scroll && this.p.scroll) {
				$(this.grid.bDiv.firstChild).css({height: "auto"});
				$(this.grid.bDiv.firstChild.firstChild).css({height: 0, display: "none"});
				if (this.grid.bDiv.scrollTop !== 0) {
					this.grid.bDiv.scrollTop = 0;
				}
			}
			if(locdata === true && this.p.treeGrid) {
				this.p.data = []; this.p._index = {};
			}
		},
		refreshIndex = function() {
			var datalen = ts.p.data.length, idname, i, val,
			ni = ts.p.rownumbers===true ? 1 :0,
			gi = ts.p.multiselect ===true ? 1 :0,
			si = ts.p.subGrid===true ? 1 :0;

			if(ts.p.keyIndex === false || ts.p.loadonce === true) {
				idname = ts.p.localReader.id;
			} else {
				idname = ts.p.colModel[ts.p.keyIndex+gi+si+ni].name;
			}
			for(i =0;i < datalen; i++) {
				val = $.jgrid.getAccessor(ts.p.data[i],idname);
				if (val === undefined) { val=String(i+1); }
				ts.p._index[val] = i;
			}
		},
		constructTr = function(id, hide, altClass, rd, cur, selected) {
			var tabindex = '-1', restAttr = '', attrName, style = hide ? 'display:none;' : '',
				classes = 'ui-widget-content jqgrow ui-row-' + ts.p.direction + (altClass ? ' ' + altClass : '') + (selected ? ' ui-state-highlight' : ''),
				rowAttrObj = $(ts).triggerHandler("jqGridRowAttr", [rd, cur, id]);
				if( typeof rowAttrObj !== "object" ) {
					rowAttrObj =   $.isFunction(ts.p.rowattr) ? ts.p.rowattr.call(ts, rd, cur, id) :{};
				}
			if(!$.isEmptyObject( rowAttrObj )) {
				if (rowAttrObj.hasOwnProperty("id")) {
					id = rowAttrObj.id;
					delete rowAttrObj.id;
				}
				if (rowAttrObj.hasOwnProperty("tabindex")) {
					tabindex = rowAttrObj.tabindex;
					delete rowAttrObj.tabindex;
				}
				if (rowAttrObj.hasOwnProperty("style")) {
					style += rowAttrObj.style;
					delete rowAttrObj.style;
				}
				if (rowAttrObj.hasOwnProperty("class")) {
					classes += ' ' + rowAttrObj['class'];
					delete rowAttrObj['class'];
				}
				// dot't allow to change role attribute
				try { delete rowAttrObj.role; } catch(ra){}
				for (attrName in rowAttrObj) {
					if (rowAttrObj.hasOwnProperty(attrName)) {
						restAttr += ' ' + attrName + '=' + rowAttrObj[attrName];
					}
				}
			}
			return '<tr role="row" id="' + id + '" tabindex="' + tabindex + '" class="' + classes + '"' +
				(style === '' ? '' : ' style="' + style + '"') + restAttr + '>';
		},
		addXmlData = function (xml,t, rcnt, more, adjust) {
			var startReq = new Date(),
			locdata = (ts.p.datatype !== "local" && ts.p.loadonce) || ts.p.datatype === "xmlstring",
			xmlid = "_id_", xmlRd = ts.p.xmlReader,
			frd = ts.p.datatype === "local" ? "local" : "xml";
			if(locdata) {
				ts.p.data = [];
				ts.p._index = {};
				ts.p.localReader.id = xmlid;
			}
			ts.p.reccount = 0;
			if($.isXMLDoc(xml)) {
				if(ts.p.treeANode===-1 && !ts.p.scroll) {
					emptyRows.call(ts, false, true);
					rcnt=1;
				} else { rcnt = rcnt > 1 ? rcnt :1; }
			} else { return; }
			var self= $(ts), i,fpos,ir=0,v,gi=ts.p.multiselect===true?1:0,si=0,addSubGridCell,ni=ts.p.rownumbers===true?1:0,idn, getId,f=[],F,rd ={}, xmlr,rid, rowData=[], cn=(ts.p.altRows === true) ? ts.p.altclass:"",cn1;
			if(ts.p.subGrid===true) {
				si = 1;
				addSubGridCell = $.jgrid.getMethod("addSubGridCell");
			}
			if(!xmlRd.repeatitems) {f = reader(frd);}
			if( ts.p.keyIndex===false) {
				idn = $.isFunction( xmlRd.id ) ?  xmlRd.id.call(ts, xml) : xmlRd.id;
			} else {
				idn = ts.p.keyIndex;
			}
			if(f.length>0 && !isNaN(idn)) {
				idn=ts.p.keyName;
			}
			if( String(idn).indexOf("[") === -1 ) {
				if (f.length) {
					getId = function( trow, k) {return $(idn,trow).text() || k;};
				} else {
					getId = function( trow, k) {return $(xmlRd.cell,trow).eq(idn).text() || k;};
				}
			}
			else {
				getId = function( trow, k) {return trow.getAttribute(idn.replace(/[\[\]]/g,"")) || k;};
			}
			ts.p.userData = {};
			ts.p.page = intNum($.jgrid.getXmlData(xml, xmlRd.page), ts.p.page);
			ts.p.lastpage = intNum($.jgrid.getXmlData(xml, xmlRd.total), 1);
			ts.p.records = intNum($.jgrid.getXmlData(xml, xmlRd.records));
			if($.isFunction(xmlRd.userdata)) {
				ts.p.userData = xmlRd.userdata.call(ts, xml) || {};
			} else {
				$.jgrid.getXmlData(xml, xmlRd.userdata, true).each(function() {ts.p.userData[this.getAttribute("name")]= $(this).text();});
			}
			var gxml = $.jgrid.getXmlData( xml, xmlRd.root, true);
			gxml = $.jgrid.getXmlData( gxml, xmlRd.row, true);
			if (!gxml) { gxml = []; }
			var gl = gxml.length, j=0, grpdata=[], rn = parseInt(ts.p.rowNum,10), br=ts.p.scroll?$.jgrid.randId():1, altr;
			if (gl > 0 &&  ts.p.page <= 0) { ts.p.page = 1; }
			if(gxml && gl){
			if (adjust) { rn *= adjust+1; }
			var afterInsRow = $.isFunction(ts.p.afterInsertRow), hiderow=false, groupingPrepare;
			if(ts.p.grouping)  {
				hiderow = ts.p.groupingView.groupCollapse === true;
				groupingPrepare = $.jgrid.getMethod("groupingPrepare");
			}
			while (j<gl) {
				xmlr = gxml[j];
				rid = getId(xmlr,br+j);
				rid  = ts.p.idPrefix + rid;
				altr = rcnt === 0 ? 0 : rcnt+1;
				cn1 = (altr+j)%2 === 1 ? cn : '';
				var iStartTrTag = rowData.length;
				rowData.push("");
				if( ni ) {
					rowData.push( addRowNum(0,j,ts.p.page,ts.p.rowNum) );
				}
				if( gi ) {
					rowData.push( addMulti(rid,ni,j, false) );
				}
				if( si ) {
					rowData.push( addSubGridCell.call(self,gi+ni,j+rcnt) );
				}
				if(xmlRd.repeatitems){
					if (!F) { F=orderedCols(gi+si+ni); }
					var cells = $.jgrid.getXmlData( xmlr, xmlRd.cell, true);
					$.each(F, function (k) {
						var cell = cells[this];
						if (!cell) { return false; }
						v = cell.textContent || cell.text;
						rd[ts.p.colModel[k+gi+si+ni].name] = v;
						rowData.push( addCell(rid,v,k+gi+si+ni,j+rcnt,xmlr, rd) );
					});
				} else {
					for(i = 0; i < f.length;i++) {
						v = $.jgrid.getXmlData( xmlr, f[i]);
						rd[ts.p.colModel[i+gi+si+ni].name] = v;
						rowData.push( addCell(rid, v, i+gi+si+ni, j+rcnt, xmlr, rd) );
					}
				}
				rowData[iStartTrTag] = constructTr(rid, hiderow, cn1, rd, xmlr, false);
				rowData.push("</tr>");
				if(ts.p.grouping) {
					grpdata.push( rowData );
					if(!ts.p.groupingView._locgr) {
						groupingPrepare.call(self, rd, j );
					}
					rowData = [];
				}
				if(locdata || ts.p.treeGrid === true) {
					rd[xmlid] = $.jgrid.stripPref(ts.p.idPrefix, rid);
					ts.p.data.push(rd);
					ts.p._index[rd[xmlid]] = ts.p.data.length-1;
				}
				if(ts.p.gridview === false ) {
					$("tbody:first",t).append(rowData.join(''));
					self.triggerHandler("jqGridAfterInsertRow", [rid, rd, xmlr]);
					if(afterInsRow) {ts.p.afterInsertRow.call(ts,rid,rd,xmlr);}
					rowData=[];
				}
				rd={};
				ir++;
				j++;
				if(ir===rn) {break;}
			}
			}
			if(ts.p.gridview === true) {
				fpos = ts.p.treeANode > -1 ? ts.p.treeANode: 0;
				if(ts.p.grouping) {
					if(!locdata) {
						self.jqGrid('groupingRender',grpdata,ts.p.colModel.length, ts.p.page, rn);
					}
					grpdata = null;
				} else if(ts.p.treeGrid === true && fpos > 0) {
					$(ts.rows[fpos]).after(rowData.join(''));
				} else {
					$("tbody:first",t).append(rowData.join(''));
				}
			}
			if(ts.p.subGrid === true ) {
				try {self.jqGrid("addSubGrid",gi+ni);} catch (_){}
			}
			ts.p.totaltime = new Date() - startReq;
			if(ir>0) { if(ts.p.records===0) { ts.p.records=gl;} }
			rowData =null;
			if( ts.p.treeGrid === true) {
				try {self.jqGrid("setTreeNode", fpos+1, ir+fpos+1);} catch (e) {}
			}
			if(!ts.p.treeGrid && !ts.p.scroll) {ts.grid.bDiv.scrollTop = 0;}
			ts.p.reccount=ir;
			ts.p.treeANode = -1;
			if(ts.p.userDataOnFooter) { self.jqGrid("footerData","set",ts.p.userData,true); }
			if(locdata) {
				ts.p.records = gl;
				ts.p.lastpage = Math.ceil(gl/ rn);
			}
			if (!more) { ts.updatepager(false,true); }
			if(locdata) {
				while (ir<gl) {
					xmlr = gxml[ir];
					rid = getId(xmlr,ir+br);
					rid  = ts.p.idPrefix + rid;
					if(xmlRd.repeatitems){
						if (!F) { F=orderedCols(gi+si+ni); }
						var cells2 = $.jgrid.getXmlData( xmlr, xmlRd.cell, true);
						$.each(F, function (k) {
							var cell = cells2[this];
							if (!cell) { return false; }
							v = cell.textContent || cell.text;
							rd[ts.p.colModel[k+gi+si+ni].name] = v;
						});
					} else {
						for(i = 0; i < f.length;i++) {
							v = $.jgrid.getXmlData( xmlr, f[i]);
							rd[ts.p.colModel[i+gi+si+ni].name] = v;
						}
					}
					rd[xmlid] = $.jgrid.stripPref(ts.p.idPrefix, rid);
					if(ts.p.grouping) {
						groupingPrepare.call(self, rd, ir );
					}
					ts.p.data.push(rd);
					ts.p._index[rd[xmlid]] = ts.p.data.length-1;
					rd = {};
					ir++;
				}
				if(ts.p.grouping) {
					ts.p.groupingView._locgr = true;
					self.jqGrid('groupingRender', grpdata, ts.p.colModel.length, ts.p.page, rn);
					grpdata = null;
				}
			}
		},
		addJSONData = function(data,t, rcnt, more, adjust) {
			var startReq = new Date();
			if(data) {
				if(ts.p.treeANode === -1 && !ts.p.scroll) {
					emptyRows.call(ts, false, true);
					rcnt=1;
				} else { rcnt = rcnt > 1 ? rcnt :1; }
			} else { return; }

			var dReader, locid = "_id_", frd,
			locdata = (ts.p.datatype !== "local" && ts.p.loadonce) || ts.p.datatype === "jsonstring";
			if(locdata) { ts.p.data = []; ts.p._index = {}; ts.p.localReader.id = locid;}
			ts.p.reccount = 0;
			if(ts.p.datatype === "local") {
				dReader =  ts.p.localReader;
				frd= 'local';
			} else {
				dReader =  ts.p.jsonReader;
				frd='json';
			}
			var self = $(ts), ir=0,v,i,j,f=[],cur,gi=ts.p.multiselect?1:0,si=ts.p.subGrid===true?1:0,addSubGridCell,ni=ts.p.rownumbers===true?1:0,arrayReader=orderedCols(gi+si+ni),objectReader=reader(frd),rowReader,len,drows,idn,rd={}, fpos, idr,rowData=[],cn=(ts.p.altRows === true) ? ts.p.altclass:"",cn1;
			ts.p.page = intNum($.jgrid.getAccessor(data,dReader.page), ts.p.page);
			ts.p.lastpage = intNum($.jgrid.getAccessor(data,dReader.total), 1);
			ts.p.records = intNum($.jgrid.getAccessor(data,dReader.records));
			ts.p.userData = $.jgrid.getAccessor(data,dReader.userdata) || {};
			if(si) {
				addSubGridCell = $.jgrid.getMethod("addSubGridCell");
			}
			if( ts.p.keyIndex===false ) {
				idn = $.isFunction(dReader.id) ? dReader.id.call(ts, data) : dReader.id; 
			} else {
				idn = ts.p.keyIndex;
			}
			if(!dReader.repeatitems) {
				f = objectReader;
				if(f.length>0 && !isNaN(idn)) {
					idn=ts.p.keyName;
				}
			}
			drows = $.jgrid.getAccessor(data,dReader.root);
			if (drows == null && $.isArray(data)) { drows = data; }
			if (!drows) { drows = []; }
			len = drows.length; i=0;
			if (len > 0 && ts.p.page <= 0) { ts.p.page = 1; }
			var rn = parseInt(ts.p.rowNum,10),br=ts.p.scroll?$.jgrid.randId():1, altr, selected=false, selr;
			if (adjust) { rn *= adjust+1; }
			if(ts.p.datatype === "local" && !ts.p.deselectAfterSort) {
				selected = true;
			}
			var afterInsRow = $.isFunction(ts.p.afterInsertRow), grpdata=[],hiderow=false, groupingPrepare;
			if(ts.p.grouping)  {
				hiderow = ts.p.groupingView.groupCollapse === true;
				groupingPrepare = $.jgrid.getMethod("groupingPrepare");
			}
			while (i<len) {
				cur = drows[i];
				idr = $.jgrid.getAccessor(cur,idn);
				if(idr === undefined) {
					if (typeof idn === "number" && ts.p.colModel[idn+gi+si+ni] != null) {
						// reread id by name
						idr = $.jgrid.getAccessor(cur,ts.p.colModel[idn+gi+si+ni].name);
					}
					if(idr === undefined) {
						idr = br+i;
						if(f.length===0){
							if(dReader.cell){
								var ccur = $.jgrid.getAccessor(cur,dReader.cell) || cur;
								idr = ccur != null && ccur[idn] !== undefined ? ccur[idn] : idr;
								ccur=null;
							}
						}
					}
				}
				idr  = ts.p.idPrefix + idr;
				altr = rcnt === 1 ? 0 : rcnt;
				cn1 = (altr+i)%2 === 1 ? cn : '';
				if( selected) {
					if( ts.p.multiselect) {
						selr = ($.inArray(idr, ts.p.selarrrow) !== -1);
					} else {
						selr = (idr === ts.p.selrow);
					}
				}
				var iStartTrTag = rowData.length;
				rowData.push("");
				if( ni ) {
					rowData.push( addRowNum(0,i,ts.p.page,ts.p.rowNum) );
				}
				if( gi ){
					rowData.push( addMulti(idr,ni,i,selr) );
				}
				if( si ) {
					rowData.push( addSubGridCell.call(self,gi+ni,i+rcnt) );
				}
				rowReader=objectReader;
				if (dReader.repeatitems) {
					if(dReader.cell) {cur = $.jgrid.getAccessor(cur,dReader.cell) || cur;}
					if ($.isArray(cur)) { rowReader=arrayReader; }
				}
				for (j=0;j<rowReader.length;j++) {
					v = $.jgrid.getAccessor(cur,rowReader[j]);
					rd[ts.p.colModel[j+gi+si+ni].name] = v;
					rowData.push( addCell(idr,v,j+gi+si+ni,i+rcnt,cur, rd) );
				}
				rowData[iStartTrTag] = constructTr(idr, hiderow, cn1, rd, cur, selr);
				rowData.push( "</tr>" );
				if(ts.p.grouping) {
					grpdata.push( rowData );
					if(!ts.p.groupingView._locgr) {
						groupingPrepare.call(self, rd, i);
					}
					rowData = [];
				}
				if(locdata || ts.p.treeGrid===true) {
					rd[locid] = $.jgrid.stripPref(ts.p.idPrefix, idr);
					ts.p.data.push(rd);
					ts.p._index[rd[locid]] = ts.p.data.length-1;
				}
				if(ts.p.gridview === false ) {
					$("#"+$.jgrid.jqID(ts.p.id)+" tbody:first").append(rowData.join(''));
					self.triggerHandler("jqGridAfterInsertRow", [idr, rd, cur]);
					if(afterInsRow) {ts.p.afterInsertRow.call(ts,idr,rd,cur);}
					rowData=[];//ari=0;
				}
				rd={};
				ir++;
				i++;
				if(ir===rn) { break; }
			}
			if(ts.p.gridview === true ) {
				fpos = ts.p.treeANode > -1 ? ts.p.treeANode: 0;
				if(ts.p.grouping) {
					if(!locdata) {
						self.jqGrid('groupingRender', grpdata, ts.p.colModel.length, ts.p.page, rn);
						grpdata = null;
					}
				} else if(ts.p.treeGrid === true && fpos > 0) {
					$(ts.rows[fpos]).after(rowData.join(''));
				} else {
					$("#"+$.jgrid.jqID(ts.p.id)+" tbody:first").append(rowData.join(''));
				}
			}
			if(ts.p.subGrid === true ) {
				try { self.jqGrid("addSubGrid",gi+ni);} catch (_){}
			}
			ts.p.totaltime = new Date() - startReq;
			if(ir>0) {
				if(ts.p.records===0) { ts.p.records=len; }
			}
			rowData = null;
			if( ts.p.treeGrid === true) {
				try {self.jqGrid("setTreeNode", fpos+1, ir+fpos+1);} catch (e) {}
			}
			if(!ts.p.treeGrid && !ts.p.scroll) {ts.grid.bDiv.scrollTop = 0;}
			ts.p.reccount=ir;
			ts.p.treeANode = -1;
			if(ts.p.userDataOnFooter) { self.jqGrid("footerData","set",ts.p.userData,true); }
			if(locdata) {
				ts.p.records = len;
				ts.p.lastpage = Math.ceil(len/ rn);
			}
			if (!more) { ts.updatepager(false,true); }
			if(locdata) {
				while (ir<len && drows[ir]) {
					cur = drows[ir];
					idr = $.jgrid.getAccessor(cur,idn);
					if(idr === undefined) {
						if (typeof idn === "number" && ts.p.colModel[idn+gi+si+ni] != null) {
							// reread id by name
							idr = $.jgrid.getAccessor(cur,ts.p.colModel[idn+gi+si+ni].name);
						}
						if(idr === undefined) {
							idr = br+ir;
							if(f.length===0){
								if(dReader.cell){
									var ccur2 = $.jgrid.getAccessor(cur,dReader.cell) || cur;
									idr = ccur2 != null && ccur2[idn] !== undefined ? ccur2[idn] : idr;
									ccur2=null;
								}
							}
						}
					}
					if(cur) {
						idr  = ts.p.idPrefix + idr;
						rowReader=objectReader;
						if (dReader.repeatitems) {
							if(dReader.cell) {cur = $.jgrid.getAccessor(cur,dReader.cell) || cur;}
							if ($.isArray(cur)) { rowReader=arrayReader; }
						}

						for (j=0;j<rowReader.length;j++) {
							rd[ts.p.colModel[j+gi+si+ni].name] = $.jgrid.getAccessor(cur,rowReader[j]);
						}
						rd[locid] = $.jgrid.stripPref(ts.p.idPrefix, idr);
						if(ts.p.grouping) {
							groupingPrepare.call(self, rd, ir );
						}
						ts.p.data.push(rd);
						ts.p._index[rd[locid]] = ts.p.data.length-1;
						rd = {};
					}
					ir++;
				}
				if(ts.p.grouping) {
					ts.p.groupingView._locgr = true;
					self.jqGrid('groupingRender', grpdata, ts.p.colModel.length, ts.p.page, rn);
					grpdata = null;
				}
			}
		},
		addLocalData = function() {
			var st = ts.p.multiSort ? [] : "", sto=[], fndsort=false, cmtypes={}, grtypes=[], grindexes=[], srcformat, sorttype, newformat;
			if(!$.isArray(ts.p.data)) {
				return;
			}
			var grpview = ts.p.grouping ? ts.p.groupingView : false, lengrp, gin;
			$.each(ts.p.colModel,function(){
				sorttype = this.sorttype || "text";
				if(sorttype === "date" || sorttype === "datetime") {
					if(this.formatter && typeof this.formatter === 'string' && this.formatter === 'date') {
						if(this.formatoptions && this.formatoptions.srcformat) {
							srcformat = this.formatoptions.srcformat;
						} else {
							srcformat = $.jgrid.formatter.date.srcformat;
						}
						if(this.formatoptions && this.formatoptions.newformat) {
							newformat = this.formatoptions.newformat;
						} else {
							newformat = $.jgrid.formatter.date.newformat;
						}
					} else {
						srcformat = newformat = this.datefmt || "Y-m-d";
					}
					cmtypes[this.name] = {"stype": sorttype, "srcfmt": srcformat,"newfmt":newformat, "sfunc": this.sortfunc || null};
				} else {
					cmtypes[this.name] = {"stype": sorttype, "srcfmt":'',"newfmt":'', "sfunc": this.sortfunc || null};
				}
				if(ts.p.grouping ) {
					for(gin =0, lengrp = grpview.groupField.length; gin< lengrp; gin++) {
						if( this.name === grpview.groupField[gin]) {
							var grindex = this.name;
							if (this.index) {
								grindex = this.index;
							}
							grtypes[gin] = cmtypes[grindex];
							grindexes[gin]= grindex;
						}
					}
				}
				if(ts.p.multiSort) {
					if(this.lso) {
						st.push(this.name);
						var tmplso= this.lso.split("-");
						sto.push( tmplso[tmplso.length-1] );
					}
				} else {
					if(!fndsort && (this.index === ts.p.sortname || this.name === ts.p.sortname)){
						st = this.name; // ???
						fndsort = true;
					}
				}
			});
			if(ts.p.treeGrid) {
				$(ts).jqGrid("SortTree", st, ts.p.sortorder, cmtypes[st].stype || 'text', cmtypes[st].srcfmt || '');
				return;
			}
			var compareFnMap = {
				'eq':function(queryObj) {return queryObj.equals;},
				'ne':function(queryObj) {return queryObj.notEquals;},
				'lt':function(queryObj) {return queryObj.less;},
				'le':function(queryObj) {return queryObj.lessOrEquals;},
				'gt':function(queryObj) {return queryObj.greater;},
				'ge':function(queryObj) {return queryObj.greaterOrEquals;},
				'cn':function(queryObj) {return queryObj.contains;},
				'nc':function(queryObj,op) {return op === "OR" ? queryObj.orNot().contains : queryObj.andNot().contains;},
				'bw':function(queryObj) {return queryObj.startsWith;},
				'bn':function(queryObj,op) {return op === "OR" ? queryObj.orNot().startsWith : queryObj.andNot().startsWith;},
				'en':function(queryObj,op) {return op === "OR" ? queryObj.orNot().endsWith : queryObj.andNot().endsWith;},
				'ew':function(queryObj) {return queryObj.endsWith;},
				'ni':function(queryObj,op) {return op === "OR" ? queryObj.orNot().equals : queryObj.andNot().equals;},
				'in':function(queryObj) {return queryObj.equals;},
				'nu':function(queryObj) {return queryObj.isNull;},
				'nn':function(queryObj,op) {return op === "OR" ? queryObj.orNot().isNull : queryObj.andNot().isNull;}

			},
			query = $.jgrid.from(ts.p.data);
			if (ts.p.ignoreCase) { query = query.ignoreCase(); }
			function tojLinq ( group ) {
				var s = 0, index, gor, ror, opr, rule;
				if (group.groups != null) {
					gor = group.groups.length && group.groupOp.toString().toUpperCase() === "OR";
					if (gor) {
						query.orBegin();
					}
					for (index = 0; index < group.groups.length; index++) {
						if (s > 0 && gor) {
							query.or();
						}
						try {
							tojLinq(group.groups[index]);
						} catch (e) {alert(e);}
						s++;
					}
					if (gor) {
						query.orEnd();
					}
				}
				if (group.rules != null) {
					//if(s>0) {
					//	var result = query.select();
					//	query = $.jgrid.from( result);
					//	if (ts.p.ignoreCase) { query = query.ignoreCase(); } 
					//}
					try{
						ror = group.rules.length && group.groupOp.toString().toUpperCase() === "OR";
						if (ror) {
							query.orBegin();
						}
						for (index = 0; index < group.rules.length; index++) {
							rule = group.rules[index];
							opr = group.groupOp.toString().toUpperCase();
							if (compareFnMap[rule.op] && rule.field ) {
								if(s > 0 && opr && opr === "OR") {
									query = query.or();
								}
								query = compareFnMap[rule.op](query, opr)(rule.field, rule.data, cmtypes[rule.field]);
							}
							s++;
						}
						if (ror) {
							query.orEnd();
						}
					} catch (g) {alert(g);}
				}
			}

			if (ts.p.search === true) {
				var srules = ts.p.postData.filters;
				if(srules) {
					if(typeof srules === "string") { srules = $.jgrid.parse(srules);}
					tojLinq( srules );
				} else {
					try {
						query = compareFnMap[ts.p.postData.searchOper](query)(ts.p.postData.searchField, ts.p.postData.searchString,cmtypes[ts.p.postData.searchField]);
					} catch (se){}
				}
			}
			if(ts.p.grouping) {
				for(gin=0; gin<lengrp;gin++) {
					query.orderBy(grindexes[gin],grpview.groupOrder[gin],grtypes[gin].stype, grtypes[gin].srcfmt);
				}
			}
			if(ts.p.multiSort) {
				$.each(st,function(i){
					query.orderBy(this, sto[i], cmtypes[this].stype, cmtypes[this].srcfmt, cmtypes[this].sfunc);
				});
			} else {
				if (st && ts.p.sortorder && fndsort) {
					if(ts.p.sortorder.toUpperCase() === "DESC") {
						query.orderBy(ts.p.sortname, "d", cmtypes[st].stype, cmtypes[st].srcfmt, cmtypes[st].sfunc);
					} else {
						query.orderBy(ts.p.sortname, "a", cmtypes[st].stype, cmtypes[st].srcfmt, cmtypes[st].sfunc);
					}
				}
			}
			var queryResults = query.select(),
			recordsperpage = parseInt(ts.p.rowNum,10),
			total = queryResults.length,
			page = parseInt(ts.p.page,10),
			totalpages = Math.ceil(total / recordsperpage),
			retresult = {};
			if((ts.p.search || ts.p.resetsearch) && ts.p.grouping && ts.p.groupingView._locgr) {
				ts.p.groupingView.groups =[];
				var j, grPrepare = $.jgrid.getMethod("groupingPrepare"), key, udc;
				if(ts.p.footerrow && ts.p.userDataOnFooter) {
					for (key in ts.p.userData) {
						if(ts.p.userData.hasOwnProperty(key)) {
							ts.p.userData[key] = 0;
						}
					}
					udc = true;
				}
				for(j=0; j<total; j++) {
					if(udc) {
						for(key in ts.p.userData){
							ts.p.userData[key] += parseFloat(queryResults[j][key] || 0);
						}
					}
					grPrepare.call($(ts),queryResults[j],j, recordsperpage );
				}
			}
			queryResults = queryResults.slice( (page-1)*recordsperpage , page*recordsperpage );
			query = null;
			cmtypes = null;
			retresult[ts.p.localReader.total] = totalpages;
			retresult[ts.p.localReader.page] = page;
			retresult[ts.p.localReader.records] = total;
			retresult[ts.p.localReader.root] = queryResults;
			retresult[ts.p.localReader.userdata] = ts.p.userData;
			queryResults = null;
			return  retresult;
		},
		updatepager = function(rn, dnd) {
			var cp, last, base, from,to,tot,fmt, pgboxes = "", sppg,
			tspg = ts.p.pager ? "_"+$.jgrid.jqID(ts.p.pager.substr(1)) : "",
			tspg_t = ts.p.toppager ? "_"+ts.p.toppager.substr(1) : "";
			base = parseInt(ts.p.page,10)-1;
			if(base < 0) { base = 0; }
			base = base*parseInt(ts.p.rowNum,10);
			to = base + ts.p.reccount;
			if (ts.p.scroll) {
				var rows = $("tbody:first > tr:gt(0)", ts.grid.bDiv);
				base = to - rows.length;
				ts.p.reccount = rows.length;
				var rh = rows.outerHeight() || ts.grid.prevRowHeight;
				if (rh) {
					var top = base * rh;
					var height = parseInt(ts.p.records,10) * rh;
					$(">div:first",ts.grid.bDiv).css({height : height}).children("div:first").css({height:top,display:top?"":"none"});
					if (ts.grid.bDiv.scrollTop == 0 && ts.p.page > 1) {
						ts.grid.bDiv.scrollTop = ts.p.rowNum * (ts.p.page - 1) * rh;
					}
				}
				ts.grid.bDiv.scrollLeft = ts.grid.hDiv.scrollLeft;
			}
			pgboxes = ts.p.pager || "";
			pgboxes += ts.p.toppager ?  (pgboxes ? "," + ts.p.toppager : ts.p.toppager) : "";
			if(pgboxes) {
				fmt = $.jgrid.formatter.integer || {};
				cp = intNum(ts.p.page);
				last = intNum(ts.p.lastpage);
				$(".selbox",pgboxes)[ this.p.useProp ? 'prop' : 'attr' ]("disabled",false);
				if(ts.p.pginput===true) {
					$('.ui-pg-input',pgboxes).val(ts.p.page);
					sppg = ts.p.toppager ? '#sp_1'+tspg+",#sp_1"+tspg_t : '#sp_1'+tspg;
					$(sppg).html($.fmatter ? $.fmatter.util.NumberFormat(ts.p.lastpage,fmt):ts.p.lastpage);

				}
				if (ts.p.viewrecords){
					if(ts.p.reccount === 0) {
						$(".ui-paging-info",pgboxes).html(ts.p.emptyrecords);
					} else {
						from = base+1;
						tot=ts.p.records;
						if($.fmatter) {
							from = $.fmatter.util.NumberFormat(from,fmt);
							to = $.fmatter.util.NumberFormat(to,fmt);
							tot = $.fmatter.util.NumberFormat(tot,fmt);
						}
						$(".ui-paging-info",pgboxes).html($.jgrid.format(ts.p.recordtext,from,to,tot));
					}
				}
				if(ts.p.pgbuttons===true) {
					if(cp<=0) {cp = last = 0;}
					if(cp===1 || cp === 0) {
						$("#first"+tspg+", #prev"+tspg).addClass('ui-state-disabled').removeClass('ui-state-hover');
						if(ts.p.toppager) { $("#first_t"+tspg_t+", #prev_t"+tspg_t).addClass('ui-state-disabled').removeClass('ui-state-hover'); }
					} else {
						$("#first"+tspg+", #prev"+tspg).removeClass('ui-state-disabled');
						if(ts.p.toppager) { $("#first_t"+tspg_t+", #prev_t"+tspg_t).removeClass('ui-state-disabled'); }
					}
					if(cp===last || cp === 0) {
						$("#next"+tspg+", #last"+tspg).addClass('ui-state-disabled').removeClass('ui-state-hover');
						if(ts.p.toppager) { $("#next_t"+tspg_t+", #last_t"+tspg_t).addClass('ui-state-disabled').removeClass('ui-state-hover'); }
					} else {
						$("#next"+tspg+", #last"+tspg).removeClass('ui-state-disabled');
						if(ts.p.toppager) { $("#next_t"+tspg_t+", #last_t"+tspg_t).removeClass('ui-state-disabled'); }
					}
				}
			}
			if(rn===true && ts.p.rownumbers === true) {
				$(">td.jqgrid-rownum",ts.rows).each(function(i){
					$(this).html(base+1+i);
				});
			}
			if(dnd && ts.p.jqgdnd) { $(ts).jqGrid('gridDnD','updateDnD');}
			$(ts).triggerHandler("jqGridGridComplete");
			if($.isFunction(ts.p.gridComplete)) {ts.p.gridComplete.call(ts);}
			$(ts).triggerHandler("jqGridAfterGridComplete");
		},
		beginReq = function() {
			ts.grid.hDiv.loading = true;
			if(ts.p.hiddengrid) { return;}
			switch(ts.p.loadui) {
				case "disable":
					break;
				case "enable":
					$("#load_"+$.jgrid.jqID(ts.p.id)).show();
					break;
				case "block":
					$("#lui_"+$.jgrid.jqID(ts.p.id)).show();
					$("#load_"+$.jgrid.jqID(ts.p.id)).show();
					break;
			}
		},
		endReq = function() {
			ts.grid.hDiv.loading = false;
			switch(ts.p.loadui) {
				case "disable":
					break;
				case "enable":
					$("#load_"+$.jgrid.jqID(ts.p.id)).hide();
					break;
				case "block":
					$("#lui_"+$.jgrid.jqID(ts.p.id)).hide();
					$("#load_"+$.jgrid.jqID(ts.p.id)).hide();
					break;
			}
		},
		populate = function (npage) {
			if(!ts.grid.hDiv.loading) {
				var pvis = ts.p.scroll && npage === false,
				prm = {}, dt, dstr, pN=ts.p.prmNames;
				if(ts.p.page <=0) { ts.p.page = Math.min(1,ts.p.lastpage); }
				if(pN.search !== null) {prm[pN.search] = ts.p.search;} if(pN.nd !== null) {prm[pN.nd] = new Date().getTime();}
				if(pN.rows !== null) {prm[pN.rows]= ts.p.rowNum;} if(pN.page !== null) {prm[pN.page]= ts.p.page;}
				if(pN.sort !== null) {prm[pN.sort]= ts.p.sortname;} if(pN.order !== null) {prm[pN.order]= ts.p.sortorder;}
				if(ts.p.rowTotal !== null && pN.totalrows !== null) { prm[pN.totalrows]= ts.p.rowTotal; }
				var lcf = $.isFunction(ts.p.loadComplete), lc = lcf ? ts.p.loadComplete : null;
				var adjust = 0;
				npage = npage || 1;
				if (npage > 1) {
					if(pN.npage !== null) {
						prm[pN.npage] = npage;
						adjust = npage - 1;
						npage = 1;
					} else {
						lc = function(req) {
							ts.p.page++;
							ts.grid.hDiv.loading = false;
							if (lcf) {
								ts.p.loadComplete.call(ts,req);
							}
							populate(npage-1);
						};
					}
				} else if (pN.npage !== null) {
					delete ts.p.postData[pN.npage];
				}
				if(ts.p.grouping) {
					$(ts).jqGrid('groupingSetup');
					var grp = ts.p.groupingView, gi, gs="";
					for(gi=0;gi<grp.groupField.length;gi++) {
						var index = grp.groupField[gi];
						$.each(ts.p.colModel, function(cmIndex, cmValue) {
							if (cmValue.name === index && cmValue.index){
								index = cmValue.index;
							}
						} );
						gs += index +" "+grp.groupOrder[gi]+", ";
					}
					prm[pN.sort] = gs + prm[pN.sort];
				}
				$.extend(ts.p.postData,prm);
				var rcnt = !ts.p.scroll ? 1 : ts.rows.length-1;
				var bfr = $(ts).triggerHandler("jqGridBeforeRequest");
				if (bfr === false || bfr === 'stop') { return; }
				if ($.isFunction(ts.p.datatype)) { ts.p.datatype.call(ts,ts.p.postData,"load_"+ts.p.id, rcnt, npage, adjust); return;}
				if ($.isFunction(ts.p.beforeRequest)) {
					bfr = ts.p.beforeRequest.call(ts);
					if(bfr === undefined) { bfr = true; }
					if ( bfr === false ) { return; }
				}
				dt = ts.p.datatype.toLowerCase();
				switch(dt)
				{
				case "json":
				case "jsonp":
				case "xml":
				case "script":
					$.ajax($.extend({
						url:ts.p.url,
						type:ts.p.mtype,
						dataType: dt ,
						data: $.isFunction(ts.p.serializeGridData)? ts.p.serializeGridData.call(ts,ts.p.postData) : ts.p.postData,
						success:function(data,st, xhr) {
							if ($.isFunction(ts.p.beforeProcessing)) {
								if (ts.p.beforeProcessing.call(ts, data, st, xhr) === false) {
									endReq();
									return;
								}
							}
							if(dt === "xml") { addXmlData(data,ts.grid.bDiv,rcnt,npage>1,adjust); }
							else { addJSONData(data,ts.grid.bDiv,rcnt,npage>1,adjust); }
							$(ts).triggerHandler("jqGridLoadComplete", [data]);
							if(lc) { lc.call(ts,data); }
							$(ts).triggerHandler("jqGridAfterLoadComplete", [data]);
							if (pvis) { ts.grid.populateVisible(); }
							if( ts.p.loadonce || ts.p.treeGrid) {ts.p.datatype = "local";}
							data=null;
							if (npage === 1) { endReq(); }
						},
						error:function(xhr,st,err){
							if($.isFunction(ts.p.loadError)) { ts.p.loadError.call(ts,xhr,st,err); }
							if (npage === 1) { endReq(); }
							xhr=null;
						},
						beforeSend: function(xhr, settings ){
							var gotoreq = true;
							if($.isFunction(ts.p.loadBeforeSend)) {
								gotoreq = ts.p.loadBeforeSend.call(ts,xhr, settings); 
							}
							if(gotoreq === undefined) { gotoreq = true; }
							if(gotoreq === false) {
								return false;
							}
								beginReq();
							}
					},$.jgrid.ajaxOptions, ts.p.ajaxGridOptions));
				break;
				case "xmlstring":
					beginReq();
					dstr = typeof ts.p.datastr !== 'string' ? ts.p.datastr : $.parseXML(ts.p.datastr);
					addXmlData(dstr,ts.grid.bDiv);
					$(ts).triggerHandler("jqGridLoadComplete", [dstr]);
					if(lcf) {ts.p.loadComplete.call(ts,dstr);}
					$(ts).triggerHandler("jqGridAfterLoadComplete", [dstr]);
					ts.p.datatype = "local";
					ts.p.datastr = null;
					endReq();
				break;
				case "jsonstring":
					beginReq();
					if(typeof ts.p.datastr === 'string') { dstr = $.jgrid.parse(ts.p.datastr); }
					else { dstr = ts.p.datastr; }
					addJSONData(dstr,ts.grid.bDiv);
					$(ts).triggerHandler("jqGridLoadComplete", [dstr]);
					if(lcf) {ts.p.loadComplete.call(ts,dstr);}
					$(ts).triggerHandler("jqGridAfterLoadComplete", [dstr]);
					ts.p.datatype = "local";
					ts.p.datastr = null;
					endReq();
				break;
				case "local":
				case "clientside":
					beginReq();
					ts.p.datatype = "local";
					var req = addLocalData();
					addJSONData(req,ts.grid.bDiv,rcnt,npage>1,adjust);
					$(ts).triggerHandler("jqGridLoadComplete", [req]);
					if(lc) { lc.call(ts,req); }
					$(ts).triggerHandler("jqGridAfterLoadComplete", [req]);
					if (pvis) { ts.grid.populateVisible(); }
					endReq();
				break;
				}
			}
		},
		setHeadCheckBox = function ( checked ) {
			$('#cb_'+$.jgrid.jqID(ts.p.id),ts.grid.hDiv)[ts.p.useProp ? 'prop': 'attr']("checked", checked);
			var fid = ts.p.frozenColumns ? ts.p.id+"_frozen" : "";
			if(fid) {
				$('#cb_'+$.jgrid.jqID(ts.p.id),ts.grid.fhDiv)[ts.p.useProp ? 'prop': 'attr']("checked", checked);
			}
		},
		setPager = function (pgid, tp){
			// TBD - consider escaping pgid with pgid = $.jgrid.jqID(pgid);
			var sep = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>",
			pginp = "",
			pgl="<table cellspacing='0' cellpadding='0' border='0' style='table-layout:auto;' class='ui-pg-table'><tbody><tr>",
			str="", pgcnt, lft, cent, rgt, twd, tdw, i,
			clearVals = function(onpaging){
				var ret;
				if ($.isFunction(ts.p.onPaging) ) { ret = ts.p.onPaging.call(ts,onpaging); }
				if(ret==='stop') {return false;}
				ts.p.selrow = null;
				if(ts.p.multiselect) {ts.p.selarrrow =[]; setHeadCheckBox( false );}
				ts.p.savedRow = [];
				return true;
			};
			pgid = pgid.substr(1);
			tp += "_" + pgid;
			pgcnt = "pg_"+pgid;
			lft = pgid+"_left"; cent = pgid+"_center"; rgt = pgid+"_right";
			$("#"+$.jgrid.jqID(pgid) )
			.append("<div id='"+pgcnt+"' class='ui-pager-control' role='group'><table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table' style='width:100%;table-layout:fixed;height:100%;' role='row'><tbody><tr><td id='"+lft+"' align='left'></td><td id='"+cent+"' align='center' style='white-space:pre;'></td><td id='"+rgt+"' align='right'></td></tr></tbody></table></div>")
			.attr("dir","ltr"); //explicit setting
			if(ts.p.rowList.length >0){
				str = "<td dir='"+dir+"'>";
				str +="<select class='ui-pg-selbox' role='listbox'>";
				for(i=0;i<ts.p.rowList.length;i++){
					str +="<option role=\"option\" value=\""+ts.p.rowList[i]+"\""+((ts.p.rowNum === ts.p.rowList[i])?" selected=\"selected\"":"")+">"+ts.p.rowList[i]+"</option>";
				}
				str +="</select></td>";
			}
			if(dir==="rtl") { pgl += str; }
			if(ts.p.pginput===true) { pginp= "<td dir='"+dir+"'>"+$.jgrid.format(ts.p.pgtext || "","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(pgid)+"'></span>")+"</td>";}
			if(ts.p.pgbuttons===true) {
				var po=["first"+tp,"prev"+tp, "next"+tp,"last"+tp]; if(dir==="rtl") { po.reverse(); }
				pgl += "<td id='"+po[0]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-first'></span></td>";
				pgl += "<td id='"+po[1]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-prev'></span></td>";
				pgl += pginp !== "" ? sep+pginp+sep:"";
				pgl += "<td id='"+po[2]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-next'></span></td>";
				pgl += "<td id='"+po[3]+"' class='ui-pg-button ui-corner-all'><span class='ui-icon ui-icon-seek-end'></span></td>";
			} else if (pginp !== "") { pgl += pginp; }
			if(dir==="ltr") { pgl += str; }
			pgl += "</tr></tbody></table>";
			if(ts.p.viewrecords===true) {$("td#"+pgid+"_"+ts.p.recordpos,"#"+pgcnt).append("<div dir='"+dir+"' style='text-align:"+ts.p.recordpos+"' class='ui-paging-info'></div>");}
			$("td#"+pgid+"_"+ts.p.pagerpos,"#"+pgcnt).append(pgl);
			tdw = $(".ui-jqgrid").css("font-size") || "11px";
			$(document.body).append("<div id='testpg' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+tdw+";visibility:hidden;' ></div>");
			twd = $(pgl).clone().appendTo("#testpg").width();
			$("#testpg").remove();
			if(twd > 0) {
				if(pginp !== "") { twd += 50; } //should be param
				$("td#"+pgid+"_"+ts.p.pagerpos,"#"+pgcnt).width(twd);
			}
			ts.p._nvtd = [];
			ts.p._nvtd[0] = twd ? Math.floor((ts.p.width - twd)/2) : Math.floor(ts.p.width/3);
			ts.p._nvtd[1] = 0;
			pgl=null;
			$('.ui-pg-selbox',"#"+pgcnt).bind('change',function() {
				if(!clearVals('records')) { return false; }
				ts.p.page = Math.round(ts.p.rowNum*(ts.p.page-1)/this.value-0.5)+1;
				ts.p.rowNum = this.value;
				if(ts.p.pager) { $('.ui-pg-selbox',ts.p.pager).val(this.value); }
				if(ts.p.toppager) { $('.ui-pg-selbox',ts.p.toppager).val(this.value); }
				populate();
				return false;
			});
			if(ts.p.pgbuttons===true) {
			$(".ui-pg-button","#"+pgcnt).hover(function(){
				if($(this).hasClass('ui-state-disabled')) {
					this.style.cursor='default';
				} else {
					$(this).addClass('ui-state-hover');
					this.style.cursor='pointer';
				}
			},function() {
				if(!$(this).hasClass('ui-state-disabled')) {
					$(this).removeClass('ui-state-hover');
					this.style.cursor= "default";
				}
			});
			$("#first"+$.jgrid.jqID(tp)+", #prev"+$.jgrid.jqID(tp)+", #next"+$.jgrid.jqID(tp)+", #last"+$.jgrid.jqID(tp)).click( function() {
				if ($(this).hasClass("ui-state-disabled")) {
					return false;
				}
				var cp = intNum(ts.p.page,1),
				last = intNum(ts.p.lastpage,1), selclick = false,
				fp=true, pp=true, np=true,lp=true;
				if(last ===0 || last===1) {fp=false;pp=false;np=false;lp=false; }
				else if( last>1 && cp >=1) {
					if( cp === 1) { fp=false; pp=false; }
					//else if( cp>1 && cp <last){ }
					else if( cp===last){ np=false;lp=false; }
				} else if( last>1 && cp===0 ) { np=false;lp=false; cp=last-1;}
				if(!clearVals(this.id)) { return false; }
				if( this.id === 'first'+tp && fp ) { ts.p.page=1; selclick=true;}
				if( this.id === 'prev'+tp && pp) { ts.p.page=(cp-1); selclick=true;}
				if( this.id === 'next'+tp && np) { ts.p.page=(cp+1); selclick=true;}
				if( this.id === 'last'+tp && lp) { ts.p.page=last; selclick=true;}
				if(selclick) {
					populate();
				}
				return false;
			});
			}
			if(ts.p.pginput===true) {
			$('input.ui-pg-input',"#"+pgcnt).keypress( function(e) {
				var key = e.charCode || e.keyCode || 0;
				if(key === 13) {
					if(!clearVals('user')) { return false; }
					$(this).val( intNum( $(this).val(), 1));
					ts.p.page = ($(this).val()>0) ? $(this).val():ts.p.page;
					populate();
					return false;
				}
				return this;
			});
			}
		},
		multiSort = function(iCol, obj ) {
			var splas, sort="", cm = ts.p.colModel, fs=false, ls, 
					selTh = ts.p.frozenColumns ?  obj : ts.grid.headers[iCol].el, so="";
			$("span.ui-grid-ico-sort",selTh).addClass('ui-state-disabled');
			$(selTh).attr("aria-selected","false");

			if(cm[iCol].lso) {
				if(cm[iCol].lso==="asc") {
					cm[iCol].lso += "-desc";
					so = "desc";
				} else if(cm[iCol].lso==="desc") {
					cm[iCol].lso += "-asc";
					so = "asc";
				} else if(cm[iCol].lso==="asc-desc" || cm[iCol].lso==="desc-asc") {
					cm[iCol].lso="";
				}
			} else {
				cm[iCol].lso = so = cm[iCol].firstsortorder || 'asc';
			}
			if( so ) {
				$("span.s-ico",selTh).show();
				$("span.ui-icon-"+so,selTh).removeClass('ui-state-disabled');
				$(selTh).attr("aria-selected","true");
			} else {
				if(!ts.p.viewsortcols[0]) {
					$("span.s-ico",selTh).hide();
				}
			}
			ts.p.sortorder = "";
			$.each(cm, function(i){
				if(this.lso) {
					if(i>0 && fs) {
						sort += ", ";
					}
					splas = this.lso.split("-");
					sort += cm[i].index || cm[i].name;
					sort += " "+splas[splas.length-1];
					fs = true;
					ts.p.sortorder = splas[splas.length-1];
				}
			});
			ls = sort.lastIndexOf(ts.p.sortorder);
			sort = sort.substring(0, ls);
			ts.p.sortname = sort;
		},
		sortData = function (index, idxcol,reload,sor, obj){
			if(!ts.p.colModel[idxcol].sortable) { return; }
			if(ts.p.savedRow.length > 0) {return;}
			if(!reload) {
				if( ts.p.lastsort === idxcol ) {
					if( ts.p.sortorder === 'asc') {
						ts.p.sortorder = 'desc';
					} else if(ts.p.sortorder === 'desc') { ts.p.sortorder = 'asc';}
				} else { ts.p.sortorder = ts.p.colModel[idxcol].firstsortorder || 'asc'; }
				ts.p.page = 1;
			}
			if(ts.p.multiSort) {
				multiSort( idxcol, obj);
			} else {
				if(sor) {
					if(ts.p.lastsort === idxcol && ts.p.sortorder === sor && !reload) { return; }
					ts.p.sortorder = sor;
				}
				var previousSelectedTh = ts.grid.headers[ts.p.lastsort].el, newSelectedTh = ts.p.frozenColumns ?  obj : ts.grid.headers[idxcol].el;

				$("span.ui-grid-ico-sort",previousSelectedTh).addClass('ui-state-disabled');
				$(previousSelectedTh).attr("aria-selected","false");
				if(ts.p.frozenColumns) {
					ts.grid.fhDiv.find("span.ui-grid-ico-sort").addClass('ui-state-disabled');
					ts.grid.fhDiv.find("th").attr("aria-selected","false");
				}
				$("span.ui-icon-"+ts.p.sortorder,newSelectedTh).removeClass('ui-state-disabled');
				$(newSelectedTh).attr("aria-selected","true");
				if(!ts.p.viewsortcols[0]) {
					if(ts.p.lastsort !== idxcol) {
						if(ts.p.frozenColumns){
							ts.grid.fhDiv.find("span.s-ico").hide();
						}
						$("span.s-ico",previousSelectedTh).hide();
						$("span.s-ico",newSelectedTh).show();
					}
				}
				index = index.substring(5 + ts.p.id.length + 1); // bad to be changed!?!
				ts.p.sortname = ts.p.colModel[idxcol].index || index;
			}
			if ($(ts).triggerHandler("jqGridSortCol", [ts.p.sortname, idxcol, ts.p.sortorder]) === 'stop') {
				ts.p.lastsort = idxcol;
				return;
			}
			if($.isFunction(ts.p.onSortCol)) {if (ts.p.onSortCol.call(ts, ts.p.sortname, idxcol, ts.p.sortorder)==='stop') {ts.p.lastsort = idxcol; return;}}
			if(ts.p.datatype === "local") {
				if(ts.p.deselectAfterSort) {$(ts).jqGrid("resetSelection");}
			} else {
				ts.p.selrow = null;
				if(ts.p.multiselect){setHeadCheckBox( false );}
				ts.p.selarrrow =[];
				ts.p.savedRow =[];
			}
			if(ts.p.scroll) {
				var sscroll = ts.grid.bDiv.scrollLeft;
				emptyRows.call(ts, true, false);
				ts.grid.hDiv.scrollLeft = sscroll;
			}
			if(ts.p.subGrid && ts.p.datatype === 'local') {
				$("td.sgexpanded","#"+$.jgrid.jqID(ts.p.id)).each(function(){
					$(this).trigger("click");
				});
			}
			populate();
			ts.p.lastsort = idxcol;
			if(ts.p.sortname !== index && idxcol) {ts.p.lastsort = idxcol;}
		},
		setColWidth = function () {
			var initwidth = 0, brd=$.jgrid.cell_width? 0: intNum(ts.p.cellLayout,0), vc=0, lvc, scw=intNum(ts.p.scrollOffset,0),cw,hs=false,aw,gw=0,cr;
			$.each(ts.p.colModel, function() {
				if(this.hidden === undefined) {this.hidden=false;}
				if(ts.p.grouping && ts.p.autowidth) {
					var ind = $.inArray(this.name, ts.p.groupingView.groupField);
					if(ind >= 0 && ts.p.groupingView.groupColumnShow.length > ind) {
						this.hidden = !ts.p.groupingView.groupColumnShow[ind];
					}
				}
				this.widthOrg = cw = intNum(this.width,0);
				if(this.hidden===false){
					initwidth += cw+brd;
					if(this.fixed) {
						gw += cw+brd;
					} else {
						vc++;
					}
				}
			});
			if(isNaN(ts.p.width)) {
				ts.p.width  = initwidth + ((ts.p.shrinkToFit ===false && !isNaN(ts.p.height)) ? scw : 0);
			}
			grid.width = ts.p.width;
			ts.p.tblwidth = initwidth;
			if(ts.p.shrinkToFit ===false && ts.p.forceFit === true) {ts.p.forceFit=false;}
			if(ts.p.shrinkToFit===true && vc > 0) {
				aw = grid.width-brd*vc-gw;
				if(!isNaN(ts.p.height)) {
					aw -= scw;
					hs = true;
				}
				initwidth =0;
				$.each(ts.p.colModel, function(i) {
					if(this.hidden === false && !this.fixed){
						cw = Math.round(aw*this.width/(ts.p.tblwidth-brd*vc-gw));
						this.width =cw;
						initwidth += cw;
						lvc = i;
					}
				});
				cr =0;
				if (hs) {
					if(grid.width-gw-(initwidth+brd*vc) !== scw){
						cr = grid.width-gw-(initwidth+brd*vc)-scw;
					}
				} else if(!hs && Math.abs(grid.width-gw-(initwidth+brd*vc)) !== 1) {
					cr = grid.width-gw-(initwidth+brd*vc);
				}
				ts.p.colModel[lvc].width += cr;
				ts.p.tblwidth = initwidth+cr+brd*vc+gw;
				if(ts.p.tblwidth > ts.p.width) {
					ts.p.colModel[lvc].width -= (ts.p.tblwidth - parseInt(ts.p.width,10));
					ts.p.tblwidth = ts.p.width;
				}
			}
		},
		nextVisible= function(iCol) {
			var ret = iCol, j=iCol, i;
			for (i = iCol+1;i<ts.p.colModel.length;i++){
				if(ts.p.colModel[i].hidden !== true ) {
					j=i; break;
				}
			}
			return j-ret;
		},
		getOffset = function (iCol) {
			var $th = $(ts.grid.headers[iCol].el), ret = [$th.position().left + $th.outerWidth()];
			if(ts.p.direction==="rtl") { ret[0] = ts.p.width - ret[0]; }
			ret[0] -= ts.grid.bDiv.scrollLeft;
			ret.push($(ts.grid.hDiv).position().top);
			ret.push($(ts.grid.bDiv).offset().top - $(ts.grid.hDiv).offset().top + $(ts.grid.bDiv).height());
			return ret;
		},
		getColumnHeaderIndex = function (th) {
			var i, headers = ts.grid.headers, ci = $.jgrid.getCellIndex(th);
			for (i = 0; i < headers.length; i++) {
				if (th === headers[i].el) {
					ci = i;
					break;
				}
			}
			return ci;
		};
		this.p.id = this.id;
		if ($.inArray(ts.p.multikey,sortkeys) === -1 ) {ts.p.multikey = false;}
		ts.p.keyIndex=false;
		ts.p.keyName=false;
		for (i=0; i<ts.p.colModel.length;i++) {
			ts.p.colModel[i] = $.extend(true, {}, ts.p.cmTemplate, ts.p.colModel[i].template || {}, ts.p.colModel[i]);
			if (ts.p.keyIndex === false && ts.p.colModel[i].key===true) {
				ts.p.keyIndex = i;
			}
		}
		ts.p.sortorder = ts.p.sortorder.toLowerCase();
		$.jgrid.cell_width = $.jgrid.cellWidth();
		if(ts.p.grouping===true) {
			ts.p.scroll = false;
			ts.p.rownumbers = false;
			//ts.p.subGrid = false; expiremental
			ts.p.treeGrid = false;
			ts.p.gridview = true;
		}
		if(this.p.treeGrid === true) {
			try { $(this).jqGrid("setTreeGrid");} catch (_) {}
			if(ts.p.datatype !== "local") { ts.p.localReader = {id: "_id_"};	}
		}
		if(this.p.subGrid) {
			try { $(ts).jqGrid("setSubGrid");} catch (s){}
		}
		if(this.p.multiselect) {
			this.p.colNames.unshift("<input role='checkbox' id='cb_"+this.p.id+"' class='cbox' type='checkbox'/>");
			this.p.colModel.unshift({name:'cb',width:$.jgrid.cell_width ? ts.p.multiselectWidth+ts.p.cellLayout : ts.p.multiselectWidth,sortable:false,resizable:false,hidedlg:true,search:false,align:'center',fixed:true});
		}
		if(this.p.rownumbers) {
			this.p.colNames.unshift("");
			this.p.colModel.unshift({name:'rn',width:ts.p.rownumWidth,sortable:false,resizable:false,hidedlg:true,search:false,align:'center',fixed:true});
		}
		ts.p.xmlReader = $.extend(true,{
			root: "rows",
			row: "row",
			page: "rows>page",
			total: "rows>total",
			records : "rows>records",
			repeatitems: true,
			cell: "cell",
			id: "[id]",
			userdata: "userdata",
			subgrid: {root:"rows", row: "row", repeatitems: true, cell:"cell"}
		}, ts.p.xmlReader);
		ts.p.jsonReader = $.extend(true,{
			root: "rows",
			page: "page",
			total: "total",
			records: "records",
			repeatitems: true,
			cell: "cell",
			id: "id",
			userdata: "userdata",
			subgrid: {root:"rows", repeatitems: true, cell:"cell"}
		},ts.p.jsonReader);
		ts.p.localReader = $.extend(true,{
			root: "rows",
			page: "page",
			total: "total",
			records: "records",
			repeatitems: false,
			cell: "cell",
			id: "id",
			userdata: "userdata",
			subgrid: {root:"rows", repeatitems: true, cell:"cell"}
		},ts.p.localReader);
		if(ts.p.scroll){
			ts.p.pgbuttons = false; ts.p.pginput=false; ts.p.rowList=[];
		}
		if(ts.p.data.length) { refreshIndex(); }
		var thead = "<thead><tr class='ui-jqgrid-labels' role='rowheader'>",
		tdc, idn, w, res, sort,
		td, ptr, tbody, imgs,iac="",idc="",sortarr=[], sortord=[], sotmp=[];
		if(ts.p.shrinkToFit===true && ts.p.forceFit===true) {
			for (i=ts.p.colModel.length-1;i>=0;i--){
				if(!ts.p.colModel[i].hidden) {
					ts.p.colModel[i].resizable=false;
					break;
				}
			}
		}
		if(ts.p.viewsortcols[1] === 'horizontal') {iac=" ui-i-asc";idc=" ui-i-desc";}
		tdc = isMSIE ?  "class='ui-th-div-ie'" :"";
		imgs = "<span class='s-ico' style='display:none'><span sort='asc' class='ui-grid-ico-sort ui-icon-asc"+iac+" ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-"+dir+"'></span>";
		imgs += "<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+idc+" ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-"+dir+"'></span></span>";
		if(ts.p.multiSort) {
			sortarr = ts.p.sortname.split(",");
			for (i=0; i<sortarr.length; i++) {
				sotmp = $.trim(sortarr[i]).split(" ");
				sortarr[i] = $.trim(sotmp[0]);
				sortord[i] = sotmp[1] ? $.trim(sotmp[1]) : ts.p.sortorder || "asc";
			}
		}
		for(i=0;i<this.p.colNames.length;i++){
			var tooltip = ts.p.headertitles ? (" title=\""+$.jgrid.stripHtml(ts.p.colNames[i])+"\"") :"";
			thead += "<th id='"+ts.p.id+"_"+ts.p.colModel[i].name+"' role='columnheader' class='ui-state-default ui-th-column ui-th-"+dir+"'"+ tooltip+">";
			idn = ts.p.colModel[i].index || ts.p.colModel[i].name;
			thead += "<div id='jqgh_"+ts.p.id+"_"+ts.p.colModel[i].name+"' "+tdc+">"+ts.p.colNames[i];
			if(!ts.p.colModel[i].width)  { ts.p.colModel[i].width = 150; }
			else { ts.p.colModel[i].width = parseInt(ts.p.colModel[i].width,10); }
			if(typeof ts.p.colModel[i].title !== "boolean") { ts.p.colModel[i].title = true; }
			ts.p.colModel[i].lso = "";
			if (idn === ts.p.sortname) {
				ts.p.lastsort = i;
			}
			if(ts.p.multiSort) {
				sotmp = $.inArray(idn,sortarr);
				if( sotmp !== -1 ) {
					ts.p.colModel[i].lso = sortord[sotmp];
				}
			}
			thead += imgs+"</div></th>";
		}
		thead += "</tr></thead>";
		imgs = null;
		$(this).append(thead);
		$("thead tr:first th",this).hover(function(){$(this).addClass('ui-state-hover');},function(){$(this).removeClass('ui-state-hover');});
		if(this.p.multiselect) {
			var emp=[], chk;
			$('#cb_'+$.jgrid.jqID(ts.p.id),this).bind('click',function(){
				ts.p.selarrrow = [];
				var froz = ts.p.frozenColumns === true ? ts.p.id + "_frozen" : "";
				if (this.checked) {
					$(ts.rows).each(function(i) {
						if (i>0) {
							if(!$(this).hasClass("ui-subgrid") && !$(this).hasClass("jqgroup") && !$(this).hasClass('ui-state-disabled')){
								$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(this.id) )[ts.p.useProp ? 'prop': 'attr']("checked",true);
								$(this).addClass("ui-state-highlight").attr("aria-selected","true");  
								ts.p.selarrrow.push(this.id);
								ts.p.selrow = this.id;
								if(froz) {
									$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(this.id), ts.grid.fbDiv )[ts.p.useProp ? 'prop': 'attr']("checked",true);
									$("#"+$.jgrid.jqID(this.id), ts.grid.fbDiv).addClass("ui-state-highlight");
								}
							}
						}
					});
					chk=true;
					emp=[];
				}
				else {
					$(ts.rows).each(function(i) {
						if(i>0) {
							if(!$(this).hasClass("ui-subgrid") && !$(this).hasClass('ui-state-disabled')){
								$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(this.id) )[ts.p.useProp ? 'prop': 'attr']("checked", false);
								$(this).removeClass("ui-state-highlight").attr("aria-selected","false");
								emp.push(this.id);
								if(froz) {
									$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(this.id), ts.grid.fbDiv )[ts.p.useProp ? 'prop': 'attr']("checked",false);
									$("#"+$.jgrid.jqID(this.id), ts.grid.fbDiv).removeClass("ui-state-highlight");
								}
							}
						}
					});
					ts.p.selrow = null;
					chk=false;
				}
				$(ts).triggerHandler("jqGridSelectAll", [chk ? ts.p.selarrrow : emp, chk]);
				if($.isFunction(ts.p.onSelectAll)) {ts.p.onSelectAll.call(ts, chk ? ts.p.selarrrow : emp,chk);}
			});
		}

		if(ts.p.autowidth===true) {
			var pw = $(eg).innerWidth();
			ts.p.width = pw > 0?  pw: 'nw';
		}
		setColWidth();
		$(eg).css("width",grid.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+ts.p.id+"'>&#160;</div>");
		$(gv).css("width",grid.width+"px");
		thead = $("thead:first",ts).get(0);
		var	tfoot = "";
		if(ts.p.footerrow) { tfoot += "<table role='grid' style='width:"+ts.p.tblwidth+"px' class='ui-jqgrid-ftable' cellspacing='0' cellpadding='0' border='0'><tbody><tr role='row' class='ui-widget-content footrow footrow-"+dir+"'>"; }
		var thr = $("tr:first",thead),
		firstr = "<tr class='jqgfirstrow' role='row' style='height:auto'>";
		ts.p.disableClick=false;
		$("th",thr).each(function ( j ) {
			w = ts.p.colModel[j].width;
			if(ts.p.colModel[j].resizable === undefined) {ts.p.colModel[j].resizable = true;}
			if(ts.p.colModel[j].resizable){
				res = document.createElement("span");
				$(res).html("&#160;").addClass('ui-jqgrid-resize ui-jqgrid-resize-'+dir)
				.css("cursor","col-resize");
				$(this).addClass(ts.p.resizeclass);
			} else {
				res = "";
			}
			$(this).css("width",w+"px").prepend(res);
			res = null;
			var hdcol = "";
			if( ts.p.colModel[j].hidden ) {
				$(this).css("display","none");
				hdcol = "display:none;";
			}
			firstr += "<td role='gridcell' style='height:0px;width:"+w+"px;"+hdcol+"'></td>";
			grid.headers[j] = { width: w, el: this };
			sort = ts.p.colModel[j].sortable;
			if( typeof sort !== 'boolean') {ts.p.colModel[j].sortable =  true; sort=true;}
			var nm = ts.p.colModel[j].name;
			if( !(nm === 'cb' || nm==='subgrid' || nm==='rn') ) {
				if(ts.p.viewsortcols[2]){
					$(">div",this).addClass('ui-jqgrid-sortable');
				}
			}
			if(sort) {
				if(ts.p.multiSort) {
					if(ts.p.viewsortcols[0]) {
						$("div span.s-ico",this).show(); 
						if(ts.p.colModel[j].lso){ 
							$("div span.ui-icon-"+ts.p.colModel[j].lso,this).removeClass("ui-state-disabled");
						}
					} else if( ts.p.colModel[j].lso) {
						$("div span.s-ico",this).show();
						$("div span.ui-icon-"+ts.p.colModel[j].lso,this).removeClass("ui-state-disabled");
					}
				} else {
					if(ts.p.viewsortcols[0]) {$("div span.s-ico",this).show(); if(j===ts.p.lastsort){ $("div span.ui-icon-"+ts.p.sortorder,this).removeClass("ui-state-disabled");}}
					else if( j === ts.p.lastsort) {$("div span.s-ico",this).show();$("div span.ui-icon-"+ts.p.sortorder,this).removeClass("ui-state-disabled");}
				}
			}
			if(ts.p.footerrow) { tfoot += "<td role='gridcell' "+formatCol(j,0,'', null, '', false)+">&#160;</td>"; }
		}).mousedown(function(e) {
			if ($(e.target).closest("th>span.ui-jqgrid-resize").length !== 1) { return; }
			var ci = getColumnHeaderIndex(this);
			if(ts.p.forceFit===true) {ts.p.nv= nextVisible(ci);}
			grid.dragStart(ci, e, getOffset(ci));
			return false;
		}).click(function(e) {
			if (ts.p.disableClick) {
				ts.p.disableClick = false;
				return false;
			}
			var s = "th>div.ui-jqgrid-sortable",r,d;
			if (!ts.p.viewsortcols[2]) { s = "th>div>span>span.ui-grid-ico-sort"; }
			var t = $(e.target).closest(s);
			if (t.length !== 1) { return; }
			var ci;
			if(ts.p.frozenColumns) {
				var tid =  $(this)[0].id.substring( ts.p.id.length + 1 );
				$(ts.p.colModel).each(function(i){
					if (this.name === tid) {
						ci = i;return false;
					}
				});
			} else {
				ci = getColumnHeaderIndex(this);
			}
			if (!ts.p.viewsortcols[2]) { r=true;d=t.attr("sort"); }
			if(ci != null){
				sortData( $('div',this)[0].id, ci, r, d, this);
			}
			return false;
		});
		if (ts.p.sortable && $.fn.sortable) {
			try {
				$(ts).jqGrid("sortableColumns", thr);
			} catch (e){}
		}
		if(ts.p.footerrow) { tfoot += "</tr></tbody></table>"; }
		firstr += "</tr>";
		tbody = document.createElement("tbody");
		this.appendChild(tbody);
		$(this).addClass('ui-jqgrid-btable').append(firstr);
		firstr = null;
		var hTable = $("<table class='ui-jqgrid-htable' style='width:"+ts.p.tblwidth+"px' role='grid' aria-labelledby='gbox_"+this.id+"' cellspacing='0' cellpadding='0' border='0'></table>").append(thead),
		hg = (ts.p.caption && ts.p.hiddengrid===true) ? true : false,
		hb = $("<div class='ui-jqgrid-hbox" + (dir==="rtl" ? "-rtl" : "" )+"'></div>");
		thead = null;
		grid.hDiv = document.createElement("div");
		$(grid.hDiv)
			.css({ width: grid.width+"px"})
			.addClass("ui-state-default ui-jqgrid-hdiv")
			.append(hb);
		$(hb).append(hTable);
		hTable = null;
		if(hg) { $(grid.hDiv).hide(); }
		if(ts.p.pager){
			// TBD -- escape ts.p.pager here?
			if(typeof ts.p.pager === "string") {if(ts.p.pager.substr(0,1) !== "#") { ts.p.pager = "#"+ts.p.pager;} }
			else { ts.p.pager = "#"+ $(ts.p.pager).attr("id");}
			$(ts.p.pager).css({width: grid.width+"px"}).addClass('ui-state-default ui-jqgrid-pager ui-corner-bottom').appendTo(eg);
			if(hg) {$(ts.p.pager).hide();}
			setPager(ts.p.pager,'');
		}
		if( ts.p.cellEdit === false && ts.p.hoverrows === true) {
		$(ts).bind('mouseover',function(e) {
			ptr = $(e.target).closest("tr.jqgrow");
			if($(ptr).attr("class") !== "ui-subgrid") {
				$(ptr).addClass("ui-state-hover");
			}
		}).bind('mouseout',function(e) {
			ptr = $(e.target).closest("tr.jqgrow");
			$(ptr).removeClass("ui-state-hover");
		});
		}
		var ri,ci, tdHtml;
		$(ts).before(grid.hDiv).click(function(e) {
			td = e.target;
			ptr = $(td,ts.rows).closest("tr.jqgrow");
			if($(ptr).length === 0 || ptr[0].className.indexOf( 'ui-state-disabled' ) > -1 || ($(td,ts).closest("table.ui-jqgrid-btable").attr('id') || '').replace("_frozen","") !== ts.id ) {
				return this;
			}
			var scb = $(td).hasClass("cbox"),
			cSel = $(ts).triggerHandler("jqGridBeforeSelectRow", [ptr[0].id, e]);
			cSel = (cSel === false || cSel === 'stop') ? false : true;
			if(cSel && $.isFunction(ts.p.beforeSelectRow)) { cSel = ts.p.beforeSelectRow.call(ts,ptr[0].id, e); }
			if (td.tagName === 'A' || ((td.tagName === 'INPUT' || td.tagName === 'TEXTAREA' || td.tagName === 'OPTION' || td.tagName === 'SELECT' ) && !scb) ) { return; }
			if(cSel === true) {
				ri = ptr[0].id;
				ci = $.jgrid.getCellIndex(td);
				tdHtml = $(td).closest("td,th").html();
				$(ts).triggerHandler("jqGridCellSelect", [ri,ci,tdHtml,e]);
				if($.isFunction(ts.p.onCellSelect)) {
					ts.p.onCellSelect.call(ts,ri,ci,tdHtml,e);
				}
				if(ts.p.cellEdit === true) {
					if(ts.p.multiselect && scb){
						$(ts).jqGrid("setSelection", ri ,true,e);
					} else {
						ri = ptr[0].rowIndex;
						try {$(ts).jqGrid("editCell",ri,ci,true);} catch (_) {}
					}
				} else if ( !ts.p.multikey ) {
					if(ts.p.multiselect && ts.p.multiboxonly) {
						if(scb){$(ts).jqGrid("setSelection",ri,true,e);}
						else {
							var frz = ts.p.frozenColumns ? ts.p.id+"_frozen" : "";
							$(ts.p.selarrrow).each(function(i,n){
								var trid = $(ts).jqGrid('getGridRowById',n);
								$( trid ).removeClass("ui-state-highlight");
								$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(n))[ts.p.useProp ? 'prop': 'attr']("checked", false);
								if(frz) {
									$("#"+$.jgrid.jqID(n), "#"+$.jgrid.jqID(frz)).removeClass("ui-state-highlight");
									$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+$.jgrid.jqID(n), "#"+$.jgrid.jqID(frz))[ts.p.useProp ? 'prop': 'attr']("checked", false);
								}
							});
							ts.p.selarrrow = [];
							$(ts).jqGrid("setSelection",ri,true,e);
						}
					} else {
						$(ts).jqGrid("setSelection",ri,true,e);
					}
				} else {
					if(e[ts.p.multikey]) {
						$(ts).jqGrid("setSelection",ri,true,e);
					} else if(ts.p.multiselect && scb) {
						scb = $("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+ri).is(":checked");
						$("#jqg_"+$.jgrid.jqID(ts.p.id)+"_"+ri)[ts.p.useProp ? 'prop' : 'attr']("checked", scb);
					}
				}
			}
		}).bind('reloadGrid', function(e,opts) {
			if(ts.p.treeGrid ===true) {	ts.p.datatype = ts.p.treedatatype;}
			if (opts && opts.current) {
				ts.grid.selectionPreserver(ts);
			}
			if(ts.p.datatype==="local"){ $(ts).jqGrid("resetSelection");  if(ts.p.data.length) { refreshIndex();} }
			else if(!ts.p.treeGrid) {
				ts.p.selrow=null;
				if(ts.p.multiselect) {ts.p.selarrrow =[];setHeadCheckBox(false);}
				ts.p.savedRow = [];
			}
			if(ts.p.scroll) {emptyRows.call(ts, true, false);}
			if (opts && opts.page) {
				var page = opts.page;
				if (page > ts.p.lastpage) { page = ts.p.lastpage; }
				if (page < 1) { page = 1; }
				ts.p.page = page;
				if (ts.grid.prevRowHeight) {
					ts.grid.bDiv.scrollTop = (page - 1) * ts.grid.prevRowHeight * ts.p.rowNum;
				} else {
					ts.grid.bDiv.scrollTop = 0;
				}
			}
			if (ts.grid.prevRowHeight && ts.p.scroll) {
				delete ts.p.lastpage;
				ts.grid.populateVisible();
			} else {
				ts.grid.populate();
			}
			if(ts.p._inlinenav===true) {$(ts).jqGrid('showAddEditButtons');}
			return false;
		})
		.dblclick(function(e) {
			td = e.target;
			ptr = $(td,ts.rows).closest("tr.jqgrow");
			if($(ptr).length === 0 ){return;}
			ri = ptr[0].rowIndex;
			ci = $.jgrid.getCellIndex(td);
			$(ts).triggerHandler("jqGridDblClickRow", [$(ptr).attr("id"),ri,ci,e]);
			if ($.isFunction(ts.p.ondblClickRow)) { ts.p.ondblClickRow.call(ts,$(ptr).attr("id"),ri,ci, e); }
		})
		.bind('contextmenu', function(e) {
			td = e.target;
			ptr = $(td,ts.rows).closest("tr.jqgrow");
			if($(ptr).length === 0 ){return;}
			if(!ts.p.multiselect) {	$(ts).jqGrid("setSelection",ptr[0].id,true,e);	}
			ri = ptr[0].rowIndex;
			ci = $.jgrid.getCellIndex(td);
			$(ts).triggerHandler("jqGridRightClickRow", [$(ptr).attr("id"),ri,ci,e]);
			if ($.isFunction(ts.p.onRightClickRow)) { ts.p.onRightClickRow.call(ts,$(ptr).attr("id"),ri,ci, e); }
		});
		grid.bDiv = document.createElement("div");
		if(isMSIE) { if(String(ts.p.height).toLowerCase() === "auto") { ts.p.height = "100%"; } }
		$(grid.bDiv)
			.append($('<div style="position:relative;'+(isMSIE && $.jgrid.msiever() < 8 ? "height:0.01%;" : "")+'"></div>').append('<div></div>').append(this))
			.addClass("ui-jqgrid-bdiv")
			.css({ height: ts.p.height+(isNaN(ts.p.height)?"":"px"), width: (grid.width)+"px"})
			.scroll(grid.scrollGrid);
		$("table:first",grid.bDiv).css({width:ts.p.tblwidth+"px"});
		if( !$.support.tbody ) { //IE
			if( $("tbody",this).length === 2 ) { $("tbody:gt(0)",this).remove();}
		}
		if(ts.p.multikey){
			if( $.jgrid.msie) {
				$(grid.bDiv).bind("selectstart",function(){return false;});
			} else {
				$(grid.bDiv).bind("mousedown",function(){return false;});
			}
		}
		if(hg) {$(grid.bDiv).hide();}
		grid.cDiv = document.createElement("div");
		var arf = ts.p.hidegrid===true ? $("<a role='link' class='ui-jqgrid-titlebar-close ui-corner-all HeaderButton' />").hover(
			function(){ arf.addClass('ui-state-hover');},
			function() {arf.removeClass('ui-state-hover');})
		.append("<span class='ui-icon ui-icon-circle-triangle-n'></span>").css((dir==="rtl"?"left":"right"),"0px") : "";
		$(grid.cDiv).append(arf).append("<span class='ui-jqgrid-title'>"+ts.p.caption+"</span>")
		.addClass("ui-jqgrid-titlebar ui-jqgrid-caption"+(dir==="rtl" ? "-rtl" :"" )+" ui-widget-header ui-corner-top ui-helper-clearfix");
		$(grid.cDiv).insertBefore(grid.hDiv);
		if( ts.p.toolbar[0] ) {
			grid.uDiv = document.createElement("div");
			if(ts.p.toolbar[1] === "top") {$(grid.uDiv).insertBefore(grid.hDiv);}
			else if (ts.p.toolbar[1]==="bottom" ) {$(grid.uDiv).insertAfter(grid.hDiv);}
			if(ts.p.toolbar[1]==="both") {
				grid.ubDiv = document.createElement("div");
				$(grid.uDiv).addClass("ui-userdata ui-state-default").attr("id","t_"+this.id).insertBefore(grid.hDiv);
				$(grid.ubDiv).addClass("ui-userdata ui-state-default").attr("id","tb_"+this.id).insertAfter(grid.hDiv);
				if(hg)  {$(grid.ubDiv).hide();}
			} else {
				$(grid.uDiv).width(grid.width).addClass("ui-userdata ui-state-default").attr("id","t_"+this.id);
			}
			if(hg) {$(grid.uDiv).hide();}
		}
		if(ts.p.toppager) {
			ts.p.toppager = $.jgrid.jqID(ts.p.id)+"_toppager";
			grid.topDiv = $("<div id='"+ts.p.toppager+"'></div>")[0];
			ts.p.toppager = "#"+ts.p.toppager;
			$(grid.topDiv).addClass('ui-state-default ui-jqgrid-toppager').width(grid.width).insertBefore(grid.hDiv);
			setPager(ts.p.toppager,'_t');
		}
		if(ts.p.footerrow) {
			grid.sDiv = $("<div class='ui-jqgrid-sdiv'></div>")[0];
			hb = $("<div class='ui-jqgrid-hbox"+(dir==="rtl"?"-rtl":"")+"'></div>");
			$(grid.sDiv).append(hb).width(grid.width).insertAfter(grid.hDiv);
			$(hb).append(tfoot);
			grid.footers = $(".ui-jqgrid-ftable",grid.sDiv)[0].rows[0].cells;
			if(ts.p.rownumbers) { grid.footers[0].className = 'ui-state-default jqgrid-rownum'; }
			if(hg) {$(grid.sDiv).hide();}
		}
		hb = null;
		if(ts.p.caption) {
			var tdt = ts.p.datatype;
			if(ts.p.hidegrid===true) {
				$(".ui-jqgrid-titlebar-close",grid.cDiv).click( function(e){
					var onHdCl = $.isFunction(ts.p.onHeaderClick),
					elems = ".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-pager, .ui-jqgrid-sdiv",
					counter, self = this;
					if(ts.p.toolbar[0]===true) {
						if( ts.p.toolbar[1]==='both') {
							elems += ', #' + $(grid.ubDiv).attr('id');
						}
						elems += ', #' + $(grid.uDiv).attr('id');
					}
					counter = $(elems,"#gview_"+$.jgrid.jqID(ts.p.id)).length;

					if(ts.p.gridstate === 'visible') {
						$(elems,"#gbox_"+$.jgrid.jqID(ts.p.id)).slideUp("fast", function() {
							counter--;
							if (counter === 0) {
								$("span",self).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s");
								ts.p.gridstate = 'hidden';
								if($("#gbox_"+$.jgrid.jqID(ts.p.id)).hasClass("ui-resizable")) { $(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(ts.p.id)).hide(); }
								$(ts).triggerHandler("jqGridHeaderClick", [ts.p.gridstate,e]);
								if(onHdCl) {if(!hg) {ts.p.onHeaderClick.call(ts,ts.p.gridstate,e);}}
							}
						});
					} else if(ts.p.gridstate === 'hidden'){
						$(elems,"#gbox_"+$.jgrid.jqID(ts.p.id)).slideDown("fast", function() {
							counter--;
							if (counter === 0) {
								$("span",self).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n");
								if(hg) {ts.p.datatype = tdt;populate();hg=false;}
								ts.p.gridstate = 'visible';
								if($("#gbox_"+$.jgrid.jqID(ts.p.id)).hasClass("ui-resizable")) { $(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(ts.p.id)).show(); }
								$(ts).triggerHandler("jqGridHeaderClick", [ts.p.gridstate,e]);
								if(onHdCl) {if(!hg) {ts.p.onHeaderClick.call(ts,ts.p.gridstate,e);}}
							}
						});
					}
					return false;
				});
				if(hg) {ts.p.datatype="local"; $(".ui-jqgrid-titlebar-close",grid.cDiv).trigger("click");}
			}
		} else {$(grid.cDiv).hide();}
		$(grid.hDiv).after(grid.bDiv)
		.mousemove(function (e) {
			if(grid.resizing){grid.dragMove(e);return false;}
		});
		$(".ui-jqgrid-labels",grid.hDiv).bind("selectstart", function () { return false; });
		$(document).bind( "mouseup.jqGrid" + ts.p.id, function () {
			if(grid.resizing) {	grid.dragEnd(); return false;}
			return true;
		});
		ts.formatCol = formatCol;
		ts.sortData = sortData;
		ts.updatepager = updatepager;
		ts.refreshIndex = refreshIndex;
		ts.setHeadCheckBox = setHeadCheckBox;
		ts.constructTr = constructTr;
		ts.formatter = function ( rowId, cellval , colpos, rwdat, act){return formatter(rowId, cellval , colpos, rwdat, act);};
		$.extend(grid,{populate : populate, emptyRows: emptyRows, beginReq: beginReq, endReq: endReq});
		this.grid = grid;
		ts.addXmlData = function(d) {addXmlData(d,ts.grid.bDiv);};
		ts.addJSONData = function(d) {addJSONData(d,ts.grid.bDiv);};
		this.grid.cols = this.rows[0].cells;
		$(ts).triggerHandler("jqGridInitGrid");
		if ($.isFunction( ts.p.onInitGrid )) { ts.p.onInitGrid.call(ts); }

		populate();ts.p.hiddengrid=false;
	});
};
$.jgrid.extend({
	getGridParam : function(pName) {
		var $t = this[0];
		if (!$t || !$t.grid) {return;}
		if (!pName) { return $t.p; }
		return $t.p[pName] !== undefined ? $t.p[pName] : null;
	},
	setGridParam : function (newParams){
		return this.each(function(){
			if (this.grid && typeof newParams === 'object') {$.extend(true,this.p,newParams);}
		});
	},
	getGridRowById: function ( rowid ) {
		var row;
		this.each( function(){
			try {
				//row = this.rows.namedItem( rowid );
				var i = this.rows.length;
				while(i--) {
					if( rowid.toString() === this.rows[i].id) {
						row = this.rows[i];
						break;
					}
				}
			} catch ( e ) {
				row = $(this.grid.bDiv).find( "#" + $.jgrid.jqID( rowid ));
			}
		});
		return row;
	},
	getDataIDs : function () {
		var ids=[], i=0, len, j=0;
		this.each(function(){
			len = this.rows.length;
			if(len && len>0){
				while(i<len) {
					if($(this.rows[i]).hasClass('jqgrow')) {
						ids[j] = this.rows[i].id;
						j++;
					}
					i++;
				}
			}
		});
		return ids;
	},
	setSelection : function(selection,onsr, e) {
		return this.each(function(){
			var $t = this, stat,pt, ner, ia, tpsr, fid;
			if(selection === undefined) { return; }
			onsr = onsr === false ? false : true;
			pt=$($t).jqGrid('getGridRowById', selection);
			if(!pt || !pt.className || pt.className.indexOf( 'ui-state-disabled' ) > -1 ) { return; }
			function scrGrid(iR){
				var ch = $($t.grid.bDiv)[0].clientHeight,
				st = $($t.grid.bDiv)[0].scrollTop,
				rpos = $($t.rows[iR]).position().top,
				rh = $t.rows[iR].clientHeight;
				if(rpos+rh >= ch+st) { $($t.grid.bDiv)[0].scrollTop = rpos-(ch+st)+rh+st; }
				else if(rpos < ch+st) {
					if(rpos < st) {
						$($t.grid.bDiv)[0].scrollTop = rpos;
					}
				}
			}
			if($t.p.scrollrows===true) {
				ner = $($t).jqGrid('getGridRowById',selection).rowIndex;
				if(ner >=0 ){
					scrGrid(ner);
				}
			}
			if($t.p.frozenColumns === true ) {
				fid = $t.p.id+"_frozen";
			}
			if(!$t.p.multiselect) {	
				if(pt.className !== "ui-subgrid") {
					if( $t.p.selrow !== pt.id) {
						$( $($t).jqGrid('getGridRowById', $t.p.selrow) ).removeClass("ui-state-highlight").attr({"aria-selected":"false", "tabindex" : "-1"});
						$(pt).addClass("ui-state-highlight").attr({"aria-selected":"true", "tabindex" : "0"});//.focus();
						if(fid) {
							$("#"+$.jgrid.jqID($t.p.selrow), "#"+$.jgrid.jqID(fid)).removeClass("ui-state-highlight");
							$("#"+$.jgrid.jqID(selection), "#"+$.jgrid.jqID(fid)).addClass("ui-state-highlight");
						}
						stat = true;
					} else {
						stat = false;
					}
					$t.p.selrow = pt.id;
					if( onsr ) { 
						$($t).triggerHandler("jqGridSelectRow", [pt.id, stat, e]);
						if( $t.p.onSelectRow) { $t.p.onSelectRow.call($t, pt.id, stat, e); }
					}
				}
			} else {
				//unselect selectall checkbox when deselecting a specific row
				$t.setHeadCheckBox( false );
				$t.p.selrow = pt.id;
				ia = $.inArray($t.p.selrow,$t.p.selarrrow);
				if (  ia === -1 ){
					if(pt.className !== "ui-subgrid") { $(pt).addClass("ui-state-highlight").attr("aria-selected","true");}
					stat = true;
					$t.p.selarrrow.push($t.p.selrow);
				} else {
					if(pt.className !== "ui-subgrid") { $(pt).removeClass("ui-state-highlight").attr("aria-selected","false");}
					stat = false;
					$t.p.selarrrow.splice(ia,1);
					tpsr = $t.p.selarrrow[0];
					$t.p.selrow = (tpsr === undefined) ? null : tpsr;
				}
				$("#jqg_"+$.jgrid.jqID($t.p.id)+"_"+$.jgrid.jqID(pt.id))[$t.p.useProp ? 'prop': 'attr']("checked",stat);
				if(fid) {
					if(ia === -1) {
						$("#"+$.jgrid.jqID(selection), "#"+$.jgrid.jqID(fid)).addClass("ui-state-highlight");
					} else {
						$("#"+$.jgrid.jqID(selection), "#"+$.jgrid.jqID(fid)).removeClass("ui-state-highlight");
					}
					$("#jqg_"+$.jgrid.jqID($t.p.id)+"_"+$.jgrid.jqID(selection), "#"+$.jgrid.jqID(fid))[$t.p.useProp ? 'prop': 'attr']("checked",stat);
				}
				if( onsr ) {
					$($t).triggerHandler("jqGridSelectRow", [pt.id, stat, e]);
					if( $t.p.onSelectRow) { $t.p.onSelectRow.call($t, pt.id , stat, e); }
				}
			}
		});
	},
	resetSelection : function( rowid ){
		return this.each(function(){
			var t = this, sr, fid;
			if( t.p.frozenColumns === true ) {
				fid = t.p.id+"_frozen";
			}
			if(rowid !== undefined ) {
				sr = rowid === t.p.selrow ? t.p.selrow : rowid;
				$("#"+$.jgrid.jqID(t.p.id)+" tbody:first tr#"+$.jgrid.jqID(sr)).removeClass("ui-state-highlight").attr("aria-selected","false");
				if (fid) { $("#"+$.jgrid.jqID(sr), "#"+$.jgrid.jqID(fid)).removeClass("ui-state-highlight"); }
				if(t.p.multiselect) {
					$("#jqg_"+$.jgrid.jqID(t.p.id)+"_"+$.jgrid.jqID(sr), "#"+$.jgrid.jqID(t.p.id))[t.p.useProp ? 'prop': 'attr']("checked",false);
					if(fid) { $("#jqg_"+$.jgrid.jqID(t.p.id)+"_"+$.jgrid.jqID(sr), "#"+$.jgrid.jqID(fid))[t.p.useProp ? 'prop': 'attr']("checked",false); }
					t.setHeadCheckBox( false);
				}
				sr = null;
			} else if(!t.p.multiselect) {
				if(t.p.selrow) {
					$("#"+$.jgrid.jqID(t.p.id)+" tbody:first tr#"+$.jgrid.jqID(t.p.selrow)).removeClass("ui-state-highlight").attr("aria-selected","false");
					if(fid) { $("#"+$.jgrid.jqID(t.p.selrow), "#"+$.jgrid.jqID(fid)).removeClass("ui-state-highlight"); }
					t.p.selrow = null;
				}
			} else {
				$(t.p.selarrrow).each(function(i,n){
					$( $(t).jqGrid('getGridRowById',n) ).removeClass("ui-state-highlight").attr("aria-selected","false");
					$("#jqg_"+$.jgrid.jqID(t.p.id)+"_"+$.jgrid.jqID(n))[t.p.useProp ? 'prop': 'attr']("checked",false);
					if(fid) { 
						$("#"+$.jgrid.jqID(n), "#"+$.jgrid.jqID(fid)).removeClass("ui-state-highlight"); 
						$("#jqg_"+$.jgrid.jqID(t.p.id)+"_"+$.jgrid.jqID(n), "#"+$.jgrid.jqID(fid))[t.p.useProp ? 'prop': 'attr']("checked",false);
					}
				});
				t.setHeadCheckBox( false );
				t.p.selarrrow = [];
				t.p.selrow = null;
			}
			if(t.p.cellEdit === true) {
				if(parseInt(t.p.iCol,10)>=0  && parseInt(t.p.iRow,10)>=0) {
					$("td:eq("+t.p.iCol+")",t.rows[t.p.iRow]).removeClass("edit-cell ui-state-highlight");
					$(t.rows[t.p.iRow]).removeClass("selected-row ui-state-hover");
				}
			}
			t.p.savedRow = [];
		});
	},
	getRowData : function( rowid ) {
		var res = {}, resall, getall=false, len, j=0;
		this.each(function(){
			var $t = this,nm,ind;
			if(rowid === undefined) {
				getall = true;
				resall = [];
				len = $t.rows.length;
			} else {
				ind = $($t).jqGrid('getGridRowById', rowid);
				if(!ind) { return res; }
				len = 2;
			}
			while(j<len){
				if(getall) { ind = $t.rows[j]; }
				if( $(ind).hasClass('jqgrow') ) {
					$('td[role="gridcell"]',ind).each( function(i) {
						nm = $t.p.colModel[i].name;
						if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn') {
							if($t.p.treeGrid===true && nm === $t.p.ExpandColumn) {
								res[nm] = $.jgrid.htmlDecode($("span:first",this).html());
							} else {
								try {
									res[nm] = $.unformat.call($t,this,{rowId:ind.id, colModel:$t.p.colModel[i]},i);
								} catch (e){
									res[nm] = $.jgrid.htmlDecode($(this).html());
								}
							}
						}
					});
					if(getall) { resall.push(res); res={}; }
				}
				j++;
			}
		});
		return resall || res;
	},
	delRowData : function(rowid) {
		var success = false, rowInd, ia;
		this.each(function() {
			var $t = this;
			rowInd = $($t).jqGrid('getGridRowById', rowid);
			if(!rowInd) {return false;}
				$(rowInd).remove();
				$t.p.records--;
				$t.p.reccount--;
				$t.updatepager(true,false);
				success=true;
				if($t.p.multiselect) {
					ia = $.inArray(rowid,$t.p.selarrrow);
					if(ia !== -1) { $t.p.selarrrow.splice(ia,1);}
				}
				if ($t.p.multiselect && $t.p.selarrrow.length > 0) {
					$t.p.selrow = $t.p.selarrrow[$t.p.selarrrow.length-1];
				} else {
					$t.p.selrow = null;
				}
			if($t.p.datatype === 'local') {
				var id = $.jgrid.stripPref($t.p.idPrefix, rowid),
				pos = $t.p._index[id];
				if(pos !== undefined) {
					$t.p.data.splice(pos,1);
					$t.refreshIndex();
				}
			}
			if( $t.p.altRows === true && success ) {
				var cn = $t.p.altclass;
				$($t.rows).each(function(i){
					if(i % 2 === 1) { $(this).addClass(cn); }
					else { $(this).removeClass(cn); }
				});
			}
		});
		return success;
	},
	setRowData : function(rowid, data, cssp) {
		var nm, success=true, title;
		this.each(function(){
			if(!this.grid) {return false;}
			var t = this, vl, ind, cp = typeof cssp, lcdata={};
			ind = $(this).jqGrid('getGridRowById', rowid);
			if(!ind) { return false; }
			if( data ) {
				try {
					$(this.p.colModel).each(function(i){
						nm = this.name;
						var dval =$.jgrid.getAccessor(data,nm);
						if( dval !== undefined) {
							lcdata[nm] = this.formatter && typeof this.formatter === 'string' && this.formatter === 'date' ? $.unformat.date.call(t,dval,this) : dval;
							vl = t.formatter( rowid, dval, i, data, 'edit');
							title = this.title ? {"title":$.jgrid.stripHtml(vl)} : {};
							if(t.p.treeGrid===true && nm === t.p.ExpandColumn) {
								$("td[role='gridcell']:eq("+i+") > span:first",ind).html(vl).attr(title);
							} else {
								$("td[role='gridcell']:eq("+i+")",ind).html(vl).attr(title);
							}
						}
					});
					if(t.p.datatype === 'local') {
						var id = $.jgrid.stripPref(t.p.idPrefix, rowid),
						pos = t.p._index[id], key;
						if(t.p.treeGrid) {
							for(key in t.p.treeReader){
								if(t.p.treeReader.hasOwnProperty(key)) {
									delete lcdata[t.p.treeReader[key]];
								}
							}
						}
						if(pos !== undefined) {
							t.p.data[pos] = $.extend(true, t.p.data[pos], lcdata);
						}
						lcdata = null;
					}
				} catch (e) {
					success = false;
				}
			}
			if(success) {
				if(cp === 'string') {$(ind).addClass(cssp);} else if(cssp !== null && cp === 'object') {$(ind).css(cssp);}
				$(t).triggerHandler("jqGridAfterGridComplete");
			}
		});
		return success;
	},
	addRowData : function(rowid,rdata,pos,src) {
		if(!pos) {pos = "last";}
		var success = false, nm, row, gi, si, ni,sind, i, v, prp="", aradd, cnm, cn, data, cm, id;
		if(rdata) {
			if($.isArray(rdata)) {
				aradd=true;
				pos = "last";
				cnm = rowid;
			} else {
				rdata = [rdata];
				aradd = false;
			}
			this.each(function() {
				var t = this, datalen = rdata.length;
				ni = t.p.rownumbers===true ? 1 :0;
				gi = t.p.multiselect ===true ? 1 :0;
				si = t.p.subGrid===true ? 1 :0;
				if(!aradd) {
					if(rowid !== undefined) { rowid = String(rowid);}
					else {
						rowid = $.jgrid.randId();
						if(t.p.keyIndex !== false) {
							cnm = t.p.colModel[t.p.keyIndex+gi+si+ni].name;
							if(rdata[0][cnm] !== undefined) { rowid = rdata[0][cnm]; }
						}
					}
				}
				cn = t.p.altclass;
				var k = 0, cna ="", lcdata = {},
				air = $.isFunction(t.p.afterInsertRow) ? true : false;
				while(k < datalen) {
					data = rdata[k];
					row=[];
					if(aradd) {
						try {
							rowid = data[cnm];
							if(rowid===undefined) {
								rowid = $.jgrid.randId();
							}
						}
						catch (e) {rowid = $.jgrid.randId();}
						cna = t.p.altRows === true ?  (t.rows.length-1)%2 === 0 ? cn : "" : "";
					}
					id = rowid;
					rowid  = t.p.idPrefix + rowid;
					if(ni){
						prp = t.formatCol(0,1,'',null,rowid, true);
						row[row.length] = "<td role=\"gridcell\" class=\"ui-state-default jqgrid-rownum\" "+prp+">0</td>";
					}
					if(gi) {
						v = "<input role=\"checkbox\" type=\"checkbox\""+" id=\"jqg_"+t.p.id+"_"+rowid+"\" class=\"cbox\"/>";
						prp = t.formatCol(ni,1,'', null, rowid, true);
						row[row.length] = "<td role=\"gridcell\" "+prp+">"+v+"</td>";
					}
					if(si) {
						row[row.length] = $(t).jqGrid("addSubGridCell",gi+ni,1);
					}
					for(i = gi+si+ni; i < t.p.colModel.length;i++){
						cm = t.p.colModel[i];
						nm = cm.name;
						lcdata[nm] = data[nm];
						v = t.formatter( rowid, $.jgrid.getAccessor(data,nm), i, data );
						prp = t.formatCol(i,1,v, data, rowid, lcdata);
						row[row.length] = "<td role=\"gridcell\" "+prp+">"+v+"</td>";
					}
					row.unshift( t.constructTr(rowid, false, cna, lcdata, data, false ) );
					row[row.length] = "</tr>";
					if(t.rows.length === 0){
						$("table:first",t.grid.bDiv).append(row.join(''));
					} else {
						switch (pos) {
							case 'last':
								$(t.rows[t.rows.length-1]).after(row.join(''));
								sind = t.rows.length-1;
								break;
							case 'first':
								$(t.rows[0]).after(row.join(''));
								sind = 1;
								break;
							case 'after':
								sind = $(t).jqGrid('getGridRowById', src);
								if (sind) {
									if($(t.rows[sind.rowIndex+1]).hasClass("ui-subgrid")) { $(t.rows[sind.rowIndex+1]).after(row); }
									else { $(sind).after(row.join('')); }
									sind=sind.rowIndex + 1;
								}	
								break;
							case 'before':
								sind = $(t).jqGrid('getGridRowById', src);
								if(sind) {
									$(sind).before(row.join(''));
									sind=sind.rowIndex - 1;
								}
								break;
						}
					}
					if(t.p.subGrid===true) {
						$(t).jqGrid("addSubGrid",gi+ni, sind);
					}
					t.p.records++;
					t.p.reccount++;
					$(t).triggerHandler("jqGridAfterInsertRow", [rowid,data,data]);
					if(air) { t.p.afterInsertRow.call(t,rowid,data,data); }
					k++;
					if(t.p.datatype === 'local') {
						lcdata[t.p.localReader.id] = id;
						t.p._index[id] = t.p.data.length;
						t.p.data.push(lcdata);
						lcdata = {};
					}
				}
				if( t.p.altRows === true && !aradd) {
					if (pos === "last") {
						if ((t.rows.length-1)%2 === 1)  {$(t.rows[t.rows.length-1]).addClass(cn);}
					} else {
						$(t.rows).each(function(i){
							if(i % 2 ===1) { $(this).addClass(cn); }
							else { $(this).removeClass(cn); }
						});
					}
				}
				t.updatepager(true,true);
				success = true;
			});
		}
		return success;
	},
	footerData : function(action,data, format) {
		var nm, success=false, res={}, title;
		function isEmpty(obj) {
			var i;
			for(i in obj) {
				if (obj.hasOwnProperty(i)) { return false; }
			}
			return true;
		}
		if(action == undefined) { action = "get"; }
		if(typeof format !== "boolean") { format  = true; }
		action = action.toLowerCase();
		this.each(function(){
			var t = this, vl;
			if(!t.grid || !t.p.footerrow) {return false;}
			if(action === "set") { if(isEmpty(data)) { return false; } }
			success=true;
			$(this.p.colModel).each(function(i){
				nm = this.name;
				if(action === "set") {
					if( data[nm] !== undefined) {
						vl = format ? t.formatter( "", data[nm], i, data, 'edit') : data[nm];
						title = this.title ? {"title":$.jgrid.stripHtml(vl)} : {};
						$("tr.footrow td:eq("+i+")",t.grid.sDiv).html(vl).attr(title);
						success = true;
					}
				} else if(action === "get") {
					res[nm] = $("tr.footrow td:eq("+i+")",t.grid.sDiv).html();
				}
			});
		});
		return action === "get" ? res : success;
	},
	showHideCol : function(colname,show) {
		return this.each(function() {
			var $t = this, fndh=false, brd=$.jgrid.cell_width ? 0: $t.p.cellLayout, cw;
			if (!$t.grid ) {return;}
			if( typeof colname === 'string') {colname=[colname];}
			show = show !== "none" ? "" : "none";
			var sw = show === "" ? true :false,
			gh = $t.p.groupHeader && (typeof $t.p.groupHeader === 'object' || $.isFunction($t.p.groupHeader) );
			if(gh) { $($t).jqGrid('destroyGroupHeader', false); }
			$(this.p.colModel).each(function(i) {
				if ($.inArray(this.name,colname) !== -1 && this.hidden === sw) {
					if($t.p.frozenColumns === true && this.frozen === true) {
						return true;
					}
					$("tr[role=rowheader]",$t.grid.hDiv).each(function(){
						$(this.cells[i]).css("display", show);
					});
					$($t.rows).each(function(){
						if (!$(this).hasClass("jqgroup")) {
							$(this.cells[i]).css("display", show);
						}
					});
					if($t.p.footerrow) { $("tr.footrow td:eq("+i+")", $t.grid.sDiv).css("display", show); }
					cw =  parseInt(this.width,10);
					if(show === "none") {
						$t.p.tblwidth -= cw+brd;
					} else {
						$t.p.tblwidth += cw+brd;
					}
					this.hidden = !sw;
					fndh=true;
					$($t).triggerHandler("jqGridShowHideCol", [sw,this.name,i]);
				}
			});
			if(fndh===true) {
				if($t.p.shrinkToFit === true && !isNaN($t.p.height)) { $t.p.tblwidth += parseInt($t.p.scrollOffset,10);}
				$($t).jqGrid("setGridWidth",$t.p.shrinkToFit === true ? $t.p.tblwidth : $t.p.width );
			}
			if( gh )  {
				$($t).jqGrid('setGroupHeaders',$t.p.groupHeader);
			}
		});
	},
	hideCol : function (colname) {
		return this.each(function(){$(this).jqGrid("showHideCol",colname,"none");});
	},
	showCol : function(colname) {
		return this.each(function(){$(this).jqGrid("showHideCol",colname,"");});
	},
	remapColumns : function(permutation, updateCells, keepHeader)
	{
		function resortArray(a) {
			var ac;
			if (a.length) {
				ac = $.makeArray(a);
			} else {
				ac = $.extend({}, a);
			}
			$.each(permutation, function(i) {
				a[i] = ac[this];
			});
		}
		var ts = this.get(0);
		function resortRows(parent, clobj) {
			$(">tr"+(clobj||""), parent).each(function() {
				var row = this;
				var elems = $.makeArray(row.cells);
				$.each(permutation, function() {
					var e = elems[this];
					if (e) {
						row.appendChild(e);
					}
				});
			});
		}
		resortArray(ts.p.colModel);
		resortArray(ts.p.colNames);
		resortArray(ts.grid.headers);
		resortRows($("thead:first", ts.grid.hDiv), keepHeader && ":not(.ui-jqgrid-labels)");
		if (updateCells) {
			resortRows($("#"+$.jgrid.jqID(ts.p.id)+" tbody:first"), ".jqgfirstrow, tr.jqgrow, tr.jqfoot");
		}
		if (ts.p.footerrow) {
			resortRows($("tbody:first", ts.grid.sDiv));
		}
		if (ts.p.remapColumns) {
			if (!ts.p.remapColumns.length){
				ts.p.remapColumns = $.makeArray(permutation);
			} else {
				resortArray(ts.p.remapColumns);
			}
		}
		ts.p.lastsort = $.inArray(ts.p.lastsort, permutation);
		if(ts.p.treeGrid) { ts.p.expColInd = $.inArray(ts.p.expColInd, permutation); }
		$(ts).triggerHandler("jqGridRemapColumns", [permutation, updateCells, keepHeader]);
	},
	setGridWidth : function(nwidth, shrink) {
		return this.each(function(){
			if (!this.grid ) {return;}
			var $t = this, cw,
			initwidth = 0, brd=$.jgrid.cell_width ? 0: $t.p.cellLayout, lvc, vc=0, hs=false, scw=$t.p.scrollOffset, aw, gw=0, cr;
			if(typeof shrink !== 'boolean') {
				shrink=$t.p.shrinkToFit;
			}
			if(isNaN(nwidth)) {return;}
			nwidth = parseInt(nwidth,10); 
			$t.grid.width = $t.p.width = nwidth;
			$("#gbox_"+$.jgrid.jqID($t.p.id)).css("width",nwidth+"px");
			$("#gview_"+$.jgrid.jqID($t.p.id)).css("width",nwidth+"px");
			$($t.grid.bDiv).css("width",nwidth+"px");
			$($t.grid.hDiv).css("width",nwidth+"px");
			if($t.p.pager ) {$($t.p.pager).css("width",nwidth+"px");}
			if($t.p.toppager ) {$($t.p.toppager).css("width",nwidth+"px");}
			if($t.p.toolbar[0] === true){
				$($t.grid.uDiv).css("width",nwidth+"px");
				if($t.p.toolbar[1]==="both") {$($t.grid.ubDiv).css("width",nwidth+"px");}
			}
			if($t.p.footerrow) { $($t.grid.sDiv).css("width",nwidth+"px"); }
			if(shrink ===false && $t.p.forceFit === true) {$t.p.forceFit=false;}
			if(shrink===true) {
				$.each($t.p.colModel, function() {
					if(this.hidden===false){
						cw = this.widthOrg;
						initwidth += cw+brd;
						if(this.fixed) {
							gw += cw+brd;
						} else {
							vc++;
						}
					}
				});
				if(vc  === 0) { return; }
				$t.p.tblwidth = initwidth;
				aw = nwidth-brd*vc-gw;
				if(!isNaN($t.p.height)) {
					if($($t.grid.bDiv)[0].clientHeight < $($t.grid.bDiv)[0].scrollHeight || $t.rows.length === 1){
						hs = true;
						aw -= scw;
					}
				}
				initwidth =0;
				var cle = $t.grid.cols.length >0;
				$.each($t.p.colModel, function(i) {
					if(this.hidden === false && !this.fixed){
						cw = this.widthOrg;
						cw = Math.round(aw*cw/($t.p.tblwidth-brd*vc-gw));
						if (cw < 0) { return; }
						this.width =cw;
						initwidth += cw;
						$t.grid.headers[i].width=cw;
						$t.grid.headers[i].el.style.width=cw+"px";
						if($t.p.footerrow) { $t.grid.footers[i].style.width = cw+"px"; }
						if(cle) { $t.grid.cols[i].style.width = cw+"px"; }
						lvc = i;
					}
				});

				if (!lvc) { return; }

				cr =0;
				if (hs) {
					if(nwidth-gw-(initwidth+brd*vc) !== scw){
						cr = nwidth-gw-(initwidth+brd*vc)-scw;
					}
				} else if( Math.abs(nwidth-gw-(initwidth+brd*vc)) !== 1) {
					cr = nwidth-gw-(initwidth+brd*vc);
				}
				$t.p.colModel[lvc].width += cr;
				$t.p.tblwidth = initwidth+cr+brd*vc+gw;
				if($t.p.tblwidth > nwidth) {
					var delta = $t.p.tblwidth - parseInt(nwidth,10);
					$t.p.tblwidth = nwidth;
					cw = $t.p.colModel[lvc].width = $t.p.colModel[lvc].width-delta;
				} else {
					cw= $t.p.colModel[lvc].width;
				}
				$t.grid.headers[lvc].width = cw;
				$t.grid.headers[lvc].el.style.width=cw+"px";
				if(cle) { $t.grid.cols[lvc].style.width = cw+"px"; }
				if($t.p.footerrow) {
					$t.grid.footers[lvc].style.width = cw+"px";
				}
			}
			if($t.p.tblwidth) {
				$('table:first',$t.grid.bDiv).css("width",$t.p.tblwidth+"px");
				$('table:first',$t.grid.hDiv).css("width",$t.p.tblwidth+"px");
				$t.grid.hDiv.scrollLeft = $t.grid.bDiv.scrollLeft;
				if($t.p.footerrow) {
					$('table:first',$t.grid.sDiv).css("width",$t.p.tblwidth+"px");
				}
			}
		});
	},
	setGridHeight : function (nh) {
		return this.each(function (){
			var $t = this;
			if(!$t.grid) {return;}
			var bDiv = $($t.grid.bDiv);
			bDiv.css({height: nh+(isNaN(nh)?"":"px")});
			if($t.p.frozenColumns === true){
				//follow the original set height to use 16, better scrollbar width detection
				$('#'+$.jgrid.jqID($t.p.id)+"_frozen").parent().height(bDiv.height() - 16);
			}
			$t.p.height = nh;
			if ($t.p.scroll) { $t.grid.populateVisible(); }
		});
	},
	setCaption : function (newcap){
		return this.each(function(){
			this.p.caption=newcap;
			$("span.ui-jqgrid-title, span.ui-jqgrid-title-rtl",this.grid.cDiv).html(newcap);
			$(this.grid.cDiv).show();
		});
	},
	setLabel : function(colname, nData, prop, attrp ){
		return this.each(function(){
			var $t = this, pos=-1;
			if(!$t.grid) {return;}
			if(colname !== undefined) {
				$($t.p.colModel).each(function(i){
					if (this.name === colname) {
						pos = i;return false;
					}
				});
			} else { return; }
			if(pos>=0) {
				var thecol = $("tr.ui-jqgrid-labels th:eq("+pos+")",$t.grid.hDiv);
				if (nData){
					var ico = $(".s-ico",thecol);
					$("[id^=jqgh_]",thecol).empty().html(nData).append(ico);
					$t.p.colNames[pos] = nData;
				}
				if (prop) {
					if(typeof prop === 'string') {$(thecol).addClass(prop);} else {$(thecol).css(prop);}
				}
				if(typeof attrp === 'object') {$(thecol).attr(attrp);}
			}
		});
	},
	setCell : function(rowid,colname,nData,cssp,attrp, forceupd) {
		return this.each(function(){
			var $t = this, pos =-1,v, title;
			if(!$t.grid) {return;}
			if(isNaN(colname)) {
				$($t.p.colModel).each(function(i){
					if (this.name === colname) {
						pos = i;return false;
					}
				});
			} else {pos = parseInt(colname,10);}
			if(pos>=0) {
				var ind = $($t).jqGrid('getGridRowById', rowid); 
				if (ind){
					var tcell = $("td:eq("+pos+")",ind);
					if(nData !== "" || forceupd === true) {
						v = $t.formatter(rowid, nData, pos,ind,'edit');
						title = $t.p.colModel[pos].title ? {"title":$.jgrid.stripHtml(v)} : {};
						if($t.p.treeGrid && $(".tree-wrap",$(tcell)).length>0) {
							$("span",$(tcell)).html(v).attr(title);
						} else {
							$(tcell).html(v).attr(title);
						}
						if($t.p.datatype === "local") {
							var cm = $t.p.colModel[pos], index;
							nData = cm.formatter && typeof cm.formatter === 'string' && cm.formatter === 'date' ? $.unformat.date.call($t,nData,cm) : nData;
							index = $t.p._index[$.jgrid.stripPref($t.p.idPrefix, rowid)];
							if(index !== undefined) {
								$t.p.data[index][cm.name] = nData;
							}
						}
					}
					if(typeof cssp === 'string'){
						$(tcell).addClass(cssp);
					} else if(cssp) {
						$(tcell).css(cssp);
					}
					if(typeof attrp === 'object') {$(tcell).attr(attrp);}
				}
			}
		});
	},
	getCell : function(rowid,col) {
		var ret = false;
		this.each(function(){
			var $t=this, pos=-1;
			if(!$t.grid) {return;}
			if(isNaN(col)) {
				$($t.p.colModel).each(function(i){
					if (this.name === col) {
						pos = i;return false;
					}
				});
			} else {pos = parseInt(col,10);}
			if(pos>=0) {
				var ind = $($t).jqGrid('getGridRowById', rowid);
				if(ind) {
					try {
						ret = $.unformat.call($t,$("td:eq("+pos+")",ind),{rowId:ind.id, colModel:$t.p.colModel[pos]},pos);
					} catch (e){
						ret = $.jgrid.htmlDecode($("td:eq("+pos+")",ind).html());
					}
				}
			}
		});
		return ret;
	},
	getCol : function (col, obj, mathopr) {
		var ret = [], val, sum=0, min, max, v;
		obj = typeof obj !== 'boolean' ? false : obj;
		if(mathopr === undefined) { mathopr = false; }
		this.each(function(){
			var $t=this, pos=-1;
			if(!$t.grid) {return;}
			if(isNaN(col)) {
				$($t.p.colModel).each(function(i){
					if (this.name === col) {
						pos = i;return false;
					}
				});
			} else {pos = parseInt(col,10);}
			if(pos>=0) {
				var ln = $t.rows.length, i =0, dlen=0;
				if (ln && ln>0){
					while(i<ln){
						if($($t.rows[i]).hasClass('jqgrow')) {
							try {
								val = $.unformat.call($t,$($t.rows[i].cells[pos]),{rowId:$t.rows[i].id, colModel:$t.p.colModel[pos]},pos);
							} catch (e) {
								val = $.jgrid.htmlDecode($t.rows[i].cells[pos].innerHTML);
							}
							if(mathopr) {
								v = parseFloat(val);
								if(!isNaN(v)) {
									sum += v;
									if (max === undefined) {max = min = v;}
									min = Math.min(min, v);
									max = Math.max(max, v);
									dlen++;
								}
							}
							else if(obj) { ret.push( {id:$t.rows[i].id,value:val} ); }
							else { ret.push( val ); }
						}
						i++;
					}
					if(mathopr) {
						switch(mathopr.toLowerCase()){
							case 'sum': ret =sum; break;
							case 'avg': ret = sum/dlen; break;
							case 'count': ret = (ln-1); break;
							case 'min': ret = min; break;
							case 'max': ret = max; break;
						}
					}
				}
			}
		});
		return ret;
	},
	clearGridData : function(clearfooter) {
		return this.each(function(){
			var $t = this;
			if(!$t.grid) {return;}
			if(typeof clearfooter !== 'boolean') { clearfooter = false; }
			if($t.p.deepempty) {$("#"+$.jgrid.jqID($t.p.id)+" tbody:first tr:gt(0)").remove();}
			else {
				var trf = $("#"+$.jgrid.jqID($t.p.id)+" tbody:first tr:first")[0];
				$("#"+$.jgrid.jqID($t.p.id)+" tbody:first").empty().append(trf);
			}
			if($t.p.footerrow && clearfooter) { $(".ui-jqgrid-ftable td",$t.grid.sDiv).html("&#160;"); }
			$t.p.selrow = null; $t.p.selarrrow= []; $t.p.savedRow = [];
			$t.p.records = 0;$t.p.page=1;$t.p.lastpage=0;$t.p.reccount=0;
			$t.p.data = []; $t.p._index = {};
			$t.updatepager(true,false);
		});
	},
	getInd : function(rowid,rc){
		var ret =false,rw;
		this.each(function(){
			rw = $(this).jqGrid('getGridRowById', rowid);
			if(rw) {
				ret = rc===true ? rw: rw.rowIndex;
			}
		});
		return ret;
	},
	bindKeys : function( settings ){
		var o = $.extend({
			onEnter: null,
			onSpace: null,
			onLeftKey: null,
			onRightKey: null,
			scrollingRows : true
		},settings || {});
		return this.each(function(){
			var $t = this;
			if( !$('body').is('[role]') ){$('body').attr('role','application');}
			$t.p.scrollrows = o.scrollingRows;
			$($t).keydown(function(event){
				var target = $($t).find('tr[tabindex=0]')[0], id, r, mind,
				expanded = $t.p.treeReader.expanded_field;
				//check for arrow keys
				if(target) {
					mind = $t.p._index[$.jgrid.stripPref($t.p.idPrefix, target.id)];
					if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){
						// up key
						if(event.keyCode === 38 ){
							r = target.previousSibling;
							id = "";
							if(r) {
								if($(r).is(":hidden")) {
									while(r) {
										r = r.previousSibling;
										if(!$(r).is(":hidden") && $(r).hasClass('jqgrow')) {id = r.id;break;}
									}
								} else {
									id = r.id;
								}
							}
							$($t).jqGrid('setSelection', id, true, event);
							event.preventDefault();
						}
						//if key is down arrow
						if(event.keyCode === 40){
							r = target.nextSibling;
							id ="";
							if(r) {
								if($(r).is(":hidden")) {
									while(r) {
										r = r.nextSibling;
										if(!$(r).is(":hidden") && $(r).hasClass('jqgrow') ) {id = r.id;break;}
									}
								} else {
									id = r.id;
								}
							}
							$($t).jqGrid('setSelection', id, true, event);
							event.preventDefault();
						}
						// left
						if(event.keyCode === 37 ){
							if($t.p.treeGrid && $t.p.data[mind][expanded]) {
								$(target).find("div.treeclick").trigger('click');
							}
							$($t).triggerHandler("jqGridKeyLeft", [$t.p.selrow]);
							if($.isFunction(o.onLeftKey)) {
								o.onLeftKey.call($t, $t.p.selrow);
							}
						}
						// right
						if(event.keyCode === 39 ){
							if($t.p.treeGrid && !$t.p.data[mind][expanded]) {
								$(target).find("div.treeclick").trigger('click');
							}
							$($t).triggerHandler("jqGridKeyRight", [$t.p.selrow]);
							if($.isFunction(o.onRightKey)) {
								o.onRightKey.call($t, $t.p.selrow);
							}
						}
					}
					//check if enter was pressed on a grid or treegrid node
					else if( event.keyCode === 13 ){
						$($t).triggerHandler("jqGridKeyEnter", [$t.p.selrow]);
						if($.isFunction(o.onEnter)) {
							o.onEnter.call($t, $t.p.selrow);
						}
					} else if(event.keyCode === 32) {
						$($t).triggerHandler("jqGridKeySpace", [$t.p.selrow]);
						if($.isFunction(o.onSpace)) {
							o.onSpace.call($t, $t.p.selrow);
						}
					}
				}
			});
		});
	},
	unbindKeys : function(){
		return this.each(function(){
			$(this).unbind('keydown');
		});
	},
	getLocalRow : function (rowid) {
		var ret = false, ind;
		this.each(function(){
			if(rowid !== undefined) {
				ind = this.p._index[$.jgrid.stripPref(this.p.idPrefix, rowid)];
				if(ind >= 0 ) {
					ret = this.p.data[ind];
				}
			}
		});
		return ret;
	}
});
})(jQuery);
/*jshint eqeqeq:false */
/*global jQuery */
(function($){
/**
 * jqGrid extension for custom methods
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * 
 * Wildraid wildraid@mail.ru
 * Oleg Kiriljuk oleg.kiriljuk@ok-soft-gmbh.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
**/
"use strict";
$.jgrid.extend({
	getColProp : function(colname){
		var ret ={}, $t = this[0];
		if ( !$t.grid ) { return false; }
		var cM = $t.p.colModel, i;
		for ( i=0;i<cM.length;i++ ) {
			if ( cM[i].name === colname ) {
				ret = cM[i];
				break;
			}
		}
		return ret;
	},
	setColProp : function(colname, obj){
		//do not set width will not work
		return this.each(function(){
			if ( this.grid ) {
				if ( obj ) {
					var cM = this.p.colModel, i;
					for ( i=0;i<cM.length;i++ ) {
						if ( cM[i].name === colname ) {
							$.extend(true, this.p.colModel[i],obj);
							break;
						}
					}
				}
			}
		});
	},
	sortGrid : function(colname,reload, sor){
		return this.each(function(){
			var $t=this,idx=-1,i, sobj=false;
			if ( !$t.grid ) { return;}
			if ( !colname ) { colname = $t.p.sortname; }
			for ( i=0;i<$t.p.colModel.length;i++ ) {
				if ( $t.p.colModel[i].index === colname || $t.p.colModel[i].name === colname ) {
					idx = i;
					if($t.p.frozenColumns === true && $t.p.colModel[i].frozen === true) {
						sobj = $t.grid.fhDiv.find("#" + $t.p.id + "_" + colname);
					}
					break;
				}
			}
			if ( idx !== -1 ){
				var sort = $t.p.colModel[idx].sortable;
				if(!sobj) {
					sobj = $t.grid.headers[idx].el;
				}
				if ( typeof sort !== 'boolean' ) { sort =  true; }
				if ( typeof reload !=='boolean' ) { reload = false; }
				if ( sort ) { $t.sortData("jqgh_"+$t.p.id+"_" + colname, idx, reload, sor, sobj); }
			}
		});
	},
	clearBeforeUnload : function () {
		return this.each(function(){
			var grid = this.grid;
			if ($.isFunction(grid.emptyRows)) {
				grid.emptyRows.call(this, true, true); // this work quick enough and reduce the size of memory leaks if we have someone
			}

			$(document).unbind("mouseup.jqGrid" + this.p.id ); 
			$(grid.hDiv).unbind("mousemove"); // TODO add namespace
			$(this).unbind();

			grid.dragEnd = null;
			grid.dragMove = null;
			grid.dragStart = null;
			grid.emptyRows = null;
			grid.populate = null;
			grid.populateVisible = null;
			grid.scrollGrid = null;
			grid.selectionPreserver = null;

			grid.bDiv = null;
			grid.cDiv = null;
			grid.hDiv = null;
			grid.cols = null;
			var i, l = grid.headers.length;
			for (i = 0; i < l; i++) {
				grid.headers[i].el = null;
			}

			this.formatCol = null;
			this.sortData = null;
			this.updatepager = null;
			this.refreshIndex = null;
			this.setHeadCheckBox = null;
			this.constructTr = null;
			this.formatter = null;
			this.addXmlData = null;
			this.addJSONData = null;
			this.grid = null;
		});
	},
	GridDestroy : function () {
		return this.each(function(){
			if ( this.grid ) { 
				if ( this.p.pager ) { // if not part of grid
					$(this.p.pager).remove();
				}
				try {
					$(this).jqGrid('clearBeforeUnload');
					$("#gbox_"+$.jgrid.jqID(this.id)).remove();
				} catch (_) {}
			}
		});
	},
	GridUnload : function(){
		return this.each(function(){
			if ( !this.grid ) {return;}
			var defgrid = {id: $(this).attr('id'),cl: $(this).attr('class')};
			if (this.p.pager) {
				$(this.p.pager).empty().removeClass("ui-state-default ui-jqgrid-pager ui-corner-bottom");
			}
			var newtable = document.createElement('table');
			$(newtable).attr({id:defgrid.id});
			newtable.className = defgrid.cl;
			var gid = $.jgrid.jqID(this.id);
			$(newtable).removeClass("ui-jqgrid-btable");
			if( $(this.p.pager).parents("#gbox_"+gid).length === 1 ) {
				$(newtable).insertBefore("#gbox_"+gid).show();
				$(this.p.pager).insertBefore("#gbox_"+gid);
			} else {
				$(newtable).insertBefore("#gbox_"+gid).show();
			}
			$(this).jqGrid('clearBeforeUnload');
			$("#gbox_"+gid).remove();
		});
	},
	setGridState : function(state) {
		return this.each(function(){
			if ( !this.grid ) {return;}
			var $t = this;
			if(state === 'hidden'){
				$(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+$.jgrid.jqID($t.p.id)).slideUp("fast");
				if($t.p.pager) {$($t.p.pager).slideUp("fast");}
				if($t.p.toppager) {$($t.p.toppager).slideUp("fast");}
				if($t.p.toolbar[0]===true) {
					if( $t.p.toolbar[1] === 'both') {
						$($t.grid.ubDiv).slideUp("fast");
					}
					$($t.grid.uDiv).slideUp("fast");
				}
				if($t.p.footerrow) { $(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID($t.p.id)).slideUp("fast"); }
				$(".ui-jqgrid-titlebar-close span",$t.grid.cDiv).removeClass("ui-icon-circle-triangle-n").addClass("ui-icon-circle-triangle-s");
				$t.p.gridstate = 'hidden';
			} else if(state === 'visible') {
				$(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID($t.p.id)).slideDown("fast");
				if($t.p.pager) {$($t.p.pager).slideDown("fast");}
				if($t.p.toppager) {$($t.p.toppager).slideDown("fast");}
				if($t.p.toolbar[0]===true) {
					if( $t.p.toolbar[1] === 'both') {
						$($t.grid.ubDiv).slideDown("fast");
					}
					$($t.grid.uDiv).slideDown("fast");
				}
				if($t.p.footerrow) { $(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID($t.p.id)).slideDown("fast"); }
				$(".ui-jqgrid-titlebar-close span",$t.grid.cDiv).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-n");
				$t.p.gridstate = 'visible';
			}

		});
	},
	filterToolbar : function(p){
		p = $.extend({
			autosearch: true,
			searchOnEnter : true,
			beforeSearch: null,
			afterSearch: null,
			beforeClear: null,
			afterClear: null,
			searchurl : '',
			stringResult: false,
			groupOp: 'AND',
			defaultSearch : "bw",
			searchOperators : false,
			resetIcon : "x",
			operands : { "eq" :"==", "ne":"!","lt":"<","le":"<=","gt":">","ge":">=","bw":"^","bn":"!^","in":"=","ni":"!=","ew":"|","en":"!@","cn":"~","nc":"!~","nu":"#","nn":"!#"}
		}, $.jgrid.search , p  || {});
		return this.each(function(){
			var $t = this;
			if(this.ftoolbar) { return; }
			var triggerToolbar = function() {
				var sdata={}, j=0, v, nm, sopt={},so;
				$.each($t.p.colModel,function(){
					var $elem = $("#gs_"+$.jgrid.jqID(this.name), (this.frozen===true && $t.p.frozenColumns === true) ?  $t.grid.fhDiv : $t.grid.hDiv);
					nm = this.index || this.name;
					if(p.searchOperators ) {
						so = $elem.parent().prev().children("a").attr("soper") || p.defaultSearch;
					} else {
						so  = (this.searchoptions && this.searchoptions.sopt) ? this.searchoptions.sopt[0] : this.stype==='select'?  'eq' : p.defaultSearch;
					}
					v = this.stype === "custom" && $.isFunction(this.searchoptions.custom_value) && $elem.length > 0 && $elem[0].nodeName.toUpperCase() === "SPAN" ?
						this.searchoptions.custom_value.call($t, $elem.children(".customelement:first"), "get") :
						$elem.val();
					if(v || so==="nu" || so==="nn") {
						sdata[nm] = v;
						sopt[nm] = so;
						j++;
					} else {
						try {
							delete $t.p.postData[nm];
						} catch (z) {}
					}
				});
				var sd =  j>0 ? true : false;
				if(p.stringResult === true || $t.p.datatype === "local") {
					var ruleGroup = "{\"groupOp\":\"" + p.groupOp + "\",\"rules\":[";
					var gi=0;
					$.each(sdata,function(i,n){
						if (gi > 0) {ruleGroup += ",";}
						ruleGroup += "{\"field\":\"" + i + "\",";
						ruleGroup += "\"op\":\"" + sopt[i] + "\",";
						n+="";
						ruleGroup += "\"data\":\"" + n.replace(/\\/g,'\\\\').replace(/\"/g,'\\"') + "\"}";
						gi++;
					});
					ruleGroup += "]}";
					$.extend($t.p.postData,{filters:ruleGroup});
					$.each(['searchField', 'searchString', 'searchOper'], function(i, n){
						if($t.p.postData.hasOwnProperty(n)) { delete $t.p.postData[n];}
					});
				} else {
					$.extend($t.p.postData,sdata);
				}
				var saveurl;
				if($t.p.searchurl) {
					saveurl = $t.p.url;
					$($t).jqGrid("setGridParam",{url:$t.p.searchurl});
				}
				var bsr = $($t).triggerHandler("jqGridToolbarBeforeSearch") === 'stop' ? true : false;
				if(!bsr && $.isFunction(p.beforeSearch)){bsr = p.beforeSearch.call($t);}
				if(!bsr) { $($t).jqGrid("setGridParam",{search:sd}).trigger("reloadGrid",[{page:1}]); }
				if(saveurl) {$($t).jqGrid("setGridParam",{url:saveurl});}
				$($t).triggerHandler("jqGridToolbarAfterSearch");
				if($.isFunction(p.afterSearch)){p.afterSearch.call($t);}
			},
			clearToolbar = function(trigger){
				var sdata={}, j=0, nm;
				trigger = (typeof trigger !== 'boolean') ? true : trigger;
				$.each($t.p.colModel,function(){
					var v = "", $elem = $("#gs_"+$.jgrid.jqID(this.name),(this.frozen===true && $t.p.frozenColumns === true) ?  $t.grid.fhDiv : $t.grid.hDiv);
					if(this.searchoptions && this.searchoptions.defaultValue !== undefined) { v = this.searchoptions.defaultValue; }
					nm = this.index || this.name;
					switch (this.stype) {
						case 'select' :
							if ($elem[0].multiple) {
								$elem.find("option").each(function () {
									this.selected = false;
								});
							} else {
								$elem.find("option").each(function (i){
									if (i===0) { this.selected = true; } // ??? it's better probably to select the option with value=""?
									if ($(this).val() === v) {
										this.selected = true;
										return false;
									}
								});
							}
							if ( v !== undefined ) {
								// post the key and not the text
								sdata[nm] = v;
								j++;
							} else {
								try {
									delete $t.p.postData[nm];
								} catch(e) {}
							}
							break;
						case 'text':
							$elem.val(v || "");
							if(v !== undefined) {
								sdata[nm] = v;
								j++;
							} else {
								try {
									delete $t.p.postData[nm];
								} catch (y){}
							}
							break;
						case 'custom':
							if ($.isFunction(this.searchoptions.custom_value) && $elem.length > 0 && $elem[0].nodeName.toUpperCase() === "SPAN") {
								this.searchoptions.custom_value.call($t, $elem.children(".customelement:first"), "set", v || "");
							}
							break;
					}
				});
				var sd =  j>0 ? true : false;
				$t.p.resetsearch =  true;
				if(p.stringResult === true || $t.p.datatype === "local") {
					var ruleGroup = "{\"groupOp\":\"" + p.groupOp + "\",\"rules\":[";
					var gi=0;
					$.each(sdata,function(i,n){
						if (gi > 0) {ruleGroup += ",";}
						ruleGroup += "{\"field\":\"" + i + "\",";
						ruleGroup += "\"op\":\"" + "eq" + "\",";
						n+="";
						ruleGroup += "\"data\":\"" + n.replace(/\\/g,'\\\\').replace(/\"/g,'\\"') + "\"}";
						gi++;
					});
					ruleGroup += "]}";
					$.extend($t.p.postData,{filters:ruleGroup});
					$.each(['searchField', 'searchString', 'searchOper'], function(i, n){
						if($t.p.postData.hasOwnProperty(n)) { delete $t.p.postData[n];}
					});
				} else {
					$.extend($t.p.postData,sdata);
				}
				var saveurl;
				if($t.p.searchurl) {
					saveurl = $t.p.url;
					$($t).jqGrid("setGridParam",{url:$t.p.searchurl});
				}
				var bcv = $($t).triggerHandler("jqGridToolbarBeforeClear") === 'stop' ? true : false;
				if(!bcv && $.isFunction(p.beforeClear)){bcv = p.beforeClear.call($t);}
				if(!bcv) {
					if(trigger) {
						$($t).jqGrid("setGridParam",{search:sd}).trigger("reloadGrid",[{page:1}]);
					}
				}
				if(saveurl) {$($t).jqGrid("setGridParam",{url:saveurl});}
				$($t).triggerHandler("jqGridToolbarAfterClear");
				if($.isFunction(p.afterClear)){p.afterClear();}
			},
			toggleToolbar = function(){
				var trow = $("tr.ui-search-toolbar",$t.grid.hDiv),
				trow2 = $t.p.frozenColumns === true ?  $("tr.ui-search-toolbar",$t.grid.fhDiv) : false;
				if(trow.css("display") === 'none') {
					trow.show(); 
					if(trow2) {
						trow2.show();
					}
				} else { 
					trow.hide(); 
					if(trow2) {
						trow2.hide();
					}
				}
			},
			buildRuleMenu = function( elem, left, top ){
				$("#sopt_menu").remove();

				left=parseInt(left,10);
				top=parseInt(top,10) + 18;

				var fs =  $('.ui-jqgrid-view').css('font-size') || '11px';
				var str = '<ul id="sopt_menu" class="ui-search-menu" role="menu" tabindex="0" style="font-size:'+fs+';left:'+left+'px;top:'+top+'px;">',
				selected = $(elem).attr("soper"), selclass,
				aoprs = [], ina;
				var i=0, nm =$(elem).attr("colname"),len = $t.p.colModel.length;
				while(i<len) {
					if($t.p.colModel[i].name === nm) {
						break;
					}
					i++;
				}
				var cm = $t.p.colModel[i], options = $.extend({}, cm.searchoptions);
				if(!options.sopt) {
					options.sopt = [];
					options.sopt[0]= cm.stype==='select' ?  'eq' : p.defaultSearch;
				}
				$.each(p.odata, function() { aoprs.push(this.oper); });
				for ( i = 0 ; i < options.sopt.length; i++) {
					ina = $.inArray(options.sopt[i],aoprs);
					if(ina !== -1) {
						selclass = selected === p.odata[ina].oper ? "ui-state-highlight" : "";
						str += '<li class="ui-menu-item '+selclass+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+p.odata[ina].oper+'" oper="'+p.operands[p.odata[ina].oper]+'"><table cellspacing="0" cellpadding="0" border="0"><tr><td width="25px">'+p.operands[p.odata[ina].oper]+'</td><td>'+ p.odata[ina].text+'</td></tr></table></a></li>';
					}
				}
				str += "</ul>";
				$('body').append(str);
				$("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all");
				$("#sopt_menu > li > a").hover(
					function(){ $(this).addClass("ui-state-hover"); },
					function(){ $(this).removeClass("ui-state-hover"); }
				).click(function( e ){
					var v = $(this).attr("value"),
					oper = $(this).attr("oper");
					$($t).triggerHandler("jqGridToolbarSelectOper", [v, oper, elem]);
					$("#sopt_menu").hide();
					$(elem).text(oper).attr("soper",v);
					if(p.autosearch===true){
						var inpelm = $(elem).parent().next().children()[0];
						if( $(inpelm).val() || v==="nu" || v ==="nn") {
							triggerToolbar();
						}
					}
				});
			};
			// create the row
			var tr = $("<tr class='ui-search-toolbar' role='rowheader'></tr>");
			var timeoutHnd;
			$.each($t.p.colModel,function(ci){
				var cm=this, soptions, surl, self, select = "", sot="=", so, i,
				th = $("<th role='columnheader' class='ui-state-default ui-th-column ui-th-"+$t.p.direction+"'></th>"),
				thd = $("<div style='position:relative;height:100%;padding-right:0.3em;padding-left:0.3em;'></div>"),
				stbl = $("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear'></td></tr></table>");
				if(this.hidden===true) { $(th).css("display","none");}
				this.search = this.search === false ? false : true;
				if(this.stype === undefined) {this.stype='text';}
				soptions = $.extend({},this.searchoptions || {});
				if(this.search){
					if(p.searchOperators) {
						so  = (soptions.sopt) ? soptions.sopt[0] : cm.stype==='select' ?  'eq' : p.defaultSearch;
						for(i = 0;i<p.odata.length;i++) {
							if(p.odata[i].oper === so) {
								sot = p.operands[so] || "";
								break;
							}
						}
						var st = soptions.searchtitle != null ? soptions.searchtitle : p.operandTitle;
						select = "<a title='"+st+"' style='padding-right: 0.5em;' soper='"+so+"' class='soptclass' colname='"+this.name+"'>"+sot+"</a>";
					}
					$("td:eq(0)",stbl).attr("colindex",ci).append(select);
					if(soptions.clearSearch === undefined) {
						soptions.clearSearch = true;
					}
					if(soptions.clearSearch) {
						var csv = p.resetTitle || 'Clear Search Value';
						$("td:eq(2)",stbl).append("<a title='"+csv+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+p.resetIcon+"</a>");
					} else {
						$("td:eq(2)", stbl).hide();
					}
					switch (this.stype)
					{
					case "select":
						surl = this.surl || soptions.dataUrl;
						if(surl) {
							// data returned should have already constructed html select
							// primitive jQuery load
							self = thd;
							$(self).append(stbl);
							$.ajax($.extend({
								url: surl,
								dataType: "html",
								success: function(res) {
									if(soptions.buildSelect !== undefined) {
										var d = soptions.buildSelect(res);
										if (d) {
											$("td:eq(1)",stbl).append(d);
										}
									} else {
										$("td:eq(1)",stbl).append(res);
									}
									if(soptions.defaultValue !== undefined) { $("select",self).val(soptions.defaultValue); }
									$("select",self).attr({name:cm.index || cm.name, id: "gs_"+cm.name});
									if(soptions.attr) {$("select",self).attr(soptions.attr);}
									$("select",self).css({width: "100%"});
									// preserve autoserch
									$.jgrid.bindEv.call($t, $("select",self)[0], soptions);
									if(p.autosearch===true){
										$("select",self).change(function(){
											triggerToolbar();
											return false;
										});
									}
									res=null;
								}
							}, $.jgrid.ajaxOptions, $t.p.ajaxSelectOptions || {} ));
						} else {
							var oSv, sep, delim;
							if(cm.searchoptions) {
								oSv = cm.searchoptions.value === undefined ? "" : cm.searchoptions.value;
								sep = cm.searchoptions.separator === undefined ? ":" : cm.searchoptions.separator;
								delim = cm.searchoptions.delimiter === undefined ? ";" : cm.searchoptions.delimiter;
							} else if(cm.editoptions) {
								oSv = cm.editoptions.value === undefined ? "" : cm.editoptions.value;
								sep = cm.editoptions.separator === undefined ? ":" : cm.editoptions.separator;
								delim = cm.editoptions.delimiter === undefined ? ";" : cm.editoptions.delimiter;
							}
							if (oSv) {	
								var elem = document.createElement("select");
								elem.style.width = "100%";
								$(elem).attr({name:cm.index || cm.name, id: "gs_"+cm.name});
								var sv, ov, key, k;
								if(typeof oSv === "string") {
									so = oSv.split(delim);
									for(k=0; k<so.length;k++){
										sv = so[k].split(sep);
										ov = document.createElement("option");
										ov.value = sv[0]; ov.innerHTML = sv[1];
										elem.appendChild(ov);
									}
								} else if(typeof oSv === "object" ) {
									for (key in oSv) {
										if(oSv.hasOwnProperty(key)) {
											ov = document.createElement("option");
											ov.value = key; ov.innerHTML = oSv[key];
											elem.appendChild(ov);
										}
									}
								}
								if(soptions.defaultValue !== undefined) { $(elem).val(soptions.defaultValue); }
								if(soptions.attr) {$(elem).attr(soptions.attr);}
								$(thd).append(stbl);
								$.jgrid.bindEv.call($t, elem , soptions);
								$("td:eq(1)",stbl).append( elem );
								if(p.autosearch===true){
									$(elem).change(function(){
										triggerToolbar();
										return false;
									});
								}
							}
						}
						break;
					case "text":
						var df = soptions.defaultValue !== undefined ? soptions.defaultValue: "";

						$("td:eq(1)",stbl).append("<input type='text' style='width:100%;padding:0px;' name='"+(cm.index || cm.name)+"' id='gs_"+cm.name+"' value='"+df+"'/>");
						$(thd).append(stbl);

						if(soptions.attr) {$("input",thd).attr(soptions.attr);}
						$.jgrid.bindEv.call($t, $("input",thd)[0], soptions);
						if(p.autosearch===true){
							if(p.searchOnEnter) {
								$("input",thd).keypress(function(e){
									var key = e.charCode || e.keyCode || 0;
									if(key === 13){
										triggerToolbar();
										return false;
									}
									return this;
								});
							} else {
								$("input",thd).keydown(function(e){
									var key = e.which;
									switch (key) {
										case 13:
											return false;
										case 9 :
										case 16:
										case 37:
										case 38:
										case 39:
										case 40:
										case 27:
											break;
										default :
											if(timeoutHnd) { clearTimeout(timeoutHnd); }
											timeoutHnd = setTimeout(function(){triggerToolbar();},500);
									}
								});
							}
						}
						break;
					case "custom":
						$("td:eq(1)",stbl).append("<span style='width:95%;padding:0px;' name='"+(cm.index || cm.name)+"' id='gs_"+cm.name+"'/>");
						$(thd).append(stbl);
						try {
							if($.isFunction(soptions.custom_element)) {
								var celm = soptions.custom_element.call($t,soptions.defaultValue !== undefined ? soptions.defaultValue: "",soptions);
								if(celm) {
									celm = $(celm).addClass("customelement");
									$(thd).find(">span").append(celm);
								} else {
									throw "e2";
								}
							} else {
								throw "e1";
							}
						} catch (e) {
							if (e === "e1") { $.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_element' "+$.jgrid.edit.msg.nodefined,$.jgrid.edit.bClose);}
							if (e === "e2") { $.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_element' "+$.jgrid.edit.msg.novalue,$.jgrid.edit.bClose);}
							else { $.jgrid.info_dialog($.jgrid.errors.errcap,typeof e==="string"?e:e.message,$.jgrid.edit.bClose); }
						}
						break;
					}
				}
				$(th).append(thd);
				$(tr).append(th);
				if(!p.searchOperators) {
					$("td:eq(0)",stbl).hide();
				}
			});
			$("table thead",$t.grid.hDiv).append(tr);
			if(p.searchOperators) {
				$(".soptclass",tr).click(function(e){
					var offset = $(this).offset(),
					left = ( offset.left ),
					top = ( offset.top);
					buildRuleMenu(this, left, top );
					e.stopPropagation();
				});
				$("body").on('click', function(e){
					if(e.target.className !== "soptclass") {
						$("#sopt_menu").hide();
					}
				});
			}
			$(".clearsearchclass",tr).click(function(e){
				var ptr = $(this).parents("tr:first"),
				coli = parseInt($("td.ui-search-oper", ptr).attr('colindex'),10),
				sval  = $.extend({},$t.p.colModel[coli].searchoptions || {}),
				dval = sval.defaultValue ? sval.defaultValue : "";
				if($t.p.colModel[coli].stype === "select") {
					if(dval) {
						$("td.ui-search-input select", ptr).val( dval );
					} else {
						$("td.ui-search-input select", ptr)[0].selectedIndex = 0;
					}
				} else {
					$("td.ui-search-input input", ptr).val( dval );
				}
				// ToDo custom search type
				if(p.autosearch===true){
					triggerToolbar();
				}

			});
			this.ftoolbar = true;
			this.triggerToolbar = triggerToolbar;
			this.clearToolbar = clearToolbar;
			this.toggleToolbar = toggleToolbar;
		});
	},
	destroyFilterToolbar: function () {
		return this.each(function () {
			if (!this.ftoolbar) {
				return;
			}
			this.triggerToolbar = null;
			this.clearToolbar = null;
			this.toggleToolbar = null;
			this.ftoolbar = false;
			$(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove();
		});
	},
	destroyGroupHeader : function(nullHeader)
	{
		if(nullHeader === undefined) {
			nullHeader = true;
		}
		return this.each(function()
		{
			var $t = this, $tr, i, l, headers, $th, $resizing, grid = $t.grid,
			thead = $("table.ui-jqgrid-htable thead", grid.hDiv), cm = $t.p.colModel, hc;
			if(!grid) { return; }

			$(this).unbind('.setGroupHeaders');
			$tr = $("<tr>", {role: "rowheader"}).addClass("ui-jqgrid-labels");
			headers = grid.headers;
			for (i = 0, l = headers.length; i < l; i++) {
				hc = cm[i].hidden ? "none" : "";
				$th = $(headers[i].el)
					.width(headers[i].width)
					.css('display',hc);
				try {
					$th.removeAttr("rowSpan");
				} catch (rs) {
					//IE 6/7
					$th.attr("rowSpan",1);
				}
				$tr.append($th);
				$resizing = $th.children("span.ui-jqgrid-resize");
				if ($resizing.length>0) {// resizable column
					$resizing[0].style.height = "";
				}
				$th.children("div")[0].style.top = "";
			}
			$(thead).children('tr.ui-jqgrid-labels').remove();
			$(thead).prepend($tr);

			if(nullHeader === true) {
				$($t).jqGrid('setGridParam',{ 'groupHeader': null});
			}
		});
	},
	setGroupHeaders : function ( o ) {
		o = $.extend({
			useColSpanStyle :  false,
			groupHeaders: []
		},o  || {});
		return this.each(function(){
			this.p.groupHeader = o;
			var ts = this,
			i, cmi, skip = 0, $tr, $colHeader, th, $th, thStyle,
			iCol,
			cghi,
			//startColumnName,
			numberOfColumns,
			titleText,
			cVisibleColumns,
			colModel = ts.p.colModel,
			cml = colModel.length,
			ths = ts.grid.headers,
			$htable = $("table.ui-jqgrid-htable", ts.grid.hDiv),
			$trLabels = $htable.children("thead").children("tr.ui-jqgrid-labels:last").addClass("jqg-second-row-header"),
			$thead = $htable.children("thead"),
			$theadInTable,
			$firstHeaderRow = $htable.find(".jqg-first-row-header");
			if($firstHeaderRow[0] === undefined) {
				$firstHeaderRow = $('<tr>', {role: "row", "aria-hidden": "true"}).addClass("jqg-first-row-header").css("height", "auto");
			} else {
				$firstHeaderRow.empty();
			}
			var $firstRow,
			inColumnHeader = function (text, columnHeaders) {
				var length = columnHeaders.length, i;
				for (i = 0; i < length; i++) {
					if (columnHeaders[i].startColumnName === text) {
						return i;
					}
				}
				return -1;
			};

			$(ts).prepend($thead);
			$tr = $('<tr>', {role: "rowheader"}).addClass("ui-jqgrid-labels jqg-third-row-header");
			for (i = 0; i < cml; i++) {
				th = ths[i].el;
				$th = $(th);
				cmi = colModel[i];
				// build the next cell for the first header row
				thStyle = { height: '0px', width: ths[i].width + 'px', display: (cmi.hidden ? 'none' : '')};
				$("<th>", {role: 'gridcell'}).css(thStyle).addClass("ui-first-th-"+ts.p.direction).appendTo($firstHeaderRow);

				th.style.width = ""; // remove unneeded style
				iCol = inColumnHeader(cmi.name, o.groupHeaders);
				if (iCol >= 0) {
					cghi = o.groupHeaders[iCol];
					numberOfColumns = cghi.numberOfColumns;
					titleText = cghi.titleText;

					// caclulate the number of visible columns from the next numberOfColumns columns
					for (cVisibleColumns = 0, iCol = 0; iCol < numberOfColumns && (i + iCol < cml); iCol++) {
						if (!colModel[i + iCol].hidden) {
							cVisibleColumns++;
						}
					}

					// The next numberOfColumns headers will be moved in the next row
					// in the current row will be placed the new column header with the titleText.
					// The text will be over the cVisibleColumns columns
					$colHeader = $('<th>').attr({role: "columnheader"})
						.addClass("ui-state-default ui-th-column-header ui-th-"+ts.p.direction)
						.css({'height':'22px', 'border-top': '0 none'})
						.html(titleText);
					if(cVisibleColumns > 0) {
						$colHeader.attr("colspan", String(cVisibleColumns));
					}
					if (ts.p.headertitles) {
						$colHeader.attr("title", $colHeader.text());
					}
					// hide if not a visible cols
					if( cVisibleColumns === 0) {
						$colHeader.hide();
					}

					$th.before($colHeader); // insert new column header before the current
					$tr.append(th);         // move the current header in the next row

					// set the coumter of headers which will be moved in the next row
					skip = numberOfColumns - 1;
				} else {
					if (skip === 0) {
						if (o.useColSpanStyle) {
							// expand the header height to two rows
							$th.attr("rowspan", "2");
						} else {
							$('<th>', {role: "columnheader"})
								.addClass("ui-state-default ui-th-column-header ui-th-"+ts.p.direction)
								.css({"display": cmi.hidden ? 'none' : '', 'border-top': '0 none'})
								.insertBefore($th);
							$tr.append(th);
						}
					} else {
						// move the header to the next row
						//$th.css({"padding-top": "2px", height: "19px"});
						$tr.append(th);
						skip--;
					}
				}
			}
			$theadInTable = $(ts).children("thead");
			$theadInTable.prepend($firstHeaderRow);
			$tr.insertAfter($trLabels);
			$htable.append($theadInTable);

			if (o.useColSpanStyle) {
				// Increase the height of resizing span of visible headers
				$htable.find("span.ui-jqgrid-resize").each(function () {
					var $parent = $(this).parent();
					if ($parent.is(":visible")) {
						this.style.cssText = 'height: ' + $parent.height() + 'px !important; cursor: col-resize;';
					}
				});

				// Set position of the sortable div (the main lable)
				// with the column header text to the middle of the cell.
				// One should not do this for hidden headers.
				$htable.find("div.ui-jqgrid-sortable").each(function () {
					var $ts = $(this), $parent = $ts.parent();
					if ($parent.is(":visible") && $parent.is(":has(span.ui-jqgrid-resize)")) {
						$ts.css('top', ($parent.height() - $ts.outerHeight()) / 2 + 'px');
					}
				});
			}

			$firstRow = $theadInTable.find("tr.jqg-first-row-header");
			$(ts).bind('jqGridResizeStop.setGroupHeaders', function (e, nw, idx) {
				$firstRow.find('th').eq(idx).width(nw);
			});
		});				
	},
	setFrozenColumns : function () {
		return this.each(function() {
			if ( !this.grid ) {return;}
			var $t = this, cm = $t.p.colModel,i=0, len = cm.length, maxfrozen = -1, frozen= false;
			// TODO treeGrid and grouping  Support
			if($t.p.subGrid === true || $t.p.treeGrid === true || $t.p.cellEdit === true || $t.p.sortable || $t.p.scroll )
			{
				return;
			}
			if($t.p.rownumbers) { i++; }
			if($t.p.multiselect) { i++; }
			
			// get the max index of frozen col
			while(i<len)
			{
				// from left, no breaking frozen
				if(cm[i].frozen === true)
				{
					frozen = true;
					maxfrozen = i;
				} else {
					break;
				}
				i++;
			}
			if( maxfrozen>=0 && frozen) {
				var top = $t.p.caption ? $($t.grid.cDiv).outerHeight() : 0,
				hth = $(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID($t.p.id)).height();
				//headers
				if($t.p.toppager) {
					top = top + $($t.grid.topDiv).outerHeight();
				}
				if($t.p.toolbar[0] === true) {
					if($t.p.toolbar[1] !== "bottom") {
						top = top + $($t.grid.uDiv).outerHeight();
					}
				}
				$t.grid.fhDiv = $('<div style="position:absolute;left:0px;top:'+top+'px;height:'+hth+'px;" class="frozen-div ui-state-default ui-jqgrid-hdiv"></div>');
				$t.grid.fbDiv = $('<div style="position:absolute;left:0px;top:'+(parseInt(top,10)+parseInt(hth,10) + 1)+'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"></div>');
				$("#gview_"+$.jgrid.jqID($t.p.id)).append($t.grid.fhDiv);
				var htbl = $(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID($t.p.id)).clone(true);
				// groupheader support - only if useColSpanstyle is false
				if($t.p.groupHeader) {
					$("tr.jqg-first-row-header, tr.jqg-third-row-header", htbl).each(function(){
						$("th:gt("+maxfrozen+")",this).remove();
					});
					var swapfroz = -1, fdel = -1, cs, rs;
					$("tr.jqg-second-row-header th", htbl).each(function(){
						cs= parseInt($(this).attr("colspan"),10);
						rs= parseInt($(this).attr("rowspan"),10);
						if(rs) {
							swapfroz++;
							fdel++;
						}
						if(cs) {
							swapfroz = swapfroz+cs;
							fdel++;
						}
						if(swapfroz === maxfrozen) {
							return false;
						}
					});
					if(swapfroz !== maxfrozen) {
						fdel = maxfrozen;
					}
					$("tr.jqg-second-row-header", htbl).each(function(){
						$("th:gt("+fdel+")",this).remove();
					});
				} else {
					$("tr",htbl).each(function(){
						$("th:gt("+maxfrozen+")",this).remove();
					});
				}
				$(htbl).width(1);
				// resizing stuff
				$($t.grid.fhDiv).append(htbl)
				.mousemove(function (e) {
					if($t.grid.resizing){ $t.grid.dragMove(e);return false; }
				});
				$($t).bind('jqGridResizeStop.setFrozenColumns', function (e, w, index) {
					var rhth = $(".ui-jqgrid-htable",$t.grid.fhDiv);
					$("th:eq("+index+")",rhth).width( w ); 
					var btd = $(".ui-jqgrid-btable",$t.grid.fbDiv);
					$("tr:first td:eq("+index+")",btd).width( w ); 
				});
				// sorting stuff
				$($t).bind('jqGridSortCol.setFrozenColumns', function (e, index, idxcol) {

					var previousSelectedTh = $("tr.ui-jqgrid-labels:last th:eq("+$t.p.lastsort+")",$t.grid.fhDiv), newSelectedTh = $("tr.ui-jqgrid-labels:last th:eq("+idxcol+")",$t.grid.fhDiv);

					$("span.ui-grid-ico-sort",previousSelectedTh).addClass('ui-state-disabled');
					$(previousSelectedTh).attr("aria-selected","false");
					$("span.ui-icon-"+$t.p.sortorder,newSelectedTh).removeClass('ui-state-disabled');
					$(newSelectedTh).attr("aria-selected","true");
					if(!$t.p.viewsortcols[0]) {
						if($t.p.lastsort !== idxcol) {
							$("span.s-ico",previousSelectedTh).hide();
							$("span.s-ico",newSelectedTh).show();
						}
					}
				});
				
				// data stuff
				//TODO support for setRowData
				$("#gview_"+$.jgrid.jqID($t.p.id)).append($t.grid.fbDiv);
				$($t.grid.bDiv).scroll(function () {
					$($t.grid.fbDiv).scrollTop($(this).scrollTop());
				});
				if($t.p.hoverrows === true) {
					$("#"+$.jgrid.jqID($t.p.id)).unbind('mouseover').unbind('mouseout');
				}
				$($t).bind('jqGridAfterGridComplete.setFrozenColumns', function () {
					$("#"+$.jgrid.jqID($t.p.id)+"_frozen").remove();
					$($t.grid.fbDiv).height($($t.grid.bDiv).height()-16);
					var btbl = $("#"+$.jgrid.jqID($t.p.id)).clone(true);
					$("tr[role=row]",btbl).each(function(){
						$("td[role=gridcell]:gt("+maxfrozen+")",this).remove();
					});

					$(btbl).width(1).attr("id",$t.p.id+"_frozen");
					$($t.grid.fbDiv).append(btbl);
					if($t.p.hoverrows === true) {
						$("tr.jqgrow", btbl).hover(
							function(){ $(this).addClass("ui-state-hover"); $("#"+$.jgrid.jqID(this.id), "#"+$.jgrid.jqID($t.p.id)).addClass("ui-state-hover"); },
							function(){ $(this).removeClass("ui-state-hover"); $("#"+$.jgrid.jqID(this.id), "#"+$.jgrid.jqID($t.p.id)).removeClass("ui-state-hover"); }
						);
						$("tr.jqgrow", "#"+$.jgrid.jqID($t.p.id)).hover(
							function(){ $(this).addClass("ui-state-hover"); $("#"+$.jgrid.jqID(this.id), "#"+$.jgrid.jqID($t.p.id)+"_frozen").addClass("ui-state-hover");},
							function(){ $(this).removeClass("ui-state-hover"); $("#"+$.jgrid.jqID(this.id), "#"+$.jgrid.jqID($t.p.id)+"_frozen").removeClass("ui-state-hover"); }
						);
					}
					btbl=null;
				});
				if(!$t.grid.hDiv.loading) {
					$($t).triggerHandler("jqGridAfterGridComplete");
				}
				$t.p.frozenColumns = true;
			}
		});
	},
	destroyFrozenColumns :  function() {
		return this.each(function() {
			if ( !this.grid ) {return;}
			if(this.p.frozenColumns === true) {
				var $t = this;
				$($t.grid.fhDiv).remove();
				$($t.grid.fbDiv).remove();
				$t.grid.fhDiv = null; $t.grid.fbDiv=null;
				$(this).unbind('.setFrozenColumns');
				if($t.p.hoverrows === true) {
					var ptr;
					$("#"+$.jgrid.jqID($t.p.id)).bind('mouseover',function(e) {
						ptr = $(e.target).closest("tr.jqgrow");
						if($(ptr).attr("class") !== "ui-subgrid") {
						$(ptr).addClass("ui-state-hover");
					}
					}).bind('mouseout',function(e) {
						ptr = $(e.target).closest("tr.jqgrow");
						$(ptr).removeClass("ui-state-hover");
					});
				}
				this.p.frozenColumns = false;
			}
		});
	}
});
})(jQuery);
/*
 * jqModal - Minimalist Modaling with jQuery
 *   (http://dev.iceburg.net/jquery/jqmodal/)
 *
 * Copyright (c) 2007,2008 Brice Burgess <bhb@iceburg.net>
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * $Version: 07/06/2008 +r13
 */
(function($) {
$.fn.jqm=function(o){
var p={
overlay: 50,
closeoverlay : true,
overlayClass: 'jqmOverlay',
closeClass: 'jqmClose',
trigger: '.jqModal',
ajax: F,
ajaxText: '',
target: F,
modal: F,
toTop: F,
onShow: F,
onHide: F,
onLoad: F
};
return this.each(function(){if(this._jqm)return H[this._jqm].c=$.extend({},H[this._jqm].c,o);s++;this._jqm=s;
H[s]={c:$.extend(p,$.jqm.params,o),a:F,w:$(this).addClass('jqmID'+s),s:s};
if(p.trigger)$(this).jqmAddTrigger(p.trigger);
});};

$.fn.jqmAddClose=function(e){return hs(this,e,'jqmHide');};
$.fn.jqmAddTrigger=function(e){return hs(this,e,'jqmShow');};
$.fn.jqmShow=function(t){return this.each(function(){$.jqm.open(this._jqm,t);});};
$.fn.jqmHide=function(t){return this.each(function(){$.jqm.close(this._jqm,t)});};

$.jqm = {
hash:{},
open:function(s,t){var h=H[s],c=h.c,cc='.'+c.closeClass,z=(parseInt(h.w.css('z-index')));z=(z>0)?z:3000;var o=$('<div></div>').css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:c.overlay/100});if(h.a)return F;h.t=t;h.a=true;h.w.css('z-index',z);
 if(c.modal) {if(!A[0])setTimeout(function(){L('bind');},1);A.push(s);}
 else if(c.overlay > 0) {if(c.closeoverlay) h.w.jqmAddClose(o);}
 else o=F;

 h.o=(o)?o.addClass(c.overlayClass).prependTo('body'):F;

 if(c.ajax) {var r=c.target||h.w,u=c.ajax;r=(typeof r == 'string')?$(r,h.w):$(r);u=(u.substr(0,1) == '@')?$(t).attr(u.substring(1)):u;
  r.html(c.ajaxText).load(u,function(){if(c.onLoad)c.onLoad.call(this,h);if(cc)h.w.jqmAddClose($(cc,h.w));e(h);});}
 else if(cc)h.w.jqmAddClose($(cc,h.w));

 if(c.toTop&&h.o)h.w.before('<span id="jqmP'+h.w[0]._jqm+'"></span>').insertAfter(h.o);	
 (c.onShow)?c.onShow(h):h.w.show();e(h);return F;
},
close:function(s){var h=H[s];if(!h.a)return F;h.a=F;
 if(A[0]){A.pop();if(!A[0])L('unbind');}
 if(h.c.toTop&&h.o)$('#jqmP'+h.w[0]._jqm).after(h.w).remove();
 if(h.c.onHide)h.c.onHide(h);else{h.w.hide();if(h.o)h.o.remove();} return F;
},
params:{}};
var s=0,H=$.jqm.hash,A=[],F=false,
e=function(h){f(h);},
f=function(h){try{$(':input:visible',h.w)[0].focus();}catch(_){}},
L=function(t){$(document)[t]("keypress",m)[t]("keydown",m)[t]("mousedown",m);},
m=function(e){var h=H[A[A.length-1]],r=(!$(e.target).parents('.jqmID'+h.s)[0]);if(r){$('.jqmID'+h.s).each(function(){var $self=$(this),offset=$self.offset();if(offset.top<=e.pageY && e.pageY<=offset.top+$self.height() && offset.left<=e.pageX && e.pageX<=offset.left+$self.width()){r=false;return false;}});f(h);}return !r;},
hs=function(w,t,c){return w.each(function(){var s=this._jqm;$(t).each(function() {
 if(!this[c]){this[c]=[];$(this).click(function(){for(var i in {jqmShow:1,jqmHide:1})for(var s in this[i])if(H[this[i][s]])H[this[i][s]].w[i](this);return F;});}this[c].push(s);});});};
})(jQuery);/*
 * jqDnR - Minimalistic Drag'n'Resize for jQuery.
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http://www.iceburg.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * $Version: 2007.08.19 +r2
 */

(function($){
$.fn.jqDrag=function(h){return i(this,h,'d');};
$.fn.jqResize=function(h,ar){return i(this,h,'r',ar);};
$.jqDnR={
	dnr:{},
	e:0,
	drag:function(v){
		if(M.k == 'd'){E.css({left:M.X+v.pageX-M.pX,top:M.Y+v.pageY-M.pY});}
		else {
			E.css({width:Math.max(v.pageX-M.pX+M.W,0),height:Math.max(v.pageY-M.pY+M.H,0)});
			if(M1){E1.css({width:Math.max(v.pageX-M1.pX+M1.W,0),height:Math.max(v.pageY-M1.pY+M1.H,0)});}
		}
		return false;
	},
	stop:function(){
		//E.css('opacity',M.o);
		$(document).unbind('mousemove',J.drag).unbind('mouseup',J.stop);
	}
};
var J=$.jqDnR,M=J.dnr,E=J.e,E1,M1,
i=function(e,h,k,aR){
	return e.each(function(){
		h=(h)?$(h,e):e;
		h.bind('mousedown',{e:e,k:k},function(v){
			var d=v.data,p={};E=d.e;E1 = aR ? $(aR) : false;
			// attempt utilization of dimensions plugin to fix IE issues
			if(E.css('position') != 'relative'){try{E.position(p);}catch(e){}}
			M={
				X:p.left||f('left')||0,
				Y:p.top||f('top')||0,
				W:f('width')||E[0].scrollWidth||0,
				H:f('height')||E[0].scrollHeight||0,
				pX:v.pageX,
				pY:v.pageY,
				k:d.k
				//o:E.css('opacity')
			};
			// also resize
			if(E1 && d.k != 'd'){
				M1={
					X:p.left||f1('left')||0,
					Y:p.top||f1('top')||0,
					W:E1[0].offsetWidth||f1('width')||0,
					H:E1[0].offsetHeight||f1('height')||0,
					pX:v.pageX,
					pY:v.pageY,
					k:d.k
				};
			} else {M1 = false;}			
			//E.css({opacity:0.8});
			if($("input.hasDatepicker",E[0])[0]) {
			try {$("input.hasDatepicker",E[0]).datepicker('hide');}catch (dpe){}
			}
			$(document).mousemove($.jqDnR.drag).mouseup($.jqDnR.stop);
			return false;
		});
	});
},
f=function(k){return parseInt(E.css(k),10)||false;},
f1=function(k){return parseInt(E1.css(k),10)||false;};
})(jQuery);/*
	The below work is licensed under Creative Commons GNU LGPL License.

	Original work:

	License:     http://creativecommons.org/licenses/LGPL/2.1/
	Author:      Stefan Goessner/2006
	Web:         http://goessner.net/ 

	Modifications made:

	Version:     0.9-p5
	Description: Restructured code, JSLint validated (no strict whitespaces),
	             added handling of empty arrays, empty strings, and int/floats values.
	Author:      Michael Schøler/2008-01-29
	Web:         http://michael.hinnerup.net/blog/2008/01/26/converting-json-to-xml-and-xml-to-json/
	
	Description: json2xml added support to convert functions as CDATA
	             so it will be easy to write characters that cause some problems when convert
	Author:      Tony Tomov
*/

/*global alert */
var xmlJsonClass = {
	// Param "xml": Element or document DOM node.
	// Param "tab": Tab or indent string for pretty output formatting omit or use empty string "" to supress.
	// Returns:     JSON string
	xml2json: function(xml, tab) {
		if (xml.nodeType === 9) {
			// document node
			xml = xml.documentElement;
		}
		var nws = this.removeWhite(xml);
		var obj = this.toObj(nws);
		var json = this.toJson(obj, xml.nodeName, "\t");
		return "{\n" + tab + (tab ? json.replace(/\t/g, tab) : json.replace(/\t|\n/g, "")) + "\n}";
	},

	// Param "o":   JavaScript object
	// Param "tab": tab or indent string for pretty output formatting omit or use empty string "" to supress.
	// Returns:     XML string
	json2xml: function(o, tab) {
		var toXml = function(v, name, ind) {
			var xml = "";
			var i, n;
			if (v instanceof Array) {
				if (v.length === 0) {
					xml += ind + "<"+name+">__EMPTY_ARRAY_</"+name+">\n";
				}
				else {
					for (i = 0, n = v.length; i < n; i += 1) {
						var sXml = ind + toXml(v[i], name, ind+"\t") + "\n";
						xml += sXml;
					}
				}
			}
			else if (typeof(v) === "object") {
				var hasChild = false;
				xml += ind + "<" + name;
				var m;
				for (m in v) if (v.hasOwnProperty(m)) {
					if (m.charAt(0) === "@") {
						xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
					}
					else {
						hasChild = true;
					}
				}
				xml += hasChild ? ">" : "/>";
				if (hasChild) {
					for (m in v) if (v.hasOwnProperty(m)) {
						if (m === "#text") {
							xml += v[m];
						}
						else if (m === "#cdata") {
							xml += "<![CDATA[" + v[m] + "]]>";
						}
						else if (m.charAt(0) !== "@") {
							xml += toXml(v[m], m, ind+"\t");
						}
					}
					xml += (xml.charAt(xml.length - 1) === "\n" ? ind : "") + "</" + name + ">";
				}
			}
			else if (typeof(v) === "function") {
				xml += ind + "<" + name + ">" + "<![CDATA[" + v + "]]>" + "</" + name + ">";
			}
			else {
				if (v === undefined ) { v = ""; }
				if (v.toString() === "\"\"" || v.toString().length === 0) {
					xml += ind + "<" + name + ">__EMPTY_STRING_</" + name + ">";
				} 
				else {
					xml += ind + "<" + name + ">" + v.toString() + "</" + name + ">";
				}
			}
			return xml;
		};
		var xml = "";
		var m;
		for (m in o) if (o.hasOwnProperty(m)) {
			xml += toXml(o[m], m, "");
		}
		return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
	},
	// Internal methods
	toObj: function(xml) {
		var o = {};
		var FuncTest = /function/i;
		if (xml.nodeType === 1) {
			// element node ..
			if (xml.attributes.length) {
				// element with attributes ..
				var i;
				for (i = 0; i < xml.attributes.length; i += 1) {
					o["@" + xml.attributes[i].nodeName] = (xml.attributes[i].nodeValue || "").toString();
				}
			}
			if (xml.firstChild) {
				// element has child nodes ..
				var textChild = 0, cdataChild = 0, hasElementChild = false;
				var n;
				for (n = xml.firstChild; n; n = n.nextSibling) {
					if (n.nodeType === 1) {
						hasElementChild = true;
					}
					else if (n.nodeType === 3 && n.nodeValue.match(/[^ \f\n\r\t\v]/)) {
						// non-whitespace text
						textChild += 1;
					}
					else if (n.nodeType === 4) {
						// cdata section node
						cdataChild += 1;
					}
				}
				if (hasElementChild) {
					if (textChild < 2 && cdataChild < 2) {
						// structured element with evtl. a single text or/and cdata node ..
						this.removeWhite(xml);
						for (n = xml.firstChild; n; n = n.nextSibling) {
							if (n.nodeType === 3) {
								// text node
								o["#text"] = this.escape(n.nodeValue);
							}
							else if (n.nodeType === 4) {
								// cdata node
								if (FuncTest.test(n.nodeValue)) {
									o[n.nodeName] = [o[n.nodeName], n.nodeValue];
								} else {
									o["#cdata"] = this.escape(n.nodeValue);
								}
							}
							else if (o[n.nodeName]) {
								// multiple occurence of element ..
								if (o[n.nodeName] instanceof Array) {
									o[n.nodeName][o[n.nodeName].length] = this.toObj(n);
								}
								else {
									o[n.nodeName] = [o[n.nodeName], this.toObj(n)];
								}
							}
							else {
								// first occurence of element ..
								o[n.nodeName] = this.toObj(n);
							}
						}
					}
					else {
						// mixed content
						if (!xml.attributes.length) {
							o = this.escape(this.innerXml(xml));
						}
						else {
							o["#text"] = this.escape(this.innerXml(xml));
						}
					}
				}
				else if (textChild) {
					// pure text
					if (!xml.attributes.length) {
						o = this.escape(this.innerXml(xml));
						if (o === "__EMPTY_ARRAY_") {
							o = "[]";
						} else if (o === "__EMPTY_STRING_") {
							o = "";
						}
					}
					else {
						o["#text"] = this.escape(this.innerXml(xml));
					}
				}
				else if (cdataChild) {
					// cdata
					if (cdataChild > 1) {
						o = this.escape(this.innerXml(xml));
					}
					else {
						for (n = xml.firstChild; n; n = n.nextSibling) {
							if(FuncTest.test(xml.firstChild.nodeValue)) {
								o = xml.firstChild.nodeValue;
								break;
							} else {
								o["#cdata"] = this.escape(n.nodeValue);
							}
						}
					}
				}
			}
			if (!xml.attributes.length && !xml.firstChild) {
				o = null;
			}
		}
		else if (xml.nodeType === 9) {
			// document.node
			o = this.toObj(xml.documentElement);
		}
		else {
			alert("unhandled node type: " + xml.nodeType);
		}
		return o;
	},
	toJson: function(o, name, ind, wellform) {
		if(wellform === undefined) wellform = true;
		var json = name ? ("\"" + name + "\"") : "", tab = "\t", newline = "\n";
		if(!wellform) {
			tab= ""; newline= "";
		}

		if (o === "[]") {
			json += (name ? ":[]" : "[]");
		}
		else if (o instanceof Array) {
			var n, i, ar=[];
			for (i = 0, n = o.length; i < n; i += 1) {
				ar[i] = this.toJson(o[i], "", ind + tab, wellform);
			}
			json += (name ? ":[" : "[") + (ar.length > 1 ? (newline + ind + tab + ar.join(","+newline + ind + tab) + newline + ind) : ar.join("")) + "]";
		}
		else if (o === null) {
			json += (name && ":") + "null";
		}
		else if (typeof(o) === "object") {
			var arr = [], m;
			for (m in o) {
				if (o.hasOwnProperty(m)) {
					arr[arr.length] = this.toJson(o[m], m, ind + tab, wellform);
			}
		}
			json += (name ? ":{" : "{") + (arr.length > 1 ? (newline + ind + tab + arr.join(","+newline + ind + tab) + newline + ind) : arr.join("")) + "}";
		}
		else if (typeof(o) === "string") {
			/*
			var objRegExp  = /(^-?\d+\.?\d*$)/;
			var FuncTest = /function/i;
			var os = o.toString();
			if (objRegExp.test(os) || FuncTest.test(os) || os==="false" || os==="true") {
				// int or float
				json += (name && ":")  + "\"" +os + "\"";
			} 
			else {
			*/
				json += (name && ":") + "\"" + o.replace(/\\/g,'\\\\').replace(/\"/g,'\\"') + "\"";
			//}
			}
		else {
			json += (name && ":") +  o.toString();
		}
		return json;
	},
	innerXml: function(node) {
		var s = "";
		if ("innerHTML" in node) {
			s = node.innerHTML;
		}
		else {
			var asXml = function(n) {
				var s = "", i;
				if (n.nodeType === 1) {
					s += "<" + n.nodeName;
					for (i = 0; i < n.attributes.length; i += 1) {
						s += " " + n.attributes[i].nodeName + "=\"" + (n.attributes[i].nodeValue || "").toString() + "\"";
					}
					if (n.firstChild) {
						s += ">";
						for (var c = n.firstChild; c; c = c.nextSibling) {
							s += asXml(c);
						}
						s += "</" + n.nodeName + ">";
					}
					else {
						s += "/>";
					}
				}
				else if (n.nodeType === 3) {
					s += n.nodeValue;
				}
				else if (n.nodeType === 4) {
					s += "<![CDATA[" + n.nodeValue + "]]>";
				}
				return s;
			};
			for (var c = node.firstChild; c; c = c.nextSibling) {
				s += asXml(c);
			}
		}
		return s;
	},
	escape: function(txt) {
		return txt.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\n]/g, '\\n').replace(/[\r]/g, '\\r');
	},
	removeWhite: function(e) {
		e.normalize();
		var n;
		for (n = e.firstChild; n; ) {
			if (n.nodeType === 3) {
				// text node
				if (!n.nodeValue.match(/[^ \f\n\r\t\v]/)) {
					// pure whitespace text node
					var nxt = n.nextSibling;
					e.removeChild(n);
					n = nxt;
				}
				else {
					n = n.nextSibling;
				}
			}
			else if (n.nodeType === 1) {
				// element node
				this.removeWhite(n);
				n = n.nextSibling;
			}
			else {
				// any other node
				n = n.nextSibling;
			}
		}
		return e;
	}
};/*
**
 * formatter for values but most of the values if for jqGrid
 * Some of this was inspired and based on how YUI does the table datagrid but in jQuery fashion
 * we are trying to keep it as light as possible
 * Joshua Burnett josh@9ci.com	
 * http://www.greenbill.com
 *
 * Changes from Tony Tomov tony@trirand.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 * 
**/
/*jshint eqeqeq:false */
/*global jQuery */

(function($) {
"use strict";	
	$.fmatter = {};
	//opts can be id:row id for the row, rowdata:the data for the row, colmodel:the column model for this column
	//example {id:1234,}
	$.extend($.fmatter,{
		isBoolean : function(o) {
			return typeof o === 'boolean';
		},
		isObject : function(o) {
			return (o && (typeof o === 'object' || $.isFunction(o))) || false;
		},
		isString : function(o) {
			return typeof o === 'string';
		},
		isNumber : function(o) {
			return typeof o === 'number' && isFinite(o);
		},
		isValue : function (o) {
			return (this.isObject(o) || this.isString(o) || this.isNumber(o) || this.isBoolean(o));
		},
		isEmpty : function(o) {
			if(!this.isString(o) && this.isValue(o)) {
				return false;
			}
			if (!this.isValue(o)){
				return true;
			}
			o = $.trim(o).replace(/\&nbsp\;/ig,'').replace(/\&#160\;/ig,'');
			return o==="";	
		}
	});
	$.fn.fmatter = function(formatType, cellval, opts, rwd, act) {
		// build main options before element iteration
		var v=cellval;
		opts = $.extend({}, $.jgrid.formatter, opts);

		try {
			v = $.fn.fmatter[formatType].call(this, cellval, opts, rwd, act);
		} catch(fe){}
		return v;
	};
	$.fmatter.util = {
		// Taken from YAHOO utils
		NumberFormat : function(nData,opts) {
			if(!$.fmatter.isNumber(nData)) {
				nData *= 1;
			}
			if($.fmatter.isNumber(nData)) {
				var bNegative = (nData < 0);
				var sOutput = String(nData);
				var sDecimalSeparator = opts.decimalSeparator || ".";
				var nDotIndex;
				if($.fmatter.isNumber(opts.decimalPlaces)) {
					// Round to the correct decimal place
					var nDecimalPlaces = opts.decimalPlaces;
					var nDecimal = Math.pow(10, nDecimalPlaces);
					sOutput = String(Math.round(nData*nDecimal)/nDecimal);
					nDotIndex = sOutput.lastIndexOf(".");
					if(nDecimalPlaces > 0) {
					// Add the decimal separator
						if(nDotIndex < 0) {
							sOutput += sDecimalSeparator;
							nDotIndex = sOutput.length-1;
						}
						// Replace the "."
						else if(sDecimalSeparator !== "."){
							sOutput = sOutput.replace(".",sDecimalSeparator);
						}
					// Add missing zeros
						while((sOutput.length - 1 - nDotIndex) < nDecimalPlaces) {
							sOutput += "0";
						}
					}
				}
				if(opts.thousandsSeparator) {
					var sThousandsSeparator = opts.thousandsSeparator;
					nDotIndex = sOutput.lastIndexOf(sDecimalSeparator);
					nDotIndex = (nDotIndex > -1) ? nDotIndex : sOutput.length;
					var sNewOutput = sOutput.substring(nDotIndex);
					var nCount = -1, i;
					for (i=nDotIndex; i>0; i--) {
						nCount++;
						if ((nCount%3 === 0) && (i !== nDotIndex) && (!bNegative || (i > 1))) {
							sNewOutput = sThousandsSeparator + sNewOutput;
						}
						sNewOutput = sOutput.charAt(i-1) + sNewOutput;
					}
					sOutput = sNewOutput;
				}
				// Prepend prefix
				sOutput = (opts.prefix) ? opts.prefix + sOutput : sOutput;
				// Append suffix
				sOutput = (opts.suffix) ? sOutput + opts.suffix : sOutput;
				return sOutput;
				
			}
			return nData;
		}
	};
	$.fn.fmatter.defaultFormat = function(cellval, opts) {
		return ($.fmatter.isValue(cellval) && cellval!=="" ) ?  cellval : opts.defaultValue || "&#160;";
	};
	$.fn.fmatter.email = function(cellval, opts) {
		if(!$.fmatter.isEmpty(cellval)) {
			return "<a href=\"mailto:" + cellval + "\">" + cellval + "</a>";
		}
		return $.fn.fmatter.defaultFormat(cellval,opts );
	};
	$.fn.fmatter.checkbox =function(cval, opts) {
		var op = $.extend({},opts.checkbox), ds;
		if(opts.colModel !== undefined && opts.colModel.formatoptions !== undefined) {
			op = $.extend({},op,opts.colModel.formatoptions);
		}
		if(op.disabled===true) {ds = "disabled=\"disabled\"";} else {ds="";}
		if($.fmatter.isEmpty(cval) || cval === undefined ) {cval = $.fn.fmatter.defaultFormat(cval,op);}
		cval=String(cval);
		cval=(cval+"").toLowerCase();
		var bchk = cval.search(/(false|f|0|no|n|off|undefined)/i)<0 ? " checked='checked' " : "";
		return "<input type=\"checkbox\" " + bchk  + " value=\""+ cval+"\" offval=\"no\" "+ds+ "/>";
	};
	$.fn.fmatter.link = function(cellval, opts) {
		var op = {target:opts.target};
		var target = "";
		if(opts.colModel !== undefined && opts.colModel.formatoptions !== undefined) {
			op = $.extend({},op,opts.colModel.formatoptions);
		}
		if(op.target) {target = 'target=' + op.target;}
		if(!$.fmatter.isEmpty(cellval)) {
			return "<a "+target+" href=\"" + cellval + "\">" + cellval + "</a>";
		}
		return $.fn.fmatter.defaultFormat(cellval,opts);
	};
	$.fn.fmatter.showlink = function(cellval, opts) {
		var op = {baseLinkUrl: opts.baseLinkUrl,showAction:opts.showAction, addParam: opts.addParam || "", target: opts.target, idName: opts.idName},
		target = "", idUrl;
		if(opts.colModel !== undefined && opts.colModel.formatoptions !== undefined) {
			op = $.extend({},op,opts.colModel.formatoptions);
		}
		if(op.target) {target = 'target=' + op.target;}
		idUrl = op.baseLinkUrl+op.showAction + '?'+ op.idName+'='+opts.rowId+op.addParam;
		if($.fmatter.isString(cellval) || $.fmatter.isNumber(cellval)) {	//add this one even if its blank string
			return "<a "+target+" href=\"" + idUrl + "\">" + cellval + "</a>";
		}
		return $.fn.fmatter.defaultFormat(cellval,opts);
	};
	$.fn.fmatter.integer = function(cellval, opts) {
		var op = $.extend({},opts.integer);
		if(opts.colModel !== undefined && opts.colModel.formatoptions !== undefined) {
			op = $.extend({},op,opts.colModel.formatoptions);
		}
		if($.fmatter.isEmpty(cellval)) {
			return op.defaultValue;
		}
		return $.fmatter.util.NumberFormat(cellval,op);
	};
	$.fn.fmatter.number = function (cellval, opts) {
		var op = $.extend({},opts.number);
		if(opts.colModel !== undefined && opts.colModel.formatoptions !== undefined) {
			op = $.extend({},op,opts.colModel.formatoptions);
		}
		if($.fmatter.isEmpty(cellval)) {
			return op.defaultValue;
		}
		return $.fmatter.util.NumberFormat(cellval,op);
	};
	$.fn.fmatter.currency = function (cellval, opts) {
		var op = $.extend({},opts.currency);
		if(opts.colModel !== undefined && opts.colModel.formatoptions !== undefined) {
			op = $.extend({},op,opts.colModel.formatoptions);
		}
		if($.fmatter.isEmpty(cellval)) {
			return op.defaultValue;
		}
		return $.fmatter.util.NumberFormat(cellval,op);
	};
	$.fn.fmatter.date = function (cellval, opts, rwd, act) {
		var op = $.extend({},opts.date);
		if(opts.colModel !== undefined && opts.colModel.formatoptions !== undefined) {
			op = $.extend({},op,opts.colModel.formatoptions);
		}
		if(!op.reformatAfterEdit && act === 'edit'){
			return $.fn.fmatter.defaultFormat(cellval, opts);
		}
		if(!$.fmatter.isEmpty(cellval)) {
			return $.jgrid.parseDate(op.srcformat,cellval,op.newformat,op);
		}
		return $.fn.fmatter.defaultFormat(cellval, opts);
	};
	$.fn.fmatter.select = function (cellval,opts) {
		// jqGrid specific
		cellval = String(cellval);
		var oSelect = false, ret=[], sep, delim;
		if(opts.colModel.formatoptions !== undefined){
			oSelect= opts.colModel.formatoptions.value;
			sep = opts.colModel.formatoptions.separator === undefined ? ":" : opts.colModel.formatoptions.separator;
			delim = opts.colModel.formatoptions.delimiter === undefined ? ";" : opts.colModel.formatoptions.delimiter;
		} else if(opts.colModel.editoptions !== undefined){
			oSelect= opts.colModel.editoptions.value;
			sep = opts.colModel.editoptions.separator === undefined ? ":" : opts.colModel.editoptions.separator;
			delim = opts.colModel.editoptions.delimiter === undefined ? ";" : opts.colModel.editoptions.delimiter;
		}
		if (oSelect) {
			var	msl =  opts.colModel.editoptions.multiple === true ? true : false,
			scell = [], sv;
			if(msl) {scell = cellval.split(",");scell = $.map(scell,function(n){return $.trim(n);});}
			if ($.fmatter.isString(oSelect)) {
				// mybe here we can use some caching with care ????
				var so = oSelect.split(delim), j=0, i;
				for(i=0; i<so.length;i++){
					sv = so[i].split(sep);
					if(sv.length > 2 ) {
						sv[1] = $.map(sv,function(n,i){if(i>0) {return n;}}).join(sep);
					}
					if(msl) {
						if($.inArray(sv[0],scell)>-1) {
							ret[j] = sv[1];
							j++;
						}
					} else if($.trim(sv[0]) === $.trim(cellval)) {
						ret[0] = sv[1];
						break;
					}
				}
			} else if($.fmatter.isObject(oSelect)) {
				// this is quicker
				if(msl) {
					ret = $.map(scell, function(n){
						return oSelect[n];
					});
				} else {
					ret[0] = oSelect[cellval] || "";
				}
			}
		}
		cellval = ret.join(", ");
		return  cellval === "" ? $.fn.fmatter.defaultFormat(cellval,opts) : cellval;
	};
	$.fn.fmatter.rowactions = function(act) {
		var $tr = $(this).closest("tr.jqgrow"),
			rid = $tr.attr("id"),
			$id = $(this).closest("table.ui-jqgrid-btable").attr('id').replace(/_frozen([^_]*)$/,'$1'),
			$grid = $("#"+$id),
			$t = $grid[0],
			p = $t.p,
			cm = p.colModel[$.jgrid.getCellIndex(this)],
			$actionsDiv = cm.frozen ? $("tr#"+rid+" td:eq("+$.jgrid.getCellIndex(this)+") > div",$grid) :$(this).parent(),
			op = {
				extraparam: {}
			},
			saverow = function(rowid, res) {
				if($.isFunction(op.afterSave)) { op.afterSave.call($t, rowid, res); }
				$actionsDiv.find("div.ui-inline-edit,div.ui-inline-del").show();
				$actionsDiv.find("div.ui-inline-save,div.ui-inline-cancel").hide();
			},
			restorerow = function(rowid) {
				if($.isFunction(op.afterRestore)) { op.afterRestore.call($t, rowid); }
				$actionsDiv.find("div.ui-inline-edit,div.ui-inline-del").show();
				$actionsDiv.find("div.ui-inline-save,div.ui-inline-cancel").hide();
			};

		if (cm.formatoptions !== undefined) {
			op = $.extend(op,cm.formatoptions);
		}
		if (p.editOptions !== undefined) {
			op.editOptions = p.editOptions;
		}
		if (p.delOptions !== undefined) {
			op.delOptions = p.delOptions;
		}
		if ($tr.hasClass("jqgrid-new-row")){
			op.extraparam[p.prmNames.oper] = p.prmNames.addoper;
		}
		var actop = {
			keys: op.keys,
			oneditfunc: op.onEdit,
			successfunc: op.onSuccess,
			url: op.url,
			extraparam: op.extraparam,
			aftersavefunc: saverow,
			errorfunc: op.onError,
			afterrestorefunc: restorerow,
			restoreAfterError: op.restoreAfterError,
			mtype: op.mtype
		};
		switch(act)
		{
			case 'edit':
				$grid.jqGrid('editRow', rid, actop);
				$actionsDiv.find("div.ui-inline-edit,div.ui-inline-del").hide();
				$actionsDiv.find("div.ui-inline-save,div.ui-inline-cancel").show();
				$grid.triggerHandler("jqGridAfterGridComplete");
				break;
			case 'save':
				if ($grid.jqGrid('saveRow', rid, actop)) {
					$actionsDiv.find("div.ui-inline-edit,div.ui-inline-del").show();
					$actionsDiv.find("div.ui-inline-save,div.ui-inline-cancel").hide();
					$grid.triggerHandler("jqGridAfterGridComplete");
				}
				break;
			case 'cancel' :
				$grid.jqGrid('restoreRow', rid, restorerow);
				$actionsDiv.find("div.ui-inline-edit,div.ui-inline-del").show();
				$actionsDiv.find("div.ui-inline-save,div.ui-inline-cancel").hide();
				$grid.triggerHandler("jqGridAfterGridComplete");
				break;
			case 'del':
				$grid.jqGrid('delGridRow', rid, op.delOptions);
				break;
			case 'formedit':
				$grid.jqGrid('setSelection', rid);
				$grid.jqGrid('editGridRow', rid, op.editOptions);
				break;
		}
	};
	$.fn.fmatter.actions = function(cellval,opts) {
		var op={keys:false, editbutton:true, delbutton:true, editformbutton: false},
			rowid=opts.rowId, str="",ocl;
		if(opts.colModel.formatoptions !== undefined) {
			op = $.extend(op,opts.colModel.formatoptions);
		}
		if(rowid === undefined || $.fmatter.isEmpty(rowid)) {return "";}
		if(op.editformbutton){
			ocl = "id='jEditButton_"+rowid+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ";
			str += "<div title='"+$.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+ocl+"><span class='ui-icon ui-icon-pencil'></span></div>";
		} else if(op.editbutton){
			ocl = "id='jEditButton_"+rowid+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover') ";
			str += "<div title='"+$.jgrid.nav.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+ocl+"><span class='ui-icon ui-icon-pencil'></span></div>";
		}
		if(op.delbutton) {
			ocl = "id='jDeleteButton_"+rowid+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ";
			str += "<div title='"+$.jgrid.nav.deltitle+"' style='float:left;margin-left:5px;' class='ui-pg-div ui-inline-del' "+ocl+"><span class='ui-icon ui-icon-trash'></span></div>";
		}
		ocl = "id='jSaveButton_"+rowid+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ";
		str += "<div title='"+$.jgrid.edit.bSubmit+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+ocl+"><span class='ui-icon ui-icon-disk'></span></div>";
		ocl = "id='jCancelButton_"+rowid+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); onmouseover=jQuery(this).addClass('ui-state-hover'); onmouseout=jQuery(this).removeClass('ui-state-hover'); ";
		str += "<div title='"+$.jgrid.edit.bCancel+"' style='float:left;display:none;margin-left:5px;' class='ui-pg-div ui-inline-cancel' "+ocl+"><span class='ui-icon ui-icon-cancel'></span></div>";
		return "<div style='margin-left:8px;'>" + str + "</div>";
	};
	$.unformat = function (cellval,options,pos,cnt) {
		// specific for jqGrid only
		var ret, formatType = options.colModel.formatter,
		op =options.colModel.formatoptions || {}, sep,
		re = /([\.\*\_\'\(\)\{\}\+\?\\])/g,
		unformatFunc = options.colModel.unformat||($.fn.fmatter[formatType] && $.fn.fmatter[formatType].unformat);
		if(unformatFunc !== undefined && $.isFunction(unformatFunc) ) {
			ret = unformatFunc.call(this, $(cellval).text(), options, cellval);
		} else if(formatType !== undefined && $.fmatter.isString(formatType) ) {
			var opts = $.jgrid.formatter || {}, stripTag;
			switch(formatType) {
				case 'integer' :
					op = $.extend({},opts.integer,op);
					sep = op.thousandsSeparator.replace(re,"\\$1");
					stripTag = new RegExp(sep, "g");
					ret = $(cellval).text().replace(stripTag,'');
					break;
				case 'number' :
					op = $.extend({},opts.number,op);
					sep = op.thousandsSeparator.replace(re,"\\$1");
					stripTag = new RegExp(sep, "g");
					ret = $(cellval).text().replace(stripTag,"").replace(op.decimalSeparator,'.');
					break;
				case 'currency':
					op = $.extend({},opts.currency,op);
					sep = op.thousandsSeparator.replace(re,"\\$1");
					stripTag = new RegExp(sep, "g");
					ret = $(cellval).text();
					if (op.prefix && op.prefix.length) {
						ret = ret.substr(op.prefix.length);
					}
					if (op.suffix && op.suffix.length) {
						ret = ret.substr(0, ret.length - op.suffix.length);
					}
					ret = ret.replace(stripTag,'').replace(op.decimalSeparator,'.');
					break;
				case 'checkbox':
					var cbv = (options.colModel.editoptions) ? options.colModel.editoptions.value.split(":") : ["Yes","No"];
					ret = $('input',cellval).is(":checked") ? cbv[0] : cbv[1];
					break;
				case 'select' :
					ret = $.unformat.select(cellval,options,pos,cnt);
					break;
				case 'actions':
					return "";
				default:
					ret= $(cellval).text();
			}
		}
		return ret !== undefined ? ret : cnt===true ? $(cellval).text() : $.jgrid.htmlDecode($(cellval).html());
	};
	$.unformat.select = function (cellval,options,pos,cnt) {
		// Spacial case when we have local data and perform a sort
		// cnt is set to true only in sortDataArray
		var ret = [];
		var cell = $(cellval).text();
		if(cnt===true) {return cell;}
		var op = $.extend({}, options.colModel.formatoptions !== undefined ? options.colModel.formatoptions: options.colModel.editoptions),
		sep = op.separator === undefined ? ":" : op.separator,
		delim = op.delimiter === undefined ? ";" : op.delimiter;
		
		if(op.value){
			var oSelect = op.value,
			msl =  op.multiple === true ? true : false,
			scell = [], sv;
			if(msl) {scell = cell.split(",");scell = $.map(scell,function(n){return $.trim(n);});}
			if ($.fmatter.isString(oSelect)) {
				var so = oSelect.split(delim), j=0, i;
				for(i=0; i<so.length;i++){
					sv = so[i].split(sep);
					if(sv.length > 2 ) {
						sv[1] = $.map(sv,function(n,i){if(i>0) {return n;}}).join(sep);
					}					
					if(msl) {
						if($.inArray(sv[1],scell)>-1) {
							ret[j] = sv[0];
							j++;
						}
					} else if($.trim(sv[1]) === $.trim(cell)) {
						ret[0] = sv[0];
						break;
					}
				}
			} else if($.fmatter.isObject(oSelect) || $.isArray(oSelect) ){
				if(!msl) {scell[0] =  cell;}
				ret = $.map(scell, function(n){
					var rv;
					$.each(oSelect, function(i,val){
						if (val === n) {
							rv = i;
							return false;
						}
					});
					if( rv !== undefined ) {return rv;}
				});
			}
			return ret.join(", ");
		}
		return cell || "";
	};
	$.unformat.date = function (cellval, opts) {
		var op = $.jgrid.formatter.date || {};
		if(opts.formatoptions !== undefined) {
			op = $.extend({},op,opts.formatoptions);
		}		
		if(!$.fmatter.isEmpty(cellval)) {
			return $.jgrid.parseDate(op.newformat,cellval,op.srcformat,op);
		}
		return $.fn.fmatter.defaultFormat(cellval, opts);
	};
})(jQuery);
/*jshint eqeqeq:false */
/*global jQuery */
(function($){
/*
 * jqGrid common function
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
*/
"use strict";
$.extend($.jgrid,{
// Modal functions
	showModal : function(h) {
		h.w.show();
	},
	closeModal : function(h) {
		h.w.hide().attr("aria-hidden","true");
		if(h.o) {h.o.remove();}
	},
	hideModal : function (selector,o) {
		o = $.extend({jqm : true, gb :''}, o || {});
		if(o.onClose) {
			var oncret = o.gb && typeof o.gb === "string" && o.gb.substr(0,6) === "#gbox_" ? o.onClose.call($("#" + o.gb.substr(6))[0], selector) : o.onClose(selector);
			if (typeof oncret === 'boolean'  && !oncret ) { return; }
		}
		if ($.fn.jqm && o.jqm === true) {
			$(selector).attr("aria-hidden","true").jqmHide();
		} else {
			if(o.gb !== '') {
				try {$(".jqgrid-overlay:first",o.gb).hide();} catch (e){}
			}
			$(selector).hide().attr("aria-hidden","true");
		}
	},
//Helper functions
	findPos : function(obj) {
		var curleft = 0, curtop = 0;
		if (obj.offsetParent) {
			do {
				curleft += obj.offsetLeft;
				curtop += obj.offsetTop;
			} while (obj = obj.offsetParent);
			//do not change obj == obj.offsetParent
		}
		return [curleft,curtop];
	},
	createModal : function(aIDs, content, p, insertSelector, posSelector, appendsel, css) {
		p = $.extend(true, {}, $.jgrid.jqModal || {}, p);
		var mw  = document.createElement('div'), rtlsup, self = this;
		css = $.extend({}, css || {});
		rtlsup = $(p.gbox).attr("dir") === "rtl" ? true : false;
		mw.className= "ui-widget ui-widget-content ui-corner-all ui-jqdialog";
		mw.id = aIDs.themodal;
		var mh = document.createElement('div');
		mh.className = "ui-jqdialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix";
		mh.id = aIDs.modalhead;
		$(mh).append("<span class='ui-jqdialog-title'>"+p.caption+"</span>");
		var ahr= $("<a class='ui-jqdialog-titlebar-close ui-corner-all'></a>")
		.hover(function(){ahr.addClass('ui-state-hover');},
			function(){ahr.removeClass('ui-state-hover');})
		.append("<span class='ui-icon ui-icon-closethick'></span>");
		$(mh).append(ahr);
		if(rtlsup) {
			mw.dir = "rtl";
			$(".ui-jqdialog-title",mh).css("float","right");
			$(".ui-jqdialog-titlebar-close",mh).css("left",0.3+"em");
		} else {
			mw.dir = "ltr";
			$(".ui-jqdialog-title",mh).css("float","left");
			$(".ui-jqdialog-titlebar-close",mh).css("right",0.3+"em");
		}
		var mc = document.createElement('div');
		$(mc).addClass("ui-jqdialog-content ui-widget-content").attr("id",aIDs.modalcontent);
		$(mc).append(content);
		mw.appendChild(mc);
		$(mw).prepend(mh);
		if(appendsel===true) { $('body').append(mw); } //append as first child in body -for alert dialog
		else if (typeof appendsel === "string") {
			$(appendsel).append(mw);
		} else {$(mw).insertBefore(insertSelector);}
		$(mw).css(css);
		if(p.jqModal === undefined) {p.jqModal = true;} // internal use
		var coord = {};
		if ( $.fn.jqm && p.jqModal === true) {
			if(p.left ===0 && p.top===0 && p.overlay) {
				var pos = [];
				pos = $.jgrid.findPos(posSelector);
				p.left = pos[0] + 4;
				p.top = pos[1] + 4;
			}
			coord.top = p.top+"px";
			coord.left = p.left;
		} else if(p.left !==0 || p.top!==0) {
			coord.left = p.left;
			coord.top = p.top+"px";
		}
		$("a.ui-jqdialog-titlebar-close",mh).click(function(){
			var oncm = $("#"+$.jgrid.jqID(aIDs.themodal)).data("onClose") || p.onClose;
			var gboxclose = $("#"+$.jgrid.jqID(aIDs.themodal)).data("gbox") || p.gbox;
			self.hideModal("#"+$.jgrid.jqID(aIDs.themodal),{gb:gboxclose,jqm:p.jqModal,onClose:oncm});
			return false;
		});
		if (p.width === 0 || !p.width) {p.width = 300;}
		if(p.height === 0 || !p.height) {p.height =200;}
		if(!p.zIndex) {
			var parentZ = $(insertSelector).parents("*[role=dialog]").filter(':first').css("z-index");
			if(parentZ) {
				p.zIndex = parseInt(parentZ,10)+2;
			} else {
				p.zIndex = 950;
			}
		}
		var rtlt = 0;
		if( rtlsup && coord.left && !appendsel) {
			rtlt = $(p.gbox).width()- (!isNaN(p.width) ? parseInt(p.width,10) :0) - 8; // to do
		// just in case
			coord.left = parseInt(coord.left,10) + parseInt(rtlt,10);
		}
		if(coord.left) { coord.left += "px"; }
		$(mw).css($.extend({
			width: isNaN(p.width) ? "auto": p.width+"px",
			height:isNaN(p.height) ? "auto" : p.height + "px",
			zIndex:p.zIndex,
			overflow: 'hidden'
		},coord))
		.attr({tabIndex: "-1","role":"dialog","aria-labelledby":aIDs.modalhead,"aria-hidden":"true"});
		if(p.drag === undefined) { p.drag=true;}
		if(p.resize === undefined) {p.resize=true;}
		if (p.drag) {
			$(mh).css('cursor','move');
			if($.fn.jqDrag) {
				$(mw).jqDrag(mh);
			} else {
				try {
					$(mw).draggable({handle: $("#"+$.jgrid.jqID(mh.id))});
				} catch (e) {}
			}
		}
		if(p.resize) {
			if($.fn.jqResize) {
				$(mw).append("<div class='jqResize ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se'></div>");
				$("#"+$.jgrid.jqID(aIDs.themodal)).jqResize(".jqResize",aIDs.scrollelm ? "#"+$.jgrid.jqID(aIDs.scrollelm) : false);
			} else {
				try {
					$(mw).resizable({handles: 'se, sw',alsoResize: aIDs.scrollelm ? "#"+$.jgrid.jqID(aIDs.scrollelm) : false});
				} catch (r) {}
			}
		}
		if(p.closeOnEscape === true){
			$(mw).keydown( function( e ) {
				if( e.which == 27 ) {
					var cone = $("#"+$.jgrid.jqID(aIDs.themodal)).data("onClose") || p.onClose;
					self.hideModal("#"+$.jgrid.jqID(aIDs.themodal),{gb:p.gbox,jqm:p.jqModal,onClose: cone});
				}
			});
		}
	},
	viewModal : function (selector,o){
		o = $.extend({
			toTop: true,
			overlay: 10,
			modal: false,
			overlayClass : 'ui-widget-overlay',
			onShow: $.jgrid.showModal,
			onHide: $.jgrid.closeModal,
			gbox: '',
			jqm : true,
			jqM : true
		}, o || {});
		if ($.fn.jqm && o.jqm === true) {
			if(o.jqM) { $(selector).attr("aria-hidden","false").jqm(o).jqmShow(); }
			else {$(selector).attr("aria-hidden","false").jqmShow();}
		} else {
			if(o.gbox !== '') {
				$(".jqgrid-overlay:first",o.gbox).show();
				$(selector).data("gbox",o.gbox);
			}
			$(selector).show().attr("aria-hidden","false");
			try{$(':input:visible',selector)[0].focus();}catch(_){}
		}
	},
	info_dialog : function(caption, content,c_b, modalopt) {
		var mopt = {
			width:290,
			height:'auto',
			dataheight: 'auto',
			drag: true,
			resize: false,
			left:250,
			top:170,
			zIndex : 1000,
			jqModal : true,
			modal : false,
			closeOnEscape : true,
			align: 'center',
			buttonalign : 'center',
			buttons : []
		// {text:'textbutt', id:"buttid", onClick : function(){...}}
		// if the id is not provided we set it like info_button_+ the index in the array - i.e info_button_0,info_button_1...
		};
		$.extend(true, mopt, $.jgrid.jqModal || {}, {caption:"<b>"+caption+"</b>"}, modalopt || {});
		var jm = mopt.jqModal, self = this;
		if($.fn.jqm && !jm) { jm = false; }
		// in case there is no jqModal
		var buttstr ="", i;
		if(mopt.buttons.length > 0) {
			for(i=0;i<mopt.buttons.length;i++) {
				if(mopt.buttons[i].id === undefined) { mopt.buttons[i].id = "info_button_"+i; }
				buttstr += "<a id='"+mopt.buttons[i].id+"' class='fm-button ui-state-default ui-corner-all'>"+mopt.buttons[i].text+"</a>";
			}
		}
		var dh = isNaN(mopt.dataheight) ? mopt.dataheight : mopt.dataheight+"px",
		cn = "text-align:"+mopt.align+";";
		var cnt = "<div id='info_id'>";
		cnt += "<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+dh+";"+cn+"'>"+content+"</div>";
		cnt += c_b ? "<div class='ui-widget-content ui-helper-clearfix' style='text-align:"+mopt.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button ui-state-default ui-corner-all'>"+c_b+"</a>"+buttstr+"</div>" :
			buttstr !== ""  ? "<div class='ui-widget-content ui-helper-clearfix' style='text-align:"+mopt.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+buttstr+"</div>" : "";
		cnt += "</div>";

		try {
			if($("#info_dialog").attr("aria-hidden") === "false") {
				$.jgrid.hideModal("#info_dialog",{jqm:jm});
			}
			$("#info_dialog").remove();
		} catch (e){}
		$.jgrid.createModal({
			themodal:'info_dialog',
			modalhead:'info_head',
			modalcontent:'info_content',
			scrollelm: 'infocnt'},
			cnt,
			mopt,
			'','',true
		);
		// attach onclick after inserting into the dom
		if(buttstr) {
			$.each(mopt.buttons,function(i){
				$("#"+$.jgrid.jqID(this.id),"#info_id").bind('click',function(){mopt.buttons[i].onClick.call($("#info_dialog")); return false;});
			});
		}
		$("#closedialog", "#info_id").click(function(){
			self.hideModal("#info_dialog",{
				jqm:jm,
				onClose: $("#info_dialog").data("onClose") || mopt.onClose,
				gb: $("#info_dialog").data("gbox") || mopt.gbox
			});
			return false;
		});
		$(".fm-button","#info_dialog").hover(
			function(){$(this).addClass('ui-state-hover');},
			function(){$(this).removeClass('ui-state-hover');}
		);
		if($.isFunction(mopt.beforeOpen) ) { mopt.beforeOpen(); }
		$.jgrid.viewModal("#info_dialog",{
			onHide: function(h) {
				h.w.hide().remove();
				if(h.o) { h.o.remove(); }
			},
			modal :mopt.modal,
			jqm:jm
		});
		if($.isFunction(mopt.afterOpen) ) { mopt.afterOpen(); }
		try{ $("#info_dialog").focus();} catch (m){}
	},
	bindEv: function  (el, opt) {
		var $t = this;
		if($.isFunction(opt.dataInit)) {
			opt.dataInit.call($t,el,opt);
		}
		if(opt.dataEvents) {
			$.each(opt.dataEvents, function() {
				if (this.data !== undefined) {
					$(el).bind(this.type, this.data, this.fn);
				} else {
					$(el).bind(this.type, this.fn);
				}
			});
		}
	},
// Form Functions
	createEl : function(eltype,options,vl,autowidth, ajaxso) {
		var elem = "", $t = this;
		function setAttributes(elm, atr, exl ) {
			var exclude = ['dataInit','dataEvents','dataUrl', 'buildSelect','sopt', 'searchhidden', 'defaultValue', 'attr', 'custom_element', 'custom_value'];
			if(exl !== undefined && $.isArray(exl)) {
				$.merge(exclude, exl);
			}
			$.each(atr, function(key, value){
				if($.inArray(key, exclude) === -1) {
					$(elm).attr(key,value);
				}
			});
			if(!atr.hasOwnProperty('id')) {
				$(elm).attr('id', $.jgrid.randId());
			}
		}
		switch (eltype)
		{
			case "textarea" :
				elem = document.createElement("textarea");
				if(autowidth) {
					if(!options.cols) { $(elem).css({width:"98%"});}
				} else if (!options.cols) { options.cols = 20; }
				if(!options.rows) { options.rows = 2; }
				if(vl==='&nbsp;' || vl==='&#160;' || (vl.length===1 && vl.charCodeAt(0)===160)) {vl="";}
				elem.value = vl;
				setAttributes(elem, options);
				$(elem).attr({"role":"textbox","multiline":"true"});
			break;
			case "checkbox" : //what code for simple checkbox
				elem = document.createElement("input");
				elem.type = "checkbox";
				if( !options.value ) {
					var vl1 = (vl+"").toLowerCase();
					if(vl1.search(/(false|f|0|no|n|off|undefined)/i)<0 && vl1!=="") {
						elem.checked=true;
						elem.defaultChecked=true;
						elem.value = vl;
					} else {
						elem.value = "on";
					}
					$(elem).attr("offval","off");
				} else {
					var cbval = options.value.split(":");
					if(vl === cbval[0]) {
						elem.checked=true;
						elem.defaultChecked=true;
					}
					elem.value = cbval[0];
					$(elem).attr("offval",cbval[1]);
				}
				setAttributes(elem, options, ['value']);
				$(elem).attr("role","checkbox");
			break;
			case "select" :
				elem = document.createElement("select");
				elem.setAttribute("role","select");
				var msl, ovm = [];
				if(options.multiple===true) {
					msl = true;
					elem.multiple="multiple";
					$(elem).attr("aria-multiselectable","true");
				} else { msl = false; }
				if(options.dataUrl !== undefined) {
					var rowid = options.name ? String(options.id).substring(0, String(options.id).length - String(options.name).length - 1) : String(options.id),
						postData = options.postData || ajaxso.postData;

					if ($t.p && $t.p.idPrefix) {
						rowid = $.jgrid.stripPref($t.p.idPrefix, rowid);
					}
					$.ajax($.extend({
						url: $.isFunction(options.dataUrl) ? options.dataUrl.call($t, rowid, vl, String(options.name)) : options.dataUrl,
						type : "GET",
						dataType: "html",
						data: $.isFunction(postData) ? postData.call($t, rowid, vl, String(options.name)) : postData,
						context: {elem:elem, options:options, vl:vl},
						success: function(data){
							var ovm = [], elem = this.elem, vl = this.vl,
							options = $.extend({},this.options),
							msl = options.multiple===true,
							a = $.isFunction(options.buildSelect) ? options.buildSelect.call($t,data) : data;
							if(typeof a === 'string') {
								a = $( $.trim( a ) ).html();
							}
							if(a) {
								$(elem).append(a);
								setAttributes(elem, options, postData ? ['postData'] : undefined );
								if(options.size === undefined) { options.size =  msl ? 3 : 1;}
								if(msl) {
									ovm = vl.split(",");
									ovm = $.map(ovm,function(n){return $.trim(n);});
								} else {
									ovm[0] = $.trim(vl);
								}
								//$(elem).attr(options);
								setTimeout(function(){
									$("option",elem).each(function(i){
										//if(i===0) { this.selected = ""; }
										// fix IE8/IE7 problem with selecting of the first item on multiple=true
										if (i === 0 && elem.multiple) { this.selected = false; }
										$(this).attr("role","option");
										if($.inArray($.trim($(this).text()),ovm) > -1 || $.inArray($.trim($(this).val()),ovm) > -1 ) {
											this.selected= "selected";
										}
									});
								},0);
							}
						}
					},ajaxso || {}));
				} else if(options.value) {
					var i;
					if(options.size === undefined) {
						options.size = msl ? 3 : 1;
					}
					if(msl) {
						ovm = vl.split(",");
						ovm = $.map(ovm,function(n){return $.trim(n);});
					}
					if(typeof options.value === 'function') { options.value = options.value(); }
					var so,sv, ov, 
					sep = options.separator === undefined ? ":" : options.separator,
					delim = options.delimiter === undefined ? ";" : options.delimiter;
					if(typeof options.value === 'string') {
						so = options.value.split(delim);
						for(i=0; i<so.length;i++){
							sv = so[i].split(sep);
							if(sv.length > 2 ) {
								sv[1] = $.map(sv,function(n,ii){if(ii>0) { return n;} }).join(sep);
							}
							ov = document.createElement("option");
							ov.setAttribute("role","option");
							ov.value = sv[0]; ov.innerHTML = sv[1];
							elem.appendChild(ov);
							if (!msl &&  ($.trim(sv[0]) === $.trim(vl) || $.trim(sv[1]) === $.trim(vl))) { ov.selected ="selected"; }
							if (msl && ($.inArray($.trim(sv[1]), ovm)>-1 || $.inArray($.trim(sv[0]), ovm)>-1)) {ov.selected ="selected";}
						}
					} else if (typeof options.value === 'object') {
						var oSv = options.value, key;
						for (key in oSv) {
							if (oSv.hasOwnProperty(key ) ){
								ov = document.createElement("option");
								ov.setAttribute("role","option");
								ov.value = key; ov.innerHTML = oSv[key];
								elem.appendChild(ov);
								if (!msl &&  ( $.trim(key) === $.trim(vl) || $.trim(oSv[key]) === $.trim(vl)) ) { ov.selected ="selected"; }
								if (msl && ($.inArray($.trim(oSv[key]),ovm)>-1 || $.inArray($.trim(key),ovm)>-1)) { ov.selected ="selected"; }
							}
						}
					}
					setAttributes(elem, options, ['value']);
				}
			break;
			case "text" :
			case "password" :
			case "button" :
				var role;
				if(eltype==="button") { role = "button"; }
				else { role = "textbox"; }
				elem = document.createElement("input");
				elem.type = eltype;
				elem.value = vl;
				setAttributes(elem, options);
				if(eltype !== "button"){
					if(autowidth) {
						if(!options.size) { $(elem).css({width:"98%"}); }
					} else if (!options.size) { options.size = 20; }
				}
				$(elem).attr("role",role);
			break;
			case "image" :
			case "file" :
				elem = document.createElement("input");
				elem.type = eltype;
				setAttributes(elem, options);
				break;
			case "custom" :
				elem = document.createElement("span");
				try {
					if($.isFunction(options.custom_element)) {
						var celm = options.custom_element.call($t,vl,options);
						if(celm) {
							celm = $(celm).addClass("customelement").attr({id:options.id,name:options.name});
							$(elem).empty().append(celm);
						} else {
							throw "e2";
						}
					} else {
						throw "e1";
					}
				} catch (e) {
					if (e==="e1") { $.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_element' "+$.jgrid.edit.msg.nodefined, $.jgrid.edit.bClose);}
					if (e==="e2") { $.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_element' "+$.jgrid.edit.msg.novalue,$.jgrid.edit.bClose);}
					else { $.jgrid.info_dialog($.jgrid.errors.errcap,typeof e==="string"?e:e.message,$.jgrid.edit.bClose); }
				}
			break;
		}
		return elem;
	},
// Date Validation Javascript
	checkDate : function (format, date) {
		var daysInFebruary = function(year){
		// February has 29 days in any year evenly divisible by four,
		// EXCEPT for centurial years which are not also divisible by 400.
			return (((year % 4 === 0) && ( year % 100 !== 0 || (year % 400 === 0))) ? 29 : 28 );
		},
		tsp = {}, sep;
		format = format.toLowerCase();
		//we search for /,-,. for the date separator
		if(format.indexOf("/") !== -1) {
			sep = "/";
		} else if(format.indexOf("-") !== -1) {
			sep = "-";
		} else if(format.indexOf(".") !== -1) {
			sep = ".";
		} else {
			sep = "/";
		}
		format = format.split(sep);
		date = date.split(sep);
		if (date.length !== 3) { return false; }
		var j=-1,yln, dln=-1, mln=-1, i;
		for(i=0;i<format.length;i++){
			var dv =  isNaN(date[i]) ? 0 : parseInt(date[i],10);
			tsp[format[i]] = dv;
			yln = format[i];
			if(yln.indexOf("y") !== -1) { j=i; }
			if(yln.indexOf("m") !== -1) { mln=i; }
			if(yln.indexOf("d") !== -1) { dln=i; }
		}
		if (format[j] === "y" || format[j] === "yyyy") {
			yln=4;
		} else if(format[j] ==="yy"){
			yln = 2;
		} else {
			yln = -1;
		}
		var daysInMonth = [0,31,29,31,30,31,30,31,31,30,31,30,31],
		strDate;
		if (j === -1) {
			return false;
		}
			strDate = tsp[format[j]].toString();
			if(yln === 2 && strDate.length === 1) {yln = 1;}
			if (strDate.length !== yln || (tsp[format[j]]===0 && date[j]!=="00")){
				return false;
			}
		if(mln === -1) {
			return false;
		}
			strDate = tsp[format[mln]].toString();
			if (strDate.length<1 || tsp[format[mln]]<1 || tsp[format[mln]]>12){
				return false;
			}
		if(dln === -1) {
			return false;
		}
			strDate = tsp[format[dln]].toString();
			if (strDate.length<1 || tsp[format[dln]]<1 || tsp[format[dln]]>31 || (tsp[format[mln]]===2 && tsp[format[dln]]>daysInFebruary(tsp[format[j]])) || tsp[format[dln]] > daysInMonth[tsp[format[mln]]]){
				return false;
			}
		return true;
	},
	isEmpty : function(val)
	{
		if (val.match(/^\s+$/) || val === "")	{
			return true;
		}
			return false;
	},
	checkTime : function(time){
	// checks only hh:ss (and optional am/pm)
		var re = /^(\d{1,2}):(\d{2})([apAP][Mm])?$/,regs;
		if(!$.jgrid.isEmpty(time))
		{
			regs = time.match(re);
			if(regs) {
				if(regs[3]) {
					if(regs[1] < 1 || regs[1] > 12) { return false; }
				} else {
					if(regs[1] > 23) { return false; }
				}
				if(regs[2] > 59) {
					return false;
				}
			} else {
				return false;
			}
		}
		return true;
	},
	checkValues : function(val, valref, customobject, nam) {
		var edtrul,i, nm, dft, len, g = this, cm = g.p.colModel;
		if(customobject === undefined) {
			if(typeof valref==='string'){
				for( i =0, len=cm.length;i<len; i++){
					if(cm[i].name===valref) {
						edtrul = cm[i].editrules;
						valref = i;
						if(cm[i].formoptions != null) { nm = cm[i].formoptions.label; }
						break;
					}
				}
			} else if(valref >=0) {
				edtrul = cm[valref].editrules;
			}
		} else {
			edtrul = customobject;
			nm = nam===undefined ? "_" : nam;
		}
		if(edtrul) {
			if(!nm) { nm = g.p.colNames != null ? g.p.colNames[valref] : cm[valref].label; }
			if(edtrul.required === true) {
				if( $.jgrid.isEmpty(val) )  { return [false,nm+": "+$.jgrid.edit.msg.required,""]; }
			}
			// force required
			var rqfield = edtrul.required === false ? false : true;
			if(edtrul.number === true) {
				if( !(rqfield === false && $.jgrid.isEmpty(val)) ) {
					if(isNaN(val)) { return [false,nm+": "+$.jgrid.edit.msg.number,""]; }
				}
			}
			if(edtrul.minValue !== undefined && !isNaN(edtrul.minValue)) {
				if (parseFloat(val) < parseFloat(edtrul.minValue) ) { return [false,nm+": "+$.jgrid.edit.msg.minValue+" "+edtrul.minValue,""];}
			}
			if(edtrul.maxValue !== undefined && !isNaN(edtrul.maxValue)) {
				if (parseFloat(val) > parseFloat(edtrul.maxValue) ) { return [false,nm+": "+$.jgrid.edit.msg.maxValue+" "+edtrul.maxValue,""];}
			}
			var filter;
			if(edtrul.email === true) {
				if( !(rqfield === false && $.jgrid.isEmpty(val)) ) {
				// taken from $ Validate plugin
					filter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
					if(!filter.test(val)) {return [false,nm+": "+$.jgrid.edit.msg.email,""];}
				}
			}
			if(edtrul.integer === true) {
				if( !(rqfield === false && $.jgrid.isEmpty(val)) ) {
					if(isNaN(val)) { return [false,nm+": "+$.jgrid.edit.msg.integer,""]; }
					if ((val % 1 !== 0) || (val.indexOf('.') !== -1)) { return [false,nm+": "+$.jgrid.edit.msg.integer,""];}
				}
			}
			if(edtrul.date === true) {
				if( !(rqfield === false && $.jgrid.isEmpty(val)) ) {
					if(cm[valref].formatoptions && cm[valref].formatoptions.newformat) {
						dft = cm[valref].formatoptions.newformat;
						if( $.jgrid.formatter.date.masks.hasOwnProperty(dft) ) {
							dft = $.jgrid.formatter.date.masks[dft];
						}
					} else {
						dft = cm[valref].datefmt || "Y-m-d";
					}
					if(!$.jgrid.checkDate (dft, val)) { return [false,nm+": "+$.jgrid.edit.msg.date+" - "+dft,""]; }
				}
			}
			if(edtrul.time === true) {
				if( !(rqfield === false && $.jgrid.isEmpty(val)) ) {
					if(!$.jgrid.checkTime (val)) { return [false,nm+": "+$.jgrid.edit.msg.date+" - hh:mm (am/pm)",""]; }
				}
			}
			if(edtrul.url === true) {
				if( !(rqfield === false && $.jgrid.isEmpty(val)) ) {
					filter = /^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i;
					if(!filter.test(val)) {return [false,nm+": "+$.jgrid.edit.msg.url,""];}
				}
			}
			if(edtrul.custom === true) {
				if( !(rqfield === false && $.jgrid.isEmpty(val)) ) {
					if($.isFunction(edtrul.custom_func)) {
						var ret = edtrul.custom_func.call(g,val,nm,valref);
						return $.isArray(ret) ? ret : [false,$.jgrid.edit.msg.customarray,""];
					}
					return [false,$.jgrid.edit.msg.customfcheck,""];
				}
			}
		}
		return [true,"",""];
	}
});
})(jQuery);
/*
 * jqFilter  jQuery jqGrid filter addon.
 * Copyright (c) 2011, Tony Tomov, tony@trirand.com
 * Dual licensed under the MIT and GPL licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 * 
 * The work is inspired from this Stefan Pirvu
 * http://www.codeproject.com/KB/scripting/json-filtering.aspx
 *
 * The filter uses JSON entities to hold filter rules and groups. Here is an example of a filter:

{ "groupOp": "AND",
      "groups" : [ 
        { "groupOp": "OR",
            "rules": [
                { "field": "name", "op": "eq", "data": "England" }, 
                { "field": "id", "op": "le", "data": "5"}
             ]
        } 
      ],
      "rules": [
        { "field": "name", "op": "eq", "data": "Romania" }, 
        { "field": "id", "op": "le", "data": "1"}
      ]
}
*/
/*jshint eqeqeq:false, eqnull:true, devel:true */
/*global jQuery */

(function ($) {
"use strict";

$.fn.jqFilter = function( arg ) {
	if (typeof arg === 'string') {
		
		var fn = $.fn.jqFilter[arg];
		if (!fn) {
			throw ("jqFilter - No such method: " + arg);
		}
		var args = $.makeArray(arguments).slice(1);
		return fn.apply(this,args);
	}

	var p = $.extend(true,{
		filter: null,
		columns: [],
		onChange : null,
		afterRedraw : null,
		checkValues : null,
		error: false,
		errmsg : "",
		errorcheck : true,
		showQuery : true,
		sopt : null,
		ops : [],
		operands : null,
		numopts : ['eq','ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni'],
		stropts : ['eq', 'ne', 'bw', 'bn', 'ew', 'en', 'cn', 'nc', 'nu', 'nn', 'in', 'ni'],
		strarr : ['text', 'string', 'blob'],
		groupOps : [{ op: "AND", text: "AND" },	{ op: "OR",  text: "OR" }],
		groupButton : true,
		ruleButtons : true,
		direction : "ltr"
	}, $.jgrid.filter, arg || {});
	return this.each( function() {
		if (this.filter) {return;}
		this.p = p;
		// setup filter in case if they is not defined
		if (this.p.filter === null || this.p.filter === undefined) {
			this.p.filter = {
				groupOp: this.p.groupOps[0].op,
				rules: [],
				groups: []
			};
		}
		var i, len = this.p.columns.length, cl,
		isIE = /msie/i.test(navigator.userAgent) && !window.opera;

		// translating the options
		this.p.initFilter = $.extend(true,{},this.p.filter);

		// set default values for the columns if they are not set
		if( !len ) {return;}
		for(i=0; i < len; i++) {
			cl = this.p.columns[i];
			if( cl.stype ) {
				// grid compatibility
				cl.inputtype = cl.stype;
			} else if(!cl.inputtype) {
				cl.inputtype = 'text';
			}
			if( cl.sorttype ) {
				// grid compatibility
				cl.searchtype = cl.sorttype;
			} else if (!cl.searchtype) {
				cl.searchtype = 'string';
			}
			if(cl.hidden === undefined) {
				// jqGrid compatibility
				cl.hidden = false;
			}
			if(!cl.label) {
				cl.label = cl.name;
			}
			if(cl.index) {
				cl.name = cl.index;
			}
			if(!cl.hasOwnProperty('searchoptions')) {
				cl.searchoptions = {};
			}
			if(!cl.hasOwnProperty('searchrules')) {
				cl.searchrules = {};
			}

		}
		if(this.p.showQuery) {
			$(this).append("<table class='queryresult ui-widget ui-widget-content' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");
		}
		var getGrid = function () {
			return $("#" + $.jgrid.jqID(p.id))[0] || null;
		};
		/*
		 *Perform checking.
		 *
		*/
		var checkData = function(val, colModelItem) {
			var ret = [true,""], $t = getGrid();
			if($.isFunction(colModelItem.searchrules)) {
				ret = colModelItem.searchrules.call($t, val, colModelItem);
			} else if($.jgrid && $.jgrid.checkValues) {
				try {
					ret = $.jgrid.checkValues.call($t, val, -1, colModelItem.searchrules, colModelItem.label);
				} catch (e) {}
			}
			if(ret && ret.length && ret[0] === false) {
				p.error = !ret[0];
				p.errmsg = ret[1];
			}
		};
		/* moving to common
		randId = function() {
			return Math.floor(Math.random()*10000).toString();
		};
		*/

		this.onchange = function (  ){
			// clear any error 
			this.p.error = false;
			this.p.errmsg="";
			return $.isFunction(this.p.onChange) ? this.p.onChange.call( this, this.p ) : false;
		};
		/*
		 * Redraw the filter every time when new field is added/deleted
		 * and field is  changed
		 */
		this.reDraw = function() {
			$("table.group:first",this).remove();
			var t = this.createTableForGroup(p.filter, null);
			$(this).append(t);
			if($.isFunction(this.p.afterRedraw) ) {
				this.p.afterRedraw.call(this, this.p);
			}
		};
		/*
		 * Creates a grouping data for the filter
		 * @param group - object
		 * @param parentgroup - object
		 */
		this.createTableForGroup = function(group, parentgroup) {
			var that = this,  i;
			// this table will hold all the group (tables) and rules (rows)
			var table = $("<table class='group ui-widget ui-widget-content' style='border:0px none;'><tbody></tbody></table>"),
			// create error message row
			align = "left";
			if(this.p.direction === "rtl") {
				align = "right";
				table.attr("dir","rtl");
			}
			if(parentgroup === null) {
				table.append("<tr class='error' style='display:none;'><th colspan='5' class='ui-state-error' align='"+align+"'></th></tr>");
			}

			var tr = $("<tr></tr>");
			table.append(tr);
			// this header will hold the group operator type and group action buttons for
			// creating subgroup "+ {}", creating rule "+" or deleting the group "-"
			var th = $("<th colspan='5' align='"+align+"'></th>");
			tr.append(th);

			if(this.p.ruleButtons === true) {
			// dropdown for: choosing group operator type
			var groupOpSelect = $("<select class='opsel'></select>");
			th.append(groupOpSelect);
			// populate dropdown with all posible group operators: or, and
			var str= "", selected;
			for (i = 0; i < p.groupOps.length; i++) {
				selected =  group.groupOp === that.p.groupOps[i].op ? " selected='selected'" :"";
				str += "<option value='"+that.p.groupOps[i].op+"'" + selected+">"+that.p.groupOps[i].text+"</option>";
			}

			groupOpSelect
			.append(str)
			.bind('change',function() {
				group.groupOp = $(groupOpSelect).val();
				that.onchange(); // signals that the filter has changed
			});
			}
			// button for adding a new subgroup
			var inputAddSubgroup ="<span></span>";
			if(this.p.groupButton) {
				inputAddSubgroup = $("<input type='button' value='+ {}' title='Add subgroup' class='add-group'/>");
				inputAddSubgroup.bind('click',function() {
					if (group.groups === undefined ) {
						group.groups = [];
					}

					group.groups.push({
						groupOp: p.groupOps[0].op,
						rules: [],
						groups: []
					}); // adding a new group

					that.reDraw(); // the html has changed, force reDraw

					that.onchange(); // signals that the filter has changed
					return false;
				});
			}
			th.append(inputAddSubgroup);
			if(this.p.ruleButtons === true) {
			// button for adding a new rule
			var inputAddRule = $("<input type='button' value='+' title='Add rule' class='add-rule ui-add'/>"), cm;
			inputAddRule.bind('click',function() {
				//if(!group) { group = {};}
				if (group.rules === undefined) {
					group.rules = [];
				}
				for (i = 0; i < that.p.columns.length; i++) {
				// but show only serchable and serchhidden = true fields
					var searchable = (that.p.columns[i].search === undefined) ?  true: that.p.columns[i].search,
					hidden = (that.p.columns[i].hidden === true),
					ignoreHiding = (that.p.columns[i].searchoptions.searchhidden === true);
					if ((ignoreHiding && searchable) || (searchable && !hidden)) {
						cm = that.p.columns[i];
						break;
					}
				}
				
				var opr;
				if( cm.searchoptions.sopt ) {opr = cm.searchoptions.sopt;}
				else if(that.p.sopt) { opr= that.p.sopt; }
				else if  ( $.inArray(cm.searchtype, that.p.strarr) !== -1 ) {opr = that.p.stropts;}
				else {opr = that.p.numopts;}

				group.rules.push({
					field: cm.name,
					op: opr[0],
					data: ""
				}); // adding a new rule

				that.reDraw(); // the html has changed, force reDraw
				// for the moment no change have been made to the rule, so
				// this will not trigger onchange event
				return false;
			});
			th.append(inputAddRule);
			}

			// button for delete the group
			if (parentgroup !== null) { // ignore the first group
				var inputDeleteGroup = $("<input type='button' value='-' title='Delete group' class='delete-group'/>");
				th.append(inputDeleteGroup);
				inputDeleteGroup.bind('click',function() {
				// remove group from parent
					for (i = 0; i < parentgroup.groups.length; i++) {
						if (parentgroup.groups[i] === group) {
							parentgroup.groups.splice(i, 1);
							break;
						}
					}

					that.reDraw(); // the html has changed, force reDraw

					that.onchange(); // signals that the filter has changed
					return false;
				});
			}

			// append subgroup rows
			if (group.groups !== undefined) {
				for (i = 0; i < group.groups.length; i++) {
					var trHolderForSubgroup = $("<tr></tr>");
					table.append(trHolderForSubgroup);

					var tdFirstHolderForSubgroup = $("<td class='first'></td>");
					trHolderForSubgroup.append(tdFirstHolderForSubgroup);

					var tdMainHolderForSubgroup = $("<td colspan='4'></td>");
					tdMainHolderForSubgroup.append(this.createTableForGroup(group.groups[i], group));
					trHolderForSubgroup.append(tdMainHolderForSubgroup);
				}
			}
			if(group.groupOp === undefined) {
				group.groupOp = that.p.groupOps[0].op;
			}

			// append rules rows
			if (group.rules !== undefined) {
				for (i = 0; i < group.rules.length; i++) {
					table.append(
                       this.createTableRowForRule(group.rules[i], group)
					);
				}
			}

			return table;
		};
		/*
		 * Create the rule data for the filter
		 */
		this.createTableRowForRule = function(rule, group ) {
			// save current entity in a variable so that it could
			// be referenced in anonimous method calls

			var that=this, $t = getGrid(), tr = $("<tr></tr>"),
			//document.createElement("tr"),

			// first column used for padding
			//tdFirstHolderForRule = document.createElement("td"),
			i, op, trpar, cm, str="", selected;
			//tdFirstHolderForRule.setAttribute("class", "first");
			tr.append("<td class='first'></td>");


			// create field container
			var ruleFieldTd = $("<td class='columns'></td>");
			tr.append(ruleFieldTd);


			// dropdown for: choosing field
			var ruleFieldSelect = $("<select></select>"), ina, aoprs = [];
			ruleFieldTd.append(ruleFieldSelect);
			ruleFieldSelect.bind('change',function() {
				rule.field = $(ruleFieldSelect).val();

				trpar = $(this).parents("tr:first");
				for (i=0;i<that.p.columns.length;i++) {
					if(that.p.columns[i].name ===  rule.field) {
						cm = that.p.columns[i];
						break;
					}
				}
				if(!cm) {return;}
				cm.searchoptions.id = $.jgrid.randId();
				if(isIE && cm.inputtype === "text") {
					if(!cm.searchoptions.size) {
						cm.searchoptions.size = 10;
					}
				}
				var elm = $.jgrid.createEl.call($t, cm.inputtype,cm.searchoptions, "", true, that.p.ajaxSelectOptions || {}, true);
				$(elm).addClass("input-elm");
				//that.createElement(rule, "");

				if( cm.searchoptions.sopt ) {op = cm.searchoptions.sopt;}
				else if(that.p.sopt) { op= that.p.sopt; }
				else if  ($.inArray(cm.searchtype, that.p.strarr) !== -1) {op = that.p.stropts;}
				else {op = that.p.numopts;}
				// operators
				var s ="", so = 0;
				aoprs = [];
				$.each(that.p.ops, function() { aoprs.push(this.oper); });
				for ( i = 0 ; i < op.length; i++) {
					ina = $.inArray(op[i],aoprs);
					if(ina !== -1) {
						if(so===0) {
							rule.op = that.p.ops[ina].oper;
						}
						s += "<option value='"+that.p.ops[ina].oper+"'>"+that.p.ops[ina].text+"</option>";
						so++;
					}
				}
				$(".selectopts",trpar).empty().append( s );
				$(".selectopts",trpar)[0].selectedIndex = 0;
				if( $.jgrid.msie && $.jgrid.msiever() < 9) {
					var sw = parseInt($("select.selectopts",trpar)[0].offsetWidth, 10) + 1;
					$(".selectopts",trpar).width( sw );
					$(".selectopts",trpar).css("width","auto");
				}
				// data
				$(".data",trpar).empty().append( elm );
				$.jgrid.bindEv.call($t, elm, cm.searchoptions);
				$(".input-elm",trpar).bind('change',function( e ) {
					var elem = e.target;
					rule.data = elem.nodeName.toUpperCase() === "SPAN" && cm.searchoptions && $.isFunction(cm.searchoptions.custom_value) ?
						cm.searchoptions.custom_value.call($t, $(elem).children(".customelement:first"), 'get') : elem.value;
					that.onchange(); // signals that the filter has changed
				});
				setTimeout(function(){ //IE, Opera, Chrome
				rule.data = $(elm).val();
				that.onchange();  // signals that the filter has changed
				}, 0);
			});

			// populate drop down with user provided column definitions
			var j=0;
			for (i = 0; i < that.p.columns.length; i++) {
				// but show only serchable and serchhidden = true fields
				var searchable = (that.p.columns[i].search === undefined) ? true: that.p.columns[i].search,
				hidden = (that.p.columns[i].hidden === true),
				ignoreHiding = (that.p.columns[i].searchoptions.searchhidden === true);
				if ((ignoreHiding && searchable) || (searchable && !hidden)) {
					selected = "";
					if(rule.field === that.p.columns[i].name) {
						selected = " selected='selected'";
						j=i;
					}
					str += "<option value='"+that.p.columns[i].name+"'" +selected+">"+that.p.columns[i].label+"</option>";
				}
			}
			ruleFieldSelect.append( str );


			// create operator container
			var ruleOperatorTd = $("<td class='operators'></td>");
			tr.append(ruleOperatorTd);
			cm = p.columns[j];
			// create it here so it can be referentiated in the onchange event
			//var RD = that.createElement(rule, rule.data);
			cm.searchoptions.id = $.jgrid.randId();
			if(isIE && cm.inputtype === "text") {
				if(!cm.searchoptions.size) {
					cm.searchoptions.size = 10;
				}
			}
			var ruleDataInput = $.jgrid.createEl.call($t, cm.inputtype,cm.searchoptions, rule.data, true, that.p.ajaxSelectOptions || {}, true);
			if(rule.op === 'nu' || rule.op === 'nn') {
				$(ruleDataInput).attr('readonly','true');
				$(ruleDataInput).attr('disabled','true');
			} //retain the state of disabled text fields in case of null ops
			// dropdown for: choosing operator
			var ruleOperatorSelect = $("<select class='selectopts'></select>");
			ruleOperatorTd.append(ruleOperatorSelect);
			ruleOperatorSelect.bind('change',function() {
				rule.op = $(ruleOperatorSelect).val();
				trpar = $(this).parents("tr:first");
				var rd = $(".input-elm",trpar)[0];
				if (rule.op === "nu" || rule.op === "nn") { // disable for operator "is null" and "is not null"
					rule.data = "";
					if(rd.tagName.toUpperCase() !== 'SELECT') rd.value = "";
					rd.setAttribute("readonly", "true");
					rd.setAttribute("disabled", "true");
				} else {
					if(rd.tagName.toUpperCase() === 'SELECT') rule.data = rd.value;
					rd.removeAttribute("readonly");
					rd.removeAttribute("disabled");
				}

				that.onchange();  // signals that the filter has changed
			});

			// populate drop down with all available operators
			if( cm.searchoptions.sopt ) {op = cm.searchoptions.sopt;}
			else if(that.p.sopt) { op= that.p.sopt; }
			else if  ($.inArray(cm.searchtype, that.p.strarr) !== -1) {op = that.p.stropts;}
			else {op = that.p.numopts;}
			str="";
			$.each(that.p.ops, function() { aoprs.push(this.oper); });
			for ( i = 0; i < op.length; i++) {
				ina = $.inArray(op[i],aoprs);
				if(ina !== -1) {
					selected = rule.op === that.p.ops[ina].oper ? " selected='selected'" : "";
					str += "<option value='"+that.p.ops[ina].oper+"'"+selected+">"+that.p.ops[ina].text+"</option>";
				}
			}
			ruleOperatorSelect.append( str );
			// create data container
			var ruleDataTd = $("<td class='data'></td>");
			tr.append(ruleDataTd);

			// textbox for: data
			// is created previously
			//ruleDataInput.setAttribute("type", "text");
			ruleDataTd.append(ruleDataInput);
			$.jgrid.bindEv.call($t, ruleDataInput, cm.searchoptions);
			$(ruleDataInput)
			.addClass("input-elm")
			.bind('change', function() {
				rule.data = cm.inputtype === 'custom' ? cm.searchoptions.custom_value.call($t, $(this).children(".customelement:first"),'get') : $(this).val();
				that.onchange(); // signals that the filter has changed
			});

			// create action container
			var ruleDeleteTd = $("<td></td>");
			tr.append(ruleDeleteTd);

			// create button for: delete rule
			if(this.p.ruleButtons === true) {
			var ruleDeleteInput = $("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del'/>");
			ruleDeleteTd.append(ruleDeleteInput);
			//$(ruleDeleteInput).html("").height(20).width(30).button({icons: {  primary: "ui-icon-minus", text:false}});
			ruleDeleteInput.bind('click',function() {
				// remove rule from group
				for (i = 0; i < group.rules.length; i++) {
					if (group.rules[i] === rule) {
						group.rules.splice(i, 1);
						break;
					}
				}

				that.reDraw(); // the html has changed, force reDraw

				that.onchange(); // signals that the filter has changed
				return false;
			});
			}
			return tr;
		};

		this.getStringForGroup = function(group) {
			var s = "(", index;
			if (group.groups !== undefined) {
				for (index = 0; index < group.groups.length; index++) {
					if (s.length > 1) {
						s += " " + group.groupOp + " ";
					}
					try {
						s += this.getStringForGroup(group.groups[index]);
					} catch (eg) {alert(eg);}
				}
			}

			if (group.rules !== undefined) {
				try{
					for (index = 0; index < group.rules.length; index++) {
						if (s.length > 1) {
							s += " " + group.groupOp + " ";
						}
						s += this.getStringForRule(group.rules[index]);
					}
				} catch (e) {alert(e);}
			}

			s += ")";

			if (s === "()") {
				return ""; // ignore groups that don't have rules
			}
			return s;
		};
		this.getStringForRule = function(rule) {
			var opUF = "",opC="", i, cm, ret, val,
			numtypes = ['int', 'integer', 'float', 'number', 'currency']; // jqGrid
			for (i = 0; i < this.p.ops.length; i++) {
				if (this.p.ops[i].oper === rule.op) {
					opUF = this.p.operands.hasOwnProperty(rule.op) ? this.p.operands[rule.op] : "";
					opC = this.p.ops[i].oper;
					break;
				}
			}
			for (i=0; i<this.p.columns.length; i++) {
				if(this.p.columns[i].name === rule.field) {
					cm = this.p.columns[i];
					break;
				}
			}
			if (cm == undefined) { return ""; }
			val = rule.data;
			if(opC === 'bw' || opC === 'bn') { val = val+"%"; }
			if(opC === 'ew' || opC === 'en') { val = "%"+val; }
			if(opC === 'cn' || opC === 'nc') { val = "%"+val+"%"; }
			if(opC === 'in' || opC === 'ni') { val = " ("+val+")"; }
			if(p.errorcheck) { checkData(rule.data, cm); }
			if($.inArray(cm.searchtype, numtypes) !== -1 || opC === 'nn' || opC === 'nu') { ret = rule.field + " " + opUF + " " + val; }
			else { ret = rule.field + " " + opUF + " \"" + val + "\""; }
			return ret;
		};
		this.resetFilter = function () {
			this.p.filter = $.extend(true,{},this.p.initFilter);
			this.reDraw();
			this.onchange();
		};
		this.hideError = function() {
			$("th.ui-state-error", this).html("");
			$("tr.error", this).hide();
		};
		this.showError = function() {
			$("th.ui-state-error", this).html(this.p.errmsg);
			$("tr.error", this).show();
		};
		this.toUserFriendlyString = function() {
			return this.getStringForGroup(p.filter);
		};
		this.toString = function() {
			// this will obtain a string that can be used to match an item.
			var that = this;
			function getStringRule(rule) {
				if(that.p.errorcheck) {
					var i, cm;
					for (i=0; i<that.p.columns.length; i++) {
						if(that.p.columns[i].name === rule.field) {
							cm = that.p.columns[i];
							break;
						}
					}
					if(cm) {checkData(rule.data, cm);}
				}
				return rule.op + "(item." + rule.field + ",'" + rule.data + "')";
			}

			function getStringForGroup(group) {
				var s = "(", index;

				if (group.groups !== undefined) {
					for (index = 0; index < group.groups.length; index++) {
						if (s.length > 1) {
							if (group.groupOp === "OR") {
								s += " || ";
							}
							else {
								s += " && ";
							}
						}
						s += getStringForGroup(group.groups[index]);
					}
				}

				if (group.rules !== undefined) {
					for (index = 0; index < group.rules.length; index++) {
						if (s.length > 1) {
							if (group.groupOp === "OR") {
								s += " || ";
							}
							else  {
								s += " && ";
							}
						}
						s += getStringRule(group.rules[index]);
					}
				}

				s += ")";

				if (s === "()") {
					return ""; // ignore groups that don't have rules
				}
				return s;
			}

			return getStringForGroup(this.p.filter);
		};

		// Here we init the filter
		this.reDraw();

		if(this.p.showQuery) {
			this.onchange();
		}
		// mark is as created so that it will not be created twice on this element
		this.filter = true;
	});
};
$.extend($.fn.jqFilter,{
	/*
	 * Return SQL like string. Can be used directly
	 */
	toSQLString : function()
	{
		var s ="";
		this.each(function(){
			s = this.toUserFriendlyString();
		});
		return s;
	},
	/*
	 * Return filter data as object.
	 */
	filterData : function()
	{
		var s;
		this.each(function(){
			s = this.p.filter;
		});
		return s;

	},
	getParameter : function (param) {
		if(param !== undefined) {
			if (this.p.hasOwnProperty(param) ) {
				return this.p[param];
			}
		}
		return this.p;
	},
	resetFilter: function() {
		return this.each(function(){
			this.resetFilter();
		});
	},
	addFilter: function (pfilter) {
		if (typeof pfilter === "string") {
			pfilter = $.jgrid.parse( pfilter );
	}
		this.each(function(){
			this.p.filter = pfilter;
			this.reDraw();
			this.onchange();
		});
	}

});
})(jQuery);
/*jshint eqeqeq:false, eqnull:true, devel:true */
/*global xmlJsonClass, jQuery */
(function($){
/**
 * jqGrid extension for form editing Grid Data
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
**/
"use strict";
var rp_ge = {};
$.jgrid.extend({
	searchGrid : function (p) {
		p = $.extend(true, {
			recreateFilter: false,
			drag: true,
			sField:'searchField',
			sValue:'searchString',
			sOper: 'searchOper',
			sFilter: 'filters',
			loadDefaults: true, // this options activates loading of default filters from grid's postData for Multipe Search only.
			beforeShowSearch: null,
			afterShowSearch : null,
			onInitializeSearch: null,
			afterRedraw : null,
			afterChange: null,
			closeAfterSearch : false,
			closeAfterReset: false,
			closeOnEscape : false,
			searchOnEnter : false,
			multipleSearch : false,
			multipleGroup : false,
			//cloneSearchRowOnAdd: true,
			top : 0,
			left: 0,
			jqModal : true,
			modal: false,
			resize : true,
			width: 450,
			height: 'auto',
			dataheight: 'auto',
			showQuery: false,
			errorcheck : true,
			sopt: null,
			stringResult: undefined,
			onClose : null,
			onSearch : null,
			onReset : null,
			toTop : true,
			overlay : 30,
			columns : [],
			tmplNames : null,
			tmplFilters : null,
			tmplLabel : ' Template: ',
			showOnLoad: false,
			layer: null,
			operands : { "eq" :"=", "ne":"<>","lt":"<","le":"<=","gt":">","ge":">=","bw":"LIKE","bn":"NOT LIKE","in":"IN","ni":"NOT IN","ew":"LIKE","en":"NOT LIKE","cn":"LIKE","nc":"NOT LIKE","nu":"IS NULL","nn":"ISNOT NULL"}
		}, $.jgrid.search, p || {});
		return this.each(function() {
			var $t = this;
			if(!$t.grid) {return;}
			var fid = "fbox_"+$t.p.id,
			showFrm = true,
			mustReload = true,
			IDs = {themodal:'searchmod'+fid,modalhead:'searchhd'+fid,modalcontent:'searchcnt'+fid, scrollelm : fid},
			defaultFilters  = $t.p.postData[p.sFilter];
			if(typeof defaultFilters === "string") {
				defaultFilters = $.jgrid.parse( defaultFilters );
			}
			if(p.recreateFilter === true) {
				$("#"+$.jgrid.jqID(IDs.themodal)).remove();
			}
			function showFilter(_filter) {
				showFrm = $($t).triggerHandler("jqGridFilterBeforeShow", [_filter]);
				if(showFrm === undefined) {
					showFrm = true;
				}
				if(showFrm && $.isFunction(p.beforeShowSearch)) {
					showFrm = p.beforeShowSearch.call($t,_filter);
				}
				if(showFrm) {
					$.jgrid.viewModal("#"+$.jgrid.jqID(IDs.themodal),{gbox:"#gbox_"+$.jgrid.jqID(fid),jqm:p.jqModal, modal:p.modal, overlay: p.overlay, toTop: p.toTop});
					$($t).triggerHandler("jqGridFilterAfterShow", [_filter]);
					if($.isFunction(p.afterShowSearch)) {
						p.afterShowSearch.call($t, _filter);
					}
				}
			}
			if ( $("#"+$.jgrid.jqID(IDs.themodal))[0] !== undefined ) {
				showFilter($("#fbox_"+$.jgrid.jqID(+$t.p.id)));
			} else {
				var fil = $("<div><div id='"+fid+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+$.jgrid.jqID($t.p.id)),
				align = "left", butleft =""; 
				if($t.p.direction === "rtl") {
					align = "right";
					butleft = " style='text-align:left'";
					fil.attr("dir","rtl");
				}
				var columns = $.extend([],$t.p.colModel),
				bS  ="<a id='"+fid+"_search' class='fm-button ui-state-default ui-corner-all fm-button-icon-right ui-reset'><span class='ui-icon ui-icon-search'></span>"+p.Find+"</a>",
				bC  ="<a id='"+fid+"_reset' class='fm-button ui-state-default ui-corner-all fm-button-icon-left ui-search'><span class='ui-icon ui-icon-arrowreturnthick-1-w'></span>"+p.Reset+"</a>",
				bQ = "", tmpl="", colnm, found = false, bt, cmi=-1;
				if(p.showQuery) {
					bQ ="<a id='"+fid+"_query' class='fm-button ui-state-default ui-corner-all fm-button-icon-left'><span class='ui-icon ui-icon-comment'></span>Query</a>";
				}
				if(!p.columns.length) {
					$.each(columns, function(i,n){
						if(!n.label) {
							n.label = $t.p.colNames[i];
						}
						// find first searchable column and set it if no default filter
						if(!found) {
							var searchable = (n.search === undefined) ?  true: n.search ,
							hidden = (n.hidden === true),
							ignoreHiding = (n.searchoptions && n.searchoptions.searchhidden === true);
							if ((ignoreHiding && searchable) || (searchable && !hidden)) {
								found = true;
								colnm = n.index || n.name;
								cmi =i;
							}
						}
					});
				} else {
					columns = p.columns;
					cmi = 0;
					colnm = columns[0].index || columns[0].name;
				}
				// old behaviour
				if( (!defaultFilters && colnm) || p.multipleSearch === false  ) {
					var cmop = "eq";
					if(cmi >=0 && columns[cmi].searchoptions && columns[cmi].searchoptions.sopt) {
						cmop = columns[cmi].searchoptions.sopt[0];
					} else if(p.sopt && p.sopt.length) {
						cmop = p.sopt[0];
					}
					defaultFilters = {groupOp: "AND", rules: [{field: colnm, op: cmop, data: ""}]};
				}
				found = false;
				if(p.tmplNames && p.tmplNames.length) {
					found = true;
					tmpl = p.tmplLabel;
					tmpl += "<select class='ui-template'>";
					tmpl += "<option value='default'>Default</option>";
					$.each(p.tmplNames, function(i,n){
						tmpl += "<option value='"+i+"'>"+n+"</option>";
					});
					tmpl += "</select>";
				}

				bt = "<table class='EditTable' style='border:0px none;margin-top:5px' id='"+fid+"_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr><td class='EditButton' style='text-align:"+align+"'>"+bC+tmpl+"</td><td class='EditButton' "+butleft+">"+bQ+bS+"</td></tr></tbody></table>";
				fid = $.jgrid.jqID( fid);
				$("#"+fid).jqFilter({
					columns : columns,
					filter: p.loadDefaults ? defaultFilters : null,
					showQuery: p.showQuery,
					errorcheck : p.errorcheck,
					sopt: p.sopt,
					groupButton : p.multipleGroup,
					ruleButtons : p.multipleSearch,
					afterRedraw : p.afterRedraw,
					ops : p.odata,
					operands : p.operands,
					ajaxSelectOptions: $t.p.ajaxSelectOptions,
					groupOps: p.groupOps,
					onChange : function() {
						if(this.p.showQuery) {
							$('.query',this).html(this.toUserFriendlyString());
						}
						if ($.isFunction(p.afterChange)) {
							p.afterChange.call($t, $("#"+fid), p);
						}
					},
					direction : $t.p.direction,
					id: $t.p.id
				});
				fil.append( bt );
				if(found && p.tmplFilters && p.tmplFilters.length) {
					$(".ui-template", fil).bind('change', function(){
						var curtempl = $(this).val();
						if(curtempl==="default") {
							$("#"+fid).jqFilter('addFilter', defaultFilters);
						} else {
							$("#"+fid).jqFilter('addFilter', p.tmplFilters[parseInt(curtempl,10)]);
						}
						return false;
					});
				}
				if(p.multipleGroup === true) {p.multipleSearch = true;}
				$($t).triggerHandler("jqGridFilterInitialize", [$("#"+fid)]);
				if($.isFunction(p.onInitializeSearch) ) {
					p.onInitializeSearch.call($t, $("#"+fid));
				}
				p.gbox = "#gbox_"+fid;
				if (p.layer) {
					$.jgrid.createModal(IDs ,fil,p,"#gview_"+$.jgrid.jqID($t.p.id),$("#gbox_"+$.jgrid.jqID($t.p.id))[0], "#"+$.jgrid.jqID(p.layer), {position: "relative"});
				} else {
					$.jgrid.createModal(IDs ,fil,p,"#gview_"+$.jgrid.jqID($t.p.id),$("#gbox_"+$.jgrid.jqID($t.p.id))[0]);
				}
				if (p.searchOnEnter || p.closeOnEscape) {
					$("#"+$.jgrid.jqID(IDs.themodal)).keydown(function (e) {
						var $target = $(e.target);
						if (p.searchOnEnter && e.which === 13 && // 13 === $.ui.keyCode.ENTER
								!$target.hasClass('add-group') && !$target.hasClass('add-rule') &&
								!$target.hasClass('delete-group') && !$target.hasClass('delete-rule') &&
								(!$target.hasClass("fm-button") || !$target.is("[id$=_query]"))) {
							$("#"+fid+"_search").click();
							return false;
						}
						if (p.closeOnEscape && e.which === 27) { // 27 === $.ui.keyCode.ESCAPE
							$("#"+$.jgrid.jqID(IDs.modalhead)).find(".ui-jqdialog-titlebar-close").click();
							return false;
						}
					});
				}
				if(bQ) {
					$("#"+fid+"_query").bind('click', function(){
						$(".queryresult", fil).toggle();
						return false;
					});
				}
				if (p.stringResult===undefined) {
					// to provide backward compatibility, inferring stringResult value from multipleSearch
					p.stringResult = p.multipleSearch;
				}
				$("#"+fid+"_search").bind('click', function(){
					var fl = $("#"+fid), sdata={}, res, filters;
					fl.find(".input-elm:focus").change();
					filters = fl.jqFilter('filterData');
					if(p.errorcheck) {
						fl[0].hideError();
						if(!p.showQuery) {fl.jqFilter('toSQLString');}
						if(fl[0].p.error) {
							fl[0].showError();
							return false;
						}
					}

					if(p.stringResult) {
						try {
							// xmlJsonClass or JSON.stringify
							res = xmlJsonClass.toJson(filters, '', '', false);
						} catch (e) {
							try {
								res = JSON.stringify(filters);
							} catch (e2) { }
						}
						if(typeof res==="string") {
							sdata[p.sFilter] = res;
							$.each([p.sField,p.sValue, p.sOper], function() {sdata[this] = "";});
						}
					} else {
						if(p.multipleSearch) {
							sdata[p.sFilter] = filters;
							$.each([p.sField,p.sValue, p.sOper], function() {sdata[this] = "";});
						} else {
							sdata[p.sField] = filters.rules[0].field;
							sdata[p.sValue] = filters.rules[0].data;
							sdata[p.sOper] = filters.rules[0].op;
							sdata[p.sFilter] = "";
						}
					}
					$t.p.search = true;
					$.extend($t.p.postData,sdata);
					mustReload = $($t).triggerHandler("jqGridFilterSearch");
					if( mustReload === undefined) {
						mustReload = true;
					}
					if(mustReload && $.isFunction(p.onSearch) ) {
						mustReload = p.onSearch.call($t, $t.p.filters);
					}
					if (mustReload !== false) {
						$($t).trigger("reloadGrid",[{page:1}]);
					}
					if(p.closeAfterSearch) {
						$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID($t.p.id),jqm:p.jqModal,onClose: p.onClose});
					}
					return false;
				});
				$("#"+fid+"_reset").bind('click', function(){
					var sdata={},
					fl = $("#"+fid);
					$t.p.search = false;
					$t.p.resetsearch =  true;
					if(p.multipleSearch===false) {
						sdata[p.sField] = sdata[p.sValue] = sdata[p.sOper] = "";
					} else {
						sdata[p.sFilter] = "";
					}
					fl[0].resetFilter();
					if(found) {
						$(".ui-template", fil).val("default");
					}
					$.extend($t.p.postData,sdata);
					mustReload = $($t).triggerHandler("jqGridFilterReset");
					if(mustReload === undefined) {
						mustReload = true;
					}
					if(mustReload && $.isFunction(p.onReset) ) {
						mustReload = p.onReset.call($t);
					}
					if(mustReload !== false) {
						$($t).trigger("reloadGrid",[{page:1}]);
					}
					if (p.closeAfterReset) {
						$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID($t.p.id),jqm:p.jqModal,onClose: p.onClose});
					}
					return false;
				});
				showFilter($("#"+fid));
				$(".fm-button:not(.ui-state-disabled)",fil).hover(
					function(){$(this).addClass('ui-state-hover');},
					function(){$(this).removeClass('ui-state-hover');}
				);
			}
		});
	},
	editGridRow : function(rowid, p){
		p = $.extend(true, {
			top : 0,
			left: 0,
			width: 300,
			datawidth: 'auto',
			height: 'auto',
			dataheight: 'auto',
			modal: false,
			overlay : 30,
			drag: true,
			resize: true,
			url: null,
			mtype : "POST",
			clearAfterAdd :true,
			closeAfterEdit : false,
			reloadAfterSubmit : true,
			onInitializeForm: null,
			beforeInitData: null,
			beforeShowForm: null,
			afterShowForm: null,
			beforeSubmit: null,
			afterSubmit: null,
			onclickSubmit: null,
			afterComplete: null,
			onclickPgButtons : null,
			afterclickPgButtons: null,
			editData : {},
			recreateForm : false,
			jqModal : true,
			closeOnEscape : false,
			addedrow : "first",
			topinfo : '',
			bottominfo: '',
			saveicon : [],
			closeicon : [],
			savekey: [false,13],
			navkeys: [false,38,40],
			checkOnSubmit : false,
			checkOnUpdate : false,
			_savedData : {},
			processing : false,
			onClose : null,
			ajaxEditOptions : {},
			serializeEditData : null,
			viewPagerButtons : true,
			overlayClass : 'ui-widget-overlay'
		}, $.jgrid.edit, p || {});
		rp_ge[$(this)[0].p.id] = p;
		return this.each(function(){
			var $t = this;
			if (!$t.grid || !rowid) {return;}
			var gID = $t.p.id,
			frmgr = "FrmGrid_"+gID, frmtborg = "TblGrid_"+gID, frmtb = "#"+$.jgrid.jqID(frmtborg), 
			IDs = {themodal:'editmod'+gID,modalhead:'edithd'+gID,modalcontent:'editcnt'+gID, scrollelm : frmgr},
			onBeforeShow = $.isFunction(rp_ge[$t.p.id].beforeShowForm) ? rp_ge[$t.p.id].beforeShowForm : false,
			onAfterShow = $.isFunction(rp_ge[$t.p.id].afterShowForm) ? rp_ge[$t.p.id].afterShowForm : false,
			onBeforeInit = $.isFunction(rp_ge[$t.p.id].beforeInitData) ? rp_ge[$t.p.id].beforeInitData : false,
			onInitializeForm = $.isFunction(rp_ge[$t.p.id].onInitializeForm) ? rp_ge[$t.p.id].onInitializeForm : false,
			showFrm = true,
			maxCols = 1, maxRows=0,	postdata, diff, frmoper;
			frmgr = $.jgrid.jqID(frmgr);
			if (rowid === "new") {
				rowid = "_empty";
				frmoper = "add";
				p.caption=rp_ge[$t.p.id].addCaption;
			} else {
				p.caption=rp_ge[$t.p.id].editCaption;
				frmoper = "edit";
			}
			if(!p.recreateForm) {
				if( $($t).data("formProp") ) {
					$.extend(rp_ge[$(this)[0].p.id], $($t).data("formProp"));
				}
			}
			var closeovrl = true;
			if(p.checkOnUpdate && p.jqModal && !p.modal) {
				closeovrl = false;
			}
			function getFormData(){
				$(frmtb+" > tbody > tr > td > .FormElement").each(function() {
					var celm = $(".customelement", this);
					if (celm.length) {
						var  elem = celm[0], nm = $(elem).attr('name');
						$.each($t.p.colModel, function(){
							if(this.name === nm && this.editoptions && $.isFunction(this.editoptions.custom_value)) {
								try {
									postdata[nm] = this.editoptions.custom_value.call($t, $("#"+$.jgrid.jqID(nm),frmtb),'get');
									if (postdata[nm] === undefined) {throw "e1";}
								} catch (e) {
									if (e==="e1") {$.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.novalue,$.jgrid.edit.bClose);}
									else {$.jgrid.info_dialog($.jgrid.errors.errcap,e.message,$.jgrid.edit.bClose);}
								}
								return true;
							}
						});
					} else {
					switch ($(this).get(0).type) {
						case "checkbox":
							if($(this).is(":checked")) {
								postdata[this.name]= $(this).val();
							}else {
								var ofv = $(this).attr("offval");
								postdata[this.name]= ofv;
							}
						break;
						case "select-one":
							postdata[this.name]= $("option:selected",this).val();
						break;
						case "select-multiple":
							postdata[this.name]= $(this).val();
							if(postdata[this.name]) {postdata[this.name] = postdata[this.name].join(",");}
							else {postdata[this.name] ="";}
							var selectedText = [];
							$("option:selected",this).each(
								function(i,selected){
									selectedText[i] = $(selected).text();
								}
							);
						break;
						case "password":
						case "text":
						case "textarea":
						case "button":
							postdata[this.name] = $(this).val();

						break;
					}
					if($t.p.autoencode) {postdata[this.name] = $.jgrid.htmlEncode(postdata[this.name]);}
					}
				});
				return true;
			}
			function createData(rowid,obj,tb,maxcols){
				var nm, hc,trdata, cnt=0,tmp, dc,elc, retpos=[], ind=false,
				tdtmpl = "<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>", tmpl="", i; //*2
				for (i =1; i<=maxcols;i++) {
					tmpl += tdtmpl;
				}
				if(rowid !== '_empty') {
					ind = $(obj).jqGrid("getInd",rowid);
				}
				$(obj.p.colModel).each( function(i) {
					nm = this.name;
					// hidden fields are included in the form
					if(this.editrules && this.editrules.edithidden === true) {
						hc = false;
					} else {
						hc = this.hidden === true ? true : false;
					}
					dc = hc ? "style='display:none'" : "";
					if ( nm !== 'cb' && nm !== 'subgrid' && this.editable===true && nm !== 'rn') {
						if(ind === false) {
							tmp = "";
						} else {
							if(nm === obj.p.ExpandColumn && obj.p.treeGrid === true) {
								tmp = $("td[role='gridcell']:eq("+i+")",obj.rows[ind]).text();
							} else {
								try {
									tmp =  $.unformat.call(obj, $("td[role='gridcell']:eq("+i+")",obj.rows[ind]),{rowId:rowid, colModel:this},i);
								} catch (_) {
									tmp =  (this.edittype && this.edittype === "textarea") ? $("td[role='gridcell']:eq("+i+")",obj.rows[ind]).text() : $("td[role='gridcell']:eq("+i+")",obj.rows[ind]).html();
								}
								if(!tmp || tmp === "&nbsp;" || tmp === "&#160;" || (tmp.length===1 && tmp.charCodeAt(0)===160) ) {tmp='';}
							}
						}
						var opt = $.extend({}, this.editoptions || {} ,{id:nm,name:nm}),
						frmopt = $.extend({}, {elmprefix:'',elmsuffix:'',rowabove:false,rowcontent:''}, this.formoptions || {}),
						rp = parseInt(frmopt.rowpos,10) || cnt+1,
						cp = parseInt((parseInt(frmopt.colpos,10) || 1)*2,10);
						if(rowid === "_empty" && opt.defaultValue ) {
							tmp = $.isFunction(opt.defaultValue) ? opt.defaultValue.call($t) : opt.defaultValue;
						}
						if(!this.edittype) {this.edittype = "text";}
						if($t.p.autoencode) {tmp = $.jgrid.htmlDecode(tmp);}
						elc = $.jgrid.createEl.call($t,this.edittype,opt,tmp,false,$.extend({},$.jgrid.ajaxOptions,obj.p.ajaxSelectOptions || {}));
						//if(tmp === "" && this.edittype == "checkbox") {tmp = $(elc).attr("offval");}
						//if(tmp === "" && this.edittype == "select") {tmp = $("option:eq(0)",elc).text();}
						if(rp_ge[$t.p.id].checkOnSubmit || rp_ge[$t.p.id].checkOnUpdate) {rp_ge[$t.p.id]._savedData[nm] = tmp;}
						$(elc).addClass("FormElement");
						if( $.inArray(this.edittype, ['text','textarea','password','select']) > -1) {
							$(elc).addClass("ui-widget-content ui-corner-all");
						}
						trdata = $(tb).find("tr[rowpos="+rp+"]");
						if(frmopt.rowabove) {
							var newdata = $("<tr><td class='contentinfo' colspan='"+(maxcols*2)+"'>"+frmopt.rowcontent+"</td></tr>");
							$(tb).append(newdata);
							newdata[0].rp = rp;
						}
						if ( trdata.length===0 ) {
							trdata = $("<tr "+dc+" rowpos='"+rp+"'></tr>").addClass("FormData").attr("id","tr_"+nm);
							$(trdata).append(tmpl);
							$(tb).append(trdata);
							trdata[0].rp = rp;
						}
						$("td:eq("+(cp-2)+")",trdata[0]).html(frmopt.label === undefined ? obj.p.colNames[i]: frmopt.label);
						$("td:eq("+(cp-1)+")",trdata[0]).append(frmopt.elmprefix).append(elc).append(frmopt.elmsuffix);
						if(this.edittype==='custom' && $.isFunction(opt.custom_value) ) {
							opt.custom_value.call($t, $("#"+nm,"#"+frmgr),'set',tmp);
						}
						$.jgrid.bindEv.call($t, elc, opt);
						retpos[cnt] = i;
						cnt++;
					}
				});
				if( cnt > 0) {
					var idrow = $("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+ (maxcols*2-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='"+obj.p.id+"_id' value='"+rowid+"'/></td></tr>");
					idrow[0].rp = cnt+999;
					$(tb).append(idrow);
					if(rp_ge[$t.p.id].checkOnSubmit || rp_ge[$t.p.id].checkOnUpdate) {rp_ge[$t.p.id]._savedData[obj.p.id+"_id"] = rowid;}
				}
				return retpos;
			}
			function fillData(rowid,obj,fmid){
				var nm,cnt=0,tmp, fld,opt,vl,vlc;
				if(rp_ge[$t.p.id].checkOnSubmit || rp_ge[$t.p.id].checkOnUpdate) {rp_ge[$t.p.id]._savedData = {};rp_ge[$t.p.id]._savedData[obj.p.id+"_id"]=rowid;}
				var cm = obj.p.colModel;
				if(rowid === '_empty') {
					$(cm).each(function(){
						nm = this.name;
						opt = $.extend({}, this.editoptions || {} );
						fld = $("#"+$.jgrid.jqID(nm),"#"+fmid);
						if(fld && fld.length && fld[0] !== null) {
							vl = "";
							if(this.edittype === 'custom' && $.isFunction(opt.custom_value)) {
								opt.custom_value.call($t, $("#"+nm,"#"+fmid),'set',vl);
							} else if(opt.defaultValue ) {
								vl = $.isFunction(opt.defaultValue) ? opt.defaultValue.call($t) : opt.defaultValue;
								if(fld[0].type==='checkbox') {
									vlc = vl.toLowerCase();
									if(vlc.search(/(false|f|0|no|n|off|undefined)/i)<0 && vlc!=="") {
										fld[0].checked = true;
										fld[0].defaultChecked = true;
										fld[0].value = vl;
									} else {
										fld[0].checked = false;
										fld[0].defaultChecked = false;
									}
								} else {fld.val(vl);}
							} else {
								if( fld[0].type==='checkbox' ) {
									fld[0].checked = false;
									fld[0].defaultChecked = false;
									vl = $(fld).attr("offval");
								} else if (fld[0].type && fld[0].type.substr(0,6)==='select') {
									fld[0].selectedIndex = 0;
								} else {
									fld.val(vl);
								}
							}
							if(rp_ge[$t.p.id].checkOnSubmit===true || rp_ge[$t.p.id].checkOnUpdate) {rp_ge[$t.p.id]._savedData[nm] = vl;}
						}
					});
					$("#id_g","#"+fmid).val(rowid);
					return;
				}
				var tre = $(obj).jqGrid("getInd",rowid,true);
				if(!tre) {return;}
				$('td[role="gridcell"]',tre).each( function(i) {
					nm = cm[i].name;
					// hidden fields are included in the form
					if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn' && cm[i].editable===true) {
						if(nm === obj.p.ExpandColumn && obj.p.treeGrid === true) {
							tmp = $(this).text();
						} else {
							try {
								tmp =  $.unformat.call(obj, $(this),{rowId:rowid, colModel:cm[i]},i);
							} catch (_) {
								tmp = cm[i].edittype==="textarea" ? $(this).text() : $(this).html();
							}
						}
						if($t.p.autoencode) {tmp = $.jgrid.htmlDecode(tmp);}
						if(rp_ge[$t.p.id].checkOnSubmit===true || rp_ge[$t.p.id].checkOnUpdate) {rp_ge[$t.p.id]._savedData[nm] = tmp;}
						nm = $.jgrid.jqID(nm);
						switch (cm[i].edittype) {
							case "password":
							case "text":
							case "button" :
							case "image":
							case "textarea":
								if(tmp === "&nbsp;" || tmp === "&#160;" || (tmp.length===1 && tmp.charCodeAt(0)===160) ) {tmp='';}
								$("#"+nm,"#"+fmid).val(tmp);
								break;
							case "select":
								var opv = tmp.split(",");
								opv = $.map(opv,function(n){return $.trim(n);});
								$("#"+nm+" option","#"+fmid).each(function(){
									if (!cm[i].editoptions.multiple && ($.trim(tmp) === $.trim($(this).text()) || opv[0] === $.trim($(this).text()) || opv[0] === $.trim($(this).val())) ){
										this.selected= true;
									} else if (cm[i].editoptions.multiple){
										if(  $.inArray($.trim($(this).text()), opv ) > -1 || $.inArray($.trim($(this).val()), opv ) > -1  ){
											this.selected = true;
										}else{
											this.selected = false;
										}
									} else {
										this.selected = false;
									}
								});
								break;
							case "checkbox":
								tmp = String(tmp);
								if(cm[i].editoptions && cm[i].editoptions.value) {
									var cb = cm[i].editoptions.value.split(":");
									if(cb[0] === tmp) {
										$("#"+nm,"#"+fmid)[$t.p.useProp ? 'prop': 'attr']({"checked":true, "defaultChecked" : true});
									} else {
										$("#"+nm,"#"+fmid)[$t.p.useProp ? 'prop': 'attr']({"checked":false, "defaultChecked" : false});
									}
								} else {
									tmp = tmp.toLowerCase();
									if(tmp.search(/(false|f|0|no|n|off|undefined)/i)<0 && tmp!=="") {
										$("#"+nm,"#"+fmid)[$t.p.useProp ? 'prop': 'attr']("checked",true);
										$("#"+nm,"#"+fmid)[$t.p.useProp ? 'prop': 'attr']("defaultChecked",true); //ie
									} else {
										$("#"+nm,"#"+fmid)[$t.p.useProp ? 'prop': 'attr']("checked", false);
										$("#"+nm,"#"+fmid)[$t.p.useProp ? 'prop': 'attr']("defaultChecked", false); //ie
									}
								}
								break;
							case 'custom' :
								try {
									if(cm[i].editoptions && $.isFunction(cm[i].editoptions.custom_value)) {
										cm[i].editoptions.custom_value.call($t, $("#"+nm,"#"+fmid),'set',tmp);
									} else {throw "e1";}
								} catch (e) {
									if (e==="e1") {$.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.nodefined,$.jgrid.edit.bClose);}
									else {$.jgrid.info_dialog($.jgrid.errors.errcap,e.message,$.jgrid.edit.bClose);}
								}
								break;
						}
						cnt++;
					}
				});
				if(cnt>0) {$("#id_g",frmtb).val(rowid);}
			}
			function setNulls() {
				$.each($t.p.colModel, function(i,n){
					if(n.editoptions && n.editoptions.NullIfEmpty === true) {
						if(postdata.hasOwnProperty(n.name) && postdata[n.name] === "") {
							postdata[n.name] = 'null';
						}
					}
				});
			}
			function postIt() {
				var copydata, ret=[true,"",""], onCS = {}, opers = $t.p.prmNames, idname, oper, key, selr, i;
				
				var retvals = $($t).triggerHandler("jqGridAddEditBeforeCheckValues", [$("#"+frmgr), frmoper]);
				if(retvals && typeof retvals === 'object') {postdata = retvals;}
				
				if($.isFunction(rp_ge[$t.p.id].beforeCheckValues)) {
					retvals = rp_ge[$t.p.id].beforeCheckValues.call($t, postdata,$("#"+frmgr),frmoper);
					if(retvals && typeof retvals === 'object') {postdata = retvals;}
				}
				for( key in postdata ){
					if(postdata.hasOwnProperty(key)) {
						ret = $.jgrid.checkValues.call($t,postdata[key],key);
						if(ret[0] === false) {break;}
					}
				}
				setNulls();
				if(ret[0]) {
					onCS = $($t).triggerHandler("jqGridAddEditClickSubmit", [rp_ge[$t.p.id], postdata, frmoper]);
					if( onCS === undefined && $.isFunction( rp_ge[$t.p.id].onclickSubmit)) { 
						onCS = rp_ge[$t.p.id].onclickSubmit.call($t, rp_ge[$t.p.id], postdata, frmoper) || {}; 
					}
					ret = $($t).triggerHandler("jqGridAddEditBeforeSubmit", [postdata, $("#"+frmgr), frmoper]);
					if(ret === undefined) {
						ret = [true,"",""];
					}
					if( ret[0] && $.isFunction(rp_ge[$t.p.id].beforeSubmit))  {
						ret = rp_ge[$t.p.id].beforeSubmit.call($t,postdata,$("#"+frmgr), frmoper);
					}
				}

				if(ret[0] && !rp_ge[$t.p.id].processing) {
					rp_ge[$t.p.id].processing = true;
					$("#sData", frmtb+"_2").addClass('ui-state-active');
					oper = opers.oper;
					idname = opers.id;
					// we add to pos data array the action - the name is oper
					postdata[oper] = ($.trim(postdata[$t.p.id+"_id"]) === "_empty") ? opers.addoper : opers.editoper;
					if(postdata[oper] !== opers.addoper) {
						postdata[idname] = postdata[$t.p.id+"_id"];
					} else {
						// check to see if we have allredy this field in the form and if yes lieve it
						if( postdata[idname] === undefined ) {postdata[idname] = postdata[$t.p.id+"_id"];}
					}
					delete postdata[$t.p.id+"_id"];
					postdata = $.extend(postdata,rp_ge[$t.p.id].editData,onCS);
					if($t.p.treeGrid === true)  {
						if(postdata[oper] === opers.addoper) {
						selr = $($t).jqGrid("getGridParam", 'selrow');
							var tr_par_id = $t.p.treeGridModel === 'adjacency' ? $t.p.treeReader.parent_id_field : 'parent_id';
							postdata[tr_par_id] = selr;
						}
						for(i in $t.p.treeReader){
							if($t.p.treeReader.hasOwnProperty(i)) {
								var itm = $t.p.treeReader[i];
								if(postdata.hasOwnProperty(itm)) {
									if(postdata[oper] === opers.addoper && i === 'parent_id_field') {continue;}
									delete postdata[itm];
								}
							}
						}
					}
					
					postdata[idname] = $.jgrid.stripPref($t.p.idPrefix, postdata[idname]);
					var ajaxOptions = $.extend({
						url: rp_ge[$t.p.id].url || $($t).jqGrid('getGridParam','editurl'),
						type: rp_ge[$t.p.id].mtype,
						data: $.isFunction(rp_ge[$t.p.id].serializeEditData) ? rp_ge[$t.p.id].serializeEditData.call($t,postdata) :  postdata,
						complete:function(data,status){
							var key;
							postdata[idname] = $t.p.idPrefix + postdata[idname];
							if(data.status >= 300 && data.status !== 304) {
								ret[0] = false;
								ret[1] = $($t).triggerHandler("jqGridAddEditErrorTextFormat", [data, frmoper]);
								if ($.isFunction(rp_ge[$t.p.id].errorTextFormat)) {
									ret[1] = rp_ge[$t.p.id].errorTextFormat.call($t, data, frmoper);
								} else {
									ret[1] = status + " Status: '" + data.statusText + "'. Error code: " + data.status;
								}
							} else {
								// data is posted successful
								// execute aftersubmit with the returned data from server
								ret = $($t).triggerHandler("jqGridAddEditAfterSubmit", [data, postdata, frmoper]);
								if(ret === undefined) {
									ret = [true,"",""];
								}
								if( ret[0] && $.isFunction(rp_ge[$t.p.id].afterSubmit) ) {
									ret = rp_ge[$t.p.id].afterSubmit.call($t, data,postdata, frmoper);
								}
							}
							if(ret[0] === false) {
								$("#FormError>td",frmtb).html(ret[1]);
								$("#FormError",frmtb).show();
							} else {
								if($t.p.autoencode) {
									$.each(postdata,function(n,v){
										postdata[n] = $.jgrid.htmlDecode(v);
									});
								}
								//rp_ge[$t.p.id].reloadAfterSubmit = rp_ge[$t.p.id].reloadAfterSubmit && $t.p.datatype != "local";
								// the action is add
								if(postdata[oper] === opers.addoper ) {
									//id processing
									// user not set the id ret[2]
									if(!ret[2]) {ret[2] = $.jgrid.randId();}
									postdata[idname] = ret[2];
									if(rp_ge[$t.p.id].reloadAfterSubmit) {
										$($t).trigger("reloadGrid");
									} else {
										if($t.p.treeGrid === true){
											$($t).jqGrid("addChildNode",ret[2],selr,postdata );
										} else {
											$($t).jqGrid("addRowData",ret[2],postdata,p.addedrow);
										}
									}
									if(rp_ge[$t.p.id].closeAfterAdd) {
										if($t.p.treeGrid !== true){
											$($t).jqGrid("setSelection",ret[2]);
										}
										$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal,onClose: rp_ge[$t.p.id].onClose});
									} else if (rp_ge[$t.p.id].clearAfterAdd) {
										fillData("_empty",$t,frmgr);
									}
								} else {
									// the action is update
									if(rp_ge[$t.p.id].reloadAfterSubmit) {
										$($t).trigger("reloadGrid");
										if( !rp_ge[$t.p.id].closeAfterEdit ) {setTimeout(function(){$($t).jqGrid("setSelection",postdata[idname]);},1000);}
									} else {
										if($t.p.treeGrid === true) {
											$($t).jqGrid("setTreeRow", postdata[idname],postdata);
										} else {
											$($t).jqGrid("setRowData", postdata[idname],postdata);
										}
									}
									if(rp_ge[$t.p.id].closeAfterEdit) {$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal,onClose: rp_ge[$t.p.id].onClose});}
								}
								if($.isFunction(rp_ge[$t.p.id].afterComplete)) {
									copydata = data;
									setTimeout(function(){
										$($t).triggerHandler("jqGridAddEditAfterComplete", [copydata, postdata, $("#"+frmgr), frmoper]);
										rp_ge[$t.p.id].afterComplete.call($t, copydata, postdata, $("#"+frmgr), frmoper);
										copydata=null;
									},500);
								}
								if(rp_ge[$t.p.id].checkOnSubmit || rp_ge[$t.p.id].checkOnUpdate) {
									$("#"+frmgr).data("disabled",false);
									if(rp_ge[$t.p.id]._savedData[$t.p.id+"_id"] !== "_empty"){
										for(key in rp_ge[$t.p.id]._savedData) {
											if(rp_ge[$t.p.id]._savedData.hasOwnProperty(key) && postdata[key]) {
												rp_ge[$t.p.id]._savedData[key] = postdata[key];
											}
										}
									}
								}
							}
							rp_ge[$t.p.id].processing=false;
							$("#sData", frmtb+"_2").removeClass('ui-state-active');
							try{$(':input:visible',"#"+frmgr)[0].focus();} catch (e){}
						}
					}, $.jgrid.ajaxOptions, rp_ge[$t.p.id].ajaxEditOptions );

					if (!ajaxOptions.url && !rp_ge[$t.p.id].useDataProxy) {
						if ($.isFunction($t.p.dataProxy)) {
							rp_ge[$t.p.id].useDataProxy = true;
						} else {
							ret[0]=false;ret[1] += " "+$.jgrid.errors.nourl;
						}
					}
					if (ret[0]) {
						if (rp_ge[$t.p.id].useDataProxy) {
							var dpret = $t.p.dataProxy.call($t, ajaxOptions, "set_"+$t.p.id); 
							if(dpret === undefined) {
								dpret = [true, ""];
							}
							if(dpret[0] === false ) {
								ret[0] = false;
								ret[1] = dpret[1] || "Error deleting the selected row!" ;
							} else {
								if(ajaxOptions.data.oper === opers.addoper && rp_ge[$t.p.id].closeAfterAdd ) {
									$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal, onClose: rp_ge[$t.p.id].onClose});
								}
								if(ajaxOptions.data.oper === opers.editoper && rp_ge[$t.p.id].closeAfterEdit ) {
									$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal, onClose: rp_ge[$t.p.id].onClose});
								}
							}
						} else {
							$.ajax(ajaxOptions); 
						}
					}
				}
				if(ret[0] === false) {
					$("#FormError>td",frmtb).html(ret[1]);
					$("#FormError",frmtb).show();
					// return;
				}
			}
			function compareData(nObj, oObj ) {
				var ret = false,key;
				for (key in nObj) {
					if(nObj.hasOwnProperty(key) && nObj[key] != oObj[key]) {
						ret = true;
						break;
					}
				}
				return ret;
			}
			function checkUpdates () {
				var stat = true;
				$("#FormError",frmtb).hide();
				if(rp_ge[$t.p.id].checkOnUpdate) {
					postdata = {};
					getFormData();
					diff = compareData(postdata,rp_ge[$t.p.id]._savedData);
					if(diff) {
						$("#"+frmgr).data("disabled",true);
						$(".confirm","#"+IDs.themodal).show();
						stat = false;
					}
				}
				return stat;
			}
			function restoreInline()
			{
				var i;
				if (rowid !== "_empty" && $t.p.savedRow !== undefined && $t.p.savedRow.length > 0 && $.isFunction($.fn.jqGrid.restoreRow)) {
					for (i=0;i<$t.p.savedRow.length;i++) {
						if ($t.p.savedRow[i].id == rowid) {
							$($t).jqGrid('restoreRow',rowid);
							break;
						}
					}
				}
			}
			function updateNav(cr, posarr){
				var totr = posarr[1].length-1;
				if (cr===0) {
					$("#pData",frmtb+"_2").addClass('ui-state-disabled');
				} else if( posarr[1][cr-1] !== undefined && $("#"+$.jgrid.jqID(posarr[1][cr-1])).hasClass('ui-state-disabled')) {
						$("#pData",frmtb+"_2").addClass('ui-state-disabled');
				} else {
					$("#pData",frmtb+"_2").removeClass('ui-state-disabled');
				}
				
				if (cr===totr) {
					$("#nData",frmtb+"_2").addClass('ui-state-disabled');
				} else if( posarr[1][cr+1] !== undefined && $("#"+$.jgrid.jqID(posarr[1][cr+1])).hasClass('ui-state-disabled')) {
					$("#nData",frmtb+"_2").addClass('ui-state-disabled');
				} else {
					$("#nData",frmtb+"_2").removeClass('ui-state-disabled');
				}
			}
			function getCurrPos() {
				var rowsInGrid = $($t).jqGrid("getDataIDs"),
				selrow = $("#id_g",frmtb).val(),
				pos = $.inArray(selrow,rowsInGrid);
				return [pos,rowsInGrid];
			}

			var dh = isNaN(rp_ge[$(this)[0].p.id].dataheight) ? rp_ge[$(this)[0].p.id].dataheight : rp_ge[$(this)[0].p.id].dataheight+"px",
			dw = isNaN(rp_ge[$(this)[0].p.id].datawidth) ? rp_ge[$(this)[0].p.id].datawidth : rp_ge[$(this)[0].p.id].datawidth+"px",
			frm = $("<form name='FormPost' id='"+frmgr+"' class='FormGrid' onSubmit='return false;' style='width:"+dw+";overflow:auto;position:relative;height:"+dh+";'></form>").data("disabled",false),
			tbl = $("<table id='"+frmtborg+"' class='EditTable' cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>");
			showFrm = $($t).triggerHandler("jqGridAddEditBeforeInitData", [$("#"+frmgr), frmoper]);
			if(showFrm === undefined) {
				showFrm = true;
			}
			if(showFrm && onBeforeInit) {
				showFrm = onBeforeInit.call($t,$("#"+frmgr),frmoper);
			}
			if(showFrm === false) {return;}
			restoreInline();
			$($t.p.colModel).each( function() {
				var fmto = this.formoptions;
				maxCols = Math.max(maxCols, fmto ? fmto.colpos || 0 : 0 );
				maxRows = Math.max(maxRows, fmto ? fmto.rowpos || 0 : 0 );
			});
			$(frm).append(tbl);
			var flr = $("<tr id='FormError' style='display:none'><td class='ui-state-error' colspan='"+(maxCols*2)+"'></td></tr>");
			flr[0].rp = 0;
			$(tbl).append(flr);
			//topinfo
			flr = $("<tr style='display:none' class='tinfo'><td class='topinfo' colspan='"+(maxCols*2)+"'>"+rp_ge[$t.p.id].topinfo+"</td></tr>");
			flr[0].rp = 0;
			$(tbl).append(flr);
			// set the id.
			// use carefull only to change here colproperties.
			// create data
			var rtlb = $t.p.direction === "rtl" ? true :false,
			bp = rtlb ? "nData" : "pData",
			bn = rtlb ? "pData" : "nData";
			createData(rowid,$t,tbl,maxCols);
			// buttons at footer
			var bP = "<a id='"+bp+"' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>",
			bN = "<a id='"+bn+"' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>",
			bS  ="<a id='sData' class='fm-button ui-state-default ui-corner-all'>"+p.bSubmit+"</a>",
			bC  ="<a id='cData' class='fm-button ui-state-default ui-corner-all'>"+p.bCancel+"</a>";
			var bt = "<table border='0' cellspacing='0' cellpadding='0' class='EditTable' id='"+frmtborg+"_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>"+(rtlb ? bN+bP : bP+bN)+"</td><td class='EditButton'>"+bS+bC+"</td></tr>";
			bt += "<tr style='display:none' class='binfo'><td class='bottominfo' colspan='2'>"+rp_ge[$t.p.id].bottominfo+"</td></tr>";
			bt += "</tbody></table>";
			if(maxRows >  0) {
				var sd=[];
				$.each($(tbl)[0].rows,function(i,r){
					sd[i] = r;
				});
				sd.sort(function(a,b){
					if(a.rp > b.rp) {return 1;}
					if(a.rp < b.rp) {return -1;}
					return 0;
				});
				$.each(sd, function(index, row) {
					$('tbody',tbl).append(row);
				});
			}
			p.gbox = "#gbox_"+$.jgrid.jqID(gID);
			var cle = false;
			if(p.closeOnEscape===true){
				p.closeOnEscape = false;
				cle = true;
			}
			var tms = $("<div></div>").append(frm).append(bt);
			$.jgrid.createModal(IDs,tms, rp_ge[$(this)[0].p.id] ,"#gview_"+$.jgrid.jqID($t.p.id),$("#gbox_"+$.jgrid.jqID($t.p.id))[0]);
			if(rtlb) {
				$("#pData, #nData",frmtb+"_2").css("float","right");
				$(".EditButton",frmtb+"_2").css("text-align","left");
			}
			if(rp_ge[$t.p.id].topinfo) {$(".tinfo",frmtb).show();}
			if(rp_ge[$t.p.id].bottominfo) {$(".binfo",frmtb+"_2").show();}
			tms = null;bt=null;
			$("#"+$.jgrid.jqID(IDs.themodal)).keydown( function( e ) {
				var wkey = e.target;
				if ($("#"+frmgr).data("disabled")===true ) {return false;}//??
				if(rp_ge[$t.p.id].savekey[0] === true && e.which === rp_ge[$t.p.id].savekey[1]) { // save
					if(wkey.tagName !== "TEXTAREA") {
						$("#sData", frmtb+"_2").trigger("click");
						return false;
					}
				}
				if(e.which === 27) {
					if(!checkUpdates()) {return false;}
					if(cle)	{$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:p.gbox,jqm:p.jqModal, onClose: rp_ge[$t.p.id].onClose});}
					return false;
				}
				if(rp_ge[$t.p.id].navkeys[0]===true) {
					if($("#id_g",frmtb).val() === "_empty") {return true;}
					if(e.which === rp_ge[$t.p.id].navkeys[1]){ //up
						$("#pData", frmtb+"_2").trigger("click");
						return false;
					}
					if(e.which === rp_ge[$t.p.id].navkeys[2]){ //down
						$("#nData", frmtb+"_2").trigger("click");
						return false;
					}
				}
			});
			if(p.checkOnUpdate) {
				$("a.ui-jqdialog-titlebar-close span","#"+$.jgrid.jqID(IDs.themodal)).removeClass("jqmClose");
				$("a.ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(IDs.themodal)).unbind("click")
				.click(function(){
					if(!checkUpdates()) {return false;}
					$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal,onClose: rp_ge[$t.p.id].onClose});
					return false;
				});
			}
			p.saveicon = $.extend([true,"left","ui-icon-disk"],p.saveicon);
			p.closeicon = $.extend([true,"left","ui-icon-close"],p.closeicon);
			// beforeinitdata after creation of the form
			if(p.saveicon[0]===true) {
				$("#sData",frmtb+"_2").addClass(p.saveicon[1] === "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')
				.append("<span class='ui-icon "+p.saveicon[2]+"'></span>");
			}
			if(p.closeicon[0]===true) {
				$("#cData",frmtb+"_2").addClass(p.closeicon[1] === "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')
				.append("<span class='ui-icon "+p.closeicon[2]+"'></span>");
			}
			if(rp_ge[$t.p.id].checkOnSubmit || rp_ge[$t.p.id].checkOnUpdate) {
				bS  ="<a id='sNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+p.bYes+"</a>";
				bN  ="<a id='nNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+p.bNo+"</a>";
				bC  ="<a id='cNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+p.bExit+"</a>";
				var zI = p.zIndex  || 999;zI ++;
				$("<div class='"+ p.overlayClass+" jqgrid-overlay confirm' style='z-index:"+zI+";display:none;'>&#160;"+"</div><div class='confirm ui-widget-content ui-jqconfirm' style='z-index:"+(zI+1)+"'>"+p.saveData+"<br/><br/>"+bS+bN+bC+"</div>").insertAfter("#"+frmgr);
				$("#sNew","#"+$.jgrid.jqID(IDs.themodal)).click(function(){
					postIt();
					$("#"+frmgr).data("disabled",false);
					$(".confirm","#"+$.jgrid.jqID(IDs.themodal)).hide();
					return false;
				});
				$("#nNew","#"+$.jgrid.jqID(IDs.themodal)).click(function(){
					$(".confirm","#"+$.jgrid.jqID(IDs.themodal)).hide();
					$("#"+frmgr).data("disabled",false);
					setTimeout(function(){$(":input:visible","#"+frmgr)[0].focus();},0);
					return false;
				});
				$("#cNew","#"+$.jgrid.jqID(IDs.themodal)).click(function(){
					$(".confirm","#"+$.jgrid.jqID(IDs.themodal)).hide();
					$("#"+frmgr).data("disabled",false);
					$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal,onClose: rp_ge[$t.p.id].onClose});
					return false;
				});
			}
			// here initform - only once
			$($t).triggerHandler("jqGridAddEditInitializeForm", [$("#"+frmgr), frmoper]);
			if(onInitializeForm) {onInitializeForm.call($t,$("#"+frmgr), frmoper);}
			if(rowid==="_empty" || !rp_ge[$t.p.id].viewPagerButtons) {$("#pData,#nData",frmtb+"_2").hide();} else {$("#pData,#nData",frmtb+"_2").show();}
			$($t).triggerHandler("jqGridAddEditBeforeShowForm", [$("#"+frmgr), frmoper]);
			if(onBeforeShow) { onBeforeShow.call($t, $("#"+frmgr), frmoper);}
			$("#"+$.jgrid.jqID(IDs.themodal)).data("onClose",rp_ge[$t.p.id].onClose);
			$.jgrid.viewModal("#"+$.jgrid.jqID(IDs.themodal),{
				gbox:"#gbox_"+$.jgrid.jqID(gID),
				jqm:p.jqModal, 
				overlay: p.overlay,
				modal:p.modal, 
				overlayClass: p.overlayClass,
				onHide :  function(h) {
					$($t).data("formProp", {
						top:parseFloat($(h.w).css("top")),
						left : parseFloat($(h.w).css("left")),
						width : $(h.w).width(),
						height : $(h.w).height(),
						dataheight : $("#"+frmgr).height(),
						datawidth: $("#"+frmgr).width()
					});
					h.w.remove();
					if(h.o) {h.o.remove();}
				}
			});
			if(!closeovrl) {
				$("." + $.jgrid.jqID(p.overlayClass)).click(function(){
					if(!checkUpdates()) {return false;}
					$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal, onClose: rp_ge[$t.p.id].onClose});
					return false;
				});
			}
			$(".fm-button","#"+$.jgrid.jqID(IDs.themodal)).hover(
				function(){$(this).addClass('ui-state-hover');},
				function(){$(this).removeClass('ui-state-hover');}
			);
			$("#sData", frmtb+"_2").click(function(){
				postdata = {};
				$("#FormError",frmtb).hide();
				// all depend on ret array
				//ret[0] - succes
				//ret[1] - msg if not succes
				//ret[2] - the id  that will be set if reload after submit false
				getFormData();
				if(postdata[$t.p.id+"_id"] === "_empty")	{postIt();}
				else if(p.checkOnSubmit===true ) {
					diff = compareData(postdata,rp_ge[$t.p.id]._savedData);
					if(diff) {
						$("#"+frmgr).data("disabled",true);
						$(".confirm","#"+$.jgrid.jqID(IDs.themodal)).show();
					} else {
						postIt();
					}
				} else {
					postIt();
				}
				return false;
			});
			$("#cData", frmtb+"_2").click(function(){
				if(!checkUpdates()) {return false;}
				$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal,onClose: rp_ge[$t.p.id].onClose});
				return false;
			});
			$("#nData", frmtb+"_2").click(function(){
				if(!checkUpdates()) {return false;}
				$("#FormError",frmtb).hide();
				var npos = getCurrPos();
				npos[0] = parseInt(npos[0],10);
				if(npos[0] !== -1 && npos[1][npos[0]+1]) {
					$($t).triggerHandler("jqGridAddEditClickPgButtons", ['next',$("#"+frmgr),npos[1][npos[0]]]);
					var nposret;
					if($.isFunction(p.onclickPgButtons)) {
						nposret = p.onclickPgButtons.call($t, 'next',$("#"+frmgr),npos[1][npos[0]]);
						if( nposret !== undefined && nposret === false ) {return false;}
					}
					if( $("#"+$.jgrid.jqID(npos[1][npos[0]+1])).hasClass('ui-state-disabled')) {return false;}
					fillData(npos[1][npos[0]+1],$t,frmgr);
					$($t).jqGrid("setSelection",npos[1][npos[0]+1]);
					$($t).triggerHandler("jqGridAddEditAfterClickPgButtons", ['next',$("#"+frmgr),npos[1][npos[0]]]);
					if($.isFunction(p.afterclickPgButtons)) {
						p.afterclickPgButtons.call($t, 'next',$("#"+frmgr),npos[1][npos[0]+1]);
					}
					updateNav(npos[0]+1,npos);
				}
				return false;
			});
			$("#pData", frmtb+"_2").click(function(){
				if(!checkUpdates()) {return false;}
				$("#FormError",frmtb).hide();
				var ppos = getCurrPos();
				if(ppos[0] !== -1 && ppos[1][ppos[0]-1]) {
					$($t).triggerHandler("jqGridAddEditClickPgButtons", ['prev',$("#"+frmgr),ppos[1][ppos[0]]]);
					var pposret;
					if($.isFunction(p.onclickPgButtons)) {
						pposret = p.onclickPgButtons.call($t, 'prev',$("#"+frmgr),ppos[1][ppos[0]]);
						if( pposret !== undefined && pposret === false ) {return false;}
					}
					if( $("#"+$.jgrid.jqID(ppos[1][ppos[0]-1])).hasClass('ui-state-disabled')) {return false;}
					fillData(ppos[1][ppos[0]-1],$t,frmgr);
					$($t).jqGrid("setSelection",ppos[1][ppos[0]-1]);
					$($t).triggerHandler("jqGridAddEditAfterClickPgButtons", ['prev',$("#"+frmgr),ppos[1][ppos[0]]]);
					if($.isFunction(p.afterclickPgButtons)) {
						p.afterclickPgButtons.call($t, 'prev',$("#"+frmgr),ppos[1][ppos[0]-1]);
					}
					updateNav(ppos[0]-1,ppos);
				}
				return false;
			});
			$($t).triggerHandler("jqGridAddEditAfterShowForm", [$("#"+frmgr), frmoper]);
			if(onAfterShow) { onAfterShow.call($t, $("#"+frmgr), frmoper); }
			var posInit =getCurrPos();
			updateNav(posInit[0],posInit);
		});
	},
	viewGridRow : function(rowid, p){
		p = $.extend(true, {
			top : 0,
			left: 0,
			width: 0,
			datawidth: 'auto',
			height: 'auto',
			dataheight: 'auto',
			modal: false,
			overlay: 30,
			drag: true,
			resize: true,
			jqModal: true,
			closeOnEscape : false,
			labelswidth: '30%',
			closeicon: [],
			navkeys: [false,38,40],
			onClose: null,
			beforeShowForm : null,
			beforeInitData : null,
			viewPagerButtons : true,
			recreateForm : false
		}, $.jgrid.view, p || {});
		rp_ge[$(this)[0].p.id] = p;
		return this.each(function(){
			var $t = this;
			if (!$t.grid || !rowid) {return;}
			var gID = $t.p.id,
			frmgr = "ViewGrid_"+$.jgrid.jqID( gID  ), frmtb = "ViewTbl_" + $.jgrid.jqID( gID ),
			frmgr_id = "ViewGrid_"+gID, frmtb_id = "ViewTbl_"+gID,
			IDs = {themodal:'viewmod'+gID,modalhead:'viewhd'+gID,modalcontent:'viewcnt'+gID, scrollelm : frmgr},
			onBeforeInit = $.isFunction(rp_ge[$t.p.id].beforeInitData) ? rp_ge[$t.p.id].beforeInitData : false,
			showFrm = true,
			maxCols = 1, maxRows=0;
			if(!p.recreateForm) {
				if( $($t).data("viewProp") ) {
					$.extend(rp_ge[$(this)[0].p.id], $($t).data("viewProp"));
				}
			}
			function focusaref(){ //Sfari 3 issues
				if(rp_ge[$t.p.id].closeOnEscape===true || rp_ge[$t.p.id].navkeys[0]===true) {
					setTimeout(function(){$(".ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(IDs.modalhead)).focus();},0);
				}
			}
			function createData(rowid,obj,tb,maxcols){
				var nm, hc,trdata, cnt=0,tmp, dc, retpos=[], ind=false, i,
				tdtmpl = "<td class='CaptionTD form-view-label ui-widget-content' width='"+p.labelswidth+"'>&#160;</td><td class='DataTD form-view-data ui-helper-reset ui-widget-content'>&#160;</td>", tmpl="",
				tdtmpl2 = "<td class='CaptionTD form-view-label ui-widget-content'>&#160;</td><td class='DataTD form-view-data ui-widget-content'>&#160;</td>",
				fmtnum = ['integer','number','currency'],max1 =0, max2=0 ,maxw,setme, viewfld;
				for (i=1;i<=maxcols;i++) {
					tmpl += i === 1 ? tdtmpl : tdtmpl2;
				}
				// find max number align rigth with property formatter
				$(obj.p.colModel).each( function() {
					if(this.editrules && this.editrules.edithidden === true) {
						hc = false;
					} else {
						hc = this.hidden === true ? true : false;
					}
					if(!hc && this.align==='right') {
						if(this.formatter && $.inArray(this.formatter,fmtnum) !== -1 ) {
							max1 = Math.max(max1,parseInt(this.width,10));
						} else {
							max2 = Math.max(max2,parseInt(this.width,10));
						}
					}
				});
				maxw  = max1 !==0 ? max1 : max2 !==0 ? max2 : 0;
				ind = $(obj).jqGrid("getInd",rowid);
				$(obj.p.colModel).each( function(i) {
					nm = this.name;
					setme = false;
					// hidden fields are included in the form
					if(this.editrules && this.editrules.edithidden === true) {
						hc = false;
					} else {
						hc = this.hidden === true ? true : false;
					}
					dc = hc ? "style='display:none'" : "";
					viewfld = (typeof this.viewable !== 'boolean') ? true : this.viewable;
					if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn' && viewfld) {
						if(ind === false) {
							tmp = "";
						} else {
							if(nm === obj.p.ExpandColumn && obj.p.treeGrid === true) {
								tmp = $("td:eq("+i+")",obj.rows[ind]).text();
							} else {
								tmp = $("td:eq("+i+")",obj.rows[ind]).html();
							}
						}
						setme = this.align === 'right' && maxw !==0 ? true : false;
						var frmopt = $.extend({},{rowabove:false,rowcontent:''}, this.formoptions || {}),
						rp = parseInt(frmopt.rowpos,10) || cnt+1,
						cp = parseInt((parseInt(frmopt.colpos,10) || 1)*2,10);
						if(frmopt.rowabove) {
							var newdata = $("<tr><td class='contentinfo' colspan='"+(maxcols*2)+"'>"+frmopt.rowcontent+"</td></tr>");
							$(tb).append(newdata);
							newdata[0].rp = rp;
						}
						trdata = $(tb).find("tr[rowpos="+rp+"]");
						if ( trdata.length===0 ) {
							trdata = $("<tr "+dc+" rowpos='"+rp+"'></tr>").addClass("FormData").attr("id","trv_"+nm);
							$(trdata).append(tmpl);
							$(tb).append(trdata);
							trdata[0].rp = rp;
						}
						$("td:eq("+(cp-2)+")",trdata[0]).html('<b>'+ (frmopt.label === undefined ? obj.p.colNames[i]: frmopt.label)+'</b>');
						$("td:eq("+(cp-1)+")",trdata[0]).append("<span>"+tmp+"</span>").attr("id","v_"+nm);
						if(setme){
							$("td:eq("+(cp-1)+") span",trdata[0]).css({'text-align':'right',width:maxw+"px"});
						}
						retpos[cnt] = i;
						cnt++;
					}
				});
				if( cnt > 0) {
					var idrow = $("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+ (maxcols*2-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+rowid+"'/></td></tr>");
					idrow[0].rp = cnt+99;
					$(tb).append(idrow);
				}
				return retpos;
			}
			function fillData(rowid,obj){
				var nm, hc,cnt=0,tmp,trv;
				trv = $(obj).jqGrid("getInd",rowid,true);
				if(!trv) {return;}
				$('td',trv).each( function(i) {
					nm = obj.p.colModel[i].name;
					// hidden fields are included in the form
					if(obj.p.colModel[i].editrules && obj.p.colModel[i].editrules.edithidden === true) {
						hc = false;
					} else {
						hc = obj.p.colModel[i].hidden === true ? true : false;
					}
					if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn') {
						if(nm === obj.p.ExpandColumn && obj.p.treeGrid === true) {
							tmp = $(this).text();
						} else {
							tmp = $(this).html();
						}
						nm = $.jgrid.jqID("v_"+nm);
						$("#"+nm+" span","#"+frmtb).html(tmp);
						if (hc) {$("#"+nm,"#"+frmtb).parents("tr:first").hide();}
						cnt++;
					}
				});
				if(cnt>0) {$("#id_g","#"+frmtb).val(rowid);}
			}
			function updateNav(cr,posarr){
				var totr = posarr[1].length-1;
				if (cr===0) {
					$("#pData","#"+frmtb+"_2").addClass('ui-state-disabled');
				} else if( posarr[1][cr-1] !== undefined && $("#"+$.jgrid.jqID(posarr[1][cr-1])).hasClass('ui-state-disabled')) {
					$("#pData",frmtb+"_2").addClass('ui-state-disabled');
				} else {
					$("#pData","#"+frmtb+"_2").removeClass('ui-state-disabled');
				}
				if (cr===totr) {
					$("#nData","#"+frmtb+"_2").addClass('ui-state-disabled');
				} else if( posarr[1][cr+1] !== undefined && $("#"+$.jgrid.jqID(posarr[1][cr+1])).hasClass('ui-state-disabled')) {
					$("#nData",frmtb+"_2").addClass('ui-state-disabled');
				} else {
					$("#nData","#"+frmtb+"_2").removeClass('ui-state-disabled');
				}
			}
			function getCurrPos() {
				var rowsInGrid = $($t).jqGrid("getDataIDs"),
				selrow = $("#id_g","#"+frmtb).val(),
				pos = $.inArray(selrow,rowsInGrid);
				return [pos,rowsInGrid];
			}

			var dh = isNaN(rp_ge[$(this)[0].p.id].dataheight) ? rp_ge[$(this)[0].p.id].dataheight : rp_ge[$(this)[0].p.id].dataheight+"px",
			dw = isNaN(rp_ge[$(this)[0].p.id].datawidth) ? rp_ge[$(this)[0].p.id].datawidth : rp_ge[$(this)[0].p.id].datawidth+"px",
			frm = $("<form name='FormPost' id='"+frmgr_id+"' class='FormGrid' style='width:"+dw+";overflow:auto;position:relative;height:"+dh+";'></form>"),
			tbl =$("<table id='"+frmtb_id+"' class='EditTable' cellspacing='1' cellpadding='2' border='0' style='table-layout:fixed'><tbody></tbody></table>");
			if(onBeforeInit) {
				showFrm = onBeforeInit.call($t,$("#"+frmgr));
				if(showFrm === undefined) {
					showFrm = true;
				}
			}
			if(showFrm === false) {return;}
			$($t.p.colModel).each( function() {
				var fmto = this.formoptions;
				maxCols = Math.max(maxCols, fmto ? fmto.colpos || 0 : 0 );
				maxRows = Math.max(maxRows, fmto ? fmto.rowpos || 0 : 0 );
			});
			// set the id.
			$(frm).append(tbl);
			createData(rowid, $t, tbl, maxCols);
			var rtlb = $t.p.direction === "rtl" ? true :false,
			bp = rtlb ? "nData" : "pData",
			bn = rtlb ? "pData" : "nData",
				// buttons at footer
			bP = "<a id='"+bp+"' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>",
			bN = "<a id='"+bn+"' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>",
			bC  ="<a id='cData' class='fm-button ui-state-default ui-corner-all'>"+p.bClose+"</a>";
			if(maxRows >  0) {
				var sd=[];
				$.each($(tbl)[0].rows,function(i,r){
					sd[i] = r;
				});
				sd.sort(function(a,b){
					if(a.rp > b.rp) {return 1;}
					if(a.rp < b.rp) {return -1;}
					return 0;
				});
				$.each(sd, function(index, row) {
					$('tbody',tbl).append(row);
				});
			}
			p.gbox = "#gbox_"+$.jgrid.jqID(gID);
			var bt = $("<div></div>").append(frm).append("<table border='0' class='EditTable' id='"+frmtb+"_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='"+p.labelswidth+"'>"+(rtlb ? bN+bP : bP+bN)+"</td><td class='EditButton'>"+bC+"</td></tr></tbody></table>");
			$.jgrid.createModal(IDs,bt,p,"#gview_"+$.jgrid.jqID($t.p.id),$("#gview_"+$.jgrid.jqID($t.p.id))[0]);
			if(rtlb) {
				$("#pData, #nData","#"+frmtb+"_2").css("float","right");
				$(".EditButton","#"+frmtb+"_2").css("text-align","left");
			}
			if(!p.viewPagerButtons) {$("#pData, #nData","#"+frmtb+"_2").hide();}
			bt = null;
			$("#"+IDs.themodal).keydown( function( e ) {
				if(e.which === 27) {
					if(rp_ge[$t.p.id].closeOnEscape) {$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:p.gbox,jqm:p.jqModal, onClose: p.onClose});}
					return false;
				}
				if(p.navkeys[0]===true) {
					if(e.which === p.navkeys[1]){ //up
						$("#pData", "#"+frmtb+"_2").trigger("click");
						return false;
					}
					if(e.which === p.navkeys[2]){ //down
						$("#nData", "#"+frmtb+"_2").trigger("click");
						return false;
					}
				}
			});
			p.closeicon = $.extend([true,"left","ui-icon-close"],p.closeicon);
			if(p.closeicon[0]===true) {
				$("#cData","#"+frmtb+"_2").addClass(p.closeicon[1] === "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')
				.append("<span class='ui-icon "+p.closeicon[2]+"'></span>");
			}
			if($.isFunction(p.beforeShowForm)) {p.beforeShowForm.call($t,$("#"+frmgr));}
			$.jgrid.viewModal("#"+$.jgrid.jqID(IDs.themodal),{
				gbox:"#gbox_"+$.jgrid.jqID(gID),
				jqm:p.jqModal,
				overlay: p.overlay, 
				modal:p.modal,
				onHide :  function(h) {
					$($t).data("viewProp", {
						top:parseFloat($(h.w).css("top")),
						left : parseFloat($(h.w).css("left")),
						width : $(h.w).width(),
						height : $(h.w).height(),
						dataheight : $("#"+frmgr).height(),
						datawidth: $("#"+frmgr).width()
					});
					h.w.remove();
					if(h.o) {h.o.remove();}
				}
			});
			$(".fm-button:not(.ui-state-disabled)","#"+frmtb+"_2").hover(
				function(){$(this).addClass('ui-state-hover');},
				function(){$(this).removeClass('ui-state-hover');}
			);
			focusaref();
			$("#cData", "#"+frmtb+"_2").click(function(){
				$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal, onClose: p.onClose});
				return false;
			});
			$("#nData", "#"+frmtb+"_2").click(function(){
				$("#FormError","#"+frmtb).hide();
				var npos = getCurrPos();
				npos[0] = parseInt(npos[0],10);
				if(npos[0] !== -1 && npos[1][npos[0]+1]) {
					if($.isFunction(p.onclickPgButtons)) {
						p.onclickPgButtons.call($t,'next',$("#"+frmgr),npos[1][npos[0]]);
					}
					fillData(npos[1][npos[0]+1],$t);
					$($t).jqGrid("setSelection",npos[1][npos[0]+1]);
					if($.isFunction(p.afterclickPgButtons)) {
						p.afterclickPgButtons.call($t,'next',$("#"+frmgr),npos[1][npos[0]+1]);
					}
					updateNav(npos[0]+1,npos);
				}
				focusaref();
				return false;
			});
			$("#pData", "#"+frmtb+"_2").click(function(){
				$("#FormError","#"+frmtb).hide();
				var ppos = getCurrPos();
				if(ppos[0] !== -1 && ppos[1][ppos[0]-1]) {
					if($.isFunction(p.onclickPgButtons)) {
						p.onclickPgButtons.call($t,'prev',$("#"+frmgr),ppos[1][ppos[0]]);
					}
					fillData(ppos[1][ppos[0]-1],$t);
					$($t).jqGrid("setSelection",ppos[1][ppos[0]-1]);
					if($.isFunction(p.afterclickPgButtons)) {
						p.afterclickPgButtons.call($t,'prev',$("#"+frmgr),ppos[1][ppos[0]-1]);
					}
					updateNav(ppos[0]-1,ppos);
				}
				focusaref();
				return false;
			});
			var posInit =getCurrPos();
			updateNav(posInit[0],posInit);
		});
	},
	delGridRow : function(rowids,p) {
		p = $.extend(true, {
			top : 0,
			left: 0,
			width: 240,
			height: 'auto',
			dataheight : 'auto',
			modal: false,
			overlay: 30,
			drag: true,
			resize: true,
			url : '',
			mtype : "POST",
			reloadAfterSubmit: true,
			beforeShowForm: null,
			beforeInitData : null,
			afterShowForm: null,
			beforeSubmit: null,
			onclickSubmit: null,
			afterSubmit: null,
			jqModal : true,
			closeOnEscape : false,
			delData: {},
			delicon : [],
			cancelicon : [],
			onClose : null,
			ajaxDelOptions : {},
			processing : false,
			serializeDelData : null,
			useDataProxy : false
		}, $.jgrid.del, p ||{});
		rp_ge[$(this)[0].p.id] = p;
		return this.each(function(){
			var $t = this;
			if (!$t.grid ) {return;}
			if(!rowids) {return;}
			var onBeforeShow = $.isFunction( rp_ge[$t.p.id].beforeShowForm  ),
			onAfterShow = $.isFunction( rp_ge[$t.p.id].afterShowForm ),
			onBeforeInit = $.isFunction(rp_ge[$t.p.id].beforeInitData) ? rp_ge[$t.p.id].beforeInitData : false,
			gID = $t.p.id, onCS = {},
			showFrm = true,
			dtbl = "DelTbl_"+$.jgrid.jqID(gID),postd, idname, opers, oper,
			dtbl_id = "DelTbl_" + gID,
			IDs = {themodal:'delmod'+gID,modalhead:'delhd'+gID,modalcontent:'delcnt'+gID, scrollelm: dtbl};
			if ($.isArray(rowids)) {rowids = rowids.join();}
			if ( $("#"+$.jgrid.jqID(IDs.themodal))[0] !== undefined ) {
				if(onBeforeInit) {
					showFrm = onBeforeInit.call($t,$("#"+dtbl));
					if(showFrm === undefined) {
						showFrm = true;
					}
				}
				if(showFrm === false) {return;}
				$("#DelData>td","#"+dtbl).text(rowids);
				$("#DelError","#"+dtbl).hide();
				if( rp_ge[$t.p.id].processing === true) {
					rp_ge[$t.p.id].processing=false;
					$("#dData", "#"+dtbl).removeClass('ui-state-active');
				}
				if(onBeforeShow) {rp_ge[$t.p.id].beforeShowForm.call($t,$("#"+dtbl));}
				$.jgrid.viewModal("#"+$.jgrid.jqID(IDs.themodal),{gbox:"#gbox_"+$.jgrid.jqID(gID),jqm:rp_ge[$t.p.id].jqModal,jqM: false, overlay: rp_ge[$t.p.id].overlay, modal:rp_ge[$t.p.id].modal});
				if(onAfterShow) {rp_ge[$t.p.id].afterShowForm.call($t,$("#"+dtbl));}
			} else {
				var dh = isNaN(rp_ge[$t.p.id].dataheight) ? rp_ge[$t.p.id].dataheight : rp_ge[$t.p.id].dataheight+"px",
				dw = isNaN(p.datawidth) ? p.datawidth : p.datawidth+"px",
				tbl = "<div id='"+dtbl_id+"' class='formdata' style='width:"+dw+";overflow:auto;position:relative;height:"+dh+";'>";
				tbl += "<table class='DelTable'><tbody>";
				// error data
				tbl += "<tr id='DelError' style='display:none'><td class='ui-state-error'></td></tr>";
				tbl += "<tr id='DelData' style='display:none'><td >"+rowids+"</td></tr>";
				tbl += "<tr><td class=\"delmsg\" style=\"white-space:pre;\">"+rp_ge[$t.p.id].msg+"</td></tr><tr><td >&#160;</td></tr>";
				// buttons at footer
				tbl += "</tbody></table></div>";
				var bS  = "<a id='dData' class='fm-button ui-state-default ui-corner-all'>"+p.bSubmit+"</a>",
				bC  = "<a id='eData' class='fm-button ui-state-default ui-corner-all'>"+p.bCancel+"</a>";
				tbl += "<table cellspacing='0' cellpadding='0' border='0' class='EditTable' id='"+dtbl+"_2'><tbody><tr><td><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr><td class='DelButton EditButton'>"+bS+"&#160;"+bC+"</td></tr></tbody></table>";
				p.gbox = "#gbox_"+$.jgrid.jqID(gID);
				$.jgrid.createModal(IDs,tbl,p,"#gview_"+$.jgrid.jqID($t.p.id),$("#gview_"+$.jgrid.jqID($t.p.id))[0]);

				if(onBeforeInit) {
					showFrm = onBeforeInit.call($t,$("#"+dtbl));
					if(showFrm === undefined) {
						showFrm = true;
					}
				}
				if(showFrm === false) {return;}

				$(".fm-button","#"+dtbl+"_2").hover(
					function(){$(this).addClass('ui-state-hover');},
					function(){$(this).removeClass('ui-state-hover');}
				);
				p.delicon = $.extend([true,"left","ui-icon-scissors"],rp_ge[$t.p.id].delicon);
				p.cancelicon = $.extend([true,"left","ui-icon-cancel"],rp_ge[$t.p.id].cancelicon);
				if(p.delicon[0]===true) {
					$("#dData","#"+dtbl+"_2").addClass(p.delicon[1] === "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')
					.append("<span class='ui-icon "+p.delicon[2]+"'></span>");
				}
				if(p.cancelicon[0]===true) {
					$("#eData","#"+dtbl+"_2").addClass(p.cancelicon[1] === "right" ? 'fm-button-icon-right' : 'fm-button-icon-left')
					.append("<span class='ui-icon "+p.cancelicon[2]+"'></span>");
				}
				$("#dData","#"+dtbl+"_2").click(function(){
					var ret=[true,""], pk,
					postdata = $("#DelData>td","#"+dtbl).text(); //the pair is name=val1,val2,...
					onCS = {};
					if( $.isFunction( rp_ge[$t.p.id].onclickSubmit ) ) {onCS = rp_ge[$t.p.id].onclickSubmit.call($t,rp_ge[$t.p.id], postdata) || {};}
					if( $.isFunction( rp_ge[$t.p.id].beforeSubmit ) ) {ret = rp_ge[$t.p.id].beforeSubmit.call($t,postdata);}
					if(ret[0] && !rp_ge[$t.p.id].processing) {
						rp_ge[$t.p.id].processing = true;
						opers = $t.p.prmNames;
						postd = $.extend({},rp_ge[$t.p.id].delData, onCS);
						oper = opers.oper;
						postd[oper] = opers.deloper;
						idname = opers.id;
						postdata = String(postdata).split(",");
						if(!postdata.length) { return false; }
						for(pk in postdata) {
							if(postdata.hasOwnProperty(pk)) {
								postdata[pk] = $.jgrid.stripPref($t.p.idPrefix, postdata[pk]);
							}
						}
						postd[idname] = postdata.join();
						$(this).addClass('ui-state-active');
						var ajaxOptions = $.extend({
							url: rp_ge[$t.p.id].url || $($t).jqGrid('getGridParam','editurl'),
							type: rp_ge[$t.p.id].mtype,
							data: $.isFunction(rp_ge[$t.p.id].serializeDelData) ? rp_ge[$t.p.id].serializeDelData.call($t,postd) : postd,
							complete:function(data,status){
								var i;
								if(data.status >= 300 && data.status !== 304) {
									ret[0] = false;
									if ($.isFunction(rp_ge[$t.p.id].errorTextFormat)) {
										ret[1] = rp_ge[$t.p.id].errorTextFormat.call($t,data);
									} else {
										ret[1] = status + " Status: '" + data.statusText + "'. Error code: " + data.status;
									}
								} else {
									// data is posted successful
									// execute aftersubmit with the returned data from server
									if( $.isFunction( rp_ge[$t.p.id].afterSubmit ) ) {
										ret = rp_ge[$t.p.id].afterSubmit.call($t,data,postd);
									}
								}
								if(ret[0] === false) {
									$("#DelError>td","#"+dtbl).html(ret[1]);
									$("#DelError","#"+dtbl).show();
								} else {
									if(rp_ge[$t.p.id].reloadAfterSubmit && $t.p.datatype !== "local") {
										$($t).trigger("reloadGrid");
									} else {
										if($t.p.treeGrid===true){
												try {$($t).jqGrid("delTreeNode",$t.p.idPrefix+postdata[0]);} catch(e){}
										} else {
											for(i=0;i<postdata.length;i++) {
												$($t).jqGrid("delRowData",$t.p.idPrefix+ postdata[i]);
											}
										}
										$t.p.selrow = null;
										$t.p.selarrrow = [];
									}
									if($.isFunction(rp_ge[$t.p.id].afterComplete)) {
										setTimeout(function(){rp_ge[$t.p.id].afterComplete.call($t,data,postdata);},500);
									}
								}
								rp_ge[$t.p.id].processing=false;
								$("#dData", "#"+dtbl+"_2").removeClass('ui-state-active');
								if(ret[0]) {$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal, onClose: rp_ge[$t.p.id].onClose});}
							}
						}, $.jgrid.ajaxOptions, rp_ge[$t.p.id].ajaxDelOptions);


						if (!ajaxOptions.url && !rp_ge[$t.p.id].useDataProxy) {
							if ($.isFunction($t.p.dataProxy)) {
								rp_ge[$t.p.id].useDataProxy = true;
							} else {
								ret[0]=false;ret[1] += " "+$.jgrid.errors.nourl;
							}
						}
						if (ret[0]) {
							if (rp_ge[$t.p.id].useDataProxy) {
								var dpret = $t.p.dataProxy.call($t, ajaxOptions, "del_"+$t.p.id); 
								if(dpret === undefined) {
									dpret = [true, ""];
								}
								if(dpret[0] === false ) {
									ret[0] = false;
									ret[1] = dpret[1] || "Error deleting the selected row!" ;
								} else {
									$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:p.jqModal, onClose: rp_ge[$t.p.id].onClose});
								}
							}
							else {$.ajax(ajaxOptions);}
						}
					}

					if(ret[0] === false) {
						$("#DelError>td","#"+dtbl).html(ret[1]);
						$("#DelError","#"+dtbl).show();
					}
					return false;
				});
				$("#eData", "#"+dtbl+"_2").click(function(){
					$.jgrid.hideModal("#"+$.jgrid.jqID(IDs.themodal),{gb:"#gbox_"+$.jgrid.jqID(gID),jqm:rp_ge[$t.p.id].jqModal, onClose: rp_ge[$t.p.id].onClose});
					return false;
				});
				if(onBeforeShow) {rp_ge[$t.p.id].beforeShowForm.call($t,$("#"+dtbl));}
				$.jgrid.viewModal("#"+$.jgrid.jqID(IDs.themodal),{gbox:"#gbox_"+$.jgrid.jqID(gID),jqm:rp_ge[$t.p.id].jqModal, overlay: rp_ge[$t.p.id].overlay, modal:rp_ge[$t.p.id].modal});
				if(onAfterShow) {rp_ge[$t.p.id].afterShowForm.call($t,$("#"+dtbl));}
			}
			if(rp_ge[$t.p.id].closeOnEscape===true) {
				setTimeout(function(){$(".ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(IDs.modalhead)).focus();},0);
			}
		});
	},
	navGrid : function (elem, o, pEdit,pAdd,pDel,pSearch, pView) {
		o = $.extend({
			edit: true,
			editicon: "ui-icon-pencil",
			add: true,
			addicon:"ui-icon-plus",
			del: true,
			delicon:"ui-icon-trash",
			search: true,
			searchicon:"ui-icon-search",
			refresh: true,
			refreshicon:"ui-icon-refresh",
			refreshstate: 'firstpage',
			view: false,
			viewicon : "ui-icon-document",
			position : "left",
			closeOnEscape : true,
			beforeRefresh : null,
			afterRefresh : null,
			cloneToTop : false,
			alertwidth : 200,
			alertheight : 'auto',
			alerttop: null,
			alertleft: null,
			alertzIndex : null
		}, $.jgrid.nav, o ||{});
		return this.each(function() {
			if(this.nav) {return;}
			var alertIDs = {themodal: 'alertmod_' + this.p.id, modalhead: 'alerthd_' + this.p.id,modalcontent: 'alertcnt_' + this.p.id},
			$t = this, twd, tdw;
			if(!$t.grid || typeof elem !== 'string') {return;}
			if ($("#"+alertIDs.themodal)[0] === undefined) {
				if(!o.alerttop && !o.alertleft) {
					if (window.innerWidth !== undefined) {
						o.alertleft = window.innerWidth;
						o.alerttop = window.innerHeight;
					} else if (document.documentElement !== undefined && document.documentElement.clientWidth !== undefined && document.documentElement.clientWidth !== 0) {
						o.alertleft = document.documentElement.clientWidth;
						o.alerttop = document.documentElement.clientHeight;
					} else {
						o.alertleft=1024;
						o.alerttop=768;
					}
					o.alertleft = o.alertleft/2 - parseInt(o.alertwidth,10)/2;
					o.alerttop = o.alerttop/2-25;
				}
				$.jgrid.createModal(alertIDs,
					"<div>"+o.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",
					{ 
						gbox:"#gbox_"+$.jgrid.jqID($t.p.id),
						jqModal:true,
						drag:true,
						resize:true,
						caption:o.alertcap,
						top:o.alerttop,
						left:o.alertleft,
						width:o.alertwidth,
						height: o.alertheight,
						closeOnEscape:o.closeOnEscape, 
						zIndex: o.alertzIndex
					},
					"#gview_"+$.jgrid.jqID($t.p.id),
					$("#gbox_"+$.jgrid.jqID($t.p.id))[0],
					true
				);
			}
			var clone = 1, i,
			onHoverIn = function () {
				if (!$(this).hasClass('ui-state-disabled')) {
					$(this).addClass("ui-state-hover");
				}
			},
			onHoverOut = function () {
				$(this).removeClass("ui-state-hover");
			};
			if(o.cloneToTop && $t.p.toppager) {clone = 2;}
			for(i = 0; i<clone; i++) {
				var tbd,
				navtbl = $("<table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table navtable' style='float:left;table-layout:auto;'><tbody><tr></tr></tbody></table>"),
				sep = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>",
				pgid, elemids;
				if(i===0) {
					pgid = elem;
					elemids = $t.p.id;
					if(pgid === $t.p.toppager) {
						elemids += "_top";
						clone = 1;
					}
				} else {
					pgid = $t.p.toppager;
					elemids = $t.p.id+"_top";
				}
				if($t.p.direction === "rtl") {$(navtbl).attr("dir","rtl").css("float","right");}
				if (o.add) {
					pAdd = pAdd || {};
					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");
					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.addicon+"'></span>"+o.addtext+"</div>");
					$("tr",navtbl).append(tbd);
					$(tbd,navtbl)
					.attr({"title":o.addtitle || "",id : pAdd.id || "add_"+elemids})
					.click(function(){
						if (!$(this).hasClass('ui-state-disabled')) {
							if ($.isFunction( o.addfunc )) {
								o.addfunc.call($t);
							} else {
								$($t).jqGrid("editGridRow","new",pAdd);
							}
						}
						return false;
					}).hover(onHoverIn, onHoverOut);
					tbd = null;
				}
				if (o.edit) {
					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");
					pEdit = pEdit || {};
					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.editicon+"'></span>"+o.edittext+"</div>");
					$("tr",navtbl).append(tbd);
					$(tbd,navtbl)
					.attr({"title":o.edittitle || "",id: pEdit.id || "edit_"+elemids})
					.click(function(){
						if (!$(this).hasClass('ui-state-disabled')) {
							var sr = $t.p.selrow;
							if (sr) {
								if($.isFunction( o.editfunc ) ) {
									o.editfunc.call($t, sr);
								} else {
									$($t).jqGrid("editGridRow",sr,pEdit);
								}
							} else {
								$.jgrid.viewModal("#"+alertIDs.themodal,{gbox:"#gbox_"+$.jgrid.jqID($t.p.id),jqm:true});
								$("#jqg_alrt").focus();
							}
						}
						return false;
					}).hover(onHoverIn, onHoverOut);
					tbd = null;
				}
				if (o.view) {
					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");
					pView = pView || {};
					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.viewicon+"'></span>"+o.viewtext+"</div>");
					$("tr",navtbl).append(tbd);
					$(tbd,navtbl)
					.attr({"title":o.viewtitle || "",id: pView.id || "view_"+elemids})
					.click(function(){
						if (!$(this).hasClass('ui-state-disabled')) {
							var sr = $t.p.selrow;
							if (sr) {
								if($.isFunction( o.viewfunc ) ) {
									o.viewfunc.call($t, sr);
								} else {
									$($t).jqGrid("viewGridRow",sr,pView);
								}
							} else {
								$.jgrid.viewModal("#"+alertIDs.themodal,{gbox:"#gbox_"+$.jgrid.jqID($t.p.id),jqm:true});
								$("#jqg_alrt").focus();
							}
						}
						return false;
					}).hover(onHoverIn, onHoverOut);
					tbd = null;
				}
				if (o.del) {
					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");
					pDel = pDel || {};
					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.delicon+"'></span>"+o.deltext+"</div>");
					$("tr",navtbl).append(tbd);
					$(tbd,navtbl)
					.attr({"title":o.deltitle || "",id: pDel.id || "del_"+elemids})
					.click(function(){
						if (!$(this).hasClass('ui-state-disabled')) {
							var dr;
							if($t.p.multiselect) {
								dr = $t.p.selarrrow;
								if(dr.length===0) {dr = null;}
							} else {
								dr = $t.p.selrow;
							}
							if(dr){
								if($.isFunction( o.delfunc )){
									o.delfunc.call($t, dr);
								}else{
									$($t).jqGrid("delGridRow",dr,pDel);
								}
							} else  {
								$.jgrid.viewModal("#"+alertIDs.themodal,{gbox:"#gbox_"+$.jgrid.jqID($t.p.id),jqm:true});$("#jqg_alrt").focus();
							}
						}
						return false;
					}).hover(onHoverIn, onHoverOut);
					tbd = null;
				}
				if(o.add || o.edit || o.del || o.view) {$("tr",navtbl).append(sep);}
				if (o.search) {
					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");
					pSearch = pSearch || {};
					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.searchicon+"'></span>"+o.searchtext+"</div>");
					$("tr",navtbl).append(tbd);
					$(tbd,navtbl)
					.attr({"title":o.searchtitle  || "",id:pSearch.id || "search_"+elemids})
					.click(function(){
						if (!$(this).hasClass('ui-state-disabled')) {
							if($.isFunction( o.searchfunc )) {
								o.searchfunc.call($t, pSearch);
							} else {
								$($t).jqGrid("searchGrid",pSearch);
							}
						}
						return false;
					}).hover(onHoverIn, onHoverOut);
					if (pSearch.showOnLoad && pSearch.showOnLoad === true) {
						$(tbd,navtbl).click();
					}
					tbd = null;
				}
				if (o.refresh) {
					tbd = $("<td class='ui-pg-button ui-corner-all'></td>");
					$(tbd).append("<div class='ui-pg-div'><span class='ui-icon "+o.refreshicon+"'></span>"+o.refreshtext+"</div>");
					$("tr",navtbl).append(tbd);
					$(tbd,navtbl)
					.attr({"title":o.refreshtitle  || "",id: "refresh_"+elemids})
					.click(function(){
						if (!$(this).hasClass('ui-state-disabled')) {
							if($.isFunction(o.beforeRefresh)) {o.beforeRefresh.call($t);}
							$t.p.search = false;
							$t.p.resetsearch =  true;
							try {
								var gID = $t.p.id;
								$t.p.postData.filters ="";
								try {
								$("#fbox_"+$.jgrid.jqID(gID)).jqFilter('resetFilter');
								} catch(ef) {}
								if($.isFunction($t.clearToolbar)) {$t.clearToolbar.call($t,false);}
							} catch (e) {}
							switch (o.refreshstate) {
								case 'firstpage':
									$($t).trigger("reloadGrid", [{page:1}]);
									break;
								case 'current':
									$($t).trigger("reloadGrid", [{current:true}]);
									break;
							}
							if($.isFunction(o.afterRefresh)) {o.afterRefresh.call($t);}
						}
						return false;
					}).hover(onHoverIn, onHoverOut);
					tbd = null;
				}
				tdw = $(".ui-jqgrid").css("font-size") || "11px";
				$('body').append("<div id='testpg2' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+tdw+";visibility:hidden;' ></div>");
				twd = $(navtbl).clone().appendTo("#testpg2").width();
				$("#testpg2").remove();
				$(pgid+"_"+o.position,pgid).append(navtbl);
				if($t.p._nvtd) {
					if(twd > $t.p._nvtd[0] ) {
						$(pgid+"_"+o.position,pgid).width(twd);
						$t.p._nvtd[0] = twd;
					}
					$t.p._nvtd[1] = twd;
				}
				tdw =null;twd=null;navtbl =null;
				this.nav = true;
			}
		});
	},
	navButtonAdd : function (elem, p) {
		p = $.extend({
			caption : "newButton",
			title: '',
			buttonicon : 'ui-icon-newwin',
			onClickButton: null,
			position : "last",
			cursor : 'pointer'
		}, p ||{});
		return this.each(function() {
			if( !this.grid)  {return;}
			if( typeof elem === "string" && elem.indexOf("#") !== 0) {elem = "#"+$.jgrid.jqID(elem);}
			var findnav = $(".navtable",elem)[0], $t = this;
			if (findnav) {
				if( p.id && $("#"+$.jgrid.jqID(p.id), findnav)[0] !== undefined )  {return;}
				var tbd = $("<td></td>");
				if(p.buttonicon.toString().toUpperCase() === "NONE") {
                    $(tbd).addClass('ui-pg-button ui-corner-all').append("<div class='ui-pg-div'>"+p.caption+"</div>");
				} else	{
					$(tbd).addClass('ui-pg-button ui-corner-all').append("<div class='ui-pg-div'><span class='ui-icon "+p.buttonicon+"'></span>"+p.caption+"</div>");
				}
				if(p.id) {$(tbd).attr("id",p.id);}
				if(p.position==='first'){
					if(findnav.rows[0].cells.length ===0 ) {
						$("tr",findnav).append(tbd);
					} else {
						$("tr td:eq(0)",findnav).before(tbd);
					}
				} else {
					$("tr",findnav).append(tbd);
				}
				$(tbd,findnav)
				.attr("title",p.title  || "")
				.click(function(e){
					if (!$(this).hasClass('ui-state-disabled')) {
						if ($.isFunction(p.onClickButton) ) {p.onClickButton.call($t,e);}
					}
					return false;
				})
				.hover(
					function () {
						if (!$(this).hasClass('ui-state-disabled')) {
							$(this).addClass('ui-state-hover');
						}
					},
					function () {$(this).removeClass("ui-state-hover");}
				);
			}
		});
	},
	navSeparatorAdd:function (elem,p) {
		p = $.extend({
			sepclass : "ui-separator",
			sepcontent: '',
			position : "last"
		}, p ||{});
		return this.each(function() {
			if( !this.grid)  {return;}
			if( typeof elem === "string" && elem.indexOf("#") !== 0) {elem = "#"+$.jgrid.jqID(elem);}
			var findnav = $(".navtable",elem)[0];
			if(findnav) {
				var sep = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='"+p.sepclass+"'></span>"+p.sepcontent+"</td>";
				if (p.position === 'first') {
					if (findnav.rows[0].cells.length === 0) {
						$("tr", findnav).append(sep);
					} else {
						$("tr td:eq(0)", findnav).before(sep);
					}
				} else {
					$("tr", findnav).append(sep);
				}
			}
		});
	},
	GridToForm : function( rowid, formid ) {
		return this.each(function(){
			var $t = this, i;
			if (!$t.grid) {return;}
			var rowdata = $($t).jqGrid("getRowData",rowid);
			if (rowdata) {
				for(i in rowdata) {
					if(rowdata.hasOwnProperty(i)) {
					if ( $("[name="+$.jgrid.jqID(i)+"]",formid).is("input:radio") || $("[name="+$.jgrid.jqID(i)+"]",formid).is("input:checkbox"))  {
						$("[name="+$.jgrid.jqID(i)+"]",formid).each( function() {
							if( $(this).val() == rowdata[i] ) {
								$(this)[$t.p.useProp ? 'prop': 'attr']("checked",true);
							} else {
								$(this)[$t.p.useProp ? 'prop': 'attr']("checked", false);
							}
						});
					} else {
					// this is very slow on big table and form.
						$("[name="+$.jgrid.jqID(i)+"]",formid).val(rowdata[i]);
					}
				}
			}
			}
		});
	},
	FormToGrid : function(rowid, formid, mode, position){
		return this.each(function() {
			var $t = this;
			if(!$t.grid) {return;}
			if(!mode) {mode = 'set';}
			if(!position) {position = 'first';}
			var fields = $(formid).serializeArray();
			var griddata = {};
			$.each(fields, function(i, field){
				griddata[field.name] = field.value;
			});
			if(mode==='add') {$($t).jqGrid("addRowData",rowid,griddata, position);}
			else if(mode==='set') {$($t).jqGrid("setRowData",rowid,griddata);}
		});
	}
});
})(jQuery);
/*jshint eqeqeq:false, eqnull:true, devel:true */
/*global jQuery */
(function($){
/**
 * jqGrid extension for manipulating Grid Data
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
**/ 
"use strict";
$.jgrid.inlineEdit = $.jgrid.inlineEdit || {};
$.jgrid.extend({
//Editing
	editRow : function(rowid,keys,oneditfunc,successfunc, url, extraparam, aftersavefunc,errorfunc, afterrestorefunc) {
		// Compatible mode old versions
		var o={}, args = $.makeArray(arguments).slice(1);

		if( $.type(args[0]) === "object" ) {
			o = args[0];
		} else {
			if (keys !== undefined) { o.keys = keys; }
			if ($.isFunction(oneditfunc)) { o.oneditfunc = oneditfunc; }
			if ($.isFunction(successfunc)) { o.successfunc = successfunc; }
			if (url !== undefined) { o.url = url; }
			if (extraparam !== undefined) { o.extraparam = extraparam; }
			if ($.isFunction(aftersavefunc)) { o.aftersavefunc = aftersavefunc; }
			if ($.isFunction(errorfunc)) { o.errorfunc = errorfunc; }
			if ($.isFunction(afterrestorefunc)) { o.afterrestorefunc = afterrestorefunc; }
			// last two not as param, but as object (sorry)
			//if (restoreAfterError !== undefined) { o.restoreAfterError = restoreAfterError; }
			//if (mtype !== undefined) { o.mtype = mtype || "POST"; }			
		}
		o = $.extend(true, {
			keys : false,
			oneditfunc: null,
			successfunc: null,
			url: null,
			extraparam: {},
			aftersavefunc: null,
			errorfunc: null,
			afterrestorefunc: null,
			restoreAfterError: true,
			mtype: "POST"
		}, $.jgrid.inlineEdit, o );

		// End compatible
		return this.each(function(){
			var $t = this, nm, tmp, editable, cnt=0, focus=null, svr={}, ind,cm, bfer;
			if (!$t.grid ) { return; }
			ind = $($t).jqGrid("getInd",rowid,true);
			if( ind === false ) {return;}
			bfer = $.isFunction( o.beforeEditRow ) ? o.beforeEditRow.call($t,o, rowid) :  undefined;
			if( bfer === undefined ) {
				bfer = true;
			}
			if(!bfer) { return; }
			editable = $(ind).attr("editable") || "0";
			if (editable === "0" && !$(ind).hasClass("not-editable-row")) {
				cm = $t.p.colModel;
				$('td[role="gridcell"]',ind).each( function(i) {
					nm = cm[i].name;
					var treeg = $t.p.treeGrid===true && nm === $t.p.ExpandColumn;
					if(treeg) { tmp = $("span:first",this).html();}
					else {
						try {
							tmp = $.unformat.call($t,this,{rowId:rowid, colModel:cm[i]},i);
						} catch (_) {
							tmp =  ( cm[i].edittype && cm[i].edittype === 'textarea' ) ? $(this).text() : $(this).html();
						}
					}
					if ( nm !== 'cb' && nm !== 'subgrid' && nm !== 'rn') {
						if($t.p.autoencode) { tmp = $.jgrid.htmlDecode(tmp); }
						svr[nm]=tmp;
						if(cm[i].editable===true) {
							if(focus===null) { focus = i; }
							if (treeg) { $("span:first",this).html(""); }
							else { $(this).html(""); }
							var opt = $.extend({},cm[i].editoptions || {},{id:rowid+"_"+nm,name:nm});
							if(!cm[i].edittype) { cm[i].edittype = "text"; }
							if(tmp === "&nbsp;" || tmp === "&#160;" || (tmp.length===1 && tmp.charCodeAt(0)===160) ) {tmp='';}
							var elc = $.jgrid.createEl.call($t,cm[i].edittype,opt,tmp,true,$.extend({},$.jgrid.ajaxOptions,$t.p.ajaxSelectOptions || {}));
							$(elc).addClass("editable");
							if(treeg) { $("span:first",this).append(elc); }
							else { $(this).append(elc); }
							$.jgrid.bindEv.call($t, elc, opt);
							//Again IE
							if(cm[i].edittype === "select" && cm[i].editoptions!==undefined && cm[i].editoptions.multiple===true  && cm[i].editoptions.dataUrl===undefined && $.jgrid.msie) {
								$(elc).width($(elc).width());
							}
							cnt++;
						}
					}
				});
				if(cnt > 0) {
					svr.id = rowid; $t.p.savedRow.push(svr);
					$(ind).attr("editable","1");
					setTimeout(function(){$("td:eq("+focus+") input",ind).focus();},0);
					if(o.keys===true) {
						$(ind).bind("keydown",function(e) {
							if (e.keyCode === 27) {
								$($t).jqGrid("restoreRow",rowid, o.afterrestorefunc);
								if($t.p._inlinenav) {
									try {
										$($t).jqGrid('showAddEditButtons');
									} catch (eer1) {}
								}
								return false;
							}
							if (e.keyCode === 13) {
								var ta = e.target;
								if(ta.tagName === 'TEXTAREA') { return true; }
								if( $($t).jqGrid("saveRow", rowid, o ) ) {
									if($t.p._inlinenav) {
										try {
											$($t).jqGrid('showAddEditButtons');
										} catch (eer2) {}
									}
								}
								return false;
							}
						});
					}
					$($t).triggerHandler("jqGridInlineEditRow", [rowid, o]);
					if( $.isFunction(o.oneditfunc)) { o.oneditfunc.call($t, rowid); }
				}
			}
		});
	},
	saveRow : function(rowid, successfunc, url, extraparam, aftersavefunc,errorfunc, afterrestorefunc) {
		// Compatible mode old versions
		var args = $.makeArray(arguments).slice(1), o = {};

		if( $.type(args[0]) === "object" ) {
			o = args[0];
		} else {
			if ($.isFunction(successfunc)) { o.successfunc = successfunc; }
			if (url !== undefined) { o.url = url; }
			if (extraparam !== undefined) { o.extraparam = extraparam; }
			if ($.isFunction(aftersavefunc)) { o.aftersavefunc = aftersavefunc; }
			if ($.isFunction(errorfunc)) { o.errorfunc = errorfunc; }
			if ($.isFunction(afterrestorefunc)) { o.afterrestorefunc = afterrestorefunc; }
		}
		o = $.extend(true, {
			successfunc: null,
			url: null,
			extraparam: {},
			aftersavefunc: null,
			errorfunc: null,
			afterrestorefunc: null,
			restoreAfterError: true,
			mtype: "POST"
		}, $.jgrid.inlineEdit, o );
		// End compatible

		var success = false;
		var $t = this[0], nm, tmp={}, tmp2={}, tmp3= {}, editable, fr, cv, ind;
		if (!$t.grid ) { return success; }
		ind = $($t).jqGrid("getInd",rowid,true);
		if(ind === false) {return success;}
		var bfsr = $.isFunction( o.beforeSaveRow ) ?	o.beforeSaveRow.call($t,o, rowid) :  undefined;
		if( bfsr === undefined ) {
			bfsr = true;
		}
		if(!bfsr) { return; }
		editable = $(ind).attr("editable");
		o.url = o.url || $t.p.editurl;
		if (editable==="1") {
			var cm;
			$('td[role="gridcell"]',ind).each(function(i) {
				cm = $t.p.colModel[i];
				nm = cm.name;
				if ( nm !== 'cb' && nm !== 'subgrid' && cm.editable===true && nm !== 'rn' && !$(this).hasClass('not-editable-cell')) {
					switch (cm.edittype) {
						case "checkbox":
							var cbv = ["Yes","No"];
							if(cm.editoptions ) {
								cbv = cm.editoptions.value.split(":");
							}
							tmp[nm]=  $("input",this).is(":checked") ? cbv[0] : cbv[1]; 
							break;
						case 'text':
						case 'password':
						case 'textarea':
						case "button" :
							tmp[nm]=$("input, textarea",this).val();
							break;
						case 'select':
							if(!cm.editoptions.multiple) {
								tmp[nm] = $("select option:selected",this).val();
								tmp2[nm] = $("select option:selected", this).text();
							} else {
								var sel = $("select",this), selectedText = [];
								tmp[nm] = $(sel).val();
								if(tmp[nm]) { tmp[nm]= tmp[nm].join(","); } else { tmp[nm] =""; }
								$("select option:selected",this).each(
									function(i,selected){
										selectedText[i] = $(selected).text();
									}
								);
								tmp2[nm] = selectedText.join(",");
							}
							if(cm.formatter && cm.formatter === 'select') { tmp2={}; }
							break;
						case 'custom' :
							try {
								if(cm.editoptions && $.isFunction(cm.editoptions.custom_value)) {
									tmp[nm] = cm.editoptions.custom_value.call($t, $(".customelement",this),'get');
									if (tmp[nm] === undefined) { throw "e2"; }
								} else { throw "e1"; }
							} catch (e) {
								if (e==="e1") { $.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.nodefined,$.jgrid.edit.bClose); }
								if (e==="e2") { $.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.novalue,$.jgrid.edit.bClose); }
								else { $.jgrid.info_dialog($.jgrid.errors.errcap,e.message,$.jgrid.edit.bClose); }
							}
							break;
					}
					cv = $.jgrid.checkValues.call($t,tmp[nm],i);
					if(cv[0] === false) {
						return false;
					}
					if($t.p.autoencode) { tmp[nm] = $.jgrid.htmlEncode(tmp[nm]); }
					if(o.url !== 'clientArray' && cm.editoptions && cm.editoptions.NullIfEmpty === true) {
						if(tmp[nm] === "") {
							tmp3[nm] = 'null';
						}
					}
				}
			});
			if (cv[0] === false){
				try {
					var tr = $($t).jqGrid('getGridRowById', rowid), positions = $.jgrid.findPos(tr);
					$.jgrid.info_dialog($.jgrid.errors.errcap,cv[1],$.jgrid.edit.bClose,{left:positions[0],top:positions[1]+$(tr).outerHeight()});
				} catch (e) {
					alert(cv[1]);
				}
				return success;
			}
			var idname, opers = $t.p.prmNames, oldRowId = rowid;
			if ($t.p.keyIndex === false) {
				idname = opers.id;
			} else {
				idname = $t.p.colModel[$t.p.keyIndex +
					($t.p.rownumbers === true ? 1 : 0) +
					($t.p.multiselect === true ? 1 : 0) +
					($t.p.subGrid === true ? 1 : 0)].name;
			}
			if(tmp) {
				tmp[opers.oper] = opers.editoper;
				if (tmp[idname] === undefined || tmp[idname]==="") {
					tmp[idname] = rowid;
				} else if (ind.id !== $t.p.idPrefix + tmp[idname]) {
					// rename rowid
					var oldid = $.jgrid.stripPref($t.p.idPrefix, rowid);
					if ($t.p._index[oldid] !== undefined) {
						$t.p._index[tmp[idname]] = $t.p._index[oldid];
						delete $t.p._index[oldid];
					}
					rowid = $t.p.idPrefix + tmp[idname];
					$(ind).attr("id", rowid);
					if ($t.p.selrow === oldRowId) {
						$t.p.selrow = rowid;
					}
					if ($.isArray($t.p.selarrrow)) {
						var i = $.inArray(oldRowId, $t.p.selarrrow);
						if (i>=0) {
							$t.p.selarrrow[i] = rowid;
						}
					}
					if ($t.p.multiselect) {
						var newCboxId = "jqg_" + $t.p.id + "_" + rowid;
						$("input.cbox",ind)
							.attr("id", newCboxId)
							.attr("name", newCboxId);
					}
					// TODO: to test the case of frozen columns
				}
				if($t.p.inlineData === undefined) { $t.p.inlineData ={}; }
				tmp = $.extend({},tmp,$t.p.inlineData,o.extraparam);
			}
			if (o.url === 'clientArray') {
				tmp = $.extend({},tmp, tmp2);
				if($t.p.autoencode) {
					$.each(tmp,function(n,v){
						tmp[n] = $.jgrid.htmlDecode(v);
					});
				}
				var k, resp = $($t).jqGrid("setRowData",rowid,tmp);
				$(ind).attr("editable","0");
				for(k=0;k<$t.p.savedRow.length;k++) {
					if( String($t.p.savedRow[k].id) === String(oldRowId)) {fr = k; break;}
				}
				if(fr >= 0) { $t.p.savedRow.splice(fr,1); }
				$($t).triggerHandler("jqGridInlineAfterSaveRow", [rowid, resp, tmp, o]);
				if( $.isFunction(o.aftersavefunc) ) { o.aftersavefunc.call($t, rowid,resp, o); }
				success = true;
				$(ind).removeClass("jqgrid-new-row").unbind("keydown");
			} else {
				$("#lui_"+$.jgrid.jqID($t.p.id)).show();
				tmp3 = $.extend({},tmp,tmp3);
				tmp3[idname] = $.jgrid.stripPref($t.p.idPrefix, tmp3[idname]);
				$.ajax($.extend({
					url:o.url,
					data: $.isFunction($t.p.serializeRowData) ? $t.p.serializeRowData.call($t, tmp3) : tmp3,
					type: o.mtype,
					async : false, //?!?
					complete: function(res,stat){
						$("#lui_"+$.jgrid.jqID($t.p.id)).hide();
						if (stat === "success"){
							var ret = true, sucret, k;
							sucret = $($t).triggerHandler("jqGridInlineSuccessSaveRow", [res, rowid, o]);
							if (!$.isArray(sucret)) {sucret = [true, tmp];}
							if (sucret[0] && $.isFunction(o.successfunc)) {sucret = o.successfunc.call($t, res);}							
							if($.isArray(sucret)) {
								// expect array - status, data, rowid
								ret = sucret[0];
								tmp = sucret[1] || tmp;
							} else {
								ret = sucret;
							}
							if (ret===true) {
								if($t.p.autoencode) {
									$.each(tmp,function(n,v){
										tmp[n] = $.jgrid.htmlDecode(v);
									});
								}
								tmp = $.extend({},tmp, tmp2);
								$($t).jqGrid("setRowData",rowid,tmp);
								$(ind).attr("editable","0");
								for(k=0;k<$t.p.savedRow.length;k++) {
									if( String($t.p.savedRow[k].id) === String(rowid)) {fr = k; break;}
								}
								if(fr >= 0) { $t.p.savedRow.splice(fr,1); }
								$($t).triggerHandler("jqGridInlineAfterSaveRow", [rowid, res, tmp, o]);
								if( $.isFunction(o.aftersavefunc) ) { o.aftersavefunc.call($t, rowid,res); }
								success = true;
								$(ind).removeClass("jqgrid-new-row").unbind("keydown");
							} else {
								$($t).triggerHandler("jqGridInlineErrorSaveRow", [rowid, res, stat, null, o]);
								if($.isFunction(o.errorfunc) ) {
									o.errorfunc.call($t, rowid, res, stat, null);
								}
								if(o.restoreAfterError === true) {
									$($t).jqGrid("restoreRow",rowid, o.afterrestorefunc);
								}
							}
						}
					},
					error:function(res,stat,err){
						$("#lui_"+$.jgrid.jqID($t.p.id)).hide();
						$($t).triggerHandler("jqGridInlineErrorSaveRow", [rowid, res, stat, err, o]);
						if($.isFunction(o.errorfunc) ) {
							o.errorfunc.call($t, rowid, res, stat, err);
						} else {
							var rT = res.responseText || res.statusText;
							try {
								$.jgrid.info_dialog($.jgrid.errors.errcap,'<div class="ui-state-error">'+ rT +'</div>', $.jgrid.edit.bClose,{buttonalign:'right'});
							} catch(e) {
								alert(rT);
							}
						}
						if(o.restoreAfterError === true) {
							$($t).jqGrid("restoreRow",rowid, o.afterrestorefunc);
						}
					}
				}, $.jgrid.ajaxOptions, $t.p.ajaxRowOptions || {}));
			}
		}
		return success;
	},
	restoreRow : function(rowid, afterrestorefunc) {
		// Compatible mode old versions
		var args = $.makeArray(arguments).slice(1), o={};

		if( $.type(args[0]) === "object" ) {
			o = args[0];
		} else {
			if ($.isFunction(afterrestorefunc)) { o.afterrestorefunc = afterrestorefunc; }
		}
		o = $.extend(true, {}, $.jgrid.inlineEdit, o );

		// End compatible

		return this.each(function(){
			var $t= this, fr=-1, ind, ares={}, k;
			if (!$t.grid ) { return; }
			ind = $($t).jqGrid("getInd",rowid,true);
			if(ind === false) {return;}
			var bfcr = $.isFunction( o.beforeCancelRow ) ?	o.beforeCancelRow.call($t, o, sr) :  undefined;
			if( bfcr === undefined ) {
				bfcr = true;
			}
			if(!bfcr) { return; }
			for(k=0;k<$t.p.savedRow.length;k++) {
				if( String($t.p.savedRow[k].id) === String(rowid)) {fr = k; break;}
			}
			if(fr >= 0) {
				if($.isFunction($.fn.datepicker)) {
					try {
						$("input.hasDatepicker","#"+$.jgrid.jqID(ind.id)).datepicker('hide');
					} catch (e) {}
				}
				$.each($t.p.colModel, function(){
					if(this.editable === true && $t.p.savedRow[fr].hasOwnProperty(this.name)) {
						ares[this.name] = $t.p.savedRow[fr][this.name];
					}
				});
				$($t).jqGrid("setRowData",rowid,ares);
				$(ind).attr("editable","0").unbind("keydown");
				$t.p.savedRow.splice(fr,1);
				if($("#"+$.jgrid.jqID(rowid), "#"+$.jgrid.jqID($t.p.id)).hasClass("jqgrid-new-row")){
					setTimeout(function(){
						$($t).jqGrid("delRowData",rowid);
						$($t).jqGrid('showAddEditButtons');
					},0);
				}
			}
			$($t).triggerHandler("jqGridInlineAfterRestoreRow", [rowid]);
			if ($.isFunction(o.afterrestorefunc))
			{
				o.afterrestorefunc.call($t, rowid);
			}
		});
	},
	addRow : function ( p ) {
		p = $.extend(true, {
			rowID : null,
			initdata : {},
			position :"first",
			useDefValues : true,
			useFormatter : false,
			addRowParams : {extraparam:{}}
		},p  || {});
		return this.each(function(){
			if (!this.grid ) { return; }
			var $t = this;
			var bfar = $.isFunction( p.beforeAddRow ) ?	p.beforeAddRow.call($t,p.addRowParams) :  undefined;
			if( bfar === undefined ) {
				bfar = true;
			}
			if(!bfar) { return; }
			p.rowID = $.isFunction(p.rowID) ? p.rowID.call($t, p) : ( (p.rowID != null) ? p.rowID : $.jgrid.randId());
			if(p.useDefValues === true) {
				$($t.p.colModel).each(function(){
					if( this.editoptions && this.editoptions.defaultValue ) {
						var opt = this.editoptions.defaultValue,
						tmp = $.isFunction(opt) ? opt.call($t) : opt;
						p.initdata[this.name] = tmp;
					}
				});
			}
			$($t).jqGrid('addRowData', p.rowID, p.initdata, p.position);
			p.rowID = $t.p.idPrefix + p.rowID;
			$("#"+$.jgrid.jqID(p.rowID), "#"+$.jgrid.jqID($t.p.id)).addClass("jqgrid-new-row");
			if(p.useFormatter) {
				$("#"+$.jgrid.jqID(p.rowID)+" .ui-inline-edit", "#"+$.jgrid.jqID($t.p.id)).click();
			} else {
				var opers = $t.p.prmNames,
				oper = opers.oper;
				p.addRowParams.extraparam[oper] = opers.addoper;
				$($t).jqGrid('editRow', p.rowID, p.addRowParams);
				$($t).jqGrid('setSelection', p.rowID);
			}
		});
	},
	inlineNav : function (elem, o) {
		o = $.extend(true,{
			edit: true,
			editicon: "ui-icon-pencil",
			add: true,
			addicon:"ui-icon-plus",
			save: true,
			saveicon:"ui-icon-disk",
			cancel: true,
			cancelicon:"ui-icon-cancel",
			addParams : {addRowParams: {extraparam: {}}},
			editParams : {},
			restoreAfterSelect : true
		}, $.jgrid.nav, o ||{});
		return this.each(function(){
			if (!this.grid ) { return; }
			var $t = this, onSelect, gID = $.jgrid.jqID($t.p.id);
			$t.p._inlinenav = true;
			// detect the formatactions column
			if(o.addParams.useFormatter === true) {
				var cm = $t.p.colModel,i;
				for (i = 0; i<cm.length; i++) {
					if(cm[i].formatter && cm[i].formatter === "actions" ) {
						if(cm[i].formatoptions) {
							var defaults =  {
								keys:false,
								onEdit : null,
								onSuccess: null,
								afterSave:null,
								onError: null,
								afterRestore: null,
								extraparam: {},
								url: null
							},
							ap = $.extend( defaults, cm[i].formatoptions );
							o.addParams.addRowParams = {
								"keys" : ap.keys,
								"oneditfunc" : ap.onEdit,
								"successfunc" : ap.onSuccess,
								"url" : ap.url,
								"extraparam" : ap.extraparam,
								"aftersavefunc" : ap.afterSave,
								"errorfunc": ap.onError,
								"afterrestorefunc" : ap.afterRestore
							};
						}
						break;
					}
				}
			}
			if(o.add) {
				$($t).jqGrid('navButtonAdd', elem,{
					caption : o.addtext,
					title : o.addtitle,
					buttonicon : o.addicon,
					id : $t.p.id+"_iladd",
					onClickButton : function () {
						$($t).jqGrid('addRow', o.addParams);
						if(!o.addParams.useFormatter) {
							$("#"+gID+"_ilsave").removeClass('ui-state-disabled');
							$("#"+gID+"_ilcancel").removeClass('ui-state-disabled');
							$("#"+gID+"_iladd").addClass('ui-state-disabled');
							$("#"+gID+"_iledit").addClass('ui-state-disabled');
						}
					}
				});
			}
			if(o.edit) {
				$($t).jqGrid('navButtonAdd', elem,{
					caption : o.edittext,
					title : o.edittitle,
					buttonicon : o.editicon,
					id : $t.p.id+"_iledit",
					onClickButton : function () {
						var sr = $($t).jqGrid('getGridParam','selrow');
						if(sr) {
							$($t).jqGrid('editRow', sr, o.editParams);
							$("#"+gID+"_ilsave").removeClass('ui-state-disabled');
							$("#"+gID+"_ilcancel").removeClass('ui-state-disabled');
							$("#"+gID+"_iladd").addClass('ui-state-disabled');
							$("#"+gID+"_iledit").addClass('ui-state-disabled');
						} else {
							$.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+gID,jqm:true});$("#jqg_alrt").focus();							
						}
					}
				});
			}
			if(o.save) {
				$($t).jqGrid('navButtonAdd', elem,{
					caption : o.savetext || '',
					title : o.savetitle || 'Save row',
					buttonicon : o.saveicon,
					id : $t.p.id+"_ilsave",
					onClickButton : function () {
						var sr = $t.p.savedRow[0].id;
						if(sr) {
							var opers = $t.p.prmNames,
							oper = opers.oper, tmpParams = o.editParams;
							if($("#"+$.jgrid.jqID(sr), "#"+gID ).hasClass("jqgrid-new-row")) {
								o.addParams.addRowParams.extraparam[oper] = opers.addoper;
								tmpParams = o.addParams.addRowParams;
							} else {
								if(!o.editParams.extraparam) {
									o.editParams.extraparam = {};
								}
								o.editParams.extraparam[oper] = opers.editoper;
							}
							if( $($t).jqGrid('saveRow', sr, tmpParams) ) {
								$($t).jqGrid('showAddEditButtons');
							}
						} else {
							$.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+gID,jqm:true});$("#jqg_alrt").focus();							
						}
					}
				});
				$("#"+gID+"_ilsave").addClass('ui-state-disabled');
			}
			if(o.cancel) {
				$($t).jqGrid('navButtonAdd', elem,{
					caption : o.canceltext || '',
					title : o.canceltitle || 'Cancel row editing',
					buttonicon : o.cancelicon,
					id : $t.p.id+"_ilcancel",
					onClickButton : function () {
						var sr = $t.p.savedRow[0].id, cancelPrm = o.editParams;
						if(sr) {
							if($("#"+$.jgrid.jqID(sr), "#"+gID ).hasClass("jqgrid-new-row")) {
								cancelPrm = o.addParams.addRowParams;
							}
							$($t).jqGrid('restoreRow', sr, cancelPrm);
							$($t).jqGrid('showAddEditButtons');
						} else {
							$.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+gID,jqm:true});$("#jqg_alrt").focus();							
						}
					}
				});
				$("#"+gID+"_ilcancel").addClass('ui-state-disabled');
			}
			if(o.restoreAfterSelect === true) {
				if($.isFunction($t.p.beforeSelectRow)) {
					onSelect = $t.p.beforeSelectRow;
				} else {
					onSelect =  false;
				}
				$t.p.beforeSelectRow = function(id, stat) {
					var ret = true;
					if($t.p.savedRow.length > 0 && $t.p._inlinenav===true && ( id !== $t.p.selrow && $t.p.selrow !==null) ) {
						if($t.p.selrow === o.addParams.rowID ) {
							$($t).jqGrid('delRowData', $t.p.selrow);
						} else {
							$($t).jqGrid('restoreRow', $t.p.selrow, o.editParams);
						}
						$($t).jqGrid('showAddEditButtons');
					}
					if(onSelect) {
						ret = onSelect.call($t, id, stat);
					}
					return ret;
				};
			}

		});
	},
	showAddEditButtons : function()  {
		return this.each(function(){
			if (!this.grid ) { return; }
			var gID = $.jgrid.jqID(this.p.id);
			$("#"+gID+"_ilsave").addClass('ui-state-disabled');
			$("#"+gID+"_ilcancel").addClass('ui-state-disabled');
			$("#"+gID+"_iladd").removeClass('ui-state-disabled');
			$("#"+gID+"_iledit").removeClass('ui-state-disabled');
		});
	}
//end inline edit
});
})(jQuery);
/*jshint eqeqeq:false */
/*global jQuery */
(function($){
/*
**
 * jqGrid extension for cellediting Grid Data
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
**/ 
/**
 * all events and options here are aded anonynous and not in the base grid
 * since the array is to big. Here is the order of execution.
 * From this point we use jQuery isFunction
 * formatCell
 * beforeEditCell,
 * onSelectCell (used only for noneditable cels)
 * afterEditCell,
 * beforeSaveCell, (called before validation of values if any)
 * beforeSubmitCell (if cellsubmit remote (ajax))
 * afterSubmitCell(if cellsubmit remote (ajax)),
 * afterSaveCell,
 * errorCell,
 * serializeCellData - new
 * Options
 * cellsubmit (remote,clientArray) (added in grid options)
 * cellurl
 * ajaxCellOptions
* */
"use strict";
$.jgrid.extend({
	editCell : function (iRow,iCol, ed){
		return this.each(function (){
			var $t = this, nm, tmp,cc, cm;
			if (!$t.grid || $t.p.cellEdit !== true) {return;}
			iCol = parseInt(iCol,10);
			// select the row that can be used for other methods
			$t.p.selrow = $t.rows[iRow].id;
			if (!$t.p.knv) {$($t).jqGrid("GridNav");}
			// check to see if we have already edited cell
			if ($t.p.savedRow.length>0) {
				// prevent second click on that field and enable selects
				if (ed===true ) {
					if(iRow == $t.p.iRow && iCol == $t.p.iCol){
						return;
					}
				}
				// save the cell
				$($t).jqGrid("saveCell",$t.p.savedRow[0].id,$t.p.savedRow[0].ic);
			} else {
				window.setTimeout(function () { $("#"+$.jgrid.jqID($t.p.knv)).attr("tabindex","-1").focus();},0);
			}
			cm = $t.p.colModel[iCol];
			nm = cm.name;
			if (nm==='subgrid' || nm==='cb' || nm==='rn') {return;}
			cc = $("td:eq("+iCol+")",$t.rows[iRow]);
			if (cm.editable===true && ed===true && !cc.hasClass("not-editable-cell")) {
				if(parseInt($t.p.iCol,10)>=0  && parseInt($t.p.iRow,10)>=0) {
					$("td:eq("+$t.p.iCol+")",$t.rows[$t.p.iRow]).removeClass("edit-cell ui-state-highlight");
					$($t.rows[$t.p.iRow]).removeClass("selected-row ui-state-hover");
				}
				$(cc).addClass("edit-cell ui-state-highlight");
				$($t.rows[iRow]).addClass("selected-row ui-state-hover");
				try {
					tmp =  $.unformat.call($t,cc,{rowId: $t.rows[iRow].id, colModel:cm},iCol);
				} catch (_) {
					tmp = ( cm.edittype && cm.edittype === 'textarea' ) ? $(cc).text() : $(cc).html();
				}
				if($t.p.autoencode) { tmp = $.jgrid.htmlDecode(tmp); }
				if (!cm.edittype) {cm.edittype = "text";}
				$t.p.savedRow.push({id:iRow,ic:iCol,name:nm,v:tmp});
				if(tmp === "&nbsp;" || tmp === "&#160;" || (tmp.length===1 && tmp.charCodeAt(0)===160) ) {tmp='';}
				if($.isFunction($t.p.formatCell)) {
					var tmp2 = $t.p.formatCell.call($t, $t.rows[iRow].id,nm,tmp,iRow,iCol);
					if(tmp2 !== undefined ) {tmp = tmp2;}
				}
				$($t).triggerHandler("jqGridBeforeEditCell", [$t.rows[iRow].id, nm, tmp, iRow, iCol]);
				if ($.isFunction($t.p.beforeEditCell)) {
					$t.p.beforeEditCell.call($t, $t.rows[iRow].id,nm,tmp,iRow,iCol);
				}
				var opt = $.extend({}, cm.editoptions || {} ,{id:iRow+"_"+nm,name:nm});
				var elc = $.jgrid.createEl.call($t,cm.edittype,opt,tmp,true,$.extend({},$.jgrid.ajaxOptions,$t.p.ajaxSelectOptions || {}));
				$(cc).html("").append(elc).attr("tabindex","0");
				$.jgrid.bindEv.call($t, elc, opt);
				window.setTimeout(function () { $(elc).focus();},0);
				$("input, select, textarea",cc).bind("keydown",function(e) {
					if (e.keyCode === 27) {
						if($("input.hasDatepicker",cc).length >0) {
							if( $(".ui-datepicker").is(":hidden") )  { $($t).jqGrid("restoreCell",iRow,iCol); }
							else { $("input.hasDatepicker",cc).datepicker('hide'); }
						} else {
							$($t).jqGrid("restoreCell",iRow,iCol);
						}
					} //ESC
					if (e.keyCode === 13) {
						$($t).jqGrid("saveCell",iRow,iCol);
						// Prevent default action
						return false;
					} //Enter
					if (e.keyCode === 9)  {
						if(!$t.grid.hDiv.loading ) {
							if (e.shiftKey) {$($t).jqGrid("prevCell",iRow,iCol);} //Shift TAb
							else {$($t).jqGrid("nextCell",iRow,iCol);} //Tab
						} else {
							return false;
						}
					}
					e.stopPropagation();
				});
				$($t).triggerHandler("jqGridAfterEditCell", [$t.rows[iRow].id, nm, tmp, iRow, iCol]);
				if ($.isFunction($t.p.afterEditCell)) {
					$t.p.afterEditCell.call($t, $t.rows[iRow].id,nm,tmp,iRow,iCol);
				}
			} else {
				if (parseInt($t.p.iCol,10)>=0  && parseInt($t.p.iRow,10)>=0) {
					$("td:eq("+$t.p.iCol+")",$t.rows[$t.p.iRow]).removeClass("edit-cell ui-state-highlight");
					$($t.rows[$t.p.iRow]).removeClass("selected-row ui-state-hover");
				}
				cc.addClass("edit-cell ui-state-highlight");
				$($t.rows[iRow]).addClass("selected-row ui-state-hover");
				tmp = cc.html().replace(/\&#160\;/ig,'');
				$($t).triggerHandler("jqGridSelectCell", [$t.rows[iRow].id, nm, tmp, iRow, iCol]);
				if ($.isFunction($t.p.onSelectCell)) {
					$t.p.onSelectCell.call($t, $t.rows[iRow].id,nm,tmp,iRow,iCol);
				}
			}
			$t.p.iCol = iCol; $t.p.iRow = iRow;
		});
	},
	saveCell : function (iRow, iCol){
		return this.each(function(){
			var $t= this, fr;
			if (!$t.grid || $t.p.cellEdit !== true) {return;}
			if ( $t.p.savedRow.length >= 1) {fr = 0;} else {fr=null;} 
			if(fr !== null) {
				var cc = $("td:eq("+iCol+")",$t.rows[iRow]),v,v2,
				cm = $t.p.colModel[iCol], nm = cm.name, nmjq = $.jgrid.jqID(nm) ;
				switch (cm.edittype) {
					case "select":
						if(!cm.editoptions.multiple) {
							v = $("#"+iRow+"_"+nmjq+" option:selected",$t.rows[iRow]).val();
							v2 = $("#"+iRow+"_"+nmjq+" option:selected",$t.rows[iRow]).text();
						} else {
							var sel = $("#"+iRow+"_"+nmjq,$t.rows[iRow]), selectedText = [];
							v = $(sel).val();
							if(v) { v.join(",");} else { v=""; }
							$("option:selected",sel).each(
								function(i,selected){
									selectedText[i] = $(selected).text();
								}
							);
							v2 = selectedText.join(",");
						}
						if(cm.formatter) { v2 = v; }
						break;
					case "checkbox":
						var cbv  = ["Yes","No"];
						if(cm.editoptions){
							cbv = cm.editoptions.value.split(":");
						}
						v = $("#"+iRow+"_"+nmjq,$t.rows[iRow]).is(":checked") ? cbv[0] : cbv[1];
						v2=v;
						break;
					case "password":
					case "text":
					case "textarea":
					case "button" :
						v = $("#"+iRow+"_"+nmjq,$t.rows[iRow]).val();
						v2=v;
						break;
					case 'custom' :
						try {
							if(cm.editoptions && $.isFunction(cm.editoptions.custom_value)) {
								v = cm.editoptions.custom_value.call($t, $(".customelement",cc),'get');
								if (v===undefined) { throw "e2";} else { v2=v; }
							} else { throw "e1"; }
						} catch (e) {
							if (e==="e1") { $.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.nodefined,$.jgrid.edit.bClose); }
							if (e==="e2") { $.jgrid.info_dialog($.jgrid.errors.errcap,"function 'custom_value' "+$.jgrid.edit.msg.novalue,$.jgrid.edit.bClose); }
							else {$.jgrid.info_dialog($.jgrid.errors.errcap,e.message,$.jgrid.edit.bClose); }
						}
						break;
				}
				// The common approach is if nothing changed do not do anything
				if (v2 !== $t.p.savedRow[fr].v){
					var vvv = $($t).triggerHandler("jqGridBeforeSaveCell", [$t.rows[iRow].id, nm, v, iRow, iCol]);
					if (vvv) {v = vvv; v2=vvv;}
					if ($.isFunction($t.p.beforeSaveCell)) {
						var vv = $t.p.beforeSaveCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);
						if (vv) {v = vv; v2=vv;}
					}
					var cv = $.jgrid.checkValues.call($t,v,iCol);
					if(cv[0] === true) {
						var addpost = $($t).triggerHandler("jqGridBeforeSubmitCell", [$t.rows[iRow].id, nm, v, iRow, iCol]) || {};
						if ($.isFunction($t.p.beforeSubmitCell)) {
							addpost = $t.p.beforeSubmitCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);
							if (!addpost) {addpost={};}
						}
						if( $("input.hasDatepicker",cc).length >0) { $("input.hasDatepicker",cc).datepicker('hide'); }
						if ($t.p.cellsubmit === 'remote') {
							if ($t.p.cellurl) {
								var postdata = {};
								if($t.p.autoencode) { v = $.jgrid.htmlEncode(v); }
								postdata[nm] = v;
								var idname,oper, opers;
								opers = $t.p.prmNames;
								idname = opers.id;
								oper = opers.oper;
								postdata[idname] = $.jgrid.stripPref($t.p.idPrefix, $t.rows[iRow].id);
								postdata[oper] = opers.editoper;
								postdata = $.extend(addpost,postdata);
								$("#lui_"+$.jgrid.jqID($t.p.id)).show();
								$t.grid.hDiv.loading = true;
								$.ajax( $.extend( {
									url: $t.p.cellurl,
									data :$.isFunction($t.p.serializeCellData) ? $t.p.serializeCellData.call($t, postdata) : postdata,
									type: "POST",
									complete: function (result, stat) {
										$("#lui_"+$t.p.id).hide();
										$t.grid.hDiv.loading = false;
										if (stat === 'success') {
											var ret = $($t).triggerHandler("jqGridAfterSubmitCell", [$t, result, postdata.id, nm, v, iRow, iCol]) || [true, ''];
											if (ret[0] === true && $.isFunction($t.p.afterSubmitCell)) {
												ret = $t.p.afterSubmitCell.call($t, result,postdata.id,nm,v,iRow,iCol);
											}
											if(ret[0] === true){
												$(cc).empty();
												$($t).jqGrid("setCell",$t.rows[iRow].id, iCol, v2, false, false, true);
												$(cc).addClass("dirty-cell");
												$($t.rows[iRow]).addClass("edited");
												$($t).triggerHandler("jqGridAfterSaveCell", [$t.rows[iRow].id, nm, v, iRow, iCol]);
												if ($.isFunction($t.p.afterSaveCell)) {
													$t.p.afterSaveCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);
												}
												$t.p.savedRow.splice(0,1);
											} else {
												$.jgrid.info_dialog($.jgrid.errors.errcap,ret[1],$.jgrid.edit.bClose);
												$($t).jqGrid("restoreCell",iRow,iCol);
											}
										}
									},
									error:function(res,stat,err) {
										$("#lui_"+$.jgrid.jqID($t.p.id)).hide();
										$t.grid.hDiv.loading = false;
										$($t).triggerHandler("jqGridErrorCell", [res, stat, err]);
										if ($.isFunction($t.p.errorCell)) {
											$t.p.errorCell.call($t, res,stat,err);
											$($t).jqGrid("restoreCell",iRow,iCol);
										} else {
											$.jgrid.info_dialog($.jgrid.errors.errcap,res.status+" : "+res.statusText+"<br/>"+stat,$.jgrid.edit.bClose);
											$($t).jqGrid("restoreCell",iRow,iCol);
										}
									}
								}, $.jgrid.ajaxOptions, $t.p.ajaxCellOptions || {}));
							} else {
								try {
									$.jgrid.info_dialog($.jgrid.errors.errcap,$.jgrid.errors.nourl,$.jgrid.edit.bClose);
									$($t).jqGrid("restoreCell",iRow,iCol);
								} catch (e) {}
							}
						}
						if ($t.p.cellsubmit === 'clientArray') {
							$(cc).empty();
							$($t).jqGrid("setCell",$t.rows[iRow].id,iCol, v2, false, false, true);
							$(cc).addClass("dirty-cell");
							$($t.rows[iRow]).addClass("edited");
							$($t).triggerHandler("jqGridAfterSaveCell", [$t.rows[iRow].id, nm, v, iRow, iCol]);
							if ($.isFunction($t.p.afterSaveCell)) {
								$t.p.afterSaveCell.call($t, $t.rows[iRow].id,nm, v, iRow,iCol);
							}
							$t.p.savedRow.splice(0,1);
						}
					} else {
						try {
							window.setTimeout(function(){$.jgrid.info_dialog($.jgrid.errors.errcap,v+" "+cv[1],$.jgrid.edit.bClose);},100);
							$($t).jqGrid("restoreCell",iRow,iCol);
						} catch (e) {}
					}
				} else {
					$($t).jqGrid("restoreCell",iRow,iCol);
				}
			}
			window.setTimeout(function () { $("#"+$.jgrid.jqID($t.p.knv)).attr("tabindex","-1").focus();},0);
		});
	},
	restoreCell : function(iRow, iCol) {
		return this.each(function(){
			var $t= this, fr;
			if (!$t.grid || $t.p.cellEdit !== true ) {return;}
			if ( $t.p.savedRow.length >= 1) {fr = 0;} else {fr=null;}
			if(fr !== null) {
				var cc = $("td:eq("+iCol+")",$t.rows[iRow]);
				// datepicker fix
				if($.isFunction($.fn.datepicker)) {
					try {
						$("input.hasDatepicker",cc).datepicker('hide');
					} catch (e) {}
				}
				$(cc).empty().attr("tabindex","-1");
				$($t).jqGrid("setCell",$t.rows[iRow].id, iCol, $t.p.savedRow[fr].v, false, false, true);
				$($t).triggerHandler("jqGridAfterRestoreCell", [$t.rows[iRow].id, $t.p.savedRow[fr].v, iRow, iCol]);
				if ($.isFunction($t.p.afterRestoreCell)) {
					$t.p.afterRestoreCell.call($t, $t.rows[iRow].id, $t.p.savedRow[fr].v, iRow, iCol);
				}				
				$t.p.savedRow.splice(0,1);
			}
			window.setTimeout(function () { $("#"+$t.p.knv).attr("tabindex","-1").focus();},0);
		});
	},
	nextCell : function (iRow,iCol) {
		return this.each(function (){
			var $t = this, nCol=false, i;
			if (!$t.grid || $t.p.cellEdit !== true) {return;}
			// try to find next editable cell
			for (i=iCol+1; i<$t.p.colModel.length; i++) {
				if ( $t.p.colModel[i].editable ===true) {
					nCol = i; break;
				}
			}
			if(nCol !== false) {
				$($t).jqGrid("editCell",iRow,nCol,true);
			} else {
				if ($t.p.savedRow.length >0) {
					$($t).jqGrid("saveCell",iRow,iCol);
				}
			}
		});
	},
	prevCell : function (iRow,iCol) {
		return this.each(function (){
			var $t = this, nCol=false, i;
			if (!$t.grid || $t.p.cellEdit !== true) {return;}
			// try to find next editable cell
			for (i=iCol-1; i>=0; i--) {
				if ( $t.p.colModel[i].editable ===true) {
					nCol = i; break;
				}
			}
			if(nCol !== false) {
				$($t).jqGrid("editCell",iRow,nCol,true);
			} else {
				if ($t.p.savedRow.length >0) {
					$($t).jqGrid("saveCell",iRow,iCol);
				}
			}
		});
	},
	GridNav : function() {
		return this.each(function () {
			var  $t = this;
			if (!$t.grid || $t.p.cellEdit !== true ) {return;}
			// trick to process keydown on non input elements
			$t.p.knv = $t.p.id + "_kn";
			var selection = $("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+$t.p.knv+"'></div></div>"),
			i, kdir;
			function scrollGrid(iR, iC, tp){
				if (tp.substr(0,1)==='v') {
					var ch = $($t.grid.bDiv)[0].clientHeight,
					st = $($t.grid.bDiv)[0].scrollTop,
					nROT = $t.rows[iR].offsetTop+$t.rows[iR].clientHeight,
					pROT = $t.rows[iR].offsetTop;
					if(tp === 'vd') {
						if(nROT >= ch) {
							$($t.grid.bDiv)[0].scrollTop = $($t.grid.bDiv)[0].scrollTop + $t.rows[iR].clientHeight;
						}
					}
					if(tp === 'vu'){
						if (pROT < st ) {
							$($t.grid.bDiv)[0].scrollTop = $($t.grid.bDiv)[0].scrollTop - $t.rows[iR].clientHeight;
						}
					}
				}
				if(tp==='h') {
					var cw = $($t.grid.bDiv)[0].clientWidth,
					sl = $($t.grid.bDiv)[0].scrollLeft,
					nCOL = $t.rows[iR].cells[iC].offsetLeft+$t.rows[iR].cells[iC].clientWidth,
					pCOL = $t.rows[iR].cells[iC].offsetLeft;
					if(nCOL >= cw+parseInt(sl,10)) {
						$($t.grid.bDiv)[0].scrollLeft = $($t.grid.bDiv)[0].scrollLeft + $t.rows[iR].cells[iC].clientWidth;
					} else if (pCOL < sl) {
						$($t.grid.bDiv)[0].scrollLeft = $($t.grid.bDiv)[0].scrollLeft - $t.rows[iR].cells[iC].clientWidth;
					}
				}
			}
			function findNextVisible(iC,act){
				var ind, i;
				if(act === 'lft') {
					ind = iC+1;
					for (i=iC;i>=0;i--){
						if ($t.p.colModel[i].hidden !== true) {
							ind = i;
							break;
						}
					}
				}
				if(act === 'rgt') {
					ind = iC-1;
					for (i=iC; i<$t.p.colModel.length;i++){
						if ($t.p.colModel[i].hidden !== true) {
							ind = i;
							break;
						}						
					}
				}
				return ind;
			}

			$(selection).insertBefore($t.grid.cDiv);
			$("#"+$t.p.knv)
			.focus()
			.keydown(function (e){
				kdir = e.keyCode;
				if($t.p.direction === "rtl") {
					if(kdir===37) { kdir = 39;}
					else if (kdir===39) { kdir = 37; }
				}
				switch (kdir) {
					case 38:
						if ($t.p.iRow-1 >0 ) {
							scrollGrid($t.p.iRow-1,$t.p.iCol,'vu');
							$($t).jqGrid("editCell",$t.p.iRow-1,$t.p.iCol,false);
						}
					break;
					case 40 :
						if ($t.p.iRow+1 <=  $t.rows.length-1) {
							scrollGrid($t.p.iRow+1,$t.p.iCol,'vd');
							$($t).jqGrid("editCell",$t.p.iRow+1,$t.p.iCol,false);
						}
					break;
					case 37 :
						if ($t.p.iCol -1 >=  0) {
							i = findNextVisible($t.p.iCol-1,'lft');
							scrollGrid($t.p.iRow, i,'h');
							$($t).jqGrid("editCell",$t.p.iRow, i,false);
						}
					break;
					case 39 :
						if ($t.p.iCol +1 <=  $t.p.colModel.length-1) {
							i = findNextVisible($t.p.iCol+1,'rgt');
							scrollGrid($t.p.iRow,i,'h');
							$($t).jqGrid("editCell",$t.p.iRow,i,false);
						}
					break;
					case 13:
						if (parseInt($t.p.iCol,10)>=0 && parseInt($t.p.iRow,10)>=0) {
							$($t).jqGrid("editCell",$t.p.iRow,$t.p.iCol,true);
						}
					break;
					default :
						return true;
				}
				return false;
			});
		});
	},
	getChangedCells : function (mthd) {
		var ret=[];
		if (!mthd) {mthd='all';}
		this.each(function(){
			var $t= this,nm;
			if (!$t.grid || $t.p.cellEdit !== true ) {return;}
			$($t.rows).each(function(j){
				var res = {};
				if ($(this).hasClass("edited")) {
					$('td',this).each( function(i) {
						nm = $t.p.colModel[i].name;
						if ( nm !== 'cb' && nm !== 'subgrid') {
							if (mthd==='dirty') {
								if ($(this).hasClass('dirty-cell')) {
									try {
										res[nm] = $.unformat.call($t,this,{rowId:$t.rows[j].id, colModel:$t.p.colModel[i]},i);
									} catch (e){
										res[nm] = $.jgrid.htmlDecode($(this).html());
									}
								}
							} else {
								try {
									res[nm] = $.unformat.call($t,this,{rowId:$t.rows[j].id,colModel:$t.p.colModel[i]},i);
								} catch (e) {
									res[nm] = $.jgrid.htmlDecode($(this).html());
								}
							}
						}
					});
					res.id = this.id;
					ret.push(res);
				}
			});
		});
		return ret;
	}
/// end  cell editing
});
})(jQuery);
/*jshint eqeqeq:false */
/*global jQuery */
(function($){
/**
 * jqGrid extension for SubGrid Data
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
**/
"use strict";
$.jgrid.extend({
setSubGrid : function () {
	return this.each(function (){
		var $t = this, cm, i,
		suboptions = {
			plusicon : "ui-icon-plus",
			minusicon : "ui-icon-minus",
			openicon: "ui-icon-carat-1-sw",
			expandOnLoad:  false,
			delayOnLoad : 50,
			selectOnExpand : false,
			selectOnCollapse : false,
			reloadOnExpand : true
		};
		$t.p.subGridOptions = $.extend(suboptions, $t.p.subGridOptions || {});
		$t.p.colNames.unshift("");
		$t.p.colModel.unshift({name:'subgrid',width: $.jgrid.cell_width ?  $t.p.subGridWidth+$t.p.cellLayout : $t.p.subGridWidth,sortable: false,resizable:false,hidedlg:true,search:false,fixed:true});
		cm = $t.p.subGridModel;
		if(cm[0]) {
			cm[0].align = $.extend([],cm[0].align || []);
			for(i=0;i<cm[0].name.length;i++) { cm[0].align[i] = cm[0].align[i] || 'left';}
		}
	});
},
addSubGridCell :function (pos,iRow) {
	var prp='',ic,sid;
	this.each(function(){
		prp = this.formatCol(pos,iRow);
		sid= this.p.id;
		ic = this.p.subGridOptions.plusicon;
	});
	return "<td role=\"gridcell\" aria-describedby=\""+sid+"_subgrid\" class=\"ui-sgcollapsed sgcollapsed\" "+prp+"><a style='cursor:pointer;'><span class='ui-icon "+ic+"'></span></a></td>";
},
addSubGrid : function( pos, sind ) {
	return this.each(function(){
		var ts = this;
		if (!ts.grid ) { return; }
		//-------------------------
		var subGridCell = function(trdiv,cell,pos)
		{
			var tddiv = $("<td align='"+ts.p.subGridModel[0].align[pos]+"'></td>").html(cell);
			$(trdiv).append(tddiv);
		};
		var subGridXml = function(sjxml, sbid){
			var tddiv, i,  sgmap,
			dummy = $("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),
			trdiv = $("<tr></tr>");
			for (i = 0; i<ts.p.subGridModel[0].name.length; i++) {
				tddiv = $("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+ts.p.direction+"'></th>");
				$(tddiv).html(ts.p.subGridModel[0].name[i]);
				$(tddiv).width( ts.p.subGridModel[0].width[i]);
				$(trdiv).append(tddiv);
			}
			$(dummy).append(trdiv);
			if (sjxml){
				sgmap = ts.p.xmlReader.subgrid;
				$(sgmap.root+" "+sgmap.row, sjxml).each( function(){
					trdiv = $("<tr class='ui-widget-content ui-subtblcell'></tr>");
					if(sgmap.repeatitems === true) {
						$(sgmap.cell,this).each( function(i) {
							subGridCell(trdiv, $(this).text() || '&#160;',i);
						});
					} else {
						var f = ts.p.subGridModel[0].mapping || ts.p.subGridModel[0].name;
						if (f) {
							for (i=0;i<f.length;i++) {
								subGridCell(trdiv, $(f[i],this).text() || '&#160;',i);
							}
						}
					}
					$(dummy).append(trdiv);
				});
			}
			var pID = $("table:first",ts.grid.bDiv).attr("id")+"_";
			$("#"+$.jgrid.jqID(pID+sbid)).append(dummy);
			ts.grid.hDiv.loading = false;
			$("#load_"+$.jgrid.jqID(ts.p.id)).hide();
			return false;
		};
		var subGridJson = function(sjxml, sbid){
			var tddiv,result,i,cur, sgmap,j,
			dummy = $("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),
			trdiv = $("<tr></tr>");
			for (i = 0; i<ts.p.subGridModel[0].name.length; i++) {
				tddiv = $("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+ts.p.direction+"'></th>");
				$(tddiv).html(ts.p.subGridModel[0].name[i]);
				$(tddiv).width( ts.p.subGridModel[0].width[i]);
				$(trdiv).append(tddiv);
			}
			$(dummy).append(trdiv);
			if (sjxml){
				sgmap = ts.p.jsonReader.subgrid;
				result = $.jgrid.getAccessor(sjxml, sgmap.root);
				if ( result !== undefined ) {
					for (i=0;i<result.length;i++) {
						cur = result[i];
						trdiv = $("<tr class='ui-widget-content ui-subtblcell'></tr>");
						if(sgmap.repeatitems === true) {
							if(sgmap.cell) { cur=cur[sgmap.cell]; }
							for (j=0;j<cur.length;j++) {
								subGridCell(trdiv, cur[j] || '&#160;',j);
							}
						} else {
							var f = ts.p.subGridModel[0].mapping || ts.p.subGridModel[0].name;
							if(f.length) {
								for (j=0;j<f.length;j++) {
									subGridCell(trdiv, cur[f[j]] || '&#160;',j);
								}
							}
						}
						$(dummy).append(trdiv);
					}
				}
			}
			var pID = $("table:first",ts.grid.bDiv).attr("id")+"_";
			$("#"+$.jgrid.jqID(pID+sbid)).append(dummy);
			ts.grid.hDiv.loading = false;
			$("#load_"+$.jgrid.jqID(ts.p.id)).hide();
			return false;
		};
		var populatesubgrid = function( rd )
		{
			var sid,dp, i, j;
			sid = $(rd).attr("id");
			dp = {nd_: (new Date().getTime())};
			dp[ts.p.prmNames.subgridid]=sid;
			if(!ts.p.subGridModel[0]) { return false; }
			if(ts.p.subGridModel[0].params) {
				for(j=0; j < ts.p.subGridModel[0].params.length; j++) {
					for(i=0; i<ts.p.colModel.length; i++) {
						if(ts.p.colModel[i].name === ts.p.subGridModel[0].params[j]) {
							dp[ts.p.colModel[i].name]= $("td:eq("+i+")",rd).text().replace(/\&#160\;/ig,'');
						}
					}
				}
			}
			if(!ts.grid.hDiv.loading) {
				ts.grid.hDiv.loading = true;
				$("#load_"+$.jgrid.jqID(ts.p.id)).show();
				if(!ts.p.subgridtype) { ts.p.subgridtype = ts.p.datatype; }
				if($.isFunction(ts.p.subgridtype)) {
					ts.p.subgridtype.call(ts, dp);
				} else {
					ts.p.subgridtype = ts.p.subgridtype.toLowerCase();
				}
				switch(ts.p.subgridtype) {
					case "xml":
					case "json":
					$.ajax($.extend({
						type:ts.p.mtype,
						url: ts.p.subGridUrl,
						dataType:ts.p.subgridtype,
						data: $.isFunction(ts.p.serializeSubGridData)? ts.p.serializeSubGridData.call(ts, dp) : dp,
						complete: function(sxml) {
							if(ts.p.subgridtype === "xml") {
								subGridXml(sxml.responseXML, sid);
							} else {
								subGridJson($.jgrid.parse(sxml.responseText),sid);
							}
							sxml=null;
						}
					}, $.jgrid.ajaxOptions, ts.p.ajaxSubgridOptions || {}));
					break;
				}
			}
			return false;
		};
		var _id, pID,atd, nhc=0, bfsc, r;
		$.each(ts.p.colModel,function(){
			if(this.hidden === true || this.name === 'rn' || this.name === 'cb') {
				nhc++;
			}
		});
		var len = ts.rows.length, i=1;
		if( sind !== undefined && sind > 0) {
			i = sind;
			len = sind+1;
		}
		while(i < len) {
			if($(ts.rows[i]).hasClass('jqgrow')) {
				$(ts.rows[i].cells[pos]).bind('click', function() {
					var tr = $(this).parent("tr")[0];
					r = tr.nextSibling;
					if($(this).hasClass("sgcollapsed")) {
						pID = ts.p.id;
						_id = tr.id;
						if(ts.p.subGridOptions.reloadOnExpand === true || ( ts.p.subGridOptions.reloadOnExpand === false && !$(r).hasClass('ui-subgrid') ) ) {
							atd = pos >=1 ? "<td colspan='"+pos+"'>&#160;</td>":"";
							bfsc = $(ts).triggerHandler("jqGridSubGridBeforeExpand", [pID + "_" + _id, _id]);
							bfsc = (bfsc === false || bfsc === 'stop') ? false : true;
							if(bfsc && $.isFunction(ts.p.subGridBeforeExpand)) {
								bfsc = ts.p.subGridBeforeExpand.call(ts, pID+"_"+_id,_id);
							}
							if(bfsc === false) {return false;}
							$(tr).after( "<tr role='row' class='ui-subgrid'>"+atd+"<td class='ui-widget-content subgrid-cell'><span class='ui-icon "+ts.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(ts.p.colNames.length-1-nhc,10)+"' class='ui-widget-content subgrid-data'><div id="+pID+"_"+_id+" class='tablediv'></div></td></tr>" );
							$(ts).triggerHandler("jqGridSubGridRowExpanded", [pID + "_" + _id, _id]);
							if( $.isFunction(ts.p.subGridRowExpanded)) {
								ts.p.subGridRowExpanded.call(ts, pID+"_"+ _id,_id);
							} else {
								populatesubgrid(tr);
							}
						} else {
							$(r).show();
						}
						$(this).html("<a style='cursor:pointer;'><span class='ui-icon "+ts.p.subGridOptions.minusicon+"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded");
						if(ts.p.subGridOptions.selectOnExpand) {
							$(ts).jqGrid('setSelection',_id);
						}
					} else if($(this).hasClass("sgexpanded")) {
						bfsc = $(ts).triggerHandler("jqGridSubGridRowColapsed", [pID + "_" + _id, _id]);
						bfsc = (bfsc === false || bfsc === 'stop') ? false : true;
						_id = tr.id;
						if( bfsc &&  $.isFunction(ts.p.subGridRowColapsed)) {
							bfsc = ts.p.subGridRowColapsed.call(ts, pID+"_"+_id,_id );
						}
						if(bfsc===false) {return false;}
						if(ts.p.subGridOptions.reloadOnExpand === true) {
							$(r).remove(".ui-subgrid");
						} else if($(r).hasClass('ui-subgrid')) { // incase of dynamic deleting
							$(r).hide();
						}
						$(this).html("<a style='cursor:pointer;'><span class='ui-icon "+ts.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed");
						if(ts.p.subGridOptions.selectOnCollapse) {
							$(ts).jqGrid('setSelection',_id);
						}
					}
					return false;
				});
			}
			i++;
		}
		if(ts.p.subGridOptions.expandOnLoad === true) {
			$(ts.rows).filter('.jqgrow').each(function(index,row){
				$(row.cells[0]).click();
			});
		}
		ts.subGridXml = function(xml,sid) {subGridXml(xml,sid);};
		ts.subGridJson = function(json,sid) {subGridJson(json,sid);};
	});
},
expandSubGridRow : function(rowid) {
	return this.each(function () {
		var $t = this;
		if(!$t.grid && !rowid) {return;}
		if($t.p.subGrid===true) {
			var rc = $(this).jqGrid("getInd",rowid,true);
			if(rc) {
				var sgc = $("td.sgcollapsed",rc)[0];
				if(sgc) {
					$(sgc).trigger("click");
				}
			}
		}
	});
},
collapseSubGridRow : function(rowid) {
	return this.each(function () {
		var $t = this;
		if(!$t.grid && !rowid) {return;}
		if($t.p.subGrid===true) {
			var rc = $(this).jqGrid("getInd",rowid,true);
			if(rc) {
				var sgc = $("td.sgexpanded",rc)[0];
				if(sgc) {
					$(sgc).trigger("click");
				}
			}
		}
	});
},
toggleSubGridRow : function(rowid) {
	return this.each(function () {
		var $t = this;
		if(!$t.grid && !rowid) {return;}
		if($t.p.subGrid===true) {
			var rc = $(this).jqGrid("getInd",rowid,true);
			if(rc) {
				var sgc = $("td.sgcollapsed",rc)[0];
				if(sgc) {
					$(sgc).trigger("click");
				} else {
					sgc = $("td.sgexpanded",rc)[0];
					if(sgc) {
						$(sgc).trigger("click");
					}
				}
			}
		}
	});
}
});
})(jQuery);
/**
 * jqGrid extension - Tree Grid
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/

/*jshint eqeqeq:false */
/*global jQuery */
(function($) {
"use strict";
$.jgrid.extend({
	setTreeNode : function(i, len){
		return this.each(function(){
			var $t = this;
			if( !$t.grid || !$t.p.treeGrid ) {return;}
			var expCol = $t.p.expColInd,
			expanded = $t.p.treeReader.expanded_field,
			isLeaf = $t.p.treeReader.leaf_field,
			level = $t.p.treeReader.level_field,
			icon = $t.p.treeReader.icon_field,
			loaded = $t.p.treeReader.loaded,  lft, rgt, curLevel, ident,lftpos, twrap,
			ldat, lf;
			while(i<len) {
				var ind = $.jgrid.stripPref($t.p.idPrefix, $t.rows[i].id), dind = $t.p._index[ind], expan;
				ldat = $t.p.data[dind];
				//$t.rows[i].level = ldat[level];
				if($t.p.treeGridModel === 'nested') {
					if(!ldat[isLeaf]) {
					lft = parseInt(ldat[$t.p.treeReader.left_field],10);
					rgt = parseInt(ldat[$t.p.treeReader.right_field],10);
					// NS Model
						ldat[isLeaf] = (rgt === lft+1) ? 'true' : 'false';
						$t.rows[i].cells[$t.p._treeleafpos].innerHTML = ldat[isLeaf];
					}
				}
				//else {
					//row.parent_id = rd[$t.p.treeReader.parent_id_field];
				//}
				curLevel = parseInt(ldat[level],10);
				if($t.p.tree_root_level === 0) {
					ident = curLevel+1;
					lftpos = curLevel;
				} else {
					ident = curLevel;
					lftpos = curLevel -1;
				}
				twrap = "<div class='tree-wrap tree-wrap-"+$t.p.direction+"' style='width:"+(ident*18)+"px;'>";
				twrap += "<div style='"+($t.p.direction==="rtl" ? "right:" : "left:")+(lftpos*18)+"px;' class='ui-icon ";


				if(ldat[loaded] !== undefined) {
					if(ldat[loaded]==="true" || ldat[loaded]===true) {
						ldat[loaded] = true;
					} else {
						ldat[loaded] = false;
					}
				}
				if(ldat[isLeaf] === "true" || ldat[isLeaf] === true) {
					twrap += ((ldat[icon] !== undefined && ldat[icon] !== "") ? ldat[icon] : $t.p.treeIcons.leaf)+" tree-leaf treeclick";
					ldat[isLeaf] = true;
					lf="leaf";
				} else {
					ldat[isLeaf] = false;
					lf="";
				}
				ldat[expanded] = ((ldat[expanded] === "true" || ldat[expanded] === true) ? true : false) && (ldat[loaded] || ldat[loaded] === undefined);
				if(ldat[expanded] === false) {
					twrap += ((ldat[isLeaf] === true) ? "'" : $t.p.treeIcons.plus+" tree-plus treeclick'");
				} else {
					twrap += ((ldat[isLeaf] === true) ? "'" : $t.p.treeIcons.minus+" tree-minus treeclick'");
				}
				
				twrap += "></div></div>";
				$($t.rows[i].cells[expCol]).wrapInner("<span class='cell-wrapper"+lf+"'></span>").prepend(twrap);

				if(curLevel !== parseInt($t.p.tree_root_level,10)) {
					var pn = $($t).jqGrid('getNodeParent',ldat);
					expan = pn && pn.hasOwnProperty(expanded) ? pn[expanded] : true;
					if( !expan ){
						$($t.rows[i]).css("display","none");
					}
				}
				$($t.rows[i].cells[expCol])
					.find("div.treeclick")
					.bind("click",function(e){
						var target = e.target || e.srcElement,
						ind2 =$.jgrid.stripPref($t.p.idPrefix,$(target,$t.rows).closest("tr.jqgrow")[0].id),
						pos = $t.p._index[ind2];
						if(!$t.p.data[pos][isLeaf]){
							if($t.p.data[pos][expanded]){
								$($t).jqGrid("collapseRow",$t.p.data[pos]);
								$($t).jqGrid("collapseNode",$t.p.data[pos]);
							} else {
								$($t).jqGrid("expandRow",$t.p.data[pos]);
								$($t).jqGrid("expandNode",$t.p.data[pos]);
							}
						}
						return false;
					});
				if($t.p.ExpandColClick === true) {
					$($t.rows[i].cells[expCol])
						.find("span.cell-wrapper")
						.css("cursor","pointer")
						.bind("click",function(e) {
							var target = e.target || e.srcElement,
							ind2 =$.jgrid.stripPref($t.p.idPrefix,$(target,$t.rows).closest("tr.jqgrow")[0].id),
							pos = $t.p._index[ind2];
							if(!$t.p.data[pos][isLeaf]){
								if($t.p.data[pos][expanded]){
									$($t).jqGrid("collapseRow",$t.p.data[pos]);
									$($t).jqGrid("collapseNode",$t.p.data[pos]);
								} else {
									$($t).jqGrid("expandRow",$t.p.data[pos]);
									$($t).jqGrid("expandNode",$t.p.data[pos]);
								}
							}
							$($t).jqGrid("setSelection",ind2);
							return false;
						});
				}
				i++;
			}

		});
	},
	setTreeGrid : function() {
		return this.each(function (){
			var $t = this, i=0, pico, ecol = false, nm, key, tkey, dupcols=[];
			if(!$t.p.treeGrid) {return;}
			if(!$t.p.treedatatype ) {$.extend($t.p,{treedatatype: $t.p.datatype});}
			$t.p.subGrid = false;$t.p.altRows =false;
			$t.p.pgbuttons = false;$t.p.pginput = false;
			$t.p.gridview =  true;
			if($t.p.rowTotal === null ) { $t.p.rowNum = 10000; }
			$t.p.multiselect = false;$t.p.rowList = [];
			$t.p.expColInd = 0;
			pico = 'ui-icon-triangle-1-' + ($t.p.direction==="rtl" ? 'w' : 'e');
			$t.p.treeIcons = $.extend({plus:pico,minus:'ui-icon-triangle-1-s',leaf:'ui-icon-radio-off'},$t.p.treeIcons || {});
			if($t.p.treeGridModel === 'nested') {
				$t.p.treeReader = $.extend({
					level_field: "level",
					left_field:"lft",
					right_field: "rgt",
					leaf_field: "isLeaf",
					expanded_field: "expanded",
					loaded: "loaded",
					icon_field: "icon"
				},$t.p.treeReader);
			} else if($t.p.treeGridModel === 'adjacency') {
				$t.p.treeReader = $.extend({
						level_field: "level",
						parent_id_field: "parent",
						leaf_field: "isLeaf",
						expanded_field: "expanded",
						loaded: "loaded",
						icon_field: "icon"
				},$t.p.treeReader );
			}
			for ( key in $t.p.colModel){
				if($t.p.colModel.hasOwnProperty(key)) {
					nm = $t.p.colModel[key].name;
					if( nm === $t.p.ExpandColumn && !ecol ) {
						ecol = true;
						$t.p.expColInd = i;
					}
					i++;
					//
					for(tkey in $t.p.treeReader) {
						if($t.p.treeReader.hasOwnProperty(tkey) && $t.p.treeReader[tkey] === nm) {
							dupcols.push(nm);
						}
					}
				}
			}
			$.each($t.p.treeReader,function(j,n){
				if(n && $.inArray(n, dupcols) === -1){
					if(j==='leaf_field') { $t.p._treeleafpos= i; }
				i++;
					$t.p.colNames.push(n);
					$t.p.colModel.push({name:n,width:1,hidden:true,sortable:false,resizable:false,hidedlg:true,editable:true,search:false});
				}
			});			
		});
	},
	expandRow: function (record){
		this.each(function(){
			var $t = this;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			var childern = $($t).jqGrid("getNodeChildren",record),
			//if ($($t).jqGrid("isVisibleNode",record)) {
			expanded = $t.p.treeReader.expanded_field;
			$(childern).each(function(){
				var id  = $t.p.idPrefix + $.jgrid.getAccessor(this,$t.p.localReader.id);
				$($($t).jqGrid('getGridRowById', id)).css("display","");
				if(this[expanded]) {
					$($t).jqGrid("expandRow",this);
				}
			});
			//}
		});
	},
	collapseRow : function (record) {
		this.each(function(){
			var $t = this;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			var childern = $($t).jqGrid("getNodeChildren",record),
			expanded = $t.p.treeReader.expanded_field;
			$(childern).each(function(){
				var id  = $t.p.idPrefix + $.jgrid.getAccessor(this,$t.p.localReader.id);
				$($($t).jqGrid('getGridRowById', id)).css("display","none");
				if(this[expanded]){
					$($t).jqGrid("collapseRow",this);
				}
			});
		});
	},
	// NS ,adjacency models
	getRootNodes : function() {
		var result = [];
		this.each(function(){
			var $t = this;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			switch ($t.p.treeGridModel) {
				case 'nested' :
					var level = $t.p.treeReader.level_field;
					$($t.p.data).each(function(){
						if(parseInt(this[level],10) === parseInt($t.p.tree_root_level,10)) {
							result.push(this);
						}
					});
					break;
				case 'adjacency' :
					var parent_id = $t.p.treeReader.parent_id_field;
					$($t.p.data).each(function(){
						if(this[parent_id] === null || String(this[parent_id]).toLowerCase() === "null") {
							result.push(this);
						}
					});
					break;
			}
		});
		return result;
	},
	getNodeDepth : function(rc) {
		var ret = null;
		this.each(function(){
			if(!this.grid || !this.p.treeGrid) {return;}
			var $t = this;
			switch ($t.p.treeGridModel) {
				case 'nested' :
					var level = $t.p.treeReader.level_field;
					ret = parseInt(rc[level],10) - parseInt($t.p.tree_root_level,10);
					break;
				case 'adjacency' :
					ret = $($t).jqGrid("getNodeAncestors",rc).length;
					break;
			}
		});
		return ret;
	},
	getNodeParent : function(rc) {
		var result = null;
		this.each(function(){
			var $t = this;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			switch ($t.p.treeGridModel) {
				case 'nested' :
					var lftc = $t.p.treeReader.left_field,
					rgtc = $t.p.treeReader.right_field,
					levelc = $t.p.treeReader.level_field,
					lft = parseInt(rc[lftc],10), rgt = parseInt(rc[rgtc],10), level = parseInt(rc[levelc],10);
					$(this.p.data).each(function(){
						if(parseInt(this[levelc],10) === level-1 && parseInt(this[lftc],10) < lft && parseInt(this[rgtc],10) > rgt) {
							result = this;
							return false;
						}
					});
					break;
				case 'adjacency' :
					var parent_id = $t.p.treeReader.parent_id_field,
					dtid = $t.p.localReader.id;
					$(this.p.data).each(function(){
						if(this[dtid] === $.jgrid.stripPref($t.p.idPrefix, rc[parent_id]) ) {
							result = this;
							return false;
						}
					});
					break;
			}
		});
		return result;
	},
	getNodeChildren : function(rc) {
		var result = [];
		this.each(function(){
			var $t = this;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			switch ($t.p.treeGridModel) {
				case 'nested' :
					var lftc = $t.p.treeReader.left_field,
					rgtc = $t.p.treeReader.right_field,
					levelc = $t.p.treeReader.level_field,
					lft = parseInt(rc[lftc],10), rgt = parseInt(rc[rgtc],10), level = parseInt(rc[levelc],10);
					$(this.p.data).each(function(){
						if(parseInt(this[levelc],10) === level+1 && parseInt(this[lftc],10) > lft && parseInt(this[rgtc],10) < rgt) {
							result.push(this);
						}
					});
					break;
				case 'adjacency' :
					var parent_id = $t.p.treeReader.parent_id_field,
					dtid = $t.p.localReader.id;
					$(this.p.data).each(function(){
						if(this[parent_id] == $.jgrid.stripPref($t.p.idPrefix, rc[dtid])) {
							result.push(this);
						}
					});
					break;
			}
		});
		return result;
	},
	getFullTreeNode : function(rc) {
		var result = [];
		this.each(function(){
			var $t = this, len;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			switch ($t.p.treeGridModel) {
				case 'nested' :
					var lftc = $t.p.treeReader.left_field,
					rgtc = $t.p.treeReader.right_field,
					levelc = $t.p.treeReader.level_field,
					lft = parseInt(rc[lftc],10), rgt = parseInt(rc[rgtc],10), level = parseInt(rc[levelc],10);
					$(this.p.data).each(function(){
						if(parseInt(this[levelc],10) >= level && parseInt(this[lftc],10) >= lft && parseInt(this[lftc],10) <= rgt) {
							result.push(this);
						}
					});
					break;
				case 'adjacency' :
					if(rc) {
					result.push(rc);
					var parent_id = $t.p.treeReader.parent_id_field,
					dtid = $t.p.localReader.id;
					$(this.p.data).each(function(i){
						len = result.length;
						for (i = 0; i < len; i++) {
							if ($.jgrid.stripPref($t.p.idPrefix, result[i][dtid]) === this[parent_id]) {
								result.push(this);
								break;
							}
						}
					});
					}
					break;
			}
		});
		return result;
	},	
	// End NS, adjacency Model
	getNodeAncestors : function(rc) {
		var ancestors = [];
		this.each(function(){
			if(!this.grid || !this.p.treeGrid) {return;}
			var parent = $(this).jqGrid("getNodeParent",rc);
			while (parent) {
				ancestors.push(parent);
				parent = $(this).jqGrid("getNodeParent",parent);	
			}
		});
		return ancestors;
	},
	isVisibleNode : function(rc) {
		var result = true;
		this.each(function(){
			var $t = this;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			var ancestors = $($t).jqGrid("getNodeAncestors",rc),
			expanded = $t.p.treeReader.expanded_field;
			$(ancestors).each(function(){
				result = result && this[expanded];
				if(!result) {return false;}
			});
		});
		return result;
	},
	isNodeLoaded : function(rc) {
		var result;
		this.each(function(){
			var $t = this;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			var isLeaf = $t.p.treeReader.leaf_field,
			loaded = $t.p.treeReader.loaded;
			if(rc !== undefined ) {
				if(rc[loaded] !== undefined) {
					result = rc[loaded];
				} else if( rc[isLeaf] || $($t).jqGrid("getNodeChildren",rc).length > 0){
					result = true;
				} else {
					result = false;
				}
			} else {
				result = false;
			}
		});
		return result;
	},
	expandNode : function(rc) {
		return this.each(function(){
			if(!this.grid || !this.p.treeGrid) {return;}
			var expanded = this.p.treeReader.expanded_field,
			parent = this.p.treeReader.parent_id_field,
			loaded = this.p.treeReader.loaded,
			level = this.p.treeReader.level_field,
			lft = this.p.treeReader.left_field,
			rgt = this.p.treeReader.right_field;

			if(!rc[expanded]) {
				var id = $.jgrid.getAccessor(rc,this.p.localReader.id);
				var rc1 = $("#" + this.p.idPrefix + $.jgrid.jqID(id),this.grid.bDiv)[0];
				var position = this.p._index[id];
				if( $(this).jqGrid("isNodeLoaded",this.p.data[position]) ) {
					rc[expanded] = true;
					$("div.treeclick",rc1).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus");
				} else if (!this.grid.hDiv.loading) {
					rc[expanded] = true;
					$("div.treeclick",rc1).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus");
					this.p.treeANode = rc1.rowIndex;
					this.p.datatype = this.p.treedatatype;
					if(this.p.treeGridModel === 'nested') {
						$(this).jqGrid("setGridParam",{postData:{nodeid:id,n_left:rc[lft],n_right:rc[rgt],n_level:rc[level]}});
					} else {
						$(this).jqGrid("setGridParam",{postData:{nodeid:id,parentid:rc[parent],n_level:rc[level]}} );
					}
					$(this).trigger("reloadGrid");
					rc[loaded] = true;
					if(this.p.treeGridModel === 'nested') {
						$(this).jqGrid("setGridParam",{postData:{nodeid:'',n_left:'',n_right:'',n_level:''}});
					} else {
						$(this).jqGrid("setGridParam",{postData:{nodeid:'',parentid:'',n_level:''}}); 
					}
				}
			}
		});
	},
	collapseNode : function(rc) {
		return this.each(function(){
			if(!this.grid || !this.p.treeGrid) {return;}
			var expanded = this.p.treeReader.expanded_field;
			if(rc[expanded]) {
				rc[expanded] = false;
				var id = $.jgrid.getAccessor(rc,this.p.localReader.id);
				var rc1 = $("#" + this.p.idPrefix + $.jgrid.jqID(id),this.grid.bDiv)[0];
				$("div.treeclick",rc1).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus");
			}
		});
	},
	SortTree : function( sortname, newDir, st, datefmt) {
		return this.each(function(){
			if(!this.grid || !this.p.treeGrid) {return;}
			var i, len,
			rec, records = [], $t = this, query, roots,
			rt = $(this).jqGrid("getRootNodes");
			// Sorting roots
			query = $.jgrid.from(rt);
			query.orderBy(sortname,newDir,st, datefmt);
			roots = query.select();

			// Sorting children
			for (i = 0, len = roots.length; i < len; i++) {
				rec = roots[i];
				records.push(rec);
				$(this).jqGrid("collectChildrenSortTree",records, rec, sortname, newDir,st, datefmt);
			}
			$.each(records, function(index) {
				var id  = $.jgrid.getAccessor(this,$t.p.localReader.id);
				$('#'+$.jgrid.jqID($t.p.id)+ ' tbody tr:eq('+index+')').after($('tr#'+$.jgrid.jqID(id),$t.grid.bDiv));
			});
			query = null;roots=null;records=null;
		});
	},
	collectChildrenSortTree : function(records, rec, sortname, newDir,st, datefmt) {
		return this.each(function(){
			if(!this.grid || !this.p.treeGrid) {return;}
			var i, len,
			child, ch, query, children;
			ch = $(this).jqGrid("getNodeChildren",rec);
			query = $.jgrid.from(ch);
			query.orderBy(sortname, newDir, st, datefmt);
			children = query.select();
			for (i = 0, len = children.length; i < len; i++) {
				child = children[i];
				records.push(child);
				$(this).jqGrid("collectChildrenSortTree",records, child, sortname, newDir, st, datefmt); 
			}
		});
	},
	// experimental 
	setTreeRow : function(rowid, data) {
		var success=false;
		this.each(function(){
			var t = this;
			if(!t.grid || !t.p.treeGrid) {return;}
			success = $(t).jqGrid("setRowData",rowid,data);
		});
		return success;
	},
	delTreeNode : function (rowid) {
		return this.each(function () {
			var $t = this, rid = $t.p.localReader.id, i,
			left = $t.p.treeReader.left_field,
			right = $t.p.treeReader.right_field, myright, width, res, key;
			if(!$t.grid || !$t.p.treeGrid) {return;}
			var rc = $t.p._index[rowid];
			if (rc !== undefined) {
				// nested
				myright = parseInt($t.p.data[rc][right],10);
				width = myright -  parseInt($t.p.data[rc][left],10) + 1;
				var dr = $($t).jqGrid("getFullTreeNode",$t.p.data[rc]);
				if(dr.length>0){
					for (i=0;i<dr.length;i++){
						$($t).jqGrid("delRowData",dr[i][rid]);
					}
				}
				if( $t.p.treeGridModel === "nested") {
					// ToDo - update grid data
					res = $.jgrid.from($t.p.data)
						.greater(left,myright,{stype:'integer'})
						.select();
					if(res.length) {
						for( key in res) {
							if(res.hasOwnProperty(key)) {
								res[key][left] = parseInt(res[key][left],10) - width ;
							}
						}
					}
					res = $.jgrid.from($t.p.data)
						.greater(right,myright,{stype:'integer'})
						.select();
					if(res.length) {
						for( key in res) {
							if(res.hasOwnProperty(key)) {
								res[key][right] = parseInt(res[key][right],10) - width ;
							}
						}
					}
				}
			}
		});
	},
	addChildNode : function( nodeid, parentid, data, expandData ) {
		//return this.each(function(){
		var $t = this[0];
		if(data) {
			// we suppose tha the id is autoincremet and
			var expanded = $t.p.treeReader.expanded_field,
			isLeaf = $t.p.treeReader.leaf_field,
			level = $t.p.treeReader.level_field,
			//icon = $t.p.treeReader.icon_field,
			parent = $t.p.treeReader.parent_id_field,
			left = $t.p.treeReader.left_field,
			right = $t.p.treeReader.right_field,
			loaded = $t.p.treeReader.loaded,
			method, parentindex, parentdata, parentlevel, i, len, max=0, rowind = parentid, leaf, maxright;
			if(expandData===undefined) {expandData = false;}
			if ( nodeid === undefined || nodeid === null ) {
				i = $t.p.data.length-1;
				if(	i>= 0 ) {
					while(i>=0){max = Math.max(max, parseInt($t.p.data[i][$t.p.localReader.id],10)); i--;}
				}
				nodeid = max+1;
			}
			var prow = $($t).jqGrid('getInd', parentid);
			leaf = false;
			// if not a parent we assume root
			if ( parentid === undefined  || parentid === null || parentid==="") {
				parentid = null;
				rowind = null;
				method = 'last';
				parentlevel = $t.p.tree_root_level;
				i = $t.p.data.length+1;
			} else {
				method = 'after';
				parentindex = $t.p._index[parentid];
				parentdata = $t.p.data[parentindex];
				parentid = parentdata[$t.p.localReader.id];
				parentlevel = parseInt(parentdata[level],10)+1;
				var childs = $($t).jqGrid('getFullTreeNode', parentdata);
				// if there are child nodes get the last index of it
				if(childs.length) {
					i = childs[childs.length-1][$t.p.localReader.id];
					rowind = i;
					i = $($t).jqGrid('getInd',rowind)+1;
				} else {
					i = $($t).jqGrid('getInd', parentid)+1;
				}
				// if the node is leaf
				if(parentdata[isLeaf]) {
					leaf = true;
					parentdata[expanded] = true;
					//var prow = $($t).jqGrid('getInd', parentid);
					$($t.rows[prow])
						.find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper")
						.end()
						.find("div.tree-leaf").removeClass($t.p.treeIcons.leaf+" tree-leaf").addClass($t.p.treeIcons.minus+" tree-minus");
					$t.p.data[parentindex][isLeaf] = false;
					parentdata[loaded] = true;
				}
			}
			len = i+1;

			if( data[expanded]===undefined)  {data[expanded]= false;}
			if( data[loaded]===undefined )  { data[loaded] = false;}
			data[level] = parentlevel;
			if( data[isLeaf]===undefined) {data[isLeaf]= true;}
			if( $t.p.treeGridModel === "adjacency") {
				data[parent] = parentid;
			}
			if( $t.p.treeGridModel === "nested") {
				// this method requiere more attention
				var query, res, key;
				//maxright = parseInt(maxright,10);
				// ToDo - update grid data
				if(parentid !== null) {
					maxright = parseInt(parentdata[right],10);
					query = $.jgrid.from($t.p.data);
					query = query.greaterOrEquals(right,maxright,{stype:'integer'});
					res = query.select();
					if(res.length) {
						for( key in res) {
							if(res.hasOwnProperty(key)) {
								res[key][left] = res[key][left] > maxright ? parseInt(res[key][left],10) +2 : res[key][left];
								res[key][right] = res[key][right] >= maxright ? parseInt(res[key][right],10) +2 : res[key][right];
							}
						}
					}
					data[left] = maxright;
					data[right]= maxright+1;
				} else {
					maxright = parseInt( $($t).jqGrid('getCol', right, false, 'max'), 10);
					res = $.jgrid.from($t.p.data)
						.greater(left,maxright,{stype:'integer'})
						.select();
					if(res.length) {
						for( key in res) {
							if(res.hasOwnProperty(key)) {
								res[key][left] = parseInt(res[key][left],10) +2 ;
							}
						}
					}
					res = $.jgrid.from($t.p.data)
						.greater(right,maxright,{stype:'integer'})
						.select();
					if(res.length) {
						for( key in res) {
							if(res.hasOwnProperty(key)) {
								res[key][right] = parseInt(res[key][right],10) +2 ;
							}
						}
					}
					data[left] = maxright+1;
					data[right] = maxright + 2;
				}
			}
			if( parentid === null || $($t).jqGrid("isNodeLoaded",parentdata) || leaf ) {
					$($t).jqGrid('addRowData', nodeid, data, method, rowind);
					$($t).jqGrid('setTreeNode', i, len);
			}
			if(parentdata && !parentdata[expanded] && expandData) {
				$($t.rows[prow])
					.find("div.treeclick")
					.click();
			}
		}
		//});
	}
});
})(jQuery);
/*jshint eqeqeq:false, eqnull:true */
/*global jQuery */
// Grouping module
(function($){
"use strict";
$.extend($.jgrid,{
	template : function(format){ //jqgformat
		var args = $.makeArray(arguments).slice(1), j, al = args.length;
		if(format==null) { format = ""; }
		return format.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g, function(m,i){
			if(!isNaN(parseInt(i,10))) {
				return args[parseInt(i,10)];
			}
			for(j=0; j < al;j++) {
				if($.isArray(args[j])) {
					var nmarr = args[ j ],
					k = nmarr.length;
					while(k--) {
						if(i===nmarr[k].nm) {
							return nmarr[k].v;
						}
					}
				}
			}
		});
	}
});
$.jgrid.extend({
	groupingSetup : function () {
		return this.each(function (){
			var $t = this, i, j, cml, cm = $t.p.colModel, grp = $t.p.groupingView;
			if(grp !== null && ( (typeof grp === 'object') || $.isFunction(grp) ) ) {
				if(!grp.groupField.length) {
					$t.p.grouping = false;
				} else {
					if (grp.visibiltyOnNextGrouping === undefined) {
						grp.visibiltyOnNextGrouping = [];
					}

					grp.lastvalues=[];
					if(!grp._locgr) {
						grp.groups =[];
					}
					grp.counters =[];
					for(i=0;i<grp.groupField.length;i++) {
						if(!grp.groupOrder[i]) {
							grp.groupOrder[i] = 'asc';
						}
						if(!grp.groupText[i]) {
							grp.groupText[i] = '{0}';
						}
						if( typeof grp.groupColumnShow[i] !== 'boolean') {
							grp.groupColumnShow[i] = true;
						}
						if( typeof grp.groupSummary[i] !== 'boolean') {
							grp.groupSummary[i] = false;
						}
						if( !grp.groupSummaryPos[i]) {
							grp.groupSummaryPos[i] = 'footer';
						}
						if(grp.groupColumnShow[i] === true) {
							grp.visibiltyOnNextGrouping[i] = true;
							$($t).jqGrid('showCol',grp.groupField[i]);
						} else {
							grp.visibiltyOnNextGrouping[i] = $("#"+$.jgrid.jqID($t.p.id+"_"+grp.groupField[i])).is(":visible");
							$($t).jqGrid('hideCol',grp.groupField[i]);
						}
					}
					grp.summary =[];
					if(grp.hideFirstGroupCol) {
						grp.formatDisplayField[0] = function (v) { return v;};
					}
					for(j=0, cml = cm.length; j < cml; j++) {
						if(grp.hideFirstGroupCol) {
							if(!cm[j].hidden && grp.groupField[0] === cm[j].name) {
								cm[j].formatter = function(){return '';};
							}
						}
						if(cm[j].summaryType ) {
							if(cm[j].summaryDivider) {
								grp.summary.push({nm:cm[j].name,st:cm[j].summaryType, v: '', sd:cm[j].summaryDivider, vd:'', sr: cm[j].summaryRound, srt: cm[j].summaryRoundType || 'round'});
							} else {
								grp.summary.push({nm:cm[j].name,st:cm[j].summaryType, v: '', sr: cm[j].summaryRound, srt: cm[j].summaryRoundType || 'round'});
							}
						}
					}
				}
			} else {
				$t.p.grouping = false;
			}
		});
	},
	groupingPrepare : function ( record, irow ) {
		this.each(function(){
			var grp = this.p.groupingView, $t= this, i,
			grlen = grp.groupField.length, 
			fieldName,
			v,
			displayName,
			displayValue,
			changed = 0;
			for(i=0;i<grlen;i++) {
				fieldName = grp.groupField[i];
				displayName = grp.displayField[i];
				v = record[fieldName];
				displayValue = displayName == null ? null : record[displayName];

				if( displayValue == null ) {
					displayValue = v;
				}
				if( v !== undefined ) {
					if(irow === 0 ) {
						// First record always starts a new group
						grp.groups.push({idx:i,dataIndex:fieldName,value:v, displayValue: displayValue, startRow: irow, cnt:1, summary : [] } );
						grp.lastvalues[i] = v;
						grp.counters[i] = {cnt:1, pos:grp.groups.length-1, summary: $.extend(true,[],grp.summary)};
						$.each(grp.counters[i].summary,function() {
							if ($.isFunction(this.st)) {
								this.v = this.st.call($t, this.v, this.nm, record);
							} else {
								this.v = $($t).jqGrid('groupingCalculations.handler',this.st, this.v, this.nm, this.sr, this.srt, record);
								if(this.st.toLowerCase() === 'avg' && this.sd) {
									this.vd = $($t).jqGrid('groupingCalculations.handler',this.st, this.vd, this.sd, this.sr, this.srt, record);
								}
							}
						});
						grp.groups[grp.counters[i].pos].summary = grp.counters[i].summary;
					} else {
						if (typeof v !== "object" && ($.isArray(grp.isInTheSameGroup) && $.isFunction(grp.isInTheSameGroup[i]) ? ! grp.isInTheSameGroup[i].call($t, grp.lastvalues[i], v, i, grp): grp.lastvalues[i] !== v)) {
							// This record is not in same group as previous one
							grp.groups.push({idx:i,dataIndex:fieldName,value:v, displayValue: displayValue, startRow: irow, cnt:1, summary : [] } );
							grp.lastvalues[i] = v;
							changed = 1;
							grp.counters[i] = {cnt:1, pos:grp.groups.length-1, summary: $.extend(true,[],grp.summary)};
							$.each(grp.counters[i].summary,function() {
								if ($.isFunction(this.st)) {
									this.v = this.st.call($t, this.v, this.nm, record);
								} else {
									this.v = $($t).jqGrid('groupingCalculations.handler',this.st, this.v, this.nm, this.sr, this.srt, record);
									if(this.st.toLowerCase() === 'avg' && this.sd) {
										this.vd = $($t).jqGrid('groupingCalculations.handler',this.st, this.vd, this.sd, this.sr, this.srt, record);
									}
								}
							});
							grp.groups[grp.counters[i].pos].summary = grp.counters[i].summary;
						} else {
							if (changed === 1) {
								// This group has changed because an earlier group changed.
								grp.groups.push({idx:i,dataIndex:fieldName,value:v, displayValue: displayValue, startRow: irow, cnt:1, summary : [] } );
								grp.lastvalues[i] = v;
								grp.counters[i] = {cnt:1, pos:grp.groups.length-1, summary: $.extend(true,[],grp.summary)};
								$.each(grp.counters[i].summary,function() {
									if ($.isFunction(this.st)) {
										this.v = this.st.call($t, this.v, this.nm, record);
									} else {
										this.v = $($t).jqGrid('groupingCalculations.handler',this.st, this.v, this.nm, this.sr, this.srt, record);
										if(this.st.toLowerCase() === 'avg' && this.sd) {
											this.vd = $($t).jqGrid('groupingCalculations.handler',this.st, this.vd, this.sd, this.sr, this.srt, record);
										}
									}
								});
								grp.groups[grp.counters[i].pos].summary = grp.counters[i].summary;
							} else {
								grp.counters[i].cnt += 1;
								grp.groups[grp.counters[i].pos].cnt = grp.counters[i].cnt;
								$.each(grp.counters[i].summary,function() {
									if ($.isFunction(this.st)) {
										this.v = this.st.call($t, this.v, this.nm, record);
									} else {
										this.v = $($t).jqGrid('groupingCalculations.handler',this.st, this.v, this.nm, this.sr, this.srt, record);
										if(this.st.toLowerCase() === 'avg' && this.sd) {
											this.vd = $($t).jqGrid('groupingCalculations.handler',this.st, this.vd, this.sd, this.sr, this.srt, record);
										}
									}
								});
								grp.groups[grp.counters[i].pos].summary = grp.counters[i].summary;
							}
						}
					}
				}
			}
			//gdata.push( rData );
		});
		return this;
	},
	groupingToggle : function(hid){
		this.each(function(){
			var $t = this,
			grp = $t.p.groupingView,
			strpos = hid.split('_'),
			num = parseInt(strpos[strpos.length-2], 10);
			strpos.splice(strpos.length-2,2);
			var uid = strpos.join("_"),
			minus = grp.minusicon,
			plus = grp.plusicon,
			tar = $("#"+$.jgrid.jqID(hid)),
			r = tar.length ? tar[0].nextSibling : null,
			tarspan = $("#"+$.jgrid.jqID(hid)+" span."+"tree-wrap-"+$t.p.direction),
			getGroupingLevelFromClass = function (className) {
				var nums = $.map(className.split(" "), function (item) {
					if (item.substring(0, uid.length + 1) === uid + "_") {
						return parseInt(item.substring(uid.length + 1), 10);
					}
				});
				return nums.length > 0 ? nums[0] : undefined;
			},
			itemGroupingLevel,
			showData,
			collapsed = false,
			frz = $t.p.frozenColumns ? $t.p.id+"_frozen" : false,
			tar2 = frz ? $("#"+$.jgrid.jqID(hid), "#"+$.jgrid.jqID(frz) ) : false,
			r2 = (tar2 && tar2.length) ? tar2[0].nextSibling : null;
			if( tarspan.hasClass(minus) ) {
				if(grp.showSummaryOnHide) {
					if(r){
						while(r) {
							if($(r).hasClass('jqfoot') ) {
								var lv = parseInt($(r).attr("jqfootlevel"),10);
								if(  lv <= num) {
									break;
								}
							}
							$(r).hide();
							r = r.nextSibling;
							if(frz) {
								$(r2).hide();
								r2 = r2.nextSibling;
							}
						}
					}
				} else  {
					if(r){
						while(r) {
							itemGroupingLevel = getGroupingLevelFromClass(r.className);
							if (itemGroupingLevel !== undefined && itemGroupingLevel <= num) {
								break;
							}
							$(r).hide();
							r = r.nextSibling;
							if(frz) {
								$(r2).hide();
								r2 = r2.nextSibling;
							}
						}
					}
				}
				tarspan.removeClass(minus).addClass(plus);
				collapsed = true;
			} else {
				if(r){
					showData = undefined;
					while(r) {
						itemGroupingLevel = getGroupingLevelFromClass(r.className);
						if (showData === undefined) {
							showData = itemGroupingLevel === undefined; // if the first row after the opening group is data row then show the data rows
						}
						if (itemGroupingLevel !== undefined) {
							if (itemGroupingLevel <= num) {
								break;// next item of the same lever are found
							}
							if (itemGroupingLevel === num + 1) {
								$(r).show().find(">td>span."+"tree-wrap-"+$t.p.direction).removeClass(minus).addClass(plus);
								if(frz) {
									$(r2).show().find(">td>span."+"tree-wrap-"+$t.p.direction).removeClass(minus).addClass(plus);
								}
							}
						} else if (showData) {
							$(r).show();
							if(frz) {
								$(r2).show();
							}
						}
						r = r.nextSibling;
						if(frz) {
							r2 = r2.nextSibling;
						}
					}
				}
				tarspan.removeClass(plus).addClass(minus);
			}
			$($t).triggerHandler("jqGridGroupingClickGroup", [hid , collapsed]);
			if( $.isFunction($t.p.onClickGroup)) { $t.p.onClickGroup.call($t, hid , collapsed); }

		});
		return false;
	},
	groupingRender : function (grdata, colspans, page, rn ) {
		return this.each(function(){
			var $t = this,
			grp = $t.p.groupingView,
			str = "", icon = "", hid, clid, pmrtl = grp.groupCollapse ? grp.plusicon : grp.minusicon, gv, cp=[], len =grp.groupField.length;
			pmrtl += " tree-wrap-"+$t.p.direction; 
			$.each($t.p.colModel, function (i,n){
				var ii;
				for(ii=0;ii<len;ii++) {
					if(grp.groupField[ii] === n.name ) {
						cp[ii] = i;
						break;
					}
				}
			});
			var toEnd = 0;
			function findGroupIdx( ind , offset, grp) {
				var ret = false, i;
				if(offset===0) {
					ret = grp[ind];
				} else {
					var id = grp[ind].idx;
					if(id===0) { 
						ret = grp[ind]; 
					}  else {
						for(i=ind;i >= 0; i--) {
							if(grp[i].idx === id-offset) {
								ret = grp[i];
								break;
							}
						}
					}
				}
				return ret;
			}
			function buildSummaryTd(i, ik, grp, foffset) {
				var fdata = findGroupIdx(i, ik, grp),
				cm = $t.p.colModel,
				vv, grlen = fdata.cnt, str="", k;
				for(k=foffset; k<colspans;k++) {
					var tmpdata = "<td "+$t.formatCol(k,1,'')+">&#160;</td>",
					tplfld = "{0}";
					$.each(fdata.summary,function(){
						if(this.nm === cm[k].name) {
							if(cm[k].summaryTpl)  {
								tplfld = cm[k].summaryTpl;
							}
							if(typeof this.st === 'string' && this.st.toLowerCase() === 'avg') {
								if(this.sd && this.vd) { 
									this.v = (this.v/this.vd);
								} else if(this.v && grlen > 0) {
									this.v = (this.v/grlen);
								}
							}
							try {
								this.groupCount = fdata.cnt;
								this.groupIndex = fdata.dataIndex;
								this.groupValue = fdata.value;
								vv = $t.formatter('', this.v, k, this);
							} catch (ef) {
								vv = this.v;
							}
							tmpdata= "<td "+$t.formatCol(k,1,'')+">"+$.jgrid.format(tplfld,vv)+ "</td>";
							return false;
						}
					});
					str += tmpdata;
				}
				return str;
			}
			var sumreverse = $.makeArray(grp.groupSummary);
			sumreverse.reverse();
			$.each(grp.groups,function(i,n){
				if(grp._locgr) {
					if( !(n.startRow +n.cnt > (page-1)*rn && n.startRow < page*rn)) {
						return true;
					}
				}
				toEnd++;
				clid = $t.p.id+"ghead_"+n.idx;
				hid = clid+"_"+i;
				icon = "<span style='cursor:pointer;' class='ui-icon "+pmrtl+"' onclick=\"jQuery('#"+$.jgrid.jqID($t.p.id)+"').jqGrid('groupingToggle','"+hid+"');return false;\"></span>";
				try {
					if ($.isArray(grp.formatDisplayField) && $.isFunction(grp.formatDisplayField[n.idx])) {
						n.displayValue = grp.formatDisplayField[n.idx].call($t, n.displayValue, n.value, $t.p.colModel[cp[n.idx]], n.idx, grp);
						gv = n.displayValue;
					} else {
						gv = $t.formatter(hid, n.displayValue, cp[n.idx], n.value );
					}
				} catch (egv) {
					gv = n.displayValue;
				}
				if(grp.groupSummaryPos[n.idx] === 'header')  {
					str += "<tr id=\""+hid+"\"" +(grp.groupCollapse && n.idx>0 ? " style=\"display:none;\" " : " ") + "role=\"row\" class= \"ui-widget-content jqgroup ui-row-"+$t.p.direction+" "+clid+"\"><td style=\"padding-left:"+(n.idx * 12) + "px;"+"\">"+icon+$.jgrid.template(grp.groupText[n.idx], gv, n.cnt, n.summary)+"</td>";
					str += buildSummaryTd(i, n.idx-1, grp.groups, 1);
					str += "</tr>";
				} else {
					str += "<tr id=\""+hid+"\"" +(grp.groupCollapse && n.idx>0 ? " style=\"display:none;\" " : " ") + "role=\"row\" class= \"ui-widget-content jqgroup ui-row-"+$t.p.direction+" "+clid+"\"><td style=\"padding-left:"+(n.idx * 12) + "px;"+"\" colspan=\""+colspans+"\">"+icon+$.jgrid.template(grp.groupText[n.idx], gv, n.cnt, n.summary)+"</td></tr>";
				}
				var leaf = len-1 === n.idx; 
				if( leaf ) {
					var gg = grp.groups[i+1], kk, ik, offset = 0, sgr = n.startRow,
					end = gg !== undefined ?  grp.groups[i+1].startRow : grdata.length;
					if(grp._locgr) {
						offset = (page-1)*rn;
						if(offset > n.startRow) {
							sgr = offset;
						}
					}
					for(kk=sgr;kk<end;kk++) {
						if(!grdata[kk - offset]) { break; }
						str += grdata[kk - offset].join('');
					}
					if(grp.groupSummaryPos[n.idx] !== 'header') {
						var jj;
						if (gg !== undefined) {
							for (jj = 0; jj < grp.groupField.length; jj++) {
								if (gg.dataIndex === grp.groupField[jj]) {
									break;
								}
							}
							toEnd = grp.groupField.length - jj;
						}
						for (ik = 0; ik < toEnd; ik++) {
							if(!sumreverse[ik]) { continue; }
							var hhdr = "";
							if(grp.groupCollapse && !grp.showSummaryOnHide) {
								hhdr = " style=\"display:none;\"";
							}
							str += "<tr"+hhdr+" jqfootlevel=\""+(n.idx-ik)+"\" role=\"row\" class=\"ui-widget-content jqfoot ui-row-"+$t.p.direction+"\">";
							str += buildSummaryTd(i, ik, grp.groups, 0);
							str += "</tr>";
						}
						toEnd = jj;
					}
				}
			});
			$("#"+$.jgrid.jqID($t.p.id)+" tbody:first").append(str);
			// free up memory
			str = null;
		});
	},
	groupingGroupBy : function (name, options ) {
		return this.each(function(){
			var $t = this;
			if(typeof name === "string") {
				name = [name];
			}
			var grp = $t.p.groupingView;
			$t.p.grouping = true;

			//Set default, in case visibilityOnNextGrouping is undefined 
			if (grp.visibiltyOnNextGrouping === undefined) {
				grp.visibiltyOnNextGrouping = [];
			}
			var i;
			// show previous hidden groups if they are hidden and weren't removed yet
			for(i=0;i<grp.groupField.length;i++) {
				if(!grp.groupColumnShow[i] && grp.visibiltyOnNextGrouping[i]) {
				$($t).jqGrid('showCol',grp.groupField[i]);
				}
			}
			// set visibility status of current group columns on next grouping
			for(i=0;i<name.length;i++) {
				grp.visibiltyOnNextGrouping[i] = $("#"+$.jgrid.jqID($t.p.id)+"_"+$.jgrid.jqID(name[i])).is(":visible");
			}
			$t.p.groupingView = $.extend($t.p.groupingView, options || {});
			grp.groupField = name;
			$($t).trigger("reloadGrid");
		});
	},
	groupingRemove : function (current) {
		return this.each(function(){
			var $t = this;
			if(current === undefined) {
				current = true;
			}
			$t.p.grouping = false;
			if(current===true) {
				var grp = $t.p.groupingView, i;
				// show previous hidden groups if they are hidden and weren't removed yet
				for(i=0;i<grp.groupField.length;i++) {
				if (!grp.groupColumnShow[i] && grp.visibiltyOnNextGrouping[i]) {
						$($t).jqGrid('showCol', grp.groupField);
					}
				}
				$("tr.jqgroup, tr.jqfoot","#"+$.jgrid.jqID($t.p.id)+" tbody:first").remove();
				$("tr.jqgrow:hidden","#"+$.jgrid.jqID($t.p.id)+" tbody:first").show();
			} else {
				$($t).trigger("reloadGrid");
			}
		});
	},
	groupingCalculations : {
		handler: function(fn, v, field, round, roundType, rc) {
			var funcs = {
				sum: function() {
					return parseFloat(v||0) + parseFloat((rc[field]||0));
				},

				min: function() {
					if(v==="") {
						return parseFloat(rc[field]||0);
					}
					return Math.min(parseFloat(v),parseFloat(rc[field]||0));
				},

				max: function() {
					if(v==="") {
						return parseFloat(rc[field]||0);
					}
					return Math.max(parseFloat(v),parseFloat(rc[field]||0));
				},

				count: function() {
					if(v==="") {v=0;}
					if(rc.hasOwnProperty(field)) {
						return v+1;
					}
					return 0;
				},

				avg: function() {
					// the same as sum, but at end we divide it
					// so use sum instead of duplicating the code (?)
					return funcs.sum();
				}
			};

			if(!funcs[fn]) {
				throw ("jqGrid Grouping No such method: " + fn);
			}
			var res = funcs[fn]();

			if (round != null) {
				if (roundType === 'fixed') {
					res = res.toFixed(round);
				} else {
					var mul = Math.pow(10, round);
					res = Math.round(res * mul) / mul;
				}
			}

			return res;
		}	
	}
});
})(jQuery);
/*jshint eqeqeq:false, eqnull:true, devel:true */
/*global jQuery, xmlJsonClass */
(function($){
/*
 * jqGrid extension for constructing Grid Data from external file
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
**/ 

"use strict";
    $.jgrid.extend({
        jqGridImport : function(o) {
            o = $.extend({
                imptype : "xml", // xml, json, xmlstring, jsonstring
                impstring: "",
                impurl: "",
                mtype: "GET",
                impData : {},
                xmlGrid :{
                    config : "roots>grid",
                    data: "roots>rows"
                },
                jsonGrid :{
                    config : "grid",
                    data: "data"
                },
                ajaxOptions :{}
            }, o || {});
            return this.each(function(){
                var $t = this;
                var xmlConvert = function (xml,o) {
                    var cnfg = $(o.xmlGrid.config,xml)[0];
                    var xmldata = $(o.xmlGrid.data,xml)[0], jstr, jstr1, key;
                    if(xmlJsonClass.xml2json && $.jgrid.parse) {
                        jstr = xmlJsonClass.xml2json(cnfg," ");
                        jstr = $.jgrid.parse(jstr);
                        for(key in jstr) {
                            if(jstr.hasOwnProperty(key)) {
                                jstr1=jstr[key];
                            }
                        }
                        if(xmldata) {
                        // save the datatype
                            var svdatatype = jstr.grid.datatype;
                            jstr.grid.datatype = 'xmlstring';
                            jstr.grid.datastr = xml;
                            $($t).jqGrid( jstr1 ).jqGrid("setGridParam",{datatype:svdatatype});
                        } else {
                            $($t).jqGrid( jstr1 );
                        }
                        jstr = null;jstr1=null;
                    } else {
                        alert("xml2json or parse are not present");
                    }
                };
                var jsonConvert = function (jsonstr,o){
                    if (jsonstr && typeof jsonstr === 'string') {
						var _jsonparse = false;
						if($.jgrid.useJSON) {
							$.jgrid.useJSON = false;
							_jsonparse = true;
						}
                        var json = $.jgrid.parse(jsonstr);
						if(_jsonparse) { $.jgrid.useJSON = true; }
                        var gprm = json[o.jsonGrid.config];
                        var jdata = json[o.jsonGrid.data];
                        if(jdata) {
                            var svdatatype = gprm.datatype;
                            gprm.datatype = 'jsonstring';
                            gprm.datastr = jdata;
                            $($t).jqGrid( gprm ).jqGrid("setGridParam",{datatype:svdatatype});
                        } else {
                            $($t).jqGrid( gprm );
                        }
                    }
                };
                switch (o.imptype){
                    case 'xml':
                        $.ajax($.extend({
                            url:o.impurl,
                            type:o.mtype,
                            data: o.impData,
                            dataType:"xml",
                            complete: function(xml,stat) {
                                if(stat === 'success') {
                                    xmlConvert(xml.responseXML,o);
                                    $($t).triggerHandler("jqGridImportComplete", [xml, o]);
                                    if($.isFunction(o.importComplete)) {
                                        o.importComplete(xml);
                                    }
                                }
                                xml=null;
                            }
                        }, o.ajaxOptions));
                        break;
                    case 'xmlstring' :
                        // we need to make just the conversion and use the same code as xml
                        if(o.impstring && typeof o.impstring === 'string') {
                            var xmld = $.parseXML(o.impstring);
                            if(xmld) {
                                xmlConvert(xmld,o);
                                $($t).triggerHandler("jqGridImportComplete", [xmld, o]);
                                if($.isFunction(o.importComplete)) {
                                    o.importComplete(xmld);
                                }
                                o.impstring = null;
                            }
                            xmld = null;
                        }
                        break;
                    case 'json':
                        $.ajax($.extend({
                            url:o.impurl,
                            type:o.mtype,
                            data: o.impData,
                            dataType:"json",
                            complete: function(json) {
                                try {
                                    jsonConvert(json.responseText,o );
                                    $($t).triggerHandler("jqGridImportComplete", [json, o]);
                                    if($.isFunction(o.importComplete)) {
                                        o.importComplete(json);
                                    }
                                } catch (ee){}
                                json=null;
                            }
                        }, o.ajaxOptions ));
                        break;
                    case 'jsonstring' :
                        if(o.impstring && typeof o.impstring === 'string') {
                            jsonConvert(o.impstring,o );
                            $($t).triggerHandler("jqGridImportComplete", [o.impstring, o]);
                            if($.isFunction(o.importComplete)) {
                                o.importComplete(o.impstring);
                            }
                            o.impstring = null;
                        }
                        break;
                }
            });
        },
        jqGridExport : function(o) {
            o = $.extend({
                exptype : "xmlstring",
                root: "grid",
                ident: "\t"
            }, o || {});
            var ret = null;
            this.each(function () {
                if(!this.grid) { return;}
                var key, gprm = $.extend(true, {},$(this).jqGrid("getGridParam"));
                // we need to check for:
                // 1.multiselect, 2.subgrid  3. treegrid and remove the unneded columns from colNames
                if(gprm.rownumbers) {
                    gprm.colNames.splice(0,1);
                    gprm.colModel.splice(0,1);
                }
                if(gprm.multiselect) {
                    gprm.colNames.splice(0,1);
                    gprm.colModel.splice(0,1);
                }
                if(gprm.subGrid) {
                    gprm.colNames.splice(0,1);
                    gprm.colModel.splice(0,1);
                }
                gprm.knv = null;
                if(gprm.treeGrid) {
                    for (key in gprm.treeReader) {
                        if(gprm.treeReader.hasOwnProperty(key)) {
                            gprm.colNames.splice(gprm.colNames.length-1);
                            gprm.colModel.splice(gprm.colModel.length-1);
                        }
                    }
                }
                switch (o.exptype) {
                    case 'xmlstring' :
                        ret = "<"+o.root+">"+xmlJsonClass.json2xml(gprm,o.ident)+"</"+o.root+">";
                        break;
                    case 'jsonstring' :
                        ret = "{"+ xmlJsonClass.toJson(gprm,o.root,o.ident,false)+"}";
                        if(gprm.postData.filters !== undefined) {
                            ret=ret.replace(/filters":"/,'filters":');
                            ret=ret.replace(/}]}"/,'}]}');
                        }
                        break;
                }
            });
            return ret;
        },
        excelExport : function(o) {
            o = $.extend({
                exptype : "remote",
                url : null,
                oper: "oper",
                tag: "excel",
                exportOptions : {}
            }, o || {});
            return this.each(function(){
                if(!this.grid) { return;}
                var url;
                if(o.exptype === "remote") {
                    var pdata = $.extend({},this.p.postData);
                    pdata[o.oper] = o.tag;
                    var params = jQuery.param(pdata);
                    if(o.url.indexOf("?") !== -1) { url = o.url+"&"+params; }
                    else { url = o.url+"?"+params; }
                    window.location = url;
                }
            });
        }
    });
})(jQuery);
/*jshint evil:true, eqeqeq:false, eqnull:true, devel:true */
/*global jQuery */
(function($){
/*
**
 * jqGrid addons using jQuery UI 
 * Author: Mark Williams
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 * depends on jQuery UI 
**/
"use strict";
if ($.jgrid.msie && $.jgrid.msiever()===8) {
	$.expr[":"].hidden = function(elem) {
		return elem.offsetWidth === 0 || elem.offsetHeight === 0 ||
			elem.style.display === "none";
	};
}
// requiere load multiselect before grid
$.jgrid._multiselect = false;
if($.ui) {
	if ($.ui.multiselect ) {
		if($.ui.multiselect.prototype._setSelected) {
			var setSelected = $.ui.multiselect.prototype._setSelected;
			$.ui.multiselect.prototype._setSelected = function(item,selected) {
				var ret = setSelected.call(this,item,selected);
				if (selected && this.selectedList) {
					var elt = this.element;
					this.selectedList.find('li').each(function() {
						if ($(this).data('optionLink')) {
							$(this).data('optionLink').remove().appendTo(elt);
						}
					});
				}
				return ret;
			};
		}
		if($.ui.multiselect.prototype.destroy) {
			$.ui.multiselect.prototype.destroy = function() {
				this.element.show();
				this.container.remove();
				if ($.Widget === undefined) {
					$.widget.prototype.destroy.apply(this, arguments);
				} else {
					$.Widget.prototype.destroy.apply(this, arguments);
				}
			};
		}
		$.jgrid._multiselect = true;
	}
}
        
$.jgrid.extend({
	sortableColumns : function (tblrow)
	{
		return this.each(function (){
			var ts = this, tid= $.jgrid.jqID( ts.p.id );
			function start() {ts.p.disableClick = true;}
			var sortable_opts = {
				"tolerance" : "pointer",
				"axis" : "x",
				"scrollSensitivity": "1",
				"items": '>th:not(:has(#jqgh_'+tid+'_cb'+',#jqgh_'+tid+'_rn'+',#jqgh_'+tid+'_subgrid),:hidden)',
				"placeholder": {
					element: function(item) {
						var el = $(document.createElement(item[0].nodeName))
						.addClass(item[0].className+" ui-sortable-placeholder ui-state-highlight")
						.removeClass("ui-sortable-helper")[0];
						return el;
					},
					update: function(self, p) {
						p.height(self.currentItem.innerHeight() - parseInt(self.currentItem.css('paddingTop')||0, 10) - parseInt(self.currentItem.css('paddingBottom')||0, 10));
						p.width(self.currentItem.innerWidth() - parseInt(self.currentItem.css('paddingLeft')||0, 10) - parseInt(self.currentItem.css('paddingRight')||0, 10));
					}
				},
				"update": function(event, ui) {
					var p = $(ui.item).parent(),
					th = $(">th", p),
					colModel = ts.p.colModel,
					cmMap = {}, tid= ts.p.id+"_";
					$.each(colModel, function(i) { cmMap[this.name]=i; });
					var permutation = [];
					th.each(function() {
						var id = $(">div", this).get(0).id.replace(/^jqgh_/, "").replace(tid,"");
							if (cmMap.hasOwnProperty(id)) {
								permutation.push(cmMap[id]);
							}
					});
	
					$(ts).jqGrid("remapColumns",permutation, true, true);
					if ($.isFunction(ts.p.sortable.update)) {
						ts.p.sortable.update(permutation);
					}
					setTimeout(function(){ts.p.disableClick=false;}, 50);
				}
			};
			if (ts.p.sortable.options) {
				$.extend(sortable_opts, ts.p.sortable.options);
			} else if ($.isFunction(ts.p.sortable)) {
				ts.p.sortable = { "update" : ts.p.sortable };
			}
			if (sortable_opts.start) {
				var s = sortable_opts.start;
				sortable_opts.start = function(e,ui) {
					start();
					s.call(this,e,ui);
				};
			} else {
				sortable_opts.start = start;
			}
			if (ts.p.sortable.exclude) {
				sortable_opts.items += ":not("+ts.p.sortable.exclude+")";
			}
			tblrow.sortable(sortable_opts).data("sortable").floating = true;
		});
	},
    columnChooser : function(opts) {
        var self = this;
		if($("#colchooser_"+$.jgrid.jqID(self[0].p.id)).length ) { return; }
        var selector = $('<div id="colchooser_'+self[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>');
        var select = $('select', selector);
		
		function insert(perm,i,v) {
			if(i>=0){
				var a = perm.slice();
				var b = a.splice(i,Math.max(perm.length-i,i));
				if(i>perm.length) { i = perm.length; }
				a[i] = v;
				return a.concat(b);
			}
		}
        opts = $.extend({
            "width" : 420,
            "height" : 240,
            "classname" : null,
            "done" : function(perm) { if (perm) { self.jqGrid("remapColumns", perm, true); } },
            /* msel is either the name of a ui widget class that
               extends a multiselect, or a function that supports
               creating a multiselect object (with no argument,
               or when passed an object), and destroying it (when
               passed the string "destroy"). */
            "msel" : "multiselect",
            /* "msel_opts" : {}, */

            /* dlog is either the name of a ui widget class that 
               behaves in a dialog-like way, or a function, that
               supports creating a dialog (when passed dlog_opts)
               or destroying a dialog (when passed the string
               "destroy")
               */
            "dlog" : "dialog",
			"dialog_opts" : {
				"minWidth": 470
			},
            /* dlog_opts is either an option object to be passed 
               to "dlog", or (more likely) a function that creates
               the options object.
               The default produces a suitable options object for
               ui.dialog */
            "dlog_opts" : function(opts) {
                var buttons = {};
                buttons[opts.bSubmit] = function() {
                    opts.apply_perm();
                    opts.cleanup(false);
                };
                buttons[opts.bCancel] = function() {
                    opts.cleanup(true);
                };
                return $.extend(true, {
                    "buttons": buttons,
                    "close": function() {
                        opts.cleanup(true);
                    },
					"modal" : opts.modal || false,
					"resizable": opts.resizable || true,
                    "width": opts.width+20
                }, opts.dialog_opts || {});
            },
            /* Function to get the permutation array, and pass it to the
               "done" function */
            "apply_perm" : function() {
                $('option',select).each(function() {
                    if (this.selected) {
                        self.jqGrid("showCol", colModel[this.value].name);
                    } else {
                        self.jqGrid("hideCol", colModel[this.value].name);
                    }
                });
                
                var perm = [];
				//fixedCols.slice(0);
                $('option:selected',select).each(function() { perm.push(parseInt(this.value,10)); });
                $.each(perm, function() { delete colMap[colModel[parseInt(this,10)].name]; });
                $.each(colMap, function() {
					var ti = parseInt(this,10);
					perm = insert(perm,ti,ti);
				});
                if (opts.done) {
                    opts.done.call(self, perm);
                }
            },
            /* Function to cleanup the dialog, and select. Also calls the
               done function with no permutation (to indicate that the
               columnChooser was aborted */
            "cleanup" : function(calldone) {
                call(opts.dlog, selector, 'destroy');
                call(opts.msel, select, 'destroy');
                selector.remove();
                if (calldone && opts.done) {
                    opts.done.call(self);
                }
            },
			"msel_opts" : {}
        }, $.jgrid.col, opts || {});
		if($.ui) {
			if ($.ui.multiselect ) {
				if(opts.msel === "multiselect") {
					if(!$.jgrid._multiselect) {
						// should be in language file
						alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");
						return;
					}
					opts.msel_opts = $.extend($.ui.multiselect.defaults,opts.msel_opts);
				}
			}
		}
        if (opts.caption) {
            selector.attr("title", opts.caption);
        }
        if (opts.classname) {
            selector.addClass(opts.classname);
            select.addClass(opts.classname);
        }
        if (opts.width) {
            $(">div",selector).css({"width": opts.width,"margin":"0 auto"});
            select.css("width", opts.width);
        }
        if (opts.height) {
            $(">div",selector).css("height", opts.height);
            select.css("height", opts.height - 10);
        }
        var colModel = self.jqGrid("getGridParam", "colModel");
        var colNames = self.jqGrid("getGridParam", "colNames");
        var colMap = {}, fixedCols = [];

        select.empty();
        $.each(colModel, function(i) {
            colMap[this.name] = i;
            if (this.hidedlg) {
                if (!this.hidden) {
                    fixedCols.push(i);
                }
                return;
            }

            select.append("<option value='"+i+"' "+
                          (this.hidden?"":"selected='selected'")+">"+$.jgrid.stripHtml(colNames[i])+"</option>");
        });
        function call(fn, obj) {
            if (!fn) { return; }
            if (typeof fn === 'string') {
                if ($.fn[fn]) {
                    $.fn[fn].apply(obj, $.makeArray(arguments).slice(2));
                }
            } else if ($.isFunction(fn)) {
                fn.apply(obj, $.makeArray(arguments).slice(2));
            }
        }

        var dopts = $.isFunction(opts.dlog_opts) ? opts.dlog_opts.call(self, opts) : opts.dlog_opts;
        call(opts.dlog, selector, dopts);
        var mopts = $.isFunction(opts.msel_opts) ? opts.msel_opts.call(self, opts) : opts.msel_opts;
        call(opts.msel, select, mopts);
    },
	sortableRows : function (opts) {
		// Can accept all sortable options and events
		return this.each(function(){
			var $t = this;
			if(!$t.grid) { return; }
			// Currently we disable a treeGrid sortable
			if($t.p.treeGrid) { return; }
			if($.fn.sortable) {
				opts = $.extend({
					"cursor":"move",
					"axis" : "y",
					"items": ".jqgrow"
					},
				opts || {});
				if(opts.start && $.isFunction(opts.start)) {
					opts._start_ = opts.start;
					delete opts.start;
				} else {opts._start_=false;}
				if(opts.update && $.isFunction(opts.update)) {
					opts._update_ = opts.update;
					delete opts.update;
				} else {opts._update_ = false;}
				opts.start = function(ev,ui) {
					$(ui.item).css("border-width","0");
					$("td",ui.item).each(function(i){
						this.style.width = $t.grid.cols[i].style.width;
					});
					if($t.p.subGrid) {
						var subgid = $(ui.item).attr("id");
						try {
							$($t).jqGrid('collapseSubGridRow',subgid);
						} catch (e) {}
					}
					if(opts._start_) {
						opts._start_.apply(this,[ev,ui]);
					}
				};
				opts.update = function (ev,ui) {
					$(ui.item).css("border-width","");
					if($t.p.rownumbers === true) {
						$("td.jqgrid-rownum",$t.rows).each(function( i ){
							$(this).html( i+1+(parseInt($t.p.page,10)-1)*parseInt($t.p.rowNum,10) );
						});
					}
					if(opts._update_) {
						opts._update_.apply(this,[ev,ui]);
					}
				};
				$("tbody:first",$t).sortable(opts);
				$("tbody:first",$t).disableSelection();
			}
		});
	},
	gridDnD : function(opts) {
		return this.each(function(){
		var $t = this, i, cn;
		if(!$t.grid) { return; }
		// Currently we disable a treeGrid drag and drop
		if($t.p.treeGrid) { return; }
		if(!$.fn.draggable || !$.fn.droppable) { return; }
		function updateDnD ()
		{
			var datadnd = $.data($t,"dnd");
			$("tr.jqgrow:not(.ui-draggable)",$t).draggable($.isFunction(datadnd.drag) ? datadnd.drag.call($($t),datadnd) : datadnd.drag);
		}
		var appender = "<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>";
		if($("#jqgrid_dnd")[0] === undefined) {
			$('body').append(appender);
		}

		if(typeof opts === 'string' && opts === 'updateDnD' && $t.p.jqgdnd===true) {
			updateDnD();
			return;
		}
		opts = $.extend({
			"drag" : function (opts) {
				return $.extend({
					start : function (ev, ui) {
						var i, subgid;
						// if we are in subgrid mode try to collapse the node
						if($t.p.subGrid) {
							subgid = $(ui.helper).attr("id");
							try {
								$($t).jqGrid('collapseSubGridRow',subgid);
							} catch (e) {}
						}
						// hack
						// drag and drop does not insert tr in table, when the table has no rows
						// we try to insert new empty row on the target(s)
						for (i=0;i<$.data($t,"dnd").connectWith.length;i++){
							if($($.data($t,"dnd").connectWith[i]).jqGrid('getGridParam','reccount') === 0 ){
								$($.data($t,"dnd").connectWith[i]).jqGrid('addRowData','jqg_empty_row',{});
							}
						}
						ui.helper.addClass("ui-state-highlight");
						$("td",ui.helper).each(function(i) {
							this.style.width = $t.grid.headers[i].width+"px";
						});
						if(opts.onstart && $.isFunction(opts.onstart) ) { opts.onstart.call($($t),ev,ui); }
					},
					stop :function(ev,ui) {
						var i, ids;
						if(ui.helper.dropped && !opts.dragcopy) {
							ids = $(ui.helper).attr("id");
							if(ids === undefined) { ids = $(this).attr("id"); }
							$($t).jqGrid('delRowData',ids );
						}
						// if we have a empty row inserted from start event try to delete it
						for (i=0;i<$.data($t,"dnd").connectWith.length;i++){
							$($.data($t,"dnd").connectWith[i]).jqGrid('delRowData','jqg_empty_row');
						}
						if(opts.onstop && $.isFunction(opts.onstop) ) { opts.onstop.call($($t),ev,ui); }
					}
				},opts.drag_opts || {});
			},
			"drop" : function (opts) {
				return $.extend({
					accept: function(d) {
						if (!$(d).hasClass('jqgrow')) { return d;}
						var tid = $(d).closest("table.ui-jqgrid-btable");
						if(tid.length > 0 && $.data(tid[0],"dnd") !== undefined) {
							var cn = $.data(tid[0],"dnd").connectWith;
							return $.inArray('#'+$.jgrid.jqID(this.id),cn) !== -1 ? true : false;
						}
						return false;
					},
					drop: function(ev, ui) {
						if (!$(ui.draggable).hasClass('jqgrow')) { return; }
						var accept = $(ui.draggable).attr("id");
						var getdata = ui.draggable.parent().parent().jqGrid('getRowData',accept);
						if(!opts.dropbyname) {
							var j =0, tmpdata = {}, nm, key;
							var dropmodel = $("#"+$.jgrid.jqID(this.id)).jqGrid('getGridParam','colModel');
							try {
								for (key in getdata) {
									if (getdata.hasOwnProperty(key)) {
									nm = dropmodel[j].name;
									if( !(nm === 'cb' || nm === 'rn' || nm === 'subgrid' )) {
										if(getdata.hasOwnProperty(key) && dropmodel[j]) {
											tmpdata[nm] = getdata[key];
										}
									}
									j++;
								}
								}
								getdata = tmpdata;
							} catch (e) {}
						}
						ui.helper.dropped = true;
						if(opts.beforedrop && $.isFunction(opts.beforedrop) ) {
							//parameters to this callback - event, element, data to be inserted, sender, reciever
							// should return object which will be inserted into the reciever
							var datatoinsert = opts.beforedrop.call(this,ev,ui,getdata,$('#'+$.jgrid.jqID($t.p.id)),$(this));
							if (datatoinsert !== undefined && datatoinsert !== null && typeof datatoinsert === "object") { getdata = datatoinsert; }
						}
						if(ui.helper.dropped) {
							var grid;
							if(opts.autoid) {
								if($.isFunction(opts.autoid)) {
									grid = opts.autoid.call(this,getdata);
								} else {
									grid = Math.ceil(Math.random()*1000);
									grid = opts.autoidprefix+grid;
								}
							}
							// NULL is interpreted as undefined while null as object
							$("#"+$.jgrid.jqID(this.id)).jqGrid('addRowData',grid,getdata,opts.droppos);
						}
						if(opts.ondrop && $.isFunction(opts.ondrop) ) { opts.ondrop.call(this,ev,ui, getdata); }
					}}, opts.drop_opts || {});
			},
			"onstart" : null,
			"onstop" : null,
			"beforedrop": null,
			"ondrop" : null,
			"drop_opts" : {
				"activeClass": "ui-state-active",
				"hoverClass": "ui-state-hover"
			},
			"drag_opts" : {
				"revert": "invalid",
				"helper": "clone",
				"cursor": "move",
				"appendTo" : "#jqgrid_dnd",
				"zIndex": 5000
			},
			"dragcopy": false,
			"dropbyname" : false,
			"droppos" : "first",
			"autoid" : true,
			"autoidprefix" : "dnd_"
		}, opts || {});
		
		if(!opts.connectWith) { return; }
		opts.connectWith = opts.connectWith.split(",");
		opts.connectWith = $.map(opts.connectWith,function(n){return $.trim(n);});
		$.data($t,"dnd",opts);
		
		if($t.p.reccount !== 0 && !$t.p.jqgdnd) {
			updateDnD();
		}
		$t.p.jqgdnd = true;
		for (i=0;i<opts.connectWith.length;i++){
			cn =opts.connectWith[i];
			$(cn).droppable($.isFunction(opts.drop) ? opts.drop.call($($t),opts) : opts.drop);
		}
		});
	},
	gridResize : function(opts) {
		return this.each(function(){
			var $t = this, gID = $.jgrid.jqID($t.p.id);
			if(!$t.grid || !$.fn.resizable) { return; }
			opts = $.extend({}, opts || {});
			if(opts.alsoResize ) {
				opts._alsoResize_ = opts.alsoResize;
				delete opts.alsoResize;
			} else {
				opts._alsoResize_ = false;
			}
			if(opts.stop && $.isFunction(opts.stop)) {
				opts._stop_ = opts.stop;
				delete opts.stop;
			} else {
				opts._stop_ = false;
			}
			opts.stop = function (ev, ui) {
				$($t).jqGrid('setGridParam',{height:$("#gview_"+gID+" .ui-jqgrid-bdiv").height()});
				$($t).jqGrid('setGridWidth',ui.size.width,opts.shrinkToFit);
				if(opts._stop_) { opts._stop_.call($t,ev,ui); }
			};
			if(opts._alsoResize_) {
				var optstest = "{\'#gview_"+gID+" .ui-jqgrid-bdiv\':true,'" +opts._alsoResize_+"':true}";
				opts.alsoResize = eval('('+optstest+')'); // the only way that I found to do this
			} else {
				opts.alsoResize = $(".ui-jqgrid-bdiv","#gview_"+gID);
			}
			delete opts._alsoResize_;
			$("#gbox_"+gID).resizable(opts);
		});
	}
});
})(jQuery);
/*
 Transform a table to a jqGrid.
 Peter Romianowski <peter.romianowski@optivo.de> 
 If the first column of the table contains checkboxes or
 radiobuttons then the jqGrid is made selectable.
*/
// Addition - selector can be a class or id
function tableToGrid(selector, options) {
jQuery(selector).each(function() {
	if(this.grid) {return;} //Adedd from Tony Tomov
	// This is a small "hack" to make the width of the jqGrid 100%
	jQuery(this).width("99%");
	var w = jQuery(this).width();

	// Text whether we have single or multi select
	var inputCheckbox = jQuery('tr td:first-child input[type=checkbox]:first', jQuery(this));
	var inputRadio = jQuery('tr td:first-child input[type=radio]:first', jQuery(this));
	var selectMultiple = inputCheckbox.length > 0;
	var selectSingle = !selectMultiple && inputRadio.length > 0;
	var selectable = selectMultiple || selectSingle;
	//var inputName = inputCheckbox.attr("name") || inputRadio.attr("name");

	// Build up the columnModel and the data
	var colModel = [];
	var colNames = [];
	jQuery('th', jQuery(this)).each(function() {
		if (colModel.length === 0 && selectable) {
			colModel.push({
				name: '__selection__',
				index: '__selection__',
				width: 0,
				hidden: true
			});
			colNames.push('__selection__');
		} else {
			colModel.push({
				name: jQuery(this).attr("id") || jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(' ').join('_'),
				index: jQuery(this).attr("id") || jQuery.trim(jQuery.jgrid.stripHtml(jQuery(this).html())).split(' ').join('_'),
				width: jQuery(this).width() || 150
			});
			colNames.push(jQuery(this).html());
		}
	});
	var data = [];
	var rowIds = [];
	var rowChecked = [];
	jQuery('tbody > tr', jQuery(this)).each(function() {
		var row = {};
		var rowPos = 0;
		jQuery('td', jQuery(this)).each(function() {
			if (rowPos === 0 && selectable) {
				var input = jQuery('input', jQuery(this));
				var rowId = input.attr("value");
				rowIds.push(rowId || data.length);
				if (input.is(":checked")) {
					rowChecked.push(rowId);
				}
				row[colModel[rowPos].name] = input.attr("value");
			} else {
				row[colModel[rowPos].name] = jQuery(this).html();
			}
			rowPos++;
		});
		if(rowPos >0) { data.push(row); }
	});

	// Clear the original HTML table
	jQuery(this).empty();

	// Mark it as jqGrid
	jQuery(this).addClass("scroll");

	jQuery(this).jqGrid(jQuery.extend({
		datatype: "local",
		width: w,
		colNames: colNames,
		colModel: colModel,
		multiselect: selectMultiple
		//inputName: inputName,
		//inputValueCol: imputName != null ? "__selection__" : null
	}, options || {}));

	// Add data
	var a;
	for (a = 0; a < data.length; a++) {
		var id = null;
		if (rowIds.length > 0) {
			id = rowIds[a];
			if (id && id.replace) {
				// We have to do this since the value of a checkbox
				// or radio button can be anything 
				id = encodeURIComponent(id).replace(/[.\-%]/g, "_");
			}
		}
		if (id === null) {
			id = a + 1;
		}
		jQuery(this).jqGrid("addRowData",id, data[a]);
	}

	// Set the selection
	for (a = 0; a < rowChecked.length; a++) {
		jQuery(this).jqGrid("setSelection",rowChecked[a]);
	}
});
};
/*jshint eqeqeq:false */
/*global jQuery */
(function($){
/**
 * jqGrid pivot functions
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
*/
"use strict";
// To optimize the search we need custom array filter
// This code is taken from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function _pivotfilter (fn, context) {
	var i,
		value,
		result = [],
		length;

	if (!this || typeof fn !== 'function' || (fn instanceof RegExp)) {
		throw new TypeError();
	}

	length = this.length;

	for (i = 0; i < length; i++) {
		if (this.hasOwnProperty(i)) {
			value = this[i];
			if (fn.call(context, value, i, this)) {
				result.push(value);
				// We need break in order to cancel loop 
				// in case the row is found
				break;
			}
		}
	}
	return result;
}
$.assocArraySize = function(obj) {
    // http://stackoverflow.com/a/6700/11236
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
        	size++;
        }
    }
    return size;
};

$.jgrid.extend({
	pivotSetup : function( data, options ){
		// data should come in json format
		// The function return the new colModel and the transformed data
		// again with group setup options which then will be passed to the grid
		var columns =[],
		pivotrows =[],
		summaries = [],
		member=[],
		groupOptions = {
			grouping : true,
			groupingView :  {
				groupField : [],
				groupSummary: [],
				groupSummaryPos:[]
			}
		},
		headers = [],
		o = $.extend ( {
			rowTotals : false,
			rowTotalsText : 'Total',
			// summary columns
			colTotals : false,
			groupSummary : true,
			groupSummaryPos :  'header',
			frozenStaticCols : false
		}, options || {});
		this.each(function(){

			var 
				row,
				rowindex,
				i,
				
				rowlen = data.length,
				xlen, ylen, aggrlen,
				tmp,
				newObj,
				r=0;
			// utility funcs
			/* 
			 * Filter the data to a given criteria. Return the firt occurance
			 */
			function find(ar, fun, extra) {
				var res;
				res = _pivotfilter.call(ar, fun, extra);
				return res.length > 0 ? res[0] : null;
			}
			/*
			 * Check if the grouped row column exist (See find)
			 * If the row is not find in pivot rows retun null,
			 * otherviese the column
			 */
			function findGroup(item, index) {
				var j = 0, ret = true, i;
				for(i in item) {
					if(item[i] != this[j]) {
						ret =  false;
						break;
					}
					j++;
					if(j>=this.length) {
						break;
					}
				}
				if(ret) {
					rowindex =  index;
				}
				return ret;
			}
			/*
			 * Perform calculations of the pivot values.
			 */
			function calculation(oper, v, field, rc)  {
				var ret;
				switch (oper) {
					case  "sum" : 
						ret = parseFloat(v||0) + parseFloat((rc[field]||0));
						break;
					case "count" :
						if(v==="" || v == null) {
							v=0;
						}
						if(rc.hasOwnProperty(field)) {
							ret = v+1;
						} else {
							ret = 0;
						}
						break;
					case "min" : 
						if(v==="" || v == null) {
							ret = parseFloat(rc[field]||0);
						} else {
							ret =Math.min(parseFloat(v),parseFloat(rc[field]||0));
						}
						break;
					case "max" : 
						if(v==="" || v == null) {
							ret = parseFloat(rc[field]||0);
						} else {
							ret = Math.max(parseFloat(v),parseFloat(rc[field]||0));
						}
						break;
				}
				return ret;
			}
			/*
			 * The function agragates the values of the pivot grid.
			 * Return the current row with pivot summary values
			 */
			function agregateFunc ( row, aggr, value, curr) {
				// default is sum
				var arrln = aggr.length, i, label, j, jv;
				if($.isArray(value)) {
					jv = value.length;
				} else {
					jv = 1;
				}
				member = [];
				member.root = 0;
				for(j=0;j<jv;j++) {
					var  tmpmember = [], vl;
					for(i=0; i < arrln; i++) {
						if(value == null) {
							label = $.trim(aggr[i].member)+"_"+aggr[i].aggregator;
							vl = label;
						} else {
							vl = value[j].replace(/\s+/g, '');
							try {
								label = (arrln === 1 ? vl : vl+"_"+aggr[i].aggregator+"_"+i);
							} catch(e) {}
						}
						curr[label] =  tmpmember[label] = calculation( aggr[i].aggregator, curr[label], aggr[i].member, row);
					}
					member[vl] = tmpmember;
				}
				return curr;
			}
			// Making the row totals without to add in yDimension
			if(o.rowTotals && o.yDimension.length > 0) {
				var dn = o.yDimension[0].dataName;
				o.yDimension.splice(0,0,{dataName:dn});
				o.yDimension[0].converter =  function(){ return '_r_Totals'; };
			}
			// build initial columns (colModel) from xDimension
			xlen = $.isArray(o.xDimension) ? o.xDimension.length : 0;
			ylen = o.yDimension.length;
			aggrlen  = $.isArray(o.aggregates) ? o.aggregates.length : 0;
			if(xlen === 0 || aggrlen === 0) {
				throw("xDimension or aggregates optiona are not set!");
			}
			var colc;
			for(i = 0; i< xlen; i++) {
				colc = {name:o.xDimension[i].dataName, frozen: o.frozenStaticCols};
				colc = $.extend(true, colc, o.xDimension[i]);
				columns.push( colc );
			}
			var groupfields = xlen - 1, tree={};
			//tree = { text: 'root', leaf: false, children: [] };
			//loop over alll the source data
			while( r < rowlen ) {
				row = data[r];
				var xValue = [];
				var yValue = []; 
				tmp = {};
				i = 0;
				// build the data from xDimension
				do {
					xValue[i]  = $.trim(row[o.xDimension[i].dataName]);
					tmp[o.xDimension[i].dataName] = xValue[i];
					i++;
				} while( i < xlen );
				
				var k = 0;
				rowindex = -1;
				// check to see if the row is in our new pivotrow set
				newObj = find(pivotrows, findGroup, xValue);
				if(!newObj) {
					// if the row is not in our set
					k = 0;
					// if yDimension is set
					if(ylen>=1) {
						// build the cols set in yDimension
						for(k=0;k<ylen;k++) {
							yValue[k] = $.trim(row[o.yDimension[k].dataName]);
							// Check to see if we have user defined conditions
							if(o.yDimension[k].converter && $.isFunction(o.yDimension[k].converter)) {
								yValue[k] = o.yDimension[k].converter.call(this, yValue[k], xValue, yValue);
							}
						}
						// make the colums based on aggregates definition 
						// and return the members for late calculation
						tmp = agregateFunc( row, o.aggregates, yValue, tmp );
					} else  if( ylen === 0 ) {
						// if not set use direct the aggregates 
						tmp = agregateFunc( row, o.aggregates, null, tmp );
					}
					// add the result in pivot rows
					pivotrows.push( tmp );
				} else {
					// the pivot exists
					if( rowindex >= 0) {
						k = 0;
						// make the recalculations 
						if(ylen>=1) {
							for(k=0;k<ylen;k++) {
								yValue[k] = $.trim(row[o.yDimension[k].dataName]);
								if(o.yDimension[k].converter && $.isFunction(o.yDimension[k].converter)) {
									yValue[k] = o.yDimension[k].converter.call(this, yValue[k], xValue, yValue);
								}
							}
							newObj = agregateFunc( row, o.aggregates, yValue, newObj );
						} else  if( ylen === 0 ) {
							newObj = agregateFunc( row, o.aggregates, null, newObj );
						}
						// update the row
						pivotrows[rowindex] = newObj;
					}
				}
				var kj=0, current = null,existing = null, kk;
				// Build a JSON tree from the member (see aggregateFunc) 
				// to make later the columns 
				// 
				for (kk in member) {
					if(kj === 0) {
						if (!tree.children||tree.children === undefined){
							tree = { text: kk, level : 0, children: [] };
						}
						current = tree.children;
					} else {
						existing = null;
						for (i=0; i < current.length; i++) {
							if (current[i].text === kk) {
								//current[i].fields=member[kk];
								existing = current[i];
								break;
							}
						}
						if (existing) {
							current = existing.children;
						} else {
							current.push({ children: [], text: kk, level: kj,  fields: member[kk] });
							current = current[current.length - 1].children;
						}
					}
					kj++;
				}
				r++;
			}
			var  lastval=[], initColLen = columns.length, swaplen = initColLen;
			if(ylen>0) {
				headers[ylen-1] = {	useColSpanStyle: false,	groupHeaders: []};
			}
			/*
			 * Recursive function which uses the tree to build the 
			 * columns from the pivot values and set the group Headers
			 */
			function list(items) {
				var l, j, key, k, col;
				for (key in items) { // iterate
					if (items.hasOwnProperty(key)) {
					// write amount of spaces according to level
					// and write name and newline
						if(typeof items[key] !== "object") {
							// If not a object build the header of the appropriate level
							if( key === 'level') {
								if(lastval[items.level] === undefined) {
									lastval[items.level] ='';
									if(items.level>0 && items.text !== '_r_Totals') {
										headers[items.level-1] = {
											useColSpanStyle: false,
											groupHeaders: []
										};
									}
								}
								if(lastval[items.level] !== items.text && items.children.length && items.text !== '_r_Totals') {
									if(items.level>0) {
										headers[items.level-1].groupHeaders.push({
											titleText: items.text
										});
										var collen = headers[items.level-1].groupHeaders.length,
										colpos = collen === 1 ? swaplen : initColLen+(collen-1)*aggrlen;
										headers[items.level-1].groupHeaders[collen-1].startColumnName = columns[colpos].name;
										headers[items.level-1].groupHeaders[collen-1].numberOfColumns = columns.length - colpos;
										initColLen = columns.length;
									}
								}
								lastval[items.level] = items.text;
							}
							// This is in case when the member contain more than one summary item
							if(items.level === ylen  && key==='level' && ylen >0) {
								if( aggrlen > 1){
									var ll=1;
									for( l in items.fields) {
										if(ll===1) {
											headers[ylen-1].groupHeaders.push({startColumnName: l, numberOfColumns: 1, titleText: items.text});
										}
										ll++;
									}
									headers[ylen-1].groupHeaders[headers[ylen-1].groupHeaders.length-1].numberOfColumns = ll-1;
								} else {
									headers.splice(ylen-1,1);
								}
							}
						}
						// if object, call recursively
						if (items[key] != null && typeof items[key] === "object") {
							list(items[key]);
						}
						// Finally build the coulumns
						if( key === 'level') {
							if(items.level >0){
								j=0;
								for(l in items.fields) {
									col = {};
									for(k in o.aggregates[j]) {
										if(o.aggregates[j].hasOwnProperty(k)) {
											switch( k ) {
												case 'member':
												case 'label':
												case 'aggregator':
													break;
												default:
													col[k] = o.aggregates[j][k];
											}
										}
									}
									if(aggrlen>1) {
										col.name = l;
										col.label = o.aggregates[j].label || l;
									} else {
										col.name = items.text;
										col.label = items.text==='_r_Totals' ? o.rowTotalsText : items.text;
									}
									columns.push (col);
									j++;
								}
							}
						}
					}
				}
			}

			list(tree, 0);
			var nm;
			// loop again trougth the pivot rows in order to build grand total 
			if(o.colTotals) {
				var plen = pivotrows.length;
				while(plen--) {
					for(i=xlen;i<columns.length;i++) {
						nm = columns[i].name;
						if(!summaries[nm]) {
							summaries[nm] = parseFloat(pivotrows[plen][nm] || 0);
						} else {
							summaries[nm] += parseFloat(pivotrows[plen][nm] || 0);
						}
					}
				}
			}
			// based on xDimension  levels build grouping 
			if( groupfields > 0) {
				for(i=0;i<groupfields;i++) {
					groupOptions.groupingView.groupField[i] = columns[i].name;
					groupOptions.groupingView.groupSummary[i] = o.groupSummary;
					groupOptions.groupingView.groupSummaryPos[i] = o.groupSummaryPos;
				}
			} else {
				// no grouping is needed
				groupOptions.grouping = false;
			}
			groupOptions.sortname = columns[groupfields].name;
			groupOptions.groupingView.hideFirstGroupCol = true;
		});
		// return the final result.
		return { "colModel" : columns, "rows": pivotrows, "groupOptions" : groupOptions, "groupHeaders" :  headers, summary : summaries };
	},
	jqPivot : function( data, pivotOpt, gridOpt, ajaxOpt) {
		return this.each(function(){
			var $t = this;

			function pivot( data) {
				var pivotGrid = jQuery($t).jqGrid('pivotSetup',data, pivotOpt),
				footerrow = $.assocArraySize(pivotGrid.summary) > 0 ? true : false,
				query= $.jgrid.from(pivotGrid.rows), i;
				for(i=0; i< pivotGrid.groupOptions.groupingView.groupField.length; i++) {
					query.orderBy(pivotGrid.groupOptions.groupingView.groupField[i], "a", 'text', '');
				}
				jQuery($t).jqGrid($.extend({
					datastr: $.extend(query.select(),footerrow ? {userdata:pivotGrid.summary} : {}),
					datatype: "jsonstring",
					footerrow : footerrow,
					userDataOnFooter: footerrow,
					colModel: pivotGrid.colModel,
					viewrecords: true,
					sortname: pivotOpt.xDimension[0].dataName // ?????
				}, gridOpt || {}, pivotGrid.groupOptions));
				var gHead = pivotGrid.groupHeaders;
				if(gHead.length) {
					for( i = 0;i < gHead.length ; i++) {
						if(gHead[i] && gHead[i].groupHeaders.length) {
							jQuery($t).jqGrid('setGroupHeaders',gHead[i]);
						}
					}
				}
				if(pivotOpt.frozenStaticCols) {
					jQuery($t).jqGrid("setFrozenColumns");
				}
			}

			if(typeof data === "string") {
				$.ajax($.extend({
					url : data,
					dataType: 'json',
					success : function(response) {
						pivot($.jgrid.getAccessor(response, ajaxOpt && ajaxOpt.reader ? ajaxOpt.reader: 'rows') );
					}
				}, ajaxOpt || {}) );
			} else {
				pivot( data );
			}
		});
	}
});
})(jQuery);




/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});



.ui-multiselect { padding:2px 0 2px 4px; text-align:left }
.ui-multiselect span.ui-icon { float:right }
.ui-multiselect-single .ui-multiselect-checkboxes input { position:absolute !important; top: auto !important; left:-9999px; }
.ui-multiselect-single .ui-multiselect-checkboxes label { padding:5px !important }

.ui-multiselect-header { margin-bottom:3px; padding:3px 0 3px 4px }
.ui-multiselect-header ul { font-size:0.9em }
.ui-multiselect-header ul li { float:left; padding:0 10px 0 0 }
.ui-multiselect-header a { text-decoration:none }
.ui-multiselect-header a:hover { text-decoration:underline }
.ui-multiselect-header span.ui-icon { float:left }
.ui-multiselect-header li.ui-multiselect-close { float:right; text-align:right; padding-right:0 }

.ui-multiselect-menu { display:none; padding:3px; position:absolute; z-index:10000; text-align: left }
.ui-multiselect-checkboxes { position:relative /* fixes bug in IE6/7 */; overflow-y:auto }
.ui-multiselect-checkboxes label { cursor:default; display:block; border:1px solid transparent; padding:3px 1px }
.ui-multiselect-checkboxes label input { position:relative; top:1px }
.ui-multiselect-checkboxes li { clear:both; font-size:0.9em; padding-right:3px }
.ui-multiselect-checkboxes li.ui-multiselect-optgroup-label { text-align:center; font-weight:bold; border-bottom:1px solid }
.ui-multiselect-checkboxes li.ui-multiselect-optgroup-label a { display:block; padding:3px; margin:1px 0; text-decoration:none }

/* remove label borders in IE6 because IE6 does not support transparency */
* html .ui-multiselect-checkboxes label { border:none }




/* jshint forin:true, noarg:true, noempty:true, eqeqeq:true, boss:true, undef:true, curly:true, browser:true, jquery:true */
/*
 * jQuery MultiSelect UI Widget 1.14pre
 * Copyright (c) 2012 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery 1.4.2+
 *   - jQuery UI 1.8 widget factory
 *
 * Optional:
 *   - jQuery UI effects
 *   - jQuery UI position utility
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
(function($, undefined) {

  var multiselectID = 0;
  var $doc = $(document);

  $.widget("ech.multiselect", {

    // default options
    options: {
      header: true,
      height: 175,
      minWidth: 225,
      classes: '',
      checkAllText: 'Check all',
      uncheckAllText: 'Uncheck all',
      noneSelectedText: 'Select options',
      selectedText: '# selected',
      selectedList: 0,
      show: null,
      hide: null,
      autoOpen: false,
      multiple: true,
      position: {},
      appendTo: "body"
    },

    _create: function() {
      var el = this.element.hide();
      var o = this.options;

      this.speed = $.fx.speeds._default; // default speed for effects
      this._isOpen = false; // assume no

      // create a unique namespace for events that the widget
      // factory cannot unbind automatically. Use eventNamespace if on
      // jQuery UI 1.9+, and otherwise fallback to a custom string.
      this._namespaceID = this.eventNamespace || ('multiselect' + multiselectID);

      var button = (this.button = $('<button type="button"><span class="ui-icon ui-icon-triangle-1-s"></span></button>'))
        .addClass('ui-multiselect ui-widget ui-state-default ui-corner-all')
        .addClass(o.classes)
        .attr({ 'title':el.attr('title'), 'aria-haspopup':true, 'tabIndex':el.attr('tabIndex') })
        .insertAfter(el),

        buttonlabel = (this.buttonlabel = $('<span />'))
          .html(o.noneSelectedText)
          .appendTo(button),

        menu = (this.menu = $('<div />'))
          .addClass('ui-multiselect-menu ui-widget ui-widget-content ui-corner-all')
          .addClass(o.classes)
          .appendTo($(o.appendTo)),

        header = (this.header = $('<div />'))
          .addClass('ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix')
          .appendTo(menu),

        headerLinkContainer = (this.headerLinkContainer = $('<ul />'))
          .addClass('ui-helper-reset')
          .html(function() {
            if(o.header === true) {
              return '<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>' + o.checkAllText + '</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>' + o.uncheckAllText + '</span></a></li>';
            } else if(typeof o.header === "string") {
              return '<li>' + o.header + '</li>';
            } else {
              return '';
            }
          })
          .append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>')
          .appendTo(header),

        checkboxContainer = (this.checkboxContainer = $('<ul />'))
          .addClass('ui-multiselect-checkboxes ui-helper-reset')
          .appendTo(menu);

        // perform event bindings
        this._bindEvents();

        // build menu
        this.refresh(true);

        // some addl. logic for single selects
        if(!o.multiple) {
          menu.addClass('ui-multiselect-single');
        }

        // bump unique ID
        multiselectID++;
    },

    _init: function() {
      if(this.options.header === false) {
        this.header.hide();
      }
      if(!this.options.multiple) {
        this.headerLinkContainer.find('.ui-multiselect-all, .ui-multiselect-none').hide();
      }
      if(this.options.autoOpen) {
        this.open();
      }
      if(this.element.is(':disabled')) {
        this.disable();
      }
    },

    refresh: function(init) {
      var el = this.element;
      var o = this.options;
      var menu = this.menu;
      var checkboxContainer = this.checkboxContainer;
      var optgroups = [];
      var html = "";
      var id = el.attr('id') || multiselectID++; // unique ID for the label & option tags

      // build items
      el.find('option').each(function(i) {
        var $this = $(this);
        var parent = this.parentNode;
        var description = this.innerHTML;
        var title = this.title;
        var value = this.value;
        var inputID = 'ui-multiselect-' + (this.id || id + '-option-' + i);
        var isDisabled = this.disabled;
        var isSelected = this.selected;
        var labelClasses = [ 'ui-corner-all' ];
        var liClasses = (isDisabled ? 'ui-multiselect-disabled ' : ' ') + this.className;
        var optLabel;

        // is this an optgroup?
        if(parent.tagName === 'OPTGROUP') {
          optLabel = parent.getAttribute('label');

          // has this optgroup been added already?
          if($.inArray(optLabel, optgroups) === -1) {
            html += '<li class="ui-multiselect-optgroup-label ' + parent.className + '"><a href="#">' + optLabel + '</a></li>';
            optgroups.push(optLabel);
          }
        }

        if(isDisabled) {
          labelClasses.push('ui-state-disabled');
        }

        // browsers automatically select the first option
        // by default with single selects
        if(isSelected && !o.multiple) {
          labelClasses.push('ui-state-active');
        }

        html += '<li class="' + liClasses + '">';

        // create the label
        html += '<label for="' + inputID + '" title="' + title + '" class="' + labelClasses.join(' ') + '">';
        html += '<input id="' + inputID + '" name="multiselect_' + id + '" type="' + (o.multiple ? "checkbox" : "radio") + '" value="' + value + '" title="' + title + '"';

        // pre-selected?
        if(isSelected) {
          html += ' checked="checked"';
          html += ' aria-selected="true"';
        }

        // disabled?
        if(isDisabled) {
          html += ' disabled="disabled"';
          html += ' aria-disabled="true"';
        }

        // add the title and close everything off
        html += ' /><span>' + description + '</span></label></li>';
      });

      // insert into the DOM
      checkboxContainer.html(html);

      // cache some moar useful elements
      this.labels = menu.find('label');
      this.inputs = this.labels.children('input');

      // set widths
      this._setButtonWidth();
      this._setMenuWidth();

      // remember default value
      this.button[0].defaultValue = this.update();

      // broadcast refresh event; useful for widgets
      if(!init) {
        this._trigger('refresh');
      }
    },

    // updates the button text. call refresh() to rebuild
    update: function() {
      var o = this.options;
      var $inputs = this.inputs;
      var $checked = $inputs.filter(':checked');
      var numChecked = $checked.length;
      var value;

      if(numChecked === 0) {
        value = o.noneSelectedText;
      } else {
        if($.isFunction(o.selectedText)) {
          value = o.selectedText.call(this, numChecked, $inputs.length, $checked.get());
        } else if(/\d/.test(o.selectedList) && o.selectedList > 0 && numChecked <= o.selectedList) {
          value = $checked.map(function() { return $(this).next().html(); }).get().join(', ');
        } else {
          value = o.selectedText.replace('#', numChecked).replace('#', $inputs.length);
        }
      }

      this._setButtonValue(value);

      return value;
    },

    // this exists as a separate method so that the developer 
    // can easily override it.
    _setButtonValue: function(value) {
      this.buttonlabel.text(value);
    },

    // binds events
    _bindEvents: function() {
      var self = this;
      var button = this.button;

      function clickHandler() {
        self[ self._isOpen ? 'close' : 'open' ]();
        return false;
      }

      // webkit doesn't like it when you click on the span :(
      button
        .find('span')
        .bind('click.multiselect', clickHandler);

      // button events
      button.bind({
        click: clickHandler,
        keypress: function(e) {
          switch(e.which) {
            case 27: // esc
              case 38: // up
              case 37: // left
              self.close();
            break;
            case 39: // right
              case 40: // down
              self.open();
            break;
          }
        },
        mouseenter: function() {
          if(!button.hasClass('ui-state-disabled')) {
            $(this).addClass('ui-state-hover');
          }
        },
        mouseleave: function() {
          $(this).removeClass('ui-state-hover');
        },
        focus: function() {
          if(!button.hasClass('ui-state-disabled')) {
            $(this).addClass('ui-state-focus');
          }
        },
        blur: function() {
          $(this).removeClass('ui-state-focus');
        }
      });

      // header links
      this.header.delegate('a', 'click.multiselect', function(e) {
        // close link
        if($(this).hasClass('ui-multiselect-close')) {
          self.close();

          // check all / uncheck all
        } else {
          self[$(this).hasClass('ui-multiselect-all') ? 'checkAll' : 'uncheckAll']();
        }

        e.preventDefault();
      });

      // optgroup label toggle support
      this.menu.delegate('li.ui-multiselect-optgroup-label a', 'click.multiselect', function(e) {
        e.preventDefault();

        var $this = $(this);
        var $inputs = $this.parent().nextUntil('li.ui-multiselect-optgroup-label').find('input:visible:not(:disabled)');
        var nodes = $inputs.get();
        var label = $this.parent().text();

        // trigger event and bail if the return is false
        if(self._trigger('beforeoptgrouptoggle', e, { inputs:nodes, label:label }) === false) {
          return;
        }

        // toggle inputs
        self._toggleChecked(
          $inputs.filter(':checked').length !== $inputs.length,
          $inputs
        );

        self._trigger('optgrouptoggle', e, {
          inputs: nodes,
          label: label,
          checked: nodes[0].checked
        });
      })
      .delegate('label', 'mouseenter.multiselect', function() {
        if(!$(this).hasClass('ui-state-disabled')) {
          self.labels.removeClass('ui-state-hover');
          $(this).addClass('ui-state-hover').find('input').focus();
        }
      })
      .delegate('label', 'keydown.multiselect', function(e) {
        e.preventDefault();

        switch(e.which) {
          case 9: // tab
            case 27: // esc
            self.close();
          break;
          case 38: // up
            case 40: // down
            case 37: // left
            case 39: // right
            self._traverse(e.which, this);
          break;
          case 13: // enter
            $(this).find('input')[0].click();
          break;
        }
      })
      .delegate('input[type="checkbox"], input[type="radio"]', 'click.multiselect', function(e) {
        var $this = $(this);
        var val = this.value;
        var checked = this.checked;
        var tags = self.element.find('option');

        // bail if this input is disabled or the event is cancelled
        if(this.disabled || self._trigger('click', e, { value: val, text: this.title, checked: checked }) === false) {
          e.preventDefault();
          return;
        }

        // make sure the input has focus. otherwise, the esc key
        // won't close the menu after clicking an item.
        $this.focus();

        // toggle aria state
        $this.attr('aria-selected', checked);

        // change state on the original option tags
        tags.each(function() {
          if(this.value === val) {
            this.selected = checked;
          } else if(!self.options.multiple) {
            this.selected = false;
          }
        });

        // some additional single select-specific logic
        if(!self.options.multiple) {
          self.labels.removeClass('ui-state-active');
          $this.closest('label').toggleClass('ui-state-active', checked);

          // close menu
          self.close();
        }

        // fire change on the select box
        self.element.trigger("change");

        // setTimeout is to fix multiselect issue #14 and #47. caused by jQuery issue #3827
        // http://bugs.jquery.com/ticket/3827
        setTimeout($.proxy(self.update, self), 10);
      });

      // close each widget when clicking on any other element/anywhere else on the page
      $doc.bind('mousedown.' + this._namespaceID, function(event) {
        var target = event.target;

        if(self._isOpen
            && target !== self.button[0]
            && target !== self.menu[0]
            && !$.contains(self.menu[0], target)
            && !$.contains(self.button[0], target)
          ) {
          self.close();
        }
      });

      // deal with form resets.  the problem here is that buttons aren't
      // restored to their defaultValue prop on form reset, and the reset
      // handler fires before the form is actually reset.  delaying it a bit
      // gives the form inputs time to clear.
      $(this.element[0].form).bind('reset.multiselect', function() {
        setTimeout($.proxy(self.refresh, self), 10);
      });
    },

    // set button width
    _setButtonWidth: function() {
      var width = this.element.outerWidth();
      var o = this.options;

      if(/\d/.test(o.minWidth) && width < o.minWidth) {
        width = o.minWidth;
      }

      // set widths
      this.button.outerWidth(width);
    },

    // set menu width
    _setMenuWidth: function() {
      var m = this.menu;
      m.outerWidth(this.button.outerWidth());
    },

    // move up or down within the menu
    _traverse: function(which, start) {
      var $start = $(start);
      var moveToLast = which === 38 || which === 37;

      // select the first li that isn't an optgroup label / disabled
      var $next = $start.parent()[moveToLast ? 'prevAll' : 'nextAll']('li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)').first();

      // if at the first/last element
      if(!$next.length) {
        var $container = this.menu.find('ul').last();

        // move to the first/last
        this.menu.find('label')[ moveToLast ? 'last' : 'first' ]().trigger('mouseover');

        // set scroll position
        $container.scrollTop(moveToLast ? $container.height() : 0);

      } else {
        $next.find('label').trigger('mouseover');
      }
    },

    // This is an internal function to toggle the checked property and
    // other related attributes of a checkbox.
    //
    // The context of this function should be a checkbox; do not proxy it.
    _toggleState: function(prop, flag) {
      return function() {
        if(!this.disabled) {
          this[ prop ] = flag;
        }

        if(flag) {
          this.setAttribute('aria-selected', true);
        } else {
          this.removeAttribute('aria-selected');
        }
      };
    },

    _toggleChecked: function(flag, group) {
      var $inputs = (group && group.length) ?  group : this.inputs;
      var self = this;

      // toggle state on inputs
      $inputs.each(this._toggleState('checked', flag));

      // give the first input focus
      $inputs.eq(0).focus();

      // update button text
      this.update();

      // gather an array of the values that actually changed
      var values = $inputs.map(function() {
        return this.value;
      }).get();

      // toggle state on original option tags
      this.element
        .find('option')
        .each(function() {
          if(!this.disabled && $.inArray(this.value, values) > -1) {
            self._toggleState('selected', flag).call(this);
          }
        });

      // trigger the change event on the select
      if($inputs.length) {
        this.element.trigger("change");
      }
    },

    _toggleDisabled: function(flag) {
      this.button.attr({ 'disabled':flag, 'aria-disabled':flag })[ flag ? 'addClass' : 'removeClass' ]('ui-state-disabled');

      var inputs = this.menu.find('input');
      var key = "ech-multiselect-disabled";

      if(flag) {
        // remember which elements this widget disabled (not pre-disabled)
        // elements, so that they can be restored if the widget is re-enabled.
        inputs = inputs.filter(':enabled').data(key, true)
      } else {
        inputs = inputs.filter(function() {
          return $.data(this, key) === true;
        }).removeData(key);
      }

      inputs
        .attr({ 'disabled':flag, 'arial-disabled':flag })
        .parent()[ flag ? 'addClass' : 'removeClass' ]('ui-state-disabled');

      this.element.attr({
        'disabled':flag,
        'aria-disabled':flag
      });
    },

    // open the menu
    open: function(e) {
      var self = this;
      var button = this.button;
      var menu = this.menu;
      var speed = this.speed;
      var o = this.options;
      var args = [];

      // bail if the multiselectopen event returns false, this widget is disabled, or is already open
      if(this._trigger('beforeopen') === false || button.hasClass('ui-state-disabled') || this._isOpen) {
        return;
      }

      var $container = menu.find('ul').last();
      var effect = o.show;

      // figure out opening effects/speeds
      if($.isArray(o.show)) {
        effect = o.show[0];
        speed = o.show[1] || self.speed;
      }

      // if there's an effect, assume jQuery UI is in use
      // build the arguments to pass to show()
      if(effect) {
        args = [ effect, speed ];
      }

      // set the scroll of the checkbox container
      $container.scrollTop(0).height(o.height);

      // positon
      this.position();

      // show the menu, maybe with a speed/effect combo
      $.fn.show.apply(menu, args);

      // select the first not disabled option
      // triggering both mouseover and mouseover because 1.4.2+ has a bug where triggering mouseover
      // will actually trigger mouseenter.  the mouseenter trigger is there for when it's eventually fixed
      this.labels.filter(':not(.ui-state-disabled)').eq(0).trigger('mouseover').trigger('mouseenter').find('input').trigger('focus');

      button.addClass('ui-state-active');
      this._isOpen = true;
      this._trigger('open');
    },

    // close the menu
    close: function() {
      if(this._trigger('beforeclose') === false) {
        return;
      }

      var o = this.options;
      var effect = o.hide;
      var speed = this.speed;
      var args = [];

      // figure out opening effects/speeds
      if($.isArray(o.hide)) {
        effect = o.hide[0];
        speed = o.hide[1] || this.speed;
      }

      if(effect) {
        args = [ effect, speed ];
      }

      $.fn.hide.apply(this.menu, args);
      this.button.removeClass('ui-state-active').trigger('blur').trigger('mouseleave');
      this._isOpen = false;
      this._trigger('close');
    },

    enable: function() {
      this._toggleDisabled(false);
    },

    disable: function() {
      this._toggleDisabled(true);
    },

    checkAll: function(e) {
      this._toggleChecked(true);
      this._trigger('checkAll');
    },

    uncheckAll: function() {
      this._toggleChecked(false);
      this._trigger('uncheckAll');
    },

    getChecked: function() {
      return this.menu.find('input').filter(':checked');
    },

    destroy: function() {
      // remove classes + data
      $.Widget.prototype.destroy.call(this);

      // unbind events
      $doc.unbind(this._namespaceID);

      this.button.remove();
      this.menu.remove();
      this.element.show();

      return this;
    },

    isOpen: function() {
      return this._isOpen;
    },

    widget: function() {
      return this.menu;
    },

    getButton: function() {
      return this.button;
    },

    position: function() {
      var o = this.options;

      // use the position utility if it exists and options are specifified
      if($.ui.position && !$.isEmptyObject(o.position)) {
        o.position.of = o.position.of || this.button;

        this.menu
          .show()
          .position(o.position)
          .hide();

        // otherwise fallback to custom positioning
      } else {
        var pos = this.button.offset();

        this.menu.css({
          top: pos.top + this.button.outerHeight(),
          left: pos.left
        });
      }
    },

    // react to option changes after initialization
    _setOption: function(key, value) {
      var menu = this.menu;

      switch(key) {
        case 'header':
          menu.find('div.ui-multiselect-header')[value ? 'show' : 'hide']();
          break;
        case 'checkAllText':
          menu.find('a.ui-multiselect-all span').eq(-1).text(value);
          break;
        case 'uncheckAllText':
          menu.find('a.ui-multiselect-none span').eq(-1).text(value);
          break;
        case 'height':
          menu.find('ul').last().height(parseInt(value, 10));
          break;
        case 'minWidth':
          this.options[key] = parseInt(value, 10);
          this._setButtonWidth();
          this._setMenuWidth();
          break;
        case 'selectedText':
        case 'selectedList':
        case 'noneSelectedText':
          this.options[key] = value; // these all needs to update immediately for the update() call
          this.update();
          break;
        case 'classes':
          menu.add(this.button).removeClass(this.options.classes).addClass(value);
          break;
        case 'multiple':
          menu.toggleClass('ui-multiselect-single', !value);
          this.options.multiple = value;
          this.element[0].multiple = value;
          this.refresh();
          break;
        case 'position':
          this.position();
      }

      $.Widget.prototype._setOption.apply(this, arguments);
    }
  });

})(jQuery);







/*! jQuery UI - v1.11.2 - 2014-10-16
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return n=!a&&o.length?e.widget.extend.apply(null,[n].concat(o)):n,a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))}),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,e.top+p+f+m>d&&(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.length&&(!t.length||e.index()<t.index()),l=this.options.animate||{},u=h&&l.down||l,d=function(){o._toggleComplete(i)};return"number"==typeof u&&(a=u),"string"==typeof u&&(n=u),n=n||u.easing||l.easing,a=a||u.duration||l.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:d,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?r+=i.now:"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,d):e.animate(this.showProps,a,n,d)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)
}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.2"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0
},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,z,H,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),z=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=z,H=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;z>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[H]):[!0,""],j=H.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>H||$&&H>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(H.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===H.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(H.getTime()===G.getTime()?" "+this._currentClass:"")+(H.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===R.getTime()?" ui-state-highlight":"")+(H.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.2",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=u-t.height,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;
if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.2",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};
f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.2",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this,i=this.element.attr("tabindex");this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:i||this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.attr("value"),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-e},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));
return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){o.html(e),s._trigger("load",i,r)},1)}).complete(function(e,t){setTimeout(function(){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.2",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){e.data("ui-tooltip-open")&&n._delay(function(){t&&(t.type=a),this._open(t,e,i)})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){u.of=e,o.is(":hidden")||o.position(u)}var a,o,r,h,l,u=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(l=s.clone(),l.removeAttr("id").find("[id]").removeAttr("id")):l=s,e("<div>").html(l).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(u.of),clearInterval(h))},e.fx.interval)),this._trigger("open",t,{tooltip:o}),r={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}},i[0]!==this.element[0]&&(r.remove=function(){this._removeTooltip(o)}),t&&"mouseover"!==t.type||(r.mouseleave="close"),t&&"focusin"!==t.type||(r.focusout="close"),this._on(!0,i,r)}},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);a&&(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)))},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});