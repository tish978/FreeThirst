import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {

  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img 
            src="/assets/images/green-bg.png"
            alt="logo"
            className="hidden xl:block h-screen w-[1/3] object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  )
}

export default AuthLayout