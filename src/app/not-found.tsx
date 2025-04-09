import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-8">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Return Home
      </Link>
    </div>
  );
}
