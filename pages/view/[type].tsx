import estateOption from '@/data/estateOption'
import lifeServiceOption from '@/data/lifeServiceOption'
import { useRouter } from 'next/router'
import React from 'react'
import { GetServerSideProps } from 'next'
import { users } from '@zipzoong/sdk/lib/functional'
import connection from '@/lib/connection'
import ViewLayout from '@/layouts/ViewLayout'
import service from '@/constants/service.constants'

interface ViewSSRPropsType {
	data: users.hs_providers.getList.Output | users.re_agents.getList.Output
}

const View = ({ data }: users.hs_providers.getList.Output) => {
	const router = useRouter()
	const [option, setOption] = React.useState(estateOption)

	React.useEffect(() => {
		const { type } = router.query
		if (type === 'estate') return setOption(estateOption)
		if (type === 'life') return setOption(lifeServiceOption)
	}, [router])

	return <ViewLayout option={option} data={data} />
}

const executeAPI = async (type: string) => {
	try {
		if (type === service.HS_PROVIDER) {
			return await users.hs_providers.getList(connection, {
				super_category_name: '',
				sub_category_name: '',
			})
		}
		if (type === service.RE_AGENTS) {
			return await users.re_agents.getList(connection, {
				super_category_name: '',
				sub_category_name: '',
			})
		}
	} catch (err) {
		console.log(err)
		return false
	}
}

export const getServerSideProps: GetServerSideProps<ViewSSRPropsType> = async (context) => {
	const { type } = context?.query
	const res = await executeAPI(type as string)
	if (!res) return { notFound: true }

	return {
		props: {
			data: res,
		},
	}
}

export default View
