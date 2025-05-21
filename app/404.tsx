// pages/404.tsx
import Link from 'next/link';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">Sorry, the page you’re looking for doesn’t exist.</p>
      <Link href="/">
        <a className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Go to Home
        </a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
