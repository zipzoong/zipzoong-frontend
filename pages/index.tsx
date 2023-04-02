import Slick from '@/components/Slick'
import React from 'react'
import * as S from '@/styles/index.style'

import apartment from 'assets/icon/apartment.svg'
import house from 'assets/icon/house.svg'
import billa from 'assets/icon/billa.svg'
import manyfamily from 'assets/icon/manyfamily.svg'
import oneroom from 'assets/icon/oneroom.svg'
import hospital from 'assets/icon/hospital.svg'
import animal from 'assets/icon/animal.svg'
import building from 'assets/icon/building.svg'
import office from 'assets/icon/office.svg'
import franchise from 'assets/icon/franchise.svg'
import factory from 'assets/icon/factory.svg'
import viewall from 'assets/icon/viewall.svg'
import leftarrow from 'assets/leftarrow.svg'
import rightarrow from 'assets/rightarrow.svg'

import color from '@/styles/color.theme'

const iconInfo = [
	[
		{
			src: apartment,
			title: '아파트',
		},
		{
			src: house,
			title: '주택',
		},
		{
			src: billa,
			title: '빌라/고급빌라',
		},
		{
			src: manyfamily,
			title: '다가구/다세대',
		},
		{
			src: oneroom,
			title: '원룸/투룸',
		},
		{
			src: hospital,
			title: '병원/요양원',
		},
	],
	[
		{
			src: animal,
			title: '반려동물',
		},
		{
			src: building,
			title: '빌딩',
		},
		{
			src: office,
			title: '사무실',
		},
		{
			src: franchise,
			title: '점포/프랜차이즈',
		},
		{
			src: factory,
			title: '공장/창고',
		},
		{
			src: viewall,
			title: '전체보기',
		},
	],
]

const Home = () => {
	return (
		<S.HomeLayout>
			<Slick />
			<S.EstateLayout>
				<S.EstateContainer>
					<S.EstateTitleText>어떤 중계사를 찾고 계신가요?</S.EstateTitleText>
					<S.EstateMediaContianer>
						{iconInfo.map((info, index) => (
							<S.IconContainer key={index}>
								{info.map((icon, index) => (
									<S.IconWrap key={index}>
										<S.IconBox>
											<S.IconLogo src={icon.src} alt="" />
										</S.IconBox>
										<S.IconText>{icon.title}</S.IconText>
									</S.IconWrap>
								))}
							</S.IconContainer>
						))}
					</S.EstateMediaContianer>
				</S.EstateContainer>
			</S.EstateLayout>
			<S.ButtonLayout>
				<S.ButtonContainer color={color.primary}>
					<S.ButtonTitle>클린한 부동산 생활 솔루션, 집중</S.ButtonTitle>
					<S.ButtonSubTitle>이용 가이드 바로가기</S.ButtonSubTitle>
				</S.ButtonContainer>
				<S.ButtonContainer color={color.black}>
					<S.ButtonTitle>집중에서 새로운 고객을 만나보세요</S.ButtonTitle>
					<S.ButtonSubTitle>전문가 등록 바로가기</S.ButtonSubTitle>
				</S.ButtonContainer>
			</S.ButtonLayout>
			<S.BestLayout>
				<S.BestContainer>
					<S.BestTitleBox>
						<S.BestTitleText>집중 인기 서비스 TOP5</S.BestTitleText>
						<S.BestMoveIcon margin="true" src={leftarrow} alt="" />
						<S.BestMoveIcon src={rightarrow} alt="" />
					</S.BestTitleBox>
				</S.BestContainer>
				<S.BestCardContainer>
					<S.BestCardBox>
						<S.BestCardImage src="/images/test1.png" alt="" width={100} height={100} />
						<S.BestCardButtonContainer>
							<S.BestCardButton color={color.primary}>전문분야</S.BestCardButton>
							<S.BestCardButton>이사</S.BestCardButton>
							<S.BestCardMajorTitle>이사/입주청소</S.BestCardMajorTitle>
						</S.BestCardButtonContainer>
					</S.BestCardBox>
					<S.BestCardBox>
						<S.BestCardImage src="/images/test2.png" alt="" width={100} height={100} />
						<S.BestCardButtonContainer>
							<S.BestCardButton color={color.primary}>전문분야</S.BestCardButton>
							<S.BestCardButton>법무사</S.BestCardButton>
							<S.BestCardMajorTitle>법무사 매칭</S.BestCardMajorTitle>
						</S.BestCardButtonContainer>
					</S.BestCardBox>
					<S.BestCardBox>
						<S.BestCardImage src="/images/test3.png" alt="" width={100} height={100} />
						<S.BestCardButtonContainer>
							<S.BestCardButton color={color.primary}>전문분야</S.BestCardButton>
							<S.BestCardButton>인테리어</S.BestCardButton>
							<S.BestCardMajorTitle>인테리어 시공</S.BestCardMajorTitle>
						</S.BestCardButtonContainer>
					</S.BestCardBox>
				</S.BestCardContainer>
			</S.BestLayout>
			<S.MajorLayout>
				<S.MajorContainer>
					<S.MajorTitleText>내게 필요한 전문가들이 모두 모여있는 곳!</S.MajorTitleText>
					<S.MajorSubTitleText>복잡하고 어려운 집을 찾는 과정, 집중과 함께 하세요</S.MajorSubTitleText>
					<S.MajorCardContainer>
						<S.MajorCard>
							<S.MajorCardTitle>믿을 수 있는 전문가</S.MajorCardTitle>
							<S.MajorCardSubTitle>
								검증 받은 공인중개사와
								<br />
								생활 전문가를 연결해드립니다.
							</S.MajorCardSubTitle>
						</S.MajorCard>
						<S.MajorCard>
							<S.MajorCardTitle>만족스러운 결과</S.MajorCardTitle>
							<S.MajorCardSubTitle>
								집중매니저가 진행 상황을
								<br />
								간결하게 정리하여 전달합니다.
							</S.MajorCardSubTitle>
						</S.MajorCard>
						<S.MajorCard>
							<S.MajorCardTitle>1:1 집중케어</S.MajorCardTitle>
							<S.MajorCardSubTitle>
								서비스 신청 완료 후<br />
								집중 매니저가 배정됩니다.
							</S.MajorCardSubTitle>
						</S.MajorCard>
					</S.MajorCardContainer>
				</S.MajorContainer>
			</S.MajorLayout>
		</S.HomeLayout>
	)
}

export default Home
