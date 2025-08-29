<script>
	import { page } from '$app/stores';

	/** @type {string} */
	let path = $state('');

	/**
	 * Updates the current path
	 * @param {string} currentPath - The current URL pathname
	 */
	function getPath(currentPath) {
		path = currentPath;
	}

	$effect(() => {
		getPath($page.url.pathname);
	});
</script>

<header class="header">
	<a href="/" class="logo"> Florian Reitz </a>
	<input id="menu-btn" class="menu-btn" type="checkbox" />
	<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
	<ul class="pure-menu-list menu">
		<li class="pure-menu-item">
			<a href="/" class={path === '/' ? 'pure-menu-link active' : 'pure-menu-link'}> &#62;Home </a>
		</li>
		<li class="pure-menu-item">
			<a href="/blog" class={path === '/blog' ? 'pure-menu-link active' : 'pure-menu-link'}>
				&#62;Blog
			</a>
		</li>
		<li class="pure-menu-item">
			<a href="/projects" class={path === '/projects' ? 'pure-menu-link active' : 'pure-menu-link'}>
				&#62;Projects
			</a>
		</li>
		<li class="pure-menu-item">
			<a href="/gallery" class={path === '/gallery' ? 'pure-menu-link active' : 'pure-menu-link'}>
				&#62;Gallery
			</a>
		</li>
	</ul>
</header>

<style>
	a {
		color: var(--primary-text-color);
		font-size: 1.2em;
	}

	a:active {
		display: none;
		background-color: transparent;
	}

	a:focus {
		background-color: transparent;
	}

	.active {
		color: var(--headline-text-color);
	}

	/* header */

	.header {
		background-color: var(--primary-color);
		position: absolute;
		width: 100%;
		z-index: 3;
	}

	.header ul {
		margin: 0;
		padding: 0;
		list-style: none;
		overflow: hidden;
	}

	.header li a {
		display: block;
		padding: 20px 20px;
		text-decoration: none;
	}

	.header .logo {
		display: block;
		float: left;
		font-size: 2em;
		padding: 10px 20px;
		text-decoration: none;
	}
	/* menu */

	.header .menu {
		clear: both;
		max-height: 0;
		transition: max-height 0.2s ease-out;
	}

	/* menu icon */

	.header .menu-icon {
		cursor: pointer;
		float: right;
		padding: 28px 20px;
		position: relative;
		user-select: none;
	}

	.header .menu-icon .navicon {
		background: var(--primary-text-color);
		display: block;
		height: 2px;
		position: relative;
		transition: background 0.2s ease-out;
		width: 18px;
	}

	.header .menu-icon .navicon:before,
	.header .menu-icon .navicon:after {
		background: var(--primary-text-color);
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		transition: all 0.2s ease-out;
		width: 100%;
	}

	.header .menu-icon .navicon:before {
		top: 5px;
	}

	.header .menu-icon .navicon:after {
		top: -5px;
	}

	/* menu btn */

	.header .menu-btn {
		display: none;
	}

	.header .menu-btn:checked ~ .menu {
		max-height: 240px;
	}

	.header .menu-btn:checked ~ .menu-icon .navicon {
		background: transparent;
	}

	.header .menu-btn:checked ~ .menu-icon .navicon:before {
		transform: rotate(-45deg);
	}

	.header .menu-btn:checked ~ .menu-icon .navicon:after {
		transform: rotate(45deg);
	}

	.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
	.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
		top: 0;
	}

	@media (min-width: 64em) {
		.header {
			background: none;
		}

		a {
			margin-left: 0.2vh;
		}

		a:hover {
			color: var(--headline-text-color);
			background-color: transparent;
			display: none;
		}

		.header li {
			float: left;
		}

		.header li a {
			padding: 20px 30px;
		}

		.header .menu {
			clear: none;
			float: right;
			max-height: none;
		}

		.header .menu-icon {
			display: none;
		}
	}
</style>
