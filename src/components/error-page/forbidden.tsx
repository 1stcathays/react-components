import { LockKeyholeIcon } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/alert';
import type { ErrorPageProps } from '@/components/error-page';
import { ErrorPageLayout } from '@/components/error-page/error-page-layout';

export type ForbiddenPageProps = Omit<ErrorPageProps, 'detail' | 'status'>;

export function ForbiddenPage({ children, message }: ForbiddenPageProps) {
  return (
    <ErrorPageLayout
      Icon={(props) => <LockKeyholeIcon aria-label="Icon image showing a closed lock" {...props} />}
      title="Error #403 - Access forbidden"
      message="You are not authorised to perform this action"
    >
      {message && (
        <Alert variant="warning">
          <AlertDescription className="pt-0">{message}</AlertDescription>
        </Alert>
      )}
      {children}
    </ErrorPageLayout>
  );
}
