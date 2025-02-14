// import Image from "next/image";
export default function TeacherCard({ teacher }) {
  return (
    <li className="flex gap-8  bg-white p-6 rounded-lg shadow-lg border border-green-200 hover:border-green-500 transition-colors">
      <img
        src={
          "https://soft-octave-f8d.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4d9f58b6-8a63-44d5-abdb-5d2e202659f0%2Fb7d1b4ef-afbb-45c8-af5d-d1b26d2eec2c%2FScreenshot_2024-08-21_at_13.01.10.png?table=block&id=f444d266-8a60-4503-b22c-79d366a74ee6&spaceId=4d9f58b6-8a63-44d5-abdb-5d2e202659f0&width=2000&userId=&cache=v2"
        }
        alt={`teacher ${teacher.name}`}
        // width={200}
        // height={100}
        className="w-1/3 h-fit rounded-md mb-4"
      />
      <div>
        <h2 className="text-2xl font-medium text-green-800 mb-2">
          {teacher.name}
        </h2>
        <ul className="space-y-2 text-green-700">
          {teacher.skills.map((skill, index) => (
            <li key={index} className="list-disc pl-5">
              {skill}
            </li>
          ))}
        </ul>
        {/* <p className="text-sm text-green-600 mt-2">{teacher.description}</p> */}
        <span className="block mt-4 text-lg font-semibold text-green-600">
          Вартість занять {teacher.price}грн
        </span>
      </div>
    </li>
  );
}
