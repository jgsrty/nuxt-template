let testToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaW5kX21vYmlsZSI6IjE3NjIxNDEyMDQ5IiwiY3JlYXRlZF9hdCI6IjE2MTA5NTEzNTkiLCJndWlkIjoiYWQxNDkwN2UtYTQwYS00NTFmLTk1OGEtOTM0MDczMzUxMGY1Iiwibm93X29wZW5pZCI6Im9MWVkxMGRPaW5FNnNZdXlVazRzbmZ0Rzh2VEEiLCJzZXNzaW9uIjoiMzBkMWVhOTUtNTlhZi00MTMzLWFjNDItMTUwMjQ5ZjZmODc0Iiwic2Vzc2lvbl9rZXkiOiJ3ZWI6YWQxNDkwN2UtYTQwYS00NTFmLTk1OGEtOTM0MDczMzUxMGY1In0.UmBlN9Hv85dmjDS6mZlMGaX8Ng9VohR2FbSZoV-iYXA";
import qs from "qs";
export default ({ $axios }) => {
  $axios.onRequest(config => {
    // config.params = qs.stringify({ token: testToken });
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.data = qs.stringify({ token: testToken });
    return config;
  });
  $axios.onResponse(res => {
    // console.log(res);
    // if (res.data.err === 2 && route.fullPath !== '/login') {
    //   redirect('/login?path=' + route.fullPath)
    // }
    return res;
  });
};
