// Every place the site links out to, in one file.
//
// The docs domain is not chosen yet. Change DOCS_URL here once it is (no trailing slash);
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
