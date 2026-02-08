import { Outlet } from "react-router-dom" // buaraco mágico do react router
import Header from "../components/Header"
import Footer from "../components/Footer"

function Template() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Template;