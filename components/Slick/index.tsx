import React, { useEffect } from 'react'
import * as S from './style'
import prev from 'assets/prev.svg'
import next from 'assets/next.svg'

const TOTAL_SLIDES = 2

const Slick = () => {
	const [currentSlide, setCurrentSlide] = React.useState(0)
	const [isLoad, setIsLoad] = React.useState(false)
	const slideRef = React.useRef<HTMLDivElement>(null)

	const NextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES) {
			setCurrentSlide(0)
			return
		} else {
			setCurrentSlide(currentSlide + 1)
		}
	}

	const PrevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(TOTAL_SLIDES)
			return
		} else {
			setCurrentSlide(currentSlide - 1)
		}
	}

	React.useEffect(() => {
		if (!!slideRef.current) {
			slideRef.current.style.transition = 'all 0.5s ease-in-out'
			slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`
		}
		if (!isLoad) {
			setIsLoad(true)
			setTimeout(() => {
				NextSlide()
				setIsLoad(false)
			}, 6000)
		}
		// eslint-disable-next-line
	}, [currentSlide])

	return (
		<S.MediaSlackLayout>
			<S.MediaSlackContainer>
				<S.SlickWrap ref={slideRef}>
					<S.SlickLayout>
						<S.SlickContainer>
							<S.SlickNewText>NEW</S.SlickNewText>
							<S.TitleText>
								<span>똑똑한 내집 마련</span>
								<br />
								<span>집중에서 시작</span>
							</S.TitleText>
							<S.TitleSubText>집중 베타서비스 오픈</S.TitleSubText>
							<S.SlickButtonContainer>
								<S.NumberButton select="true">1 / 3</S.NumberButton>
								<S.PrevNextButton onClick={PrevSlide}>
									<S.PrevNextLogo src={prev} alt="" />
								</S.PrevNextButton>
								<S.PrevNextButton onClick={NextSlide}>
									<S.PrevNextLogo src={next} alt="" />
								</S.PrevNextButton>
							</S.SlickButtonContainer>
						</S.SlickContainer>
					</S.SlickLayout>
					<S.SlickLayout>
						<S.SlickContainer>
							<S.SlickNewText>NEW</S.SlickNewText>
							<S.TitleText>
								<span>부동산 중개는</span>
								<br />
								<span>검증된 전문가와 함께</span>
							</S.TitleText>
							<S.TitleSubText>공인중개사 매칭서비스</S.TitleSubText>
							<S.SlickButtonContainer>
								<S.NumberButton>2 / 3</S.NumberButton>
								<S.PrevNextButton select="true" onClick={PrevSlide}>
									<S.PrevNextLogo src={prev} alt="" />
								</S.PrevNextButton>
								<S.PrevNextButton onClick={NextSlide}>
									<S.PrevNextLogo src={next} alt="" />
								</S.PrevNextButton>
							</S.SlickButtonContainer>
						</S.SlickContainer>
					</S.SlickLayout>
					<S.SlickLayout>
						<S.SlickContainer>
							<S.SlickNewText>NEW</S.SlickNewText>
							<S.TitleText>
								<span>어려운 부동산 절차</span>
								<br />
								<span>집중케어로 간편하게</span>
							</S.TitleText>
							<S.TitleSubText>전문 매니저의 맞춤케어</S.TitleSubText>
							<S.SlickButtonContainer>
								<S.NumberButton>3 / 3</S.NumberButton>
								<S.PrevNextButton onClick={PrevSlide}>
									<S.PrevNextLogo src={prev} alt="" />
								</S.PrevNextButton>
								<S.PrevNextButton select="true" onClick={NextSlide}>
									<S.PrevNextLogo src={next} alt="" />
								</S.PrevNextButton>
							</S.SlickButtonContainer>
						</S.SlickContainer>
					</S.SlickLayout>
				</S.SlickWrap>
			</S.MediaSlackContainer>
		</S.MediaSlackLayout>
	)
}

export default Slick
