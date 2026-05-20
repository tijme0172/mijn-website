import Link from "next/link";

const footerLinks = {
  Shop: [
    { label: "All Products", href: "#products" },
    { label: "Fungy Original", href: "#" },
    { label: "Fungy Matcha", href: "#" },
    { label: "Fungy Cacao", href: "#" },
    { label: "Bundles", href: "#" },
  ],
  Company: [
    { label: "Our Story", href: "#story" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-canvas/70 section-padding pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-bold text-xl text-canvas tracking-tight block mb-4">
              Fungy
            </Link>
            <p className="text-sm leading-relaxed text-canvas/50 mb-6">
              Premium mushroom superfood drinks for high performers. Clean energy, sharp focus, better gut health.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Instagram", symbol: "IG" },
                { label: "TikTok", symbol: "TK" },
                { label: "YouTube", symbol: "YT" },
              ].map(({ label, symbol }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-canvas/10 flex items-center justify-center hover:border-sand/50 hover:text-canvas transition-colors text-[10px] font-bold tracking-tight"
                >
                  {symbol}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-canvas/40 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-canvas transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-canvas/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-canvas/30">
          <p>© {new Date().getFullYear()} Fungy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-canvas/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-canvas/60 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-canvas/60 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
