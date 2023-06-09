import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const HeaderLayout = styled.div`
	display: flex;
	width: 100vw;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media ALL and (max-width: 904px) {
	}
	@media ALL and (max-width: 1239px) {
	}
	@media ALL and (min-width: 1240px) {
		border-bottom: 1px solid ${color.line};
		height: 72px;
	}
`

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;

	@media ALL and (max-width: 904px) {
	}
	@media ALL and (max-width: 1239px) {
		width: 92vw;
		gap: 1.6vw;
		height: 56px;
	}
	@media ALL and (min-width: 1240px) {
		width: 74vw;
		gap: 1.8vw;
	}
`

export const HeaderLogo = styled(Image)`
	width: 58px;
	height: auto;
	margin-right: 8px;
	cursor: pointer;
`

export const Navigation = styled(Link)<{ color: string; ismediaquery?: string }>`
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-weight: ${textStyle.Body1_16_M.fontWeight};
	font-family: ${textStyle.fontFamily.P4};
	color: ${(props) => props.color};

	@media ALL and (max-width: 1239px) {
		margin-left: ${({ ismediaquery }) => ismediaquery && 'auto'};
	}
`

export const SignupButton = styled(Link)`
	width: 70px;
	height: 30px;
	background-color: ${color.primary};
	color: ${color.white};
	font-size: ${textStyle.Body2_14_M.fontSize};
	font-weight: ${textStyle.Body2_14_M.fontWeight};
	font-family: ${textStyle.Body2_14_M.fontFamily};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 10px;
	border: none;
`

export const SearchContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;

	@media ALL and (max-width: 1239px) {
		display: none;
	}
`

export const MediaQuerySearchContainer = styled.div`
	@media ALL and (min-width: 1239px) {
		display: none;
	}
	width: 92vw;
	height: 34px;
	background-color: ${color.secondary_container};
	border-radius: 999px;
	padding-left: 12px;
	margin: 6px 0 20px 0;
	display: flex;
	align-items: center;
`

export const SearchInput = styled.input`
	width: 16vw;
	height: 36px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	border: 1px solid ${color.on_tertiary};
	border-right: none;

	font-family: ${textStyle.fontFamily.P5};
	color: ${color.black};
	font-size: 13px;
	background-color: transparent;
	padding-left: 12px;
	outline: none;

	&::placeholder {
		color: ${color.on_tertiary};
	}

	@media ALL and (max-width: 1239px) {
		border: none;

		&::placeholder {
			color: ${color.on_tertiary_container};
		}
	}
`

export const SearchButton = styled.button`
	width: 30px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	height: 36px;
	border: 1px solid ${color.on_tertiary};
	border-left: none;
	background-color: transparent;
	display: flex;
	cursor: pointer;
	padding-right: 12px;
	justify-content: center;
	align-items: center;

	@media ALL and (max-width: 1239px) {
		margin-left: auto;
		border: none;
		margin-right: 8px;

		path {
			fill: blue;
		}
	}
`
export const SearchLogo = styled(Image)``
