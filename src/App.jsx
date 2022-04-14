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
import Panel from "./pages/Panel";

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
          <Panel />
        </ContentLayout>
      </Layout>
    </PanelProvider>
  );
};

export default App;
