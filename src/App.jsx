import { PanelProvider } from "./Context/panel";

/*---------------------------------------- Component ----------------------------------------*/
import Layout, {
  TopbarLayout,
  SidebarLayout,
  ContentLayout,
} from "./Layout/Layout";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";

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
        <ContentLayout>sdffs</ContentLayout>
      </Layout>
    </PanelProvider>
  );
};

export default App;
