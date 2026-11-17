// Every place the site links out to, in one file.
//
// DOCS_URL is the docs site's domain (no trailing slash; same as the docs repo's CNAME);
// docs paths are written with a trailing slash, as the docs site serves them.
export const DOCS_URL = 'https://docs.jamhooks.com';

export const docs = (path = '/') => `${DOCS_URL}${path}`;

export const links = {
	quickStart: docs('/getting-started/quick-start/'),
	connectJambonz: docs('/getting-started/connect-jambonz/'),
	flowsReference: docs('/reference/flows/'),
	deployment: docs('/reference/deployment/'),
	privacy: docs('/reference/privacy/'),
	docsHome: docs('/'),
	jambonz: 'https://jambonz.org',
};
