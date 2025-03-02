import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/layout';
import HomePage from '@/pages/home';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        <HomePage />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;