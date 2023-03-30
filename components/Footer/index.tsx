import React from 'react'
import * as S from './style'
import footerlogo from 'assets/footerlogo.svg'

const Footer = () => {
	return (
		<S.FooterLayout>
			<S.FooterContainer>
				<S.FooterMainContainer>
					<S.FooterLogoContainer>
						<S.FooterLogo src={footerlogo} alt="" />
						<S.FooterTitle>집중공인중개사사무소</S.FooterTitle>
						<S.FooterTermsText>이용약관 | 개인정보처리방침</S.FooterTermsText>
					</S.FooterLogoContainer>
					<S.FooterInfoContainer>
						<S.FooterInfoBox>
							<S.FooterInfoTitleText>집중 정보</S.FooterInfoTitleText>
							<S.FooterInfoText>중개사 매칭</S.FooterInfoText>
							<S.FooterInfoText>생활 서비스</S.FooterInfoText>
							<S.FooterInfoText>집중케어</S.FooterInfoText>
							<S.FooterInfoText>커뮤니티</S.FooterInfoText>
						</S.FooterInfoBox>
						<S.FooterInfoBox>
							<S.FooterInfoTitleText>고객 안내</S.FooterInfoTitleText>
							<S.FooterInfoText>공지사항</S.FooterInfoText>
							<S.FooterInfoText>이용안내</S.FooterInfoText>
							<S.FooterInfoText>자주묻는질문</S.FooterInfoText>
						</S.FooterInfoBox>
						<S.FooterInfoBox>
							<S.FooterInfoTitleText>중개사 안내</S.FooterInfoTitleText>
							<S.FooterInfoText>공지사항</S.FooterInfoText>
							<S.FooterInfoText>이용안내</S.FooterInfoText>
							<S.FooterInfoText>중개사 센터</S.FooterInfoText>
						</S.FooterInfoBox>
						<S.FooterInfoBox>
							<S.FooterInfoTitleText>고객 센터</S.FooterInfoTitleText>
							<S.FooterButton>1:1 문의하기</S.FooterButton>
							<S.FooterInfoText>평일 00:00 - 00:00</S.FooterInfoText>
							<S.FooterInfoText>
								점심시간 00:00 - 00:00 제외
								<br />
								주말 및 공휴일 제외
							</S.FooterInfoText>
						</S.FooterInfoBox>
					</S.FooterInfoContainer>
				</S.FooterMainContainer>
				<S.FooterLine />
				<S.FooterText>
					집중공인중개사사무소 | 대표 : 오주영 | 서울시 서초구 서초대로46길 99 4203호
					<br />
					개인정보책임관리자 : 000 | 사업자번호 : 685-25-01690 | 통신판매업신고증 : 0000000
					<br />
					고객센터 : 02-6925-3400 | 비즈니스 문의 : zip_manager@zipzoong.co.kr <br />
					©2023. zipzoong. All rights reserved.
				</S.FooterText>
			</S.FooterContainer>
		</S.FooterLayout>
	)
}

export default Footer
