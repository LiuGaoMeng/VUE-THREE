<template>
  <div>
    <div class="tit">测试区</div>
    <div class="home">
      <div class="test-area">
        <AgTable :columns="tableColumns" :tableData="tableData"></AgTable>
      </div>
    </div>
  </div>
</template>

<script> 
import AgTable from '../components/ag-table'

export default {
  name: 'Test',
  components: {
    AgTable
  },
  data() {
    return {
      tableColumns:[
        {
              title: '站点名称',
              key: 'name',
              align: 'center'
          },
        {
              title: '站点编号',
              key: 'id',
              align: 'center'
          },
        {
              title: '站点状态',
              key: 'status',
              align: 'center'
          }
      ],
      tableData:[
        {name:'站点1',id:'1231',status:'正常'},
        {name:'站点2',id:'1232',status:'正常'},
        {name:'站点3',id:'1233',status:'预警'},
        {name:'站点3',id:'1233',status:'预警'},
        {name:'站点3',id:'1233',status:'预警'},
        {name:'站点1',id:'1231',status:'正常'},
        {name:'站点2',id:'1232',status:'正常'},
        {name:'站点3',id:'1233',status:'预警'},
        {name:'站点3',id:'1233',status:'预警'},
        {name:'站点3',id:'1233',status:'预警'}
      ]
    }
  },
}
</script>
<style scoped>
.tit{
  text-align: center;

}
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
.test-area{
  width: 600px;
}
</style>
