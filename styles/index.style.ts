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
	width: 74vw;
	height: 410px;
`

export const EstateTitleText = styled.span`
	color: ${color.tertiary};
	font-size: 24px;
	font-weight: 600;
	font-family: ${textStyle.fontFamily.P6};
`

export const IconContainer = styled.div`
	display: flex;
	margin: 10px;
	width: 74vw;
	justify-content: space-between;
	margin: 5vh 0 5vh 0;
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
	font-family: ${textStyle.H4_18_R.fontFamily};
	color: ${color.tertiary};
`

export const ButtonLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 160px;
	gap: 20px;
`

export const ButtonContainer = styled.div<{ color: string }>`
	width: 37vw;
	height: 14vh;
	background-color: ${(props) => props.color};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 6px;
	padding-left: 3vw;
`

export const ButtonTitle = styled.span`
	font-size: 20px;
	font-weight: 700;
	font-family: ${textStyle.fontFamily.P6};
	color: ${color.white};
`

export const ButtonSubTitle = styled.span`
	font-size: 16px;
	font-family: ${textStyle.fontFamily.P5};
	font-weight: 700;
	color: white;
`

export const BestLayout = styled.div`
	margin-top: 6vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const BestContainer = styled.div`
	width: 74vw;
	display: flex;
	flex-direction: column;
`

export const BestTitleBox = styled.div`
	display: flex;
	gap: 40px;
`

export const BestMoveIcon = styled(Image)<{ margin?: string }>`
	margin-left: ${(props) => (props.margin ? 'auto' : null)};
`

export const BestTitleText = styled(EstateTitleText)``

export const BestFlexbox = styled(BestTitleBox)``

export const BestCardContainer = styled.div`
	margin-top: 20px;
	display: flex;
	width: 74vw;
	justify-content: space-between;
	margin-bottom: 12vh;
`

export const BestCardBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const BestCardImage = styled(Image)`
	display: flex;
	flex-direction: column;
	width: 24vw;
	height: 28vh;
`

export const BestCardButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`

export const BestCardButton = styled.div<{ color?: string }>`
	background-color: ${(props) => props.color || 'white'};
	padding: 6px 12px 6px 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => (props.color ? 'white' : color.primary)};
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
	font-size: ${textStyle.Caption_12_R.fontSize};
	font-weight: ${textStyle.Caption_12_R.fontWeight};
	font-family: ${textStyle.Caption_12_R.fontFamily};
	border-radius: 5px;
`

export const BestCardMajorTitle = styled.span`
	margin-left: auto;
	margin-right: 8px;
	font-size: ${textStyle.H3_20_B.fontSize};
	font-weight: ${textStyle.H3_20_B.fontWeight};
	font-family: ${textStyle.H3_20_B.fontFamily};
	color: ${color.tertiary};
`

export const MajorLayout = styled.div`
	width: 100vw;
	height: 62vh;
	background-color: ${color.secondary_container};
	display: flex;
	justify-content: center;
	align-items: center;
`

export const MajorContainer = styled.div`
	display: flex;
	width: 74vw;
	height: 36vh;
	flex-direction: column;
`

export const MajorTitleText = styled(EstateTitleText)`
	font-size: 32px;
`

export const MajorSubTitleText = styled.span`
	margin-top: 12px;
	font-size: 18px;
	font-family: ${textStyle.fontFamily.P5};
	color: ${color.tertiary};
`

export const MajorCardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 74vw;
`

export const MajorCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 24vw;
	height: 24vh;
	background-color: ${color.white};
	border-radius: 10px;
	margin-top: 40px;
	justify-content: center;
	align-items: center;
`

export const MajorCardTitle = styled.div`
	font-size: ${textStyle.H2_22_B.fontSize};
	font-weight: ${textStyle.H2_22_B.fontWeight};
	font-family: ${textStyle.fontFamily.P7};
	color: ${color.primary};
	width: 18vw;
`

export const MajorCardSubTitle = styled.div`
	margin-top: 20px;
	width: 18vw;
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-weight: ${textStyle.Body1_16_M.fontWeight};
	font-family: ${textStyle.fontFamily.P5};
	color: ${color.gray};
`
