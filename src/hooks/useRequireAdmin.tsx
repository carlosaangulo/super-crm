import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useRequireAdmin = (redirectUrl = '/admin/validate'): any => {
  const auth = useAuth();
  const router = useRouter();

  // If auth.user is false that means the user is not logged in
  // If user.isAdmin is not true that means the user is not an admin
  useEffect(() => {
    if (auth.user === false || (auth.user?.name && !auth.user?.isAdmin)) {
      router.push(redirectUrl);
    }
  }, [auth, redirectUrl, router]);

  return auth;
};
