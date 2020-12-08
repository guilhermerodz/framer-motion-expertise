import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Links (click to navigate)</h1>

      <ul>
        <li>
          <Link href="/shared-layout-1">
            <a>Go to Shared Layout</a>
          </Link>
        </li>
        <li>
          <Link href="/stagger-children">
            <a>Go to Stagger Children</a>
          </Link>
        </li>
        <li>
          <Link href="/hover">
            <a>Go to Hover</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
