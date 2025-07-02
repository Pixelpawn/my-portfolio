
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'my-portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 654, hash: 'c013a6f82fa2918d52e7b279da5ff01f2095a01e3f635fc18a5abf85e0b422a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: '8b1058ce0f2170003ce4116ddce2ca979130e9086230be3a4312182b4ede2a14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FS4H3UIM.css': {size: 84, hash: 'GMycTzp6HtY', text: () => import('./assets-chunks/styles-FS4H3UIM_css.mjs').then(m => m.default)}
  },
};
