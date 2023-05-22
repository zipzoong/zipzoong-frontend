import React from 'react'
import MyPageLayout from '@/layouts/MyPageLayout'
import { GetServerSideProps } from 'next'
import { users } from '@zipzoong/sdk/lib/functional'
import connection from '@/lib/connection'
import { ICustomer } from '@zipzoong/sdk/lib/structures/user/customer'

interface MyPageSSRPropsType {
	data: ICustomer.IPrivate
}

const MyPage = (data: ICustomer.IPrivate) => {
	// users.hs_providers.me.get(connection)
	// users.re_agents.me.get(connection)
	return <MyPageLayout data={data} />
}

const executeAPI = async () => {
	try {
		return users.customers.me.get(connection)
	} catch (err) {
		console.log(err)
		return false
	}
}

export const getServerSideProps: GetServerSideProps<MyPageSSRPropsType> = async () => {
	const res = await executeAPI()
	if (!res) return { notFound: true }

	return {
		props: {
			data: res,
		},
	}
}

export default MyPage
