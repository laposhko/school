import Link from "next/link";
export default function Page() {
  return (
    <>
      <h1>Наші продукти</h1>
      <div>
        <img
          src="https://soft-octave-f8d.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4d9f58b6-8a63-44d5-abdb-5d2e202659f0%2Ff4a6cb45-817c-42a5-93fe-aa51f1fdd68c%2FScreenshot_2024-08-21_at_18.29.34.png?table=block&id=82686a74-1747-49c1-9ced-45341d0fd4b4&spaceId=4d9f58b6-8a63-44d5-abdb-5d2e202659f0&width=430&userId=&cache=v2"
          alt="guide how to learn english"
        />
        <div>
          <h2>
            Цей файл — це твій перший крок у вивченні англійської самостійно.
          </h2>
          <p>
            В цьому гайді зібрана всі корисна інформація, поради, як почати
            самостійно вивчати мову ефективно. Всі посилання є активними, треба
            на них лише натиснути.
          </p>
          <h3>Кому буде корисний цей гайд?</h3>
          <ul>
            <li>Тим, хто дуже хоче вивчати мову, але не знає з чого почати</li>
            <li>
              Тим, хто серед усієї інформації в інтернеті вже загубився шукати
              англомовні, цікаві канали або фільми
            </li>
            <li>Тим, хто не знає де дивитись фільми в оригінали</li>
            <li>
              Тим, хто хоче отримати класні ресурси з підручниками для вивчення
              англійської - безкоштовно!
            </li>
          </ul>
        </div>
        <Link
          href={
            "https://drive.google.com/file/d/1kEjGR-EzdElOuz0JwFtfoh4-KgGZRYIK/view?usp=sharing"
          }
        >
          Open file
        </Link>
      </div>
    </>
  );
}
