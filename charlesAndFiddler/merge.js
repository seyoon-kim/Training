console.log("merge");

// 사용자가 보고있는 사이트의 Attention 카운트를 가져온다.
function fnAjaxAttentionCount(strUrl) {
	j$.ajax({
		type: "get",
		cache: false,
		url: strUrl,
		data: "",
		success: function(jsonData) {
			j$("#id_attention_count_display").html(jsonData);

		},
		error: function(xhr, info) {
			j$("#id_attention_count_display").html("-");
		}
	});
}



// 사용자가 보고있는 사이트의 게시판 중 새글이 있는 게시판 목록에 New 아이콘을 보여준다.
function fnAjaxBoardNewArticle(strUrl) {
	j$.ajax({
		type: "get",
		cache: false,
		url: strUrl,
		data: "",
		success: function(jsonData) {

			// 메뉴에 New 아이콘을 생성한다.
			var strHtml = "<em class=bu_new><span class=blind>New</span></em>";
			j$.each(jsonData, function(i) {
				var obj = j$("#id_menu_new_"+jsonData[i]);
				if (obj.length > 0) {
					obj.html(strHtml);
				}
			});

			// 숨겨진 메뉴에 New 아이콘이 있는지 검사한다.
			var isOpenBtnNew = false;
			var OpenBtnNewId = "";
			j$('._blindButton').each(function() {
				var obj = j$("#"+this.id);
				if (obj.html() != "") {
					isOpenBtnNew = true;
					OpenBtnNewId = "id_btn_" + obj.attr("code");
				}
			});
			if (isOpenBtnNew == true) {
				// 최초로딩시 New 아이콘을 설정한다.
				var obj = j$("#"+OpenBtnNewId);
				obj.attr("code", "new");

				if (obj.hasClass("up")) {
					obj.html(obj.html());
				} else {
					obj.html(obj.html()+"<em class=bu_new><span class=blind>New</span></em>");
				}
			}

			// 사용자 Folder 메뉴에 New 아이콘이 있는지 검사한다. 
			if (typeof arrLeftMenuGroupNameList == "undefined") {
				return false;
			} else {
				j$.each(jsonData, function(x) {
					for (var i=0; i<arrLeftMenuGroupCodeList.length; i++) {

						var customNewIconId = "";
						var customFdNewIconId = "";
						
						var corpNewIconId = "";
						var corpFdNewIconId = "";
						
						for (var j=0; j<arrLeftMenuGroupCodeList[i].length; j++) {
							if (arrLeftMenuGroupCodeList[i][j] == jsonData[x]) {
								//alert(jsonData[x] + " => " + arrLeftMenuGroupNameList[i]);
								
								customNewIconId = "id_custom_menu_new_" + arrLeftMenuGroupNameList[i];
								customFdNewIconId = "id_custom_menu_fd_" + arrLeftMenuGroupNameList[i];

								corpNewIconId = "id_corp_menu_new_" + arrLeftMenuGroupNameList[i];
								corpFdNewIconId = "id_menu_fd_" + arrLeftMenuGroupNameList[i];
							}
						}
						
						// 사용자 On/Off
						if (customNewIconId != "") {
							var obj = j$("#"+customNewIconId);
							obj.attr("code", "new");

							var objFD = j$("#" + customFdNewIconId);
							if (objFD.hasClass("fd")) {
								obj.html("<em class=bu_new><span class=blind>New</span></em>");
							} else {
								obj.html("");
							}
						}
						
						// 회사지정 On/Off
						if (corpNewIconId != "") {
							var obj = j$("#"+corpNewIconId);
							obj.attr("code", "new");

							var objFD = j$("#" + corpFdNewIconId);
							if (objFD.hasClass("fd")) {
								obj.html("<em class=bu_new><span class=blind>New</span></em>");
							} else {
								obj.html("");
							}							
						}
						
					}
				});
			}

		},
		error: function(xhr, info) {

		}
	});
}



//사용자가 보고 있는 사이트의 설문조사 여부를 검사하여 New 아이콘을 보여준다.
function fnAjaxSurveyNew(strUrl, strEmpNo, surveyNodeId) {
	j$.ajax({
		type: "get",
		cache: false,
		url: strUrl,
		data: "empNo="+strEmpNo,
		dataType : "json",
		success: function(jsonData) {
			//alert(jsonData.responseResult);
			if (jsonData.isTarget == true) {
				j$("#id_menu_new_"+surveyNodeId).html("<em class=bu_new><span class=blind>New</span></em>");
			}
		},
		error: function(xhr, info) {
			
		}
	});
}


/*
// 사용자가 보고 있는 사이트의 설문조사 여부를 검사하여 New 아이콘을 보여준다.
// JSONP를 이용하여 Survey 시스템에 직접 호출한다.
function fnAjaxSurveyNew(strUrl, strEmpNo, surveyNodeId) {
	j$.ajax({
		type: "get",
		cache: false,
		url: strUrl,
		data: "empNo="+strEmpNo,
		dataType : "jsonp",
		jsonp : "callback",
		success: function(jsonData) {
			//alert(jsonData.responseResult);
			if (jsonData.isTarget == true) {
				j$("#id_menu_new_"+surveyNodeId).html("<em class=bu_new><span class=blind>New</span></em>");
			}
		},
		error: function(xhr, info) {
			
		}
	});
}
*/



// 글로벌 쿠키 관련 함수
function setGlobalCookie(name, value, expiredays, domain) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; expires=" + todayDate.toGMTString() + "; domain=" + domain + ";";
}




// 쿠키 관련 함수
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function delCookie(name) {
    var objExpireDate = new Date();
    objExpireDate.setDate(objExpireDate.getDate() - 1);
    document.cookie = name + "=; path=/; expires=" + objExpireDate.toGMTString();
    //alert(name);
}

function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1) endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0) break;
    }
    return "";
}

