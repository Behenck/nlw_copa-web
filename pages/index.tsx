import { GetServerSideProps } from 'next'

export default function Home() {
  return <h1>Hello World</h1>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  console.log(data)

  return {
    props: {
      data,
    },
  }
}
