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
	}
	@media ALL and (min-width: 1240px) {
		width: 74vw;
		gap: 1.4vw;
	}
`

export const HeaderLogo = styled(Image)`
	width: 58px;
	height: auto;
	margin-right: 10px;
`

export const Navigation = styled(Link)<{ color: string }>`
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-weight: ${textStyle.Body1_16_M.fontWeight};
	font-family: ${textStyle.fontFamily.P4};
	color: ${(props) => props.color};
`

export const SignupButton = styled.button`
	width: 70px;
	height: 30px;
	background-color: ${color.primary};
	color: ${color.white};
	border-radius: 10px;
	border: none;
`

export const SearchContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
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
`
export const SearchLogo = styled(Image)``
