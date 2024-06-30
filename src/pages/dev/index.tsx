import { GetStaticProps } from "next/types"

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true }
  }
  return { props: {} }
}

export default function Page() {
  return (
    <div className="absolute top-0 flex h-screen w-screen flex-col items-center justify-center">
      <h1>Dev Page</h1>
    </div>
  )
}
