import React from 'react'
import { GetServerSideProps } from 'next'
import service from '@/constants/service.constants'
import { users } from '@zipzoong/sdk/lib/functional'
import connection from '@/lib/connection'
import DetailLayout from '@/layouts/DetailLayout'

interface DetailSSRPropsType {
	data: users.hs_providers.getOne.Output | users.re_agents.getOne.Output
}

const Detail = ({ data }: DetailSSRPropsType) => {
	return <DetailLayout data={data} />
}

interface ExecuteAPIPropsType {
	type: string
	provider_id: string
}

const executeAPI = async ({ type, provider_id }: ExecuteAPIPropsType) => {
	try {
		if (type === service.HS_PROVIDER) return await users.hs_providers.getOne(connection, provider_id)
		if (type === service.RE_AGENTS) return await users.re_agents.getOne(connection, provider_id)
	} catch (err) {
		console.log(err)
		return false
	}
}

export const getServerSideProps: GetServerSideProps<DetailSSRPropsType> = async (context) => {
	const { type, provider_id } = context?.query
	const res = await executeAPI({ type, provider_id } as ExecuteAPIPropsType)
	if (!res) return { notFound: true }

	return {
		props: {
			data: res,
		},
	}
}

export default Detail