function delCookieForTextMatch(strText) {
    var arrTemp = document.cookie.split(";");
    for (var i=0; i<arrTemp.length; i++) {
    	var arrData = arrTemp[i].split("=");
    	if (arrData[0].indexOf(strText) != -1) {
    		//alert(arrData[0]);
    		delCookie(arrData[0].replace(/^\s+|\s+$/g,""));
    	}
    	
    }
}



// 메인메뉴 더보기 Toggle
function fnFoldingMoreToggle(strId) {	
	var t1 = j$('#id_menu_hide_' + strId);
	var t2 = j$('#id_btn_' + strId);

	var strFodingId = 'id_menu_hide_' + strId;
	if (t1.hasClass("hide")) {		
		setCookie(strFodingId, "show", 1);
	} else {
		setCookie(strFodingId, "hide", 1);
	}	
    t1.toggleClass('hide');
	t2.toggleClass('up');	
}
function fnFoldingMoreShow(strId) {
	j$('#id_menu_hide_' + strId).toggleClass('hide');
	j$('#id_btn_' + strId).toggleClass('up');
}



// 메인메뉴 회사지정 폴딩메뉴 Toggle
function fnFoldingOnOffToggle(strId) {
	var t = j$('#id_menu_fd_' + strId);
	
	var strFodingId = 'id_menu_fd_' + strId;
	if (t.hasClass("fd")) {		
		setCookie(strFodingId, "show", 1);
	} else {
		setCookie(strFodingId, "hide", 1);
	}	
    t.toggleClass('fd');
}
function fnFoldingOnOffShow(strId) {
	j$('#id_menu_fd_' + strId).toggleClass('fd');
}



//메인메뉴 사용자 폴딩메뉴 Toggle
function fnCustomFoldingOnOffToggle(strId) {
	var t = j$('#id_custom_menu_fd_' + strId);
	
	var strFodingId = 'id_custom_menu_fd_' + strId;
	if (t.hasClass("fd")) {		
		setCookie(strFodingId, "show", 1);
	} else {
		setCookie(strFodingId, "hide", 1);
	}	
	t.toggleClass('fd');
}
function fnCustomFoldingOnOffShow(strId) {
	j$('#id_custom_menu_fd_' + strId).toggleClass('fd');
}






/**
 *
 * �앹뾽
 *
 * @param url
 * @param winname
 * @param width
 * @param height
 * @param options
 * @param position
 * @returns
 */
function popupWindow(url, winname, width, height, options, position) {
	var posX = 0;
	var posY = 0;
	switch(position.toUpperCase()) {
	case "CENTER":
	    posX = Math.ceil((window.screen.width - width) / 2);
	    posY = Math.ceil((window.screen.height - height) / 2);
	    break;
	case "LEFTTOP":
	    posX = 0;
	    posY = 0;
	    break;
	case "LEFTMIDDLE":
	    posX = 0;
	    posY = Math.ceil((window.screen.height - height) / 2);
	    break;
	case "LEFTBOTTOM":
	    posX = 0;
	    posY = Math.ceil(window.screen.height - height);
	    break;
	case "RIGHTTOP":
	    posX = Math.ceil(window.screen.width - width);
	    posY = 0;
	    break;
	case "RIGHTMIDDLE":
	    posX = Math.ceil(window.screen.width - width);
	    posY = Math.ceil((window.screen.height - height) / 2);
	    break;
	case "RIGHTBOTTOM":
	    posX = Math.ceil(window.screen.width - width);
	    posY = Math.ceil(window.screen.height - height);
	    break;
	default:
	    posX = Math.ceil((window.screen.width - width) / 2);
	    posY = Math.ceil((window.screen.height - height) / 2);
	    break;
	}
	var popupWin=window.open(url, winname,'left='+ posX + ',top=' + posY + ',width=' + width +',height=' + height + ',' + options);

	if (window.focus) {
		popupWin.focus();
	}

	return popupWin;
}

function popupWindowVoid(url, winname, width, height, options, position) {
	var posX = 0;
	var posY = 0;
	switch(position.toUpperCase()) {
	case "CENTER":
	    posX = Math.ceil((window.screen.width - width) / 2);
	    posY = Math.ceil((window.screen.height - height) / 2);
	    break;
	case "LEFTTOP":
	    posX = 0;
	    posY = 0;
	    break;
	case "LEFTMIDDLE":
	    posX = 0;
	    posY = Math.ceil((window.screen.height - height) / 2);
	    break;
	case "LEFTBOTTOM":
	    posX = 0;
	    posY = Math.ceil(window.screen.height - height);
	    break;
	case "RIGHTTOP":
	    posX = Math.ceil(window.screen.width - width);
	    posY = 0;
	    break;
	case "RIGHTMIDDLE":
	    posX = Math.ceil(window.screen.width - width);
	    posY = Math.ceil((window.screen.height - height) / 2);
	    break;
	case "RIGHTBOTTOM":
	    posX = Math.ceil(window.screen.width - width);
	    posY = Math.ceil(window.screen.height - height);
	    break;
	default:
	    posX = Math.ceil((window.screen.width - width) / 2);
	    posY = Math.ceil((window.screen.height - height) / 2);
	    break;
	}
	var popupWin=window.open(url, winname,'left='+ posX + ',top=' + posY + ',width=' + width +',height=' + height + ',' + options);

	if (window.focus) {
		popupWin.focus();
	}
}

function formatDate(dateObj, splitter){
	if (!dateObj instanceof Date) {
		return dateObj;
	}
	if (!splitter) {
		splitter = ".";
	}

	var year = dateObj.getFullYear();
	var month = parseInt(dateObj.getMonth()) + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var date = parseInt(dateObj.getDate());
	if (date < 10) {
		date = "0" + date;
	}
	return year + splitter + month + splitter + date;
}

