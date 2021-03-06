window.mock = [
    {
        type:"hidden",
        field:"id",
        value:"14"
    },
    {
        type:"input",
        title:"商品名称",//label名称
        field:"goods_name",//字段名称
        value:"iphone 7",//input值,
        props: {
            "type": "text", //输入框类型，可选值为 text、password、textarea、url、email、date
            "clearable":false, //是否显示清空按钮
            "disabled": false, //设置输入框为禁用状态
            "readonly": false, //设置输入框为只读
            "rows": 4, //文本域默认行数，仅在 textarea 类型下有效
            "autosize": false, //自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }
            "number": false, //将用户的输入转换为 Number 类型
            "autofocus": false, //自动获取焦点
            "autocomplete": "off", //原生的自动完成功能，可选值为 off 和 on
            "placeholder": "请输入商品名称", //占位文本
            "size": "default", //输入框尺寸，可选值为large、small、default或者不设置,
            "spellcheck": false //原生的 spellcheck 属性
        },
        validate:[
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
        ]

    },
    {
        type:"radio",
        title:"是否包邮",//label名称
        field:"is_postage",//字段名称
        value:"0",//input值,
        options:[
            {value:"0",label:"不包邮",disabled:false},
            {value:"1",label:"包邮",disabled:true}
        ],
        props: {
            "type":undefined, //可选值为 button 或不填，为 button 时使用按钮样式
            "size":"default", //单选框的尺寸，可选值为 large、small、default 或者不设置
            "vertical":false //是否垂直排列，按钮样式下无效
        },
        validate:[]

    },
    {
        type:"checkbox",
        title:"标签",//label名称
        field:"label",//字段名称
        value:[
            "1","2","3"
        ],//input值,
        options:[
            {value:"1",label:"好用",disabled:true},
            {value:"2",label:"方便",disabled:false},
            {value:"3",label:"实用",disabled:false},
            {value:"4",label:"有效",disabled:false}
        ],
        props: {
            "size":"default", //多选框组的尺寸，可选值为 large、small、default 或者不设置
        },
        validate:[]

    },
    {
        type:"switch",
        title:"是否上架",//label名称
        field:"is_show",//字段名称
        value:"1",//input值,
        props: {
            "size":"default", //开关的尺寸，可选值为large、small、default或者不写。建议开关如果使用了2个汉字的文字，使用 large。
            "disabled":false,//禁用开关
            "trueValue":"1", //选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
            "falseValue":"0" //没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
        },
        slot: {
            open:"上架", //自定义显示打开时的内容
            close:"下架" //自定义显示关闭时的内容
        }, //slot可以不用配置
        validate:[]
    },
    {
        type: "select",
        field: "cate_id",
        title: "产品分类",
        props: {
            "multiple": true, //是否支持多选
            "clearable": false, //是否可以清空选项，只在单选时有效
            "filterable": false, //	是否支持搜索
            // 暂不支持远程搜索
            // "remote": false, //是否使用远程搜索
            // "remote-method":Function, //远程搜索的方法
            // "loading": false, //当前是否正在远程搜索
            // "loading-text": "加载中", //远程搜索中的文字提示
            "size":"default", //选择框大小，可选值为large、small、default或者不填
            "placeholder": "请选择", //选择框默认文字
            "not-found-text": "无匹配数据", //当下拉列表为空时显示的内容
            "placement": "bottom", //弹窗的展开方向，可选值为 bottom 和 top
            "disabled": false //是否禁用
        },
        value: ["104","105"],
        options: [
            {"value": "104", "label": "生态蔬菜", "disabled": false},
            {"value": "105", "label": "新鲜水果", "disabled": false}
        ]
    },
    {
        type: "DatePicker",
        field: "section_day",
        title: "活动日期",
        value: 1519110955000 || new Date(), //input值, type为daterange,datetimerange value为数组 [start_value,end_value]
        props: {
            "type": "date", //显示类型，可选值为 date、daterange、datetime、datetimerange、year、month
            "format": "yyyy-MM-dd", //展示的日期格式
            "placement": "bottom-start", //	日期选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end
            "placeholder":"请选择获得时间", //占位文本
            "confirm":false, //是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭
            "size":"default", //尺寸，可选值为large、small、default或者不设置
            "disabled":false, //是否禁用选择器
            "clearable":true, //是否显示清除按钮
            "readonly":false, //完全只读，开启后不会弹出选择器
            "editable":false, //文本框是否可以输入
        },
        validate:[]
    },
    {
        type: "TimePicker",
        field: "section_time",
        title: "活动时间",
        value: [], //input值, type为timerange value为数组 [start_value,end_value]
        props: {
            "type": "timerange", //显示类型，可选值为 time、timerange
            "format": "HH:mm:ss", //展示的时间格式
            "steps": [], //下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。
            "placement": "bottom-start", //	时间选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end
            "placeholder":"请选择获得时间", //占位文本
            "confirm":false, //是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭
            "size":"default", //尺寸，可选值为large、small、default或者不设置
            "disabled":false, //是否禁用选择器
            "clearable":true, //是否显示清除按钮
            "readonly":false, //完全只读，开启后不会弹出选择器
            "editable":false, //文本框是否可以输入
        },
        validate:[]
    },
    {
        type: "InputNumber",
        field: "sort",
        title: "排序",
        value: 0, //input值
        props: {
            "max": undefined, //最大值
            "min": undefined, //最小值
            "step": 1, //每次改变的步伐，可以是小数
            "size":"default", //输入框尺寸，可选值为large、small、default或者不填
            "disabled":false, //设置禁用状态
            "readonly":false, //是否设置为只读
            "editable":true, //是否可编辑
            "precision":0, //数值精度
        },
        validate:[]
    },
    {
        type: "ColorPicker",
        field: "coloe",
        title: "颜色",
        value: '#ff7271', //input值
        props: {
            "alpha": false, //是否支持透明度选择
            "hue": true, //是否支持色彩选择
            "recommend": false, //是否显示推荐的颜色预设
            "size":"default", //尺寸，可选值为large、small、default或者不设置
            "colors":[], //自定义颜色预设
            "format":"hex" //颜色的格式，可选值为 hsl、hsv、hex、rgb,开启 alpha 时为 rgb，其它为 hex
        },
        validate:[]
    },
    {
        type: "Upload",
        field: "pic",
        title: "轮播图",
        value: [], //input值
        props: {
            "type":"select", //上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）
            "action": "", //上传的地址，必填
            "headers": {}, //设置上传的请求头部
            "multiple": false, //是否支持多选文件
            "data":{}, //上传时附带的额外参数
            "name":"", //上传的文件字段名
            "with-credentials":false, //支持发送 cookie 凭证信息
            "show-upload-list":true, //是否显示已上传文件列表
            "accept":"", //接受上传的文件类型
            "format":[], //支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用
            "max-size":undefined, //文件大小限制，单位 kb
            "beforeUpload":()=>{}, //上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
            "onProgress":()=>{}, //文件上传时的钩子，返回字段为 event, file, fileList
            "onSuccess":function (push) {
                push('/public/uploads/store/product/s_5a7524ca1aa55.jpg');
            }, //文件上传成功时的钩子，返回字段为 push, response, file, fileList, push(filePath) 将上传后的路径添加到value中
            "onError":()=>{}, //文件上传失败时的钩子，返回字段为 error, file, fileList
            "onPreview":()=>{}, //点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
            "onRemove":()=>{}, //文件列表移除文件时的钩子，返回字段为 file, fileList
            "onFormatError":()=>{}, //文件格式验证失败时的钩子，返回字段为 file, fileList
            "onExceededSize":()=>{}, //文件超出指定大小限制时的钩子，返回字段为 file, fileList
            "default-file-list":[
                {
                    name: 'img1.jpg',
                    url: 'http://qiuyuan.kycms.net/public/uploads/store/product/s_5a7524ca1aa55.jpg'
                },
                {
                    name: 'img2.jpg',
                    url: 'http://www.xxx.com/img2.jpg'
                }
            ] // 默认已上传的文件列表
        },
        validate:[]
    }
];