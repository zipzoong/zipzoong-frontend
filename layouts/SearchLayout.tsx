import SelectBox from '@/components/SelectBox'
import color from '@/styles/color.theme'
import reset from 'assets/reset.svg'
import Image from 'next/image'
import React from 'react'
import * as S from './SearchLayout.style'
import SelectOptionType from '@/types/selectOption.type'

interface SearchLayoutPropsType {
	option: SelectOptionType
}

const SearchLayout = ({ option }: SearchLayoutPropsType) => {
	return (
		<S.SearchContainer>
			<S.SearchWrap>
				<S.SearchButton />
				<S.SearchBoxContainer>
					<S.SearchSelectBoxContainer>
						<SelectBox option={option} />
					</S.SearchSelectBoxContainer>
					<S.SearchItemContainer>
						<S.SearchSearchContainer>
							<Image id="search--image" src={reset} alt="" />
							{['전문분야 선택', '지역 옵션', '전문가 옵션', '인기순'].map((title, index) => (
								<S.SearchSearchButton
									backgroundColor={!index ? color.black : color.white}
									color={!index ? color.tertiary_container : color.gray}
									key={index}>
									<span>{title}</span>
									<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#F6F6F6" />
									</svg>
								</S.SearchSearchButton>
							))}
							<S.SearchSearchClearButton>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
										fill="#B3B3B3"
									/>
								</svg>
								<span>초기화하기</span>
							</S.SearchSearchClearButton>
						</S.SearchSearchContainer>
						{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
							<S.SearchItem href="/detail/1" key={index}>
								<S.SearchItemImage />
								<S.SearchItemDetailContainer>
									<S.SearchBlueSubTitleWrap>
										<div id="tag">
											<div id="circle" />
											<span>아파트</span>
										</div>
										<div id="tag">
											<div id="circle" />
											<span>매물 00개</span>
										</div>
										<S.SearchReviewBox>⭐ 5.0 / 후기 00건</S.SearchReviewBox>
									</S.SearchBlueSubTitleWrap>
									<S.SearchTitleContainer>
										김00중개사
										<span>0000공인중개사 소속</span>
									</S.SearchTitleContainer>
									<S.SearchTitleSubText>아파트 매매 전문 친절한 상담을 하...</S.SearchTitleSubText>
									<S.SearchFlexBox>
										<S.SearchHashtagContainer>
											<S.SearchHashtag>#태그1</S.SearchHashtag>
											<S.SearchHashtag>#태그2</S.SearchHashtag>
											<S.SearchHashtag>#태그3</S.SearchHashtag>
										</S.SearchHashtagContainer>
										<S.SearchLinkButtonContainer>
											<S.SearchLinkButton color={color.on_tertiary_container}>
												자세히
												<br />
												알아보기
											</S.SearchLinkButton>
											<S.SearchLinkButton color={color.primary}>
												바로
												<br />
												상담하기
											</S.SearchLinkButton>
										</S.SearchLinkButtonContainer>
									</S.SearchFlexBox>
								</S.SearchItemDetailContainer>
							</S.SearchItem>
						))}
						<S.SearchPagenationContainer>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z" fill="#898989" />
							</svg>
							<div>1</div>
							<div>2</div>
							<div>3</div>
							<div>4</div>
							<div>5</div>
							<div>6</div>
							<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z" fill="#898989" />
							</svg>
						</S.SearchPagenationContainer>
					</S.SearchItemContainer>
				</S.SearchBoxContainer>
			</S.SearchWrap>
		</S.SearchContainer>
	)
}

export default SearchLayout
