import { PropsWithChildren } from 'react';
import { Avatar, DarkThemeToggle, Flowbite, Footer, Navbar, Sidebar } from 'flowbite-react';
import { customTheme } from '../../theme.override';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flowbite theme={customTheme}>
      <div className='flex flex-row min-h-screen'>
        <div className='flex flex-col border-r'>
          <Sidebar>
            <Avatar className='pb-2' img='./wma.png' size='lg' rounded />
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item as={Link} to='/' icon={HiHome}>
                  Home
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div className='flex flex-col flex-1'>
          <Navbar fluid={true} className='bg-white dark:bg-slate-800'>
            <Navbar.Brand className='text-slate-900 dark:text-white'>
              React with tailwind
            </Navbar.Brand>
            <DarkThemeToggle />
          </Navbar>
          <main className='flex flex-col flex-1 px-4 bg-white dark:bg-gray-800'>{children}</main>
          <Footer container>
            <Footer.Copyright by='William MAISON' />
          </Footer>
        </div>
      </div>
    </Flowbite>
  );
};
