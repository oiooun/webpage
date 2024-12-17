

// 헤더부분 배경, 이미지 설명글
    const images = ['img/mainimg1.jpg', 'img/mainimg2.jpg', 'img/mainimg4.jpg', 'img/mainimg5.jpg', 'img/mainimg6.jpg'];
    
    let currentIndex = 0;
    
    function changeBackgroundImage() {
        const heroSection = document.getElementById('HeaderBackground');
        const imageDescription = document.getElementById('imageDescription');
    
        imageDescription.classList.remove('visible');
    
        heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
        
        setTimeout(() => {
            imageDescription.textContent = descriptions[currentIndex];
            imageDescription.classList.add('visible');
        }, 500);
    
       
        currentIndex = (currentIndex + 1) % images.length;
    }
    
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000);





// 스크롤 이벤트 top 버튼
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {

            scrollToTopBtn.style.display = 'block';
        } else {

            scrollToTopBtn.style.display = 'none';
        }
    });


    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    });


//nav-over-ray effect

    const NavMain = document.getElementById('NavMain');
    const overlay = document.getElementById('overlay');

    document.addEventListener('mousemove', (event) => {
        if (event.clientY < 50) {
            
            NavMain.classList.add('show-nav_main');
            overlay.style.display = 'block';  
        } else {
            
            NavMain.classList.remove('show-nav_main');
            overlay.style.display = 'none';  
        }
    });




