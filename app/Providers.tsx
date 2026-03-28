'use client';

import { Provider } from 'react-redux';
import { store } from '@/lib/redux/store';
import { CustomThemeProvider } from './components/CustomThemeProvider';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </CustomThemeProvider>
    </Provider>
  );
}
