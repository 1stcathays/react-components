import { ThumbsDownIcon } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/alert';
import type { ErrorPageProps } from '@/components/error-page';
import { ErrorPageLayout } from '@/components/error-page/error-page-layout';

export type FourOhOhPageProps = Omit<ErrorPageProps, 'detail' | 'status'>;

export function FourOhOhPage({ children, message }: FourOhOhPageProps) {
  return (
    <ErrorPageLayout
      Icon={(props) => (
        <ThumbsDownIcon aria-label="Icon image with a thumbs down hand" {...props} height={133} width={133} />
      )}
      title="Error #400 - Bad Request"
      message="Invalid Request"
    >
      <>
        {message && (
          <Alert variant="warning" className="flex items-center">
            <AlertDescription className="pt-0">{message}</AlertDescription>
          </Alert>
        )}

        {children}
      </>
    </ErrorPageLayout>
  );
}
