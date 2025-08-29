<script>
	import { page } from '$app/stores';

	let currentPath = $state('');
	let isMobileMenuOpen = $state(false);

	const navItems = [
		{ href: '/', label: 'Home', symbol: '>' },
		{ href: '/blog', label: 'Blog', symbol: '>' },
		{ href: '/projects', label: 'Projects', symbol: '>' },
		{ href: '/gallery', label: 'Gallery', symbol: '>' }
	];

	$effect(() => {
		currentPath = $page.url.pathname;
		isMobileMenuOpen = false;
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	/**
	 * @param {MouseEvent} event
	 */
	function handleOutsideClick(event) {
		if (event.target instanceof Element && !event.target.closest('.header')) {
			isMobileMenuOpen = false;
		}
	}

	/**
	 * @param {{ key: string; }} event
	 */
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			isMobileMenuOpen = false;
		}
	}
</script>

<svelte:window onclick={(e) => handleOutsideClick(e)} on:keydown={handleKeydown} />

<header class="header">
	<div class="header-content">
		<a href="/" class="logo" onclick={() => closeMobileMenu()}> Florian Reitz </a>

		<button
			class="mobile-menu-toggle"
			onclick={() => toggleMobileMenu()}
			aria-expanded={isMobileMenuOpen}
			aria-controls="main-navigation"
			aria-label="Toggle navigation menu"
		>
			<span class="hamburger-line" class:open={isMobileMenuOpen}></span>
			<span class="hamburger-line" class:open={isMobileMenuOpen}></span>
			<span class="hamburger-line" class:open={isMobileMenuOpen}></span>
		</button>

		<nav
			id="main-navigation"
			class="navigation"
			class:open={isMobileMenuOpen}
			aria-hidden={!isMobileMenuOpen ? 'true' : 'false'}
		>
			<ul class="nav-list">
				{#each navItems as item (item.href)}
					<li class="nav-item">
						<a
							href={item.href}
							class="nav-link"
							class:active={currentPath === item.href}
							onclick={() => toggleMobileMenu()}
						>
							<span class="nav-symbol">{item.symbol}</span>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.header {
		background-color: var(--primary-color);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.logo {
		color: var(--primary-text-color);
		font-size: clamp(1.5rem, 4vw, 2rem);
		text-decoration: none;
		padding: 1rem 0;
		transition: color 0.2s ease;
	}

	.logo:hover {
		color: var(--headline-text-color);
	}

	.mobile-menu-toggle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		gap: 0.25rem;
	}

	.hamburger-line {
		width: 100%;
		height: 2px;
		background-color: var(--primary-text-color);
		transition: all 0.3s ease;
		transform-origin: center;
	}

	.hamburger-line.open:nth-child(1) {
		transform: rotate(45deg) translate(0.25rem, 0.25rem);
	}

	.hamburger-line.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger-line.open:nth-child(3) {
		transform: rotate(-45deg) translate(0.25rem, -0.25rem);
	}

	.navigation {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: var(--primary-color);
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.navigation.open {
		max-height: 20rem;
	}

	.nav-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-item {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.nav-item:last-child {
		border-bottom: none;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--primary-text-color);
		text-decoration: none;
		padding: 1rem 1.5rem;
		font-size: 1.1rem;
		transition: all 0.2s ease;
		position: relative;
	}

	.nav-link:hover {
		color: var(--headline-text-color);
		background-color: rgba(255, 255, 255, 0.05);
	}

	.nav-link.active {
		color: var(--headline-text-color);
		background-color: rgba(255, 255, 255, 0.1);
	}

	.nav-link.active::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background-color: var(--headline-text-color);
	}

	.nav-symbol {
		font-family: monospace;
		font-weight: bold;
	}

	/* Desktop styles */
	@media (min-width: 768px) {
		.header {
			background: transparent;
			box-shadow: none;
		}

		.mobile-menu-toggle {
			display: none;
		}

		.navigation {
			position: static;
			max-height: none;
			overflow: visible;
			background: transparent;
			box-shadow: none;
		}

		.nav-list {
			display: flex;
			gap: 0.5rem;
		}

		.nav-item {
			border-bottom: none;
		}

		.nav-link {
			padding: 1rem 1.5rem;
			border-radius: 0.25rem;
			background: transparent;
		}

		.nav-link:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}

		.nav-link.active {
			background-color: transparent;
		}

		.nav-link.active::after {
			display: none;
		}
	}

	.logo:focus,
	.mobile-menu-toggle:focus,
	.nav-link:focus {
		outline: 2px solid var(--headline-text-color);
		outline-offset: 2px;
	}

	* {
		transition:
			color 0.2s ease,
			background-color 0.2s ease;
	}

	@media (max-width: 480px) {
		.nav-link {
			padding: 0.875rem 1rem;
			font-size: 1rem;
		}

		.header-content {
			padding: 0 0.75rem;
		}
	}
</style>
