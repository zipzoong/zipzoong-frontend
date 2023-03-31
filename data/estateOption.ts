import SelectOptionType from '@/types/selectOption.type'

const estateOption: SelectOptionType = {
	title: '공인중개사 매칭',
	value: [
		{
			subtitle: '주거공간',
			option: ['아파트', '주택', '빌라/고급빌라', '다가구/다세대', '원룸/투룸', '오피스텔'],
		},
		{
			subtitle: '상업공간',
			option: ['상가', '빌딩', '사무실', '점포/프랜차이즈', '공장/창고', '지식산업센터'],
		},
		{
			subtitle: '특수부동산',
			option: ['토지', '재건축/재개발', '경매', '분양', '병원/요양원', '반려동물', '종교시설', '모텔/펜션'],
		},
	],
}

export default estateOption
