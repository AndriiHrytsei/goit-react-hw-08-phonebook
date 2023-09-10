import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"


export default function Navigation() {
  return (
    <>
      <div>Navigation</div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet/>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}