/**
 * pattern 에 해당하는 dateStr 을 Date 객체로 변환하여 반환한다.<br>
 * pattern 에서 사용할 수 있는 패턴은 아래에 있는 것만 가능하다.<br>
 * yyyy : 연도
 * MM : 월
 * dd : 일
 * HH : 시간(24시간제)
 * mm : 분
 * ss : 초
 * 
 * @param dateStr
 * @param pattern
 */
function parseDate(dateStr, pattern) {
	if (dateStr.length != pattern.length) {
		return null;
	}
	var now = new Date();
	var year = getDateItem(dateStr, pattern, "yyyy", now.getYear());
	var month = getDateItem(dateStr, pattern, "MM", now.getMonth() + 1);
	var day = getDateItem(dateStr, pattern, "dd", now.getDate());
	var hour = getDateItem(dateStr, pattern, "HH", "00");
	var min = getDateItem(dateStr, pattern, "mm", "00");
	var sec = getDateItem(dateStr, pattern, "ss", "00");
	now.setTime(Date.parse(year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec));
	return now;
}

function getDateItem(dateStr, pattern, itemPattern, defaultVal) {
	var idx = pattern.indexOf(itemPattern);
	return idx > -1 ? dateStr.substr(idx, itemPattern.length) : defaultVal;
}

function go2580(urlVal1, urlVal2){

	if(confirm(g_arrConnectUserMsg['common.2580.call'])){
		var telNo = "031-784-2580";
		j$.ajax({

			cache: false,
			url : urlVal1, //springProperty["main.2580Url1"],
			data: { pNumber : telNo , type : 'json' },
			type : 'get',
	        dataType: 'jsonp',
	        jsonp : 'callback',
	        success : function(response) {
	        	if (response.isIPPhone) {
	        		if (response.phoneStatus == 'ALERTING' || response.phoneStatus == 'ACTIVE') {
		        		alert(g_arrConnectUserMsg['common.2580.calling']);
		        	} else {
		        		callTo(telNo, urlVal2);
		        	}
	        	} else {
	        		alert(g_arrConnectUserMsg['common.2580.not.iptphone']);
	        	}
	        },
	        error: function(e) {
	        	alert(g_arrConnectUserMsg['common.2580.systen.error']);
	        }
	 	});

	} else{
		alert(g_arrConnectUserMsg['common.2580.cancel']);
	}

}

function goSecCall(urlVal1, urlVal2, gubun){

	var msg = "";
	if("3333" == gubun){
		msg = g_arrConnectUserMsg['common.sec3333.call'];
	} else{
		msg = g_arrConnectUserMsg['common.sec2248.call'];
	}	
	
	if(confirm(msg)){	
	
		var telNo = "031-8038-" + gubun;
		j$.ajax({

			cache: false,
			url : urlVal1, 
			data: { pNumber : telNo , type : 'json' },
			type : 'get',
	        dataType: 'jsonp',
	        jsonp : 'callback',
	        success : function(response) {
	        	if (response.isIPPhone) {
	        		if (response.phoneStatus == 'ALERTING' || response.phoneStatus == 'ACTIVE') {
		        		alert(g_arrConnectUserMsg['common.2580.calling']);
		        	} else {
		        		callTo(telNo, urlVal2);
		        	}
	        	} else {
	        		alert(g_arrConnectUserMsg['common.2580.not.iptphone']);
	        	}
	        },
	        error: function(e) {
	        	alert(g_arrConnectUserMsg['common.2580.systen.error']);
	        }
	 	});

	} else{
		alert(g_arrConnectUserMsg['common.2580.cancel']);
	}

}

function callTo(telNo, urlVal2){
	j$.ajax({
		url: urlVal2,
		data: {destination : telNo , type : 'json' },
        type: 'get',
        dataType: 'jsonp',
        jsonp : 'callback',
        success : function(response) {
        	if(response.isSuccess) {
        	}
        }
	});
}

function searchEntryMynextNoDisp(empno) {
	var mynextUrl = "http://portlet.nhncorp.com/searchOrg.nhn";
	var winOption = "resizable=1,status=0,toolbar=0,menubar=0,scrollbars=1,location=0";
	var width = 820;
	var height = 520;
	var winName = "UserSearch";
	var x = (screen.width - width) / 2;
	var y = (screen.height - height) / 2 - 30;
	var winOption = 'top=' + y + ',left=' + x + ',width=' + width + ',height='
			+ height + ',' + winOption;
	var winOpenFail = true;
	var winNo = 1;

	while (winOpenFail) {
		try {
			var newcenterwindow = window.open("", winName, winOption);
			winOpenFail = false;
		} catch (e) {
			winName = "UserSearch" + winNo;
			winNo++;
		}
	}

	var f = document.createElement("form");
	f.setAttribute("method", "post");
	f.setAttribute("action", mynextUrl);
	f.setAttribute("target", winName);

	var input1 = document.createElement("input");
	input1.setAttribute("type", "hidden");
	input1.setAttribute("name", "m");
	input1.setAttribute("value", "getOrgBox");

	var input2 = document.createElement("input");
	input2.setAttribute("type", "hidden");
	input2.setAttribute("name", "emp.empNo");
	input2.setAttribute("value", empno);

	f.appendChild(input1);
	f.appendChild(input2);
	document.body.appendChild(f);
	f.submit();
	newcenterwindow.focus();
}

/*
 * 레이어 화면 가운데 위치 시키는 함수
 *
 */
jQuery.fn.center = function () {
	this.css({
		'position': 'fixed',
		'left': '50%',
		'top': '50%'
		});
	this.css({
		'margin-left': -this.width() / 2 + 'px',
		'margin-top': -this.height() / 2 + 'px'
		});
	return this;
}

function openAprvPop(url) {
	window.open(url, "_blank", "top=100,left=100,width=860,height=600,scrollbars=yes,resizable=yes,status=no");
}

/*
 * JQuery Rolling
 * songsungkyun@naver.com
 * 2008/03/16
 */
