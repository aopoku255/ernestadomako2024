import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import profile from "../src/assets/png/profile.jpg";
import ReactImageGallery from "react-image-gallery";
import img1 from "../src/assets/png/img1.jpg";
import img2 from "../src/assets/png/img2.jpg";
import img3 from "../src/assets/png/img3.jpg";
import img4 from "../src/assets/png/img4.jpg";
import img5 from "../src/assets/png/img5.jpg";
import img6 from "../src/assets/png/img6.jpg";
import img7 from "../src/assets/png/img7.jpg";
import img8 from "../src/assets/png/img8.jpg";
import img9 from "../src/assets/png/img9.jpg";
import img10 from "../src/assets/png/img10.jpg";

function App() {
  const [count, setCount] = useState(0);
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
  ];

  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* <!-- Sidebar --> */}
        <div className="bg-light border-right sidebar" id="sidebar-wrapper">
          <div className="sidebar-heading px-3 d-none d-sm-block">
            <h1 className="text-uppercase text_header mt-2">Ernest Adomako</h1>
            <h6>For The People Of Okaikoi South</h6>
          </div>
          <div className="list-group list-group-flush mt-5">
            <a
              href="#theAdomakoDream"
              className="list-group-item list-group-item-action bg-light"
            >
              The Adomako Dream
            </a>
            <a
              href="#visionForOkaikoiSouth"
              className="list-group-item list-group-item-action bg-light"
            >
              Vision For Okaikoi South
            </a>
            <a
              href="#gallery"
              className="list-group-item list-group-item-action bg-light"
            >
              Gallery
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-light"
            >
              Book An Appointment
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-light"
            >
              Let’s Talk
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-light"
            >
              Contact
            </a>
          </div>
        </div>

        <div id="page-content-wrapper ">
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom"></nav> */}

          {/* <!-- Main Content --> */}
          <div className="container-fluid main_page">
            <div>
              <div className="home_img">
                <div className="home_img_text">
                  <h1 className="">Ernest Adomako</h1>
                  <p className="text-warning">
                    For The People Of Okaikoi South
                  </p>
                </div>
                <img src={profile} alt="" className="img-fluid" />
              </div>
              <div id="theAdomakoDream">
                <h1 className="text_header text-center my-3 headers">ABOUT</h1>
                <h3 className="subheaders">Early Life</h3>
                <p>
                  Ernest Adomako was born in Kumasi in the Ashanti Region of
                  Ghana. The majority of his life has been spent within Okaikoi
                  south.
                </p>
                <h3 className="subheaders">Education</h3>
                <p>
                  He had his basic school education at Udra Barracks (Military
                  School) in Bantama, a suburb of Kumasi. He continued to Kumasi
                  Technical Institute where he studied Electrical engineering
                  for his senior high education and later studied at the Regent
                  University College where he received a Bachelor’s Degree in
                  Management with Computing from 2006 to 2008. He holds a
                  Master’s Degree in Marketing from Nasford University.
                </p>
                <h3 className="subheaders">Career</h3>
                <p>
                  He started his business in Okaikoi South in 1999 till date.{" "}
                </p>
                <h3 className="subheaders">The people</h3>
                <p>Contributing to the development of Okaikoi South</p>
              </div>
            </div>
            <div>
              <h1
                className="text_header text-center my-5 headers"
                id="visionForOkaikoiSouth"
              >
                VISION
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                repellendus eligendi. Maxime unde possimus nulla placeat magni
                temporibus voluptatum eum quas ipsum. Beatae temporibus possimus
                eum alias, illum et neque?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                dignissimos quisquam! Doloremque, perferendis fugiat, adipisci
                sit illo odit illum natus ad recusandae quisquam explicabo sequi
                laborum ratione magnam! Quam porro quod dolor nisi vitae esse
                mollitia, iure minus, ipsa deleniti enim, omnis consectetur
                saepe praesentium facilis culpa non eum. Assumenda sapiente,
                voluptatem cupiditate culpa fuga molestias commodi iusto, saepe
                temporibus laborum, adipisci praesentium ipsum a veritatis
                minima quos delectus laudantium aut nobis dignissimos molestiae
                amet veniam quam aliquid? Officiis rem ex dolore magnam sit
                autem expedita, sapiente rerum placeat beatae ea, similique
                neque odio voluptas aspernatur facere nam porro. Iure.
              </p>
              <h3 className="subheaders">Community Helping</h3>
              <div className="row">
                <img src={img6} alt="" className="rounded col-sm-6" />
                <img src={img10} alt="" className="rounded col-sm-6" />
              </div>
              <h3 className="subheaders my-3">Community Helping</h3>
              <p className="w-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                nobis eveniet nostrum earum hic, esse dolorum animi excepturi
                rerum velit tempore nemo veritatis ducimus qui mollitia quidem.
                Dicta adipisci sunt quod iste dolores illo minima, earum,
                eveniet facilis esse ab doloremque fugit nesciunt totam
                deleniti. Itaque illum molestias quas quis corporis! Facere
                officia veniam quos accusamus, quae voluptatem ratione odio rem
                iste dolore inventore nulla. Architecto temporibus quidem
                quibusdam doloribus officia odit hic perspiciatis error
                voluptate? Maxime harum earum repellendus iusto enim veritatis
                nesciunt consequatur libero neque corporis! Culpa asperiores ab
                sequi nobis neque deleniti reiciendis molestiae porro esse fuga
                unde fugit, maiores expedita similique officia, commodi eos
                explicabo voluptas animi ratione? Vel illo facere veritatis quod
                harum tempore tenetur consectetur, eum ab rerum reprehenderit,
                atque nesciunt deleniti iure dolorem sequi officia architecto
                dicta cum? Repellendus ratione provident magnam. Veniam
                recusandae numquam delectus dolore ab, expedita assumenda dolor
                repellat vero amet quidem eligendi ipsa perferendis illo
                voluptatem laudantium reprehenderit minus exercitationem fugiat
                fugit nesciunt tempora nisi? Neque ducimus sapiente esse rem
                voluptatum quia soluta pariatur perspiciatis numquam veritatis
                incidunt temporibus, similique accusantium quae distinctio
                culpa. Esse nulla officia, corporis quis at odio fuga voluptatum
                debitis laborum voluptatem incidunt veritatis exercitationem
                animi quae numquam est vitae enim praesentium et officiis odit
                beatae! Beatae doloremque exercitationem suscipit voluptatem
                similique quae quo, quis maiores iusto aliquid saepe voluptate
                minus non? Voluptatibus quidem illo consequatur suscipit sed
                quis ducimus illum maiores earum facilis asperiores quasi
                dolore, sapiente, odio reiciendis, soluta iure eos dicta optio
                aperiam dolores voluptatum recusandae. Facere natus odio illo
                error ab fugit saepe cupiditate deleniti, voluptates, ratione
                autem rem tempora quod impedit nesciunt aliquid tenetur ea
                ipsum! Dolores, nam illum. Reiciendis iure cumque maxime,
                consequuntur adipisci veritatis eveniet beatae magni nulla sunt,
                ipsum quam laboriosam sequi eligendi tempore ad facilis quae
                autem perspiciatis minus voluptates recusandae dignissimos quo.
                Placeat autem molestias ea veniam totam. Enim provident tempora
                nam ea iure. Fuga, excepturi sequi? Enim repudiandae repellat
                quia, inventore nostrum molestiae? Perferendis, veritatis
                suscipit reiciendis sequi reprehenderit fuga et. Doloremque
                eligendi fugiat temporibus, soluta, deserunt praesentium illum,
                eius harum possimus porro velit quis ipsam consequatur. Adipisci
                hic accusamus saepe consequatur sit nostrum voluptatibus vel
                impedit mollitia nisi magnam laboriosam praesentium fugiat
                nesciunt nam quis iste nobis, maiores est repudiandae, quod
                delectus non? Architecto ab sint delectus totam iusto aspernatur
                eos et suscipit, eligendi ullam officiis labore odit non aliquam
                numquam, illo iste vel esse reiciendis ipsum. Hic quasi in dicta
                minus iusto iure vero autem quos delectus corrupti, animi sint
                totam, alias nam ullam quae dolores repellat accusantium,
                possimus voluptatum. Voluptate aut voluptas deserunt id, nam
                neque ducimus esse molestiae recusandae praesentium enim modi
                ipsum magni voluptatibus excepturi doloribus adipisci
                consectetur a ipsam? Blanditiis similique, repellendus
                voluptatem dicta ratione nisi rem dolore praesentium cupiditate
                nesciunt magnam, dolores quod, explicabo adipisci at ipsam ut
                nobis odit officia sapiente eaque quam atque. Eveniet excepturi
                est ea sapiente doloribus expedita voluptatem accusamus. Omnis
                voluptate vel, quas repellat hic excepturi? Possimus, suscipit.
                Incidunt quis alias laborum?
              </p>
            </div>
            <div>
              <h1 className="text_header text-center my-5 headers" id="gallery">
                GALLERY
              </h1>
              <div className="image_gallery mx-auto">
                <ReactImageGallery
                  items={images}
                  autoPlay={true}
                  // useBrowserFullscreen={true}
                />
              </div>
            </div>
          </div>
          {/* <!-- /Main Content --> */}
        </div>
        {/* <!-- /Page Content --> */}
      </div>
    </>
  );
}

export default App;
