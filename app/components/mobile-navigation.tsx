'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import type { NavigationItem } from '../content';

type MobileNavigationProps = {
	items: readonly NavigationItem[];
	labels: {
		open: string;
		close: string;
		landmark: string;
		cta: string;
	};
};

const subscribeToHydration = () => () => {};

function useHasHydrated() {
	return useSyncExternalStore(
		subscribeToHydration,
		() => true,
		() => false,
	);
}

export function MobileNavigation({ items, labels }: MobileNavigationProps) {
	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const hasHydrated = useHasHydrated();

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
				buttonRef.current?.focus();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen]);

	useEffect(() => {
		// toggle a class on the body to prevent background scrolling
		const cls = 'has-mobile-menu-open';
		if (isOpen) document.body.classList.add(cls);
		else document.body.classList.remove(cls);

		return () => document.body.classList.remove(cls);
	}, [isOpen]);

	return (
		<div className='mobile-navigation'>
			<button
				ref={buttonRef}
				className={`menu-toggle${isOpen ? ' is-open' : ''}`}
				type='button'
				aria-expanded={isOpen}
				aria-controls='mobile-menu'
				aria-label={isOpen ? labels.close : labels.open}
				onClick={() => setIsOpen((value) => !value)}>
				<span />
				<span />
			</button>

			<div
				id='mobile-menu'
				className={`mobile-menu-shell${isOpen ? ' is-open' : ''}`}
				aria-hidden={!isOpen}>
				<div className='mobile-menu-clip'>
					<nav
						className='mobile-menu'
						aria-label={labels.landmark}>
						{items.map((item, index) => (
							<a
								key={item.href}
								href={item.href}
								tabIndex={isOpen ? 0 : -1}
								onClick={() => setIsOpen(false)}>
								<span>{String(index + 1).padStart(2, '0')}</span>
								{item.label}
							</a>
						))}
						<a
							className='mobile-menu-cta'
							href='#services'
							tabIndex={isOpen ? 0 : -1}
							onClick={() => setIsOpen(false)}>
							{labels.cta}
						</a>
					</nav>
				</div>
			</div>
			{hasHydrated &&
				createPortal(
					<div
						className={`mobile-menu-backdrop${isOpen ? ' is-open' : ''}`}
						aria-hidden='true'
						onClick={() => setIsOpen(false)}></div>,
					document.body,
				)}
		</div>
	);
}
