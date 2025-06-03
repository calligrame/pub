/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 19,
	useLogo				: false,
	logoUrl				: "",
	homeUrl				: "",
	useBooklist			: "false",
	
	pageView : {
		type			: "flip",
		side			: "auto",
		duration		: 500,
		cover			: true,
		pagezoom	 	:  "400",
		
		},
	
	pageshadow:false,
	pagearea:true,
	pagesound:"sound1",
	intro:"basic",
	RANDOM:866290,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"",label:"Touch",url:"",child:"2",id:"2",parent:"0"},
		{index:"6",label:"JDC 비전웨이브 | 10년의 침묵을 뚫고 부활하는 예래단지 ",url:"",child:"0",id:"3",parent:"2"},
		{index:"",label:"터에서 치르다 | 제주먹거리통합지원센터 건립 청사진 ",url:"",child:"0",id:"8",parent:"2"},
		{index:"",label:"Hybrid",url:"",child:"2",id:"11",parent:"0"},
		{index:"",label:"I'll land, 글로벌 | Cognita와 함께하는 제주영어교육도시의 새로운 도약",url:"",child:"0",id:"14",parent:"11"},
		{index:"10",label:"人site 테이블 | Between Mount Halla and the River Thames ",url:"",child:"0",id:"16",parent:"11"},
		{index:"",label:"Unique",url:"",child:"2",id:"17",parent:"0"},
		{index:"14",label:"Tasting JDC | 쫀득함으로 세계를 사로잡는 오메기떡 ",url:"",child:"0",id:"18",parent:"17"},
		{index:"",label:"JDC 컬렉션 | 여름 휴가철 JDC면세점 BEST 10 ",url:"",child:"0",id:"19",parent:"17"},
		{index:"",label:"Multiplay",url:"",child:"2",id:"20",parent:"0"},
		{index:"16",label:"예술과 Thumb타기 | 서양미술 400년, 명화로 읽다 〈모네에서 앤디워홀까지〉 ",url:"",child:"0",id:"21",parent:"20"},
		{index:"",label:"제주 모먼트 | 2025년 6월 제주 축제 가이드 ",url:"",child:"0",id:"22",parent:"20"},
		{index:"",label:"Beyond",url:"",child:"3",id:"23",parent:"0"},
		{index:"",label:"ESG 리포트 | JDC의 2025 ESG 경영 강화",url:"",child:"0",id:"24",parent:"23"},
		{index:"",label:"모다들엉 마당 | JDC 뉴스 및 독자참여 코너",url:"",child:"0",id:"26",parent:"23"},
		{index:"",label:"Next 섬네일 | 2025년 7월호 미리보기 ",url:"",child:"0",id:"27",parent:"23"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_4", name:"noname", visible:"true", x:"0", y:"0", width:"1450", height:"2590", normalImage:"", movieURL:"1748940691264.mp4"}
],
[6,{type:"image", id:"Image_4", name:"noname", visible:"true", x:"-41", y:"1078", width:"1800", height:"1320", opacity:"100", normalImage:"1748827905652.gif", rolloverImage:"", link:""}
],
[13,{type:"youtube", id:"Youtube_0", name:"noname", visible:"true", x:"0", y:"1400", width:"1420", height:"900", youtubeURL:"https://youtu.be/zK5l5WZLjag?si=HYz8VF86CdZEw3rl"}
],
[15,{type:"image", id:"Image_5", name:"noname", visible:"false", x:"0", y:"600", width:"1712", height:"1152", opacity:"100", normalImage:"1748749509332.jpg", rolloverImage:"", link:""},
{type:"image", id:"Image_7", name:"noname", visible:"true", x:"407", y:"1557", width:"983", height:"860", opacity:"100", normalImage:"1748942966630.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_7", name:"액션Image_7", dispatcher:"Image_7", event:"onRelease", target:"Image_5", action:"toggleVisible"}
],
[18,{type:"imageSlider", id:"ImageSlider_0", name:"noname", visible:"true", x:"150", y:"1430", width:"1260", height:"868", mode:"slide", normalImage:"1748831997561.jpg", link:"address|_blank|", normalImage1:"1748831997602.jpg", link1:"address|_blank|", normalImage2:"1748831997634.jpg", link2:"address|_blank|"}
],
],
	
	textList : [ /** 본문 검색 */
		/*1*/	"",
		/*2*/	"",
		/*3*/	"",
		/*4*/	"",
		/*5*/	"",
		/*6*/	"",
		/*7*/	"",
		/*8*/	"",
		/*9*/	"",
		/*10*/	"",
		/*11*/	"",
		/*12*/	"",
		/*13*/	"",
		/*14*/	"",
		/*15*/	"Click!",
		/*16*/	"",
		/*17*/	"",
		/*18*/	"",
		/*19*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		]
	};