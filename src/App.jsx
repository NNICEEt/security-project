import { PanelProvider } from "./context/panel";

/*---------------------------------------- Component ----------------------------------------*/
import Layout, {
  TopbarLayout,
  SidebarLayout,
  ContentLayout,
} from "./layout/Layout";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";

/*---------------------------------------- UI Component ----------------------------------------*/
import { useDisclosure } from "@chakra-ui/react";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PanelProvider>
      <Layout>
        <TopbarLayout>
          <TopBar onOpen={onOpen} />
        </TopbarLayout>
        <SidebarLayout>
          <Sidebar isOpen={isOpen} onClose={onClose} />
        </SidebarLayout>
        <ContentLayout>
          <Panel />
        </ContentLayout>
      </Layout>
    </PanelProvider>
  );
};

export default App;
