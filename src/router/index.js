import Vue from 'vue'
import Router from 'vue-router'
import Dialog from '@/pages/Dialog';
import Docs from '@/pages/Docs';

import Font from '@/pages/Font';
import MoreComponent from '@/pages/MoreComponent';
import NormalComponent from '@/pages/NormalComponent';
import Pages from '@/pages/Pages';
import Upload from '@/pages/Upload';

Vue.use(Router)

export default new Router({
  	routes:[
	    {
	      	path: '/Dialog',
	      	name: 'Dialog',
	      	component: Dialog,
	      	meta: {
		        keepAlive: false
		    },
	    },
	    {
	      	path: '/Docs',
	      	name: 'Docs',
	      	component: Docs,
	      	meta: {
		        keepAlive: false
		    }
	    },
	    {
	      	path: '/Font',
	      	name: 'Font',
	      	component: Font,
	      	meta: {
		        keepAlive: false
		    }
	    },
	    {
	      	path: '/MoreComponent',
	      	name: 'MoreComponent',
	      	component: MoreComponent,
	      	meta: {
		        keepAlive: false
		    }
	    },
	    {
	      	path: '/NormalComponent',
	      	name: 'NormalComponent',
	      	component: NormalComponent,
	      	meta: {
		        keepAlive: false
		    }
	    },
	    {
	      	path: '/Pages',
	      	name: 'Pages',
	      	component: Pages,
	      	meta: {
		        keepAlive: false
		    }
	    },
	    {
	      	path: '/Upload',
	      	name: 'Upload',
	      	component: Upload,
	      	meta: {
		        keepAlive: false
		    }
	    }
	],
})
