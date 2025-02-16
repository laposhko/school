import { FaInstagram, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import Logo from "./logo";
export default function Footer() {
  return (
    <footer className="w-full flex justify-around items-start p-6 rounded-lg bg-brand-100 text-brand-900">
      <Logo />
      <div>
        <h2 className="text-2xl text-brand-700">Contact us</h2>
        <a href="#" className="block text-neutral-700 hover:text-brand-700">
          your phone number
        </a>
        <a href="#" className="block text-neutral-700 hover:text-brand-700">
          email address
        </a>
      </div>
      <div>
        <ul>
          <li>
            <Link href={"/speaking-club"}>Speaking Club</Link>
          </li>
          <li>Book Club</li>
          <li>
            <Link href={"/policy"}>Правила співпраці</Link>
          </li>
          <li>
            <Link href={"/products"}>Наші продукти</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <a href="#" className="block text-brand-700 hover:text-brand-900">
          <FaInstagram size="30px" />
        </a>
        <a href="#" className="block text-brand-700 hover:text-brand-900">
          <FaTelegram size="30px" />
        </a>
      </div>
    </footer>
  );
}
