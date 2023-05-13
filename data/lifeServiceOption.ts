import SelectOptionType from '@/types/selectOption.type'

const lifeServiceOption: SelectOptionType = {
	title: '생활서비스',
	value: [
		{
			subtitle: '이사 전문가',
			option: ['가정 이사', '원룸 이사', '기업 이사', '사무실 이사', '아파트 이사', '장거리 이사', '포장 이사'],
		},
		{
			subtitle: '청소 전문가',
			option: ['입주 청소', '사무실 청소', '홈(가사) 청소', '기업 청소', '건물관리', '특수 청소', '가전제품'],
		},
		{
			subtitle: '인테리어',
			option: ['기업/사무실', '도면 설계', '리모델링', '반셀프', '부분시공', '아파트', '주거공간', '종합 리모델링'],
		},
		{
			subtitle: '세무사',
			option: ['상속', '양도', '종부세', '증여', '재산세', '취득세'],
		},
		{
			subtitle: '법무사',
			option: ['가압류', '가처분', '등기', '민사소송', '민사집행', '형사소송'],
		},
	],
}

export default lifeServiceOption
