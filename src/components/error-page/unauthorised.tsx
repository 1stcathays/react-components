import type { ReactNode } from 'react';
import { LockKeyholeIcon } from 'lucide-react';
import { ErrorPageLayout } from '@/components/error-page/error-page-layout';

export type UnauthorisedPageProps = { children?: ReactNode };

export function UnauthorisedPage({ children }: UnauthorisedPageProps) {
  return (
    <ErrorPageLayout
      Icon={(props) => <LockKeyholeIcon aria-label="Icon image showing a closed lock" {...props} />}
      title="Error #401 - Unauthorised access"
      message="You are not authorised to access this application"
    >
      {children}
    </ErrorPageLayout>
  );
}
