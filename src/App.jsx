import { PanelProvider } from "./Contexts/panel";
import { DisclosureProvider } from "./Contexts/disclosure";

/*---------------------------------------- Component ----------------------------------------*/
import Layout, {
  TopbarLayout,
  SidebarLayout,
  ContentLayout,
} from "./Layout/Layout";
import TopBar from "./Components/TopBar";
import Sidebar from "./Components/Sidebar";
import Panel from "./Pages/Panel";

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
