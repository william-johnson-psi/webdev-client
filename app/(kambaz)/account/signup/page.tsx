import Link from "next/link";

export default function Signup() {
  return (
    <div
      id="wd-signup-screen"
      className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Sign up</h2>

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

      <div className="mb-4">
        <label htmlFor="wd-password-verify" className="block font-semibold mb-2">
          Verify Password
        </label>
        <input
          id="wd-password-verify"
          placeholder="verify password"
          type="password"
          className="wd-password-verify w-full p-2"
        />
      </div>

      <hr className="my-8" />

      <div className="flex flex-col gap-4">
        <Link
          href="/account/profile"
          className="block w-full rounded-md bg-red-500 text-white p-2 text-center font-semibold no-underline"
        >
          Sign up
        </Link>
        <Link
          href="/account/signin"
          className="block w-full rounded-md bg-gray-500 text-white p-2 text-center font-semibold no-underline"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}