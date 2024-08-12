import type { ReactNode } from 'react';
import { ForbiddenPage } from '@/components/error-page/forbidden';
import { FourOhFourPage } from '@/components/error-page/four-oh-four';
import { FourOhOhPage } from '@/components/error-page/four-oh-oh';
import { ServerErrorPage } from '@/components/error-page/server-error';
import { UnauthorisedPage } from '@/components/error-page/unauthorised';

export type ErrorPageProps = {
  children?: ReactNode;

  /**
   * The main error message
   */
  message?: string;

  /**
   * HTTP status number (404, 403 etc)
   */
  status?: number;

  /**
   * Additional error message details
   */
  detail?: string;
};

export function ErrorPage({ children, message, status, detail }: ErrorPageProps) {
  switch (status) {
    case 400:
      return <FourOhOhPage message={message}>{children}</FourOhOhPage>;
    case 404:
      return <FourOhFourPage>{children}</FourOhFourPage>;
    case 401:
      return <UnauthorisedPage>{children}</UnauthorisedPage>;
    case 403:
      return <ForbiddenPage message={message}>{children}</ForbiddenPage>;
    default:
      return (
        <ServerErrorPage detail={detail} message={message}>
          {children}
        </ServerErrorPage>
      );
  }
}
