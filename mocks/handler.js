import { rest } from 'msw'

export const handlers = [
	rest.get('/agreements', (req, res, ctx) => {
		return res(
			ctx.status(200).json([
				{
					id: 'string',
					title: 'string',
					content: 'string',
					target_type: 'customer',
					is_required: true,
					created_at: '2023-05-26T05:15:01.858Z',
					updated_at: '2023-05-26T05:15:01.858Z',
				},
			])
		)
	}),

	rest.post('/auth/sign-in', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				access_token: 'string',
				access_token_expired_at: '2023-05-26T05:15:39.313Z',
				refresh_token: 'string',
				refresh_token_expired_at: '2023-05-26T05:15:39.313Z',
			})
		)
	}),

	rest.get('/auth/sign-in/:oauth', (req, res, ctx) => {
		return res(ctx.status(302).json(req.params.oauth))
	}),

	rest.post('/auth/sign-up', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				account_token: 'string',
			})
		)
	}),

	rest.get('/auth/profile', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				name: 'string',
				email: 'user@example.com',
				phone: 'string',
				profile_image_url: 'string',
				birth: '2023-05-26',
				gender: 'female',
				address: {
					first: 'string',
					second: 'string',
				},
			})
		)
	}),

	rest.post('/auth/user', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				access_token: 'string',
				access_token_expired_at: '2023-05-26T05:19:15.116Z',
				refresh_token: 'string',
				refresh_token_expired_at: '2023-05-26T05:19:15.116Z',
			})
		)
	}),

	rest.post('/auth/token/refresh', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				access_token: 'string',
				access_token_expired_at: '2023-05-26T05:20:11.611Z',
			})
		)
	}),

	rest.get('/users/hs-providers', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				data: [
					{
						type: 'home service provider',
						id: 'string',
						profile_image_url: 'string',
						address: {
							first: 'string',
							second: 'string',
						},
						name: 'string',
						expertise: {
							super_category_id: 'string',
							super_category_name: 'string',
							sub_expertises: [
								{
									sub_category_id: 'string',
									sub_category_name: 'string',
								},
							],
						},
						review_stats: {
							review_cnt: 0,
							rating_avg: 0,
						},
						introduction: {
							title: 'string',
							content: 'string',
						},
					},
				],
				page: 1,
			})
		)
	}),

	rest.get('/users/hs-providers/me', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				phone: 'string',
				profile_image_url: 'string',
				review_stats: {
					review_cnt: 0,
					rating_avg: 0,
				},
				introduction: {
					title: 'string',
					content: 'string',
				},
				expertise: {
					super_category_id: 'string',
					super_category_name: 'string',
					sub_expertises: [
						{
							sub_category_id: 'string',
							sub_category_name: 'string',
						},
					],
				},
				example_images: [
					{
						id: 'string',
						url: 'string',
					},
				],
				address: {
					first: 'string',
					second: 'string',
				},
				business_registration_num: 'string',
				type: 'home service provider',
				id: 'string',
				name: 'string',
				email: 'user@example.com',
				created_at: '2023-05-26T05:22:00.031Z',
				updated_at: '2023-05-26T05:22:00.031Z',
				is_verified: true,
				business_certification_images: [
					{
						id: 'string',
						url: 'string',
					},
				],
				acceptant_agreements: [
					{
						id: 'string',
						content: 'string',
						title: 'string',
						target_type: 'customer',
						is_required: true,
					},
				],
			})
		)
	}),

	rest.get('/users/hs-providers/:provider_id', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				phone: 'string',
				profile_image_url: 'string',
				review_stats: {
					review_cnt: 0,
					rating_avg: 0,
				},
				introduction: {
					title: 'string',
					content: 'string',
				},
				expertise: {
					super_category_id: 'string',
					super_category_name: 'string',
					sub_expertises: [
						{
							sub_category_id: 'string',
							sub_category_name: 'string',
						},
					],
				},
				example_images: [
					{
						id: 'string',
						url: 'string',
					},
				],
				address: {
					first: 'string',
					second: 'string',
				},
				business_registration_num: 'string',
				type: 'home service provider',
				id: 'string',
				name: 'string',
				email: 'user@example.com',
				created_at: '2023-05-26T05:23:04.760Z',
				updated_at: '2023-05-26T05:23:04.760Z',
			})
		)
	}),

	rest.get('/users/customer/me', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				phone: 'string',
				email: 'user@example.com',
				type: 'customer',
				id: 'string',
				created_at: '2023-05-26T05:29:18.742Z',
				updated_at: '2023-05-26T05:29:18.742Z',
				profile_image_url: 'string',
				address: {
					first: 'string',
					second: 'string',
				},
				birth: '2023-05-26',
				gender: 'female',
				name: 'string',
				acceptant_agreements: [
					{
						id: 'string',
						content: 'string',
						title: 'string',
						target_type: 'customer',
						is_required: true,
					},
				],
			})
		)
	}),

	rest.get('/users/re-agents', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				data: [
					{
						type: 'real estate agent',
						id: 'string',
						profile_image_url: 'string',
						name: 'string',
						expertise: {
							super_category_id: 'string',
							super_category_name: 'string',
							sub_expertises: [
								{
									sub_category_id: 'string',
									sub_category_name: 'string',
								},
							],
						},
						review_stats: {
							review_cnt: 0,
							rating_avg: 0,
						},
						introduction: {
							title: 'string',
							content: 'string',
						},
						is_licensed: true,
					},
				],
				page: 1,
			})
		)
	}),

	rest.get('/users/re-agents/me', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				phone: 'string',
				profile_image_url: 'string',
				review_stats: {
					review_cnt: 0,
					rating_avg: 0,
				},
				introduction: {
					title: 'string',
					content: 'string',
				},
				expertise: {
					super_category_id: 'string',
					super_category_name: 'string',
					sub_expertises: [
						{
							sub_category_id: 'string',
							sub_category_name: 'string',
						},
					],
				},
				is_licensed: true,
				real_estate: {
					num: 'string',
					name: 'string',
					phone: 'string',
					licensed_agent_name: 'string',
					address: {
						first: 'string',
						second: 'string',
					},
				},
				properties: [
					{
						id: 'string',
						created_at: '2023-05-26T05:31:53.605Z',
						updated_at: '2023-05-26T05:31:53.605Z',
						name: 'string',
						main_image_url: 'string',
						sub_categories: [
							{
								middle_category: {
									super_category: {
										level: 'super',
										id: 'string',
										name: 'string',
									},
									level: 'middle',
									id: 'string',
									name: 'string',
								},
								level: 'sub',
								id: 'string',
								name: 'string',
							},
						],
					},
				],
				type: 'real estate agent',
				id: 'string',
				name: 'string',
				email: 'user@example.com',
				created_at: '2023-05-26T05:31:53.605Z',
				updated_at: '2023-05-26T05:31:53.605Z',
				is_verified: true,
				business_certification_images: [
					{
						id: 'string',
						url: 'string',
					},
				],
				acceptant_agreements: [
					{
						id: 'string',
						content: 'string',
						title: 'string',
						target_type: 'customer',
						is_required: true,
					},
				],
			})
		)
	}),

	rest.get('/users/re-agents/:agent_id', (req, res, ctx) => {
		return res(
			ctx.status(200).json({
				phone: 'string',
				profile_image_url: 'string',
				review_stats: {
					review_cnt: 0,
					rating_avg: 0,
				},
				introduction: {
					title: 'string',
					content: 'string',
				},
				expertise: {
					super_category_id: 'string',
					super_category_name: 'string',
					sub_expertises: [
						{
							sub_category_id: 'string',
							sub_category_name: 'string',
						},
					],
				},
				is_licensed: true,
				real_estate: {
					num: 'string',
					name: 'string',
					phone: 'string',
					licensed_agent_name: 'string',
					address: {
						first: 'string',
						second: 'string',
					},
				},
				properties: [
					{
						id: 'string',
						created_at: '2023-05-26T05:32:32.817Z',
						updated_at: '2023-05-26T05:32:32.817Z',
						name: 'string',
						main_image_url: 'string',
						sub_categories: [
							{
								middle_category: {
									super_category: {
										level: 'super',
										id: 'string',
										name: 'string',
									},
									level: 'middle',
									id: 'string',
									name: 'string',
								},
								level: 'sub',
								id: 'string',
								name: 'string',
							},
						],
					},
				],
				type: 'real estate agent',
				id: 'string',
				name: 'string',
				email: 'user@example.com',
				created_at: '2023-05-26T05:32:32.817Z',
				updated_at: '2023-05-26T05:32:32.817Z',
			})
		)
	}),
]
