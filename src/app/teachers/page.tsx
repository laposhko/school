import { getTeachers } from "../lib/db";
import TeacherCard from "../ui/teacher-card";
export default async function Page() {
  const teachers = await getTeachers();
  return (
    <div className="bg-green-50 p-8">
      <h1 className="text-3xl font-semibold text-green-800 mb-6">
        Our Teachers
      </h1>
      <ul className="space-y-6 flex flex-wrap">
        {teachers &&
          teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher}></TeacherCard>
          ))}
      </ul>
    </div>
  );
}
