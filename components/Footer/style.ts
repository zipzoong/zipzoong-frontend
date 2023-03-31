import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Image from 'next/image'
import styled from 'styled-components'

export const FooterLayout = styled.div`
	width: 100vw;
	height: 58vh;
	background-color: ${color.tertiary};
	display: flex;
	justify-content: center;
	align-items: center;
`

export const FooterContainer = styled.div`
	width: 74vw;
	height: 38vh;
	display: flex;
	flex-direction: column;
`

export const FooterMainContainer = styled.div`
	display: flex;
`

export const FooterLogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const FooterLogo = styled(Image)``

export const FooterTitle = styled.span`
	font-size: 16px;
	font-family: 'P5';
	color: ${color.white};
`

export const FooterTermsText = styled.span`
	font-size: 12px;
	color: ${color.line};
	margin-top: 52px;
`

export const FooterInfoContainer = styled.div`
	display: flex;
	gap: 42px;
	margin-left: auto;
`

export const FooterInfoBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const FooterInfoTitleText = styled.span`
	font-size: 14px;
	font-family: 'P6';
	margin-bottom: 6px;
	color: ${color.white};
`

export const FooterInfoText = styled.span`
	font-size: 12px;
	color: ${color.white};
	font-weight: 400;
	font-family: ${textStyle.fontFamily.P4};
`

export const FooterButton = styled.div`
	width: 150px;
	font-size: 12px;
	font-family: ${textStyle.fontFamily.P6};
	color: black;
	height: 32px;
	background-color: ${color.line};
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const FooterLine = styled.div`
	margin-top: 40px;
	width: 74vw;
	height: 1px;
	background-color: ${color.line};
`

export const FooterText = styled.div`
	margin-top: 20px;
	font-size: 12px;
	font-family: ${textStyle.fontFamily.P3};
	color: ${color.line};
`
