import React from 'react'
import * as S from './style'
import prev from 'assets/prev.svg'
import next from 'assets/next.svg'

const Slick = () => {
	return (
		<S.SlickWrap>
			<S.SlickLayout>
				<S.SlickContainer>
					<S.SlickNewText>NEW</S.SlickNewText>
					<S.TitleText>
						똑똑한 내집 마련
						<br />
						집중에서 시작
					</S.TitleText>
					<S.TitleSubText>집중 베타서비스 오픈</S.TitleSubText>
					<S.SlickButtonContainer>
						<S.NumberButton>1 / 3</S.NumberButton>
						<S.PrevNextButton>
							<S.PrevNextLogo src={prev} alt="" />
						</S.PrevNextButton>
						<S.PrevNextButton>
							<S.PrevNextLogo src={next} alt="" />
						</S.PrevNextButton>
					</S.SlickButtonContainer>
				</S.SlickContainer>
			</S.SlickLayout>
			<S.SlickLayout>
				<S.SlickContainer>
					<S.SlickNewText>NEW</S.SlickNewText>
					<S.TitleText>
						부동산 중개는
						<br />
						검증된 전문가와 함께
					</S.TitleText>
					<S.TitleSubText>공인중개사 매칭서비스</S.TitleSubText>
					<S.SlickButtonContainer>
						<S.NumberButton>2 / 3</S.NumberButton>
						<S.PrevNextButton>
							<S.PrevNextLogo src={prev} alt="" />
						</S.PrevNextButton>
						<S.PrevNextButton>
							<S.PrevNextLogo src={next} alt="" />
						</S.PrevNextButton>
					</S.SlickButtonContainer>
				</S.SlickContainer>
			</S.SlickLayout>
			<S.SlickLayout>
				<S.SlickContainer>
					<S.SlickNewText>NEW</S.SlickNewText>
					<S.TitleText>
						어려운 부동산 절차
						<br />
						집중케어로 간편하게
					</S.TitleText>
					<S.TitleSubText>전문 매니저의 맞춤케어</S.TitleSubText>
					<S.SlickButtonContainer>
						<S.NumberButton>3 / 3</S.NumberButton>
						<S.PrevNextButton>
							<S.PrevNextLogo src={prev} alt="" />
						</S.PrevNextButton>
						<S.PrevNextButton>
							<S.PrevNextLogo src={next} alt="" />
						</S.PrevNextButton>
					</S.SlickButtonContainer>
				</S.SlickContainer>
			</S.SlickLayout>
		</S.SlickWrap>
	)
}

export default Slick
