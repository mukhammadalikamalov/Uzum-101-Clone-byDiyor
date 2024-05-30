import axios from "axios";
import { useQuery } from "react-query";
import ProductCard from "./components/ProductCard";
import PrimarySearchAppBar from "./layout/header";
import Usage from "./swiper/caroucel";
import { Container } from "@mui/material";
import Footer from "./layout/footer";

function Home() {
  const { data, isLoading, isError } = useQuery("goods", async () => {
    const res = await axios.get("http://localhost:3001/goods");
    return res.data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const likedGoods = data.filter((good) => good.status === true);
  const saleGoods = data.filter((good) => good.isBlackFriday);

  const sortedGoods = [...likedGoods, ...saleGoods];

  const slicedGoods = sortedGoods.slice(0, 15);

  const Armchairs = data.filter((good) => good.type === "furniture");

  const PC = data.filter((good) => good.type === "PC");

  const TV = data.filter((good) => good.type === "TV");

  const Audio = data.filter((good) => good.type === "audio");

  const Kitchen = data.filter((good) => good.type === "kitchen");

  const sections = [
    { slider: "", type: "Armchairs", arr: Armchairs },
    { slider: "", type: "PC", arr: PC },
    { slider: "", type: "TV", arr: TV },
    { slider: "", type: "Audio", arr: Audio },
    { slider: "", type: "Kitchen", arr: Kitchen },
  ];

  return (
    <>      <Container maxWidth="lg">

      <PrimarySearchAppBar />
      <Usage />
      <div className="prods_div">
        {slicedGoods.map((good) => (
          <ProductCard key={good.id} good={good} />
        ))}
      </div>
      {sections.map((item, i) => (
        <section key={i} className="section_style">
          <div>
            <h1>
              <p>{item.type}</p>
            </h1>
            <div className="prods_div">
              {item.arr.map((good) => (
                <ProductCard key={`${good.id}_${good.type}`} good={good} />
              ))}
            </div>
          </div>
        </section>

      ))}
      <Footer />
    </Container>
    </>
  );
}

export default Home;
