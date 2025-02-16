import Link from "next/link";
import { Teacher } from "../lib/definitions";
export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  console.log(teacher);
  return (
    <li className="flex gap-8 bg-white p-6 rounded-lg shadow-lg border border-brand-300 hover:border-brand-500 transition-colors">
      <img
        src="https://soft-octave-f8d.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4d9f58b6-8a63-44d5-abdb-5d2e202659f0%2Fb7d1b4ef-afbb-45c8-af5d-d1b26d2eec2c%2FScreenshot_2024-08-21_at_13.01.10.png?table=block&id=f444d266-8a60-4503-b22c-79d366a74ee6&spaceId=4d9f58b6-8a63-44d5-abdb-5d2e202659f0&width=480&userId=&cache=v2"
        alt={`teacher ${teacher.name}`}
        className="w-1/3 h-fit rounded-md mb-4"
      />
      <div>
        <h2 className="text-2xl font-medium text-brand-900 mb-2">
          {teacher.name}
        </h2>
        <ul className="space-y-2 text-brand-700">
          {teacher.skills.map((skill, index) => (
            <li key={index} className="list-disc pl-5">
              {skill}
            </li>
          ))}
        </ul>
        <span className="block mt-4 text-lg font-semibold text-brand-700">
          Вартість занять {teacher.price}грн
        </span>
        <Link
          className="block mt-4 w-50 py-2 px-4 rounded-lg bg-brand-300 text-brand-900 hover:bg-brand-500 transition-colors"
          href={"/booking"}
        >
          Записатись на урок
        </Link>
      </div>
    </li>
  );
}
