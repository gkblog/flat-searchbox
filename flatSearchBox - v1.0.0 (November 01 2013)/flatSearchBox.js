/**
 * Flat SearchBox
 * http://www.gk-blog.fr/blog/article/Flat SearchBox
 *
 * @file
 * flatSearchBox.js
 *
 * @version
 * 1.0.0 (November 01 2013)
 * 
 * @copyright
 * Copyright (C) 2013-2014 Sébastien Doutre.
 *
 * @license
 * GPL licenses.
 */

var flatSearchBox={objFlatSearchBox:$(".flatSearchBox"),init:function(){this.objFlatSearchBox.each(function(){if($(this).hasClass("white")){$(this).append('<input type="text" class="fltInputSearchBlackWhite"/>');$(this).append('<img class="fltGlass begin" src="icon-glass-black.png" >');$(this).append('<span class="fltPlaceholderBlackWhite begin">Search...</span>')}else{$(this).append('<input type="text" class="fltInputSearch"/>');$(this).append('<img class="fltGlass begin" src="icon-glass.png" >');
$(this).append('<span class="fltPlaceholder begin">Search...</span>')}});this.objFlatSearchBox.mouseenter(function(){flatSearchBox.OnSearchBoxEnter($(this))});this.objFlatSearchBox.mouseleave(function(){flatSearchBox.OnSearchBoxLeave($(this))});$(".fltInputSearch").focusout(function(e){if($(this).val()!="")$(this).css("background-color","rgba(255, 255, 255, 0.2)");else{flatSearchBox.OnSearchBoxLeave($(this).parent());$(this).removeAttr("style")}});$(".fltInputSearchBlackWhite").focusout(function(e){if($(this).val()!=
"")$(this).css("background-color","rgba(255, 255, 255, 0.2)");else{flatSearchBox.OnSearchBoxLeave($(this).parent());$(this).removeAttr("style")}})},OnSearchBoxEnter:function(obj){if(obj.find(".fltInputSearch").val()==""&&!obj.find(".fltInputSearch").is(":focus")||obj.find(".fltInputSearchBlackWhite").val()==""&&!obj.find(".fltInputSearchBlackWhite").is(":focus")){obj.find(".fltGlass").toggleClass("begin",0);obj.find(".fltGlass").toggleClass("end",1);if(obj.hasClass("white")){obj.find(".fltPlaceholderBlackWhite").toggleClass("begin",
0);obj.find(".fltPlaceholderBlackWhite").toggleClass("end",1)}else{obj.find(".fltPlaceholder").toggleClass("begin",0);obj.find(".fltPlaceholder").toggleClass("end",1)}}},OnSearchBoxLeave:function(obj){if(obj.find(".fltInputSearch").val()==""&&!obj.find(".fltInputSearch").is(":focus")||obj.find(".fltInputSearchBlackWhite").val()==""&&!obj.find(".fltInputSearchBlackWhite").is(":focus")){obj.find(".fltGlass").toggleClass("begin",1);obj.find(".fltGlass").toggleClass("end",0);if(obj.hasClass("white")){obj.find(".fltPlaceholderBlackWhite").toggleClass("begin",
1);obj.find(".fltPlaceholderBlackWhite").toggleClass("end",0)}else{obj.find(".fltPlaceholder").toggleClass("begin",1);obj.find(".fltPlaceholder").toggleClass("end",0)}}}};
