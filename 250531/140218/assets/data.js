/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 9,
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
	RANDOM:682663,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"0", y:"253", width:"476", height:"319", opacity:"100", normalImage:"1749790945865.gif", rolloverImage:"", link:""}
],
[6,{type:"image", id:"Image_2", name:"noname", visible:"true", x:"0", y:"253", width:"476", height:"319", opacity:"100", normalImage:"1749791190306.gif", rolloverImage:"", link:""}
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
		/*9*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"큰 글씨", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"2"},
		{text:"작은 글씨", textColor:"0xffffff,100", backgroundColor:"0x000000,100", link:"6"}]
	};