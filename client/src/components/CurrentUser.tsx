import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { UserApi } from 'openapi-generator/api';
import currentUserState from 'src/libs/currentUserState';
import getAuthCookies from 'src/libs/getAuthCookies';

const CurrentUser: FC = () => {
  const [, setUser] = useRecoilState(currentUserState);
  const cookies = getAuthCookies();

  useEffect(() => {
    const setCurrentUser = async () => {
      try {
        const res = await new UserApi().getSignInUser({
          headers: cookies,
        });
        setUser(res.data);
      } catch {
        setUser(null);
      }
    };
    void setCurrentUser();
    // typeof cookies === object が原因で無限レンダリングが起こるため依存配列のESLintを無効化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUser, cookies.uid, cookies.client, cookies['access-token']]);

  return null;
};

export default CurrentUser;