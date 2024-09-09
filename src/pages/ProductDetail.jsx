import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/layout/Container";
import Header from "../components/Header";
import ImageGallery from "../components/layout/ImageGalery";
import DetailView from "../components/DetailView";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../api/productSlice";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let images = ["", "", "", ""];
  const colorVarients = [];
  const uniqueProducts = [];
  const { id } = useParams();

  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  products &&
    products.forEach((data) => {
      data.Products.forEach((data2) => {
        if (data2.id == id) {
          uniqueProducts.push(data2);
          images = data2.imgUrls
          data2.Colors.forEach((data3) => {
            colorVarients.push(data3.name);
          });
        }
      });
    });

  console.log(images);

  uniqueProducts.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  return (
    <div className="bg-gray ">
      <MainLayout pageTitle="Ansania Hijab" className="flex flex-col gap-10">
        <Container>
          <Header className={"m-4"} />
          <section className="mt-[32px] flex flex-row justify-between items-start gap-4">
            <ImageGallery
              galleryImages={images}
              productName="My product name"
            />
            <DetailView
              productName={`${uniqueProducts[0]?.name} ${uniqueProducts[0]?.subName}`}
              colorVarients={colorVarients}
              about={
                <span>
                  Shadow Navy / Army Green
                  <br />
                  <br />
                  This product is excluded from all promotional discounts and
                  offers.
                </span>
              }
            />
          </section>
        </Container>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default ProductDetail;
