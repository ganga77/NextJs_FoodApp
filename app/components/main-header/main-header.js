
import Link from "next/link";
import LogoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeader() {
  
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
       
          <Image src={LogoImg} alt="A Plate with food logo" priority/>
          Next Level Food
        
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
          <NavLink href="/community">Join the community</NavLink>
           </li>
        </ul>
      </nav>
    </header>
  );
}
