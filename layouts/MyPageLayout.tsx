import React from 'react'
import * as S from './MyPageLayout.style'
import { users } from '@zipzoong/sdk/lib/functional'
import { ICustomer } from '@zipzoong/sdk/lib/structures/user/customer'

const MyPageLayout = (data: ) => {
	return (
		<S.MyPageLayout>
			<S.MyPageContainer>
				<S.MyPageProfileContainer>
					<S.MyPageProfileTitleContainer>
						<S.MyPageProfileTitleContainerTitle>일반 회원</S.MyPageProfileTitleContainerTitle>
						<S.MyPageProfileTitleContainerBadge>인증 완료</S.MyPageProfileTitleContainerBadge>
					</S.MyPageProfileTitleContainer>
					<S.MyPageProfileImageContainer>
						<S.MyPageProfileImage src="" alt="" />
						<S.MyPageProfileImageText>
							<b>{data.name}</b>
						</S.MyPageProfileImageText>
						<S.MyPageProfileImageText>회원님</S.MyPageProfileImageText>
					</S.MyPageProfileImageContainer>
				</S.MyPageProfileContainer>
			</S.MyPageContainer>
		</S.MyPageLayout>
	)
}

export default MyPageLayout