(function($) {
	var timeoutId;
	var timeoutRef;
	var viewingItem;
	
	var rollingParam = {};

	$.fn.rolling = function(rollingDirection, rollingItemWidth, rollingItemHeight, viewingItemCount) {
		var rollingId = new Date().getTime();
		var id = this.attr("id");
		rollingParam[rollingId] = {
			id: id,
			rollingIsStarted: false,
			rollingItemCount:  0,
			rollingAnimationIndex: 0,
			rollingItemWidth: 0,
			rollingItemHeight: 0,
			viewingItemCount: 0,
			rollingTime: 0,
			viewingTime: 0,
			rollingAnimationFrame: 0,
			rollingDirection: null,
			rollingLeft: 0,
			rollingTop: 0,
			requestReverse: false,
			newRollingAnimationFrame: 0
		};

		var param = rollingParam[rollingId];
		param.rollingDirection = rollingDirection;
		param.rollingItemWidth = rollingItemWidth;
		param.rollingItemHeight = rollingItemHeight;

		if (viewingItemCount == undefined) {
			param.viewingItemCount = 1;
		} else {
			param.viewingItemCount = viewingItemCount;
		}

		if (param.rollingDirection == "left" ||
			param.rollingDirection == "right") {
			this.css("width", 560);
			this.css("height", param.rollingItemHeight);
		} else if (param.rollingDirection == "up" ||
			param.rollingDirection == "down") {
			this.css("width", param.rollingItemWidth);
			this.css("height", param.rollingItemHeight * param.viewingItemCount);
		}

		this.css("position", "relative");
		this.css("overflow", "hidden");
		this.attr("rollingId", rollingId);

		this.empty();

		rollingContentDiv = $("<div/>").appendTo(this);
		rollingContentDiv.attr("id", rollingId);
		rollingContentDiv.css("position", "absolute");
		rollingContentDiv.attr("align", "left");
		rollingContentDiv.css("left", "0");
		rollingContentDiv.css("top", "0");
		return this;
	};

	$.fn.addRollingItem = function(html) {
		var param = rollingParam[this.attr("rollingId")];
		var rollingContentDiv = $("#" + this.attr("rollingId"));
		param.rollingItemCount++;
		var rollingItem = null;

		if (param.rollingDirection == "up") {
			rollingItem = $("<div class='item'/>").appendTo(rollingContentDiv);
		} else if (param.rollingDirection == "right") {
			rollingItem = $("<div class='item'/>").prependTo(rollingContentDiv);
			rollingItem.css("float", "left");
			rollingContentDiv.css("width", param.rollingItemCount * param.rollingItemWidth);
			rollingContentDiv.css("left", -(param.rollingItemCount - param.viewingItemCount) * param.rollingItemWidth);
			param.rollingLeft =  -(param.rollingItemCount - param.viewingItemCount) * param.rollingItemWidth;
		} else if (param.rollingDirection == "down") {
			rollingItem = $("<div class='item'/>").prependTo(rollingContentDiv);
			param.rollingTop =  -(param.rollingItemCount - param.viewingItemCount) * param.rollingItemHeight;
			rollingContentDiv.css("top", -(param.rollingItemCount - param.viewingItemCount) * param.rollingItemHeight);
		} else if (param.rollingDirection == "left") {
			rollingItem = $("<div class='item'/>").appendTo(rollingContentDiv);
			rollingItem.css("float", "left");
			rollingContentDiv.css("width", param.rollingItemCount * param.rollingItemWidth);
		}
		rollingItem.css("overflow", "hidden");
		rollingItem.css("width", param.rollingItemWidth);
		rollingItem.css("height", param.rollingItemHeight);
		rollingItem.html(html);
		return this;
	};

	rollingAnimation = function(id) {
		var param = rollingParam[id];
		var rollingContentDiv = $("#" + id);
		if (rollingContentDiv.size() == 0) {
			return;
		}
		var delayTime = param.rollingTime;

		if (param.rollingIsStarted == false) {
			setTimeout("rollingAnimation('" + id + "')", delayTime);
			return;
		}

		if (param.rollingAnimationIndex == 0) {
			if (param.newRollingAnimationFrame != param.rollingAnimationFrame) {
				param.rollingAnimationFrame = param.newRollingAnimationFrame;
			}
		}

		var isReverse = false;
		if (param.requestReverse == true) {
			isReverse = true;
			param.requestReverse = false;
			param.rollingAnimationIndex = param.rollingAnimationFrame - param.rollingAnimationIndex;

			if (param.rollingDirection == "left") {
				param.rollingDirection = "right";
			} else if (param.rollingDirection == "right") {
				param.rollingDirection = "left";
			} else if (param.rollingDirection == "down") {
				param.rollingDirection = "up";
			} else if (param.rollingDirection == "up") {
				param.rollingDirection = "down";
			}
			$("#" + param.id).trigger("reverse");
		} else {
			if (param.rollingDirection == "up") {
				param.rollingTop -= param.rollingItemHeight/param.rollingAnimationFrame;
				if (-param.rollingTop > parseFloat(param.rollingItemHeight)* param.rollingItemCount) {
					param.rollingTop = - parseFloat(param.rollingItemHeight)* param.rollingItemCount;
				}
				rollingContentDiv.css("top", param.rollingTop);
			} else if (param.rollingDirection == "right") {
				param.rollingLeft +=  param.rollingItemWidth/param.rollingAnimationFrame;
				if (param.rollingLeft > parseFloat(param.rollingItemWidth)) {
					param.rollingLeft = parseFloat(param.rollingItemWidth);
				}
				rollingContentDiv.css("left", param.rollingLeft);
			} else if (param.rollingDirection == "down") {
				param.rollingTop += param.rollingItemHeight/param.rollingAnimationFrame;
				if (param.rollingTop > parseFloat(param.rollingItemHeight)) {
					param.rollingTop = parseFloat(param.rollingItemHeight);
				}
				rollingContentDiv.css("top", param.rollingTop);
			} else if (param.rollingDirection == "left") {
				param.rollingLeft -= param.rollingItemWidth/param.rollingAnimationFrame;
				if (-param.rollingLeft > parseFloat(param.rollingItemWidth) * param.rollingItemCount) {
					param.rollingLeft = -parseFloat(param.rollingItemWidth) * param.rollingItemCount;
				}
				rollingContentDiv.css("left", param.rollingLeft);
			}
			param.rollingAnimationIndex++;
		}

		if (param.rollingAnimationIndex != 0 && param.rollingAnimationIndex%param.rollingAnimationFrame == 0) {
			var currentRollingItemIndex = 0;
			if (param.rollingDirection == "up" || param.rollingDirection == "left") {
				currentRollingItemIndex = 0;
			} else if (param.rollingDirection == "right" || param.rollingDirection == "down") {
				currentRollingItemIndex = param.rollingItemCount - 1;
			}

			var currentRollingItem = $("div[class='item']:eq(" + currentRollingItemIndex + ")", rollingContentDiv);
			var rollingItem = null;
			if (param.rollingDirection == "up") {
				rollingItem = currentRollingItem.clone(true).appendTo(rollingContentDiv);
				param.rollingTop += parseFloat(param.rollingItemHeight);
				param.rollingTop = param.rollingItemHeight * Math.round(param.rollingTop/param.rollingItemHeight);
				rollingContentDiv.css("top", param.rollingTop);
			} else if (param.rollingDirection == "right") {
				rollingItem = currentRollingItem.clone(true).prependTo(rollingContentDiv);
				param.rollingLeft -= parseFloat(param.rollingItemWidth);
				param.rollingLeft = param.rollingItemWidth * Math.round(param.rollingLeft/param.rollingItemWidth);
				$("#debug").html("rollingLeft:" + param.rollingLeft);
				rollingItem.css("float", "left");
				rollingContentDiv.css("left", param.rollingLeft);
			} else if (param.rollingDirection == "down") {
				rollingItem = currentRollingItem.clone(true).prependTo(rollingContentDiv);
				param.rollingTop -= parseFloat(param.rollingItemHeight);
				param.rollingTop = param.rollingItemHeight * Math.round(param.rollingTop/param.rollingItemHeight);
				rollingContentDiv.css("top", param.rollingTop);
			} else if (param.rollingDirection == "left") {
				rollingItem = currentRollingItem.clone(true).appendTo(rollingContentDiv);
				param.rollingLeft += parseFloat(param.rollingItemWidth);
				param.rollingLeft = param.rollingItemWidth * Math.round(param.rollingLeft/param.rollingItemWidth);
				$("#debug").html("rollingLeft:" + param.rollingLeft);
				rollingItem.css("float", "left");
				rollingContentDiv.css("left", param.rollingLeft);
			}

			currentRollingItem.remove();

			if (!isReverse) {
				delayTime = param.viewingTime;
			} else {
				delayTime = 0;
			}

			var previousRollingItem = $("div[class='item']:eq(" + currentRollingItemIndex + ")", rollingContentDiv);
			$("#" + param.id).trigger("viewing", [previousRollingItem]);
			param.rollingAnimationIndex = 0;
		}

		if (param.rollingAnimationIndex != 0) {
			var currentRollingItem = $("div[class='item']:eq(0)", rollingContentDiv);
			$("#" + param.id).trigger("rolling", [currentRollingItem]);
		}
		
		// setTimeout ���۷����� ������ ��´�.
		viewingItem = currentRollingItem.html();
		timeoutId = id;
		timeoutRef = setTimeout("rollingAnimation('" + id + "')", delayTime);
	}

	$.fn.initRolling = function(rollingTime, viewingTime, rollingAnimationFrame) {
		var param = rollingParam[this.attr("rollingId")];
		var rollingContentDiv = $("#" + this.attr("rollingId"));
		var currentRollingItemIndex = 0;

		if (param.rollingDirection == "up" ||
			param.rollingDirection == "left") {
			currentRollingItemIndex = 0;
		} else if (param.rollingDirection == "right" ||
			param.rollingDirection == "down") {
			currentRollingItemIndex = param.rollingItemCount - 1;
		}
		var currentRollingItem = $("div[class='item']:eq(" + currentRollingItemIndex + ")", rollingContentDiv);
		this.trigger("viewing", [currentRollingItem]);
		param.rollingTime = rollingTime
		param.viewingTime = viewingTime;
		param.rollingAnimationFrame =  rollingAnimationFrame;
		param.newRollingAnimationFrame = rollingAnimationFrame;
	};

	$.fn.startRolling = function(rollingTime, viewingTime, rollingAnimationFrame) {
		this.initRolling(rollingTime, viewingTime, rollingAnimationFrame);
		var param = rollingParam[this.attr("rollingId")];
		if (param.rollingIsStarted == false) {
			param.rollingIsStarted = true;
			this.trigger("start");
			setTimeout("rollingAnimation('" + this.attr("rollingId") + "')", param.viewingTime);
		}
		return this;
	};

	$.fn.readyRolling = function(rollingTime, viewingTime, rollingAnimationFrame) {
		this.initRolling(rollingTime, viewingTime, rollingAnimationFrame);
		var param = rollingParam[this.attr("rollingId")];
		param.rollingIsStarted = false;
		setTimeout("rollingAnimation('" + this.attr("rollingId") + "')", param.viewingTime);
		return this;
	};

	$.fn.stopRolling = function() {
		this.trigger("stop");
		rollingParam[this.attr("rollingId")].rollingIsStarted = false;
		return this;
	};

	$.fn.resumeRolling = function() {
		if (rollingParam[this.attr('rollingId')].rollingIsStarted == false) {
			rollingParam[this.attr('rollingId')].rollingIsStarted = true;
			this.trigger("start");
		}
		return this;
	};

	$.fn.getRollingTime = function() {
		return rollingParam[this.attr('rollingId')].rollingTime;
	};

	$.fn.getViewingTime = function() {
		return rollingParam[this.attr('rollingId')].viewingTime;
	};

	$.fn.getRollingAnimationFrame = function() {
		return rollingParam[this.attr('rollingId')].rollingAnimationFrame;
	};

	$.fn.getRollingDirection = function() {
		return rollingParam[this.attr('rollingId')].rollingDirection;
	};

	$.fn.setRollingTime = function(rollingTime) {
		rollingParam[this.attr('rollingId')].rollingTime = rollingTime;
		return this;
	};

	$.fn.setViewingTime = function(viewingTime) {
		rollingParam[this.attr('rollingId')].viewingTime = viewingTime;
		return this;
	};

	$.fn.setRollingAnimationFrame = function(rollingAnimationFrame) {
		var oldStep = rollingParam[this.attr('rollingId')].rollingAnimationFrame;
		var oldIndex = rollingParam[this.attr('rollingId')].rollingAnimationIndex;
		var multiplier = rollingAnimationFrame / oldStep;
		rollingParam[this.attr('rollingId')].rollingAnimationFrame = rollingAnimationFrame;
		rollingParam[this.attr('rollingId')].newRollingAnimationFrame = rollingAnimationFrame;
		rollingParam[this.attr('rollingId')].rollingAnimationIndex = Math.round(multiplier * oldIndex);
		return this;
	};

	$.fn.setRollingAnimationFrameNext = function(rollingAnimationFrame) {
		rollingParam[this.attr('rollingId')].newRollingAnimationFrame = rollingAnimationFrame;
		return this;
	}

	$.fn.getRollingItems = function() {
		return $("div[class=item]", this);
	};

	$.fn.getViewingItemCount = function() {
		return rollingParam[this.attr('rollingId')].viewingItemCount;
	};

	$.fn.bindViewingEvent = function(rollingEvent) {
		return this.bind("viewing", rollingEvent);
	};

	$.fn.unbindViewingEvent = function() {
		return this.unbind("viewing");
	};

	$.fn.bindRollingEvent = function(rollingEvent) {
		return this.bind("rolling", rollingEvent);
	};

	$.fn.unbindRollingEvent = function() {
		return this.unbind("rolling");
	};

	$.fn.bindStartEvent = function(rollingEvent) {
		return this.bind("start", rollingEvent);
	};

	$.fn.unbindStartEvent = function() {
		return this.unbind("start");
	};

	$.fn.bindStopEvent = function(rollingEvent) {
		return this.bind("stop", rollingEvent);
	};

	$.fn.unbindStopEvent = function() {
		return this.unbind("stop");
	};

	$.fn.bindReverseEvent = function(rollingEvent) {
		return this.bind("reverse", rollingEvent);
	};

	$.fn.unbindReverseEvent = function() {
		return this.unbind("reverse");
	};

	$.fn.reverseRolling = function() {
		rollingParam[this.attr('rollingId')].requestReverse = true;
		return this;
	};
	
	$.fn.nextItem = function() {
		if (rollingParam[this.attr('rollingId')].rollingDirection == "down") {
			rollingParam[this.attr('rollingId')].requestReverse = true;
		}
		clearTimeout(timeoutRef);
		timeoutRef = setTimeout("rollingAnimation('" + timeoutId + "')", 0);
		return this;
	};
	$.fn.prevItem = function() {
		if (rollingParam[this.attr('rollingId')].rollingDirection == "up") {
			rollingParam[this.attr('rollingId')].requestReverse = true;
		}
		clearTimeout(timeoutRef);		
		timeoutRef = setTimeout("rollingAnimation('" + timeoutId + "')", 0);
		return this;
	};
	$.fn.getVeiwingItem = function() {
		return viewingItem;
	};
	
})(jQuery);



