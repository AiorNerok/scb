import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Kakaya To Oshibka... Ya Hz chto delat`</h2>
      <p>Vremeni bilo malo... Kak ni kak hacaton</p>
      <p>
        <Link href="/">Idti na Glavnyiu stranicu</Link>
      </p>
      <p>
        <Link href="/lk">Ili v dashboard</Link>
      </p>
    </div>
  );
}
