if ( window.location.href.indexOf( '.m.' ) === -1 ) {
	var newUrl = window.location.href.replace( /([^\.]).wiki/, '$1.m.wiki' );
	window.location.href = newUrl;
}
