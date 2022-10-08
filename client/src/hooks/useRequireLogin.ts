import { useCallback } from 'react';
import { useRouter } from 'next/router';
import useToast from 'src/hooks/useToast';
import isResponseError from 'src/libs/isResponseError';

const useRequireLogin = () => {
  const router = useRouter();
  const toast = useToast();
  const requireLogin = useCallback(
    (error: unknown) => {
      if (isResponseError(error) && error.response.status === 401) {
        void router.push('/sign_in');
        toast(
          'error',
          'アクセスできません',
          error.response.data.messages.join('\n')
        );
      }
    },
    [router, toast]
  );

  return requireLogin;
};

export default useRequireLogin;