// 언어 icon


    document.getElementById("language-icon").addEventListener("click", function() {
        var menu = document.getElementById("language-menu");
        menu.classList.toggle("show"); // 'show' 클래스를 토글하여 애니메이션 적용
    });
    


    function toggleMenu() {
        const mobileMenu = document.querySelector('.nav_main nav.mobile');
        mobileMenu.classList.toggle('show');
      }




      const regionInfo = {
        korea: { 
          description: "지도를 클릭하세요!",
          cities: [] // 대한민국 자체는 도시 목록이 없으므로 비워둡니다.
        },
        gangwon: {
          title: "강원도",
          description: "강원도는 자연 경관이 아름다운 지역으로 유명합니다. 산과 바다, 그리고 청정한 공기까지 매력적인 여행지입니다.",
          link: "detail.html", // 강원도 설명 링크
          cities: [
            {
              name: "고성군",
              description: "고성군은 자연이 살아 숨 쉬는 곳입니다.",
              influencer: {
                name: "라이더로터스",
                description: "고성군의 아름다움을 알리는 자연 애호가입니다.",
                image: "img/12.jpg",
                youtubeLink: "https://youtube.com/goseong_influencer"
              }
            },
            {
              name: "삼척시",
              description: "삼척시는 동굴과 해변으로 유명한 도시입니다.",
              influencer: {
                name: "소도읖 생활",
                description: "삼척의 매력을 발굴하는 여행 전문가입니다.",
                image: "img/20.jpg",
                youtubeLink: "https://youtube.com/samcheok_influencer"
              }
            },
            {
              name: "양구군",
              description: "양구군은 청정 자연이 돋보이는 지역입니다.",
              influencer: {
                name: "가희드 gahiiide",
                description: "양구군의 비경을 소개하는 로컬 여행자입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/yanggu_influencer"
              }
            },
            {
              name: "양양군",
              description: "양양군은 서핑과 자연으로 유명합니다.",
              influencer: {
                name: "착한꿀벌 nice honey bee",
                description: "양양군에서 서핑 문화를 전파하는 열정가입니다.",
                image: "img/4.jpg",
                youtubeLink: "https://youtube.com/yangyang_influencer"
              }
            },
            {
              name: "영월군",
              description: "영월군은 고즈넉한 산과 강이 어우러진 곳입니다.",
              influencer: {
                name: "해피선데이 happysunday",
                description: "영월군의 전통과 자연을 알리는 여행자입니다.",
                image: "img/5.jpg",
                youtubeLink: "https://youtube.com/yeongwol_influencer"
              }
            },
            {
              name: "정선군",
              description: "정선군은 산과 전통시장이 있는 매력적인 여행지입니다.",
              influencer: {
                name: "블루그린 bluegreen infp",
                description: "정선군의 전통 문화를 알리는 여행 전문가입니다.",
                image: "img/6.jpg",
                youtubeLink: "https://youtube.com/jeongseon_influencer"
              }
            },
            {
              name: "철원군",
              description: "철원군은 평화로운 DMZ 지역으로 유명합니다.",
              influencer: {
                name: "블루그린 bluegreen infp",
                description: "철원군의 역사와 자연을 탐구하는 여행자입니다.",
                image: "img/7.jpg",
                youtubeLink: "https://youtube.com/cheorwon_influencer"
              }
            },
            {
              name: "태백시",
              description: "태백시는 아름다운 고원 지대로 유명합니다.",
              influencer: {
                name: "계절의여행",
                description: "태백시의 고원 풍경을 알리는 열정 여행가입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/taebaek_influencer"
              }
            },
            {
              name: "평창군",
              description: "평창군은 올림픽 개최지로 유명한 지역입니다.",
              influencer: {
                name: "고품격 맛집지도 TV",
                description: "평창의 스포츠와 자연을 홍보하는 인플루언서입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/pyeongchang_influencer"
              }
            },
            {
              name: "홍천군",
              description: "홍천군은 강원도의 넓은 자연을 자랑합니다.",
              influencer: {
                name: "박홍천",
                description: "홍천군의 숨겨진 명소를 소개하는 로컬 여행자입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/hongcheon_influencer"
              }
            },
            {
              name: "화천군",
              description: "화천군은 산천어 축제로 유명합니다.",
              influencer: {
                name: "꿀민 honeycamp",
                description: "화천군의 축제와 자연을 알리는 여행 전문가입니다.",
                image: "img/4.jpg",
                youtubeLink: "https://youtube.com/hwacheon_influencer"
              }
            },
            {
              name: "횡성군",
              description: "횡성군은 한우로 유명한 고장입니다.",
              influencer: {
                name: "김횡성",
                description: "횡성의 전통과 자연을 소개하는 여행자입니다.",
                image: "img/5.jpg",
                youtubeLink: "https://youtube.com/hoengseong_influencer"
              }
            }
            
          ]
        },
        gyeonggi: {
          title: "경기도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "detail.html", // 경기도 설명 링크
          cities: [
            {
              name: "가평군",
              description: "가평군은 청평호와 자연이 어우러진 힐링 여행지입니다.",
              influencer: {
                name: "박가평",
                description: "가평군의 힐링 명소와 액티비티를 소개하는 로컬 여행자입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/gapyeong_influencer"
              }
            },
            {
              name: "연천군",
              description: "연천군은 역사와 평화의 상징 DMZ 지역입니다.",
              influencer: {
                name: "김연천",
                description: "연천군의 역사적 장소와 자연을 알리는 열정 여행가입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/yeoncheon_influencer"
              }
            }
            
          ]
        },
        chungbuk: {
          title: "충청북도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "detail.html", // 경기도 설명 링크
          cities: [
            {
              name: "괴산군",
              description: "괴산군은 청정 자연과 산촌 체험이 유명합니다.",
              influencer: {
                name: "박괴산",
                description: "괴산군의 자연과 전통문화를 알리는 여행 전문가입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/goesan_influencer"
              }
            },
            {
              name: "단양군",
              description: "단양군은 소백산과 단양팔경으로 유명한 지역입니다.",
              influencer: {
                name: "김단양",
                description: "단양군의 아름다운 풍경을 소개하는 로컬 여행자입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/danyang_influencer"
              }
            },
            {
              name: "보은군",
              description: "보은군은 속리산과 법주사가 있는 역사적인 여행지입니다.",
              influencer: {
                name: "최보은",
                description: "보은군의 역사와 자연을 알리는 열정 여행가입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/boeun_influencer"
              }
            },
            {
              name: "영동군",
              description: "영동군은 와인과 과일로 유명한 고장입니다.",
              influencer: {
                name: "이영동",
                description: "영동군의 특산물과 명소를 홍보하는 로컬 가이드입니다.",
                image: "img/5.jpg",
                youtubeLink: "https://youtube.com/yeongdong_influencer"
              }
            },
            {
              name: "옥천군",
              description: "옥천군은 푸른 산과 강이 어우러진 아름다운 여행지입니다.",
              influencer: {
                name: "박옥천",
                description: "옥천군의 비경을 소개하는 자연 애호가입니다.",
                image: "img/6.jpg",
                youtubeLink: "https://youtube.com/okcheon_influencer"
              }
            },
            {
              name: "제천시",
              description: "제천시는 한방과 자연 치유로 유명한 도시입니다.",
              influencer: {
                name: "김제천",
                description: "제천시의 힐링 명소를 알리는 여행 전문가입니다.",
                image: "img/4.jpg",
                youtubeLink: "https://youtube.com/jecheon_influencer"
              }
            }
            
          ]
        },
        chungnam: {
          title: "충청남도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "detail.html", // 경기도 설명 링크
          cities: [
            {
              name: "공주시",
              description: "공주시는 백제의 고도와 공산성이 있는 역사적 도시입니다.",
              influencer: {
                name: "박공주",
                description: "공주시의 역사와 문화를 알리는 로컬 여행 전문가입니다.",
                image: "img/7.jpg",
                youtubeLink: "https://youtube.com/gongju_influencer"
              }
            },
            {
              name: "금산군",
              description: "금산군은 인삼과 건강식품으로 유명한 지역입니다.",
              influencer: {
                name: "김금산",
                description: "금산군의 인삼과 문화를 소개하는 열정적인 가이드입니다.",
                image: "img/6.jpg",
                youtubeLink: "https://youtube.com/geumsan_influencer"
              }
            },
            {
              name: "논산시",
              description: "논산시는 강경젓갈과 논산훈련소로 유명한 전통의 도시입니다.",
              influencer: {
                name: "최논산",
                description: "논산시의 문화와 명소를 홍보하는 로컬 여행가입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/nonsan_influencer"
              }
            },
            {
              name: "보령시",
              description: "보령시는 머드축제와 대천해수욕장이 있는 해양 관광도시입니다.",
              influencer: {
                name: "이보령",
                description: "보령시의 축제와 해변을 알리는 열정적인 여행자입니다.",
                image: "img/4.jpg",
                youtubeLink: "https://youtube.com/boryeong_influencer"
              }
            },
            {
              name: "부여군",
              description: "부여군은 백제 문화유산이 풍부한 역사적인 지역입니다.",
              influencer: {
                name: "박부여",
                description: "부여군의 역사와 명소를 소개하는 로컬 가이드입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/buyeo_influencer"
              }
            },
            {
              name: "서천군",
              description: "서천군은 갯벌과 철새도래지로 유명한 생태 관광지입니다.",
              influencer: {
                name: "김서천",
                description: "서천군의 자연과 생태를 알리는 여행 전문가입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/seocheon_influencer"
              }
            },
            {
              name: "예산군",
              description: "예산군은 수덕사와 윤봉길 의사의 고향으로 유명합니다.",
              influencer: {
                name: "최예산",
                description: "예산군의 역사와 전통 문화를 알리는 열정적인 여행자입니다.",
                image: "img/6.jpg",
                youtubeLink: "https://youtube.com/yesan_influencer"
              }
            },
            {
              name: "청양군",
              description: "청양군은 청양고추와 칠갑산으로 유명한 고장입니다.",
              influencer: {
                name: "이청양",
                description: "청양군의 특산물과 자연을 알리는 로컬 가이드입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/cheongyang_influencer"
              }
            },
            {
              name: "태안군",
              description: "태안군은 천리포수목원과 아름다운 해안선으로 유명한 관광지입니다.",
              influencer: {
                name: "박태안",
                description: "태안군의 해변과 자연을 홍보하는 열정적인 여행가입니다.",
                image: "img/5.jpg",
                youtubeLink: "https://youtube.com/taean_influencer"
              }
            }
            
          ]
        },
        gyeongbuk: {
          title: "경상북도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "detail.html", // 경기도 설명 링크
          cities: [
            {
              name: "고령군",
              description: "고령군은 대가야의 역사를 간직한 전통의 고장입니다.",
              influencer: {
                name: "박고령",
                description: "고령군의 역사와 문화를 알리는 로컬 여행 전문가입니다.",
                image: "img/4.jpg",
                youtubeLink: "https://youtube.com/goryeong_influencer"
              }
            },
            {
              name: "문경시",
              description: "문경시는 문경새재와 옛길 체험으로 유명한 지역입니다.",
              influencer: {
                name: "김문경",
                description: "문경시의 자연과 전통을 알리는 열정적인 여행자입니다.",
                image: "img/7.jpg",
                youtubeLink: "https://youtube.com/mungyeong_influencer"
              }
            },
            {
              name: "봉화군",
              description: "봉화군은 청정 자연과 축제로 유명한 산림 관광지입니다.",
              influencer: {
                name: "최봉화",
                description: "봉화군의 자연과 문화를 소개하는 로컬 가이드입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/bonghwa_influencer"
              }
            },
            {
              name: "상주시",
              description: "상주시는 풍부한 과일과 한방 문화로 유명한 도시입니다.",
              influencer: {
                name: "이상주",
                description: "상주시의 특산물과 명소를 홍보하는 여행 전문가입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/sangju_influencer"
              }
            },
            {
              name: "성주군",
              description: "성주군은 성주 참외와 가야산으로 유명한 지역입니다.",
              influencer: {
                name: "박성주",
                description: "성주군의 특산물과 자연을 알리는 로컬 여행가입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/seongju_influencer"
              }
            },
            {
              name: "안동시",
              description: "안동시는 하회마을과 유교 문화로 유명한 역사적인 도시입니다.",
              influencer: {
                name: "김안동",
                description: "안동시의 전통과 문화를 홍보하는 열정적인 여행자입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/andong_influencer"
              }
            },
            {
              name: "영덕군",
              description: "영덕군은 대게와 해안선이 아름다운 해양 관광지입니다.",
              influencer: {
                name: "최영덕",
                description: "영덕군의 바다와 특산물을 알리는 여행 전문가입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/yeongdeok_influencer"
              }
            },
            {
              name: "영양군",
              description: "영양군은 산과 계곡으로 둘러싸인 자연의 보고입니다.",
              influencer: {
                name: "이영양",
                description: "영양군의 자연과 명소를 소개하는 로컬 가이드입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/yeongyang_influencer"
              }
            },
            {
              name: "영주시",
              description: "영주시는 소백산과 부석사로 유명한 문화 관광지입니다.",
              influencer: {
                name: "박영주",
                description: "영주시의 역사와 자연을 알리는 열정적인 여행자입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/yeongju_influencer"
              }
            },
            {
              name: "영천시",
              description: "영천시는 와인과 승마로 유명한 특별한 도시입니다.",
              influencer: {
                name: "김영천",
                description: "영천시의 특산물과 문화를 소개하는 여행자입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/yeongcheon_influencer"
              }
            },
            {
              name: "울릉군",
              description: "울릉군은 독도와 섬 문화로 유명한 해양 관광지입니다.",
              influencer: {
                name: "최울릉",
                description: "울릉군의 자연과 섬 문화를 알리는 열정적인 로컬 가이드입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/ulleung_influencer"
              }
            },
            {
              name: "울진군",
              description: "울진군은 청정 해양과 온천으로 유명한 힐링 명소입니다.",
              influencer: {
                name: "이울진",
                description: "울진군의 자연과 명소를 홍보하는 여행 전문가입니다.",
                image: "img/5.jpg",
                youtubeLink: "https://youtube.com/uljin_influencer"
              }
            },
            {
              name: "의성군",
              description: "의성군은 마늘과 전통 문화로 유명한 농촌 지역입니다.",
              influencer: {
                name: "박의성",
                description: "의성군의 특산물과 전통을 알리는 로컬 여행가입니다.",
                image: "img/13.jpg",
                youtubeLink: "https://youtube.com/uisung_influencer"
              }
            },
            {
              name: "청도군",
              description: "청도군은 반려동물과 소싸움 축제로 유명한 지역입니다.",
              influencer: {
                name: "김청도",
                description: "청도군의 축제와 명소를 알리는 열정적인 여행자입니다.",
                image: "img/7.jpg",
                youtubeLink: "https://youtube.com/cheongdo_influencer"
              }
            },
            {
              name: "청송군",
              description: "청송군은 주왕산과 사과로 유명한 자연의 도시입니다.",
              influencer: {
                name: "최청송",
                description: "청송군의 자연과 특산물을 소개하는 여행 전문가입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/cheongsong_influencer"
              }
            }
            
          ]
        },
        gyeongnam: {
          title: "경상남도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "detail.html", // 경기도 설명 링크
          cities: [
            {
              name: "거창군",
              description: "거창군은 수승대와 자연이 아름다운 힐링 여행지입니다.",
              influencer: {
                name: "박거창",
                description: "거창군의 자연과 문화를 알리는 로컬 여행가입니다.",
                image: "img/5.jpg",
                youtubeLink: "https://youtube.com/geochang_influencer"
              }
            },
            {
              name: "고성군",
              description: "고성군은 공룡박물관과 아름다운 해안선이 있는 지역입니다.",
              influencer: {
                name: "김고성",
                description: "고성군의 바다와 역사 문화를 알리는 열정적인 가이드입니다.",
                image: "img/4.jpg",
                youtubeLink: "https://youtube.com/goseong_influencer"
              }
            },
            {
              name: "남해군",
              description: "남해군은 보물섬이라 불리는 아름다운 바다 여행지입니다.",
              influencer: {
                name: "최남해",
                description: "남해군의 해안과 명소를 홍보하는 로컬 전문가입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/namhae_influencer"
              }
            },
            {
              name: "밀양시",
              description: "밀양시는 영남루와 밀양강으로 유명한 역사와 자연의 도시입니다.",
              influencer: {
                name: "이밀양",
                description: "밀양시의 명소와 문화를 알리는 열정 여행가입니다.",
                image: "img/19.jpg",
                youtubeLink: "https://youtube.com/miryang_influencer"
              }
            },
            {
              name: "산청군",
              description: "산청군은 한방약초와 지리산으로 유명한 힐링 여행지입니다.",
              influencer: {
                name: "박산청",
                description: "산청군의 자연과 건강 문화를 소개하는 로컬 가이드입니다.",
                image: "img/20.jpg",
                youtubeLink: "https://youtube.com/sancheong_influencer"
              }
            },
            {
              name: "의령군",
              description: "의령군은 망개떡과 충익사로 유명한 전통이 있는 고장입니다.",
              influencer: {
                name: "김의령",
                description: "의령군의 역사와 문화를 알리는 여행 전문가입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/uireong_influencer"
              }
            },
            {
              name: "창녕군",
              description: "창녕군은 우포늪과 자연생태가 잘 보존된 지역입니다.",
              influencer: {
                name: "최창녕",
                description: "창녕군의 자연과 명소를 알리는 열정적인 가이드입니다.",
                image: "img/11.jpg",
                youtubeLink: "https://youtube.com/changnyeong_influencer"
              }
            },
            {
              name: "하동군",
              description: "하동군은 섬진강과 녹차로 유명한 자연 관광지입니다.",
              influencer: {
                name: "이하동",
                description: "하동군의 자연과 전통을 알리는 로컬 여행자입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/hadong_influencer"
              }
            },
            {
              name: "함안군",
              description: "함안군은 아라가야 유적과 수박으로 유명한 지역입니다.",
              influencer: {
                name: "박함안",
                description: "함안군의 역사와 특산물을 소개하는 여행 전문가입니다.",
                image: "img/10.jpg",
                youtubeLink: "https://youtube.com/hamaan_influencer"
              }
            },
            {
              name: "함양군",
              description: "함양군은 지리산과 산삼으로 유명한 자연 치유의 고장입니다.",
              influencer: {
                name: "김함양",
                description: "함양군의 자연과 건강을 알리는 열정적인 가이드입니다.",
                image: "img/9.jpg",
                youtubeLink: "https://youtube.com/hamyang_influencer"
              }
            },
            {
              name: "합천군",
              description: "합천군은 해인사와 황매산으로 유명한 문화 관광지입니다.",
              influencer: {
                name: "최합천",
                description: "합천군의 역사와 명소를 알리는 로컬 전문가입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/hapcheon_influencer"
              }
            }
            
          ]
        },
        jeonbuk: {
          title: "전라북도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "detail.html", // 경기도 설명 링크
          cities: [
            {
              name: "고창군",
              description: "고창군은 청보리밭과 고창읍성으로 유명한 역사와 자연의 고장입니다.",
              influencer: {
                name: "박고창",
                description: "고창군의 문화와 자연을 소개하는 로컬 여행가입니다.",
                image: "img/8.jpg",
                youtubeLink: "https://youtube.com/gochang_influencer"
              }
            },
            {
              name: "김제시",
              description: "김제시는 넓은 들판과 벽골제로 대표되는 평야의 도시입니다.",
              influencer: {
                name: "김김제",
                description: "김제시의 농업과 전통문화를 알리는 여행 전문가입니다.",
                image: "img/9.jpg",
                youtubeLink: "https://youtube.com/gimje_influencer"
              }
            },
            {
              name: "남원시",
              description: "남원시는 춘향전의 배경과 광한루로 유명한 전통의 도시입니다.",
              influencer: {
                name: "최남원",
                description: "남원시의 전통과 명소를 홍보하는 열정적인 로컬 가이드입니다.",
                image: "img/8.jpg",
                youtubeLink: "https://youtube.com/namwon_influencer"
              }
            },
            {
              name: "무주군",
              description: "무주군은 덕유산과 반딧불축제로 유명한 자연 관광지입니다.",
              influencer: {
                name: "이무주",
                description: "무주군의 산과 자연을 알리는 여행자입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/muju_influencer"
              }
            },
            {
              name: "부안군",
              description: "부안군은 채석강과 변산반도로 유명한 해양 관광지입니다.",
              influencer: {
                name: "박부안",
                description: "부안군의 바다와 자연을 홍보하는 열정적인 여행가입니다.",
                image: "img/5.jpg",
                youtubeLink: "https://youtube.com/buan_influencer"
              }
            },
            {
              name: "순창군",
              description: "순창군은 전통 장류와 강천산으로 유명한 고장입니다.",
              influencer: {
                name: "김순창",
                description: "순창군의 전통과 자연을 소개하는 로컬 가이드입니다.",
                image: "img/11.jpg",
                youtubeLink: "https://youtube.com/sunchang_influencer"
              }
            },
            {
              name: "임실군",
              description: "임실군은 치즈와 농촌 체험으로 유명한 지역입니다.",
              influencer: {
                name: "최임실",
                description: "임실군의 농촌 문화를 알리는 열정 여행가입니다.",
                image: "img/19.jpg",
                youtubeLink: "https://youtube.com/imsil_influencer"
              }
            },
            {
              name: "장수군",
              description: "장수군은 청정 자연과 한우로 유명한 고원 지역입니다.",
              influencer: {
                name: "이장수",
                description: "장수군의 자연과 특산물을 소개하는 로컬 여행자입니다.",
                image: "img/15.jpg",
                youtubeLink: "https://youtube.com/jangsu_influencer"
              }
            },
            {
              name: "정읍시",
              description: "정읍시는 내장산과 단풍으로 유명한 전통의 도시입니다.",
              influencer: {
                name: "박정읍",
                description: "정읍시의 자연과 문화를 알리는 여행 전문가입니다.",
                image: "img/18.jpg",
                youtubeLink: "https://youtube.com/jeongeup_influencer"
              }
            },
            {
              name: "진안군",
              description: "진안군은 마이산과 청정 자연으로 유명한 힐링 여행지입니다.",
              influencer: {
                name: "김진안",
                description: "진안군의 명소와 자연을 홍보하는 로컬 여행가입니다.",
                image: "img/17.jpg",
                youtubeLink: "https://youtube.com/jinan_influencer"
              }
            }
            
          ]
        },
        jeonnam: {
          title: "전라남도",
          description: "경기도는 서울을 둘러싼 핵심 지역입니다.",
          link: "detail.html", // 경기도 설명 링크
          cities: [
            {
              name: "강진군",
              description: "강진군은 다산초당과 청자 마을로 유명한 고장입니다.",
              influencer: {
                name: "박강진",
                description: "강진군의 역사와 전통문화를 알리는 로컬 여행가입니다.",
                image: "img/15.jpg",
                youtubeLink: "https://youtube.com/gangjin_influencer"
              }
            },
            {
              name: "고흥군",
              description: "고흥군은 나로우주센터와 바다 풍경이 아름다운 지역입니다.",
              influencer: {
                name: "김고흥",
                description: "고흥군의 자연과 우주를 알리는 여행 전문가입니다.",
                image: "img/16.jpg",
                youtubeLink: "https://youtube.com/goheung_influencer"
              }
            },
            {
              name: "곡성군",
              description: "곡성군은 섬진강과 기차마을로 유명한 관광지입니다.",
              influencer: {
                name: "최곡성",
                description: "곡성군의 자연과 명소를 소개하는 열정적인 여행자입니다.",
                image: "img/13.jpg",
                youtubeLink: "https://youtube.com/gokseong_influencer"
              }
            },
            {
              name: "구례군",
              description: "구례군은 지리산과 화엄사로 유명한 힐링 명소입니다.",
              influencer: {
                name: "이구례",
                description: "구례군의 산과 전통문화를 알리는 여행 전문가입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/gurye_influencer"
              }
            },
            {
              name: "담양군",
              description: "담양군은 대나무숲과 죽녹원으로 유명한 자연의 도시입니다.",
              influencer: {
                name: "박담양",
                description: "담양군의 자연과 전통을 알리는 로컬 가이드입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/damyang_influencer"
              }
            },
            {
              name: "보성군",
              description: "보성군은 녹차밭과 자연이 어우러진 아름다운 고장입니다.",
              influencer: {
                name: "김보성",
                description: "보성군의 녹차와 힐링 명소를 홍보하는 열정 여행가입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/boseong_influencer"
              }
            },
            {
              name: "신안군",
              description: "신안군은 천사섬과 섬 문화로 유명한 지역입니다.",
              influencer: {
                name: "최신안",
                description: "신안군의 섬과 자연을 알리는 여행자입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/shinan_influencer"
              }
            },
            {
              name: "영광군",
              description: "영광군은 법성포와 찰보리로 유명한 전통의 도시입니다.",
              influencer: {
                name: "이영광",
                description: "영광군의 특산물과 문화를 소개하는 로컬 여행가입니다.",
                image: "img/20.jpg",
                youtubeLink: "https://youtube.com/yeonggwang_influencer"
              }
            },
            {
              name: "영암군",
              description: "영암군은 월출산과 자동차 경주로 유명한 지역입니다.",
              influencer: {
                name: "박영암",
                description: "영암군의 산과 레저를 알리는 열정적인 여행자입니다.",
                image: "img/13.jpg",
                youtubeLink: "https://youtube.com/yeongam_influencer"
              }
            },
            {
              name: "완도군",
              description: "완도군은 청정 해산물과 다도해의 풍경으로 유명합니다.",
              influencer: {
                name: "김완도",
                description: "완도군의 해양 관광과 특산물을 알리는 여행 전문가입니다.",
                image: "img/11.jpg",
                youtubeLink: "https://youtube.com/wando_influencer"
              }
            },
            {
              name: "장성군",
              description: "장성군은 황룡강과 축령산으로 유명한 자연 관광지입니다.",
              influencer: {
                name: "최장성",
                description: "장성군의 자연과 명소를 소개하는 로컬 가이드입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/jangseong_influencer"
              }
            },
            {
              name: "장흥군",
              description: "장흥군은 편백숲과 한방 휴양으로 유명한 지역입니다.",
              influencer: {
                name: "이장흥",
                description: "장흥군의 힐링 명소와 문화를 알리는 여행자입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/jangheung_influencer"
              }
            },
            {
              name: "진도군",
              description: "진도군은 진도개와 바닷길 축제로 유명한 고장입니다.",
              influencer: {
                name: "박진도",
                description: "진도군의 전통과 자연을 알리는 열정적인 여행가입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/jindo_influencer"
              }
            },
            {
              name: "함평군",
              description: "함평군은 나비축제와 생태 관광으로 유명합니다.",
              influencer: {
                name: "김함평",
                description: "함평군의 축제와 자연을 알리는 여행 전문가입니다.",
                image: "img/2.jpg",
                youtubeLink: "https://youtube.com/hampyeong_influencer"
              }
            },
            {
              name: "해남군",
              description: "해남군은 땅끝마을과 대흥사로 유명한 관광지입니다.",
              influencer: {
                name: "최해남",
                description: "해남군의 명소와 문화를 홍보하는 열정적인 로컬 가이드입니다.",
                image: "img/3.jpg",
                youtubeLink: "https://youtube.com/haenam_influencer"
              }
            },
            {
              name: "화순군",
              description: "화순군은 온천과 고인돌 유적으로 유명한 지역입니다.",
              influencer: {
                name: "이화순",
                description: "화순군의 역사와 힐링 명소를 알리는 여행자입니다.",
                image: "img/1.jpg",
                youtubeLink: "https://youtube.com/hwasun_influencer"
              }
            }
            
          ]
        }
        
        
      };

      
      // 초기 상태에서 대한민국 설명을 보여줍니다.
      document.getElementById("region-title").textContent = regionInfo.korea.title;
      document.getElementById("region-description").textContent = regionInfo.korea.description;
      
      // 초기 링크 숨기기
      document.getElementById("region-link").style.display = "none";
      
      let currentRegion = "korea"; // 현재 표시된 지역, 초기값은 대한민국
      
      const regions = document.querySelectorAll(".map-region");
      let activeRegion = null;
      
      regions.forEach(region => {
        region.addEventListener("click", () => {
          const regionId = region.id;
          const info = regionInfo[regionId];
      
          if (!info) return;
      
          // 같은 지역을 다시 클릭하면 대한민국으로 돌아가도록 처리
          if (regionId === currentRegion) {
            // 대한민국 설명으로 되돌리기
            document.getElementById("region-title").textContent = regionInfo.korea.title;
            document.getElementById("region-description").textContent = regionInfo.korea.description;
      
            // 링크 숨기기
            document.getElementById("region-link").style.display = "none";
      
            // 도시 목록 및 정보 숨기기
            document.getElementById("city-container").style.display = "none";
            document.getElementById("city-info").style.display = "none";
            document.getElementById("city-influencer-container").style.display = "none"; // 인플루언서 정보 숨기기
            currentRegion = "korea"; // 현재 지역을 대한민국으로 설정
          } else {
            // 다른 지역을 클릭했을 때 해당 지역 설명 표시
            document.getElementById("region-title").textContent = info.title;
            document.getElementById("region-description").textContent = info.description;
      
            // 지역 설명 링크 처리
            const regionLink = document.getElementById("region-link");
            if (info.link) {
              regionLink.href = info.link;
              regionLink.style.display = "block";
            } else {
              regionLink.style.display = "none";
            }
      
            // 도시 버튼 초기화 및 생성
            const cityContainer = document.getElementById("city-container");
            const cityButtons = document.getElementById("city-buttons");
            cityButtons.innerHTML = "";
      
            info.cities.forEach(city => {
              const button = document.createElement("button");
              button.textContent = city.name;
              button.className = "city-button";
              button.addEventListener("click", () => {
                // 도시 정보 업데이트
                document.getElementById("city-info").style.display = "block";
                document.getElementById("city-name").textContent = city.name;
                document.getElementById("city-description").textContent = city.description;
            
                // 도시 인플루언서 정보 업데이트
                const cityInfluencer = city.influencer;
                const cityInfluencerContainer = document.getElementById("city-influencer-container");
                document.getElementById("city-influencer-image").src = cityInfluencer.image;
                document.getElementById("city-influencer-name").textContent = cityInfluencer.name;
                document.getElementById("city-influencer-description").textContent = cityInfluencer.description;
                document.getElementById("city-influencer-youtube-link").href = cityInfluencer.youtubeLink; // 유튜브 링크만 남김
                cityInfluencerContainer.style.display = "block";
              });
              cityButtons.appendChild(button);
            });
            
      
            cityContainer.style.display = "block";
      
            // 도시 관련 설명 및 인플루언서 정보 초기화
            document.getElementById("city-info").style.display = "none";
            document.getElementById("city-influencer-container").style.display = "none";
      
            currentRegion = regionId; // 현재 지역을 해당 지역으로 설정
          }
      
          // 이전 활성화된 지역의 상태 제거
          if (activeRegion) {
            document.getElementById(activeRegion).classList.remove("active");
          }
          region.classList.add("active");
          activeRegion = regionId;
        });
      });
      