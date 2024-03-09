import BreadCrumb from "../componenets/common/BreadCrumb";
import Meta from "../componenets/common/Meta";
import StoreContainer from "../componenets/ourstore/StoreContainer";

function OurStore() {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <StoreContainer />
    </>
  );
}

export default OurStore;
