import Link from "next/link";
export function Header(){return <header className="header"><div className="shell nav"><Link href="/" className="brand"><span>CL</span><b>Catherine Lazare</b></Link><nav aria-label="Primary"><Link href="/#work">Case Studies</Link><Link href="/#capabilities">Capabilities</Link><Link href="/#about">About</Link><Link href="/#resume">Resume</Link><Link href="/#contact">Contact</Link></nav><Link className="navCta" href="/#work">Explore work</Link></div></header>}

