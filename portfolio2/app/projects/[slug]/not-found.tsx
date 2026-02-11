import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>Project not found</h1>
      <Link href="/">Back to home</Link>
    </div>
  );
}

