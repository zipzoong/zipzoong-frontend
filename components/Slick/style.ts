import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Image from 'next/image'
import styled from 'styled-components'

export const SlickWrap = styled.div`
	display: flex;
	width: fit-content;
`

export const SlickLayout = styled.div`
	display: flex;
	width: 100vw;
	height: 410px;
	position: relative;
	justify-content: center;
	align-items: center;

	&:nth-child(1) {
		background-image: url('/images/slick-1.png');
	}
	&:nth-child(2) {
		background-image: url('/images/slick-2.png');
	}
	&:nth-child(3) {
		background-image: url('/images/slick-3.png');
	}
`

export const SlickContainer = styled.div`
	@media ALL and (max-width: 904px) {
	}
	@media ALL and (max-width: 1239px) {
	}
	@media ALL and (min-width: 1240px) {
		width: 1040px;
		height: 230px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`

export const SlickNewText = styled.span`
	font-size: ${textStyle.eng_12_bk.fontSize};
	font-weight: ${textStyle.eng_12_bk.fontWeight};
	color: ${color.secondary_container};
`

export const TitleText = styled.span`
	font-size: 32px;
	font-weight: 600;
	line-height: 140%;
	color: ${color.white};
`

export const TitleSubText = styled.span`
	font-size: 16px;
	font-weight: 400;
	color: ${color.white};
`

export const SlickButtonContainer = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 6px;
`

export const NumberButton = styled.button`
	width: 68px;
	height: 32px;
	background-color: ${color.white};
	color: ${color.tertiary};
	font-size: ${textStyle.Body1_16_M};
	border-radius: 16px;
	border: none;
	margin-right: 10px;
`

export const PrevNextButton = styled.div`
	width: 32px;
	height: 32px;
	background-color: ${color.white};
	border-radius: 999px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`

export const PrevNextLogo = styled(Image)``
