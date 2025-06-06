🇰🇷 README

도시별 인플루언서 추천 시스템

이 프로젝트는 인구가 줄어드는 지역의 관계인구를 다시 활성화하기 위해 만든 인플루언서 매칭 시스템을 기반으로 한 웹페이지입니다. 간단히 말해서, 각 지역의 관광 자원과 관련된 키워드를 분석해서, 그 지역을 잘 홍보할 수 있는 유튜브 여행 인플루언서를 추천해줍니다.

🔍 소개
이 시스템은 서울여자대학교 데이터사이언스학과의 연구 논문, 즉 「인구감소 지역의 관계인구 활성화를 위한 텍스트 데이터 기반 인플루언서 매칭 시스템」의 결과물을 바탕으로 만들어졌습니다.

- 관광지 키워드: LDA 토픽 모델링을 통해 추출
- 인플루언서 키워드: TF-IDF와 FastText 임베딩으로 분석
- 유사도 분석: 코사인 유사도를 기반으로 매칭

🌐 웹사이트 기능
전국 81곳의 인구감소 지역에 대한 관광 키워드를 분석합니다.
유튜브 인플루언서 872명과 2만여 개의 영상 데이터를 바탕으로 매칭이 이루어져요.
원하는 지역을 선택하면, 그 지역과 잘 맞는 인플루언서들이 추천됩니다.

💡 활용 예시
- 로컬 크리에이터를 활용한 홍보 전략을 세우기
- 지방소멸 문제에 대응하기 위한 맞춤형 마케팅 기획
- 지자체의 관계인구 확대 정책에 참고할 자료로 활용

📁 데이터 출처
- 대한민국 구석구석 (https://korean.visitkorea.or.kr/)
- PLAYBOARD (https://playboard.co)
- YouTube Data API v3

📚 참고 논문
김윤아 외, 인구감소 지역의 관계인구 활성화를 위한 텍스트 데이터 기반 인플루언서 매칭 시스템, 서울여자대학교 데이터사이언스학과, 2024.

🇺🇸 README 

Regional Influencer Recommendation System

So, this project is basically a web application that comes from research on how to match influencers to help revitalize relationship populations in areas where the population is declining. Pretty interesting, right?

It digs into local tourism keywords and finds YouTube travel influencers who are a great fit for promoting those areas effectively.

🔍 Overview
This whole system is built off a research paper from the Department of Data Science at Seoul Women’s University.

- Tourism keywords: We use LDA topic modeling to pull these out.
- Influencer content: It’s analyzed using TF-IDF and FastText embeddings.
- Similarity measurement: We match things up with cosine similarity.

🌐 Web Features
It covers 81 depopulated regions across South Korea.
We’re talking about 872 YouTube influencers and over 21,000 videos in our matching process.
When you pick a region, it recommends influencers that really resonate with that area.

💡 Use Cases
- Craft local marketing strategies that leverage influencer outreach.
- Develop tailored campaigns aimed at preventing local extinction.
- Provide useful insights for public policy that focuses on expanding relational populations.

📁 Data Sources
- VisitKorea (https://korean.visitkorea.or.kr/)
- PLAYBOARD (https://playboard.co)
- YouTube Data API v3

📚 Reference Paper
Yuna Kim et al., Text Data-Based Influencer Matching System for Revitalizing Relationship Populations in Depopulated Areas, Seoul Women’s University, 2024.
