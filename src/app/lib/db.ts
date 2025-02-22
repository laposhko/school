import { db } from "@vercel/postgres";
import { Teacher } from "./definitions";
//fetch teachers
export async function getTeachers(): Promise<Teacher[]> {
  const client = await db.connect();
  const { rows } = await client.sql`
    SELECT id, name, email, price, skills
    FROM users
    WHERE role = 'TEACHER';
  `;
  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    price: row.price,
    skills: row.skills,
  }));
}
/**
 * Fetch all available slots with teacher info.
 */
export async function getAvailableSlots() {
  const client = await db.connect();
  const { rows } = await client.sql`
    SELECT s.id, s.dateTime, u.name AS teacher_name, u.email AS teacher_email
    FROM slots s
    JOIN users u ON s.teacher_id = u.id
    WHERE s.booked_by IS NULL
    ORDER BY s.dateTime ASC;
  `;
  return rows;
}

/**
 * Fetch booked lessons for a student
 */
export async function getBookedLessons(studentEmail: string) {
  const client = await db.connect();
  const { rows } = await client.sql`
    SELECT s.dateTime, u.name AS teacher_name, u.email AS teacher_email
    FROM slots s
    JOIN users u ON s.teacher_id = u.id
    WHERE s.booked_by = (SELECT id FROM users WHERE email = ${studentEmail});
  `;
  return rows;
}
