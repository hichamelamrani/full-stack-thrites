import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" p-12 bg-stone-900 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Clerk</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
