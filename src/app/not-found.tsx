import Link from 'next/link';
import { Button } from '@/ui/components/Button/Button';
import { Typography } from '@/ui/components/Typography/Typography';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <Typography
          as="h1"
          variant="4xl-bold"
          className="text-8xl font-black text-muted-foreground/20 mb-4"
        >
          404
        </Typography>

        {/* Main Heading */}
        <Typography as="h2" variant="2xl-bold" className="mb-4 text-foreground">
          Page Not Found
        </Typography>

        {/* Description */}
        <Typography variant="lg-regular" className="mb-8 text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved, deleted, or you entered the wrong URL.
        </Typography>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
