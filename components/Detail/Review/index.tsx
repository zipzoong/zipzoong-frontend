import * as S from '@/layouts/DetailLayout.style'
import dropdown from 'assets/detaildropdown.svg'
import dropup from 'assets/detaildropup.svg'

const DetailReview = () => {
	return (
		<S.DetailInfoContainer>
			<S.DetailReviewIntroduceBox>100% 계약사실이 확인된 계약자 후기입니다.</S.DetailReviewIntroduceBox>
			<S.DetailReviewContainer>
				<S.DetailItemTitle>
					<span>계약자후기 000</span>
					<h1 id="full">최신순</h1>
					<h1 id="item">평가 높은 순</h1>
					<h1 id="item">평가 낮은 순</h1>
				</S.DetailItemTitle>
				{[1, 2, 3, 4, 5].map((key) => (
					<S.DetailFullReviewBox key={key}>
						<S.DetailFullReviewProfileBox>
							<S.DetailFullReviewProfileImage src="" alt="" />
							<S.DetailFullReviewProfileName>
								<h1>Ubinquitous</h1>
								<span>⭐ 5.0 | 2023.04.01</span>
							</S.DetailFullReviewProfileName>
						</S.DetailFullReviewProfileBox>
						<S.DetailFullReviewDescription>
							후기내용 ------------------- <br />
							후기내용 ----------------------------- <br />
							후기내용 -----------
						</S.DetailFullReviewDescription>
						<S.DetailFullReviewTimestamp>중개분야 | 2023.00(계약일) | 00시00구</S.DetailFullReviewTimestamp>
					</S.DetailFullReviewBox>
				))}
			</S.DetailReviewContainer>
		</S.DetailInfoContainer>
	)
}

export default DetailReview
