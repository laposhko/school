import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen pt-8 sm:pt-12 px-10 sm:px-16  gap-16  font-[family-name:var(--font-geist-sans)] bg-green-50">
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">Mova Lova</h1>
        <div className="flex gap-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
            Sign in
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
            Sign up
          </button>
        </div>
      </header>
      <main className="flex flex-col gap-8 p-5 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-semibold text-green-700 mb-4">
          How we teach
        </h1>
        <ul className="list-disc pl-6 space-y-4 text-green-600">
          <li>
            Всі уроки будуть зібрані на онлайн платформі Figmajam куди вам
            безкоштовно надається доступ.
          </li>
          <li>
            Уроки побудовані на основі підручника за вашим рівнем. Ми
            використовуємо комунікативну методику з додавання лексичного
            підходу. А отже, говоріння та великий вокабуляр вам гарантовано!
          </li>
          <li>
            До уроків ми додаємо різні ігри, подкасти, фільми, пісні аби легше
            було сприймати інформацію.
          </li>
          <li>Уроки проходять на платформі GoogleMeet.</li>
          <li>
            У вас завжди буде домашнє завдання на платформі, після виконання
            якого, ви отримуєте фідбек від викладача. В кінці кожного уроку,
            вчитель також надає вам фідбек про урок.
          </li>
          <li>
            Нашим викладачам завжди цікаво, як ви провели свій день, куди
            сьогодні ходили. Тому комфортна атмосфера де вас завжди вислухають
            вам гарантована.
          </li>
        </ul>
        <Link
          className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
          href={"/teachers"}
        >
          Choose your teacher
        </Link>
      </main>
      <footer className="w-screen flex gap-6 flex-wrap items-center justify-center bg-green-200 p-6 rounded-lg">
        <div className="text-green-700">
          <h2 className="text-2xl">Contact us</h2>
          <a href="" className="block">
            your phone number
          </a>
          <a href="" className="block">
            email address
          </a>
          <a href="" className="block">
            instagram
          </a>
          <a href="" className="block">
            telegram
          </a>
        </div>
      </footer>
    </div>
  );
}
