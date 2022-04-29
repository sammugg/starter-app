/**
 * Defines an API integration layer.
 * The base URL is configured in the proxy field in package.json
 */
import axios from 'axios';

enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export const GetNewText = async () => {
  const { data } = await axios({
    method: Method.GET,
    url: '/api/?type=all-meat&paras=2&start-with-lorem=1',
  });
  return data;
};
