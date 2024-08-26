/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	webpack: config => {
		// Workaround for Tailwind dark mode resolution with CSS Modules
		const rules = config.module.rules.find(r => !!r.oneOf)

		rules.oneOf.forEach(loaders => {
			if (Array.isArray(loaders.use)) {
				loaders.use.forEach(loader => {
					const isCssLoader =
						typeof loader?.loader === 'string' &&
						/(?<!post)css-loader/.test(loader?.loader)
					const hasGetLocalIdent = !!loader?.options?.modules?.getLocalIdent

					if (isCssLoader && hasGetLocalIdent) {
						const { getLocalIdent } = loader.options.modules
						if (getLocalIdent) {
							loader.options.modules.getLocalIdent = (...args) => {
								if (args.includes('dark')) return 'dark'
								return getLocalIdent(...args)
							}
						}
					}
				})
			}
		})
		return config
	}
}

export default nextConfig
