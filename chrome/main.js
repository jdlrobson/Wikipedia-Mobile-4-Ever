if ( window.location.href.indexOf( '.m.' ) === -1
	// don't redirect wikipedia landing page
	&& window.location.href.indexOf( 'www.wiki' ) === -1 ) {
	var newUrl = window.location.href.replace( /([^\.]).wiki/, '$1.m.wiki' );
	// redirect mediawiki.org
	newUrl = window.location.href.replace( /(www).mediawiki.org/, 'm.mediawiki.org' );
	// redirect wikimedia.org
	newUrl = window.location.href.replace( /([^\.]).wikimedia.org/, '$1.m.wikimedia.org' );
	window.location.href = newUrl;
}
