if ( window.location.href.indexOf( '.m.' ) === -1
	// don't redirect wikipedia landing page
	&& window.location.href.indexOf( 'www.wiki' ) === -1 ) {
	var newUrl = window.location.href.replace( /([^\.]).wiki/, '$1.m.wiki' );
	window.location.href = newUrl;
}
