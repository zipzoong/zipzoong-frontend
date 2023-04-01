import * as S from '@/layouts/detail/style'
import dropdown from 'assets/detaildropdown.svg'
import dropup from 'assets/detaildropup.svg'

const DetailALL = () => {
	return (
		<S.DetailInfoContainer>
			<S.DetailInfoHashtagContainer>
				<S.DetailInfoHashtag># 태그1</S.DetailInfoHashtag>
				<S.DetailInfoHashtag># 태그2</S.DetailInfoHashtag>
				<S.DetailInfoHashtag># 태그3</S.DetailInfoHashtag>
			</S.DetailInfoHashtagContainer>
			<S.DetailInfoTitle>아파트 매매 전문 친절한 상담</S.DetailInfoTitle>
			<S.DetailInfoDescription>
				안녕하세요 친절한 공인중개사입니다.
				<br />
				00시 00구에서 0년간 일해왔으며 고객님들의 니즈에 맞는 집들을 함께 알아가며
				<br />
				(소개글 2-3줄 내외)
			</S.DetailInfoDescription>
			<S.DetailInfoBoxContainer>
				<S.DetailInfoBox>
					<span>근무형태</span> 00공인중개사 개업
				</S.DetailInfoBox>
				<S.DetailInfoBox>
					<span>전문분야</span> 아파트
				</S.DetailInfoBox>
			</S.DetailInfoBoxContainer>
			<S.DetailIconContainer>
				{[1, 2, 3, 4].map((_, index) => (
					<S.DetailIcon key={index} />
				))}
			</S.DetailIconContainer>
			<S.DetailInfoButton>
				<span>부동산등록 정보</span>
				<S.DetailInfoButtonDropdown src={dropdown} alt="" />
			</S.DetailInfoButton>
			<S.DetailInfomationContainer>
				<S.DetailInfomation>
					<div>개설등록번호</div> 0000
				</S.DetailInfomation>
				<S.DetailInfomation>
					<div>상호명</div> 0000공인중개사사무소
				</S.DetailInfomation>
				<S.DetailInfomation>
					<div>대표자</div> 000
				</S.DetailInfomation>
				<S.DetailInfomation>
					<div>대표번호</div> 00-0000-0000
				</S.DetailInfomation>
				<S.DetailInfomation>
					<div>소재지</div> 서울특별시 서초구 서초대로 00길 00, 0000호
				</S.DetailInfomation>
			</S.DetailInfomationContainer>
			<S.DetailItemContainer>
				<S.DetailItemTitle>
					<span>매물정보</span>
					<h1 id="full">전체보기</h1>
				</S.DetailItemTitle>
				{[1, 2].map((p_key) => (
					<S.DetailItemFlexBox key={p_key}>
						{[1, 2, 3].map((key) => (
							<S.DetailItemBox key={key}>
								<S.DetailItemImage src="" alt="" />
								<S.DetailItemName>00시 00동 0000아파트 00평대</S.DetailItemName>
								<S.DetailItemDescription>찜 00 · 조회 00</S.DetailItemDescription>
							</S.DetailItemBox>
						))}
					</S.DetailItemFlexBox>
				))}
			</S.DetailItemContainer>
			<S.DetailReviewContainer>
				<S.DetailItemTitle>
					<span>계약자후기</span>
					<h1 id="full">전체보기</h1>
				</S.DetailItemTitle>
				<S.DetailReviewFlexBox>
					{[1, 2].map((key) => (
						<S.DetailReview key={key}>
							<S.DetailReviewInfo>
								<span>뽀롱뽀롱뾰로롱</span>
								<p>
									집이너무이쁘네요. 로렘 입섬 돌로
									<br />
									아멧 집 너무 이뻐요! 서울에
									<br />
									집값이 너무비싸요 눈물...
								</p>
							</S.DetailReviewInfo>
							<S.DetailReviewImage src="" alt="" />
						</S.DetailReview>
					))}
				</S.DetailReviewFlexBox>
			</S.DetailReviewContainer>
		</S.DetailInfoContainer>
	)
}

export default DetailALL
