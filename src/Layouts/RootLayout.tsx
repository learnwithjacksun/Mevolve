import { Header } from "@/Components/Home"

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div>
        <Header/>
        <main className="main">
            {children}
        </main>
    </div>
    </>
  )
}

export default RootLayout