// 사용자가 보고있는 사이트의 팝업공지 정보를 가져온다.
function fnAjaxPopupArticle(strUrl, strPopupUrl) {
	j$.ajax({
		type: "get",
		cache: false,
		url: strUrl,
		data: "",
		success: function(jsonData) {
			
			j$.each(jsonData, function(i) {
				
				// IE에 Ajax Bug가 존재함.
				// 값의 undefined 여부를 체크함.
				if (typeof jsonData[i].articleid != "undefined") {

					if (getCookie("id_notice_popup_"+jsonData[i].articleid) == "check") {
						// "하루동안 열지 않음" 쿠키값이 있다면 Stop
					} else {
						// "하루동안 열지 않음" 쿠키값이 없다면 팝업을 오픈한다.
						var url = strPopupUrl + jsonData[i].articleid;
						var position = 'center';
						if (i==0) {
							position = 'leftmiddle';
						} else if (i==1) {
							position = 'rightmiddle';
						} else {
							position = 'center';
						}
						popupWindow(url, 'noticePopup'+i, "840", "600", 'toolbar=no,directories=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes', position);					
					}

				} else {
					return false;
				}				
			});

		},
		error: function(xhr, info) {

		}
	});	
}






// Tension 팝업
var m_intItemCount = 0;
var m_intPageTotal = 0;
var m_intPageNum = 0;


