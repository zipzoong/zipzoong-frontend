import SelectOptionType from '@/types/selectOption.type'

const lifeServiceOption: SelectOptionType = {
	title: '생활서비스',
	value: [
		{
			subtitle: '이사 · 입주청소',
			option: ['이사', '에어컨청소', '세탁기청소', '입주청소'],
		},
		{
			subtitle: '인테리어 · 시공 · 수리',
			option: ['종합리모델링', '부분 시공 · 수리'],
		},
		{
			subtitle: '세무사',
			option: ['양도ㆍ상속ㆍ증여', '취득세ㆍ재산세ㆍ종부세'],
		},
		{
			subtitle: '법무사',
			option: ['등기'],
		},
	],
}

export default lifeServiceOption
