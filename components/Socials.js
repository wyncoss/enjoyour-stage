// links
import Link from 'next/link';

// icons
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaThreads,
  FaWhatsapp,
} from 'react-icons/fa6';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'/'}
        className="hover:text-yellow-300 transition-all duration-300"
      >
        <FaFacebookF />
      </Link>
      <Link
        href={'/'}
        className="hover:text-yellow-300 transition-all duration-300"
      >
        <FaXTwitter />
      </Link>
      <Link
        href={'/'}
        className="hover:text-yellow-300 transition-all duration-300"
      >
        <FaInstagram />
      </Link>
      <Link
        href={'/'}
        className="hover:text-yellow-300 transition-all duration-300"
      >
        <FaThreads />
      </Link>
      <Link
        href={'/'}
        className="hover:text-yellow-300 transition-all duration-300"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default Socials;