// Tension Rolling 속도
var m_intTensionRollingDelayTime = 2000;	// 3초
var m_intTensionRollingItemCount = 0;


// Tension 처리 함수 (상하 Rolling 방식)
function fnAjaxTensionData(strUrl) {
	j$.ajax({
		type: "get",
		cache: false,
		url: strUrl,
		data: "",
		success: function(jsonData) {
			
			m_intTensionRollingItemCount = jsonData.length;
			
			// 롤링 에니메이션 코드
			var rollingDiv = j$("#id_animation_itemArea");
			rollingDiv.rolling("up", 500, 18, 1);
			j$.each(jsonData, function(i) {
				rollingDiv.addRollingItem('<em class="ico_ad"><span>' + jsonData[i].serviceName + '</span></em><a href="#">' + jsonData[i].title + '</a><input type="hidden" value="' + (i+1) + '"/>');
			});			
			rollingDiv.startRolling(10, m_intTensionRollingDelayTime, 10);			
						
			 
			// 롤링 리스트 Layer 코드
			var blinkCount = 0;
			if (jsonData.length <= 10) {
				blinkCount = 10 - jsonData.length;
			} else if (jsonData.length > 10 && jsonData.length <= 20) {
				blinkCount = 20 - jsonData.length;
			} else {
				blinkCount = 30 - jsonData.length;
			}
			
			var strHtml = '<ul>';			
			j$.each(jsonData, function(i) {
				strHtml = strHtml + '<li><em class="ico_ad"><span>' + jsonData[i].serviceName + '</span></em><a id="id_lst_tension_' + (i+1) + '" href="'+jsonData[i].url+'" target="_blank">' + jsonData[i].title + '</a></li>';
			});	
			for (var i=0; i<blinkCount; i++) {
				strHtml = strHtml + '<li>&nbsp;</li>';
			}
			strHtml = strHtml + '</ul>';
			 
			j$("#id_lst_roll").html(strHtml);
			
			
			// 롤링 리스트 Layer 전역변수 초기화
			m_intItemCount = jsonData.length;
			m_intPageTotal = Math.round(m_intItemCount/10);
			m_intPageNum = 1;
			
		},
		error: function(xhr, info) {
	
		}
	});
}

