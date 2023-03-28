import Header from '@/components/Header'
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
			<Header />
			<Slick />
			<S.EstateLayout>
				<S.EstateContainer>
					<S.EstateTitleText>어떤 중계사를 찾고 계신가요?</S.EstateTitleText>
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
				</S.EstateContainer>
			</S.EstateLayout>
		</S.HomeLayout>
	)
}

export default Home
