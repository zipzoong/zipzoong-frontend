import estateOption from '@/data/estateOption'
import lifeServiceOption from '@/data/lifeServiceOption'
import { useRouter } from 'next/router'
import React from 'react'
import SearchLayout from '@/layouts/SearchLayout'

const Search = () => {
	const router = useRouter()
	const [option, setOption] = React.useState(estateOption)

	React.useEffect(() => {
		const { type } = router.query
		if (type === 'estate') return setOption(estateOption)
		if (type === 'life') return setOption(lifeServiceOption)
	}, [router])

	return <SearchLayout option={option} />
}

export default Search