j$('#id_btn_animation_prev').click(function(e) {
	e.preventDefault();
	j$("#id_animation_itemArea").prevItem();	
});

j$('#id_btn_animation_next').click(function(e) {
	e.preventDefault();
	j$("#id_animation_itemArea").nextItem();
});

function fnTensionLayerItemVisable() {
	var idx=1;
	j$("#id_lst_roll > ul").children().each(function() {
		if (m_intPageNum == 1) {
			if (idx <= 10) {
				j$(this).show();
			} else {
				j$(this).hide();
			}				
		} else if (m_intPageNum == 2) {
			if (idx > 10 && idx <= 20) {
				j$(this).show();
			} else {
				j$(this).hide();
			}
		} else {
			if (idx > 20) {
				j$(this).show();
			} else {
				j$(this).hide();
			}
		}
		idx++;
	});	
	
	j$('.roll_con > .btn_wrap > .num > em').html(m_intPageNum);
	j$('.roll_con > .btn_wrap > .num > span').html(m_intPageTotal);
}

j$('#id_btn_rolling_prev_page').click(function(e) {
	e.preventDefault();
	if (m_intPageNum > 1) {		
		m_intPageNum--;
		fnTensionLayerItemVisable();
	} else if (m_intPageNum == 1) {
		m_intPageNum = m_intPageTotal;
		fnTensionLayerItemVisable();
	}
});

j$('#id_btn_rolling_next_page').click(function(e) {
	e.preventDefault();
	if (m_intPageNum < m_intPageTotal) {
		m_intPageNum++;
		fnTensionLayerItemVisable();
	} else if (m_intPageNum == m_intPageTotal) {
		m_intPageNum = 1;
		fnTensionLayerItemVisable();
	}
});

// Tension 롤링부분 마우스 이벤트 (버튼을 제외한 실제 Text 부분의 MouseOver Event)
// 마우스 커서가 그냥 지나가는 경우에는 이벤트를 무시한다.
var _ref_tensionLayerOpen;
j$('#id_animation_itemArea').mouseover(function() {
	_ref_tensionLayerOpen = setTimeout("fnTensionLayerOpen()", 300);
}).mouseout(function() {
	clearTimeout(_ref_tensionLayerOpen);
	_ref_tensionLayerOpen = null;
});

function fnTensionLayerOpen() {
	try {
		// 롤링 Hide
		var obj = j$("#id_animation_itemArea");
		obj.stopRolling();
		obj.hide();
		
		// 롤링 버튼 Hide
		j$("#id_animation_btnArea").hide();
		
		// 팝업 Open
		j$("#id_roll_area").addClass('roll_on');

		// 영역을 Layer로 팝업처리하면서 선택된 목록을 강조한다.
		var nodeNum;
		var rollingNode = obj.getVeiwingItem();
		if (typeof obj.getVeiwingItem() == "undefined") {
			nodeNum = 1;
		} else {
			nodeNum = j$(rollingNode)[2].attributes["value"].value;
			if (nodeNum >= m_intTensionRollingItemCount) {
				nodeNum = 1;
			} else {
				nodeNum++;
			}		
		}
		var tags = j$("#id_lst_roll").find("ul>li>a");
		tags.each(function(){
			if (j$(this)[0].id == "id_lst_tension_" + nodeNum) {
				j$(this).css("font-weight","bolder");
			} else {
				j$(this).css("font-weight","");
			}
		});
		
		// 사용자가 선택한 페이지를 보여준다.
		if (nodeNum <= 10) {
			m_intPageNum = 1;
		} else if (nodeNum > 10 && nodeNum <= 20) {
			m_intPageNum = 2;
		} else {
			m_intPageNum = 3;
		}
		
		fnTensionLayerItemVisable();

	} catch(e) {

	} finally {
		obj = null;
		nodeNum = null;
		rollingNode = null;
		tags = null;
		idx = null;
	}	
}


// Tension 팝업부분 마우스 이벤트
j$('.roll_con').mouseleave(function() {
	if (j$("#id_roll_area").hasClass('roll_on')) {
		
		// 롤링 Show
		var obj = j$("#id_animation_itemArea");
		obj.resumeRolling();
		obj.show();
		
		// 롤링 버튼 Show
		j$("#id_animation_btnArea").show();
		
		// 팝업 Close
		j$('#id_roll_area').removeClass('roll_on');		
	}
});



