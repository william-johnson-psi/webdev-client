import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div
      id="wd-assignments-editor"
      className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Edit Assignment</h2>

      <div className="mb-4">
        <label htmlFor="wd-name" className="block font-semibold mb-2">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="w-full p-2"
          defaultValue="A1 - ENV + HTML"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-description" className="block font-semibold mb-2">
          Description
        </label>
        <textarea id="wd-description" className="w-full p-2" rows={4}>
          The assignment is available online Submit a link to the landing page of
          your Web application running on Vercel.
        </textarea>
      </div>

      <div className="grid grid-cols-12 gap-2 mb-4">
        <label htmlFor="wd-points" className="col-span-3 font-semibold p-2">
          Points
        </label>
        <input
          id="wd-points"
          className="col-span-9 p-2"
          defaultValue={100}
        />
      </div>

      <div className="grid grid-cols-12 gap-2 mb-4">
        <label htmlFor="wd-due-date" className="col-span-3 font-semibold p-2">
          Due Date
        </label>
        <input
          id="wd-due-date"
          type="date"
          className="col-span-9 p-2"
          defaultValue="2024-05-13"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className="block font-semibold mb-2">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          className="w-full p-2"
          rows={4}
        ></textarea>
      </div>

      <hr className="my-8" />

      <div className="flex gap-4">
        <Link
          href="/courses/1234/assignments"
          id="wd-cancel"
          className="bg-gray-500 text-white p-2 font-semibold no-underline"
        >
          Cancel
        </Link>
        <Link
          href="/courses/1234/assignments"
          id="wd-save"
          className="bg-red-500 text-white p-2 font-semibold no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}