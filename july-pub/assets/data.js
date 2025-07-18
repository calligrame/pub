/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 86,
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
	RANDOM:183714,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"14",label:"터에서 치르다",url:"",child:"0",id:"8",parent:"2"},
		{index:"20",label:"I'll land, 글로벌",url:"",child:"0",id:"9",parent:"2"},
		{index:"26",label:"Hybrid",url:"",child:"2",id:"3",parent:"0"},
		{index:"26",label:"人site 테이블",url:"",child:"0",id:"10",parent:"3"},
		{index:"36",label:"제주 모먼트",url:"",child:"0",id:"11",parent:"3"},
		{index:"44",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"44",label:"함께하는 JDC",url:"",child:"0",id:"12",parent:"4"},
		{index:"50",label:"JDC 컬렉션",url:"",child:"0",id:"13",parent:"4"},
		{index:"62",label:"Multiplay",url:"",child:"2",id:"5",parent:"0"},
		{index:"62",label:"예술과 Thumb타기",url:"",child:"0",id:"14",parent:"5"},
		{index:"68",label:"제주 말씸 지킴이",url:"",child:"0",id:"15",parent:"5"},
		{index:"72",label:"Beyond",url:"",child:"2",id:"6",parent:"0"},
		{index:"72",label:"ESG 리포트",url:"",child:"0",id:"16",parent:"6"},
		{index:"78",label:"모다들엉 마당",url:"",child:"0",id:"17",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[3,{type:"video", id:"Video_1", name:"noname", visible:"true", x:"-115", y:"0", width:"1890", height:"2942", normalImage:"1752137854302.jpg", movieURL:"1752109923313.mp4"},
{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"true", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"188", y:"2140", width:"180", height:"188", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"461", y:"2137", width:"194", height:"203", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"756", y:"2134", width:"169", height:"177", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"1016", y:"2124", width:"186", height:"194", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"176", y:"1655", width:"175", height:"183", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[8,{type:"video", id:"Video_0", name:"noname", visible:"false", x:"0", y:"1190", width:"1700", height:"1193", normalImage:"", movieURL:"1752035845125.mp4"},
{type:"image", id:"Image_24", name:"noname", visible:"false", x:"0", y:"1190", width:"1700", height:"1193", opacity:"100", normalImage:"1752109988537.gif", rolloverImage:"", link:""},
{type:"image", id:"Image_0", name:"noname", visible:"true", x:"5", y:"1018", width:"1395", height:"936", opacity:"100", normalImage:"1752035806186.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_0", name:"액션Image_0", dispatcher:"Image_0", event:"onRelease", target:"Image_24", action:"toggleVisible"}
],
[14,{type:"video", id:"Video_3", name:"noname", visible:"false", x:"189", y:"808", width:"1364", height:"1348", normalImage:"", movieURL:"1752038428937.mp4"},
{type:"image", id:"Image_25", name:"noname", visible:"false", x:"181", y:"802", width:"1356", height:"1348", opacity:"100", normalImage:"1752110029245.gif", rolloverImage:"", link:""},
{type:"image", id:"Image_6", name:"noname", visible:"true", x:"453", y:"1013", width:"1054", height:"1409", opacity:"100", normalImage:"1752038370428.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_6", name:"액션Image_6", dispatcher:"Image_6", event:"onRelease", target:"Image_25", action:"toggleVisible"}
],
[19,{type:"image", id:"Image_7", name:"noname", visible:"true", x:"1050", y:"2080", width:"432", height:"264", opacity:"100", normalImage:"1752038874515.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/prcenter/displaywork/support.cs?t=detail&s=2&st=0"}
],
[23,{type:"imageSlider", id:"ImageSlider_6", name:"noname", visible:"true", x:"0", y:"1413", width:"1649", height:"938", mode:"slide", normalImage:"1752129343992.jpg", link:"address|_blank|", normalImage1:"1752129344186.jpg", link1:"address|_blank|", normalImage2:"1752129344234.jpg", link2:"address|_blank|", normalImage3:"1752129344276.jpg", link3:"address|_blank|"}
],
[28,{type:"image", id:"Image_17", name:"noname", visible:"false", x:"0", y:"443", width:"1700", height:"1921", opacity:"100", normalImage:"1752042350586.png", rolloverImage:"", link:""}
],
[35,{type:"youtube", id:"Youtube_0", name:"noname", visible:"true", x:"0", y:"1350", width:"1700", height:"966", youtubeURL:"https://youtu.be/Va32GBaT1mI?si=1i51yhITImE_aIW_"}
],
[36,{type:"youtube", id:"Youtube_3", name:"noname", visible:"true", x:"0", y:"840", width:"1700", height:"966", youtubeURL:"https://youtu.be/Xh8drnVIEdI?si=tk8xk9JQSPGJY43N"}
],
[39,{type:"image", id:"Image_18", name:"noname", visible:"false", x:"160", y:"1430", width:"1460", height:"870", opacity:"100", normalImage:"1752042518582.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_2", name:"noname", visible:"true", x:"192", y:"1428", width:"1460", height:"870", mode:"slide", normalImage:"1752043462209.jpg", link:"address|_blank|", normalImage1:"1752043462254.jpg", link1:"address|_blank|", normalImage2:"1752043462292.jpg", link2:"address|_blank|", normalImage3:"1752043462333.jpg", link3:"address|_blank|"}
],
[40,{type:"image", id:"Image_19", name:"noname", visible:"false", x:"0", y:"1430", width:"1460", height:"870", opacity:"100", normalImage:"1752042554246.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_3", name:"noname", visible:"true", x:"0", y:"1430", width:"1460", height:"870", mode:"slide", normalImage:"1752043895714.jpg", link:"address|_blank|", normalImage1:"1752043895762.jpg", link1:"address|_blank|", normalImage2:"1752043895808.jpg", link2:"address|_blank|", normalImage3:"1752043895852.jpg", link3:"address|_blank|", normalImage4:"1752043895897.jpg", link4:"address|_blank|"}
],
[42,{type:"youtube", id:"Youtube_5", name:"noname", visible:"true", x:"0", y:"1300", width:"1700", height:"966", youtubeURL:"https://youtu.be/Oml3d-xaa8Y?si=7F6RZUzLRGeGwSQK"}
],
[49,{type:"youtube", id:"Youtube_4", name:"noname", visible:"false", x:"0", y:"372", width:"1860", height:"1057", youtubeURL:"https://youtu.be/KSTBUl9kbvk?si=t2dRFXgEYNcTBq44"},
{type:"image", id:"Image_13", name:"noname", visible:"true", x:"403", y:"1750", width:"1070", height:"620", opacity:"100", normalImage:"1752041034134.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_13", name:"액션Image_13", dispatcher:"Image_13", event:"onRelease", target:"Youtube_4", action:"toggleVisible"},
{type:"image", id:"Image_14", name:"noname", visible:"true", x:"403", y:"1501", width:"529", height:"155", opacity:"100", normalImage:"1752041040407.png", rolloverImage:"", link:"address|_blank|https://www.jdc-jam.com/community/signLanguage.do"},
{type:"youtube", id:"Youtube_6", name:"noname", visible:"true", x:"423", y:"1733", width:"1033", height:"572", youtubeURL:"https://youtu.be/KSTBUl9kbvk?si=uXQxjRkUGdCWTON0"}
],
[52,{type:"image", id:"Image_29", name:"noname", visible:"true", x:"1066", y:"2117", width:"416", height:"206", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=103733&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=103733&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1358.1&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[56,{type:"image", id:"Image_30", name:"noname", visible:"true", x:"1066", y:"130", width:"420", height:"179", opacity:"100", normalImage:"1752138171247.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=101572&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=101572&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1358.1&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[60,{type:"image", id:"Image_15", name:"noname", visible:"true", x:"1084", y:"932", width:"366", height:"127", opacity:"100", normalImage:"1752041479865.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/alcgnbproduct.do?gnbCd=120000&type=120000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD=120000&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=120000&PROD_TYPE=120000&REMT_RCV_EXCHR=1364.2&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="},
{type:"image", id:"Image_16", name:"noname", visible:"true", x:"474", y:"308", width:"377", height:"464", opacity:"100", normalImage:"1752041453900.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/event/eventDetail.do?serNo=1000000550"}
],
[61,{type:"imageSlider", id:"ImageSlider_0", name:"noname", visible:"false", x:"1227", y:"86", width:"356", height:"119", mode:"slide", normalImage:"1752040094080.png", link:"address|_blank|"},
{type:"image", id:"Image_12", name:"noname", visible:"true", x:"1109", y:"133", width:"356", height:"119", opacity:"100", normalImage:"1752040105502.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/event/eventDetail.do?serNo=1000000546"}
],
[65,{type:"image", id:"Image_21", name:"noname", visible:"false", x:"0", y:"0", width:"1700", height:"2350", opacity:"100", normalImage:"1752044623371.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_5", name:"noname", visible:"true", x:"0", y:"0", width:"1700", height:"2350", mode:"slide", normalImage:"1752045475501.jpg", link:"address|_blank|", normalImage1:"1752045475553.jpg", link1:"address|_blank|", normalImage2:"1752045475598.jpg", link2:"address|_blank|", normalImage3:"1752045475635.jpg", link3:"address|_blank|"}
],
[67,{type:"image", id:"Image_20", name:"noname", visible:"true", x:"864", y:"1480", width:"580", height:"840", opacity:"100", normalImage:"1752045504777.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_20", name:"액션Image_20", dispatcher:"Image_20", event:"onRelease", target:"Image_23", action:"toggleVisible"},
{type:"image", id:"Image_23", name:"noname", visible:"false", x:"0", y:"0", width:"1700", height:"2350", opacity:"100", normalImage:"1752045651132.jpg", rolloverImage:"", link:""}
],
[83,{type:"image", id:"Image_26", name:"noname", visible:"true", x:"1048", y:"702", width:"435", height:"170", opacity:"100", normalImage:"1752111259116.png", rolloverImage:"", link:"address|_blank|http://pf.kakao.com/_xcuXxcb"}
],
[84,{type:"image", id:"Image_31", name:"", visible:"true", x:"164", y:"1222", width:"423", height:"205", opacity:"100", normalImage:"1752805707930.png", rolloverImage:"", link:"address|_blank|https://forms.gle/WvHgAwnZxh6GFNqCA"}
],
[86,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"680", y:"2214", width:"312", height:"202", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
]],
	
	textList : [ /** 본문 검색 */
		/*1*/	"",
		/*2*/	"",
		/*3*/	"",
		/*4*/	"",
		/*5*/	"",
		/*6*/	"",
		/*7*/	"",
		/*8*/	"",
		/*9*/	"",
		/*10*/	"",
		/*11*/	"",
		/*12*/	"",
		/*13*/	"",
		/*14*/	"",
		/*15*/	"",
		/*16*/	"",
		/*17*/	"",
		/*18*/	"",
		/*19*/	"",
		/*20*/	"",
		/*21*/	"",
		/*22*/	"",
		/*23*/	"",
		/*24*/	"",
		/*25*/	"",
		/*26*/	"",
		/*27*/	"",
		/*28*/	"",
		/*29*/	"",
		/*30*/	"",
		/*31*/	"",
		/*32*/	"",
		/*33*/	"",
		/*34*/	"",
		/*35*/	"",
		/*36*/	"",
		/*37*/	"",
		/*38*/	"",
		/*39*/	"",
		/*40*/	"",
		/*41*/	"",
		/*42*/	"",
		/*43*/	"",
		/*44*/	"",
		/*45*/	"",
		/*46*/	"",
		/*47*/	"",
		/*48*/	"",
		/*49*/	"",
		/*50*/	"",
		/*51*/	"",
		/*52*/	"",
		/*53*/	"",
		/*54*/	"",
		/*55*/	"",
		/*56*/	"",
		/*57*/	"",
		/*58*/	"",
		/*59*/	"",
		/*60*/	"",
		/*61*/	"",
		/*62*/	"",
		/*63*/	"",
		/*64*/	"",
		/*65*/	"",
		/*66*/	"",
		/*67*/	"",
		/*68*/	"",
		/*69*/	"",
		/*70*/	"",
		/*71*/	"",
		/*72*/	"",
		/*73*/	"",
		/*74*/	"",
		/*75*/	"",
		/*76*/	"",
		/*77*/	"",
		/*78*/	"",
		/*79*/	"",
		/*80*/	"",
		/*81*/	"",
		/*82*/	"",
		/*83*/	"",
		/*84*/	"",
		/*85*/	"",
		/*86*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"26"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"44"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"62"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"72"}]
	};