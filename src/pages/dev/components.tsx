import { GetStaticProps } from "next/types"

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true }
  }
  return { props: {} }
}

export default function Page() {
  return (
    <>
      Components
    </>
  )
}
