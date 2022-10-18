import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { UserApi } from 'src/openapi-generator';
import { getAuthCookies } from 'src/libs/getAuthCookies';
import { isResponseError } from 'src/libs/isResponseError';
import { useToast } from 'src/hooks/useToast';
import { destroyAuthCookies } from 'src/libs/destroyAuthCookies';

export const useLogOut = () => {
  const toast = useToast();
  const router = useRouter();
  const signOut = useCallback(async () => {
    try {
      await new UserApi().logOut({ headers: getAuthCookies() });
      destroyAuthCookies();
      await router.push('/');
      toast('success', 'ログアウトしました');
    } catch (error: unknown) {
      if (isResponseError(error)) {
        toast(
          'error',
          'ログアウトに失敗しました',
          error.response.data.messages.join('\n')
        );
      }
    }
  }, [router, toast]);

  return signOut;
};