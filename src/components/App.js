import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import CatGallery from "./catgallery/CatGallery";
import DemoComponents from "./aboutcomponents/DemoComponents";
function App() {
  return (
    <Layout>
      <h2>Demo 1: Understanding components, props & state</h2>
      <hr />
      <DemoComponents />
      <h2 class="mt-4">Demo 2: Cat images gallery</h2>
      <hr />
      <CatGallery />
    </Layout>
  );
}

export default App;
