$(function() {

	chrome.windows.getCurrent(function(win) {
		chrome.tabs.getAllInWindow(win.id, function(tabs) {
			$.each(tabs, function(index, tab) {
				if (tab && tab.active && tab.url.indexOf('abril') > 0) {
					$('li#title').html(tab.title);
				}
			});
		});
	});

    $( "#tabs" ).tabs({
		beforeActivate: 
			function( event, ui ) {
				idTab = ui.newTab.attr('id');
				switch (idTab){
					case 'tabInstancias':
						tabInstanciasActivate();
						break;
					case 'tabFavoritos':
						break;
				}
			}
	});

    // fix the classes
    $( ".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *" )
      .removeClass( "ui-corner-all ui-corner-top" )
      .addClass( "ui-corner-bottom" );

    // move the nav to the bottom
    $( ".tabs-bottom .ui-tabs-nav" ).appendTo( ".tabs-bottom" );

});