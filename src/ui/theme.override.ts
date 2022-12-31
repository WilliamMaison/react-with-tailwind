import { ThemeProps } from 'flowbite-react';

export const customTheme: ThemeProps = {
  theme: {
    sidebar: {
      inner: 'h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-gray-800',
    },
    footer: {
      base: 'w-full bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between',
    },
  },
};
