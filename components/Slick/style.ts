import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export const MediaSlackLayout = styled.div`
	@media ALL and (max-width: 904px) {
	}
	@media ALL and (max-width: 1239px) {
		width: 100vw;
		display: flex;
		margin-left: 4vw;
		align-items: center;
	}
`

export const MediaSlackContainer = styled.div`
	@media ALL and (max-width: 904px) {
	}
	@media ALL and (max-width: 1239px) {
		width: 92vw;
		overflow: hidden;
		border-radius: 10px;
	}
`

export const SlickWrap = styled.div`
	display: flex;
	width: fit-content;
`

export const SlickLayout = styled.div`
	display: flex;
	width: 100vw;
	padding-right: 8vw;
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

	@media ALL and (max-width: 1239px) {
		height: 42vh;
	}
`

export const SlickContainer = styled.div`
	@media ALL and (max-width: 904px) {
	}
	@media ALL and (max-width: 1239px) {
		display: flex;
		flex-direction: column;
		margin-top: auto;
		height: 60%;
		align-items: center;
	}
	@media ALL and (min-width: 1240px) {
		width: 66vw;
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

	@media ALL and (max-width: 1239px) {
		display: none;
	}
`

export const TitleText = styled.span`
	font-size: 32px;
	font-weight: 600;
	line-height: 140%;

	span {
		font-family: ${textStyle.fontFamily.P6};
		color: ${color.white};
		margin-left: -2px;
	}

	@media ALL and (max-width: 1239px) {
		br {
			display: none;
		}

		font-size: 22px;
		font-family: ${textStyle.H2_22_B.fontFamily};
	}
`

export const TitleSubText = styled.span`
	font-size: 16px;
	font-weight: 400;
	font-family: ${textStyle.fontFamily.P4};
	color: ${color.white};

	@media ALL and (max-width: 1239px) {
		margin-top: 10px;
		font-size: ${textStyle.Body1_16_M.fontSize};
		font-family: ${textStyle.Body1_16_M.fontFamily};
	}
`

export const SlickButtonContainer = styled.div`
	display: flex;
	gap: 6px;

	@media ALL and (max-width: 1239px) {
		margin: auto 0 30px 0;
	}
`

export const NumberButton = styled.button<{ select?: string }>`
	width: 68px;
	height: 32px;
	background-color: ${color.white};
	color: ${color.tertiary};
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-family: 'Outfit';
	border-radius: 16px;
	border: none;
	margin-right: 10px;

	@media ALL and (max-width: 1239px) {
		width: 8px;
		margin-right: 0;
		height: 8px;
		border: 1px solid ${color.white};
		background-color: transparent;
		color: transparent;

		${({ select }) =>
			select &&
			css`
				width: 30px;
				background-color: white;
			`};

		& > * {
			display: none;
		}
	}
`

export const PrevNextButton = styled.div<{ select?: string }>`
	width: 32px;
	height: 32px;
	background-color: ${color.white};
	border-radius: 999px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	@media ALL and (max-width: 1239px) {
		width: 8px;
		height: 8px;
		border: 1px solid ${color.white};
		background-color: transparent;

		${({ select }) =>
			select &&
			css`
				width: 30px;
				background-color: white;
			`};

		& > * {
			display: none;
		}
	}
`

export const PrevNextLogo = styled(Image)``
