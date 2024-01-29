import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className="m-10">
      <p>This is protected route</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
