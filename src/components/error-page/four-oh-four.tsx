import type { ReactNode } from 'react';
import { ThumbsDownIcon } from 'lucide-react';
import { ErrorPageLayout } from '@/components/error-page/error-page-layout';

export type FourOhFourPageProps = { children?: ReactNode };

export function FourOhFourPage({ children }: FourOhFourPageProps) {
  return (
    <ErrorPageLayout
      Icon={(props) => (
        <ThumbsDownIcon aria-label="Icon image with a thumbs down hand" {...props} height={133} width={133} />
      )}
      title="Error #404 - Page not found"
      message="The page you are trying to navigate to does not exist"
    >
      {children}
    </ErrorPageLayout>
  );
}
