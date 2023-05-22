import React from 'react'
import * as S from './SignupLayout.style'
import { useRouter } from 'next/router'
import { auth } from '@zipzoong/sdk/lib/functional'
import connection from '@/lib/connection'

const SignupLayout = () => {
	// customer parser
	const router = useRouter()
	const onNavigateSignup = (title: string) => {
		auth.user.create(connection, {
			profile_image_url: '',
			address: {
				first: '',
				second: '',
			},
			birth: 'YYYY-MM-DD',
			gender: 'female',
			name: 'string',
			acceptant_agreement_ids: [''],
			type: 'customer',
			email_access_code: '',
			phone_access_code: '',
		})
		// router.push(title)
	}

	return (
		<S.SignupLayout>
			<S.SignupBackgroundLayout>
				<S.SignupBackgroundTitleText>집중과 어떤 경험을 함께 하고 싶으신가요?</S.SignupBackgroundTitleText>
				<S.SignupTypeBoxContainer>
					{['개인회원 회원가입', '공인중개사 가입', '전문가 가입'].map((title: string) => (
						<S.SignupTypeBox key={title}>
							<S.SignupTypeImage src="" alt="" />
							<S.SignupTypeText>text text text text text </S.SignupTypeText>
							<S.SignupTypeButton onClick={() => onNavigateSignup(title)}>{title}</S.SignupTypeButton>
						</S.SignupTypeBox>
					))}
				</S.SignupTypeBoxContainer>
			</S.SignupBackgroundLayout>
		</S.SignupLayout>
	)
}

export default SignupLayout
