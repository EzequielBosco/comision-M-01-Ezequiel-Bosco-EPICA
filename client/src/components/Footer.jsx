import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 p-5 w-full bg-gray-800 p-4 text-white text-center">
      <p>Sitio web desarrollado por <Link to="https://ezequielbosco.vercel.app/" target="_blank" className="color">Ezequiel Bosco</Link></p>
    </footer>
  )
}