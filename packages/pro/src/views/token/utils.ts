import { Base64 } from 'js-base64';

function parseToken(token: string): any | null {
  if (!token) {
    return null;
  }
  const useInfoBs: string = token.split('.')[1];
  const useInfo = JSON.parse(Base64.decode(useInfoBs));
  return useInfo;
}

export { parseToken };
