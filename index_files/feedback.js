// JavaScript Document
/*
----------------------------------------------------------------------------------------------------
--- feedbackPage()
----------------------------------------------------------------------------------------------------
--- Written 12/3/2009 
--- Alex Burr
----------------------------------------------------------------------------------------------------
*/

function feedbackPage(thePage) {
	var URL = "/contact/feedback.cfm?referer=" + thePage.location;
	window.location = URL; }