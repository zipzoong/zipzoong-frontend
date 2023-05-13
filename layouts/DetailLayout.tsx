import React from 'react'
import color from '@/styles/color.theme'
import DetailALL from '@/components/Detail/All'
import DetailItem from '@/components/Detail/Item'
import DetailReview from '@/components/Detail/Review'
import * as S from './DetailLayout.style'

const DetailLayout = () => {
	const [detailType, setDetailType] = React.useState('ALL')

	return (
		<S.DetailLayout>
			<S.DetailControlBar>
				<S.DetailControlOption onClick={() => setDetailType('ALL')} colors={detailType === 'ALL' ? color.primary : ''}>
					<span>전체보기</span>
				</S.DetailControlOption>
				<S.DetailControlOption onClick={() => setDetailType('ITEM')} colors={detailType === 'ITEM' ? color.primary : ''}>
					<span>작업사례({0})</span>
				</S.DetailControlOption>
				<S.DetailControlOption onClick={() => setDetailType('REVIEW')} colors={detailType === 'REVIEW' ? color.primary : ''}>
					<span>계약자후기({0})</span>
				</S.DetailControlOption>
			</S.DetailControlBar>
			<S.DetailContainer>
				<S.DetailProfileContainer>
					<S.DetailProfileImage src={''} alt="" />
					<S.DetailProfileTitle>김00 공인중개사</S.DetailProfileTitle>
					<S.DetailProfileReview>⭐ 5.0 / 후기 00건</S.DetailProfileReview>
					<S.DetailProfileGraphContainer>
						{['안전(신뢰)', '친절(소통)', '만족(추천)', '매물확인', '실명확인'].map((title, index) => (
							<S.DetailProfileGraph key={index}>
								<span>{title}</span>
								<S.DetailProfileGraphBar>
									<S.DetailProfileGraphCharge review={index + 1} />
								</S.DetailProfileGraphBar>
								<h1>{index + 1}.0</h1>
							</S.DetailProfileGraph>
						))}
					</S.DetailProfileGraphContainer>
					<S.DetailProfileButton color={color.primary}>상담신청</S.DetailProfileButton>
					<S.DetailProfileButton color={color.tertiary_container}>후기작성</S.DetailProfileButton>
				</S.DetailProfileContainer>
				{detailType === 'ALL' && <DetailALL />}
				{detailType === 'ITEM' && <DetailItem />}
				{detailType === 'REVIEW' && <DetailReview />}
			</S.DetailContainer>
		</S.DetailLayout>
	)
}

export default DetailLayout
