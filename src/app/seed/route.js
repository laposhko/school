import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";

// Sample Data
const users = [
  {
    name: "Alice",
    email: "alice@example.com",
    password: "password123",
    role: "STUDENT",
  },
  {
    name: "Tania",
    email: "johndoe@example.com",
    password: "securepassword",
    role: "TEACHER",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "securepassword",
    role: "TEACHER",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "securepassword",
    role: "TEACHER",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "securepassword",
    role: "TEACHER",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "securepassword",
    role: "TEACHER",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "securepassword",
    role: "TEACHER",
  },
];

const slots = [
  { teacherEmail: "johndoe@example.com", dateTime: "2024-02-20T14:00:00Z" },
];

export async function GET() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;

    // Enable UUID support
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create Users Table
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role VARCHAR(20) NOT NULL CHECK (role IN ('STUDENT', 'TEACHER')), 
      );
    `;

    // Insert Users
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await client.sql`
        INSERT INTO users (name, email, password, role)
        VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.role})
        ON CONFLICT (email) DO NOTHING;
      `;
    }

    // Create Slots Table
    await client.sql`
      CREATE TABLE IF NOT EXISTS slots (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        teacher_id UUID NOT NULL,
        dateTime TIMESTAMP NOT NULL,
        booked_by UUID NULL REFERENCES users(id),
        FOREIGN KEY (teacher_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `;

    // Insert Slots
    for (const slot of slots) {
      const teacher =
        await client.sql`SELECT id FROM users WHERE email = ${slot.teacherEmail}`;
      if (teacher.rows.length > 0) {
        await client.sql`
          INSERT INTO slots (teacher_id, dateTime)
          VALUES (${teacher.rows[0].id}, ${slot.dateTime})
          ON CONFLICT (id) DO NOTHING;
        `;
      }
    }

    await client.sql`COMMIT`;
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error: error.message }, { status: 500 });
  }
}
