<template>
  <div></div>
</template>
<script>
/* eslint-disable */
export default {
  name: '13',
  // mixins: [],
  // components: {},
  // props: {},
  data() {
    return {};
  },
  // computed: {},
  // filters: {},
  // watch:{},
  // created() {},
  // mounted() {},
  // beforeRouteEnter(to, from, next) { next(vm => {}) },
  // beforeRouteUpdate(to, from, next) {},
  // beforeRouteLeave(to, from, next) {},
  // beforeDestroy() {},
  // destroyed() {},
  methods: {
    validtateReportAndFileNameruleUnique(result) {
      const reportCodeMap = new Map();
      const validResult = [];
      const bridgeKey = '===';
      for (let i = 0, len = result.length; i < len; i++) {
        const row = result[i];
        // file_namerule 是已经排序过的数字
        const { report_code, file_namerule = '' } = row;
        const fileNameruleList = file_namerule.split(',').filter((_) => _);

        if (fileNameruleList.length > 0) {
          fileNameruleList.forEach((fileFormat) => {
            // 拼接一下作为唯一的key
            const key = `${report_code}${bridgeKey}${fileFormat}`;
            if (reportCodeMap.has(key)) {
              validResult.push(key);
            } else {
              reportCodeMap.set(key, true);
            }
          });
        } else {
          // 有些报表可以不选择文件格式
          const key = report_code;
          if (reportCodeMap.has(key)) {
            validResult.push(key);
          } else {
            reportCodeMap.set(key, true);
          }
        }
      }
      reportCodeMap.clear();

      if (validResult.length > 0) {
        const msgMap = {};
        validResult.forEach((key) => {
          const [report_code, fileFormat = ''] = key.split(bridgeKey);
          const reportName = this.getReportNameByCode(report_code);
          if (!msgMap[reportName]) {
            msgMap[reportName] = [];
          }
          msgMap[reportName].push(fileFormat);
        });
        const msgList = [];
        for (let key of Object.keys(msgMap)) {
          const reportName = key;
          const fileFormatList = msgMap[key].filter((_) => _);
          if (fileFormatList.length > 0) {
            const fileFormatLabel = uniq(fileFormatList)
              .map((fileFormat) => fileFormatValueLabelMap[fileFormat])
              .join('、');
            const msg = `${reportName}，${fileFormatLabel}格式`;
            msgList.push(msg);
          } else {
            const msg = `${reportName}`;
            msgList.push(msg);
          }
        }
        log('%c 检验报表和文件格式合在一起的唯一性');
        log(msgList);
        this.showMsgInfo('请勿重复选择报表：' + msgList.join('；'));

        return false;
      }
      return true;
    }
  }
};
</script>
<style lang="stylus" scoped></style>
