import Link from 'next/link';

const MenuOverlay = () => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      <li>
        <Link
          href={'#about'}
          className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:underline hover:underline-offset-4'
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href={'#projects'}
          className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:underline hover:underline-offset-4'
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={'#contact'}
          className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:underline hover:underline-offset-4'
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default MenuOverlay;
