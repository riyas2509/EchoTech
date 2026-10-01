import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { FirebaseProvider } from '@/providers/FirebaseProvider';
import { AnimationProvider } from '@/providers/AnimationProvider';
import { StoreProvider } from '@/providers/StoreProvider';

// Pages
import Home from '@/features/headquarters/Home';
import ProductsPage from '@/pages/ProductsPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import PhilosophyPage from '@/pages/PhilosophyPage';
import EngineeringPage from '@/pages/EngineeringPage';
import InsightsPage from '@/pages/InsightsPage';
import ExplorePage from '@/pages/ExplorePage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import SecurityPage from '@/pages/SecurityPage';
import TermsPage from '@/pages/TermsPage';

import GlobalLayout from '@/layouts/GlobalLayout';

const App = () => {
  return (
    <StoreProvider>
      <FirebaseProvider>
        <ThemeProvider>
          <AnimationProvider>
            <Router>
              <GlobalLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/how-it-works" element={<HowItWorksPage />} />
                  <Route path="/philosophy" element={<PhilosophyPage />} />
                  <Route path="/engineering" element={<EngineeringPage />} />
                  <Route path="/insights" element={<InsightsPage />} />
                  <Route path="/explore" element={<ExplorePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/security" element={<SecurityPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </GlobalLayout>
            </Router>
          </AnimationProvider>
        </ThemeProvider>
      </FirebaseProvider>
    </StoreProvider>
  );
};

export default App;
