import Link from "next/link";
import Logo from "./ui/logo";
import Footer from "./ui/footer";
export default function Home() {
  return (
    <div className="bg-neutral-100 text-neutral-900 min-h-screen items-center justify-items-center pt-8 sm:pt-12 px-10 sm:px-16 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex justify-between items-center mb-8">
        <Logo />
        <div className="flex gap-4">
          <button className="py-2 px-4 rounded-lg bg-brand-300 text-brand-900 hover:bg-brand-500 transition-colors">
            Sign in
          </button>
          <button className="py-2 px-4 rounded-lg bg-accent-500 text-white hover:bg-accent-300 transition-colors">
            Sign up
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-8 p-5 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-semibold text-brand-700 mb-4">
          How we teach
        </h1>
        <ul className="list-disc pl-6 space-y-4 text-neutral-700">
          <li>
            Всі уроки будуть зібрані на онлайн платформі Figmajam куди вам
            безкоштовно надається доступ.
          </li>
          <li>
            Уроки побудовані на основі підручника за вашим рівнем. Ми
            використовуємо комунікативну методику з додавання лексичного
            підходу.
          </li>
          <li>
            До уроків ми додаємо різні ігри, подкасти, фільми, пісні аби легше
            було сприймати інформацію.
          </li>
          <li>Уроки проходять на платформі Google Meet.</li>
          <li>
            У вас завжди буде домашнє завдання на платформі, після виконання
            якого, ви отримуєте фідбек від викладача.
          </li>
        </ul>

        <Link
          className="mt-6 py-3 px-6 rounded-lg bg-brand-700 text-white hover:bg-brand-900 transition-colors"
          href={"/teachers"}
        >
          Choose your teacher
        </Link>
      </main>

      <Footer />
    </div>
  );
}
