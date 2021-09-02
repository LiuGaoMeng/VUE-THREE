<template>
    <div class="table-container" >
        <Row class="row">
            <Table class="ag-table"
                    border
                    :loading="loading"
                    :columns="columns"
                    :data="allTableData.length==0?tableData:frontTableData"
                    @on-selection-change="selectionChange"
                    @on-row-click="rowClick"
                    @on-sort-change="changeSort"
                    :size="size"
                    :height="tableHeight"
                    ref="innerTable"
                    highlight-row
                    :span-method="handleSpan"
            />
            <div v-if="isShowPage" class="page-container">
                <Page
                        :id="pageId"
                        :total="allTableData.length==0?Number(total):frontTotal"
                        :current="allTableData.length==0?pageNo:frontPageNo"
                        :page-size="allTableData.length==0?pageSize:frontPageSize"
                        @on-change="changPageNum"
                        @on-page-size-change="changPageSize"
                        :show-sizer="showSizer"
                        show-total
                        :show-elevator="showElevator"
                        style="margin-top: 5px;"
                />
                <div class="btn-div" v-show="showElevatorBtn">
                    <Button type="primary" size="small" @click="goElevatorPage(pageId)">跳转</Button>
                </div>
            </div>
        </Row>
    </div>
</template>

<script>

    /**
     * iot-table
     * @description 表格跟分页组件
     * @property {Number,String} tableHeight 表格高度
     * @property {Boolean} loading 是否显示加载中
     * @property {Array} columns 表格列的配置描述
     * @property {Array} tableData 表格数据
     * @property {Number} total 表格数据总数
     * @property {Array} pageNo 页码 默认第一页
     * @property {Array} pageSize 每页显示数量 默认10条
     * @property {Boolean} isShowPage 是否显示分页组件，默认为true显示
     * @property {Arrary} allTableData 前端分页所有的记录
     * 	@value selection 选择中的数据,
     * @value pageId 分页组件ID
     * 	@value frontTotal 前端分页总数,
     * @value frontPageNo 前端分页页码
     * 	@value frontPageSize 前端分页数量,
     * @value frontTableData 前端分页当前数据
     * @event {Function} changPageNum 页码改变的回调，返回参数为pageNo的value，e=pageNo
     * @event {Function} changPageSize 切换每页条数时的回调，返回参数为pageSize的value，e=pageSize
     * @event {Function} selectionChange 选中的数据，赋值给selection，父组件通过$refs获取，例如: let selections = vm.$refs['selection'].selection;
     *                                   同时返回选择的每一行数据。
     * @event {Function} goElevatorPage 跳转页面
     *
     * 服务端分页
     <iot-table :columns="tableColumns" :tableData="tableData" :total="total" :pageSize="pageSize" :pageNo="pageNo" ref="selection"
     @on-changPageNum="changePage" @on-changPageSize="changPageSize"></iot-table>

     前端分页-->
     <iot-table :columns="tableColumns" :allTableData="tableData"  ref="selection" ></iot-table>-->
     */

    export default {
        name: "ag-table",
        props:{
            border :{
                type:Boolean,
                default:false
            },
            tableHeight:{
                type:[Number,String],
                default:'520'
            },
            loading:{
                type:Boolean,
                default:false
            },
            columns:{
                type:[Array],
                default(){
                    return [];
                }
            },
            allTableData:{
                type:[Array],
                default(){
                    return [];
                }
            },
            tableData:{
                type:[Array],
                default(){
                    return [];
                }
            },
            total:{
                type:[String,Number],
                default:0
            },
            pageNo:{
                type:Number,
                default:1
            },
            pageSize:{
                type:Number,
                default:10
            },
            isShowPage:{
                type:Boolean,
                default:true
            },
            handleSpan:{
                type:Function ,
                default(){
                    return {};
                }
            },
            showSizer :{
                type:Boolean,
                default:true
            },
            showElevator :{
                type:Boolean,
                default:true
            },
            showElevatorBtn:{
                type:Boolean,
                default:true
            },
            size:{
                type:String,
                default:'default'
            },
            frontPageSize:{
                type:Number,
                default:10
            },
        },
        data() {
            return {
                selection: [],
                pageId: "targetpage_"+this.$route.fullPath,
                frontTotal:0,
                frontPageNo:1,
                // frontPageSize:10,
                frontTableData:[]
            }
        },
        methods:{
            //初始化选中事件
            setChecked(selecteds,key) {
                if(selecteds && key && selecteds.length){
                    var _this = this;
                    for(let index in _this.$refs.innerTable.objData){
                        let item = _this.$refs.innerTable.objData[index];
                        if(selecteds.indexOf(item[key])!=-1){
                            _this.$refs.innerTable.objData[index]._isChecked = true;
                        }
                    }
                }
            },
            //排序
            changeSort({column,key,order}){
                this.$emit("on-sort-change",{column,key,order})
            },
            changPageNum(e){
                if(this.allTableData.length>0){
                    this.frontPageNo = e;
                    let _start = ( e - 1 ) * this.frontPageSize;
                    let _end = e * this.frontPageSize;
                    this.frontTableData = this.allTableData.slice(_start,_end);

                }else{
                    this.$emit("on-changPageNum",e);
                }
            },
            changPageSize(e){
                if(this.allTableData.length>0){
                    let _start = ( this.frontPageNo - 1 ) * e;
                    let _end = this.frontPageNo * e;
                    this.frontTableData = this.allTableData.slice(_start,_end);
                    // 当前展示条数
                    this.pageSize = e;

                }else{
                    this.$emit("on-changPageSize",e);
                }


            },
            rowClick(row,idx){
                this.$emit("on-rowClick", row, idx);
            },
            selectionChange(data){
                this.selection = data;
                this.$emit("on-selectionChange",data);
            },
            goElevatorPage:function(pageId){
                var evtObj;
                var thisPage=document.getElementById(pageId);
                var elevatorDiv=thisPage.getElementsByClassName("ivu-page-options-elevator");
                if(elevatorDiv && elevatorDiv.length>0){
                    var pageInput = elevatorDiv[0].getElementsByTagName("input")[0];
                    if (window.KeyEvent) {//firefox 浏览器下模拟事件
                        evtObj = document.createEvent('KeyEvents');
                        evtObj.initKeyEvent("keyup", true, true, window, true, false, false, false, 13, 0);
                    } else {//chrome 浏览器下模拟事件
                        evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent("keyup", true, true, window, 1);
                        delete evtObj.keyCode;
                        if (typeof evtObj.keyCode === "undefined") {//为了模拟keycode
                            Object.defineProperty(evtObj, "keyCode", { value: 13 });
                        } else {
                            evtObj.key = String.fromCharCode(13);
                        }
                    }
                    pageInput.dispatchEvent(evtObj);
                }
            }
        },
        watch:{
            'allTableData'(){
                if(this.allTableData.length>0){
                    this.frontTotal = this.allTableData.length;
                    // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                    if(this.frontTotal < this.pageSize){
                        this.frontTableData = this.allTableData;
                    }else{
                        this.frontTableData = this.allTableData.slice(0,this.pageSize);
                    }

                }
            }
        }
    }
</script>

<style scoped>
    .table-container{
        width: 100%;
    }
    .ag-table{
        width: 100%;
    }
    .page-container{
        display: flex;
    }
    .btn-div{
        margin-left: 10px;
        margin-top: 12px
    }

</style>
