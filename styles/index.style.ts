import Image from 'next/image'
import styled from 'styled-components'
import color from './color.theme'
import textStyle from './text.theme'

export const HomeLayout = styled.div`
	display: flex;
	flex-direction: column;
`

export const EstateLayout = styled.div`
	width: 100vw;
	height: 550px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const EstateContainer = styled.div`
	width: 1040px;
	height: 410px;
`

export const EstateTitleText = styled.span`
	color: ${color.tertiary};
	font-size: 24px;
	font-weight: 600;
`

export const IconContainer = styled.div`
	display: flex;
	margin: 10px;
	width: 1020px;
	gap: 60px;
	margin: 40px 0 40px 0;
`

export const IconWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export const IconBox = styled.div`
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 120px;
	border-radius: 40px;
	background-color: ${color.tertiary_container};
`

export const IconLogo = styled(Image)``

export const IconText = styled.span`
	font-size: ${textStyle.H4_18_R.fontSize};
	font-weight: ${textStyle.H4_18_R.fontWeight};
	color: ${color.tertiary};
`
