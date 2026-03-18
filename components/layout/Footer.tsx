import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-main">
        <div className="footer-brand-col flex flex-col items-center text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/Logo.png" 
              alt="CinnAstra Tech Logo" 
              width={150} 
              height={100} 
              className="h-20 w-auto object-contain"
            />
          </div>
          <h3 className="footer-brand-name text-2xl font-bold mb-2">CinnAstra Tech</h3>
          <p className="footer-tagline">
            Innovate Beyond Boundaries
          </p>
        </div>

        <div className="footer-nav-col">
          <h5><span className="gradient-keyword">Menu</span></h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h5><span className="gradient-keyword">Courses</span></h5>
          <ul>
            <li><Link href="/courses/fundamentals">Manual Testing</Link></li>
            <li><Link href="/courses/selenium">Automation Testing</Link></li>
            <li><Link href="/courses/api-rest">API Automation</Link></li>
            <li><Link href="/courses/cloud">Performance Testing</Link></li>
            <li><Link href="/courses/ai">AI-Driven QA</Link></li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h5><span className="gradient-keyword">Contact</span></h5>
          <ul>
            <li>Email: <a href="mailto:Startlearning@Cinnastratech.com">Startlearning@Cinnastratech.com</a></li>
            <li>Phone: <a href="tel:+917305629985">+91-7305629985</a></li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h5><span className="gradient-keyword">Payments</span></h5>
          <ul className="payment-list text-zinc-400 text-sm space-y-2">
            <li className="flex items-center gap-2">✓ Bank Transfer</li>
            <li className="flex items-center gap-2">✓ UPI / QR Code</li>
            <li className="flex items-center gap-2">✓ Debit Card</li>
            <li className="flex items-center gap-2">✓ PayPal</li>
            <li className="flex items-center gap-2">✓ Installment Options</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>
          © {new Date().getFullYear()} CinnAstra Tech. All rights reserved. | Recreated by <a href="https://mergex.in" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#06feb4]" style={{ color: 'inherit', textDecoration: 'none' }}>Mergex</a>
        </p>
        <div className="footer-legal">
          <Link href="/legal">Terms & Conditions</Link>
          <Link href="/legal">Refund Policy</Link>
          <Link href="/legal">Legal Disclaimers</Link>
        </div>
      </div>
    </footer>
  );
}
