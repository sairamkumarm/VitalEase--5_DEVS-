export function load({ url }) {
	return {
		url: url.pathname
	};
}
export const prerender = true;