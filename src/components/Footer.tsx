export default function Footer() {
  return (
    <footer id="contact" className="bg-[#18181B] text-zinc-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm border-t border-zinc-800 w-full pt-6 md:border-none md:w-auto md:pt-0 text-center md:text-left">
          © 2024 Walid CHIKHI · walidchikhi · waliidchikhi@gmail.com
        </div>
        <div className="flex gap-4 text-sm font-medium uppercase tracking-wider">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">Email</a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">PyPI</a>
        </div>
      </div>
    </footer>
  );
}
