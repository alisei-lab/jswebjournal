import * as sapper from '@sapper/app';
import '../node_modules/highlight.js/styles/monokai.css'

sapper.start({
	target: document.querySelector('#sapper')
});