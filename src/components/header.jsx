export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 md:px-12 bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="flex items-center gap-2">
        <img src="/nxtrole.png" alt="NxtRoleAI" className="h-10" />
      </div>
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </header>
  );
}
