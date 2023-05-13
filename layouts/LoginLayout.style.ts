import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Image from 'next/image'
import styled from 'styled-components'

export const LoginLayout = styled.div`
	width: 100vw;
	height: 100vh;
`

export const LoginBackgroundLayout = styled.div`
	width: 100vw;
	height: 62vh;
	display: flex;
	justify-content: center;
	background-color: ${color.subcolor};
`

export const LoginBackgroundTitleText = styled.span`
	margin-top: 6vw;
	font-size: ${textStyle.H2_22_B.fontSize};
	font-family: ${textStyle.H2_22_B.fontFamily};
	color: ${color.tertiary};
`

export const LoginTypeBoxContainer = styled.div`
	display: flex;
	gap: 20px;
	position: absolute;
	top: 36vh;
`
export const LoginTypeBox = styled.div`
	width: 20vw;
	height: 20vw;
	background-color: ${color.white};
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
`

export const LoginTypeImage = styled(Image)`
	width: 100px;
	height: 100px;
	background-color: ${color.gray};
	/* border-radius: 100%; */
`

export const LoginTypeText = styled.span`
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-family: ${textStyle.Body1_16_M.fontFamily};
	color: ${color.tertiary};
`

export const LoginTypeButton = styled.div`
	width: 160px;
	height: 42px;
	background-color: ${color.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${textStyle.Body2_14_M.fontSize};
	font-family: ${textStyle.Body2_14_M.fontFamily};
	color: ${color.white};
	border-radius: 10px;
`
