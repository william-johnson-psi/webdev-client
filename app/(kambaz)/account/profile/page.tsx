import Link from "next/link";

export default function Profile() {
  return (
    <div
      id="wd-profile-screen"
      className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <div className="mb-4">
        <label htmlFor="wd-username" className="block font-semibold mb-2">
          Username
        </label>
        <input
          id="wd-username"
          defaultValue="alice"
          placeholder="username"
          className="wd-username w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-password" className="block font-semibold mb-2">
          Password
        </label>
        <input
          id="wd-password"
          defaultValue="123"
          placeholder="password"
          type="password"
          className="wd-password w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-firstname" className="block font-semibold mb-2">
          First Name
        </label>
        <input
          id="wd-firstname"
          defaultValue="Alice"
          placeholder="First Name"
          className="w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-lastname" className="block font-semibold mb-2">
          Last Name
        </label>
        <input
          id="wd-lastname"
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-dob" className="block font-semibold mb-2">
          Date of Birth
        </label>
        <input
          id="wd-dob"
          defaultValue="2000-01-01"
          type="date"
          className="w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-email" className="block font-semibold mb-2">
          Email
        </label>
        <input
          id="wd-email"
          defaultValue="alice@wonderland"
          type="email"
          className="w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-role" className="block font-semibold mb-2">
          Role
        </label>
        <select id="wd-role" defaultValue="FACULTY" className="w-full p-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <hr className="my-8" />

      <Link
        href="/account/signin"
        className="block w-full rounded-md bg-red-500 text-white p-2 text-center font-semibold no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}
