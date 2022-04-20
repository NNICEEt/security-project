import { PanelProvider } from "./contexts/panel";
import { DisclosureProvider } from "./contexts/disclosure";

/*---------------------------------------- Component ----------------------------------------*/
import Layout, {
  TopbarLayout,
  SidebarLayout,
  ContentLayout,
} from "./layout/Layout";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <PanelProvider>
      <Layout>
        <DisclosureProvider>
          <TopbarLayout>
            <TopBar />
          </TopbarLayout>
          <SidebarLayout>
            <Sidebar />
          </SidebarLayout>
        </DisclosureProvider>
        <ContentLayout>
          <Index />
        </ContentLayout>
      </Layout>
      <ScrollToTop />
    </PanelProvider>
  );
};

export default App;
