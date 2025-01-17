import { Adapter } from '@sveltejs/kit';
import './ambient.js';

export default function plugin(options: {
   config?: string
	/**
	 * Customize the file that exports DurableObject classes definitions
	 * @default "./src/lib/durableObjects.js"
	 */
	durableObjectExports?: string
}): Adapter;
