import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-start items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/rbcars-logo.png"
            alt="car hub logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
