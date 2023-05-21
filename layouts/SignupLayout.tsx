import React from 'react'
import * as S from './SignupLayout.style'

const SignupLayout = () => {
	return (
		<S.SignupLayout>
			<S.SignupBackgroundLayout>
				<S.SignupBackgroundTitleText>집중과 어떤 경험을 함께 하고 싶으신가요?</S.SignupBackgroundTitleText>
				<S.SignupTypeBoxContainer>
					{['개인회원 회원가입', '공인중개사 가입', '전문가 가입'].map((title: string) => (
						<S.SignupTypeBox key={title}>
							<S.SignupTypeImage src="" alt="" />
							<S.SignupTypeText>text text text text text </S.SignupTypeText>
							<S.SignupTypeButton>{title}</S.SignupTypeButton>
						</S.SignupTypeBox>
					))}
				</S.SignupTypeBoxContainer>
			</S.SignupBackgroundLayout>
		</S.SignupLayout>
	)
}

export default SignupLayout
