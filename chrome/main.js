if ( window.location.href.indexOf( '.m.' ) === -1
	// don't redirect wikipedia landing page
	&& window.location.href.indexOf( 'www.wikipedia' ) === -1 ) {
	var newUrl = window.location.href.replace( /([^\.]).wikipedia/, '$1.m.wikipedia' );
	// redirect mediawiki.org
	newUrl = newUrl.replace( /www.mediawiki.org/, 'm.mediawiki.org' );
	// redirect wikimedia.org
	newUrl = newUrl.replace( /([^\.]).wikimedia.org/, '$1.m.wikimedia.org' );
	window.location.href = newUrl;
}
