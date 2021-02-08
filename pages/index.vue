<template>
  <div>
    base
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    // let res = await ctx.$axios.$get({
    //   url: "https://xiaozhuslb.laoyaojing.net//business/public/getHomeBlock"
    // });
    let res = await ctx.$axios.$post(
      // "https://xiaozhuslb.laoyaojing.net//business/public/getHomeBlock"
      "https://xiaozhuslb.laoyaojing.net//business/StudyStatistics/getUserStudyReportForPc"
    );
    console.log(res);
  }
};
</script>

<style lang="scss" scoped></style>
