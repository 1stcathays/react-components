import { GlobeIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/alert';
import type { ErrorPageProps } from '@/components/error-page';
import { ErrorPageLayout } from '@/components/error-page/error-page-layout';
import { Typography } from '@/components/typography';

export type ServerErrorPageProps = Omit<ErrorPageProps, 'status'>;

export function ServerErrorPage({ children, message, detail }: ServerErrorPageProps) {
  return (
    <ErrorPageLayout
      Icon={(props) => <GlobeIcon aria-label="Icon of a globe" {...props} />}
      title="Error #500 - Something went"
    >
      <>
        {message && (
          <div className="flex flex-col text-left">
            <Alert variant="destructive">
              {detail ? (
                <>
                  <AlertTitle>{message}</AlertTitle>
                  <AlertDescription>
                    <pre>
                      <code>{detail}</code>
                    </pre>
                  </AlertDescription>
                </>
              ) : (
                <Typography>{message}</Typography>
              )}
            </Alert>
            {children}
          </div>
        )}
      </>
    </ErrorPageLayout>
  );
}
