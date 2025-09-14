import { Routes, Route } from "react-router" // Don't forget the -dom part!
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage" // Import the AboutPage component

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    )
}

export default AppRoutes // Export the component