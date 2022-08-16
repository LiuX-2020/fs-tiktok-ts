Component({
    properties: {
        // 这里定义了 headerText 属性，属性值可以在组件使用时指定
        headerText: {
            type: String,
            value: "默认标题文案",
            observer(newVal, oldVal) {
                console.log(newVal, oldVal)
            },
        },
        weatherList: {
            type: Array,
            value: [],
            observer(newVal, oldVal) {
                console.log(newVal, oldVal)
            },
        },
    },
    data: {
        // 组件内部数据
        defaultStates: {},
    },
    methods: {
        // 自定义方法
        onTap: function (e: any): void {
            // console.log('2');
            console.log(e.currentTarget.dataset.item)
            this.triggerEvent("onTapsss", {});
        }
    },
    // handClick():void { },
});