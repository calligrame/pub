/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 15,
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
	RANDOM:465508,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_1", name:"noname", visible:"true", x:"0", y:"0", width:"700", height:"1280", normalImage:"", movieURL:"1748749833241.mp4"}
],
[6,{type:"image", id:"Image_4", name:"noname", visible:"true", x:"-47", y:"548", width:"876", height:"590", opacity:"100", normalImage:"1748827905652.gif", rolloverImage:"", link:""}
],
[13,{type:"youtube", id:"Youtube_0", name:"noname", visible:"true", x:"0", y:"700", width:"700", height:"440", youtubeURL:"https://youtu.be/zK5l5WZLjag?si=HYz8VF86CdZEw3rl"}
],
[15,{type:"image", id:"Image_0", name:"noname", visible:"true", x:"141", y:"880", width:"548", height:"318", opacity:"100", normalImage:"1748749480810.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_0", name:"액션Image_0", dispatcher:"Image_0", event:"onRelease", target:"Image_1", action:"toggleVisible"},
{type:"image", id:"Image_1", name:"noname", visible:"false", x:"0", y:"424", width:"856", height:"576", opacity:"100", normalImage:"1748749509332.jpg", rolloverImage:"", link:""}
]],
	
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
		/*14*/	"",
		/*15*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		]
	};