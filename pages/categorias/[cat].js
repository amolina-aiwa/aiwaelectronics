import { useRouter } from "next/router"

export default function category(){
  const route = useRouter()
  const { cat } = route.query
  return (
    <h1>{cat}</h1>
  )
}