// tricodedashboard/app/dashboard/page.tsx
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

const DashboardPage = () => {
  return (
    <>
      <SignedIn>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Bienvenido al Dashboard</h1>
          <p className="text-gray-700">
            asdwasdwasd
          </p>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default DashboardPage;
