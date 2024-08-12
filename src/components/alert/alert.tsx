import type { FunctionComponent, HTMLAttributes, SVGProps } from 'react';
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircleIcon, CircleCheckBigIcon, InfoIcon, TriangleAlertIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const alertVariants = cva(
  'flex relative items-start rounded-lg border p-4 [&>svg]:absolute [&>svg~*]:pl-5 [&>svg]:left-[10px] [&>svg]:top-3.5 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        info: 'bg-accent text-foreground',
        success: 'bg-success-background border-success/50 text-success dark:border-success [&>svg]:text-success',
        destructive:
          'bg-destructive-background border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        warning: 'bg-warning-background border-warning/50 text-warning dark:border-warning [&>svg]:text-warning',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

const AlertIcons: Record<
  VariantProps<typeof alertVariants>['variant'] & string,
  FunctionComponent<SVGProps<SVGSVGElement>>
> = {
  info: InfoIcon,
  destructive: AlertCircleIcon,
  warning: TriangleAlertIcon,
  success: CircleCheckBigIcon,
};

const Alert = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>(
  ({ className, variant, children, ...props }, ref) => {
    const AlertIcon = AlertIcons[variant ?? 'info'];

    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        <AlertIcon className="h-5 w-5" />
        <div>{children}</div>
      </div>
    );
  },
);
Alert.displayName = 'Alert';

const AlertTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('font-medium leading-none tracking-tight', className)} {...props} />
  ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-2 text-sm [&_p]:leading-relaxed', className)} {...props} />
  ),
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