var m_myDeskType = '';
var m_myDeskBoardId = '';

var m_customFormBaseURL;
var m_customFormCurrentSite;

function fnSetCustomFormBaseURL(strBaseUrl) {
	m_customFormBaseURL = strBaseUrl;
}

function fnSetCustomFormCurrentSite(siteAlias) {
	m_customFormCurrentSite = siteAlias;
}





//나의 myDesk 리셋
j$('#id_myDeskReset').click(function(e) {
	e.preventDefault();
	
	if (!confirm(g_arrConnectUserMsg['js.mySettings.reset.qustion'])) {
		return;
	}
	
	j$.ajax({
		type: 'get',
	 	dataType : 'json',
	 	cache : false,
        url: m_customFormBaseURL + m_customFormCurrentSite + '/pagelet/resetMyDeskData',
        success: function(data) {
        	location.reload();
        },
        error: function(xhr, info) {
        	alert('Fail MyDesk Data.');
        }
    });	
});



//나의 myDesk 저장
j$('#id_myDeskSave').click(function(e) {
	e.preventDefault();
	
	if (m_myDeskType == undefined || m_myDeskType == '') {
		alert(g_arrConnectUserMsg['js.mySettings.alert1']);
		return;
	}
	
	var param = '';
	if (m_myDeskType == 'MAIL_REVIEW') {
		param = m_myDeskType;
	} else {
		if (m_myDeskBoardId == undefined || m_myDeskBoardId == '') {
			alert(g_arrConnectUserMsg['js.mySettings.alert2']);
			return;
		}
		param = m_myDeskType + '_' + m_myDeskBoardId;
	}
	
	j$.ajax({
		type: 'get',
	 	dataType : 'json',
	 	cache : false,
        url: m_customFormBaseURL + m_customFormCurrentSite + '/pagelet/saveMyDeskData/' + param,
        success: function(data) {
        	location.reload();
        },
        error: function(xhr, info) {
        	alert('Fail MyDesk Data.');
        }
    });	
});


// MyDesk 설정창 열기
j$('#id_myDesk_setting').click(function(e) {
	e.preventDefault();
	
	var objLayer = j$('#id_myDeskSettingLayer');
	
	// Layer 오픈시 무시 
	if(objLayer.css('display') != 'none' ) {
		return;
	}
	
	// Layer 높이를 계산한다. 
	var windowPosition
	if (e.pageY < 400) {
		windowPosition = 400;
	} else {
		windowPosition = e.pageY - 15;
	}
	objLayer.css('top', windowPosition+'px');		
	
	j$('#id_myDeskBoardList').empty();
	j$.ajax({
		type: 'get',
	 	dataType : 'html',
	 	cache : false,
        url: m_customFormBaseURL + m_customFormCurrentSite + '/mainTemplate/siteBoardListForm',
        success: function(html) {
        	j$('#id_myDeskBoardList').hide();
        	j$('#id_myDeskBoardList').html(html);
        	fnLoadMyDesk();
        },
        error: function(xhr, info) {
        	j$('#id_myDeskBoardList').show();
        	j$('#id_myDeskBoardList').html("Loading Fail.");
		}
    });			
	j$('#id_myDeskSettingLayer').show();
});

// MyDesk 설정창 닫기
j$('#id_myDeskClose').click(function(e) {
	j$('#id_myDeskSettingLayer').hide();
});

// 메일 선택
j$('#id_myDeskType_mail').click(function(e) {
	fnEnableMyDeskMailMode();
});

// 게시판 선택
j$('#id_myDeskType_board').click(function(e) {
	fnEnableMyDeskBoardMode();
});


// 나의 myDesk 설정 조회
function fnLoadMyDesk() {
	j$.ajax({
		type: 'get',
	 	dataType : 'json',
	 	cache : false,
	    url: m_customFormBaseURL + m_customFormCurrentSite + '/pagelet/myDeskData',
	    success: function(data) {
	    	if (data.empNo != null) {
	    		if (data.siteEnvValue == '') {
	     			j$('#id_myDeskType_mail').removeClass('on2');
	     			j$('#id_myDeskType_board').removeClass('on2');
	    			
	    		} else if (data.siteEnvValue == 'MAIL_REVIEW') {
	     			fnEnableMyDeskMailMode();
	     			
	     		} else {
	     			fnEnableMyDeskBoardMode();
	     			
	     			// 게시판 Id
	     			var temp = data.siteEnvValue.split("_");

	     			// 게시판 Idx
	     			var boardIdx = j$('#id_hid_myDesk_boardItem_id_' + temp[1]).val();
	     			
	     			fnSelectMyDeskBoard(boardIdx, temp[1]);
	     		}
	     	} else {
	 			j$('#id_myDeskType_mail').removeClass('on2');
	 			j$('#id_myDeskType_board').removeClass('on2');
	     	}
	    },
	    error: function(xhr, info) {}
	});		
}

// 메일모드 활성화
function fnEnableMyDeskMailMode() {
	j$('#id_myDeskType_mail').addClass('on2');
	j$('#id_myDeskType_board').removeClass('on2');
	j$('#id_myDeskBoardList').hide();
	
	m_myDeskType = "MAIL_REVIEW";
}

// 게시판모드 활성화
function fnEnableMyDeskBoardMode() {
	j$('#id_myDeskType_mail').removeClass('on2');
	j$('#id_myDeskType_board').addClass('on2');  
	j$('#id_myDeskBoardList').show();
	
	m_myDeskType = "BOARD";
}

// 게시판 선택
function fnSelectMyDeskBoard(idx, boardId) {
	j$('.myDesk_boardItem').removeClass('on');
	j$('#id_myDesk_boardChk_' + idx).addClass('on');
	
	m_myDeskBoardId = boardId;
}


