

const ProductCategory = () => {
    return (
        <div>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
  <TabList>
    <Tab>Title 1</Tab>
    <Tab>Title 2</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
        </div>
    );
};

export default ProductCategory;