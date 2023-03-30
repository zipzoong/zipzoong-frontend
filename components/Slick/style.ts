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
	height: 52vh;
	position: relative;
	justify-content: center;
	align-items: center;
	background-repeat: no-repeat;
	background-size: cover;

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
		width: 74vw;
		height: 29vh;
		display: flex;
		flex-direction: column;
		gap: 1.4vw;
	}
`

export const SlickNewText = styled.span`
	font-size: ${textStyle.eng_12_bk.fontSize};
	font-weight: ${textStyle.eng_12_bk.fontWeight};
	font-family: ${textStyle.fontFamily.P9};
	color: ${color.secondary_container};
`

export const TitleText = styled.span`
	font-size: 32px;
	font-weight: 600;
	line-height: 140%;
	font-family: ${textStyle.fontFamily.P6};
	color: ${color.white};
`

export const TitleSubText = styled.span`
	font-size: 16px;
	font-weight: 400;
	font-family: ${textStyle.fontFamily.P4};
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
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-family: 'Outfit';
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
