import Link from "next/link";

export default function Signin() {
  return (
    <div
      id="wd-signin-screen"
      className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Sign in</h2>

      <div className="mb-4">
        <label htmlFor="wd-username" className="block font-semibold mb-2">
          Username
        </label>
        <input
          id="wd-username"
          placeholder="username"
          defaultValue="ada"
          className="wd-username w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-password" className="block font-semibold mb-2">
          Password
        </label>
        <input
          id="wd-password"
          placeholder="password"
          type="password"
          defaultValue="123"
          className="wd-password w-full p-2"
        />
      </div>

      <hr className="my-8" />

      <div className="flex flex-col gap-4">
        <Link
          id="wd-signin-btn"
          href="/dashboard"
          className="block w-full rounded-md bg-red-500 text-white p-2 text-center font-semibold no-underline"
        >
          Sign in
        </Link>
        <Link
          id="wd-signup-link"
          href="/account/signup"
          className="block w-full rounded-md bg-gray-500 text-white p-2 text-center font-semibold no-underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}